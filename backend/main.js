import { app, main } from "./src/app.js"

const port = 3000

const db = await main()
db
.on("error", erro => console.log(erro))
.once("open", () => {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })
})
