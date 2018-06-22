import AbstractView from './AbstractView';
import {getElementFromTeamplate} from '../elemFromTemplate';
export default class gameHeader extends AbstractView {
  constructor(level) {
    super();
    this.level = level;
  }

  get teamplate() {
    return `<header class="header">
    <div class="header__back">
      <button class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.svg" width="101" height="44">
      </button>
    </div>
    <h1 class="game__timer">${this.level.time}</h1>
    <div class="game__lives">
      ${new Array(3 - this.level.lives).
        fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
      ${new Array(this.level.lives).fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
    </div>
    </header>`;
  }

  bind() {
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
