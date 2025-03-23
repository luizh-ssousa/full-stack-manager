

const UpdateBook = () => {
    return(
        <div className="form">
      <h1>Atualizar livro</h1>

      <input
        type="text"
        placeholder="Nome do livro"
        name="title"
        // onChange={handleChange}
      />
      <textarea
        rows={5}
        type="text"
        placeholder="Descrição"
        name="desc"
        //onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Preço"
        name="price"
        //onChange={handleChange}
      />
      <input
        type="text"
        placeholder="URL da capa do livro"
        name="cover"
        //onChange={handleChange}
      />

      <button 
      //onClick={handleCLick}
      
      >Atualizar</button>
      {/*error && "Algo deu errado!"*/}
      <Link to="/">Ver todos os livros cadastradis</Link>
    </div>
    )
}

export default UpdateBook;