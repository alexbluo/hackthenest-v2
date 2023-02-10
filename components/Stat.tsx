interface Props {
  stat: string;
  caption: string;
}

const Stat = ({ stat, caption }: Props) => {
  return (
    <div className="flex h-48 gap-4 p-8 bg-white text-center text-blue-light w-full flex-col items-center justify-center rounded-xl">
      <h3 className="text-4xl">{stat}</h3>
      <p className="">{caption}</p>
    </div>
  );
};

export default Stat;
