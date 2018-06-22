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

  onAnswer() {}


  bind() {
    addDelegatedEventListener(`click`, `.game__content--triple`, () => {
      const chooseClick = document.querySelectorAll(`.game__option`) !== null;
      if (chooseClick) {
        this.onAnswer();
        // if (initialContent.level !== 9) {
        //   initialContent.stats[initialContent.level] = `CORRECT`;
        //   initialContent.level++;
        //   chooseEventListner(GAME.levels[initialContent.level]);
        //   updateGame(initialContent);
        //   changeScreen(gameContainerElement);
        //   console.log(initialContent);
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

