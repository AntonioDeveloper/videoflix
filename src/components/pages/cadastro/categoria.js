import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../PageDefault';
import FormField from '../../FormField'
//import { createGlobalStyle } from 'styled-components';

function CadastroCategoria() {

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values, [chave]: valor,
    })
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias, values
        ]);

        setValues(valoresIniciais);

      }}>

        <FormField
          label="Categoria"
          name="name"
          type="text"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          name="descricao"
          type="textarea"
          rows="4"
          cols="50"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          name="name"
          type="color"
          value={values.cor}
          onChange={handleChange} />

        <button>
          Cadastrar
        </button>

      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria} ${indice}`}>
              {categoria.nome}
              {categoria.descricao}
              {categoria.cor}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Página inicial
      </Link>
    </PageDefault >
  )
}

export default CadastroCategoria;