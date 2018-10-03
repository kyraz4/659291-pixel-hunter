import AbstractView from './abstractView';
import addDelegatedEventListener from '../addDelegatedEventListener';

const FIRST = 0;
const SECOND = 1;

export default class TypeTwoView extends AbstractView {
  constructor(level, model) {
    super();
    this.level = level;
    this.model = model;
  }

  get teamplate() {
    return `<div class="game">
    <p class="game__task">${this.level.question}</p>
    <form class="game__content">
      <div class="game__option">
        <img src=${this.level.answers[FIRST].image.url} alt="Option 1" width="468" height="458">
        <label class="game__answer game__answer--photo">
        <input name="question1" type="radio" value="photo">
        <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
        <input name="question1" type="radio" value="painting">
        <span>Рисунок</span>
        </label>
      </div>
      <div class="game__option">
        <img src=${this.level.answers[SECOND].image.url} alt="Option 2" width="468" height="458">
        <label class="game__answer  game__answer--photo">
        <input name="question2" type="radio" value="photo">
        <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
        <input name="question2" type="radio" value="painting">
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
      const firstQuestionChecked = document.querySelector(`.game__content [name=question1]:checked`);
      const secondQuestionChecked = document.querySelector(`.game__content [name=question2]:checked`);
      if (firstQuestionChecked && secondQuestionChecked) {
        const userAnswer = [firstQuestionChecked, secondQuestionChecked];
        this.onAnswer(userAnswer);
      }
    });
  }
}
