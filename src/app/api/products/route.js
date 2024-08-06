import { clientPromise } from '../../../../lib/mongodb.js';
import { Product } from '../../../../models/Product.js';

// Maneja las solicitudes API relacionadas con los productos

export async function GET(request) {
  const client = await clientPromise;
  const db = client.db("cafeDB");

  const url = new URL(request.url);
  const id = url.searchParams.get('id');

  if (id) {
    // Obtener un solo producto por ID
    try {
      const product = await db.collection("products").findOne({ _id: id });
      if (!product) {
        return new Response(JSON.stringify({ error: 'Product not found' }), { status: 404 });
      }
      return new Response(JSON.stringify(product), { status: 200 });
    } catch (e) {
      return new Response(JSON.stringify({ error: 'Error fetching product' }), { status: 500 });
    }
  } else {
    // Obtener todos los productos
    try {
      const products = await db.collection("products").find({}).toArray();
      return new Response(JSON.stringify(products), { status: 200 });
    } catch (e) {
      return new Response(JSON.stringify({ error: 'Error fetching products' }), { status: 500 });
    }
  }
}

export async function POST(request) {
  const client = await clientPromise;
  const db = client.db("cafeDB");

  try {
    const { brand, price, img_url, available } = await request.json();
    const newProduct = new Product(brand, price, img_url, available);
    const result = await db.collection("products").insertOne(newProduct);
    return new Response(JSON.stringify(result), { status: 201 });
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Error creating product' }), { status: 500 });
  }
}

export async function PUT(request) {
  const client = await clientPromise;
  const db = client.db("cafeDB");

  try {
    const { id, ...updateData } = await request.json();
    const result = await db.collection("products").updateOne(
      { _id: id },
      { $set: updateData }
    );
    if (result.matchedCount === 0) {
      return new Response(JSON.stringify({ error: 'Product not found' }), { status: 404 });
    }
    return new Response(JSON.stringify({ message: 'Product updated successfully' }), { status: 200 });
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Error updating product' }), { status: 500 });
  }
}

export async function DELETE(request) {
  const client = await clientPromise;
  const db = client.db("cafeDB");

  try {
    const url = new URL(request.url);
    const id = url.searchParams.get('id');
    const result = await db.collection("products").deleteOne({ _id: id });
    if (result.deletedCount === 0) {
      return new Response(JSON.stringify({ error: 'Product not found' }), { status: 404 });
    }
    return new Response(JSON.stringify({ message: 'Product deleted successfully' }), { status: 200 });
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Error deleting product' }), { status: 500 });
  }
}
