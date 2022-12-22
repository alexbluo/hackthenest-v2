import { useEffect, useState } from "react";

const FAQ = ({ children, question }) => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    console.log(open);
  }, [open]);

  return (
    <button
      className={open ? "text-blue-400" : "text-red-400"}
      onClick={() => setOpen(!open)}
    >
      <div>{question}</div>
      <div></div>
    </button>
  );
};

export default FAQ;
