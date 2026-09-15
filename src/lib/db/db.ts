import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";

const { DATABASE_URL } = process.env;
if (!DATABASE_URL) throw new Error("Add db url!");

const db = drizzle(DATABASE_URL);

export default db;
