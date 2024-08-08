import { clientPromise } from '../../../../lib/mongodb.js';
import { Product } from '../../../../models/Product.js';
import { runMiddleware } from '../../../../lib/cors.js';
import { NextResponse } from 'next/server';

// Maneja las solicitudes API relacionadas con los productos
export async function GET(request) {
  await runMiddleware(request, NextResponse.next());

  const client = await clientPromise;
  const db = client.db("cafeDB");

  const url = new URL(request.url);
  const id = url.searchParams.get('id');

  if (id) {
    // Obtener un solo producto por ID
    try {
      const product = await db.collection("products").findOne({ _id: id });
      if (!product) {
        return NextResponse.json({ error: 'Product not found' }, { status: 404 });
      }
      return NextResponse.json(product);
    } catch (e) {
      return NextResponse.json({ error: 'Error fetching product' }, { status: 500 });
    }
  } else {
    // Obtener todos los productos
    try {
      const products = await db.collection("products").find({}).toArray();
      return NextResponse.json(products);
    } catch (e) {
      return NextResponse.json({ error: 'Error fetching products' }, { status: 500 });
    }
  }
}

export async function POST(request) {
  await runMiddleware(request, NextResponse.next());

  const client = await clientPromise;
  const db = client.db("cafeDB");

  try {
    const { brand, price, img_url, available } = await request.json();
    const newProduct = new Product(brand, price, img_url, available);
    const result = await db.collection("products").insertOne(newProduct);
    return NextResponse.json(result, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: 'Error creating product' }, { status: 500 });
  }
}

export async function PUT(request) {
  await runMiddleware(request, NextResponse.next());

  const client = await clientPromise;
  const db = client.db("cafeDB");

  try {
    const { id, ...updateData } = await request.json();
    const result = await db.collection("products").updateOne(
      { _id: id },
      { $set: updateData }
    );
    if (result.matchedCount === 0) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Product updated successfully' });
  } catch (e) {
    return NextResponse.json({ error: 'Error updating product' }, { status: 500 });
  }
}

export async function DELETE(request) {
  await runMiddleware(request, NextResponse.next());

  const client = await clientPromise;
  const db = client.db("cafeDB");

  try {
    const url = new URL(request.url);
    const id = url.searchParams.get('id');
    const result = await db.collection("products").deleteOne({ _id: id });
    if (result.deletedCount === 0) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Product deleted successfully' });
  } catch (e) {
    return NextResponse.json({ error: 'Error deleting product' }, { status: 500 });
  }
}