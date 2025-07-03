// pages/api/saveTest.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const data = req.body;
    const filePath = path.join(process.cwd(), 'data.csv');
    const row = `"${data.farmId}","${data.animalType}","${data.testDate}","${data.testResult}","${data.notes.replace(/\n/g, ' ')}"\n`;

    try {
      if (!fs.existsSync(filePath)) {
        const headers = 'Farm ID,Animal Type,Test Date,Test Result,Notes\n';
        fs.writeFileSync(filePath, headers, 'utf8');
      }
      fs.appendFileSync(filePath, row, 'utf8');
      res.status(200).json({ message: 'Data saved to CSV' });
    } catch (error) {
      console.error('Error writing to CSV', error);
      res.status(500).json({ message: 'Failed to save data' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
