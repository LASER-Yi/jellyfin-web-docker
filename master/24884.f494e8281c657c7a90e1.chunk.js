"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[24884,72232,22907,94891,94250,73710,23945,95671],{72232:function(e,t,a){a(33096),a(13227),a(81414),a(11431),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var u;if("formatting"===(null!=a&&a.context?String(a.context):"standalone")&&e.formattingValues){var d=e.defaultFormattingWidth||e.defaultWidth,r=null!=a&&a.width?String(a.width):d;u=e.formattingValues[r]||e.formattingValues[d]}else{var n=e.defaultWidth,i=null!=a&&a.width?String(a.width):e.defaultWidth;u=e.values[i]||e.values[n]}return u[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},24884:function(e,t,a){a(33096),a(11908);var u=a(73203).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var d=u(a(72232)),r={ordinalNumber:function(e,t){var a=Number(e),u=a%100;if(u>20||u<10)switch(u%10){case 1:return a+"-ви";case 2:return a+"-ри";case 7:case 8:return a+"-ми"}return a+"-ти"},era:(0,d.default)({values:{narrow:["пр.н.е.","н.е."],abbreviated:["пред н. е.","н. е."],wide:["пред нашата ера","нашата ера"]},defaultWidth:"wide"}),quarter:(0,d.default)({values:{narrow:["1","2","3","4"],abbreviated:["1-ви кв.","2-ри кв.","3-ти кв.","4-ти кв."],wide:["1-ви квартал","2-ри квартал","3-ти квартал","4-ти квартал"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,d.default)({values:{abbreviated:["јан","фев","мар","апр","мај","јун","јул","авг","септ","окт","ноем","дек"],wide:["јануари","февруари","март","април","мај","јуни","јули","август","септември","октомври","ноември","декември"]},defaultWidth:"wide"}),day:(0,d.default)({values:{narrow:["Н","П","В","С","Ч","П","С"],short:["не","по","вт","ср","че","пе","са"],abbreviated:["нед","пон","вто","сре","чет","пет","саб"],wide:["недела","понеделник","вторник","среда","четврток","петок","сабота"]},defaultWidth:"wide"}),dayPeriod:(0,d.default)({values:{wide:{am:"претпладне",pm:"попладне",midnight:"полноќ",noon:"напладне",morning:"наутро",afternoon:"попладне",evening:"навечер",night:"ноќе"}},defaultWidth:"wide"})};t.default=r,e.exports=t.default}}]);