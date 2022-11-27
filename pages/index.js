import { DefaultSeo, NextSeo } from 'next-seo';
import Head from 'next/head';

import siteConfig from '../config/siteConfig';
import dynamic from 'next/dynamic';

const About = dynamic(
  () => import('../components/About').then((mod) => mod.About),
  { ssr: false }
);
const Contact = dynamic(() => import('../components/Contact'), { ssr: false });
const Hero = dynamic(
  () => import('../components/Hero').then((mod) => mod.Hero),
  { ssr: false }
);
const Projects = dynamic(() => import('../components/Projects'), {
  ssr: false,
});
const Stat = dynamic(() => import('../components/Stat'), { ssr: false });
const Technology = dynamic(() => import('../components/Technology'), {
  ssr: false,
});

export default function Home({ projects, about, contact, technologies }) {
  useEffect(() => {
    AOS.init({ duration: 1000, asing: 'ease-out-cubic' });
    AOS.refresh();
  }, []);
  return (
    <div className="scroll-smooth">
      <Head>
        <title>Success Hycenth - Portfolio Website</title>
        <meta
          name="Made by hycenth Success"
          content="Here i share some important informations about me and my works in the past"
        />
        <meta
          name="google-site-verification"
          content="hpjDSIRDEDx2Pah49DRsvBBLKtSGwChtgoBqMjv6W5Q"
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <NextSeo
        title="Home - Hycenth Success"
        description="Welcome to my portfolio website... I'm a software developer and i will be sharing my experence here."
      />
      <div id="home"></div>
      <DefaultSeo {...siteConfig.seo} />

      <Hero />
      <Stat />
      <About about={about} />
      <Projects projects={projects} />
      <Technology technologies={technologies} />
      <Contact contact={contact} />
    </div>
  );
}
