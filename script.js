function createCharacterImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'char__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createCharacterItemElement({ id, fullName, image }) {
  const section = document.createElement('section');
  section.className = 'char';

  section.appendChild(createCustomElement('span', 'char__id', id));
  section.appendChild(createCustomElement('span', 'char__name', fullName));
  section.appendChild(createCharacterImageElement(image));
  section.appendChild(createCustomElement('button', 'char__add', 'Adicionar aos favoritos!'));

  return section;
}

function getIdFromCharacterCard(element) {
  return element.querySelector('span.char__id').innerText;
}

function favoriteCharacterClickListener(event) {
  // coloque seu código aqui
}

function createFavoriteCharacterElement({ title, name, family }) {
  const li = document.createElement('li');
  li.className = 'char__fav';
  li.innerText = `TITLE: ${title} | NAME: ${name} | FAMILY: ${family}`;
  li.addEventListener('click', favoriteCharacterClickListener);
  return li;
}

window.onload = async () => { };
