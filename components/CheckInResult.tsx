import { useState } from "react";

interface Props {
  firstName: string;
  lastName: string;
  school: string;
  email: string;
  as: string;
  shirt: string;
  checked?: boolean;
}

const CheckInResult = ({
  firstName,
  lastName,
  school,
  email,
  as,
  shirt,
}: Props) => {
  const [idk, setIdk] = useState<boolean>(false);

  return (
    <div className="grid w-full grid-cols-2 justify-between bg-blue-mid">
      <div className="flex flex-col gap-1 p-6">
        <p>
          {lastName}, {firstName}
        </p>
        <p>{school}</p>
        <p>{email}</p>
        <p>{as}</p>
        <p>Shirt size: {shirt}</p>
      </div>
      <button
        className="flex h-full w-full items-center justify-center bg-gold"
        onClick={() => setIdk(!idk)}
      >
        {idk ? (
          <svg
            className="h-8 w-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
          </svg>
        ) : (
          "Check In"
        )}
      </button>
    </div>
  );
};

export default CheckInResult;
