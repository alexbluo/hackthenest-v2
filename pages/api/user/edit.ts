import { NextApiRequest, NextApiResponse } from "next";

// edit user rsvp application etc
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req);
  console.log(res);
  res.json("hi");
};

export default handler;
