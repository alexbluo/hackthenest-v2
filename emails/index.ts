// run batch email sends from here
// max 500 per batch

import { ServerClient } from "postmark";

const client = new ServerClient(process.env.POSTMARK_API_TOKEN);

client.sendEmailBatchWithTemplates([
  {
    From: "hello@hackthenest.org",
    To: "hello@hackthenest.org",
    TemplateId: 1,
    TemplateModel: { name: "Alex", email: "alexluo92823@gmail.com" },
    TrackOpens: true,
  },
]);
