// import Header from "../layout/Header";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import "aos/dist/aos.css";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../layout/Header"), { ssr: false });

function MyApp({ Component, pageProps, router }) {
  return (
    <div>
      <ThemeProvider enableSystem={true} attribute="class">
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
