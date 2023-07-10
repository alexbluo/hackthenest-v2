"use client";

import { useState, useEffect } from "react";

const useWindowWidth = () => {
  const getWindowWidth = () => {
    if (typeof window !== "undefined") return window.innerWidth;

    // satisfy type safety
    return 0;
  };

  const [width, setWidth] = useState(getWindowWidth());

  useEffect(() => {
    const handleResize = () => {
      setWidth(getWindowWidth());
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};

export default useWindowWidth;
