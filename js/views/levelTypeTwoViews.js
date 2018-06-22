import AbstractView from './AbstractView';
import {addDelegatedEventListener, getElementFromTeamplate} from '../elemFromTemplate';
export default class gameTwoView extends AbstractView {
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
    addDelegatedEventListener(`change`, `.game__content`, () => {
      const firstQuestionChecked = document.querySelector(`.game__content [name=question1]:checked`) !== null;
      const secondQuestionChecked = document.querySelector(`.game__content [name=question2]:checked`) !== null;
      if (firstQuestionChecked && secondQuestionChecked) {
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
