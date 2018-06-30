export const makeTimer = (interval) => {
  const resultTimer = {
    remainingTime: interval,
    onTimerExecute: null,
    onTimeClick: null,
    tick() {
      const time = this.remainingTime - 1;
      this.remainingTime = time >= 0 ? time : 0;

      this.onTimeClick(this.time);
      if (this.remainingTime === 0 && this.onTimerExecute) {
        this.onTimerExecute();
      }
    }
  };
  return resultTimer;
};


