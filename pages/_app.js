import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Gabriel Lamas | Product Designer | Portfolio</title>
        <meta
          name="description"
          content="Gabriel Lamas, Product Designer, portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
