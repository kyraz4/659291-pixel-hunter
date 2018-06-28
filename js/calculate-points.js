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
    if ((trueNormalAnswersCount === 10) && (helfp === 3)) {
      return 1150;
    } else {
      return pointsAtTheMoment + helfp * slowTimePoints;
    }
  }
  return 0;
};


export const calculatePoints = (state, helfp, gamesCount) => {
  if (gamesCount < 10) {
    return -1;
  } else if (gamesCount > 10) {
    return null;
  } else if (helfp === 0) {
    return `FAIL`;
  } else if (gamesCount === 10) {
    let trueNormalAnswersCount = 1;
    let pointsAtTheMoment = 0;
    const fastTimePoints = 150;
    const slowTimePoints = 50;
    for (let i = 0; i < state.stats.length; i++) {
      if (state.stats[i] === `CORRECT`) {
        trueNormalAnswersCount++;
      } else if (state.stats[i] === `FAST`) {
        pointsAtTheMoment = pointsAtTheMoment + fastTimePoints;
      } else if (state.stats[i] === `SLOW`) {
        pointsAtTheMoment = pointsAtTheMoment + slowTimePoints;
      } else if (state.stats[i] === `FALSE`) {
        pointsAtTheMoment = pointsAtTheMoment + 0;
      }
    }
    if ((trueNormalAnswersCount === 10) && (helfp === 3)) {
      return 1150;
    } else {
      return pointsAtTheMoment + helfp * slowTimePoints;
    }
  }
  return 0;
};
