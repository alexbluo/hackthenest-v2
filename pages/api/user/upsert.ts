import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { prisma } from "../../../db";
import { authOptions } from "../auth/[...nextauth]";

interface NextApiRequestType extends NextApiRequest {
  body: {
    email: string;
  };
}

// TODO: REJECT NON-POST
const handler = async (req: NextApiRequestType, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(300).end();
    return;
  }

  const session = await getServerSession(req, res, authOptions);
  const { email } = req.body;

  if (session?.user?.email !== email) {
    res.status(400).end();
    return;
  }

  // hash email for id
  const hashedEmail = await bcrypt.hash(email, 8);

  const user = await prisma.user.upsert({
    where: { email },
    update: {},
    create: { id: hashedEmail, email },
  });

  res.status(200).json(user);
};

export default handler;
