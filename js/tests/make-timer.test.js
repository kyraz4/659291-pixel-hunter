import {assert} from 'chai';
import {makeTimer} from '../make-timer';
const countOne = 10;
const testReameningTime = 0;
const tetsObjectOne = {
  remainingTime: countOne,
  onTimerExecute: null,
  tick() {
    const time = this.remainingTime - 1;
    this.remainingTime = time >= 0 ? time : 0;

    if (this.remainingTime === 0 && this.onTimerExecute) {
      this.onTimerExecute();
    }
  }
};

const tetsObjectTwo = {
  remainingTime: testReameningTime,
  onTimerExecute: null,
  tick() {
    const time = this.remainingTime - 1;
    this.remainingTime = time >= 0 ? time : 0;

    if (this.remainingTime === 0 && this.onTimerExecute) {
      this.onTimerExecute();
    }
  }
};

describe(`timer test`, () => {
  it(`the functiom should return the object wich containe reamaning time equal to the parameter`, () => {
    const timerOne = makeTimer(countOne);
    assert.equal(timerOne.remainingTime, tetsObjectOne.remainingTime);
  });
  it(`the function should return the object wich containe the method tick() wich reduces by one the reamaning time`, () => {
    const timerTwo = makeTimer(countOne);
    assert.equal(timerTwo.tick(), tetsObjectOne.tick());
  });
  it(`the timer should call onTimerExecute when it finish`, () => {
    const timerThree = makeTimer(testReameningTime);
    assert.equal(timerThree.onTimerExecute, tetsObjectTwo.onTimerExecute);
  });
});

