import classNames from "classnames";
import Image from "next/image";

interface Props {
  href?: string;
  src: string;
  alt: string;
  tier: "bronze" | "silver" | "gold" | "diamond";
}

const Sponsor = ({ src, alt, href, tier }: Props) => {
  return (
    <a
      className={classNames(
        "h-48 cursor-pointer rounded-xl p-4 sm:p-8",
        { "bg-bronze": tier === "bronze" },
        { "bg-grey": tier === "silver" },
        { "bg-gold": tier === "gold" },
        { "bg-blue-light": tier === "diamond" }
      )}
      href={href}
      target="_blank"
      aria-label="Sponsor link"
      rel="noreferrer"
    >
      <div className="relative h-full">
        <Image
          src={src}
          alt={alt}
          style={{ objectFit: "contain" }}
          sizes="50vw"
          fill
        />
      </div>
    </a>
  );
};

export default Sponsor;
