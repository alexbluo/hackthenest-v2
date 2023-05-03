import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { ServerClient } from "postmark";
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

  // transactional email
  // TODO: fix vs code env recognition
  const client = new ServerClient(process.env.POSTMARK_API_TOKEN);

  // client.sendEmail({
  //   From: "hello@hackthenest.org",
  //   To: "hello@hackthenest.org",
  //   Subject: "Test",
  //   TextBody: "Hello from Postmark!",
  // });

  res.status(200).json(app);
};

export default handler;
