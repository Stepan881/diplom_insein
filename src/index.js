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


telMenu();
burgerMenu();
smoothScrolling();
popupRepairTypes();
telMask();
linkPrivacy();
formula();
problems();
repairViews();
