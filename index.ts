import express, { Express, Request, Response } from "express"
import dotenv from "dotenv"
dotenv.config()
import { connect } from "./config/database"
import { RoutesClient } from "./routes/client/index_route"
import bodyParser from "body-parser";
import cors from "cors";
connect(process.env.MONGO_URL)
const app: Express = express()
const port: Number = 3000;

// // Tất cả tên miền được phép truy cập vào
app.use(cors());
// Cho phép 1 tên miền cụ thể được phép truy cập
// const corsOptions = {
//   origin: 'http://example.com',
//   optionsSuccessStatus: 200
// }
// cors(corsOptions);


app.use(bodyParser.json());

RoutesClient(app)

app.listen(port, () => {
  console.log(`website đang chạy localhot: http://localhost:${port}`)
})