import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { prisma } from "../../../../db";
import { SchemaType } from "../../../application/hacker";
import { authOptions } from "../../auth/[...nextauth]";

interface NextApiRequestType extends NextApiRequest {
  body: SchemaType;
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

  const { body } = req;
  console.log("body", body);

  const app = prisma.user.upsert({
    where: { email },
    update: { hackerApp: { update: {} } },
    create: { hackerApp: { create: {} } },
  });

  res.status(200).json(app);
};

export default handler;
