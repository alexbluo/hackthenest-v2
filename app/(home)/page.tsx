import Image from "next/image";
import useGradient from "utils/useGradient";
import HomeWrapper from "./HomeWrapper";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import AboutSection from "../sections/AboutSection";
import FAQSection from "../sections/FAQSection";
import FrontSection from "../sections/FrontSection";
import ScheduleSection from "../sections/ScheduleSection";
import SponsorsSection from "../sections/SponsorsSection";

// TODO: SEO and sitemaps https://nextjs.org/learn/seo/crawling-and-indexing
const Home = () => {
  return (
    <HomeWrapper>
      <NavBar />
      <main className="relative z-0">
        <FrontSection />
        <AboutSection />
        {/* <ScheduleSection /> */}
        <FAQSection />
        <SponsorsSection />
      </main>
      <Footer />
    </HomeWrapper>
  );
};

export default Home;
