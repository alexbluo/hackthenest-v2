import { NextPage } from "next";
import Image from "next/image";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import HomeWrapper from "./HomeWrapper";
import AboutSection from "../sections/AboutSection";
import FAQSection from "../sections/FAQSection";
import FrontSection from "../sections/FrontSection";
import ScheduleSection from "../sections/ScheduleSection";
import SponsorsSection from "../sections/SponsorsSection";

// TODO: SEO and sitemaps https://nextjs.org/learn/seo/crawling-and-indexing
const Home = () => {
  return (
    <HomeWrapper>
      <FrontSection />
      <AboutSection />
      <ScheduleSection />
      <FAQSection />
      <SponsorsSection />
    </HomeWrapper>
  );
};

export default Home;
