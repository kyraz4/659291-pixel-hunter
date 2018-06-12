export const yourPoints = (res = [], helfp, countOfGames) => {
  if (countOfGames < 10) {
    return -1;
  } else if (countOfGames > 10) {
    return null;
  } else if (helfp === 0) {
    return `Fail`;
  } else if (countOfGames === 10) {
    let trueNormalAnswersCount = 0;
    let pointsAtTheMoment = 0;
    const fastTime = 10;
    const slowTime = 20;
    const fastTimePoints = 150;
    const slowTimePoints = 50;
    for (let i = 0; i < res.length; i++) {
      if ((res[i].answer === true) && (res[i].time > fastTime) && (res[i].time < slowTime)) {
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
