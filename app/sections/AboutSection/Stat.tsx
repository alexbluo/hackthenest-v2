"use client";

import useGradient from "../../../utils/useGradient";

interface Props {
  stat: string;
  caption: string;
}

const Stat = ({ stat, caption }: Props) => {
  return (
    <div
      className={`${useGradient()} h-36 w-full rounded-xl bg-white px-4 py-10 text-center text-black`}
    >
      <h3 className="pb-2 text-4xl font-semibold">{stat}</h3>
      <h4 className="">{caption}</h4>
    </div>
  );
};

export default Stat;
