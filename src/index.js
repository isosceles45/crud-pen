import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from "./config/db.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Testing db connection
app.get('/', async (req, res) => {
    try {
        const result = await pool.query("SELECT current_database()");
        res.json({ message: `The database returned ${result.rows[0].current_database}` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});


app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})