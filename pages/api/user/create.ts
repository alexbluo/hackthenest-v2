import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { prisma } from "../../../db";
import { authOptions } from "../auth/[...nextauth]";

interface NextApiRequestType extends NextApiRequest {
  body: {
    email: string;
    password?: string;
  };
}

// create a new email/password, id, etc
const handler = async (req: NextApiRequestType, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);
  const { email, password } = req.body;

  if (!session || session?.user?.email !== email) {
    res.status(400).end();
  }

  const user = await prisma.user.upsert({
    where: { email },
    update: {},
    create: {
      email,
      password,
    },
  });

  res.status(200).json(user);
};

export default handler;
