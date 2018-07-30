import StatsView from './views/statsViews';

export default class StatsScreen {
  constructor(model) {
    this.model = model;
    this.content = new StatsView(this.model);

    this.root = document.createElement(`div`);
    this.root.appendChild(this.content.element);
  }

  get element() {
    return this.root;
  }


}
