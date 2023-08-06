import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "app/api/auth/[...nextauth]/route";
import { prisma } from "db";

export const POST = async (req: NextRequest) => {
  const body = await req.json();

  const session = await getServerSession(authOptions);
  const { email } = session!.user;

  const app = await prisma.volunteerApp.upsert({
    where: {
      userEmail: email,
    },
    update: {
      ...body,
      userEmail: email,
    },
    create: {
      ...body,
      userEmail: email,
    },
  });

  return NextResponse.json(app);
};
