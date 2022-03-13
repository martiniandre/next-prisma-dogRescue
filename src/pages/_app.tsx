import { AppProps } from "next/app";
import { SessionProvider } from "../context/session";
import GlobalStyles from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SessionProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;
