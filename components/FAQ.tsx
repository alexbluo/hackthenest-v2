import { useEffect, useState } from "react";
import classNames from "classnames";

const FAQ = ({ children, question }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <button className="flex flex-col" onClick={() => setOpen(!open)}>
      <div>{question}</div>
      <div
        className={classNames(
          "duration-1000 overflow-y-auto",
          { "max-h-0": !open },
          { "max-h-96": open }
        )}
      >
        {children}
      </div>
    </button>
  );
};

export default FAQ;
