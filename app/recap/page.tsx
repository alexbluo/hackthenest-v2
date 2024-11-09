import Image from "next/image";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import FrontSection from '../sections/FrontSection/index'
import RecapSection from "../sections/RecapSection/index";
import useHackerText from "utils/useHackerText";
import { useEffect } from "react";

const Page = async () => {

  return (
    <div className="bg-black relative text-white">
      <NavBar />
      <main className="relative z-0">
        <RecapSection />
      </main>
      <Footer />
    </div>
  );
};

export default Page;
