import AbstractView from './abstractView';
import {fillStats} from '../fill-stats';

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
}
