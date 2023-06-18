import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { prisma } from "../../../db";

const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession();

  if (session?.user?.name !== "ADMIN") {
    res.status(400).end();
    return;
  }

  const user = await prisma.user.findMany();

  res.json(user);
};

export default handler;
