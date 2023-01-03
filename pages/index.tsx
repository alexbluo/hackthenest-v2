import { NextPage } from "next";
import Head from "next/head";
import AboutSection from "../components/AboutSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import FrontSection from "../components/FrontSection";
import NavBar from "../components/NavBar";
import ScheduleSection from "../components/ScheduleSection";
import SponsorsSection from "../components/SponsorsSection";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hack the Nest 2023</title>
      </Head>
        <NavBar />
        <main>
          <FrontSection />
          <AboutSection />
          <ScheduleSection />
          <FAQSection />
          <SponsorsSection />
        </main>
        <Footer />
    </>
  );
};

export default Home;
