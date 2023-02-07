const AboutSection = () => {
  return (
    <section className="" id="about">
      <h2>About</h2>
      <div className="grid grid-cols-2 gap-8">
        <div className="text-xl">
          This April, Hack the Nest invites 250 young developers on the east
          coast to a 36-hour hackathon in the heart of Maryland. Our team has
          been working tirelessly alongside our administration to pack our
          schedule to the brim with educational workshops, exciting side events,
          and exotic prizes. Whether it’s ping-pong without paddles or
          late-night debugging with cookies, our ultimate goal is to host an
          unforgettable experience for an audience of hackers normally barred
          from hackathons.
        </div>
        <div className="text-center" />
        <div className="text-center" />
        <div className="text-xl">
          <p className="pb-2">
            Here at Hack the Nest, we believe that the ideal hackathon
            experience consists of the following:
          </p>
          <p>
            <span className="font-semibold text-gold">40%</span> building and
            designing innovative projects
          </p>
          <p>
            <span className="font-semibold text-gold">30%</span> attending
            workshops and side events
          </p>
          <p>
            <span className="font-semibold text-gold">40%</span> interacting and
            developing alongside sponsors
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
