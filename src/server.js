import express from "express"
import cors from "cors"
import path from "path"
import "./config/association.js"
import { userRouter } from "./routes/user.routes.js"
import { requestRouter } from "./routes/request.routes.js"
import { donorRouter } from "./routes/donor.routes.js"
import { donationRouter } from "./routes/donation.routes.js"
import { addressRouter } from "./routes/address.routes.js"
import { fileURLToPath } from "url"
import { opinionRouter } from "./routes/opinion.routes.js"


const app = express()
const port = 4000
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json())
app.use(cors())
app.use(userRouter)
app.use(requestRouter)
app.use(donorRouter)
app.use(donationRouter)
app.use(addressRouter)
app.use(opinionRouter)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));




app.listen(port, () => {
    console.log(`servidor rodando na porta: ${port}`)
})