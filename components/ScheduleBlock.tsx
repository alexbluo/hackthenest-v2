import { useState } from "react";
import { motion, TargetAndTransition, VariantLabels } from "framer-motion";

interface Props {
  name: string;
  time: string;
  children: string;
}

const ScheduleBlock = ({ name, time, children }: Props) => {
  const [status, setStatus] = useState<
    boolean | TargetAndTransition | VariantLabels | undefined
  >(undefined);

  const handleHoverStart = () => {
    if (status !== "pressed") setStatus("hover");
  };

  const handleHoverEnd = () => {
    if (status !== "pressed") setStatus(undefined);
  };

  const handleTap = () => {
    setStatus("pressed");
  };

  return (
    <div className="relative">
      <motion.div
        className="relative left-40 bottom-[92px] flex h-16 w-80 origin-bottom-left items-center justify-center bg-gold text-xl"
        animate={status}
        variants={{
          hover: {
            x: "-40px",
            y: "23px",
          },
          pressed: {
            x: "-160px",
            y: "92px",
          },
        }}
        transition={{
          duration: 1,
        }}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        onTap={handleTap}
      >
        {name}
      </motion.div>
      <motion.div
        className="absolute bottom-0 flex h-16 w-40 origin-bottom-left -skew-y-[30deg] items-center justify-center overflow-hidden whitespace-nowrap bg-blue-light"
        animate={status}
        variants={{
          hover: { width: "7.5rem" },
          pressed: { width: 0 },
        }}
        transition={{
          duration: 1,
        }}
      >
        {time}
      </motion.div>
      <motion.div
        className="absolute bottom-0 flex h-[92px] w-80 origin-bottom-left -skew-x-[60deg] items-center justify-center overflow-hidden whitespace-nowrap bg-blue-dark"
        animate={status}
        variants={{
          hover: { height: "69px" },
          pressed: { height: 0 },
        }}
        transition={{
          duration: 1,
        }}
      ></motion.div>
    </div>
    // <button className="button-thing">{name}</button>
  );
};

export default ScheduleBlock;
