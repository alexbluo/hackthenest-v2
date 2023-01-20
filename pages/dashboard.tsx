import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

const Dashboard = () => {
  const { data: session, status } = useSession();
  console.log(session)
  console.log(status)

  return status === "authenticated" ? (
    <section className="h-screen">
      <div className="absolute z-0 top-0 left-0 h-screen w-screen">
        <Image
          className="object-cover"
          src="/background.png"
          alt="placeholder"
          fill
        />
        </div>
      <div className="flex h-full flex-col items-center justify-center gap-4">
        <p className="z-20 "> Welcome back, {session!.user!.email}</p>
        <Link href="/application" className="z-20">
          <button className="rounded-lg border px-12 py-4 hover:bg-orange">
            Application
          </button>
        </Link>
        <button
          className="rounded-lg z-20 border px-12 py-4 hover:bg-orange"
          onClick={() => signOut({ callbackUrl: "/" })}
        >
          Logout
        </button>
      </div>
    </section>
  ) : null;
};

export default Dashboard;
