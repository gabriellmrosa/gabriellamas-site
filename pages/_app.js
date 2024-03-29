import Head from "next/head";
import CSSReset from "../src/CSSReset";
import { ThemeProvider } from "styled-components";
import ColorModeProvider, {
  ColorModeContext,
} from "../src/components/themeSwitcher/ColorModeProvider";
import { useContext } from "react";

function ProviderWrapper(props) {
  return (
    <ColorModeProvider initialMode={"light"}>
      {props.children}
    </ColorModeProvider>
  );
}

export function MyApp({ Component, pageProps }) {
  const themes = {
    light: {
      backgroundBase: "#fcfcfc",
      backgroundBaseThemeSwitcher: "#D9D9D9",
      textColor900: "#212121",
      textColor800: "#424242",
      textColor700: "#616161",
      textColor600: "#757575",
      textColor500: "#9E9E9E",
      textColor400: "#BDBDBD",
      textColor300: "#E0E0E0",
    },
    dark: {
      backgroundBase: "#151515",
      backgroundBaseThemeSwitcher: "#3C3C3C",
      textColor900: "#E0E0E0",
      textColor800: "#BDBDBD",
      textColor700: "#9E9E9E",
      textColor600: "#757575",
      textColor500: "#616161",
      textColor400: "#424242",
      textColor300: "#212121",
    },
  };

  const context = useContext(ColorModeContext);

  return (
    <ThemeProvider theme={themes[context.mode]}>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="apple-touch-icon.png"
        />
        <link
          rel="shortcut icon"
          type="image/png"
          sizes="32x32"
          href="favicon-32x32.png"
        />
        <link
          rel="shortcut icon"
          type="image/png"
          sizes="16x16"
          href="favicon-16x16.png"
        />
        <link rel="manifest" href="site.webmanifest" />
        <link rel="mask-icon" href="safari-pinned-tab.svg" color="#5bbad5" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default function _App(props) {
  return (
    <ProviderWrapper>
      <MyApp {...props} />
    </ProviderWrapper>
  );
}
