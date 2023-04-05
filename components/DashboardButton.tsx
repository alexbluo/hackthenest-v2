import classNames from "classnames";
import Link from "next/link";
import useGradient from "../utils/useGradient";

interface Props {
  name: string;
  href?: string;
  status: "COMPLETE" | "INCOMPLETE" | "UNAVAILABLE";
}

const DashboardButton = ({ name, href, status }: Props) => {
  return (
    <div className="flex w-full gap-[2px] overflow-hidden rounded-lg border-2 bg-white border-white">
      <Link
        className={classNames(
          "w-full py-4 text-center text-lg text-black",
          { [useGradient()]: status === "INCOMPLETE" },
          { "cursor-default bg-grey": status === "COMPLETE" },
          { "cursor-default bg-grey": status === "UNAVAILABLE" }
        )}
        href={href || "/dashboard"}
      >
        {name}
      </Link>
      <div
        className={classNames(
          "w-full bg-gold py-4 text-center text-lg text-black",
          { "bg-gold": status === "INCOMPLETE" },
          { "bg-green": status === "COMPLETE" },
          { "bg-grey": status === "UNAVAILABLE" }
        )}
      >
        {status}
      </div>
    </div>
  );
};

export default DashboardButton;
