import { NextRequest, NextResponse } from "next/server";
import { prisma } from "db";

// TODO change to post
export const GET = async (request: NextRequest) => {
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
