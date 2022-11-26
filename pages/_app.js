// import Header from "../layout/Header";
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import 'aos/dist/aos.css';
import dynamic from 'next/dynamic';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
const Header = dynamic(() => import('../layout/Header'), { ssr: false });
function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    AOS.init({ duration: 1000, asing: 'ease-out-cubic' });
    AOS.refresh();
  }, []);
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
