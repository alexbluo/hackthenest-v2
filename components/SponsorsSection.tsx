import Sponsor from "./Sponsor";

const SponsorsSection = () => {
  return (
    <section className="h-screen" id="sponsors">
      <h2>Sponsors</h2>
      <p className="">
        Interested in sponsoring Hack the Nest 2023? Feel free to take a look at
        our prospectus and email sponsor@hackthenest.org!
      </p>
      <div className="flex flex-col gap-4">
        <div className="flex">
          <Sponsor path="/evan.jpg" alt="evan" />
        </div>
        <div className="flex gap-4 ">
          <Sponsor path="/evan.jpg" alt="evan" />
          <Sponsor path="/evan.jpg" alt="evan" />
        </div>
        <div className="flex gap-4">
          <Sponsor path="/evan.jpg" alt="evan" />
          <Sponsor path="/evan.jpg" alt="evan" />
          <Sponsor path="/evan.jpg" alt="evan" />
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
