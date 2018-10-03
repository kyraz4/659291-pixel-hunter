import changeScreen from './select-page';
import GameHeader from './views/levelHeaderViews';
import {renderLevelOfType} from './screens/render-level';
import FooterView from './views/FooterView';
import {updateView, resultOfTime} from './new-game';
import Application from './application';

const LEVELS_TYPES = {
  SINGLE: `tinder-like`,
  DOUBLE: `two-of-two`,
  TRIPLE: `one-of-three`
};

const NULL = 0;
const TIME_TO_BLIND = 6;
const ONE_SECOND = 1000;
const TWO = 1;
const FOUR = 3;
const FULL_TIME = 30;
export const getLevel = (i, data) => data[i];

export default class GameScreen {
  constructor(model) {
    this.model = model;
    this.header = new GameHeader(this.model.state).element;
    this.header.classList.add(`header`);
    this.content = renderLevelOfType(getLevel(this.model._state.level, this.model.data), this.model).element;
    this.content.classList.add(`level`);

    this.root = document.createElement(`div`);
    this.root.classList.add(`main_element`);
    this.root.appendChild(this.header);
    this.root.appendChild(this.content);

    let putFooterStats = this.content.querySelector(`.stats`);
    putFooterStats.appendChild(new FooterView(this.model.state).element);

    this._timer = null;
  }

  get element() {
    return this.root;
  }

  startGame() {
    this.updateGame();
    this.startTimer();
  }

  startTimer() {
    this._timer = setTimeout(() => {
      if (this.model.state.lives === NULL) {
        this.stopTimer();
        Application.showStats(this.model);
      } else {
        this.tick();
        this.startTimer();
      }
    }, ONE_SECOND);
    if (this.model.state.time < TIME_TO_BLIND) {
      const blinkIndicator = document.querySelector(`.game__timer`);
      blinkIndicator.classList.add(`blink`);
    }
  }

  stopTimer() {
    this.model.state.time = FULL_TIME;
    clearTimeout(this._timer);
  }

  tick() {
    this.model.state.time--;
    this.updateHeader();
    if (this.model.outOfTime()) {
      this.model.lose();
      this.continueGame();
    }
  }

  updateGame() {
    this.stopTimer();
    this.updateHeader();
    const level = renderLevelOfType(getLevel(this.model._state.level, this.model.data), this.model);
    if (this.model.getCurrentLevel().type === LEVELS_TYPES.SINGLE) {
      level.onAnswer = this.newAnswerHendlerTypeOne.bind(this);
    }
    if (this.model.getCurrentLevel().type === LEVELS_TYPES.TRIPLE) {
      level.onAnswer = this.newAnswerHendlerTypeThree.bind(this);
    }
    if (this.model.getCurrentLevel().type === LEVELS_TYPES.DOUBLE) {
      level.onAnswer = this.newAnswerHendlerTypeTwo.bind(this);
    }
    this.updateElement(level.element);
    let putFooterStats = this.content.querySelector(`.stats`);
    putFooterStats.appendChild(new FooterView(this.model.state).element);
    this.root.insertBefore(this.header, this.content);
  }

  continueGame() {
    this.model.state.level++;
    this.updateGame();
    changeScreen(this.element);
  }

  restart(continueGame) {
    if (!continueGame) {
      this.model.restart();
    }
    this.startGame();
  }


  updateHeader() {
    const newHeaderElement = document.querySelector(`header`);
    updateView(this.header, new GameHeader(this.model.state));
    newHeaderElement.innerHTML = ``;
    newHeaderElement.appendChild(this.header);
  }

  changeContentElement(element) {
    this.root.replaceChild(element, this.content);
    this.content = element;
  }

  updateElement(element) {
    this.content.innerHTML = ``;
    this.content.appendChild(element);
  }

  newAnswerHendlerTypeOne(answer) {
    if (this.model.endOfGame()) {
      if (answer === this.model.data[this.model.state.level].answers[NULL].type) {
        this.model.state.stats[this.model.state.level] = resultOfTime(this.model.state.time);
      } else if (answer !== this.model.data[this.model.state.level].answers[NULL].type) {
        this.model.lose();
      }
      this.stopTimer();
      Application.showStats(this.model);
    } else
    if (this.model.canContinue()) {
      if (answer === this.model.data[this.model.state.level].answers[NULL].type) {
        this.model.state.stats[this.model.state.level] = resultOfTime(this.model.state.time);
      } else if (answer !== this.model.data[this.model.state.level].answers[NULL].type) {
        this.model.lose();
      }
      this.continueGame();
      this.startTimer();
    } else if (!this.model.canContinue()) {
      this.model.lose();
      this.stopTimer();
      Application.showStats(this.model);
    }
  }

  newAnswerHendlerTypeTwo(answer) {
    if (this.model.endOfGame()) {
      if ((answer[NULL].value === this.model.data[this.model.state.level].answers[NULL].type) && (answer[TWO].value === this.model.data[this.model.state.level].answers[TWO].type)) {
        this.model.state.stats[this.model.state.level] = resultOfTime(this.model.state.time);
      } else {
        this.model.lose();
      }
      this.stopTimer();
      Application.showStats(this.model);
    } else
    if (this.model.canContinue()) {
      if ((answer[NULL].value === this.model.data[this.model.state.level].answers[NULL].type) && (answer[TWO].value === this.model.data[this.model.state.level].answers[TWO].type)) {
        this.model.state.stats[this.model.state.level] = resultOfTime(this.model.state.time);
      } else {
        this.model.lose();
      }
      this.continueGame();
      this.startTimer();
    } else if (!this.model.canContinue()) {
      this.model.lose();
      this.stopTimer();
      Application.showStats(this.model);
    }
  }
  newAnswerHendlerTypeThree(answer) {
    if (this.model.endOfGame()) {
      if (answer === FOUR) {
        this.model.state.stats[this.model.state.level] = resultOfTime(this.model.state.time);
      } else {
        this.model.lose();
      }
      this.stopTimer();
      Application.showStats(this.model);
    } else if (this.model.canContinue()) {
      if (answer === FOUR) {
        this.model.state.stats[this.model.state.level] = resultOfTime(this.model.state.time);
      } else {
        this.model.lose();
      }
      this.continueGame();
      this.startTimer();
    } else if (!this.model.canContinue()) {
      this.model.lose();
      this.stopTimer();
      Application.showStats(this.model);
    }
  }
}
