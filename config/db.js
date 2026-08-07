import "dotenv/config";
import { MongoClient } from "mongodb";

const url = process.env.MONGODB_URL;
const client = new MongoClient(url);

const dbName = process.env.DB_NAME;

export default async function main() {
  // Use connect method to connect to the server
  await client.connect();

  const db = client.db(dbName);
  const collection = db.collection("courses_db");

  return "Connected successfully to server";
}

main().then(console.log).catch(console.error);
