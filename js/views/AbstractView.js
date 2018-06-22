import {getElementFromTeamplate} from '../elemFromTemplate';
export default class AbstractView {
  get teamplate() {
    throw new Error(`Abstract method must be changed`);
  }

  render() {
    return getElementFromTeamplate(this.teamplate);
  }

  bind() {
  }

  get element() {
    if (!this.element) {
      this._element = this.render();
      this.bind(this._element);
    }
    return this._element;
  }
}
