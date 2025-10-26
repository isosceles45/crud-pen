import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from "./config/db.js";
import {errorHandler} from "./middlewares/errorHandler.js";
import router from "./routes/userRoutes.js";
import createUserTable from "./data/createUserTable.js";

dotenv.config();

const app = express();

// Create db table
createUserTable();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(errorHandler);

// Routes
app.use("/api", router);

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})