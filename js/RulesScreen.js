import GameRules from './views/rulesView';
import Application from './Application';
import ModalView from './views/modalScrenView';

export default class RulesScreen {
  constructor(data, model) {
    this.model = model;
    this.data = data;
    this.content = new GameRules();

    this.content.OnRulesFormClick = () => {
      this.userName = this.content.playerName();
      Application.showGame(this.data, this.userName);
    };

    this.content.OnHeaderBackClick = () => {
      this.modal = new ModalView();
      this.modal.onButtonOkeyClick = () => {
        Application.showWelcome();
      };
      this.modal.onModalCloseClick = () => {
        this.newDiv.removeChild(this.modal.element);
      };
      this.modal.onButtonCancelClick = () => {
        this.newDiv.removeChild(this.modal.element);
      };
      if (document.querySelector(`.main_element`) !== null) {
        this.newDiv = document.querySelector(`.main_element`);
        this.newDiv.appendChild(this.modal.element);
      } else {
        Application.showWelcome();
      }

    };
    console.log(this.data);
    this.root = document.createElement(`div`);
    this.root.classList.add(`main__rules`);
    this.root.appendChild(this.content.element);
  }

  get element() {
    return this.root;
  }
}
