import changeScreen from './selectPage';
import GreetingsView from './views/greetingsViews';
// import createIntroFragment from './screens/intro';
// import createRulesScreenFragment from './screens/rules';
import RulesScreen from './RulesScreen';


export default class GreetingsScreen {
  constructor(data, model) {
    this.model = model;
    this.data = data;
    this.content = new GreetingsView();
    this.content.OnGreetingContiniueClick = () => {
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