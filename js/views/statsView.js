import AbstractView from './abstractView';
import {calculatePoints} from '../calculate-points';
import {fillStatsForStatsScreen} from '../fill-stats';

const RESULT_POINTS = 0;
const POINTS_WITHOUT_BONUS = 1;
const FAST_ANSWERS = 2;
const SLOW_ANSWERS = 3;

export default class StatsView extends AbstractView {
  constructor(model) {
    super();
    this.model = model;
  }

  get teamplate() {
    if (this.model.state.lives > 0) {
      return `<header class="header">
    <div class="header__back">
      <button class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.svg" width="101" height="44">
      </button>
    </div>
    </header>
    <div class="result">
    <h1>Победа!</h1>
    <table class="result__table">
      <tr>
        <td class="result__number">1.</td>
        <td colspan="2">
        <ul class="stats">
        ${fillStatsForStatsScreen(this.model.state.stats).join(``)}
        </ul>
        </td>
        <td class="result__points">×&nbsp;100</td>
        <td class="result__total">${calculatePoints(this.model.state, this.model.state.lives, this.model.state.level)[POINTS_WITHOUT_BONUS]}</td>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за скорость:</td>
        <td class="result__extra">${calculatePoints(this.model.state, this.model.state.lives, this.model.state.level)[FAST_ANSWERS]}&nbsp;<span class="stats__result stats__result--fast"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${calculatePoints(this.model.state, this.model.state.lives, this.model.state.level)[FAST_ANSWERS] * 50}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за жизни:</td>
        <td class="result__extra">${this.model.state.lives}&nbsp;<span class="stats__result stats__result--alive"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${this.model.state.lives * 50}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Штраф за медлительность:</td>
        <td class="result__extra">${calculatePoints(this.model.state, this.model.state.lives, this.model.state.level)[SLOW_ANSWERS]}&nbsp;<span class="stats__result stats__result--slow"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">-${calculatePoints(this.model.state, this.model.state.lives, this.model.state.level)[SLOW_ANSWERS] * 50}</td>
      </tr>
      </tr>
        <td colspan="5" class="result__total  result__total--final">${calculatePoints(this.model.state, this.model.state.lives, this.model.state.level)[RESULT_POINTS]}</td>
      </tr>
    </table>
    </div>`;
    } else if (this.model.state.lives === 0) {
      return `
        <header class="header">
    <div class="header__back">
      <button class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.svg" width="101" height="44">
      </button>
    </div>
    </header>
    <div class="result">
        <table class="result__table">
      <tr>
        <td class="result__number">2.</td>
        <td>
          <ul class="stats">
          ${fillStatsForStatsScreen(this.model.state.stats).join(``)}
          </ul>
        </td>
        <td class="result__total"></td>
        <td class="result__total  result__total--final">fail</td>
      </tr>
    </table>
    </div>`;
    }
    return 0;
  }


}
