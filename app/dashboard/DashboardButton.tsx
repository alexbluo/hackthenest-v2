import classNames from "classnames";
import Link from "next/link";
import useGradient from "../../utils/useGradient";

interface Props {
  name: string;
  href?: string;
  status: "COMPLETE" | "INCOMPLETE" | "UNAVAILABLE";
}

const DashboardButton = ({ name, href, status }: Props) => {
  return (
    <div className="flex h-16 w-full items-center gap-1 overflow-hidden rounded-md bg-black">
      <Link
        className={classNames(
          "flex h-full w-full items-center justify-center text-lg text-black",
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
          "h-full w-16 cursor-default bg-gold py-4 text-center text-lg text-black",
          { "bg-gold": status === "INCOMPLETE" },
          { "bg-green": status === "COMPLETE" },
          { "bg-grey": status === "UNAVAILABLE" }
        )}
      ></div>
    </div>
  );
};

export default DashboardButton;
