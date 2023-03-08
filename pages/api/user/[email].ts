import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

interface NextApiRequestType extends NextApiRequest {
  query: {
    email: string;
  };
}

const handler = async (req: NextApiRequestType, res: NextApiResponse) => {
  const { email } = req.query;

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  res.json(user);
};

export default handler;
