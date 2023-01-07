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
      <h3 className="cursor-pointer text-2xl" onClick={() => setOpen(!open)}>
        {question}
      </h3>
      <motion.div
        className="overflow-y-hidden text-lg"
        animate={open ? "open" : "closed"}
        variants={{ closed: { height: 0 }, open: { height: "auto" } }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default FAQ;
