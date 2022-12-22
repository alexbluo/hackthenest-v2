import { filterProps } from "framer-motion";
import { useEffect, useState } from "react";

const FAQ = ({ children, question }) => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    console.log(open);
  }, [open]);

  return (
    <button
      
      onClick={() => setOpen(!open)}
    >
      <div>{question}</div>
      <div className={open ? "block" : "hidden"}>{children}</div>
    </button>
  );
};

export default FAQ;
