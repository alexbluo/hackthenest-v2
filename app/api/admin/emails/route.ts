import { NextResponse } from "next/server";
import { prisma } from "db";

export const GET = async () => {
  const users = await prisma.user.findMany();

  const emails = users.map((user) => user.email);

  return NextResponse.json({
    emails,
  });
};

export const dynamic = "force-dynamic";
