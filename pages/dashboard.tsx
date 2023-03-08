import axios from "axios";
import { GetServerSidePropsContext } from "next";
import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { signOut, useSession } from "next-auth/react";
import QRCode from "react-qr-code";
import { authOptions } from "./api/auth/[...nextauth]";
import DashboardButton from "../components/DashboardButton";
import base from "../utils/base";
import useGradient from "../utils/useGradient";

const Dashboard = () => {
  const { data: session } = useSession();

  return (
    <div className="bg-black">
      <section className="min-h-screen pt-32">
        <nav className="container absolute top-0 left-0 right-0 z-50 flex h-32 w-full items-center justify-between bg-transparent">
          <Link className="relative z-50 aspect-square h-3/5" href="/">
            <Image src="/logo-colored.png" alt="Hack the Nest Logo" fill />
          </Link>

          <button
            className="font-header text-lg font-medium text-gold"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            Logout
          </button>
        </nav>

        <h2 className={`${useGradient()} mb-8`}>Dashboard</h2>
        <h3 className="mb-4 text-3xl font-bold text-gold">
          Welcome back, {session?.user?.name}
        </h3>
        <div className="flex w-full flex-col gap-8 lg:flex-row">
          <div className="h-full">
            <QRCode className="rounded-md bg-white p-4" value="1" />
          </div>
          <div className="flex w-full flex-col gap-8">
            <DashboardButton
              name="Hacker Application"
              href="/application"
              status="INCOMPLETE"
            />
            <DashboardButton name="Volunteer Application" status="COMPLETE" />
            <DashboardButton name="RSVP" status="UNAVAILABLE" />
          </div>
        </div>
      </section>
    </div>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  await axios.post(`${base}/api/user/create`, {
    email: session.user?.email,
  });

  return {
    props: { session },
  };
};

export default Dashboard;
