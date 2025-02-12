import React, { useEffect, useState, ReactNode } from "react";

interface UseDelayProps {
  waitBeforeShow: number;
  color?: string;
  children: ReactNode;
}

const UseDelay: React.FC<UseDelayProps> = ({
  waitBeforeShow,
  color,
  children,
}) => {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setHidden(false);
    }, waitBeforeShow);

    return () => clearTimeout(timeoutId);
  }, [waitBeforeShow]);

  return <div className={color}>{hidden ? "" : children}</div>;
};

export default UseDelay;
