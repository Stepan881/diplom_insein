'use strict';


import "regenerator-runtime/runtime";
import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import 'formdata-polyfill';
import 'element-closest';
import 'es6-promise';
import 'fetch-polyfill';

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

let windowWidth = window.innerWidth;
window.addEventListener(`resize`, () => {
  windowWidth = window.innerWidth;
  formula(windowWidth);
  documentSlider(windowWidth);
});

document.addEventListener('DOMContentLoaded', () => {
  telMenu();
  burgerMenu();
  smoothScrolling();
  popupRepairTypes();
  telMask();
  linkPrivacy();
  formula(windowWidth);
  problems();
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
});