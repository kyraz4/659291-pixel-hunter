export const LEVELS_TYPES = {
  SINGLE: `tinder-like`,
  DOUBLE: `two-of-two`,
  TRIPLE: `one-of-three`
};


const FAST_TIME = 20;
const SLOW_TIME = 10;

export const resultOfTime = (time) => {
  if (time > FAST_TIME) {
    return `FAST`;
  } else if ((time < FAST_TIME) && (time > SLOW_TIME)) {
    return `CORRECT`;
  } else if (time < SLOW_TIME) {
    return `SLOW`;
  }
  return 0;
};


export const getLevel = (i, data) => data[i];

export const updateView = (container, view) => {
  container.innerHTML = ``;
  container.appendChild(view.element);
};

