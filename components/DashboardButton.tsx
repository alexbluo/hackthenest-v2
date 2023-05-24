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
    <div className="flex w-full h-16 items-center overflow-hidden rounded-md gap-1 bg-black">
      <Link
        className={classNames(
          "w-full h-full flex items-center justify-center text-lg text-black",
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
          "w-16 h-full bg-gold py-4 cursor-default text-center text-lg text-black",
          { "bg-gold": status === "INCOMPLETE" },
          { "bg-green": status === "COMPLETE" },
          { "bg-grey": status === "UNAVAILABLE" }
        )}
      >
      </div>
    </div>
  );
};

export default DashboardButton;
