import GameIntro from './views/introViews';
// import createGreetingScreenFragment from './screens/greetings';
import changeScreen from './selectPage';
import GreetingsScreen from './GreetingsScreen';

export default class IntroScreen {
  constructor(data, model) {
    this.model = model;
    this.data = data;
    this.content = new GameIntro();
    this.content.onAsteriskClick = () =>{
      this.nextLevel = new GreetingsScreen(this.data);
      changeScreen(this.nextLevel.element);
    };

    this.root = document.createElement(`div`);
    this.root.appendChild(this.content.element);
  }

  get element() {
    return this.root;
  }

}
