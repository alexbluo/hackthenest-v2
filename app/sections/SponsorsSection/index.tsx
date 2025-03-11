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
        {/* placeholder */}
        {/* <div className="h-48 rounded-xl p-4 sm:p-8 bg-blue-light" aria-label="Sponsor link">
          <div className="flex justify-center items-center relative h-full">
            <h2 className="text-blue-dark">coming soon...</h2>
          </div>
        </div> */}

        {/* gold */}
        {/* <div className="grid gap-6">
          <Sponsor
            src="/theCoderSchool.png"
            alt="theCoderSchool gold sponsorship"
            href="https://www.thecoderschool.com/"
            tier="gold"
          />
        </div> */}
        <Sponsor
          src="/craignewmark.png"
          alt="Intelligent Office silver sponsorship"
          href="https://craignewmarkphilanthropies.org/"
          tier="gold"
        />

        {/* silver */}
        <div className="grid grid-cols-1 gap-6">
          {/* <Sponsor
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
          /> */}
          <Sponsor
            src="/intelligent-office.svg"
            alt="Intelligent Office silver sponsorship"
            href="https://www.intelligentoffice.com/"
            tier="silver"
          />

        </div>

        {/* bronze */}
        <div className="grid grid-cols-3 gap-6">
          <Sponsor
            src="/launchx.png"
            alt="LaunchX sponsorship"
            href="https://www.launchx.com/"
            tier="bronze"
          />
          <Sponsor
            src="/x-camp.png"
            alt="X-Camp sponsorship"
            href="https://x-camp.academy/"
            tier="bronze"
          />
          <Sponsor
            src="/aops.png"
            alt="AoPS sponsorship"
            href="https://artofproblemsolving.com/"
            tier="bronze"
          />
          <Sponsor
            src="/sja.png"
            alt="SJA sponsorship"
            href="https://www.studentjusticealliance.org/"
            tier="bronze"
          />
          <Sponsor
            src="/chagantifoundation.png"
            alt="Chaganti Foundation sponsorship"
            href="https://chagantifoundation.org/"
            tier="bronze"
          />
          <Sponsor
            src="/1password.png"
            alt="1Password sponsorship"
            href="https://1password.com/"
            tier="bronze"
          />
        </div>
        {/* <div className="grid grid-cols-3 gap-6">
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
            src="/bayun.png"
            alt="Bayun Systems bronze sponsorship"
            href="https://www.bayunsystems.com/"
            tier="bronze"
          />
          <Sponsor
            src="/inspiritai.png"
            alt="Inspirit AI bronze sponsorship"
            href="https://www.inspiritai.com/"
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
            alt="No Starch Press bronze sponsorship"
            href="https://nostarch.com/"
            tier="bronze"
          />
          <Sponsor
            src="/standout-stickers.png"
            alt="StandOut Stickers bronze sponsorship"
            href="http://hackp.ac/mlh-StandOutStickers-hackathons"
            tier="bronze"
          />
          <Sponsor
            src="/hcb.svg"
            alt="HCB bronze sponsorship"
            href="https://nostarch.com/"
            tier="bronze"
          />
        </div> */}
      </div>
    </section>
  );
};

export default SponsorsSection;
