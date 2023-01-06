import Image from "next/image";

interface Props {
  href?: string;
  path: string;
  alt: string;
}

const Sponsor = ({ href, path, alt }: Props) => {
  return (
    <a
      className="h-48 w-full bg-blue-dark p-10"
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
