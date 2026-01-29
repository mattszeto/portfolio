import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Draggable from "react-draggable";
import {
  MiniContainer,
  MiniSquareContainer,
  TextContainer,
  WindowBar,
  Container,
  SquareContainer,
} from "./TextContainers";
import ConditionalWrapper from "../utils/ConditionalWrapper";

interface WindowProps {
  size: "s" | "m";
  draggable: boolean;
  children: React.ReactNode;
}

type Bounds = { top: number; left: number; right: number; bottom: number };
type Position = { x: number; y: number };

let globalTopZIndex = 1;
const MIN_VISIBLE_PX = 40;
const MIN_TITLEBAR_VISIBLE_PX = 12;

function clamp(n: number, min: number, max: number) {
  return Math.min(Math.max(n, min), max);
}

function Window({ size, draggable, children }: WindowProps) {
  // `react-draggable` uses this ref instead of deprecated `findDOMNode` (React 18).
  const nodeRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef<Position>({ x: 0, y: 0 });

  const [bounds, setBounds] = useState<Bounds>({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  });
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [zIndex, setZIndex] = useState(() => {
    globalTopZIndex += 1;
    return globalTopZIndex;
  });

  const setPositionBoth = useCallback((next: Position) => {
    positionRef.current = next;
    setPosition(next);
  }, []);

  const bringToFront = useCallback(() => {
    globalTopZIndex += 1;
    setZIndex(globalTopZIndex);
  }, []);

  const recalcBoundsAndClamp = useCallback(() => {
    const node = nodeRef.current;
    if (!node) return;

    const monitor = node.closest('[data-monitor-root="true"]') as HTMLElement | null;
    if (!monitor) return;

    const monitorRect = monitor.getBoundingClientRect();
    const nodeRect = node.getBoundingClientRect();
    const titleBar =
      node.querySelector<HTMLElement>(".window-drag-handle") ?? null;

    // `getBoundingClientRect()` includes the current drag transform.
    // For stable bounds (especially when windows start in different layout positions),
    // compute using the un-transformed rect (layout position) by removing the current
    // draggable translation.
    const { x, y } = positionRef.current;
    const baseLeft = nodeRect.left - x;
    const baseTop = nodeRect.top - y;

    const nodeLeftInMonitor = baseLeft - monitorRect.left;
    const nodeTopInMonitor = baseTop - monitorRect.top;

    const monitorWidth = monitor.clientWidth;
    const monitorHeight = monitor.clientHeight;
    const nodeWidth = node.offsetWidth;
    const nodeHeight = node.offsetHeight;
    const titleBarHeight = titleBar?.getBoundingClientRect().height ?? 22;

    // "Soft" bounds: allow moving windows partially out of the monitor (they'll be clipped),
    // but keep at least MIN_VISIBLE_PX inside so the window can always be grabbed again.
    const minVisibleX = Math.min(MIN_VISIBLE_PX, monitorWidth);

    // Keep the drag handle (title bar) always at least partially visible so the user can
    // drag the window back into view.
    const minTitleVisibleY = Math.min(
      MIN_TITLEBAR_VISIBLE_PX,
      titleBarHeight,
      monitorHeight
    );

    const nextBounds: Bounds = {
      // leftmost: window's right edge stays >= minVisibleX inside monitor
      left: -(nodeLeftInMonitor + nodeWidth - minVisibleX),
      // rightmost: window's left edge stays <= (monitorWidth - minVisibleX)
      right: monitorWidth - nodeLeftInMonitor - minVisibleX,

      // Vertical bounds are based on the title bar, not the whole window:
      // - If dragged upward, keep at least `minTitleVisibleY` of the title bar visible.
      //   titleBarBottom = (nodeTopInMonitor + y) + titleBarHeight >= minTitleVisibleY
      //   => y >= -nodeTopInMonitor - (titleBarHeight - minTitleVisibleY)
      top: -nodeTopInMonitor - (titleBarHeight - minTitleVisibleY),
      // - If dragged downward, keep at least `minTitleVisibleY` of the title bar visible.
      //   titleBarTop = (nodeTopInMonitor + y) <= monitorHeight - minTitleVisibleY
      //   => y <= monitorHeight - minTitleVisibleY - nodeTopInMonitor
      bottom: monitorHeight - minTitleVisibleY - nodeTopInMonitor,
    };

    setBounds(nextBounds);

    // If a window is larger than the monitor, bounds can invert; keep clamping safe.
    const minX = Math.min(nextBounds.left, nextBounds.right);
    const maxX = Math.max(nextBounds.left, nextBounds.right);
    const minY = Math.min(nextBounds.top, nextBounds.bottom);
    const maxY = Math.max(nextBounds.top, nextBounds.bottom);

    setPositionBoth({
      x: clamp(positionRef.current.x, minX, maxX),
      y: clamp(positionRef.current.y, minY, maxY),
    });
  }, []);

  // Measure ASAP after layout so startup positions are clamped predictably.
  useLayoutEffect(() => {
    recalcBoundsAndClamp();
  }, [recalcBoundsAndClamp]);

  // Keep bounds + position clamped when the viewport changes.
  useEffect(() => {
    window.addEventListener("resize", recalcBoundsAndClamp);
    return () => window.removeEventListener("resize", recalcBoundsAndClamp);
  }, [recalcBoundsAndClamp]);

  // Keep bounds + position clamped when the window content size changes
  // (and when the monitor size changes).
  useEffect(() => {
    const node = nodeRef.current;
    if (!node || typeof ResizeObserver === "undefined") return;

    const ro = new ResizeObserver(() => recalcBoundsAndClamp());
    ro.observe(node);

    const monitor = node.closest('[data-monitor-root="true"]') as HTMLElement | null;
    if (monitor) ro.observe(monitor);
    return () => ro.disconnect();
  }, [recalcBoundsAndClamp]);

  const renderContent = () => {
    if (size === "s") {
      return (
        <MiniContainer
          ref={nodeRef}
          style={{ zIndex, position: "relative" }}
          onMouseDownCapture={bringToFront}
          onTouchStartCapture={bringToFront}
        >
          <MiniSquareContainer>
            <WindowBar className="window-drag-handle" />
            <TextContainer>{children}</TextContainer>
          </MiniSquareContainer>
        </MiniContainer>
      );
    } else if (size === "m") {
      return (
        <Container
          ref={nodeRef}
          style={{ zIndex, position: "relative" }}
          onMouseDownCapture={bringToFront}
          onTouchStartCapture={bringToFront}
        >
          <SquareContainer>
            <WindowBar className="window-drag-handle" />
            <TextContainer>{children}</TextContainer>
          </SquareContainer>
        </Container>
      );
    }
    return null;
  };

  const draggableWrapper = useMemo(
    () => (wrappedChildren: React.ReactNode) => (
      <Draggable
        nodeRef={nodeRef}
        bounds={bounds}
        position={position}
        handle=".window-drag-handle"
        onStart={() => bringToFront()}
        onDrag={(_, data) => setPositionBoth({ x: data.x, y: data.y })}
        onStop={(_, data) => setPositionBoth({ x: data.x, y: data.y })}
      >
        {wrappedChildren}
      </Draggable>
    ),
    [bounds, bringToFront, position, setPositionBoth]
  );

  return (
    <ConditionalWrapper
      condition={draggable}
      wrapper={draggableWrapper}
    >
      {renderContent()}
    </ConditionalWrapper>
  );
};

export default Window;
