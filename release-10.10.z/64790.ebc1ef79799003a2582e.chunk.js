"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[64790,94160],{94160:function(t,a,n){n(44962),n(36947),n(78557),n(82367),Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(t){return function(a,n){var e;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,r=null!=n&&n.width?String(n.width):i;e=t.formattingValues[r]||t.formattingValues[i]}else{var o=t.defaultWidth,d=null!=n&&n.width?String(n.width):t.defaultWidth;e=t.values[d]||t.values[o]}return e[t.argumentCallback?t.argumentCallback(a):a]}},t.exports=a.default},64790:function(t,a,n){n(94),n(36947);var e=n(96784).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=e(n(94160)),r={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jän","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Jänner","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},o={narrow:r.narrow,abbreviated:["Jän.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."],wide:r.wide},d={ordinalNumber:function(t){return Number(t)+"."},era:(0,i.default)({values:{narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["vor Christus","nach Christus"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:(0,i.default)({values:r,formattingValues:o,defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["S","M","D","M","D","F","S"],short:["So","Mo","Di","Mi","Do","Fr","Sa"],abbreviated:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],wide:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachm.",evening:"Abend",night:"Nacht"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"}},defaultWidth:"wide",formattingValues:{narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachm.",evening:"abends",night:"nachts"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"}},defaultFormattingWidth:"wide"})};a.default=d,t.exports=a.default}}]);