import Stat from "../components/Stat";
import useGradient from "../utils/useGradient";

const AboutSection = () => {
  return (
    <section id="about">
      <div className="-mx-8 inline-block rounded-r-full bg-black py-2 px-8 sm:rounded-full">
        <h2 className={useGradient()}>About</h2>
      </div>
      <article className="-mx-8 mb-8 w-full rounded-r-3xl bg-black p-8 text-xl sm:w-3/4 sm:rounded-3xl">
        This April, Hack the Nest invites 250 high school students to a 36-hour
        hackathon in the heart of Maryland. Our team has been working tirelessly
        to pack our schedule to the brim with educational workshops, exciting
        side events, and exotic prizes. Whether it’s ping-pong without paddles
        or late-night debugging with cookies, our ultimate goal is to host an
        unforgettable experience for an audience normally barred from
        hackathons.
      </article>
      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
        <Stat stat="250+" caption="hackers" />
        <Stat stat="$10000+" caption="prizes" />
        <Stat stat="12" caption="workshops and side events" />
        <Stat stat="16" caption="sponsors" />
      </div>
    </section>
  );
};

export default AboutSection;
