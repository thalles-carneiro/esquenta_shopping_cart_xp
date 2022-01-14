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

function createProductItemElement({ title, fullName, image }) {
  const section = document.createElement('section');
  section.className = 'char';

  section.appendChild(createCustomElement('span', 'char__name', fullName));
  section.appendChild(createCustomElement('span', 'char__title', title));
  section.appendChild(createCharacterImageElement(image));

  return section;
}

window.onload = () => { };
