"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[72241,94160],{94160:function(e,a,t){t(44962),t(36947),t(78557),t(82367),Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a,t){var n;if("formatting"===(null!=t&&t.context?String(t.context):"standalone")&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,r=null!=t&&t.width?String(t.width):o;n=e.formattingValues[r]||e.formattingValues[o]}else{var d=e.defaultWidth,i=null!=t&&t.width?String(t.width):e.defaultWidth;n=e.values[i]||e.values[d]}return n[e.argumentCallback?e.argumentCallback(a):a]}},e.exports=a.default},72241:function(e,a,t){t(94),t(36947);var n=t(96784).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=n(t(94160)),r={ordinalNumber:function(e){return Number(e)+"-a"},era:(0,o.default)({values:{narrow:["aK","pK"],abbreviated:["a.K.E.","p.K.E."],wide:["antaŭ Komuna Erao","Komuna Erao"]},defaultWidth:"wide"}),quarter:(0,o.default)({values:{narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["1-a kvaronjaro","2-a kvaronjaro","3-a kvaronjaro","4-a kvaronjaro"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,o.default)({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan","feb","mar","apr","maj","jun","jul","aŭg","sep","okt","nov","dec"],wide:["januaro","februaro","marto","aprilo","majo","junio","julio","aŭgusto","septembro","oktobro","novembro","decembro"]},defaultWidth:"wide"}),day:(0,o.default)({values:{narrow:["D","L","M","M","Ĵ","V","S"],short:["di","lu","ma","me","ĵa","ve","sa"],abbreviated:["dim","lun","mar","mer","ĵaŭ","ven","sab"],wide:["dimanĉo","lundo","mardo","merkredo","ĵaŭdo","vendredo","sabato"]},defaultWidth:"wide"}),dayPeriod:(0,o.default)({values:{narrow:{am:"a",pm:"p",midnight:"noktomezo",noon:"tagmezo",morning:"matene",afternoon:"posttagmeze",evening:"vespere",night:"nokte"},abbreviated:{am:"a.t.m.",pm:"p.t.m.",midnight:"noktomezo",noon:"tagmezo",morning:"matene",afternoon:"posttagmeze",evening:"vespere",night:"nokte"},wide:{am:"antaŭtagmeze",pm:"posttagmeze",midnight:"noktomezo",noon:"tagmezo",morning:"matene",afternoon:"posttagmeze",evening:"vespere",night:"nokte"}},defaultWidth:"wide"})};a.default=r,e.exports=a.default}}]);