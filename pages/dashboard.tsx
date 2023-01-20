import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

const Dashboard = () => {
  const { data: session, status } = useSession();
  console.log(session);
  console.log(status);

  return status === "authenticated" ? (
    <section className="h-screen">
      <div className="absolute top-0 left-0 z-10 h-screen w-screen bg-black"></div>
      <div className="flex flex-col gap-20">
        <div>
          <button
            className="container absolute top-0 left-0 right-0 z-30 h-32"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            <div className="relative z-50 aspect-square h-3/5">
              <Image src="/logo-colored.png" alt="Hack the Nest Logo" fill />
            </div>
          </button>
        </div>
        <div className="z-20 text-xl font-semibold text-white">
          <p> Welcome back, {session!.user!.email}</p>
        </div>
      </div>

      <div className="flex h-full flex-col items-center justify-center gap-4">
        <Link href="/application" className="z-20">
          <button className="rounded-lg border border-black bg-white px-12 py-4 hover:bg-orange">
            Application
          </button>
        </Link>
        <button
          className="z-20 rounded-lg border border-black bg-white px-12 py-4 hover:bg-orange"
          onClick={() => signOut({ callbackUrl: "/" })}
        >
          Logout
        </button>
      </div>
    </section>
  ) : null;
};

export default Dashboard;
