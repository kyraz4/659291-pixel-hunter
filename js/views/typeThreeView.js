import AbstractView from './abstractView';
import addDelegatedEventListener from '../addDelegatedEventListener';
import {getAnswerNumber} from '../screens/game-logic';

const FIRST = 0;
const SECOND = 1;
const THIRD = 2;

export default class TypeThreeView extends AbstractView {
  constructor(level, model) {
    super();
    this.level = level;
    this.model = model;
  }

  get teamplate() {
    return `<div class="game">
    <p class="game__task">${this.level.question}</p>
    <form class="game__content  game__content--triple">
      <div class="game__option photo-one">
      <img src="${this.level.answers[FIRST].image.url}" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option photo-two  game__option--selected">
      <img src="${this.level.answers[SECOND].image.url}" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option photo-three">
      <img src="${this.level.answers[THIRD].image.url}" alt="Option 1" width="304" height="455">
      </div>
    </form>
    <div class="stats">
    </div>
    </div>`;
  }

  onAnswer() {}

  bind() {
    addDelegatedEventListener(`click`, `.game__content--triple`, (evt) => {
      const userAnswer = getAnswerNumber(evt.path[FIRST].classList[SECOND]);
      if (userAnswer !== null) {
        this.onAnswer(userAnswer);
      }
    });
  }
}

