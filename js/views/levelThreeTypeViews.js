import AbstractView from './AbstractView';
import addDelegatedEventListener from '../addDelegatedEventListener';
const CONSTANT_NULL = 0;
export default class GameThreeView extends AbstractView {
  constructor(level) {
    super();
    this.level = level;
  }

  get teamplate() {
    return `<div class="game">
    <p class="game__task">${this.level.title}</p>
    <form class="game__content  game__content--triple">
      <div class="game__option photo-one">
      <img src="${this.level.urls[0]}" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option  game__option--selected photo-two">
      <img src="${this.level.urls[1]}" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option photo-three">
      <img src="${this.level.urls[2]}" alt="Option 1" width="304" height="455">
      </div>
    </form>
    <div class="stats">
    </div>
    </div>`;
  }

  onAnswer(userAnswer, level) {}


  bind() {
    addDelegatedEventListener(`click`, `.game__content--triple`, (evt) => {
      const chooseClick = this.element.querySelectorAll(`.game__option`) !== null;
      const userAnswer = evt.path[CONSTANT_NULL].children[CONSTANT_NULL].src;
      if (chooseClick) {
        this.onAnswer(userAnswer, this.level);
      }
    });
  }
}

