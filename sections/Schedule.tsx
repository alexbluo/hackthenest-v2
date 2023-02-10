import useGradient from "../utils/useGradient";

const ScheduleSection = () => {
  return (
    <section className="" id="schedule">
      <h2 className={useGradient()}>Schedule</h2>
      <p className="text-xl">
        Hack the Nest will begin morning of Saturday, April 15 and end evening
        of Sunday, April 16. Full details will be released soon!
      </p>
    </section>
  );
};

export default ScheduleSection;
