import bcrypt from "bcrypt";
import { getServerSession } from "next-auth";
import QRCode from "react-qr-code";
import { authOptions } from "app/api/auth/[...nextauth]/route";
import AuthNav from "app/components/AuthNav";
import { prisma } from "db";
import completed from "utils/completed";
import Confirmation from "./Confirmation";
import DashboardButton from "./DashboardButton";

interface Props {
  searchParams: { confirm: string | undefined };
}

const Dashboard = async ({ searchParams }: Props) => {
  const session = await getServerSession(authOptions);
  const { email } = session!.user!;
  const hashedEmail = await bcrypt.hash(email, 8);

  const user = await prisma.user.upsert({
    where: { email },
    update: {},
    create: { email, qr: hashedEmail },
    include: { completed: true },
  });

  return (
    <div className="min-h-screen bg-black">
      <AuthNav />
      <section className="pt-32">
        <h2 className="gradient-text mb-8">dashboard</h2>
        <h3 className="mb-8 text-3xl font-semibold text-gold">
          welcome back, {session?.user?.name ?? session?.user?.email}
        </h3>

        <Confirmation confirm={searchParams.confirm} />

        <div className="flex w-full flex-col gap-8 lg:flex-row">
          <div className="rounded-md bg-white p-4">
            <QRCode className="mx-auto" size={224} value={user.email} />
          </div>
          <div className="flex w-full flex-col gap-8">
            <DashboardButton
              name="hacker registration"
              href="/app/hacker"
              status={
                completed(user.completed, "HACKERAPP")
                  ? "COMPLETE"
                  : "INCOMPLETE"
              }
            />
            <DashboardButton
              name="volunteer registration"
              href="/app/volunteer"
              status="UNAVAILABLE"
            />
            <DashboardButton
              name="rsvp"
              href="https://docs.google.com/forms/d/e/1FAIpQLSeQ7J-A7zxYnGZCOp2-ccHLd-i7NLMBNqZBEWzyTnDvLFY4vA/viewform?usp=sf_link"
              status="INCOMPLETE"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
