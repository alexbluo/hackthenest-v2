import bcrypt from "bcrypt";
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

// TODO: REJECT NON-POST
const handler = async (req: NextApiRequestType, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);
  const { email, password } = req.body;

  if (!session || session?.user?.email !== email) {
    res.status(400).end();
  }

  // hash email for id
  const hashedEmail = await bcrypt.hash(email, 8);
  // hash plaintext password for storage
  const hashedPassword = password ? await bcrypt.hash(password, 10) : null;

  const user = await prisma.user.upsert({
    where: { email },
    update: { password: hashedPassword },
    create: { id: hashedEmail, email, password: hashedPassword },
  });

  res.status(200).json(user);
};

export default handler;
