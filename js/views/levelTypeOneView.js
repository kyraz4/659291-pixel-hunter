import AbstractView from './AbstractView';
import addDelegatedEventListener from '../addDelegatedEventListener';

const CONSTANT_NULL = 0;
export default class GameOneView extends AbstractView {
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
    addDelegatedEventListener(`change`, `.game__content--wide`, (evt) => {
      const firstChoose = this.element.querySelector(`.game__content [value=photo]:checked`) !== null;
      const secondtChoose = this.element.querySelector(`.game__content [value=paint]:checked`) !== null;
      const userAnsver = evt.path[CONSTANT_NULL].value;
      if (firstChoose || secondtChoose) {
        this.onAnswer(userAnsver, this.level);
        console.log(userAnsver);
      }
    });
  }
}
