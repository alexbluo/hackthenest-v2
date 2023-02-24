import useGradient from "../utils/useGradient";

interface Props {
  stat: string;
  caption: string;
}

const Stat = ({ stat, caption }: Props) => {
  return (
    <div className="h-36 w-full rounded-xl bg-white py-8 px-4 text-center text-transparent">
      <div className={`${useGradient()} bg-clip-text h-full`}>
        <h3 className="text-4xl pb-2 font-semibold">{stat}</h3>
        <p className="">{caption}</p>
      </div>
    </div>
  );
};

export default Stat;
