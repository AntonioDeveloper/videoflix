import config from '../config/index';

const URL_CATEGORIAS = `${config.URL_BACKEND_TOP}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIAS}`)
    .then(async (res) => {

      if (res.ok) {
        const resposta = await res.json();
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIAS}?_embed=videos`) //embed=videos: serve para o JSON server juntar o vídeo a sua categoria específica
    .then(async (res) => {

      if (res.ok) {
        const resposta = await res.json();
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });

}

export default {
  getAllWithVideos, getAll
}