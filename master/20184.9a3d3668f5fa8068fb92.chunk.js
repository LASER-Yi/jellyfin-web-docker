"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[20184,72232,22907,94891,94250,73710,23945,95671],{72232:function(e,t,n){n(99785),n(5769),n(63238),n(14078),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n){var a;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,r=null!=n&&n.width?String(n.width):i;a=e.formattingValues[r]||e.formattingValues[i]}else{var d=e.defaultWidth,o=null!=n&&n.width?String(n.width):e.defaultWidth;a=e.values[o]||e.values[d]}return a[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},20184:function(e,t,n){n(99785),n(95163);var a=n(73203).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(72232)),r={ordinalNumber:function(e,t){return Number(e)+"."},era:(0,i.default)({values:{narrow:["пр.н.е.","АД"],abbreviated:["пр. Хр.","по. Хр."],wide:["Пре Христа","После Христа"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1.","2.","3.","4."],abbreviated:["1. кв.","2. кв.","3. кв.","4. кв."],wide:["1. квартал","2. квартал","3. квартал","4. квартал"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,i.default)({values:{narrow:["1.","2.","3.","4.","5.","6.","7.","8.","9.","10.","11.","12."],abbreviated:["јан","феб","мар","апр","мај","јун","јул","авг","сеп","окт","нов","дец"],wide:["јануар","фебруар","март","април","мај","јун","јул","август","септембар","октобар","новембар","децембар"]},defaultWidth:"wide",formattingValues:{narrow:["1.","2.","3.","4.","5.","6.","7.","8.","9.","10.","11.","12."],abbreviated:["јан","феб","мар","апр","мај","јун","јул","авг","сеп","окт","нов","дец"],wide:["јануар","фебруар","март","април","мај","јун","јул","август","септембар","октобар","новембар","децембар"]},defaultFormattingWidth:"wide"}),day:(0,i.default)({values:{narrow:["Н","П","У","С","Ч","П","С"],short:["нед","пон","уто","сре","чет","пет","суб"],abbreviated:["нед","пон","уто","сре","чет","пет","суб"],wide:["недеља","понедељак","уторак","среда","четвртак","петак","субота"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"AM",pm:"PM",midnight:"поноћ",noon:"подне",morning:"ујутру",afternoon:"поподне",evening:"увече",night:"ноћу"},abbreviated:{am:"AM",pm:"PM",midnight:"поноћ",noon:"подне",morning:"ујутру",afternoon:"поподне",evening:"увече",night:"ноћу"},wide:{am:"AM",pm:"PM",midnight:"поноћ",noon:"подне",morning:"ујутру",afternoon:"после подне",evening:"увече",night:"ноћу"}},defaultWidth:"wide",formattingValues:{narrow:{am:"АМ",pm:"ПМ",midnight:"поноћ",noon:"подне",morning:"ујутру",afternoon:"поподне",evening:"увече",night:"ноћу"},abbreviated:{am:"АМ",pm:"ПМ",midnight:"поноћ",noon:"подне",morning:"ујутру",afternoon:"поподне",evening:"увече",night:"ноћу"},wide:{am:"AM",pm:"PM",midnight:"поноћ",noon:"подне",morning:"ујутру",afternoon:"после подне",evening:"увече",night:"ноћу"}},defaultFormattingWidth:"wide"})};t.default=r,e.exports=t.default}}]);