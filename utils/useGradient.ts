import { useEffect, useState } from "react";
import Bowser from "bowser";

type Gradient = "gradient" | "gradient-webkit" | "gradient-moz";

/**
 * Detects the browser client-side and returns a gradient class of type Gradient.
 * @returns the name of the CSS gradient class
 */
const useGradient = (): Gradient => {
  const [gradient, setGradient] = useState<Gradient>("gradient");

  // wait for Next.js server render before hydrating for access to window object
  useEffect(() => {
    const browser = Bowser.getParser(window.navigator.userAgent);

    const browserName = browser.getBrowserName();
    console.log(browserName)
    if (browserName === "Firefox") {
      setGradient("gradient-moz");
    } else if (browserName === "Safari") {
      setGradient("gradient-webkit");
    }
  });

  // not returning state is cleaner and makes more sense
  return gradient;
};

export default useGradient;
