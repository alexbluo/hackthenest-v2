import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../db";

interface NextApiRequestType extends NextApiRequest {
  query: {
    email: string;
  };
}

const handler = async (req: NextApiRequestType, res: NextApiResponse) => {
  const { email } = req.query;

  // add status check to prevent phishing
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  res.json({ userExists: !!user, passwordExists: !!user?.password });
};

export default handler;
