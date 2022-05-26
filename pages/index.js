import { DefaultSeo, NextSeo } from "next-seo";
import Head from "next/head";
import { About } from "../components/About";
import Contact from "../components/Contact";
import { Hero } from "../components/Hero";
import Projects from "../components/Projects";
import Stat from "../components/Stat";
import Technology from "../components/Technology";
import siteConfig from "../config/siteConfig";
import { fetchData } from "../lib/FetchData";

export const getStaticProps = async () => {
  const projects = await fetchData("projects");
  const about = await fetchData("about");
  const contact = await fetchData("contact");
  const technologies = await fetchData("technologies");
  return {
    props: {
      projects,
      about,
      contact,
      technologies,
    },
    revalidate: 60,
  };
};

export default function Home({ projects, about, contact, technologies }) {
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
