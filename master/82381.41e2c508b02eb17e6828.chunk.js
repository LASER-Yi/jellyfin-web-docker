(self.webpackChunk=self.webpackChunk||[]).push([[82381,94160,19863,42244,75101,97482,9387,31768],{94160:function(e,t,a){"use strict";a(44962),a(36947),a(78557),a(82367),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var n;if("formatting"===(null!=a&&a.context?String(a.context):"standalone")&&e.formattingValues){var u=e.defaultFormattingWidth||e.defaultWidth,r=null!=a&&a.width?String(a.width):u;n=e.formattingValues[r]||e.formattingValues[u]}else{var d=e.defaultWidth,i=null!=a&&a.width?String(a.width):e.defaultWidth;n=e.values[i]||e.values[d]}return n[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},82381:function(e,t,a){"use strict";a(36947);var n=a(96784).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n(a(94160)),r={ordinalNumber:function(e,t){return String(e)},era:(0,u.default)({values:{narrow:["М.А","М"],abbreviated:["М.А","М"],wide:["Милоддан Аввалги","Милодий"]},defaultWidth:"wide"}),quarter:(0,u.default)({values:{narrow:["1","2","3","4"],abbreviated:["1-чор.","2-чор.","3-чор.","4-чор."],wide:["1-чорак","2-чорак","3-чорак","4-чорак"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,u.default)({values:{narrow:["Я","Ф","М","А","М","И","И","А","С","О","Н","Д"],abbreviated:["янв","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек"],wide:["январ","феврал","март","апрел","май","июн","июл","август","сентабр","октабр","ноябр","декабр"]},defaultWidth:"wide"}),day:(0,u.default)({values:{narrow:["Я","Д","С","Ч","П","Ж","Ш"],short:["як","ду","се","чо","па","жу","ша"],abbreviated:["якш","душ","сеш","чор","пай","жум","шан"],wide:["якшанба","душанба","сешанба","чоршанба","пайшанба","жума","шанба"]},defaultWidth:"wide"}),dayPeriod:(0,u.default)({values:{any:{am:"П.О.",pm:"П.К.",midnight:"ярим тун",noon:"пешин",morning:"эрталаб",afternoon:"пешиндан кейин",evening:"кечаси",night:"тун"}},defaultWidth:"any",formattingValues:{any:{am:"П.О.",pm:"П.К.",midnight:"ярим тун",noon:"пешин",morning:"эрталаб",afternoon:"пешиндан кейин",evening:"кечаси",night:"тун"}},defaultFormattingWidth:"any"})};t.default=r,e.exports=t.default},96784:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);