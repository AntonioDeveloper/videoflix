import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../FormField/index';
import Button from '../../Button/button';
import videosRepository from '../../../repositories/dadosVideos';
import categoriasRepository from '../../../repositories/dadosCategorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: 'Vídeo padrão',
    url: 'https://youtu.be/aW_AgvnD3hk',
    categoria: 'Front-End',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categorias) => {
        setCategorias(categorias);
      })
  }, []);

  console.log(categoryTitles);

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        // alert('Vídeo cadastrado com sucesso!!');

        //aqui, eu pego os valores que vierem do array "categorias e procuro nele
        // um título que seja igual ao valor digitado no formulário. Caso o valor seja 
        //igual, o método retornará um objeto (categoria) que conterá o id que necessito
        //para cadastrar o vídeo no lugar certo."
        const categoriaEscolhida = categorias.find((categoria) => {
          return categoria.titulo === values.categoria;
        });

        console.log('categoriaEscolhida', categoriaEscolhida);

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
            console.log("Vídeo cadastrado com sucesso EEEEEEEE!");
            history.push('/');
          })

      }}>
        <FormField
          label="Título do Vídeo"
          type="text"
          name="titulo"
          placeholder="Título do Vídeo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          type="url"
          name="url"
          placeholder="Endereço URL do Vídeo"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          type="text"
          name="categoria"
          placeholder="Categoria do Vídeo"
          value={values.categoria}
          onChange={handleChange}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault >
  )
}

export default CadastroVideo;