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

const Book = mongoose.model("Book", bookSchema);

app.get("/", (req, res) => {
    res.json("Conectado jovem Padawan!");
});

app.listen(8800, () => {
    console.log("Back-end conectado!");
});