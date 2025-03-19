import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.set("strictQuery", true);

mongoose.connect("mongodb://localhost:27017/test", {
  useNewUrlParser: true,
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

app.get("/books", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(580).json(err);
  }
});

app.get("/books/:id", async (req, res) => {
  try {
    const books = await Book.findById(req.params.id);
    if (book) {
      res.json(book);
    } else {
      res.status(400).json({ message: "Livro não encontrado" });
    }
    res.json(books);
  } catch (err) {
    res.status(580).json(err);
  }
});

app.listen(8800, () => {
  console.log("Back-end conectado!");
});
