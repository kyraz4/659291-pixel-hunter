import {INITIAL_GAME} from './config';
import changeScreen from './selectPage';
import {getElementFromTeamplate} from './elemFromTemplate';
import {fillStats} from './fillStats';
import {GAME} from './game-content';
import GameHeader from './views/levelHeaderViews';
import {renderLevelOfType} from './screens/renderLevel.js';
import {canContinue, endOfGame} from './screens/game-logic';
import statsScreen from './screens/stats';

const LEVELS_TYPES = {
  SINGLE: 1,
  DOUBLE: 2,
  TRIPLE: 3
};

export const getLevel = (i) => GAME.levels[i];

export default class GameScreen {
  constructor(model) {
    this.model = model;
    this.header = new GameHeader(this.model._state);
    this.content = renderLevelOfType(getLevel(this.model._state.level));

    if (getLevel(this.model._state.level).type === LEVELS_TYPES.SINGLE) {

      this.content.onAnswer = this.answerHeandlerTypeOne;
    } else if (getLevel(this.model._state.level).type === LEVELS_TYPES.DOUBLE) {
      this.content.onAnswer = answerHendlerTypeTwo;
    } else if (getLevel(this.model._state.level).type === LEVELS_TYPES.TRIPLE) {
      this.content.onAnswer = answerHendlerTypeThree;
    }

    this.root = document.createElement(`div`);
    this.root.appendChild(this.header.element);
    this.root.appendChild(this.content.element);
    // let putFooterStats = this.content.querySelector(`.stats`);
    // putFooterStats.appendChild(fillStats(this.model._state.stats));

    this._interval = null;
  }

  get element() {
    return this.root;
  }

  startGame() {
    this.changeLevel();
  }

  answerHeandlerTypeOne(answer) {
   
    const level = getLevel(this.model._state.level);
    console.log(level.answers.answerInputTrueValue);
    if (!endOfGame(this.model._state)) {
      if (answer === level.answers.answerInputTrueValue) {
        this.model._state.stats[this.model._state.level] = `CORRECT`;
      } else if (answer !== level.answers.answerInputTrueValue) {
        this.model._state.stats[this.model._state.level] = `WRONG`;
        this.model._state.lives--;
        this.model.nextLevel();
        this.startGame();
      }
      changeScreen(statsScreen(this.model._state));
    } else
    if (canContinue(this.model._state)) {
      if (answer === level.answers.answerInputTrueValue) {
        this.model._state.stats[this.model._state.level] = `CORRECT`;
        this.model.nextLevel();
        this.startGame();
        // startTimer();
      } else if (answer !== level.answers.answerInputTrueValue) {
        this.model._state.stats[this.model._state.level] = `WRONG`;
        this.model._state.lives--;
        this.model.nextLevel();
        this.startGame();
        // startTimer();
      }
    } else if (!canContinue(this.model._state)) {
      this.model._state.stats[this.model._state.level] = `WRONG`;
      changeScreen(statsScreen(this.model._state));
    }
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
