import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@heir/db';

const examples = async (req: NextApiRequest, res: NextApiResponse) => {
  const posts = await prisma.post.findMany();
  res.status(200).json(posts);
};

export default examples;
