"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[33791,72232,22907,94891,94250,73710,23945,95671],{72232:function(e,a,t){t(99785),t(5769),t(63238),t(14078),Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a,t){var n;if("formatting"===(null!=t&&t.context?String(t.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,d=null!=t&&t.width?String(t.width):i;n=e.formattingValues[d]||e.formattingValues[i]}else{var r=e.defaultWidth,m=null!=t&&t.width?String(t.width):e.defaultWidth;n=e.values[m]||e.values[r]}return n[e.argumentCallback?e.argumentCallback(a):a]}},e.exports=a.default},33791:function(e,a,t){t(99785),t(95163),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n,i=(n=t(72232))&&n.__esModule?n:{default:n},d={ordinalNumber:function(e,a){var t=Number(e);return 0===t?String(t):t+(1===t?"ye":"yèm")},era:(0,i.default)({values:{narrow:["av. J.-K","ap. J.-K"],abbreviated:["av. J.-K","ap. J.-K"],wide:["anvan Jezi Kris","apre Jezi Kris"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["T1","T2","T3","T4"],abbreviated:["1ye trim.","2yèm trim.","3yèm trim.","4yèm trim."],wide:["1ye trimès","2yèm trimès","3yèm trimès","4yèm trimès"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,i.default)({values:{narrow:["J","F","M","A","M","J","J","O","S","O","N","D"],abbreviated:["janv.","fevr.","mas","avr.","me","jen","jiyè","out","sept.","okt.","nov.","des."],wide:["janvye","fevrye","mas","avril","me","jen","jiyè","out","septanm","oktòb","novanm","desanm"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["D","L","M","M","J","V","S"],short:["di","le","ma","mè","je","va","sa"],abbreviated:["dim.","len.","mad.","mèk.","jed.","van.","sam."],wide:["dimanch","lendi","madi","mèkredi","jedi","vandredi","samdi"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"AM",pm:"PM",midnight:"minwit",noon:"midi",morning:"mat.",afternoon:"ap.m.",evening:"swa",night:"mat."},abbreviated:{am:"AM",pm:"PM",midnight:"minwit",noon:"midi",morning:"maten",afternoon:"aprèmidi",evening:"swa",night:"maten"},wide:{am:"AM",pm:"PM",midnight:"minwit",noon:"midi",morning:"nan maten",afternoon:"nan aprèmidi",evening:"nan aswè",night:"nan maten"}},defaultWidth:"wide"})};a.default=d,e.exports=a.default}}]);