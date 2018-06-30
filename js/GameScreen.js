import {INITIAL_GAME} from './config';
import changeScreen from './selectPage';
import {getElementFromTeamplate} from './elemFromTemplate';
import {fillStats} from './fillStats';
import {GAME} from './game-content';
import GameHeader from './views/levelHeaderViews';
import {renderLevelOfType} from './screens/renderLevel.js';
import {canContinue, endOfGame} from './screens/game-logic';
import statsScreen from './screens/stats';

export const getLevel = (i) => GAME.levels[i];

export default class GameScreen {
  constructor(model) {
    this.model = model;
    this.header = new GameHeader(this.model._state);
    this.content = renderLevelOfType(getLevel(this.model._state.level));

    this.root = document.createElement(`div`);
    this.root.appendChild(this.header.element);
    this.root.appendChild(this.content.element);
    let putFooterStats = this.content.querySelector(`.stats`);
    putFooterStats.appendChild(fillStats(this.model._state.stats));

    this._interval = null;
  }

  get element() {
    return this.root;
  }

  startGame() {
    this.changeLevel();

  }

  onAnswer() {

  }

  restart(continueGame) {
    if (!continueGame) {
      this.model.restart();
    }
    this.startGame();
  }

  updateHeader() {
    const header = new GameHeader(this.model.state);
    this.root.replaceChild(header.element, this.header.element);
    this.header = header;
  }

  changeLevel() {
    this.updateHeader();

    const level = renderLevelOfType(getLevel(this.model._state.level));
    level.onAnswer = this.answer.bind(this);
    this.changeContentView(level);
  }

  changeContentView(view) {
    this.root.replaceChild(view.element, this.content.element);
    this.content = view;
  }

}
