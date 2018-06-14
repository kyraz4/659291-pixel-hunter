// модуль в котором всё склеивается возвращает функцию startGame() (она вызовется после странички rules в обработчике событий)
import {INITIAL_GAME, changeLevel, canContinue, fail} from './screens/game-logic';
import changeScreen from './selectPage';
import {getElementFromTeamplate} from './elemFromTemplate';
import GAME from './screens/data-game';
import {gameHeader} from './screens/renderHeader';
import {renderLevel} from './screens/renderLevel';
import statsScreen from './screens/stats';
import fillStats from './fillStats';
import {footer} from './screens/footer';

let game;

const startGame = () => {
  game = Object.assign({}, INITIAL_GAME);

  const gameContainerElement = getElementFromTeamplate();
  const headerElement = getElementFromTeamplate();
  const levelElement = getElementFromTeamplate();
  const footerStatistic = getElementFromTeamplate();
  const footerElement = getElementFromTeamplate();
  const putFooterStats = document.querySelector(`#stats`);

  gameContainerElement.appendChild(headerElement);
  gameContainerElement.appendChild(levelElement);
  gameContainerElement.appendChild(footerElement);
  putFooterStats.appendChild(footerStatistic);

  const getLevel = () => GAME[`level-${game.level}`];

  const updateGame = (state) => {
    headerElement.innerHTML = gameHeader(state);
    levelElement.innerHTML = renderLevel(getLevel(state.level));
    footerStatistic.innerHTML = fillStats(state.stats);
  };

  updateGame(game);
  changeScreen(gameContainerElement);
};

startGame();

export default startGame;
