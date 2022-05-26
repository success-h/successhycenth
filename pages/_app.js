import Header from "../layout/Header";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence>
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
          pageExit: {
            backgroundColor: "white",
            opacity: 0,
            filter: "ease-out",
          },
        }}
      >
        <ThemeProvider enableSystem={true} attribute="class">
          <Header />
          <Component {...pageProps} />
        </ThemeProvider>
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
