import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.set("strictQuery", true);

mongoose.connect("mongodb://localhost:27017/test", {
    useNewUrlParse: true,
    useUnifiedTopology: true,
});

const bookSchema = new mongoose.Schema({
    title: String,
    desc: String,
    price: Number,
    cover: String,
});