import { NextResponse } from "next/server";
import { prisma } from "db";

// return all users with hacker apps
export const GET = async () => {
  const user = await prisma.user.findMany({
    include: { hackerApp: true, volunteerApp: true },
  });

  NextResponse.json(user);
};

