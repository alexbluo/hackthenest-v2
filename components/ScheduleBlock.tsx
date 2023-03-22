import { motion } from "framer-motion";

interface Props {
  name: string;
  time: string;
  children: string;
}

const ScheduleBlock = ({ name, time, children }: Props) => {
  return (
    <div className="relative">
      <motion.div
        className="relative left-40 bottom-[92px] flex h-16 w-80 origin-bottom-left items-center justify-center bg-gold text-xl"
        variants={{
          pressed: {
            x: "-10rem",
            y: "92px",
          },
        }}
        transition={{
          duration: 1,
        }}
      >
        {name}
      </motion.div>
      <motion.div
        className="absolute bottom-0 flex h-16 w-40 origin-bottom-left -skew-y-[30deg] items-center justify-center overflow-hidden whitespace-nowrap bg-blue-light"
        variants={{
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
        variants={{
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
