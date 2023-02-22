import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

// https://www.npmjs.com/package/react-qr-code
const Dashboard = () => {
  const { data: session, status } = useSession();

  return status === "authenticated" ? (
    <div className="bg-black">
      <section className="h-screen pt-32">
        <nav className="bg-transparent container absolute top-0 left-0 right-0 z-50 flex h-32 w-full items-center justify-between">
          <Link className="relative z-50 aspect-square h-3/5" href="/">
            <Image src="/logo-colored.png" alt="Hack the Nest Logo" fill />
          </Link>

          <button
            className="text-lg font-medium text-gold"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            Logout
          </button>
        </nav>

        <div className="z-20 text-xl">
          <h1 className="text-3xl font-bold text-gold">
            Welcome back, {session!.user!.name}
          </h1>
          <div className="pt-12">
            <Link
              className="rounded-md border py-2 px-12 text-lg text-gold"
              href="/application"
            >
              Application
            </Link>
          </div>
        </div>
      </section>
    </div>
  ) : null;
};

export default Dashboard;
