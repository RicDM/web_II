import { main } from "./conn/mongo.conn.js";
import { Rental } from "./models/rental.js";
import { User } from "./models/user.js";

const db = await main()
db
.on("error", erro => console.log(erro))
.once("open", () => {})
export { Rental, User }