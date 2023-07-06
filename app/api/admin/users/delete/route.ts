import { NextRequest, NextResponse } from "next/server";
import { prisma } from "db";

export const POST = async (request: NextRequest) => {
  const deleteList: string[] = [
    "hello@hackthenest.org",
    "hackthenest@gmail.com",
    "sponsor@hackthenest.org",
  ];

  const { count } = await prisma.user.deleteMany({
    where: {
      email: {
        in: deleteList,
      },
    },
  });

  return NextResponse.json({ count });
};
