import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { prisma } from "../../../db";
import { authOptions } from "../auth/[...nextauth]";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    res.status(300).end();
    return;
  }

  const session = await getServerSession(req, res, authOptions);

  if (session?.user?.name !== "ADMIN") {
    res.status(400).end();
    return;
  }

  const user = await prisma.user.findMany({});

  res.status(200).json(user);
};

export default handler;
