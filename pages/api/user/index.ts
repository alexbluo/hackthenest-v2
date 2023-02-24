import { NextApiRequest, NextApiResponse } from "next";

// get user data by query
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req);
  console.log(res);
};

export default handler;
