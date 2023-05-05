import useGradient from "../utils/useGradient";

interface Props {
  stat: string;
  caption: string;
}

const Stat = ({ stat, caption }: Props) => {
  return (
    <div
      className={`${useGradient()} h-36 w-full rounded-xl bg-white py-10 px-4 text-center text-black`}
    >
      <h3 className="pb-2 font-header text-4xl font-semibold">{stat}</h3>
      <h4 className="">{caption}</h4>
    </div>
  );
};

export default Stat;
