import { NextApiRequest, NextApiResponse } from "next";

interface NextApiRequestType extends NextApiRequest {
  query: {
    email: string;
  };
}

const handler = async (req: NextApiRequestType, res: NextApiResponse) => {
  const { email } = req.query;

};

export default handler;
