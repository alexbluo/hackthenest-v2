import useGradient from "../utils/useGradient";

const ScheduleSection = () => {
  return (
    <section className="" id="schedule">
      <div className="-mx-8 inline-block rounded-r-full bg-black px-8 py-2 sm:rounded-full">
        <h2 className={useGradient()}>Schedule</h2>
      </div>
      <p className="text-xl p-8 -mx-8">
        Hack the Nest will begin morning of Saturday, April 15 and end evening
        of Sunday, April 16. Full details will be released soon!
      </p>
    </section>
  );
};

export default ScheduleSection;
