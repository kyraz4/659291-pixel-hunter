import {INITIAL_GAME} from './config';
import {canContinue, endOfGame} from './screens/game-logic';
import {getLevel} from './new-game';
const ZERO = 0;
const WRONG = `WRONG`;

export default class GameModel {
  constructor(data, playerName) {
    this.data = data;
    this.playerName = playerName;
    this.restart();
  }
  get state() {
    return this._state;
  }
  nextLevel() {
    this._state.level++;
  }
  canContinue() {
    return canContinue(this._state);
  }
  lose() {
    this._state.stats[this._state.level] = WRONG;
    this._state.lives--;
  }
  endOfGame() {
    return endOfGame(this.state);
  }
  restart() {
    this._state = INITIAL_GAME;
  }
  isDead() {
    return this._state.lives <= ZERO;
  }
  outOfTime() {
    return this._state.time === ZERO;
  }
  getCurrentLevel() {
    return getLevel(this._state.level, this.data);
  }
}
