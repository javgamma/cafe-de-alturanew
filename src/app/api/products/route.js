import { NextResponse } from 'next/server';
import { getClient } from '../../lib/mongodb.mjs';
import { v4 as uuidv4 } from 'uuid';

export async function GET() {
  try {
    const client = await getClient();
    const db = client.db("cafeDB");
    const products = await db.collection("products").find({}).toArray();
    return NextResponse.json(products);
  } catch (e) {
    return NextResponse.json({ error: 'Error fetching products' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const client = await getClient();
    const db = client.db("cafeDB");
    const products = await request.json();
    const productsToInsert = products.map(product => ({
      ...product,
      _id: uuidv4()
    }));
    const result = await db.collection("products").insertMany(productsToInsert);
    return NextResponse.json(result, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: 'Error inserting products' }, { status: 500 });
  }
}