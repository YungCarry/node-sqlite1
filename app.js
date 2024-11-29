import express from "express";
import cors from "cors";
import { initializeDB } from "./database.js";
import usersRouter from "./routes/users.js";
import swaggerUI from 'swagger-ui-express';
import {readFile} from 'fs/promises';

const swaggerDocs = JSON.parse(await readFile(new URL('./swaggerDocs.json', import.meta.url)));

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/users", usersRouter);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: err.message });
});

const startServer = async () => {
    await initializeDB();
    app.listen(3000, () => console.log("Server is running on port 3000"));
};

startServer();
