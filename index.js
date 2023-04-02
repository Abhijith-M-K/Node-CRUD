import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDB from "./config/dbConnect.js";
import cameraRoute from './routes/cameraRoute.js'

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();
connectDB();

//Middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/",cameraRoute);
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
