"use client";

import { useState, useEffect } from "react";

const useWindowWidth = () => {
  const [windowDimensions, setWindowDimensions] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

export default useWindowWidth;
