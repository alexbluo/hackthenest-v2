import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { prisma } from "db";
import { SchemaType } from "app/app/hacker/page";
import { authOptions } from "app/auth/[...nextauth]/route";
import { NextResponse } from "next/server";

interface NextApiRequestType extends NextApiRequest {
  body: { data: SchemaType };
}

const POST = async (req: NextApiRequestType) => {
  const session = await getServerSession(req, res, authOptions);
  const email = session?.user?.email;

  if (!email) {
    res.status(400).end();
    return;
  }

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

export POST;
