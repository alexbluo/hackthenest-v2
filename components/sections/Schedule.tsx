import useGradient from "../../utils/useGradient";
import ScheduleBlock from "../ScheduleBlock";

interface Block {
  name: string;
  time: string;
  description: string;
}

const saturday: Block[] = [
  { name: "test", time: "9:00am - 10:00am", description: "description here" },
  { name: "test", time: "9:00am - 10:00am", description: "description here" },
  { name: "test", time: "9:00am - 10:00am", description: "description here" },
  { name: "test", time: "9:00am - 10:00am", description: "description here" },
  { name: "test", time: "9:00am - 10:00am", description: "description here" },
  { name: "test", time: "9:00am - 10:00am", description: "description here" },
  { name: "test", time: "9:00am - 10:00am", description: "description here" },
  { name: "test", time: "9:00am - 10:00am", description: "description here" },
  { name: "test", time: "9:00am - 10:00am", description: "description here" },
];

const sunday: Block[] = [
  { name: "test", time: "9:00am - 10:00am", description: "description here" },
  { name: "test", time: "9:00am - 10:00am", description: "description here" },
  { name: "test", time: "9:00am - 10:00am", description: "description here" },
  { name: "test", time: "9:00am - 10:00am", description: "description here" },
  { name: "test", time: "9:00am - 10:00am", description: "description here" },
  { name: "test", time: "9:00am - 10:00am", description: "description here" },
  { name: "test", time: "9:00am - 10:00am", description: "description here" },
  { name: "test", time: "9:00am - 10:00am", description: "description here" },
  { name: "test", time: "9:00am - 10:00am", description: "description here" },
];

const ScheduleSection = () => {
  

  return (
    <section className="" id="schedule">
      <div className="-mx-8 inline-block rounded-r-full bg-black px-8 py-2 sm:rounded-full">
        <h2 className={useGradient()}>Schedule</h2>
      </div>
      {/* TODO: one column with click top to go next align left and full on mobile */}
      <div className="mr-40 flex justify-between pt-40">
        <div className="flex flex-col">
          <div className="relative">
            <div className="relative left-40 bottom-[92px] flex h-16 w-96 origin-bottom-left items-center justify-center bg-gold px-4 text-center text-xl font-medium">
              Saturday
            </div>
            <div className="absolute bottom-0 flex h-16 w-40 origin-bottom-left -skew-y-[30deg] items-center justify-center overflow-hidden whitespace-nowrap bg-blue-light text-center">
              9.23.23
            </div>
            <div className="absolute bottom-0 h-[92px] w-96 origin-bottom-left -skew-x-[60deg] bg-blue-dark "></div>
          </div>
          {saturday.map(({ name, time, description }, i) => {
            return (
              <ScheduleBlock
                name={name}
                time={time}
                order={i % 2 === 0 ? "even" : "odd"}
                key={name}
              >
                {description}
              </ScheduleBlock>
            );
          })}
        </div>
        <div className="flex flex-col">
          <div className="relative">
            <div className="relative left-40 bottom-[92px] flex h-16 w-96 origin-bottom-left items-center justify-center bg-gold px-4 text-center text-xl font-medium">
              Sunday
            </div>
            <div className="absolute bottom-0 flex h-16 w-40 origin-bottom-left -skew-y-[30deg] items-center justify-center overflow-hidden whitespace-nowrap bg-blue-light text-center">
              9.24.23
            </div>
            <div className="absolute bottom-0 h-[92px] w-96 origin-bottom-left -skew-x-[60deg] bg-blue-dark "></div>
          </div>
          {sunday.map(({ name, time, description }, i) => {
            return (
              <ScheduleBlock
                name={name}
                time={time}
                order={i % 2 === 0 ? "even" : "odd"}
                key={name}
              >
                {description}
              </ScheduleBlock>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
