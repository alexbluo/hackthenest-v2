import { NextApiRequest, NextApiResponse } from "next";

// edit user rsvp application etc
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req);
  console.log(res);
};

export default handler;
