(self.webpackChunk=self.webpackChunk||[]).push([[98931,94160,19863,42244,75101,97482,9387,31768],{94160:function(e,a,n){"use strict";n(44962),n(36947),n(78557),n(82367),Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a,n){var t;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,r=null!=n&&n.width?String(n.width):i;t=e.formattingValues[r]||e.formattingValues[i]}else{var l=e.defaultWidth,o=null!=n&&n.width?String(n.width):e.defaultWidth;t=e.values[o]||e.values[l]}return t[e.argumentCallback?e.argumentCallback(a):a]}},e.exports=a.default},98931:function(e,a,n){"use strict";n(94),n(36947);var t=n(96784).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=t(n(94160)),r={ordinalNumber:function(e,a){return Number(e)+"."},era:(0,i.default)({values:{narrow:["MÖ","MS"],abbreviated:["MÖ","MS"],wide:["Milattan Önce","Milattan Sonra"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["1Ç","2Ç","3Ç","4Ç"],wide:["İlk çeyrek","İkinci Çeyrek","Üçüncü çeyrek","Son çeyrek"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,i.default)({values:{narrow:["O","Ş","M","N","M","H","T","A","E","E","K","A"],abbreviated:["Oca","Şub","Mar","Nis","May","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara"],wide:["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["P","P","S","Ç","P","C","C"],short:["Pz","Pt","Sa","Ça","Pe","Cu","Ct"],abbreviated:["Paz","Pzt","Sal","Çar","Per","Cum","Cts"],wide:["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"öö",pm:"ös",midnight:"gy",noon:"ö",morning:"sa",afternoon:"ös",evening:"ak",night:"ge"},abbreviated:{am:"ÖÖ",pm:"ÖS",midnight:"gece yarısı",noon:"öğle",morning:"sabah",afternoon:"öğleden sonra",evening:"akşam",night:"gece"},wide:{am:"Ö.Ö.",pm:"Ö.S.",midnight:"gece yarısı",noon:"öğle",morning:"sabah",afternoon:"öğleden sonra",evening:"akşam",night:"gece"}},defaultWidth:"wide",formattingValues:{narrow:{am:"öö",pm:"ös",midnight:"gy",noon:"ö",morning:"sa",afternoon:"ös",evening:"ak",night:"ge"},abbreviated:{am:"ÖÖ",pm:"ÖS",midnight:"gece yarısı",noon:"öğlen",morning:"sabahleyin",afternoon:"öğleden sonra",evening:"akşamleyin",night:"geceleyin"},wide:{am:"ö.ö.",pm:"ö.s.",midnight:"gece yarısı",noon:"öğlen",morning:"sabahleyin",afternoon:"öğleden sonra",evening:"akşamleyin",night:"geceleyin"}},defaultFormattingWidth:"wide"})};a.default=r,e.exports=a.default},96784:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);