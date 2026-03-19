import express from "express";
import { routes } from "./routes/index.js";
import cors from "cors";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()

app.use(cors())
app.use("/images", express.static(path.join(__dirname, '../public')));
routes(app)

export { app }