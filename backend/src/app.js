import express from "express"
import { routes } from "./routes/index.js"
import { main } from "./db/mongodb.js"
import cors from "cors"
const app = express()

app.use(cors())
app.use("/images", express.static('./public'));
routes(app)

export { app, main }