import Image from "next/image";

interface Props {
  href?: string;
  path: string;
  alt: string;
}

const Sponsor = ({ href = "", path, alt }: Props) => {
  return (
    <div className="h-48 w-full bg-blue-dark p-10" id="sponsors">
      <a href={href}>
        <div className="relative h-full">
          <Image src={path} alt={alt} fill style={{ objectFit: "contain" }} />
        </div>
      </a>
    </div>
  );
};

export default Sponsor;
