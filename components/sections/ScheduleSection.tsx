import React from "react";
import { AnimatePresence, motion, useCycle, useAnimate } from "framer-motion";
import useWindowWidth from "../../utils/useWindowWidth";
import WaitClientLoad from "../../utils/WaitClientLoad";
import ScheduleBlock from "../ScheduleBlock";

interface Block {
  name: string;
  time: string;
  description: string;
}

const saturday: Block[] = [
  {
    name: "Check-in",
    time: "9:00am - 10:00am",
    description: "description here",
  },
  {
    name: "Team Formation",
    time: "9:00am - 10:00am",
    description: "description here",
  },
  {
    name: "Opening Ceremony",
    time: "9:00am - 10:00am",
    description: "description here",
  },
  {
    name: "Lunch",
    time: "9:00am - 10:00am",
    description: "description here",
  },
  {
    name: "Dinner",
    time: "9:00am - 10:00am",
    description: "description here",
  },
  {
    name: "Ping Pong",
    time: "9:00am - 10:00am",
    description: "description here",
  },
];

const sunday: Block[] = [
  {
    name: "Hacking Ends",
    time: "9:00am - 10:00am",
    description: "description here",
  },
  {
    name: "Judging",
    time: "9:00am - 10:00am",
    description: "description here",
  },
  {
    name: "Closing Ceremony",
    time: "9:00am - 10:00am",
    description: "description here",
  },
  {
    name: "Breakfast",
    time: "9:00am - 10:00am",
    description: "description here",
  },
  {
    name: "Workshop",
    time: "9:00am - 10:00am",
    description: "description here",
  },
];

// TODO: manual animate function
const RotateIcon = React.memo(() => {
  return (
    <motion.svg
      height="24px"
      width="24px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <motion.path
        variants={{
          spin: {
            rotate: 360,
          },
        }}
        transition={{
          duration: 2,
        }}
        d="M126.9 142.9c62.2-62.2 162.7-62.5 225.3-1L311 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H447.5c0 0 0 0 0 0H456c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L397.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C57.2 122 39.6 150.7 28.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM0 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L169 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H32.4h-.7H24c-13.3 0-24 10.7-24 24z"
      />
    </motion.svg>
  );
});

RotateIcon.displayName = "RotateIcon";

const ScheduleSection = () => {
  const [day, cycleDay] = useCycle("sat", "sun");
  const width = useWindowWidth();
  const [scope, animate] = useAnimate();

  return (
    <section id="schedule">
      <div className="-mx-8 inline-block rounded-r-full bg-black px-8 py-2 sm:rounded-full">
        <h2 className="text-gradient">schedule</h2>
      </div>
      <WaitClientLoad>
        {width > 768 ? (
          <AnimatePresence mode="wait">
            <motion.div className="mr-40 flex flex-col pt-40">
              <div className="relative">
                <motion.button
                  className="relative bottom-[92px] left-40 flex h-16 w-96 origin-bottom-left items-center justify-between bg-gold px-8 text-xl font-medium"
                  onTap={() => cycleDay()}
                  whileTap="spin"
                >
                  {day === "sat" ? "Saturday" : "Sunday"}
                  <RotateIcon />
                </motion.button>
                <div className="absolute bottom-0 flex h-16 w-40 origin-bottom-left -skew-y-[30deg] items-center overflow-hidden whitespace-nowrap bg-blue-mid">
                  <span className="pl-4">
                    {day === "sat" ? "9.23.23" : "9.24.24"}
                  </span>
                </div>
                <div className="absolute bottom-0 h-[92px] w-96 origin-bottom-left -skew-x-[60deg] bg-blue-dark"></div>
              </div>
              {day === "sat"
                ? saturday.map(({ name, time, description }, i) => {
                    return (
                      <ScheduleBlock
                        name={name}
                        time={time}
                        width={width}
                        order={i % 2 === 0 ? "even" : "odd"}
                        key={name + time + description}
                      >
                        {description}
                      </ScheduleBlock>
                    );
                  })
                : sunday.map(({ name, time, description }, i) => {
                    return (
                      <ScheduleBlock
                        name={name}
                        time={time}
                        width={width}
                        order={i % 2 === 0 ? "even" : "odd"}
                        key={name + time + description}
                      >
                        {description}
                      </ScheduleBlock>
                    );
                  })}
            </motion.div>
          </AnimatePresence>
        ) : (
          <div></div>
        )}
      </WaitClientLoad>
    </section>
  );
};

export default ScheduleSection;
