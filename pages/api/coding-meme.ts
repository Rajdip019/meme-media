// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const res1: Response = await fetch("https://www.reddit.com/r/programmingmemes.json")
  const data = await res1.json();
  res.json(data);
}
