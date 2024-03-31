import express from "express";
import mongoose, { Mongoose } from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import route from "./routes/userRoute.js";

const app = express(); // Initialize the Express application
app.use(bodyParser.json()); // Middleware to parse JSON bodies of incoming requests
app.use(cors()); // Middleware to enable Cross-Origin Resource Sharing (CORS)
dotenv.config(); // Load environment variables from a .env file into process.env

const PORT = process.env.PORT || 7000;
const URL = process.env.MONGOURL;

mongoose
  .connect(URL)
  .then(() => {
    console.log("DB CONNECTED SUCESSFULLY");
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));

app.use("/api", route);
