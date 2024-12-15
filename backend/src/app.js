import express from "express"
import { routes } from "./routes/index.js"
import { main } from "./db/mongodb.js"

const app = express()
app.use(express.json())
routes(app)

export { app, main }