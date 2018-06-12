import {assert} from 'chai';
import {yourPoints} from '../calculate-points';

const helfpoints = 3;
const normalCount = 10;
const inadequateСount = 9;
const helfpointsTwo = 1;
const redundantСount = 11;
const failedHelfpoints = 0;
const results = [];
results[0] = {answer: true, time: 15};
results[1] = {answer: true, time: 25};
results[2] = {answer: false, time: 2};
results[3] = {answer: true, time: 29};
results[4] = {answer: false, time: 15};
results[5] = {answer: true, time: 14};
results[6] = {answer: false, time: 27};
results[7] = {answer: true, time: 18};
results[8] = {answer: true, time: 12};
results[9] = {answer: false, time: 17};

const resultsTwo = [];
resultsTwo[0] = {answer: true, time: 15};
resultsTwo[1] = {answer: true, time: 15};
resultsTwo[2] = {answer: true, time: 12};
resultsTwo[3] = {answer: true, time: 19};
resultsTwo[4] = {answer: true, time: 16};
resultsTwo[5] = {answer: true, time: 17};
resultsTwo[6] = {answer: true, time: 18};
resultsTwo[7] = {answer: true, time: 18};
resultsTwo[8] = {answer: true, time: 12};
resultsTwo[9] = {answer: true, time: 17};

const resultsThree = [];
resultsThree[0] = {answer: true, time: 9};
resultsThree[1] = {answer: true, time: 2};
resultsThree[2] = {answer: true, time: 6};
resultsThree[3] = {answer: true, time: 4};
resultsThree[4] = {answer: true, time: 3};
resultsThree[5] = {answer: true, time: 6};
resultsThree[6] = {answer: true, time: 23};
resultsThree[7] = {answer: true, time: 28};
resultsThree[8] = {answer: true, time: 22};
resultsThree[9] = {answer: true, time: 27};

const resultsFour = [];
resultsFour[0] = {answer: false, time: 9};
resultsFour[1] = {answer: false, time: 2};
resultsFour[2] = {answer: true, time: 6};
resultsFour[3] = {answer: true, time: 4};
resultsFour[4] = {answer: true, time: 3};
resultsFour[5] = {answer: true, time: 6};
resultsFour[6] = {answer: true, time: 3};
resultsFour[7] = {answer: true, time: 8};
resultsFour[8] = {answer: true, time: 2};
resultsFour[9] = {answer: true, time: 7};

describe(`answers test`, () => {
  it(`gamer should answer 10 questions`, () => {
    const testGame = yourPoints(results, helfpoints, inadequateСount);
    assert.equal(testGame, -1);
  });
  it(`if gamer answer at all qestions and not quickly and immediately then the function should return 1150 points`, () => {
    const testGameTwo = yourPoints(resultsTwo, helfpoints, normalCount);
    assert.equal(testGameTwo, 1150);
  });
  it(`if gamer answer true on 6 qestions fast and on 4 questions slow the function should return 1250 points`, () => {
    const testGameThree = yourPoints(resultsThree, helfpoints, normalCount);
    assert.equal(testGameThree, 1250);
  });
  it(`if gamer answer true only on 8 questions fast and failed 2 questions the function should return 1250 points`, () => {
    const testGameFour = yourPoints(resultsFour, helfpointsTwo, normalCount);
    assert.equal(testGameFour, 1250);
  });
  it(`if accepts the count of games more then 10 the function should return null`, () => {
    const testGameFive = yourPoints(resultsTwo, helfpoints, redundantСount);
    assert.equal(testGameFive, null);
  });
  it(`if gamer failed the game the function should return Fail`, () => {
    const testGameSix = yourPoints(resultsTwo, failedHelfpoints, normalCount);
    assert.equal(testGameSix, `Fail`);
  });
});
