import { useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      // TODO: add custom login page with normal email and maybe github?
      
      signIn();
    }
    // TODO: create admin account
    // if (session?.user?.email === "hackthenest@gmail.com") {
    //   router.push("admin");
    // }
  }, [router, session, status]);

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
          <button
            className="rounded-lg border px-12 py-4 hover:bg-orange"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            Logout
          </button>
        </div>
      </section>
    );
  }

  return null;
};

export default Dashboard;
