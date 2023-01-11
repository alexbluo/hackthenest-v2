import { useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

const Dashboard = () => {
  const { data: session } = useSession();

  useEffect(() => {
    console.log(session);

    if (!session) {
      signIn();
    }
  }, [session]);

  if (session) {
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

  // TODO: polish out
  return null;
};

export default Dashboard;
