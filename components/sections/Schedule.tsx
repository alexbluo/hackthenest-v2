import useGradient from "../../utils/useGradient";
import ScheduleBlock from "../ScheduleBlock";

const ScheduleSection = () => {
  return (
    <section className="" id="schedule">
      <div className="-mx-8 inline-block rounded-r-full bg-black px-8 py-2 sm:rounded-full">
        <h2 className={useGradient()}>Schedule</h2>
      </div>
      <div className="flex  justify-between mr-32 pt-40">
        <div className="flex flex-col">
          <ScheduleBlock name="test" time="9:00am - 10:00am">
            description here
          </ScheduleBlock>
          <ScheduleBlock name="test" time="9:00am - 10:00am">
            description here
          </ScheduleBlock>
        </div>
        <div className="flex flex-col">
          <ScheduleBlock name="test" time="9:00am - 10:00am">
            description here
          </ScheduleBlock>
          <ScheduleBlock name="test" time="9:00am - 10:00am">
            description here
          </ScheduleBlock>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
