import { useState } from "react";
import { useQuery } from "react-query";
import CheckInResult from "../../components/CheckInResult";

const Checkin = () => {
  const [search, setSearch] = useState<string>("");

  const { data, error, isError, isLoading } = useQuery(
    ["search", search],
    async () => {}
  );

  return (
    <div className="bg-blue-dark">
      <section className="min-h-screen">
        <h1 className="pb-4 text-5xl font-bold text-orange">Check-In</h1>
        <input
          className="w-full p-4"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSearch(e.target.value);
          }}
        />
        <div className="flex flex-col gap-1">
          <CheckInResult
            firstName="Bumble"
            lastName="Bee"
            school="River Hill High School"
            email="bumble@bee.com"
            as="hacker"
            shirt="SM"
          />
          <CheckInResult
            firstName="Alex"
            lastName="Luo"
            school="River Hill High School"
            email="bumble@bee.com"
            as="hacker"
            shirt="MD"
          />
        </div>
      </section>
    </div>
  );
};

export default Checkin;
