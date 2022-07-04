import type { NextApiRequest, NextApiResponse } from 'next';
import * as fs from 'fs';


type Data = {
  name: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  let data = await fs.promises.readFile("public/data/tech_stack.json", 'utf-8');
  res.status(200).json(JSON.parse(data).tech_stacks);
}