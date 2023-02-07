import classNames from "classnames";
import { useCycle } from "framer-motion";
import { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import AboutSection from "../sections/About";
import FAQSection from "../sections/FAQ";
import FrontSection from "../sections/Front";
import ScheduleSection from "../sections/Schedule";
import SponsorsSection from "../sections/Sponsors";

const Home: NextPage = () => {
  const [open, toggleOpen] = useCycle(false, true);

  return (
    <>
      <Head>
        <title>Hack the Nest 2023</title>
      </Head>
      <div
        className={classNames("gradient text-white", {
          "fixed left-0 right-0 md:static": open,
        })}
      >
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
