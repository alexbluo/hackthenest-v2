import FAQ from "../components/FAQ";

const FAQSection = () => {
  return (
    <section id="faq">
      <h2 className="">FAQ</h2>
      <div className="flex flex-col gap-4 md:flex-row md:gap-16">
        <div className="flex w-full flex-col gap-4">
          <FAQ question="What is a hackathon?">
            Hackathons are collaborative multi-day events where participants
            (also called hackers) bring their ideas to life by building projects
            from scratch using software development principals. Aside from just
            being coding marathons/competitions, hackathons offer several fun
            side events, educational workshops for all skill levels, sponsor
            fairs, and an overall great atmosphere to hang out in!
          </FAQ>
          <FAQ question="How much does it cost?">
            Absolutely nothing! We&apos;ll take care of food, prizes, swag, and
            more.
          </FAQ>
          <FAQ question="What if I don't know how to code?">
            That&apos;s completely fine! In fact, many participants are first
            time hackers and beginners. Hack the Nest is a great chance to
            explore your interests while meeting new friends and interacting
            with familiar companies.
          </FAQ>
          <FAQ question="When are registrations due?">
            Registrations open February 1st and close April 1st. It only takes a
            few minutes so go for it!
          </FAQ>
          <FAQ question="Do I have to make a project?">
            You&apos;re not required to make a project to attend, but we
            strongly encourage that you do in order to get the full hackathon
            experience.
          </FAQ>
        </div>
        <div className="flex w-full flex-col gap-4">
          <FAQ question="Who is eligible to attend?">
            Hack the Nest is open to all high school students from anywhere. If
            you&apos;re not in high school but would still like to participate
            then we&apos;d love to have you as a mentor or volunteer!
          </FAQ>
          <FAQ question="How can I volunteer or mentor?">
            Details on volunteer and mentor registration will be released soon.
          </FAQ>
          <FAQ question="How do teams work?">
            There are up to four people per team and you get to choose, so bring
            your friends along! Don&apos;t worry if you do not have a team;
            we&apos;ll have two team formation sessions towards the beginning of
            the event, and you can always find a team beforehand through our
            Discord.
          </FAQ>
          <FAQ question="What are the overnight arrangements?">
            Due to limitations with our venue, hackers will return home around
            9:00 - 10:00pm. We strongly encourage you to carpool with your group
            and even stay over at a member&apos;s place. Feel free to keep
            working on your project in the wee hours - we&apos;ll even be
            hosting online video game tournaments!
          </FAQ>
          <FAQ question="I have more questions!">
            Contact hello@hackthenest.org and we&apos;ll get back to you as soon
            as possible.
          </FAQ>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;