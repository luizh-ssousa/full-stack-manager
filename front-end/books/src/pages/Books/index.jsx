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
    </div>
  );
};

export default Books;
