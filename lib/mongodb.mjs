import { MongoClient } from 'mongodb';

const uri="mongodb+srv://javmirh:19639216@cafedealtura.tjwge.mongodb.net/?retryWrites=true&w=majority&appName=cafeDeAltura";
const options = {};

let client;
let mongoClientPromise;

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  mongoClientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  mongoClientPromise = client.connect();
}

export async function getClient() {
  return mongoClientPromise;
}