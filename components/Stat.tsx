import useGradient from "../utils/useGradient";

interface Props {
  stat: string;
  caption: string;
}

// TODO: test gradient bg and black text
const Stat = ({ stat, caption }: Props) => {
  return (
    <div
      className={`${useGradient()} h-36 w-full rounded-xl bg-white py-8 px-4 text-center text-black`}
    >
      <div className="h-full bg-clip-text">
        <h3 className="pb-2 font-header text-4xl font-semibold">{stat}</h3>
        <p className="">{caption}</p>
      </div>
    </div>
  );
};

export default Stat;
