// import { getClient } from '../../../../lib/mongodb.mjs';
import { v4 as uuidv4 } from 'uuid';
import clientPromise from '../../../../lib/mongodb.mjs';
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