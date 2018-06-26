import {getElementFromTeamplate} from '../elemFromTemplate';
export default class AbstractView {
  get teamplate() {
    throw new Error(`Abstract method must be changed`);
  }

  get element() {
    if (!this._element) {
      this._element = this.render();
      this.bind(this._element);
    }

    return this._element;
  }

  render() {
    return getElementFromTeamplate(this.teamplate);
  }

  bind() {
  }
}
