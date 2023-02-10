import Stat from "../components/Stat";

const AboutSection = () => {
  return (
    <section id="about">
      <h2>About</h2>
      <div className="w-full pb-16 text-xl sm:w-3/4">
        This April, Hack the Nest invites 250 high school students to a 36-hour
        hackathon in the heart of Maryland. Our team has been working tirelessly
        to pack our schedule to the brim with educational workshops, exciting
        side events, and exotic prizes. Whether it’s ping-pong without paddles
        or late-night debugging with cookies, our ultimate goal is to host an
        unforgettable experience for an audience normally barred from
        hackathons.
      </div>
      <div className="grid grid-cols-4 gap-8">
        <Stat stat="250+" caption="hackers" />
        <Stat stat="$10000+" caption="prizes" />
        <Stat stat="12" caption="workshops and side events" />
        <Stat stat="16" caption="sponsors" />
      </div>
    </section>
  );
};

export default AboutSection;
