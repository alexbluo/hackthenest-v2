import { NextResponse } from "next/server";
import { prisma } from "db";

// TODO change to post
export const GET = async () => {
  const deleteList: string[] = ["hello@hackthenest.org"];

  const { count } = await prisma.user.deleteMany({
    where: {
      email: {
        in: deleteList,
      },
    },
  });

  return NextResponse.json({ count });
};
