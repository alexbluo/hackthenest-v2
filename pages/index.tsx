import { NextPage } from "next";
import Head from "next/head";
import AboutSection from "../components/AboutSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import FrontSection from "../components/FrontSection";
import NavBar from "../components/NavBar";
import ScheduleSection from "../components/ScheduleSection";
import SponsorsSection from "../components/SponsorsSection";
import { useCycle } from "framer-motion";
import classnames from "classnames";

const Home: NextPage = () => {
  const [open, toggleOpen] = useCycle(false, true);

  return (
    <>
      <Head>
        <title>Hack the Nest 2023</title>
      </Head>
      <div className={classnames("bg-[#ffeedb]", {
        "fixed left-0 right-0 lg:static": open,

      })}>
      
        <NavBar open={open} toggleOpen={toggleOpen} />
        <main>
          <FrontSection />
          <AboutSection />
          <ScheduleSection />
          <FAQSection />
          <SponsorsSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
