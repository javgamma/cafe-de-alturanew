// lib/cors.js
import cors from 'cors';

const corsMiddleware = cors({
  origin: ['http://localhost:3000', 'https://cafe-de-alturanew.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
});

export function runMiddleware(req, res) {
  return new Promise((resolve, reject) => {
    corsMiddleware(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}
