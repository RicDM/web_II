import express from "express"
import swaggerUi from "swagger-ui-express"
import YAML from 'yamljs';  // Para carregar o arquivo YAML
import { routes } from "./routes/index.js"
import { main } from "./db/mongodb.js"

const app = express()

const swaggerOptions = YAML.load('./src/doc/swagger.yaml');

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerOptions));
routes(app)

export { app, main }