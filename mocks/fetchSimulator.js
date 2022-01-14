const quote = require('./quote');
const characters = require('./characters');

const ENDPOINTS = {
  QUOTE: 'https://game-of-thrones-quotes.herokuapp.com/v1/random',
  CHARACTERS: 'https://thronesapi.com/api/v2/Characters',
};

const TIME_IN_MILLISECONDS = 200;

const fetchSimulator = (url) => {
  if (typeof url === undefined || url.endsWith('undefined')) {
    return Promise.reject(new Error('You must provide an url'));
  }
  const validUrl = Object.values(ENDPOINTS).includes(url);
  return Promise.resolve({
    status: validUrl ? 200 : 404,
    ok: validUrl,
    json: () => new Promise((resolve) => {
      setTimeout(() => {
        if (url === ENDPOINTS.QUOTE) {
          return resolve(quote);
        }

        if (url === ENDPOINTS.CHARACTERS) {
          return resolve(characters);
        }

        return resolve({ results: [] });
      }, TIME_IN_MILLISECONDS);
    }),
  });
};

window.fetch = jest.fn(fetchSimulator);
afterEach(jest.clearAllMocks);

module.exports = fetchSimulator;