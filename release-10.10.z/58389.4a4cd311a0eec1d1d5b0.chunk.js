"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[58389,94160],{94160:function(a,e,n){n(44962),n(36947),n(78557),n(82367),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e,n){var t;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&a.formattingValues){var i=a.defaultFormattingWidth||a.defaultWidth,r=null!=n&&n.width?String(n.width):i;t=a.formattingValues[r]||a.formattingValues[i]}else{var u=a.defaultWidth,m=null!=n&&n.width?String(n.width):a.defaultWidth;t=a.values[m]||a.values[u]}return t[a.argumentCallback?a.argumentCallback(e):e]}},a.exports=e.default},58389:function(a,e,n){n(94),n(36947);var t=n(96784).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=t(n(94160)),r={ordinalNumber:function(a,e){return"ke-"+Number(a)},era:(0,i.default)({values:{narrow:["SM","M"],abbreviated:["SM","M"],wide:["Sebelum Masihi","Masihi"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["S1","S2","S3","S4"],wide:["Suku pertama","Suku kedua","Suku ketiga","Suku keempat"]},defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:(0,i.default)({values:{narrow:["J","F","M","A","M","J","J","O","S","O","N","D"],abbreviated:["Jan","Feb","Mac","Apr","Mei","Jun","Jul","Ogo","Sep","Okt","Nov","Dis"],wide:["Januari","Februari","Mac","April","Mei","Jun","Julai","Ogos","September","Oktober","November","Disember"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["A","I","S","R","K","J","S"],short:["Ahd","Isn","Sel","Rab","Kha","Jum","Sab"],abbreviated:["Ahd","Isn","Sel","Rab","Kha","Jum","Sab"],wide:["Ahad","Isnin","Selasa","Rabu","Khamis","Jumaat","Sabtu"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"am",pm:"pm",midnight:"tgh malam",noon:"tgh hari",morning:"pagi",afternoon:"tengah hari",evening:"petang",night:"malam"},abbreviated:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"tengah hari",evening:"petang",night:"malam"},wide:{am:"a.m.",pm:"p.m.",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"tengah hari",evening:"petang",night:"malam"}},defaultWidth:"wide",formattingValues:{narrow:{am:"am",pm:"pm",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"tengah hari",evening:"petang",night:"malam"},abbreviated:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"tengah hari",evening:"petang",night:"malam"},wide:{am:"a.m.",pm:"p.m.",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"tengah hari",evening:"petang",night:"malam"}},defaultFormattingWidth:"wide"})};e.default=r,a.exports=e.default}}]);