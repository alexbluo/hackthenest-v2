import Link from "next/link";

const Dashboard = () => {
  return (
  <section className="h-screen " id="dash">
    <div className="flex flex-col h-full items-center py-20 space-y-5">
      <Link href="/application">
        <button className="rounded-lg border px-12 py-4 hover:bg-orange">
          Application
        </button>
      </Link>
      <Link href="/application">
        <button className="rounded-lg border px-12 py-4 hover:bg-orange">
          Logout
        </button>
      </Link>
    </div>
  </section>
  );
};

export default Dashboard;
