import { useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

const Dashboard = () => {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      console.log(session);
      signIn();
    }
  }, [session]);

  if (status === "authenticated") {
    return (
      <section className="h-screen">
        <div className="flex h-full flex-col items-center justify-center gap-4">
          <p> Welcome back, {session!.user!.email}</p>
          <Link href="/application">
            <button className="rounded-lg border px-12 py-4 hover:bg-orange">
              Application
            </button>
          </Link>
          <Link href="/application">
            <button
              className="rounded-lg border px-12 py-4 hover:bg-orange"
              onClick={() => signOut()}
            >
              Logout
            </button>
          </Link>
        </div>
      </section>
    );
  }

  // TODO: polish out using protected page
  return null;
};

export default Dashboard;
