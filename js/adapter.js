import {LEVELS_TYPES} from './game-content';


const typeMapper = {
  "tinder-like": LEVELS_TYPES.SINGLE,
  "two-of-two": LEVELS_TYPES.DOUBLE,
  "one-of-three": LEVELS_TYPES.TRIPLE
};

const preprocessAnswers = (types) => types.map((type) => {
  return {
    'type': typeMapper[type]
  };
});


const adaptServerData = (data) => {
  for (const level of Object.values(data)) {
    level.type = preprocessAnswers(level.type);
  }
  return data;
};

export default adaptServerData;
