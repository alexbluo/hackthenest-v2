import { motion } from "framer-motion";

interface Props {
  name: string;
  time: string;
  children: string;
}

const ScheduleBlock = ({ name, time, children }: Props) => {
  return (
    <div className="relative h-16 w-80 bg-gold">
      {name}
      <motion.div className="absolute top-0 -left-40 flex h-16 w-40 origin-top-right -skew-y-[30deg] items-center justify-center overflow-hidden whitespace-nowrap bg-blue-light">
        {time}
      </motion.div>
      <motion.div className="absolute -bottom-[92px] flex h-[92px] w-80 origin-top-left -skew-x-[60deg] items-center justify-center overflow-hidden whitespace-nowrap bg-blue-light"></motion.div>
    </div>
    // <button className="button-thing">{name}</button>
  );
};

export default ScheduleBlock;
