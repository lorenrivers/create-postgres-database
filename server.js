import express from "express";
import cors from "cors";
import dotenv from "dotenv";
const PORT = 4444;
import pg from "pg";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

export const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

//could also put inside a const e.g:
// const dbDatabase = process.env.DATABASE_URL
// export const db = new pg.Pool({
//   connectionString: dbDatabase,
// });

//setting up a root route (home page) to confirm server is working
app.get("/", (req, res) => {
  res.send("Root route is here!");
});

//get dogs table. result.rows displays all results row by row.
app.get("/dogs", async (req, res) => {
  const result = await db.query("SELECT * FROM dogs");
  res.json(result.rows);
});

app.listen(PORT, () => {
  console.log(`Server running on  ${PORT}`);
});
