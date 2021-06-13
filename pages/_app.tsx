import type { AppProps } from "next/app";
import { Provider as PreOrderProvider } from "context/preorder";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PreOrderProvider>
      <Component {...pageProps} />
    </PreOrderProvider>
  );
}
export default MyApp;
