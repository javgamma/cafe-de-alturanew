import { clientPromise } from '/lib/mongodb.js';
import { Product } from '/models/Product.js';
import { NextResponse } from 'next/server';


export async function GET(request) {
  try {
    const client = await clientPromise;
    const db = client.db("cafeDB");

    const products = await db.collection("products").find({}).toArray();
    return NextResponse.json(products);
  } catch (e) {
    console.error('MongoDB connection error:', e);
    return NextResponse.json({ error: 'Error connecting to database' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db("cafeDB");

    const { brand, price, img_url, available } = await request.json();
    const newProduct = new Product(brand, price, img_url, available);
    const result = await db.collection("products").insertOne(newProduct);
    return NextResponse.json(result, { status: 201 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Error creating product' }, { status: 500 });
  }
}

// Implementa PUT y DELETE de manera similar