import IntroScreen from './intro-screen';
import GameScreen from './game-screen';
import StatsScreen from './stats-screen';
import ErrorView from './views/errorView';
import GameModel from './game-model';
import Loader from './loader';
import {checkStatus} from './loader';

const LINK_HTTP = `https://es.dump.academy/pixel-hunter/questions`;
const main = document.querySelector(`main.central`);
const changeView = (element) => {
  main.innerHTML = ``;
  main.appendChild(element.cloneNode(true));
};

let gameData;

export default class Application {

  static showWelcome() {
    window.fetch(LINK_HTTP).
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
