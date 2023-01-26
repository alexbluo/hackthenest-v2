import { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  question: string;
  children: string;
}

const FAQ = ({ question, children }: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col">
      <h3 className="cursor-pointer text-xl select-none" onClick={() => setOpen(!open)}>
        {question}
      </h3>
      <motion.div
        className="overflow-y-hidden text-md pt-2"
        animate={open ? "open" : "closed"}
        variants={{ closed: { height: 0 }, open: { height: "auto" } }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default FAQ;
