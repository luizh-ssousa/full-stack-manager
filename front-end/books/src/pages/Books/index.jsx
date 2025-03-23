import { Link } from "react-router-dom";
import "./styles.css";
import { useEffect, useState } from "react";
import axios from "axios";

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
      
    }
    fetchAllBooks();
  }, []);

  return (
    <div className="ContainerBook">
      <h1>Livraria Codando Loucamente</h1>

      <button className="addNewBook">
        <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
          Adicionar Livro
        </Link>
      </button>

      <div className="books">
        <div className="book">
          <img src={""} alt="" />
          <h2>Nome do livro</h2>

          <p>Descrição do livro</p>

          <span>Preço do livro</span>

          <div className="container-buttons">
            <button className="delete">Deletar</button>
            <button className="update">Atualizar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
