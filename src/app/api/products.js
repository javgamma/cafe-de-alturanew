import { clientPromise } from '../../../lib/mongodb.js';
import { Product } from '../../../models/Product.js';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("cafeDB");

  switch (req.method) {
    case 'GET':
      if (req.query.id) {
        // Get a single product
        try {
          const product = await db.collection("products").findOne({ _id: req.query.id });
          if (!product) {
            return res.status(404).json({ error: 'Product not found' });
          }
          res.status(200).json(product);
        } catch (e) {
          res.status(500).json({ error: 'Error fetching product' });
        }
      } else {
        // Get all products
        try {
          const products = await db.collection("products").find({}).toArray();
          res.status(200).json(products);
        } catch (e) {
          res.status(500).json({ error: 'Error fetching products' });
        }
      }
      break;

    case 'POST':
      try {
        const { brand, price, img_url, available } = req.body;
        const newProduct = new Product(brand, price, img_url, available);
        const result = await db.collection("products").insertOne(newProduct);
        res.status(201).json(result);
      } catch (e) {
        res.status(500).json({ error: 'Error creating product' });
      }
      break;

    case 'PUT':
      try {
        const { id, ...updateData } = req.body;
        const result = await db.collection("products").updateOne(
          { _id: id },
          { $set: updateData }
        );
        if (result.matchedCount === 0) {
          return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json({ message: 'Product updated successfully' });
      } catch (e) {
        res.status(500).json({ error: 'Error updating product' });
      }
      break;

    case 'DELETE':
      try {
        const { id } = req.query;
        const result = await db.collection("products").deleteOne({ _id: id });
        if (result.deletedCount === 0) {
          return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted successfully' });
      } catch (e) {
        res.status(500).json({ error: 'Error deleting product' });
      }
      break;

    default:
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}