import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "app/auth/[...nextauth]/route";
import { prisma } from "db";

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

  const app = await prisma.hackerApp.findUnique({
    where: { userEmail: email },
  });

  res.status(200).json(app);
};

export default handler;
