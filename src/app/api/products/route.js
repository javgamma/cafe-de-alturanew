// import { getClient } from '../../../../lib/mongodb.mjs';
import { v4 as uuidv4 } from 'uuid';
import clientPromise from '../../../../lib/mongodb.js';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("cafeDB");
    const products = await db.collection("products").find({}).toArray();
    return NextResponse.json(products, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  } catch (error) {
    console.error('Error in GET function:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
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
    const client = await clientPromise;
    const db = client.db("cafeDB");
    const data = await request.json();
    const newProduct = { ...data, _id: uuidv4() };
    await db.collection("products").insertOne(newProduct);
    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    console.error('Error in POST function:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}