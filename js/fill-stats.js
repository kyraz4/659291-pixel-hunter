import {getElementFromTeamplate} from './elemFromTemplate';

const ANSVERS_TYPES = {
  CORRECT: `CORRECT`,
  WRONG: `WRONG`,
  UNKNOWN: null,
  FAST: `FAST`,
  SLOW: `SLOW`
};

const makeList = (newClass, dom) => {
  const newDom = dom.querySelector(`ul`);
  const statsObject = document.createElement(`li`);
  statsObject.classList.add(`stats__result`, newClass);
  newDom.appendChild(statsObject);
};

const classes = {
  WRONG: `stats__result--wrong`,
  CORRECT: `stats__result--correct`,
  UNKNOWN: `stats__result--unknown`,
  FAST: `stats__result--fast`,
  SLOW: `stats__result--slow`,
};

export const fillStats = (stats) => {
  let statsDom = getElementFromTeamplate(`<ul></ul>`);
  for (let i = 0; i < stats.length; i++) {
    switch (stats[i]) {
      case ANSVERS_TYPES.UNKNOWN :
        makeList(classes.UNKNOWN, statsDom);
        break;
      case ANSVERS_TYPES.CORRECT :
        makeList(classes.CORRECT, statsDom);
        break;
      case ANSVERS_TYPES.WRONG :
        makeList(classes.WRONG, statsDom);
        break;
      case ANSVERS_TYPES.FAST :
        makeList(classes.FAST, statsDom);
        break;
      case ANSVERS_TYPES.SLOW :
        makeList(classes.SLOW, statsDom);
        break;
    }
  }
  return statsDom;
};

export const fillStatsForStatsScreen = (stats) => {
  const answerArray = Array(stats.length);
  for (let i = 0; i < stats.length; i++) {
    switch (stats[i]) {
      case ANSVERS_TYPES.UNKNOWN :
        answerArray[i] = `<li class="stats__result stats__result--unknown"></li>`;
        break;
      case ANSVERS_TYPES.CORRECT :
        answerArray[i] = `<li class="stats__result stats__result--correct"></li>`;
        break;
      case ANSVERS_TYPES.WRONG :
        answerArray[i] = `<li class="stats__result stats__result--wrong"></li>`;
        break;
      case ANSVERS_TYPES.FAST :
        answerArray[i] = `<li class="stats__result stats__result--fast"></li>`;
        break;
      case ANSVERS_TYPES.SLOW :
        answerArray[i] = `<li class="stats__result stats__result--slow"></li>`;
        break;
    }
  } return answerArray;
};
