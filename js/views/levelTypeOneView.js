import AbstractView from './AbstractView';
import {addDelegatedEventListener, getElementFromTeamplate} from '../elemFromTemplate';
export default class gameOneView extends AbstractView {
  constructor(level) {
    super();
    this.level = level;
  }

  get teamplate() {
    return `<div class="game">
    <p class="game__task">${this.level.title}</p>
    <form class="game__content">
      <div class="game__option">
        <img src=${this.level.urls[0]} alt="Option 1" width="468" height="458">
        <label class="game__answer game__answer--photo">
        <input name="question1" type="radio" value="photo">
        <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
        <input name="question1" type="radio" value="paint">
        <span>Рисунок</span>
        </label>
      </div>
      <div class="game__option">
        <img src=${this.level.urls[1]} alt="Option 2" width="468" height="458">
        <label class="game__answer  game__answer--photo">
        <input name="question2" type="radio" value="photo">
        <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
        <input name="question2" type="radio" value="paint">
        <span>Рисунок</span>
        </label>
      </div>
    </form>
    <div class="stats">
    </div>
    </div>`;
  }

  onAnswer() {}


  bind() {
    addDelegatedEventListener(`change`, `.game__content--wide`, () => {
      const firstChoose = document.querySelector(`.game__content [value=photo]:checked`) !== null;
      const secondtChoose = document.querySelector(`.game__content [value=paint]:checked`) !== null;
      if (firstChoose || secondtChoose) {
        this.onAnswer();
        // if (this.level.level !== 9) {
        //   // this.level.stats[this.level.level] = `CORRECT`;
        //   // this.level.level++;
        //   // chooseEventListner(GAME.levels[this.level.level]);
        //   // updateGame(this.level);
        //   // changeScreen(gameContainerElement);
        //   console.log(this.level);
        // } else {
        //   changeScreen(statsScreen);
        // }
      }
    });
  }

  render() {
    return getElementFromTeamplate(this.level.teamplate());
  }

  get element() {
    this._element = this.render();
    this.bind(this._element);
    return this._element;
  }
}
