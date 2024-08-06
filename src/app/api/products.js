import clientPromise from '../../../lib/mongodb';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("cafedealturadb");

  switch (req.method) {
    case 'GET':
      try {
        const products = await db.collection("products").find({}).toArray();
        res.status(200).json(products);
      } catch (e) {
        res.status(500).json({ error: 'Error fetching products' });
      }
      break;

    case 'POST':
      try {
        const productsToInsert = req.body.map(product => ({
          ...product,
          _id: uuidv4()
        }));
        const result = await db.collection("products").insertMany(productsToInsert);
        res.status(201).json(result);
      } catch (e) {
        res.status(500).json({ error: 'Error inserting products' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}