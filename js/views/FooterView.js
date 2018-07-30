import AbstractView from './AbstractView';
import {fillStats} from '../fillStats';

export default class FooterView extends AbstractView {
  constructor(level) {
    super();
    this.level = level;
  }

  get teamplate() {
  }

  onAnswer() {}


  bind() {
  }

  render() {
    return fillStats(this.level.stats);
  }

  get element() {
    this._element = this.render();
    this.bind(this._element);
    return this._element;
  }
}
