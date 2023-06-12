import classNames from "classnames";
// import { useCycle } from "framer-motion";
import { NextPage } from "next";
import Image from "next/image";
import Footer from "./(components)/Footer";
import NavBar from "./(components)/NavBar";
import AboutSection from "./(sections)/AboutSection";
import FAQSection from "./(sections)/FAQSection";
import FrontSection from "./(sections)/FrontSection";
import ScheduleSection from "./(sections)/ScheduleSection";
import SponsorsSection from "./(sections)/SponsorsSection";
import useGradient from "../utils/useGradient";

// TODO: SEO and sitemaps https://nextjs.org/learn/seo/crawling-and-indexing
const Index: NextPage = () => {
  // const [open, toggleOpen] = useCycle(false, true);

  return (
    <>
      <head>
        <title>Hack the Nest</title>
      </head>
      <div
      // className={classNames(useGradient(), "text-white", {
      //   relative: !open,
      //   "fixed left-0 right-0 top-0": open,
      // })}
      >
        <div className="absolute left-0 top-0 h-full w-full">
          <Image
            className="object-cover object-top"
            src="/background.png"
            alt="Website background"
            fill
            priority
            unoptimized
          />
        </div>
        {/* <NavBar open={open} toggleOpen={toggleOpen} /> */}
        <main className="relative z-0">
          <FrontSection />
          <AboutSection />
          {/* <ScheduleSection /> */}
          <FAQSection />
          <SponsorsSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
