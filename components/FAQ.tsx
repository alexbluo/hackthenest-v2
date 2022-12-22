import { useState } from "react";
import classNames from "classnames";
import { motion } from "framer-motion";

interface Props {
  question: string;
  children: string;
}

const FAQ = ({ question, children }: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <button className="flex flex-col" onClick={() => setOpen(!open)}>
      <div>{question}</div>
      <motion.div
        className="overflow-y-auto"
        animate={open ? "open" : "closed"}
        variants={{ closed: { height: 0 }, open: { height: "auto" } }}
      >
        {children}
      </motion.div>
    </button>
  );
};

export default FAQ;
