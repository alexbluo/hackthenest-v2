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
    <div className="flex w-full">
      <Link
        className={classNames(
          "w-full rounded-l-md py-4 text-center text-lg text-black",
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
          "w-full rounded-r-md bg-gold py-4 text-center text-lg text-black",
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
