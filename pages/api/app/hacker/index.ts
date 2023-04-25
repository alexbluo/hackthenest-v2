import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { prisma } from "../../../../db";
import { authOptions } from "../../auth/[...nextauth]";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    res.status(300).end();
    return;
  }

  const session = await getServerSession(req, res, authOptions);
  const email = session?.user?.email;

  if (!email) {
    res.status(400).end();
    return;
  }

  const app = prisma.user.findUnique({
    where: { email },
    select: { hackerApp: true },
  });

  res.status(200).json(app);
};

export default handler;
