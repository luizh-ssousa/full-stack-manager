import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddBook = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: ",",
  });

  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleCLick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/books", book);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="form">
      <h1>Adicionar um novo livro</h1>

      <input
        type="text"
        placeholder="Nome do livro"
        name="title"
        onChange={handleChange}
      />
      <textarea
        rows={5}
        type="text"
        placeholder="Descrição"
        name="desc"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Preço"
        name="price"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="URL da capa do livro"
        name="cover"
        onChange={handleChange}
      />

      <button onClick={handleCLick}>Adicionar</button>
      {error && "Algo deu errado!"}
      <Link to="/">Ver todos os livros</Link>
    </div>
  );
};

export default AddBook;
