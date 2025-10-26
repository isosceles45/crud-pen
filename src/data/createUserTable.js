import pool from "../config/db.js";

const createUserTable = async () => {
    const queryText = `CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);`
    try{
        pool.query(queryText);
        console.log("Successfully created table");
    } catch(err) {
        console.log("Error creating user table", err);
    }
}

export default createUserTable;

