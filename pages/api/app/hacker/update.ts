import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { prisma } from "../../../../db";
import { authOptions } from "../../auth/[...nextauth]";

interface NextApiRequestType extends NextApiRequest {
  body: {
  };
}

const handler = async (req: NextApiRequestType, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(300).end();
    return;
  }

  const session = await getServerSession(req, res, authOptions);
  const email = session?.user?.email;

  if (!email) {
    res.status(400).end();
    return;
  }

  // const {  } = req.body;

  const app = prisma.hackerApp.upsert({ where: {}, update: {}, create: {} });

  res.status(200).json(app);
};

export default handler;
