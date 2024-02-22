//need this to access database url in the .env
import dotenv from "dotenv";
dotenv.config();

//need this to access postgres
import pg from "pg";
export const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

//create table
db.query(`CREATE TABLE IF NOT EXISTS dogs (
dog_id SERIAL PRIMARY KEY,
name VARCHAR(255),
size VARCHAR(255)
)`);

//seed table with initial data
db.query(`INSERT INTO dogs (name, size)
VALUES
('Bernese Mountain Dog', 'Large'),
('Daschund', 'Small'),
('Labrador', 'Medium')
`);
