import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "app/api/auth/[...nextauth]/route";
import { SchemaType } from "app/app/hacker/page";
import { prisma } from "db";

interface NextApiRequestType extends NextApiRequest {
  body: { data: SchemaType };
}

export const POST = async (req: NextApiRequestType, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);
  const { email } = session!.user;

  const app = await prisma.hackerApp.upsert({
    where: {
      userEmail: email,
    },
    update: {
      ...req.body.data,
      userEmail: email,
    },
    create: {
      ...req.body.data,
      userEmail: email,
    },
  });

  return NextResponse.json(app);
};
