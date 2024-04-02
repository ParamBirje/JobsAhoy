import { Database } from "./types"; // this is the Database interface we defined earlier
import { createPool } from "mysql2"; // do not use 'mysql2/promises'!
import { Kysely, MysqlDialect } from "kysely";

const dialect = new MysqlDialect({
  pool: createPool({
    database: process.env.DATABASE_NAME as string, // Database name
    host: process.env.DATABASE_HOST as string,
    user: process.env.DATABASE_USER as string,
    password: process.env.DATABASE_PASSWORD as string,
    port: Number(process.env.DATABASE_PORT),
    connectionLimit: 10, // default
  }),
});

// Database interface is passed to Kysely's constructor, and from now on, Kysely
// knows your database structure.
// Dialect is passed to Kysely's constructor, and from now on, Kysely knows how
// to communicate with your database.
export const db = new Kysely<Database>({
  dialect,
});
