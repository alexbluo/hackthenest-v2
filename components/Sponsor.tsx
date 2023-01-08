import Image from "next/image";

interface Props {
  href?: string;
  path: string;
  alt: string;
}

const Sponsor = ({ href, path, alt }: Props) => {
  return (
    <a
      className="h-52 rounded-xl w-full cursor-pointer bg-blue-dark p-8"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <div className="relative h-full">
        <Image src={path} alt={alt} style={{ objectFit: "contain" }} fill />
      </div>
    </a>
  );
};

export default Sponsor;
