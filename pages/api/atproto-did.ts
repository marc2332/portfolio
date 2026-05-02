import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  res.status(200).send('did:plc:vepuq63qp2votu7qykixtucv')
}
