import GameIntro from './views/introViews';
// import createGreetingScreenFragment from './screens/greetings';
import changeScreen from './selectPage';
import GreetingsScreen from './GreetingsScreen';

export default class IntroScreen {
  constructor(model) {
    this.model = model;
    this.content = new GameIntro();
    this.content.onAsteriskClick = () =>{
      this.nextLevel = new GreetingsScreen();
      changeScreen(this.nextLevel.element);
    };

    this.root = document.createElement(`div`);
    this.root.appendChild(this.content.element);
  }

  get element() {
    return this.root;
  }

}
