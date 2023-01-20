import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

const Dashboard = () => {
  const { data: session, status } = useSession();

  return status === "authenticated" ? (
    <section className="h-screen">
      <div className="flex h-full flex-col items-center justify-center gap-4">
        <p> Welcome back, {session!.user!.email}</p>
        <Link href="/application">
          <button className="rounded-lg border px-12 py-4 hover:bg-orange">
            Application
          </button>
        </Link>
        <button
          className="rounded-lg border px-12 py-4 hover:bg-orange"
          onClick={() => signOut({ callbackUrl: "/" })}
        >
          Logout
        </button>
      </div>
    </section>
  ) : null;
};

export default Dashboard;
