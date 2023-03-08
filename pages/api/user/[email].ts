import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

const prisma = new PrismaClient();

interface NextApiRequestType extends NextApiRequest {
  query: {
    email: string;
  };
}

const handler = async (req: NextApiRequestType, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);
  const { email } = req.query;

  if (!session || session?.user?.email !== email) {
    res.status(400).end();
  }

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  res.json(user);
};

export default handler;
