import { useState, useEffect } from "react";

const useWindowWidth = () => {
  const getWindowWidth = () => {
    if (typeof window === "undefined") return 0;
    return window.innerWidth;
  };

  const [windowDimensions, setWindowDimensions] = useState(getWindowWidth());

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowDimensions(getWindowWidth());
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }

    return undefined;
  }, []);

  return windowDimensions;
};

export default useWindowWidth;
