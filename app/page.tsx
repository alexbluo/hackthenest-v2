import Image from "next/image";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import AboutSection from "./sections/AboutSection";
import FAQSection from "./sections/FAQSection";
import FrontSection from "./sections/FrontSection";
import ScheduleSection from "./sections/ScheduleSection";
import SponsorsSection from "./sections/SponsorsSection";

// TODO: SEO and sitemaps https://nextjs.org/learn/seo/crawling-and-indexing
// TODO: volunteer app
// TODO: admin table and qr check in
// TODO: content - modals, faq, etc.
// TODO: mobile schedule
// TODO: possibly aws bucket upload for waivers
// TODO: fix mobile menu bug
// TODO: app submission confirmation status text at dashboard top green bg with param passed to router function onsubmit
const Home = async () => {
  return (
    <div className="gradient-bg relative text-white">
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
      <NavBar />
      <main className="relative z-0">
        <FrontSection />
        <AboutSection />
        {/* <ScheduleSection /> */}
        <FAQSection />
        <SponsorsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
