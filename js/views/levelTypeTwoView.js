import AbstractView from './AbstractView';
import addDelegatedEventListener from '../addDelegatedEventListener';

export default class GameTwoView extends AbstractView {
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
    addDelegatedEventListener(`change`, `.game__content`, () => {
      const firstQuestionChecked = document.querySelector(`.game__content [name=question1]:checked`) !== null;
      const secondQuestionChecked = document.querySelector(`.game__content [name=question2]:checked`) !== null;
      if (firstQuestionChecked && secondQuestionChecked) {
        this.onAnswer();
      }
    });
  }
}
