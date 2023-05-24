import { User } from "@prisma/client";
import axios from "axios";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { signOut, useSession } from "next-auth/react";
import QRCode from "react-qr-code";
import { authOptions } from "./api/auth/[...nextauth]";
import DashboardButton from "../components/DashboardButton";
import base from "../utils/base";

const Dashboard = ({
  user,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { data: session } = useSession();

  return (
    <div className="bg-black">
      <section className="min-h-screen pt-32">
        <nav className="container absolute left-0 right-0 top-0 z-50 flex h-32 w-full items-center justify-between bg-transparent">
          <Link className="relative z-50 aspect-square h-3/5" href="/">
            <Image
              src="/logo-colored.png"
              alt="Hack the Nest Logo"
              sizes="76.8px"
              fill
            />
          </Link>

          <button
            className="font-mono text-lg font-medium text-gold"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            Logout
          </button>
        </nav>

        <h2 className="text-gradient mb-8">Dashboard</h2>
        <h3 className="mb-8 text-3xl font-semibold text-gold">
          Welcome back, {session?.user?.name || session?.user?.email}
        </h3>
        <div className="flex w-full flex-col gap-8 lg:flex-row">
          <div className="rounded-md bg-white p-4">
            <QRCode className="mx-auto" size={224} value={user.email} />
          </div>
          <div className="flex w-full flex-col gap-8">
            <DashboardButton
              name="Hacker Application"
              href="/app/hacker"
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

  if (session?.user?.name === "ADMIN") {
    return {
      redirect: {
        destination: "/admin",
        permanent: false,
      },
    };
  }

  const { data: user } = await axios.post<User>(
    `${base}/api/user/create`,
    null,
    {
      headers: {
        cookie: context.req.headers.cookie || "",
      },
    }
  );

  return { props: { user } };
};

export default Dashboard;
