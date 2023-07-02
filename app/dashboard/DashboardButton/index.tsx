"use client";

import classNames from "classnames";
import { useRouter } from "next/navigation";
import useHackerText from "utils/useHackerText";
import Status from "./Status";

interface Props {
  name: string;
  href?: string;
  status: "COMPLETE" | "INCOMPLETE" | "UNAVAILABLE";
}

const DashboardButton = ({ name, href, status }: Props) => {
  const [animatedName, animate] = useHackerText(name);

  const router = useRouter();

  const handleClick = () => {
    if (!href) return;
    if (status === "INCOMPLETE") router.push(href);
  };

  return (
    <div className="flex h-16 w-full items-center gap-1 bg-black font-mono">
      <button
        className={classNames(
          "flex h-full w-full items-center rounded-l-md px-6 text-lg text-black",
          {
            "gradient-bg duration-200 ease-in-out hover:shadow-lg hover:shadow-blue-light":
              status === "INCOMPLETE",
          },
          { "cursor-default bg-green": status === "COMPLETE" },
          { "cursor-default bg-grey": status === "UNAVAILABLE" }
        )}
        onClick={handleClick}
        onMouseEnter={() => animate({ duration: 500 })}
      >
        {animatedName}
      </button>
      <Status status={status} />
    </div>
  );
};

export default DashboardButton;
