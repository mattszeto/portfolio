import React, { useEffect, useState } from "react";

const useDelay = (props) => {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setHidden(false);
    }, props.waitBeforeShow);
  }, [props.waitBeforeShow]);

  return <div className={props.color}>{hidden ? "" : props.children}</div>;
};

export default useDelay;
