import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/authRoute.js";
import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use(express.json()); //to parse json request with JSON payload from req.body

app.use("/api/auth", authRoute);

app.listen(PORT, () => {
  connectMongoDB();
  console.log(`Server running on port http://localhost:${PORT}`);
});
