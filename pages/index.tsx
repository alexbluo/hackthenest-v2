import { NextPage } from "next";
import Footer from "../components/Footer";
import FrontSection from "../components/FrontSection";
import NavBar from "../components/NavBar";

const Home: NextPage = () => {
  return (
    <div className="bg-raisin">
      <NavBar />
      <main>
        <FrontSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
