import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState('');


  function setValue(chave, valor) {
    // chave: nome, descricao, bla, bli
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
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

      <form align="center" onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);

        setValues(valoresIniciais)
      }}>

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          placeholder="Nome da categoria"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição:"
          type="textarea"
          name="descricao"
          value={values.descricao}
          cols={50}
          rows={4}
          placeholder="Descrição"
          onChange={handleChange}
        />
        {/* <div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={values.descricao}
              name="descricao"
              onChange={handleChange}
            />
          </label>
        </div> */}

        <h4 align="center">Cor:</h4>
        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />
        {/* <div>
          <label>
            Cor:
            <input
              type="color"
              value={values.cor}
              name="cor"
              onChange={handleChange}
            />
          </label>
        </div> */}

        <button style={{ marginTop: "10px" }}>
          Cadastrar
        </button>
      </form>


      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`} style={{ display: "flex" }} >
              {categoria.nome}, {categoria.descricao},  <span style={{ background: categoria.cor, width: "100px", height: "20px", marginLeft: "5px" }}></span>
            </li>

          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault >
  )
}

export default CadastroCategoria;