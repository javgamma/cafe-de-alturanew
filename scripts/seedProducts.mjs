import clientPromise from '../lib/mongodb.mjs';
import { v4 as uuidv4 } from 'uuid';
import { MongoClient } from 'mongodb';

const products = [
  { "brand": "Costa Rica Tarrazú", "price": 9.00, "img_url": "https://res.cloudinary.com/dalssoks9/image/upload/v1666638763/cafe_de_altura/coffee_bag_costa_rica_tarrazu_jejzcp.png", "available": true },
  { "brand": "Colombia Los Naranjos", "price": 9.00, "img_url": "https://res.cloudinary.com/dalssoks9/image/upload/v1666638763/cafe_de_altura/coffee_bag_colombia_los_naranjos_iajcb4.png", "available": true },
  { "brand": "Laos Amanecer", "price": 9.00, "img_url": "https://res.cloudinary.com/dalssoks9/image/upload/v1666638764/cafe_de_altura/coffee_bag_laos_amanecer_wxhu0p.png", "available": true },
  { "brand": "Etiopía Yrgacheff", "price": 9.00, "img_url": "https://res.cloudinary.com/dalssoks9/image/upload/v1666638763/cafe_de_altura/coffee_bag_etiopia_yrgacheff_lwopk9.png", "available": true },
  { "brand": "Kenia Ndunduri", "price": 15.00, "img_url": "https://res.cloudinary.com/dalssoks9/image/upload/v1666638764/cafe_de_altura/coffee_bag_kenia_ndunduri_dt0msh.png", "available": true },
  { "brand": "Etiopía Sidamo", "price": 17.00, "img_url": "https://res.cloudinary.com/dalssoks9/image/upload/v1666638763/cafe_de_altura/coffee_bag_etiopia_sidamo_obmho6.png", "available": true },
  { "brand": "Costa Rica Monte Bello", "price": 12.00, "img_url": "https://res.cloudinary.com/dalssoks9/image/upload/v1666638763/cafe_de_altura/coffee_bag_costa_rica_monte_bello_v1oscf.png", "available": true },
  { "brand": "Colombia La Casita", "price": 9.00, "img_url": "https://res.cloudinary.com/dalssoks9/image/upload/v1666638763/cafe_de_altura/coffee_bag_colombia_la_casita_pefsel.png", "available": false }
];


const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function seedDatabase() {
  try {
    await client.connect();
    const database = client.db('cafedealturadb');
    const collection = database.collection('products');
    
    const result = await collection.insertMany(products);
    console.log(`${result.insertedCount} documents were inserted`);
  } finally {
    await client.close();
  }
}

seedDatabase().catch(console.error);