import useGradient from "../../utils/useGradient";
import Sponsor from "../Sponsor";

const SponsorsSection = () => {
  return (
    <section id="sponsors">
      <div className="-mx-8 mb-8 inline-block rounded-r-full bg-black px-8 py-2 sm:rounded-full">
        <h2 className={useGradient()}>Sponsors</h2>
      </div>
      <p className="text-xl">
        Interested in sponsoring? Feel free to take a look at our{" "}
        <a
          className={`${useGradient()} bg-clip-text font-bold text-transparent underline`}
          href="/prospectus.pdf"
          target="_blank"
          rel="noreferrer"
        >
          prospectus
        </a>{" "}
        and email{" "}
        <a
          className={`${useGradient()} bg-clip-text font-bold text-transparent underline`}
          href="mailto:sponsor@hackthenest.org"
        >
          sponsor@hackthenest.org
        </a>
        !
      </p>
      <div className="flex flex-col gap-6">
        {/* gold tier  */}
        <div className="grid gap-6" />
        {/* silver tier */}
        <div className="grid grid-cols-2 gap-6" />
        {/* bronze tier */}
        <div className="grid grid-cols-3 gap-6">
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
