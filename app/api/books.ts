import { NextApiRequest, NextApiResponse } from 'next';
import books from '../data/books';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    res.status(200).json(books);
  } else {
    res.status(405).end();  // Method Not Allowed
  }
}

export default handler;