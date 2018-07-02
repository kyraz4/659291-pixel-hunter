import GameRules from './views/rulesView';
import startGame from './new-game';
import IntroScreen from './IntroScreen';
import changeScreen from './selectPage.js';
import Application from './Application';

export default class RulesScreen {
  constructor(model) {
    this.model = model;
    this.content = new GameRules();


    this.content.OnRulesFormClick = () => {
      this.userName = this.content.playerName();
      Application.showGame(this.userName);
      // startGame();
    };
    this.content.OnHeaderBackClick = () => {
      this.nextLevel = new IntroScreen();
      changeScreen(this.nextLevel.element);
    };

    this.root = document.createElement(`div`);
    this.root.appendChild(this.content.element);
  }

  get element() {
    return this.root;
  }


}
