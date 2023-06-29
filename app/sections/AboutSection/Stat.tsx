"use client";

import { ReactNode, useState } from "react";
import useWindowWidth from "utils/useWindowWidth";
import Modal from "../../components/Modal";

interface Props {
  stat: string;
  caption: string;
  children: ReactNode;
}

const Stat = ({ stat, caption, children }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const width = useWindowWidth();

  return (
    <div>
      <button
        className="gradient-bg h-36 w-full cursor-pointer rounded-xl bg-white px-4 py-10 text-center text-black shadow-md shadow-black duration-200 ease-in-out hover:shadow-lg hover:shadow-blue-light"
        onClick={() => setOpen(true)}
      >
        <h3 className="pb-2 text-4xl font-semibold">{stat}</h3>
        <h4 className="">{caption}</h4>
      </button>
      <Modal visible={open} width={width} onTap={() => setOpen(false)}>
        <h3 className="mb-2 text-3xl font-semibold">
          {stat} {caption}
        </h3>
        <p>{children}</p>
      </Modal>
    </div>
  );
};

export default Stat;
