import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { prisma } from "../../../../db";
import { SchemaType } from "../../../application/hacker";
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
  console.log(lastName);

  const app = await prisma.hackerApp.upsert({
    where: {
      userEmail: email,
    },
    update: {
      firstName: "ok",
      lastName,
      phone,
      age,
      yog,
      school,
      country,
      diet: {
        connectOrCreate:
          diet?.map((d) => ({
            where: { diet: d },
            create: { diet: d },
          })) || [],
      },
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
      diet: {
        connectOrCreate:
          diet?.map((d) => ({
            where: { diet: d },
            create: { diet: d },
          })) || [],
      },
      shirt,
      outreach,
      conduct,
      privacy,
      userEmail: email,
    },
  });
  // console.log(app);

  res.status(200).json(app);
};

export default handler;
