// API: https://pokeapi.co/

const URL_POKEMONS = 'https://pokeapi.co/api/v2/pokemon';

const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const createCard = ({ name, image }) => {
  const div = document.createElement('div');

  const h4 = document.createElement('h4');
  h4.innerText = name;

  const img = document.createElement('img');
  img.src = image;
  
  div.appendChild(h4);
  div.appendChild(img);

  return div;
};

const getAllPokemons = async () => {
  const { results } = await fetchData(URL_POKEMONS);

  const pokeList = results.map(async ({ url }) => {
    const {
      name,
      sprites: { other: { 'official-artwork': { front_default: image } } },
    } = await fetchData(url);
    return { name, image };
  });

  const pokemons = await Promise.all(pokeList);

  pokemons.forEach(({ name, image }) => {
    const pokemonCard = createCard({ name, image });
    document.body.appendChild(pokemonCard);
  });
};

getAllPokemons();