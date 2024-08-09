import { clientPromise } from '/lib/mongodb.js';
import { Product } from '/models/Product.js';
import { NextResponse } from 'next/server';
import Cors from 'cors';

// Inicializa el middleware CORS
const cors = Cors({
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  origin: 'https://cafe-de-alturanew-snyr-q7dfqlaxf-javmirs-projects.vercel.app',
});

// Helper function para ejecutar el middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export async function GET(request) {
  await runMiddleware(request, NextResponse, cors);

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
  await runMiddleware(request, NextResponse, cors);

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
export async function PUT(request) {
  await runMiddleware(request, NextResponse, cors);

  try {
    const client = await clientPromise;
    const db = client.db("cafeDB");
    
    const { id, brand, price, img_url, available } = await request.json();
    const result = await db.collection("products").updateOne(
      { _id: id },
      { $set: { brand, price, img_url, available } }
    );
    return NextResponse.json(result);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Error updating product' }, { status: 500 });
  }
}

export async function DELETE(request) {
  await runMiddleware(request, NextResponse, cors);

  try {
    const client = await clientPromise;
    const db = client.db("cafeDB");
    
    const { id } = await request.json();
    const result = await db.collection("products").deleteOne({ _id: id });
    return NextResponse.json(result);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Error deleting product' }, { status: 500 });
  }
}

