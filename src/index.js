import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';
import 'regenerator-runtime/runtime';
import 'element-closest';
import 'mdn-polyfills/Node.prototype.append';
import 'mdn-polyfills/Element.prototype.matches';
import 'mdn-polyfills/Node.prototype.remove';
import "scroll-behavior-polyfill";

import telMenu from './modules/tel-menu';
import burgerMenu from './modules/burger-menu';
import smoothScrolling from './modules/smooth-scrolling';
import popupRepairTypes from './modules/popup-repair-types';
import telMask from './modules/tel-mask';
import linkPrivacy from './modules/link-privacy';
import formula from './modules/formula';
import problems from './modules/problems';
import repairViews from './modules/repair-views';
import accordion from './modules/accordion';
import documentSlider from './modules/document-slider';
import slider from './modules/slider-contract';
import buttonWide from './modules/button_wide';
import Carousel from './modules/carousel';
import sliderReviews from './modules/slider-reviews';
import inspirationalPortfolio from './modules/inspirational-portfolio';
import inspirationalPortfolioPopup from './modules/inspirational-portfolio-popup';
import tabs from './modules/tabs';
import scheme from './modules/scheme-slide';
import {desingBoolet, desingSliders, desingPopup} from './modules/desing-pagination-boolet';
import keyDownEsc from './modules/eventListenerKeyDown';
import ajaxPost from './modules/ajax-post';
import get from './modules/get';

let windowWidth = window.innerWidth;
window.addEventListener(`resize`, () => {
  windowWidth = window.innerWidth;
  formula(windowWidth);
  problems(windowWidth);
  documentSlider(windowWidth);
  if (windowWidth > 1024) {
    desingBoolet();
  } else {
    desingSliders({
      block: '#designs',
      wrapper: '.designs-slider-wrap',
      nav: '.designs-nav__item',
      wrapperSlide: '.designs-slider',
      arrowLeft: '#design_left',
      arrowRight: '#design_right',
      sliderCountCurrent: '.slider-counter-content__current',
      sliderCountTotal: '.slider-counter-content__total',
    });
  }
  desingSliders({
    block: '.popup-design',
    wrapper: '.popup-dialog-design',
    nav: '.designs-nav__item',
    wrapperSlide: '.popup-design-slider',
    arrowLeft: '#popup_design_left',
    arrowRight: '#popup_design_right',
    sliderCountCurrent: '.slider-counter-content__current',
    sliderCountTotal: '.slider-counter-content__total',
    popupText: '.popup-design-text',
    popupTextActiveClass: 'visible-content-block',
    dispFlex: '.popup-design-slider-wrap',

  });
});

document.addEventListener('DOMContentLoaded', () => {
  telMenu();
  burgerMenu();
  smoothScrolling();
  popupRepairTypes();
  telMask();
  linkPrivacy();
  formula(windowWidth);
  problems(windowWidth);
  const sliderRepair = new repairViews();
  sliderRepair.start();
  accordion();
  documentSlider(windowWidth);

  const sliderTransparency = new slider();
  sliderTransparency.start();
  buttonWide();

  const partners = new Carousel();
  partners.start();

  sliderReviews();
  inspirationalPortfolio();
  inspirationalPortfolioPopup();

  tabs({
    block: '#designs',
    blockWrapper: '.nav',
    blockSlides: '#designs-list',
    arrowRight: '#nav-arrow-designs_right',
    arrowLeft: '#nav-arrow-designs_left'
  });

  tabs({
    block: '#scheme',
    blockWrapper: '.nav',
    blockSlides: '#scheme-list',
    arrowRight: '#nav-arrow-scheme_right',
    arrowLeft: '#nav-arrow-scheme_left'
  });

  tabs({
    block: '.popup-dialog-design',
    blockWrapper: '.nav-designs',
    blockSlides: '#nav-list-popup-designs',
    arrowRight: '#nav-arrow-popup-designs_right',
    arrowLeft: '#nav-arrow-popup-designs_left'
  });

  scheme();
  if (windowWidth > 1024) {
    desingBoolet();
  } else {
    desingSliders({
      block: '#designs',
      wrapper: '.designs-slider-wrap',
      nav: '.designs-nav__item',
      wrapperSlide: '.designs-slider',
      arrowLeft: '#design_left',
      arrowRight: '#design_right',
      sliderCountCurrent: '.slider-counter-content__current',
      sliderCountTotal: '.slider-counter-content__total',
    });
  }

  desingSliders({
    block: '.popup-design',
    wrapper: '.popup-dialog-design',
    nav: '.designs-nav__item',
    wrapperSlide: '.popup-design-slider',
    arrowLeft: '#popup_design_left',
    arrowRight: '#popup_design_right',
    sliderCountCurrent: '.slider-counter-content__current',
    sliderCountTotal: '.slider-counter-content__total',
    popupText: '.popup-design-text',
    popupTextActiveClass: 'visible-content-block',
    dispFlex: '.popup-design-slider-wrap',

  });

  keyDownEsc();
  desingPopup();
  ajaxPost();
  get();
});
