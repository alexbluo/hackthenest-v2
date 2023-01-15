import classnames from "classnames";
import { useCycle } from "framer-motion";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import AboutSection from "../components/AboutSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import FrontSection from "../components/FrontSection";
import NavBar from "../components/NavBar";
import ScheduleSection from "../components/ScheduleSection";
import SponsorsSection from "../components/SponsorsSection";

const Home: NextPage = () => {
  const [open, toggleOpen] = useCycle(false, true);

  return (
    <>
      <Head>
        <title>Hack the Nest 2023</title>
      </Head>
      <div
        className={classnames("bg-[#ffeedb]", {
          "fixed left-0 right-0 md:static": open,
        })}
      >
        <NavBar open={open} toggleOpen={toggleOpen} />
        <a
          id="mlh-trust-badge"
          className="absolute right-4 top-0 z-50 hidden aspect-[571/1000] w-[10%] min-w-[60px] max-w-[100px] lg:block "
          href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=yellow"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-yellow.svg"
            alt="Major League Hacking 2023 Hackathon Season"
            fill
          />
        </a>
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
