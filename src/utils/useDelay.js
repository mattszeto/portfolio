import { useEffect, useState } from "react";

const useDelay = (props) => {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    console.log("component mounted!");
    setTimeout(() => {
      setHidden(false);
    }, props.waitBeforeShow);
  }, [props.waitBeforeShow]);

  return hidden ? "" : props.children;
};

export default useDelay;
