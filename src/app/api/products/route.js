import { NextResponse } from 'next/server';
import clientPromise from '../../../../lib/mongodb.mjs';
import { v4 as uuidv4 } from 'uuid';

export async function GET() {
  const client = await clientPromise;
  const db = client.db("cafeDB");
  const products = await db.collection("products").find({}).toArray();
  return NextResponse.json(products);
}

export async function POST(request) {
  const client = await clientPromise;
  const db = client.db("cafeDB");
  const data = await request.json();
  const newProduct = { ...data, _id: uuidv4() };
  await db.collection("products").insertOne(newProduct);
  return NextResponse.json(newProduct, { status: 201 });
}