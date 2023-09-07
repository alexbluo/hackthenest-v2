import Sponsor from "./Sponsor";

const SponsorsSection = () => {
  return (
    <section id="sponsors">
      <div className="-mx-8 inline-block rounded-r-full bg-black px-8 py-2 sm:rounded-br-none sm:rounded-tl-3xl sm:rounded-tr-3xl">
        <h2 className="gradient-text">sponsors</h2>
      </div>
      <p className="-mx-8 mb-8 rounded-3xl rounded-tl-none bg-black p-8 text-xl sm:w-fit">
        Interested in sponsoring? Feel free to take a look at our{" "}
        <a
          className="bg-clip-text font-semibold text-gold underline underline-offset-2"
          href="/prospectus.pdf"
          target="_blank"
          aria-label="Prospectus"
          rel="noreferrer"
        >
          prospectus
        </a>{" "}
        and email{" "}
        <a
          className="font-semibold text-gold underline underline-offset-2"
          href="mailto:sponsor@hackthenest.org"
          aria-label="Sponsor email"
        >
          sponsor@hackthenest.org
        </a>
        !
      </p>
      <div className="flex flex-col gap-6">
        {/* gold */}
        <div className="grid gap-6">
          <Sponsor
            src="/theCoderSchool.png"
            alt="theCoderSchool gold sponsorship"
            href="https://www.thecoderschool.com/"
            tier="gold"
          />
          {/* <Sponsor
            src="/.png"
            alt="Collins Aerospace gold sponsorship"
            href="https://www.collinsaerospace.com/"
            tier="gold"
          /> */}
        </div>

        {/* silver */}
        <div className="grid grid-cols-2 gap-6">
          <Sponsor
            src="/prhi.png"
            alt="PRHI silver sponsorship"
            href="https://www.patientsafetytech.com/"
            tier="silver"
          />
          <Sponsor
            src="/gramaco.png"
            alt="Gramaco silver sponsorship"
            href="https://www.gramaco.com/"
            tier="silver"
          />
          <Sponsor
            src="/xten-av.png"
            alt="XTEN-AV silver sponsorship"
            href="https://xtenav.com/"
            tier="silver"
          />
        </div>

        {/* bronze */}
        <div className="grid grid-cols-3 gap-6">
          <Sponsor
            src="/c-hit.png"
            alt="C-HIT bronze sponsorship"
            href="https://www.c-hit.com/"
            tier="bronze"
          />
          <Sponsor
            src="/jane-street.png"
            alt="Jane Street bronze sponsorship"
            href="https://www.janestreet.com/"
            tier="bronze"
          />
          <Sponsor
            src="/verbwire.svg"
            alt="Verbwire bronze sponsorship"
            href="https://www.verbwire.com/"
            tier="bronze"
          />
          <Sponsor
            src="/wolfram.png"
            alt="Wolfram bronze sponsorship"
            href="https://www.wolframalpha.com/"
            tier="bronze"
          />
          <Sponsor
            src="/no-starch-press.png"
            alt="No Starch Press Bronze Sponsorships"
            href="https://nostarch.com/"
            tier="bronze"
          />
          <Sponsor
            src="/standout-stickers.png"
            alt="StandOut Stickers bronze sponsorship"
            href="http://hackp.ac/mlh-StandOutStickers-hackathons"
            tier="bronze"
          />
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
