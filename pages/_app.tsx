import { useEffect } from "react";
import { Libre_Franklin, Hanken_Grotesk } from "@next/font/google";
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import * as gtag from "../utils/gtag";
import { GA_TRACKING_ID } from "../utils/gtag";
import "../index.css";

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-libre-franklin",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-hanken-grotesk",
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
    <>
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
      <SessionProvider session={session}>
        <div
          className={`${libreFranklin.variable} ${hankenGrotesk.variable} bg-[#ffeedb] font-sans`}
        >
          <Component {...pageProps} />
        </div>
      </SessionProvider>
    </>
  );
};

export default App;
