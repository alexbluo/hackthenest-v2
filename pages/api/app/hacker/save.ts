import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { prisma } from "../../../../db";
import { SchemaType } from "../../../app/hacker";
import { authOptions } from "../../auth/[...nextauth]";

interface NextApiRequestType extends NextApiRequest {
  body: { data: SchemaType };
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

  const {
    firstName,
    lastName,
    phone,
    age,
    yog,
    school,
    country,
    diet,
    shirt,
    outreach,
    conduct,
    privacy,
  } = req.body.data;

  const app = await prisma.hackerApp.upsert({
    where: {
      userEmail: email,
    },
    update: {
      firstName,
      lastName,
      phone,
      age,
      yog,
      school,
      country,
      diet,
      shirt,
      outreach,
      conduct,
      privacy,
      userEmail: email,
    },
    create: {
      firstName,
      lastName,
      phone,
      age,
      yog,
      school,
      country,
      diet,
      shirt,
      outreach,
      conduct,
      privacy,
      userEmail: email,
    },
  });

  res.status(200).json(app);
};

export default handler;
