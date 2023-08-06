import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "app/api/auth/[...nextauth]/route";
import { prisma } from "db";
import completed from "utils/completed";
import AppForm from "./AppForm";

const HackerApp = async () => {
  const session = await getServerSession(authOptions);
  const email = session?.user.email;

  const user = await prisma.user.findUnique({
    where: { email },
    include: { completed: true },
  });

  // user can't be null because of middleware redirect > login > dashboard upsert
  if (completed(user!.completed, "VOLUNTEERAPP")) redirect("/dashboard");

  // because undefined !== null...
  const app =
    (await prisma.volunteerApp.findUnique({
      where: { userEmail: email },
    })) ?? undefined;

  return (
    <>
      <h2 className="gradient-text mb-8">volunteer registration</h2>
      <AppForm app={app} />
    </>
  );
};

export default HackerApp;
