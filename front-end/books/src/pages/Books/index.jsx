import { Link } from "react-router-dom";
import "./styles.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { maskPrice } from "../../helpers/functions";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setBooks(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllBooks();
  }, []);

  console.log("books", books);

  return (
    <div className="ContainerBook">
      <h1>Livraria Codando Loucamente</h1>

      <button className="addNewBook">
        <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
          Adicionar Livro
        </Link>
      </button>

      <div className="books">
        {books.map((book) => (
          <div className="book" key={book._id}>
            <img src={book.cover} alt={book.title} />
            <h2>{book.title}</h2>

            <p>{book.desc}</p>

            <span>{maskPrice(book.price)}</span>

            <div className="container-buttons">
              <button className="delete">Deletar</button>
              <button className="update">
                <Link
                  to={`/update/${book._id}`}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Atualizar
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
