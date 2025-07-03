// pages/api/saveTest.ts
export default async function handler(req, res) {
    if (req.method === 'POST') {
      // Just simulate success for now
      console.log('Received data:', req.body);
      res.status(200).json({ message: 'Pretend data saved' });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  