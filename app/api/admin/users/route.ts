import { NextResponse } from "next/server";
import { prisma } from "db";

// return all users hacker apps
// request object must be consumed for fresh data https://stackoverflow.com/questions/76460240/nextjs-13-api-route-remains-static-when-calling-with-cacheno-store
export const GET = async () => {
  const user = await prisma.user.findMany({
    include: { completed: true, hackerApp: true, volunteerApp: true },
  });

  return NextResponse.json(user, { headers: { cache: "no-store" } });
};

export const dynamic = "force-dynamic";
