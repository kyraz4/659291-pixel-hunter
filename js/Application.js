import IntroScreen from './IntroScreen';
import GameScreen from './GameScreen';
import StatsScreen from './StatsScreen';
import ErrorView from './views/ErrorView';
import GameModel from './GameModel';
import Loader from './Loader';

const main = document.querySelector(`main.central`);
const changeView = (element) => {
  main.innerHTML = ``;
  main.appendChild(element.cloneNode(true));
};

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

let gameData;
export default class Application {

  static showWelcome() {
    window.fetch(`https://es.dump.academy/pixel-hunter/questions`).
    then(checkStatus).
    then((Responce) => Responce.json()).
    then((data) => {
      gameData = data;
    }).then(() => {
      const welcome = new IntroScreen(gameData);
      changeView(welcome.element);
    }).catch(Application.showError);
  }

  static showGame(data, userName) {
    const model = new GameModel(data, userName);
    const gameScreen = new GameScreen(model);
    changeView(gameScreen.element);
    gameScreen.startGame();
  }

  static showStats(model) {
    const statistics = new StatsScreen(model);
    Loader.saveResults(model.state, model.playerName).
    then(() => Loader.loadResults(model.playerName));
    changeView(statistics.element);
  }

  static showError(error) {
    const errorView = new ErrorView(error);
    changeView(errorView.element);
  }

}
