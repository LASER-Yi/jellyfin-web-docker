"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[97050,72232,22907,94891,94250,73710,23945,95671],{72232:function(e,a,t){t(99785),t(5769),t(63238),t(14078),Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a,t){var n;if("formatting"===(null!=t&&t.context?String(t.context):"standalone")&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,r=null!=t&&t.width?String(t.width):o;n=e.formattingValues[r]||e.formattingValues[o]}else{var d=e.defaultWidth,u=null!=t&&t.width?String(t.width):e.defaultWidth;n=e.values[u]||e.values[d]}return n[e.argumentCallback?e.argumentCallback(a):a]}},e.exports=a.default},97050:function(e,a,t){t(99785),t(95163),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n,o=(n=t(72232))&&n.__esModule?n:{default:n},r={ordinalNumber:function(e){return Number(e)+"-a"},era:(0,o.default)({values:{narrow:["aK","pK"],abbreviated:["a.K.E.","p.K.E."],wide:["antaŭ Komuna Erao","Komuna Erao"]},defaultWidth:"wide"}),quarter:(0,o.default)({values:{narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["1-a kvaronjaro","2-a kvaronjaro","3-a kvaronjaro","4-a kvaronjaro"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,o.default)({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan","feb","mar","apr","maj","jun","jul","aŭg","sep","okt","nov","dec"],wide:["januaro","februaro","marto","aprilo","majo","junio","julio","aŭgusto","septembro","oktobro","novembro","decembro"]},defaultWidth:"wide"}),day:(0,o.default)({values:{narrow:["D","L","M","M","Ĵ","V","S"],short:["di","lu","ma","me","ĵa","ve","sa"],abbreviated:["dim","lun","mar","mer","ĵaŭ","ven","sab"],wide:["dimanĉo","lundo","mardo","merkredo","ĵaŭdo","vendredo","sabato"]},defaultWidth:"wide"}),dayPeriod:(0,o.default)({values:{narrow:{am:"a",pm:"p",midnight:"noktomezo",noon:"tagmezo",morning:"matene",afternoon:"posttagmeze",evening:"vespere",night:"nokte"},abbreviated:{am:"a.t.m.",pm:"p.t.m.",midnight:"noktomezo",noon:"tagmezo",morning:"matene",afternoon:"posttagmeze",evening:"vespere",night:"nokte"},wide:{am:"antaŭtagmeze",pm:"posttagmeze",midnight:"noktomezo",noon:"tagmezo",morning:"matene",afternoon:"posttagmeze",evening:"vespere",night:"nokte"}},defaultWidth:"wide"})};a.default=r,e.exports=a.default}}]);