import {getElementFromTeamplate} from '../elemFromTemplate';
import {calculatePoints} from '../calculate-points';
import {fillStatsForStatsScreen} from '../fillStats';


const string = (state) => {
  if (state.lives !== 1) {
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
    ${fillStatsForStatsScreen(state.stats).join(``)}
    </ul>
    </td>
    <td class="result__points">×&nbsp;100</td>
    <td class="result__total"></td>
  </tr>
    <td colspan="5" class="result__total  result__total--final">${calculatePoints(state, state.lives, state.count)}</td>
  </tr>
</table>
</div>`;
  } else if (state.lives === 1) {
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
      ${fillStatsForStatsScreen(state.stats).join(``)}
      </ul>
    </td>
    <td class="result__total"></td>
    <td class="result__total  result__total--final">fail</td>
  </tr>
</table>
</div>`;
  }
  return 0;
};

const statsScreen = (state) => getElementFromTeamplate(string(state));

export default statsScreen;

