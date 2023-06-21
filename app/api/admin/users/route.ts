import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "app/api/auth/[...nextauth]/route";
import { prisma } from "db";

const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  const user = await prisma.user.findMany({
    include: { hackerApp: true, volunteerApp: true },
  });

  NextResponse.json(user);
};

export default GET;
