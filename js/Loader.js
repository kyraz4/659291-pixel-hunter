const SERVER_URL = `https://es.dump.academy/pixel-hunter`;

const DEFAULT_NAME = `o0`;
const APP_ID = 19870714;

const OK_STATUS = 200;
const ERROR_STATUS = 300;

export const checkStatus = (response) => {
  if (response.status >= OK_STATUS && response.status < ERROR_STATUS) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

const toJSON = (res) => res.json();

export default class Loader {

  static loadResults(name = DEFAULT_NAME) {
    return fetch(`${SERVER_URL}/stats/${APP_ID}-${name}`).then(checkStatus).then(toJSON);
  }

  static saveResults(data, name = DEFAULT_NAME) {

    data = Object.assign({name}, data);
    const requestSettings = {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': `application/json`
      },
      method: `POST`
    };
    return fetch(`${SERVER_URL}/stats/${APP_ID}-${name}`, requestSettings).then(checkStatus).then(() => {
    });
  }
}
