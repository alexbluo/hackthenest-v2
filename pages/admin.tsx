import { useState } from "react";
import { useQuery } from "react-query";

const Admin = () => {
  const [search, setSearch] = useState<string>("");

  const { data, error, isError, isLoading } = useQuery(
    ["search", search],
    async () => {

    }
  );

  return (
    <div className="min-h-screen bg-blue-dark">
      <section className="">
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSearch(e.target.value);
          }}
        />
      </section>
    </div>
  );
};

export default Admin;
