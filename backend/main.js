import { app, main } from "./src/app.js"

const port = 3000
const db = await main()
db
.on("error", erro => console.log(erro))
.once("open", () => {
    
})
app.listen(port, '0.0.0.0', () => {
  console.log(`servidor disponivel no http://localhost:${port}/`)
})