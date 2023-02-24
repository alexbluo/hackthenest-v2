import { NextApiRequest, NextApiResponse } from "next";

// create a new email/password, id, etc
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req);
  console.log(res);
};

export default handler;
