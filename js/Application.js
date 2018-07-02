import IntroScreen from './IntroScreen';
import GameModel from './GameModel';
import GameScreen from './GameScreen';
import adaptServerData from './adapter';

const main = document.querySelector(`main.central`);
const changeView = (element) => {
  main.innerHTML = ``;
  main.appendChild(element);
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

  static start() {
    window.fetch(`https://es.dump.academy/pixel-hunter/questions`).
    then(checkStatus).
    then((response) => response.json()).
    then((data) => gameData = adaptServerData(data)).
    then(() => Application.showWelcome());
  }

  static showWelcome() {
    const welcome = new IntroScreen();
    changeView(welcome.element);
  }

  static showGame(userName) {
    const model = new GameModel(userName);
    const gameScreen = new GameScreen(gameData, model);
    changeView(gameScreen.element);
    gameScreen.startGame();
  }

//   static showStats(stats) {
//     const statistics = new StatsScreen(stats);
//     changeView(statistics.element);
//   }
}
