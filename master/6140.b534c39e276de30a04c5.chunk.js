(self.webpackChunk=self.webpackChunk||[]).push([[6140,94160,19863,42244,75101,97482,9387,31768],{94160:function(a,e,n){"use strict";n(44962),n(36947),n(78557),n(82367),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e,n){var t;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&a.formattingValues){var i=a.defaultFormattingWidth||a.defaultWidth,r=null!=n&&n.width?String(n.width):i;t=a.formattingValues[r]||a.formattingValues[i]}else{var u=a.defaultWidth,l=null!=n&&n.width?String(n.width):a.defaultWidth;t=a.values[l]||a.values[u]}return t[a.argumentCallback?a.argumentCallback(e):e]}},a.exports=e.default},6140:function(a,e,n){"use strict";n(94),n(36947);var t=n(96784).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=t(n(94160)),r={ordinalNumber:function(a,e){return"ke-"+Number(a)},era:(0,i.default)({values:{narrow:["SM","M"],abbreviated:["SM","M"],wide:["Sebelum Masehi","Masehi"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["Kuartal ke-1","Kuartal ke-2","Kuartal ke-3","Kuartal ke-4"]},defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:(0,i.default)({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agt","Sep","Okt","Nov","Des"],wide:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["M","S","S","R","K","J","S"],short:["Min","Sen","Sel","Rab","Kam","Jum","Sab"],abbreviated:["Min","Sen","Sel","Rab","Kam","Jum","Sab"],wide:["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"siang",evening:"sore",night:"malam"},abbreviated:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"siang",evening:"sore",night:"malam"},wide:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"siang",evening:"sore",night:"malam"}},defaultWidth:"wide",formattingValues:{narrow:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"siang",evening:"sore",night:"malam"},abbreviated:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"siang",evening:"sore",night:"malam"},wide:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"siang",evening:"sore",night:"malam"}},defaultFormattingWidth:"wide"})};e.default=r,a.exports=e.default},96784:function(a){a.exports=function(a){return a&&a.__esModule?a:{default:a}},a.exports.__esModule=!0,a.exports.default=a.exports}}]);