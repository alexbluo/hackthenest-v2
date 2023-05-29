/* eslint-disable @typescript-eslint/naming-convention */
import { useEffect } from "react";
import { AppProps } from "next/app";
import {
  Source_Code_Pro,
  Flow_Circular,
  Source_Sans_Pro,
  IBM_Plex_Mono,
  IBM_Plex_Sans,
} from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import { SessionProvider } from "next-auth/react";
import * as gtag from "../utils/gtag";
import { GA_TRACKING_ID } from "../utils/gtag";
import "../index.css";

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sans",
});

const flow_circular = Flow_Circular({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-flow-circular",
});

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <SessionProvider session={session}>
      <Head>
        <link rel="icon" href="/logo-colored.png" />
      </Head>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="ganalytics"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
          `,
        }}
      />
      <div
        className={`${mono.variable} ${sans.variable} ${flow_circular.variable} font-sans`}
      >
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
};

export default App;
