import changeScreen from './select-page';
import GreetingsView from './views/greetingsViews';
import RulesScreen from './rules-screen';


export default class GreetingsScreen {
  constructor(data, model) {
    this.model = model;
    this.data = data;
    this.content = new GreetingsView();
    this.content.onGreetingContiniueClick = () => {
      this.nextLevel = new RulesScreen(this.data);
      changeScreen(this.nextLevel.element);
    };

    this.root = document.createElement(`div`);
    this.root.appendChild(this.content.element);
  }

  get element() {
    return this.root;
  }
}
