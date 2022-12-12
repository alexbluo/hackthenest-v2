import { NextPage } from "next";
import AboutSection from "../components/AboutSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import FrontSection from "../components/FrontSection";
import NavBar from "../components/NavBar";
import ScheduleSection from "../components/ScheduleSection";
import SponsorsSection from "../components/SponsorsSection";

const Home: NextPage = () => {
  return (
    <div className="bg-raisin">
      <NavBar />
      <main>
        <FrontSection />
        <AboutSection/>
        <ScheduleSection/>
        <FAQSection/>
        <SponsorsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
