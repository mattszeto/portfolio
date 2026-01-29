import type { ReactNode } from "react";
import styled from "styled-components";

type MonitorProps = {
  children: ReactNode;
  className?: string;
};

const MonitorFrame = styled.div`
  position: relative;
  width: min(1200px, calc(100% - 32px));
  margin: 0 auto;
  padding: 16px;
  border-radius: 14px;
  border: 1px solid rgba(232, 234, 230, 0.16);
  background: rgba(232, 234, 230, 0.06);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);

  /* Acts like a "monitor" viewport for draggable windows */
  height: clamp(520px, 75vh, 900px);
  overflow: hidden;
`;

export default function Monitor({ children, className }: MonitorProps) {
  return (
    <MonitorFrame data-monitor-root="true" className={className}>
      {children}
    </MonitorFrame>
  );
}

