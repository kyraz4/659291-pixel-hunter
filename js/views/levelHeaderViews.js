import AbstractView from './abstractView';
import addDelegatedEventListener from '../addDelegatedEventListener';

const LIVES = 3;
export default class GameHeader extends AbstractView {
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
      ${new Array(LIVES - this.level.lives).
fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
      ${new Array(this.level.lives).fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
    </div>
    </header>`;
  }

  onHeaderBackClick() {}

  bind() {
    addDelegatedEventListener(`click`, `.header__back`, this.onHeaderBackClick);
  }
}
