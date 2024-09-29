import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDb.js";
import authRoutes from "./routes/auth.route.js"
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("hello world!")
})

app.use("/api/auth", authRoutes)


app.listen(4000, () => {
    connectDB();
    console.log("server is running on port 3000")
})

