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
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src=${this.level.urls} alt="Option 1" width="705" height="455">
        <label class="game__answer  game__answer--photo">
        <input name="question1" type="radio" value="photo">
        <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--wide  game__answer--paint">
        <input name="question1" type="radio" value="paint">
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
    this._answerInput = this.element.querySelector(`.game__content--wide`);

    addDelegatedEventListener(`change`, `.game__content--wide`, (evt) => {
      const firstChoose = document.querySelector(`.game__content [value=photo]:checked`) !== null;
      const secondtChoose = document.querySelector(`.game__content [value=paint]:checked`) !== null;
      const userAnswer = evt.path[CONSTANT_NULL].value;
      if (firstChoose || secondtChoose) {
        this.onAnswer(userAnswer);
      }
    });
  }
}
