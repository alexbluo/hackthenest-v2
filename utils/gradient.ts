import Bowser from "bowser";

type Gradient = "bg-gradient-stationary" | "bg-gradient-animated" | undefined;

// determine the gradient string based on client vs server
export const gradient = async (): Promise<Gradient> => {
  let engine;
  if (typeof window === "undefined") {
    // import("next/server").then(({ userAgent }) =>
    //   import("next/headers").then(({ headers }) => {
    //     console.log(userAgent({ headers: headers() }).engine);
    //     engine = userAgent({ headers: headers() }).engine;
    //   })
    // )
    const { userAgent } = await import("next/server");
    const { headers } = await import("next/headers");
    engine = userAgent({ headers: headers() }).engine;
  } else {
    const browser = Bowser.getParser(window.navigator.userAgent);
    engine = browser.getEngine();
  }

  const engineName = engine.name;
  const engineVersion = engine.version;

  if (!engineVersion) {
    return "bg-gradient-stationary";
  }
  if (engineName === "WebKit" && engineVersion >= "16.4") {
    return "bg-gradient-animated";
  }
  if (engineName === "Blink") {
    return "bg-gradient-animated";
  }
  return "bg-gradient-stationary";
};
