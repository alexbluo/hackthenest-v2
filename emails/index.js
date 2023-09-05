// run batch email sends from here
// max 500 per batch
const dotenv = require("dotenv");
const { ServerClient } = require("postmark");

dotenv.config();

const emails = [
];

const client = new ServerClient(process.env.POSTMARK_API_TOKEN);

client.sendEmailBatchWithTemplates(
  emails.map((email) => {
    return {
      From: "hello@hackthenest.org",
      To: email,
      TemplateAlias: "deadlineNotice1",
      TemplateModel: {
        email,
      },
      MessageStream: "outbound",
    };
  })
);
