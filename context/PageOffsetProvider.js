import { createContext, useEffect, useState } from "react";

const PageOffsetContext = createContext({});

export const PageOffsetProvider = ({ children }) => {
  const [scrollDirection, setScrollDirection] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [prevOffset, setPrevOffset] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function (event) {
      function debounce(func, wait, immediate) {
        var timeout;
        return function () {
          var context = this,
            args = arguments;
          var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
          };
          var callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) func.apply(context, args);
        };
      }

      var myEfficientFn = debounce(function () {}, 25);

      window.addEventListener("mousemove", myEfficientFn), false;
    });
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.addEventListener(
      "touchmove",
      function (e) {
        e.preventDefault();
      },
      false
    );
  }, []);

  useEffect(() => {
    setScrollDirection(Math.sign(offsetY - prevOffset));
    setPrevOffset(offsetY);
  }, [offsetY]);

  return (
    <PageOffsetContext.Provider
      value={{
        offsetY,
        setOffsetY,
        prevOffset,
        setPrevOffset,
        scrollDirection,
      }}
    >
      {children}
    </PageOffsetContext.Provider>
  );
};

export default PageOffsetContext;
