import { AppProps } from "next/app";
import Head from "next/head";
import "../index.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo-colored.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
