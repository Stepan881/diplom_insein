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



telMenu();
burgerMenu();