import "./styles.css";

const Books = () => {
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
          <h2>nome do livro</h2>

          <p>descrição do livro</p>

          <span>Preço do livro</span>

          <div className="container-buttons">
            <button>Deletar</button>
            <button>Atualizar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
