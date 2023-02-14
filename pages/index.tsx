import classNames from "classnames";
import { useCycle } from "framer-motion";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import AboutSection from "../sections/About";
import FAQSection from "../sections/FAQ";
import FrontSection from "../sections/Front";
import ScheduleSection from "../sections/Schedule";
import SponsorsSection from "../sections/Sponsors";
import useGradient from "../utils/useGradient";

const Home: NextPage = () => {
  const [open, toggleOpen] = useCycle(false, true);

  return (
    <>
      <Head>
        <title>Hack the Nest</title>
      </Head>
      <div
        className={classNames(useGradient(), "text-white relative", {
          "fixed left-0 right-0 top-0 md:static": open,
        })}
      >
        <div className="absolute top-0 left-0 h-full w-screen">
          <Image
            className="object-cover sm:object-fill"
            src="/background.png"
            alt="placeholder"
            fill
          />
        </div>
        <NavBar open={open} toggleOpen={toggleOpen} />
        <main className="z-0 relative">
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
