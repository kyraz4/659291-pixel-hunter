import AbstractView from './AbstractView';
import addDelegatedEventListener from '../addDelegatedEventListener';

export default class ModalView extends AbstractView {

  get teamplate() {
    return `<section class="modal-confirm modal-confirm__wrap">
          <form class="modal-confirm__inner">
            <button class="modal-confirm__close" type="button">Закрыть</button>
            <h2 class="modal-confirm__title">Подтверждение</h2>
            <p class="modal-confirm__text">Вы уверены что хотите начать игру заново?</p>
            <div class="modal-confirm__btn-wrap">
              <button class="modal-confirm__btn btn_okey">Ок</button>
              <button class="modal-confirm__btn btn_cancel">Отмена</button>
            </div>
          </form>
        </section>`;
  }

  onModalCloseClick() {}

  onButtonOkeyClick() {}

  onButtonCancelClick() {}

  bind() {
    addDelegatedEventListener(`click`, `.modal-confirm__close`, this.onModalCloseClick);
    addDelegatedEventListener(`click`, `.btn_okey`, this.onButtonOkeyClick);
    addDelegatedEventListener(`click`, `.btn_cancel`, this.onButtonCancelClick);
  }
}
