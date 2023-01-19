interface Props {
  firstName: string;
  lastName: string;
  school: string;
  email: string;
  as: string;
  shirt: string;
}

const CheckInResult = ({
  firstName,
  lastName,
  school,
  email,
  as,
  shirt,
}: Props) => {
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
      <button className="flex h-full w-full items-center justify-center bg-orange">
        Check In
      </button>
    </div>
  );
};

export default CheckInResult;
