// объект  с 10 играми с указанием их типа
import {typeOfGames} from './typeOfGames';
const levelOne = {
  type: 1,
  game: typeOfGames.typeOne
};
const levelTwo = {
  type: 2,
  game: typeOfGames.typeTwo
};
const levelThree = {
  type: 3,
  game: typeOfGames.typeThree
};
const levelFour = {
  type: 1,
  game: typeOfGames.typeOne
};
const levelFive = {
  type: 2,
  game: typeOfGames.typeTwo
};
const levelSix = {
  type: 3,
  game: typeOfGames.typeThree
};
const levelSeven = {
  type: 1,
  game: typeOfGames.typeOne
};
const levelEight = {
  type: 3,
  game: typeOfGames.typeThree
};
const levelNine = {
  type: 1,
  game: typeOfGames.typeOne
};
const levelTen = {
  type: 2,
  game: typeOfGames.typeTwo
};

const GAME = {
  'level-1': levelOne,
  'level-2': levelTwo,
  'level-3': levelThree,
  'level-4': levelFour,
  'level-5': levelFive,
  'level-6': levelSix,
  'level-7': levelSeven,
  'level-8': levelEight,
  'level-9': levelNine,
  'level-10': levelTen
};
export default GAME;
