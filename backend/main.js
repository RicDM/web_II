import { app } from "./src/app.js"

const port = 3000

app.listen(port, '0.0.0.0', () => {
  console.log(`servidor disponivel no http://localhost:${port}/`)
})