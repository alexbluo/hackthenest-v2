import Sponsor from "../components/Sponsor";
import useGradient from "../utils/useGradient";

const SponsorsSection = () => {
  return (
    <section id="sponsors">
      <h2 className={useGradient()}>Sponsors</h2>
      <p className="pb-6">
        Interested in sponsoring? Feel free to take a look at our&nbsp;
        <a
          className={`${useGradient()} bg-clip-text font-bold text-transparent underline`}
          href="https://alexluo.notion.site/prospectus-c5fd45bdebaf4957abeb5add12706d58"
          target="_blank"
          rel="noreferrer"
        >
          prospectus
        </a>
        &nbsp;and email&nbsp;
        <a
          className={`${useGradient()} bg-clip-text font-bold text-transparent underline`}
          href="mailto:sponsor@hackthenest.org"
        >
          sponsor@hackthenest.org
        </a>
        !
      </p>
      {/* TODO: stack vertically full width on mobile */}
      <div className="flex flex-col gap-6">
        {/* gold tier  */}
        <div className="grid gap-6" />
        {/* silver tier */}
        <div className="grid gap-6 sm:grid-cols-2" />
        {/* bronze tier */}
        <div className="grid gap-6 sm:grid-cols-3">
          <Sponsor
            src="/janestreet.png"
            alt="Jane Street bronze sponsorship"
            href="https://www.janestreet.com/"
            tier="bronze"
          />
          <Sponsor
            src="/wolfram.png"
            alt="Wolfram bronze sponsorship"
            href="https://www.wolframalpha.com/"
            tier="bronze"
          />
          <Sponsor
            src="/nsp.png"
            alt="No Starch Press Bronze Sponsorships"
            href="https://nostarch.com/"
            tier="bronze"
          />
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
