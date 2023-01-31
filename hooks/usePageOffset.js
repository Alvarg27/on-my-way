import { useContext, useEffect, useState } from "react";

import PageOffsetContext from "../context/PageOffsetProvider";

const usePageOffset = () => {
  const { offsetY, setOffsetY, prevOffset, setPrevOffset, scrollDirection } =
    useContext(PageOffsetContext);
  const hasWindow = typeof window !== "undefined";

  function getWindowDimensions() {
    const height = hasWindow ? window.innerHeight - 50 : null;
    return height;
  }

  const [windowHeight, setWindowHeight] = useState(getWindowDimensions());

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowHeight(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);

  return {
    offsetY,
    setOffsetY,
    prevOffset,
    setPrevOffset,
    windowHeight,
    scrollDirection,
  };
};

export default usePageOffset;
