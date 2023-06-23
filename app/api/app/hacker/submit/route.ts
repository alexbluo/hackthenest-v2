import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { ServerClient } from "postmark";
import { authOptions } from "app/api/auth/[...nextauth]/route";
import { prisma } from "db";

export const POST = async (req: NextRequest) => {
  const body = await req.json();

  const session = await getServerSession(authOptions);
  const { email } = session!.user;

  // TODO: change status
  const app = await prisma.hackerApp.upsert({
    where: {
      userEmail: email,
    },
    update: {
      ...body,
      userEmail: email,
    },
    create: {
      ...body,
      userEmail: email,
    },
  });

  const client = new ServerClient(process.env.POSTMARK_API_TOKEN);

  client.sendEmailWithTemplate({
    From: "hello@hackthenest.org",
    To: email,
    TemplateAlias: "hackerConfirmation",
    TemplateModel: {
      name: app.firstName,
      email: app.userEmail,
    },
    MessageStream: "outbound",
    TrackOpens: true,
  });

  return NextResponse.json(app);
};
