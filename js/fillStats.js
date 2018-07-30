import {getElementFromTeamplate} from './elemFromTemplate';
const ANSVERS_TYPES = {
  CORRECT: `CORRECT`,
  WRONG: `WRONG`,
  UNKNOWN: null,
  FAST: `FAST`,
  SLOW: `SLOW`
};
export const fillStats = (stats) => {
  let statsDom = getElementFromTeamplate(`<ul></ul>`);
  for (let i = 0; i < stats.length; i++) {
    if (stats[i] === ANSVERS_TYPES.UNKNOWN) {
      const newDom = statsDom.querySelector(`ul`);
      const statsObject = document.createElement(`li`);
      statsObject.classList.add(`stats__result`, `stats__result--unknown`);
      newDom.appendChild(statsObject);
    } else if (stats[i] === ANSVERS_TYPES.CORRECT) {
      const newDom = statsDom.querySelector(`ul`);
      const statsObject = document.createElement(`li`);
      statsObject.classList.add(`stats__result`, `stats__result--correct`);
      newDom.appendChild(statsObject);
    } else if (stats[i] === ANSVERS_TYPES.WRONG) {
      const newDom = statsDom.querySelector(`ul`);
      const statsObject = document.createElement(`li`);
      statsObject.classList.add(`stats__result`, `stats__result--wrong`);
      newDom.appendChild(statsObject);
    } else if (stats[i] === ANSVERS_TYPES.FAST) {
      const newDom = statsDom.querySelector(`ul`);
      const statsObject = document.createElement(`li`);
      statsObject.classList.add(`stats__result`, `stats__result--fast`);
      newDom.appendChild(statsObject);
    } else if (stats[i] === ANSVERS_TYPES.SLOW) {
      const newDom = statsDom.querySelector(`ul`);
      const statsObject = document.createElement(`li`);
      statsObject.classList.add(`stats__result`, `stats__result--slow`);
      newDom.appendChild(statsObject);
    }
  }
  return statsDom;
};

export const fillStatsForStatsScreen = (stats) => {
  const answerArray = Array(stats.length);
  for (let i = 0; i < stats.length; i++) {
    if (stats[i] === ANSVERS_TYPES.CORRECT) {
      answerArray[i] = `<li class="stats__result stats__result--correct"></li>`;
    } else if (stats[i] === ANSVERS_TYPES.FAST) {
      answerArray[i] = `<li class="stats__result stats__result--fast"></li>`;
    } else if (stats[i] === ANSVERS_TYPES.SLOW) {
      answerArray[i] = `<li class="stats__result stats__result--slow"></li>`;
    } else if (stats[i] === ANSVERS_TYPES.WRONG) {
      answerArray[i] = `<li class="stats__result stats__result--wrong"></li>`;
    } else if (stats[i] === ANSVERS_TYPES.UNKNOWN) {
      answerArray[i] = `<li class="stats__result stats__result--unknown"></li>`;
    }
  } return answerArray;
};
