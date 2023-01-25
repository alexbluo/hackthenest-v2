import { useState } from "react";
import { useQuery } from "react-query";
import CheckInResult from "../../components/CheckInResult";

// https://github.com/react-qr-reader/react-qr-reader
const Checkin = () => {
  const [search, setSearch] = useState<string>("");

  const { data, error, isError, isLoading } = useQuery(
    ["search", search],
    async () => {}
  );

  return (
    <div className="bg-blue-dark">
      <section className="min-h-screen">
        <h1 className="pb-4 text-5xl font-bold text-gold">Check-In</h1>
        <input
          className="w-full p-4"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSearch(e.target.value);
          }}
        />
        <div className="flex flex-col gap-1">
          <CheckInResult
            firstName="Evan"
            lastName="Marlow"
            school="River Hill High School"
            email="itsarlow@gmail.com"
            as="hacker"
            shirt="MD"
          />
          <CheckInResult
            firstName="Tyler"
            lastName="Nguyen"
            school="River Hill High School"
            email="tytyprime@gmail.com"
            as="hacker"
            shirt="MD"
          />
          <CheckInResult
            firstName="Alex"
            lastName="Luo"
            school="River Hill High School"
            email="alexluo92823@gmail.com"
            as="hacker"
            shirt="MD"
          />
        </div>
      </section>
    </div>
  );
};

export default Checkin;
