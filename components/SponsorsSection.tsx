import Sponsor from "./Sponsor";

const SponsorsSection = () => {
  return (
    <section id="sponsors">
      <h2>Sponsors</h2>
      <p className="pb-6">
        Interested in sponsoring? Take a look at our&nbsp;
        <a
          className="font-bold text-blue-mid underline"
          href="https://alexluo.notion.site/prospectus-c5fd45bdebaf4957abeb5add12706d58"
        >
          prospectus
        </a>{" "}
        and email&nbsp;
        <a className="font-bold text-blue-mid underline">
          sponsor@hackthenest.org
        </a>
        !
      </p>
      <div className="flex flex-col gap-6">
        {/* TODO: center bottom row and dont require separate flex for each row like in team */}
        <div className="flex">
          <Sponsor path="/wolfram.png" alt="evan" />
        </div>
        {/* <div className="flex gap-6">
          <Sponsor path="/evan.jpg" alt="evan" />
          <Sponsor path="/evan.jpg" alt="evan" />
        </div>
        <div className="flex gap-6">
          <Sponsor path="/evan.jpg" alt="evan" />
          <Sponsor path="/evan.jpg" alt="evan" />
          <Sponsor path="/evan.jpg" alt="evan" />
        </div> */}
      </div>
    </section>
  );
};

export default SponsorsSection;
