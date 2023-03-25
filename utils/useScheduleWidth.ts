import { useState, useEffect } from "react";

const useScheduleWidth = () => {
  const getWindowDimensions = () => {
    if (typeof window === "undefined") return 0;
    if (window.innerWidth > 768) return window.innerWidth * 0.5;
    return window.innerWidth * 0.8;
  };

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowDimensions(getWindowDimensions());
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }

    return undefined;
  }, []);

  return windowDimensions;
};

export default useScheduleWidth;
