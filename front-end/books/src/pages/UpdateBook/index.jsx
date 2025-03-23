import { Link, useNavigate, useParams } from "react-router-dom";
import "./styles.css";
import { useEffect, useState } from "react";
import axios from "axios";

const UpdateBook = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: ",",
  });

  const [error, setError] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/books/${id}`);
        setBook(res.data);
      } catch (error) {
        console.log(
          "Erro ao buscar o livro",
          error.response ? error.response.data : error.message
        );
      }
      setError(true);
    };
    fetchBook();
  }, [id]);

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCLick = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8800/books/${id}`, book);
      navigate("/");
    } catch (error) {
      console.log(
        "Erro ao atualizar livro",
        error.response ? error.response.data : error.message
      );
      setError(true);
    }
  };

  return (
    <div className="form">
      <h1>Atualizar livro</h1>

      <input
        type="text"
        placeholder="Nome do livro"
        name="title"
        onChange={handleChange}
        value={book?.title || ""}
      />
      <textarea
        rows={5}
        type="text"
        placeholder="Descrição"
        name="desc"
        onChange={handleChange}
        value={book?.desc || ""}
      />
      <input
        type="number"
        placeholder="Preço"
        name="price"
        onChange={handleChange}
        value={book?.price || ""}
      />
      <input
        type="text"
        placeholder="URL da capa do livro"
        name="cover"
        onChange={handleChange}
        value={book?.cover || ""}
      />

      <button onClick={handleCLick}>Atualizar</button>
      {error && "Algo deu errado!"}
      <Link to="/">Ver todos os livros cadastrados</Link>
    </div>
  );
};

export default UpdateBook;
