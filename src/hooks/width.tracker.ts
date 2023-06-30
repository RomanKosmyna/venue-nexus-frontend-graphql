import {useEffect, useState} from "react";

export const useWidthTracker = () => {
  const [innerWidth, setInnerWidth] = useState<number>(0);

  useEffect(() => {
      const handleWidth = () => {
          setInnerWidth(window.innerWidth);
      };

      setInnerWidth(window.innerWidth);

      window.addEventListener("resize", handleWidth);

      return () => {
        window.removeEventListener("resize", handleWidth);
      };
  },[]);

  return innerWidth;
};