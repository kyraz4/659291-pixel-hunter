import {INITIAL_GAME} from './config';
import {GAME} from './game-content';
import changeScreen from './selectPage';
import {canContinue} from './screens/game-logic';

const getLevel = (i) => GAME.levels[i];

export default class GameModel {
  constructor(playerName) {
    this.playerName = playerName;
    this.restart();
  }

  get state() {
    return this.state;
  }

  hasNextLevel() {
    return getLevel(this._state.level + 1) !== void 0;
  }

  nextLevel() {
    this._state = changeScreen(this._state, this._state.level + 1);
  }

  canContinue() {
    this._state = canContinue(this._state);
  }

  lose() {
    this._state.lives--;
  }


  restart() {
    this._state = INITIAL_GAME;
  }

  isDead() {
    return this._state.lives <= 0;
  }

  getCurrentLevel() {
    return getLevel(this._state.level);
  }
}
