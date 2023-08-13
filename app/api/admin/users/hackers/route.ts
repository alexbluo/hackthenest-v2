import { NextRequest, NextResponse } from "next/server";
import { prisma } from "db";

// get emails of all users with hacker app and rsvp submitted
export const GET = async () => {
  const users = await prisma.user.findMany({
    where: {},
  });

  return NextResponse.json({ users });
};
