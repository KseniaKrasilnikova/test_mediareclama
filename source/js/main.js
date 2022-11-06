import {initBurger} from './modules/init-burger-action';
import {initFormValidate} from './modules/form/init-form-validate';
import {initSwiper} from './modules/init-swiper';
import {initDragAndDrop} from './modules/init-drag-and-drop';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------
  initSwiper();

  // Modules
  // ---------------------------------
  window.addEventListener('load', () => {
    initBurger();
    initFormValidate();
    initDragAndDrop();
  });
});

// ---------------------------------
