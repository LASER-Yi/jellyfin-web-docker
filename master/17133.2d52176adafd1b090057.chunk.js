(self.webpackChunk=self.webpackChunk||[]).push([[17133,94160,19863,42244,75101,97482,9387,31768],{94160:function(e,t,a){"use strict";a(44962),a(36947),a(78557),a(82367),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var u;if("formatting"===(null!=a&&a.context?String(a.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,d=null!=a&&a.width?String(a.width):r;u=e.formattingValues[d]||e.formattingValues[r]}else{var n=e.defaultWidth,i=null!=a&&a.width?String(a.width):e.defaultWidth;u=e.values[i]||e.values[n]}return u[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},17133:function(e,t,a){"use strict";a(94),a(36947);var u=a(96784).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(a(94160)),d={ordinalNumber:function(e,t){var a=Number(e),u=a%100;if(u>20||u<10)switch(u%10){case 1:return a+"-ви";case 2:return a+"-ри";case 7:case 8:return a+"-ми"}return a+"-ти"},era:(0,r.default)({values:{narrow:["пр.н.е.","н.е."],abbreviated:["пред н. е.","н. е."],wide:["пред нашата ера","нашата ера"]},defaultWidth:"wide"}),quarter:(0,r.default)({values:{narrow:["1","2","3","4"],abbreviated:["1-ви кв.","2-ри кв.","3-ти кв.","4-ти кв."],wide:["1-ви квартал","2-ри квартал","3-ти квартал","4-ти квартал"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,r.default)({values:{abbreviated:["јан","фев","мар","апр","мај","јун","јул","авг","септ","окт","ноем","дек"],wide:["јануари","февруари","март","април","мај","јуни","јули","август","септември","октомври","ноември","декември"]},defaultWidth:"wide"}),day:(0,r.default)({values:{narrow:["Н","П","В","С","Ч","П","С"],short:["не","по","вт","ср","че","пе","са"],abbreviated:["нед","пон","вто","сре","чет","пет","саб"],wide:["недела","понеделник","вторник","среда","четврток","петок","сабота"]},defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:{wide:{am:"претпладне",pm:"попладне",midnight:"полноќ",noon:"напладне",morning:"наутро",afternoon:"попладне",evening:"навечер",night:"ноќе"}},defaultWidth:"wide"})};t.default=d,e.exports=t.default},96784:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);