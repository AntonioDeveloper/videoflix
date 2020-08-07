import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button/button';

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
  }

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);



  //useEffect: determina um efeito como consequência de um gatilho 
  //(definido por um array). Caso haja array vazio, esse efeito ocorre em toda e qualquer interação.
  //Se não houver array algum, haverá o loop infinito...
  useEffect(() => {
    // Criação da variável de ambiente
    const URL_TOP = window.location.hostname.includes('localhost') ?
      'http://localhost:8080/categorias' :
      'https://videoflix-backend.herokuapp.com/categorias';

    fetch(URL_TOP)
      .then(async (res) => {
        const resposta = await res.json();
        console.log(resposta);
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);


  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form align="center" onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);

        clearForm()
      }}>

        <FormField
          label="Nome da Categoria"
          type="text"
          name="titulo"
          placeholder="Nome da categoria"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição:"
          as="textarea"
          name="descricao"
          value={values.descricao}
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

        <Button style={{ marginTop: "10px" }}>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        < div >
          Carregando...
        </div>
      )}

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`} style={{ display: "flex" }} >
              {categoria.titulo}, {categoria.descricao},  <span style={{ background: categoria.cor, width: "100px", height: "20px", marginLeft: "5px" }}></span>
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