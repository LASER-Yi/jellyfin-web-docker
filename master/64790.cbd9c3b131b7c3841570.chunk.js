(self.webpackChunk=self.webpackChunk||[]).push([[64790,94160,19863,42244,75101,97482,9387,31768],{94160:function(t,e,a){"use strict";a(44962),a(36947),a(78557),a(82367),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e,a){var n;if("formatting"===(null!=a&&a.context?String(a.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,r=null!=a&&a.width?String(a.width):i;n=t.formattingValues[r]||t.formattingValues[i]}else{var o=t.defaultWidth,u=null!=a&&a.width?String(a.width):t.defaultWidth;n=t.values[u]||t.values[o]}return n[t.argumentCallback?t.argumentCallback(e):e]}},t.exports=e.default},64790:function(t,e,a){"use strict";a(94),a(36947);var n=a(96784).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a(94160)),r={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jän","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Jänner","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},o={narrow:r.narrow,abbreviated:["Jän.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."],wide:r.wide},u={ordinalNumber:function(t){return Number(t)+"."},era:(0,i.default)({values:{narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["vor Christus","nach Christus"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:(0,i.default)({values:r,formattingValues:o,defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["S","M","D","M","D","F","S"],short:["So","Mo","Di","Mi","Do","Fr","Sa"],abbreviated:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],wide:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachm.",evening:"Abend",night:"Nacht"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"}},defaultWidth:"wide",formattingValues:{narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachm.",evening:"abends",night:"nachts"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"}},defaultFormattingWidth:"wide"})};e.default=u,t.exports=e.default},96784:function(t){t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.__esModule=!0,t.exports.default=t.exports}}]);