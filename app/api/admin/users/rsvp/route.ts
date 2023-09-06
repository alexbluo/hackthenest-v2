import { NextResponse } from "next/server";
import { prisma } from "db";
import completed from "utils/completed";

export const GET = async () => {
  const users = await prisma.user.findMany({ include: { completed: true } });

  const emails = users
    .filter((user) => completed(user.completed, "RSVP"))
    .map((user) => user.email);

  return NextResponse.json({
    emails,
  });
};

export const dynamic = "force-dynamic";