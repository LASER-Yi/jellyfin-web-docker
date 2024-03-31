"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[49702,94160,71779,49398,27017,4636,82255,59874],{94160:function(e,n,t){t(36947),t(44962),t(78557),t(82367),Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return function(n,t){var a;if("formatting"===(null!=t&&t.context?String(t.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,r=null!=t&&t.width?String(t.width):i;a=e.formattingValues[r]||e.formattingValues[i]}else{var d=e.defaultWidth,o=null!=t&&t.width?String(t.width):e.defaultWidth;a=e.values[o]||e.values[d]}return a[e.argumentCallback?e.argumentCallback(n):n]}},e.exports=n.default},49702:function(e,n,t){t(36947),t(94),t(84734);var a=t(96784).default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(t(94160)),r={ordinalNumber:function(e,n){var t=Number(e);if(t<=0||t>10)return String(t);var a=String(null==n?void 0:n.unit),i=t-1;return["year","hour","minute","second"].indexOf(a)>=0?["ראשונה","שנייה","שלישית","רביעית","חמישית","שישית","שביעית","שמינית","תשיעית","עשירית"][i]:["ראשון","שני","שלישי","רביעי","חמישי","שישי","שביעי","שמיני","תשיעי","עשירי"][i]},era:(0,i.default)({values:{narrow:["לפנה״ס","לספירה"],abbreviated:["לפנה״ס","לספירה"],wide:["לפני הספירה","לספירה"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["רבעון 1","רבעון 2","רבעון 3","רבעון 4"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,i.default)({values:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],abbreviated:["ינו׳","פבר׳","מרץ","אפר׳","מאי","יוני","יולי","אוג׳","ספט׳","אוק׳","נוב׳","דצמ׳"],wide:["ינואר","פברואר","מרץ","אפריל","מאי","יוני","יולי","אוגוסט","ספטמבר","אוקטובר","נובמבר","דצמבר"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["א׳","ב׳","ג׳","ד׳","ה׳","ו׳","ש׳"],short:["א׳","ב׳","ג׳","ד׳","ה׳","ו׳","ש׳"],abbreviated:["יום א׳","יום ב׳","יום ג׳","יום ד׳","יום ה׳","יום ו׳","שבת"],wide:["יום ראשון","יום שני","יום שלישי","יום רביעי","יום חמישי","יום שישי","יום שבת"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"לפנה״צ",pm:"אחה״צ",midnight:"חצות",noon:"צהריים",morning:"בוקר",afternoon:"אחר הצהריים",evening:"ערב",night:"לילה"},abbreviated:{am:"לפנה״צ",pm:"אחה״צ",midnight:"חצות",noon:"צהריים",morning:"בוקר",afternoon:"אחר הצהריים",evening:"ערב",night:"לילה"},wide:{am:"לפנה״צ",pm:"אחה״צ",midnight:"חצות",noon:"צהריים",morning:"בוקר",afternoon:"אחר הצהריים",evening:"ערב",night:"לילה"}},defaultWidth:"wide",formattingValues:{narrow:{am:"לפנה״צ",pm:"אחה״צ",midnight:"חצות",noon:"צהריים",morning:"בבוקר",afternoon:"בצהריים",evening:"בערב",night:"בלילה"},abbreviated:{am:"לפנה״צ",pm:"אחה״צ",midnight:"חצות",noon:"צהריים",morning:"בבוקר",afternoon:"אחר הצהריים",evening:"בערב",night:"בלילה"},wide:{am:"לפנה״צ",pm:"אחה״צ",midnight:"חצות",noon:"צהריים",morning:"בבוקר",afternoon:"אחר הצהריים",evening:"בערב",night:"בלילה"}},defaultFormattingWidth:"wide"})};n.default=r,e.exports=n.default}}]);