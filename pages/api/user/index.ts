import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req);
  console.log(res);
};

export default handler;
