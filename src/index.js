'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopup';
import tabs from './modules/tabs';
import slider from './modules/slider';
import myHover from './modules/myHover';
import validation from './modules/validation';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

// Таймер
countTimer('31 december 2020');
// Меню
toggleMenu();
// PopUp Window
togglePopUp();
// табы
tabs();
// Слайдер
slider();
// hover-эффект на фото
myHover();
//валидация полей формы калькулятора
validation();
// калькулытор
calc(100);
//send-ajax-form
sendForm();