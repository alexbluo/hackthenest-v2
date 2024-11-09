import Image from "next/image";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import AboutSection from "./sections/AboutSection";
import FAQSection from "./sections/FAQSection";
import FrontSection from "./sections/FrontSection";
import ScheduleSection from "./sections/ScheduleSection";
import SponsorsSection from "./sections/SponsorsSection";
import RecapSection from "./sections/RecapSection";

const MainPage = async () => {
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
                <ScheduleSection />
                <FAQSection />
                <SponsorsSection />
            </main>
            <Footer />
        </div>
    );
};

export default MainPage;
