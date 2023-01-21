import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Dashboard = () => {
  const { data: session, status } = useSession();

  return status === "authenticated" ? (
    <div className="bg-black">
      <section className="h-screen">
        {/* <div className="absolute top-0 left-0 z-10 h-screen w-screen bg-black"></div> */}

        <nav className="bg-transparent container absolute top-0 left-0 right-0 z-50 flex h-32 w-full items-center justify-between">
          <div className="relative z-50 aspect-square h-3/5">
            <Image src="/logo-colored.png" alt="Hack the Nest Logo" fill />
          </div>

          <button
            className="text-lg font-medium text-orange"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            Logout
          </button>
        </nav>

        <div className="flex flex-row justify-between">
          <div className="flex h-32 flex-col gap-20">
            <div className="relative z-50 aspect-square h-3/5">
              <Image src="/logo-colored.png" alt="Hack the Nest Logo" fill />
            </div>

            <div className="z-20 text-xl">
              <h1 className="text-3xl font-bold text-orange">
                Welcome back, {session!.user!.name}
              </h1>
              <Link className="text-lg text-orange" href="/application">
                Application
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  ) : null;
};

export default Dashboard;
