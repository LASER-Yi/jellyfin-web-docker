"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[45995,94160,71779,49398,27017,4636,82255,59874],{94160:function(e,t,n){n(36947),n(44962),n(78557),n(82367),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n){var a;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=null!=n&&n.width?String(n.width):i;a=e.formattingValues[o]||e.formattingValues[i]}else{var r=e.defaultWidth,u=null!=n&&n.width?String(n.width):e.defaultWidth;a=e.values[u]||e.values[r]}return a[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},45995:function(e,t,n){n(36947),n(94);var a=n(96784).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(94160)),o={ordinalNumber:function(e,t){return Number(e)+"."},era:(0,i.default)({values:{narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["viru Christus","no Christus"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,i.default)({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mäe","Abr","Mee","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Januar","Februar","Mäerz","Abrëll","Mee","Juni","Juli","August","September","Oktober","November","Dezember"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["S","M","D","M","D","F","S"],short:["So","Mé","Dë","Më","Do","Fr","Sa"],abbreviated:["So.","Mé.","Dë.","Më.","Do.","Fr.","Sa."],wide:["Sonndeg","Méindeg","Dënschdeg","Mëttwoch","Donneschdeg","Freideg","Samschdeg"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"mo.",pm:"nomë.",midnight:"Mëtternuecht",noon:"Mëtteg",morning:"Moien",afternoon:"Nomëtteg",evening:"Owend",night:"Nuecht"},abbreviated:{am:"moies",pm:"nomëttes",midnight:"Mëtternuecht",noon:"Mëtteg",morning:"Moien",afternoon:"Nomëtteg",evening:"Owend",night:"Nuecht"},wide:{am:"moies",pm:"nomëttes",midnight:"Mëtternuecht",noon:"Mëtteg",morning:"Moien",afternoon:"Nomëtteg",evening:"Owend",night:"Nuecht"}},defaultWidth:"wide",formattingValues:{narrow:{am:"mo.",pm:"nom.",midnight:"Mëtternuecht",noon:"mëttes",morning:"moies",afternoon:"nomëttes",evening:"owes",night:"nuets"},abbreviated:{am:"moies",pm:"nomëttes",midnight:"Mëtternuecht",noon:"mëttes",morning:"moies",afternoon:"nomëttes",evening:"owes",night:"nuets"},wide:{am:"moies",pm:"nomëttes",midnight:"Mëtternuecht",noon:"mëttes",morning:"moies",afternoon:"nomëttes",evening:"owes",night:"nuets"}},defaultFormattingWidth:"wide"})};t.default=o,e.exports=t.default}}]);