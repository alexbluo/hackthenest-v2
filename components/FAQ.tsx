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
      <h3
        className="cursor-pointer select-none text-xl"
        onClick={() => setOpen(!open)}
      >
        {question}
      </h3>
      <motion.div
        className="text-md overflow-y-hidden pt-2"
        animate={open ? "open" : "closed"}
        variants={{ closed: { height: 0 }, open: { height: "auto" } }}
        transition={{
          ease: "easeIn",
          duration: 0.2,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default FAQ;
