import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { prisma } from "../../../db";
import { authOptions } from "../auth/[...nextauth]";

interface NextApiRequestType extends NextApiRequest {
  query: {
    email: string;
  };
}

const handler = async (req: NextApiRequestType, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);
  const { email } = req.query;

  if (!session || session?.user?.email !== email) {
    // check if user exists and return bool for user/pass login/creation
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    res.json(!!user);
    return;
  }

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  res.json(user);
};

export default handler;
