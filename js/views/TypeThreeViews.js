import AbstractView from './AbstractView';
import addDelegatedEventListener from '../addDelegatedEventListener';
const CONSTANT_NULL = 0;
const CONSTANT_ONE = 1;
const CONSTANT_TWO = 2;
const CONSTANT_THREE = 3;


const getAnswerNumber = (answer) => {
  if (answer === `photo-one`) {
    return CONSTANT_ONE;
  } else if (answer === `photo-two`) {
    return CONSTANT_TWO;
  } else if (answer === `photo-three`) {
    return CONSTANT_THREE;
  }
  return 0;
};

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
      <img src="${this.level.answers[0].image.url}" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option photo-two  game__option--selected">
      <img src="${this.level.answers[1].image.url}" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option photo-three">
      <img src="${this.level.answers[2].image.url}" alt="Option 1" width="304" height="455">
      </div>
    </form>
    <div class="stats">
    </div>
    </div>`;
  }

  onAnswer() {}

  bind() {
    addDelegatedEventListener(`click`, `.game__content--triple`, (evt) => {
      const userAnswer = getAnswerNumber(evt.path[CONSTANT_NULL].classList[CONSTANT_ONE]);
      if (userAnswer !== null) {
        this.onAnswer(userAnswer);
      }
    });
  }
}

