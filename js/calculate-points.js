export const yourPoints = (res = [], helfp, countOfGames) => {
  if (countOfGames < 10) {
    return -1;
  } else if (countOfGames > 10) {
    return null;
  } else if (helfp === 0) {
    return `FAIL`;
  } else if (countOfGames === 10) {
    let trueNormalAnswersCount = 0;
    let pointsAtTheMoment = 0;
    const fastTime = 10;
    const slowTime = 20;
    const fastTimePoints = 150;
    const slowTimePoints = 50;
    for (let i = 0; i < res.length; i++) {
      if ((res.stats[i] === true) && (res[i].time > fastTime) && (res[i].time < slowTime)) {
        trueNormalAnswersCount++;
      } else if ((res[i].answer === true) && (res[i].time < fastTime)) {
        pointsAtTheMoment = pointsAtTheMoment + fastTimePoints;
      } else if ((res[i].answer === true) && (res[i].time > slowTime)) {
        pointsAtTheMoment = pointsAtTheMoment + slowTimePoints;
      } else if (res[i].answer === false) {
        pointsAtTheMoment = pointsAtTheMoment + 0;
      }
    }
    if ((trueNormalAnswersCount === 10) && (helfp === FULL_LIVES)) {
      return 1150;
    } else {
      return pointsAtTheMoment + helfp * slowTimePoints;
    }
  }
  return 0;
};

const CORRECT = `CORRECT`;
const FAST = `FAST`;
const SLOW = `SLOW`;
const FULL_LIVES = 3;
const ALL_GAMES = 9;
const CONST_NULL = 0;

export const calculatePoints = (state, helfp, gamesCount) => {
  if (gamesCount < ALL_GAMES) {
    return -1;
  } else if (gamesCount > ALL_GAMES) {
    return null;
  } else if (helfp === 0) {
    return `FAIL`;
  } else if (gamesCount === ALL_GAMES) {
    let trueAnswers = CONST_NULL;
    let fastAnswers = CONST_NULL;
    let slowAnswers = CONST_NULL;
    const fastTimeBonusPoints = 50;
    const trueAnswerPoints = 100;
    const slowTimePoints = -50;
    for (let i = 0; i < state.stats.length; i++) {
      if (state.stats[i] === CORRECT) {
        trueAnswers++;
      } else if (state.stats[i] === FAST) {
        trueAnswers++;
        fastAnswers++;
      } else if (state.stats[i] === SLOW) {
        trueAnswers++;
        slowAnswers++;
      }
    }
    if ((trueAnswers === ALL_GAMES) && (helfp === FULL_LIVES) && (fastAnswers === CONST_NULL) && (slowAnswers === CONST_NULL)) {
      return 1150;
    } else {
      const resultPoints = trueAnswers * trueAnswerPoints + slowTimePoints * slowAnswers + fastAnswers * fastTimeBonusPoints + helfp * fastTimeBonusPoints;
      const pointsWithoutBonus = trueAnswers * trueAnswerPoints;
      const resultArray = [resultPoints, pointsWithoutBonus, fastAnswers, slowAnswers];
      return resultArray;
    }
  }
  return 0;
};
