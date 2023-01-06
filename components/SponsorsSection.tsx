import Sponsor from "./Sponsor";
import Link from "next/link";

const SponsorsSection = () => {
  return (
    <section className="h-screen" id="sponsors">
      <h2>Sponsors</h2>
      <div className="flex flex-col gap-4">
        <div className="flex">
          
          <Sponsor path="/evan.jpg" alt="evan"/>
        
        </div>
        <div className="flex gap-4 ">
          <Sponsor path="/evan.jpg" alt="evan"/>
          <Sponsor path="/evan.jpg" alt="evan"/>
        </div>
        <div className="flex gap-4">
          <Sponsor path="/evan.jpg" alt="evan"/>
          <Sponsor path="/evan.jpg" alt="evan"/>
          <Sponsor path="/evan.jpg" alt="evan"/>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
