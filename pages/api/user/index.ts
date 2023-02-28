import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

// check if user is authenticated with getserversession
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.query;

  // const user = await prisma.user.;

  res.json({ hi: "lol" });
};

export default handler;
