import { useState, useEffect } from "react";

export default function useWindowDimensions() {
  const hasWindow = typeof window !== "undefined";

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    let breakPoint;
    if (width < 768) {
      breakPoint = "sm";
    }
    if (width > 768) {
      breakPoint = "md";
    }
    if (width > 1024) {
      breakPoint = "lg";
    }
    if (width > 1280) {
      breakPoint = "xl";
    }
    return {
      width,
      height,
      breakPoint,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);

  return windowDimensions;
}
