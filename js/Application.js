import IntroScreen from './IntroScreen';
import GameModel from './GameModel';
import GameScreen from './GameScreen';

const main = document.querySelector(`main.central`);
const changeView = (element) => {
  main.innerHTML = ``;
  main.appendChild(element);
};

export default class Application {

  static showWelcome() {
    const welcome = new IntroScreen();
    changeView(welcome.element);
  }

  static showGame(userName) {
    const model = new GameModel(userName);
    console.log(model);
    const gameScreen = new GameScreen(model);
    console.log(gameScreen);
    changeView(gameScreen.element);
    gameScreen.startGame();
  }

//   static showStats(stats) {
//     const statistics = new StatsScreen(stats);
//     changeView(statistics.element);
//   }

}
