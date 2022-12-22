import { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  question: string;
  children: string;
}

const FAQ = ({ question, children }: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <button className="flex flex-col" onClick={() => setOpen(!open)}>
      <h3 className="text-2xl">{question}</h3>
      <motion.div
        className="overflow-y-hidden text-lg"
        animate={open ? "open" : "closed"}
        variants={{ closed: { height: 0 }, open: { height: "auto" } }}
      >
        {children}
      </motion.div>
    </button>
  );
};

export default FAQ;
