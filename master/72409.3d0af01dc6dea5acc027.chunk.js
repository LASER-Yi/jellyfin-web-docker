(self.webpackChunk=self.webpackChunk||[]).push([[72409,94160,19863,42244,75101,97482,9387,31768],{94160:function(e,n,t){"use strict";t(44962),t(36947),t(78557),t(82367),Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return function(n,t){var a;if("formatting"===(null!=t&&t.context?String(t.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,i=null!=t&&t.width?String(t.width):r;a=e.formattingValues[i]||e.formattingValues[r]}else{var d=e.defaultWidth,o=null!=t&&t.width?String(t.width):e.defaultWidth;a=e.values[o]||e.values[d]}return a[e.argumentCallback?e.argumentCallback(n):n]}},e.exports=n.default},72409:function(e,n,t){"use strict";t(94),t(36947);var a=t(96784).default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(94160)),i={ordinalNumber:function(e,n){var t=Number(e);return"hour"===(null==n?void 0:n.unit)?String(t):1===t?t+"-rë":4===t?t+"t":t+"-të"},era:(0,r.default)({values:{narrow:["P","M"],abbreviated:["PK","MK"],wide:["Para Krishtit","Mbas Krishtit"]},defaultWidth:"wide"}),quarter:(0,r.default)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["4-mujori I","4-mujori II","4-mujori III","4-mujori IV"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,r.default)({values:{narrow:["J","S","M","P","M","Q","K","G","S","T","N","D"],abbreviated:["Jan","Shk","Mar","Pri","Maj","Qer","Kor","Gus","Sht","Tet","Nën","Dhj"],wide:["Janar","Shkurt","Mars","Prill","Maj","Qershor","Korrik","Gusht","Shtator","Tetor","Nëntor","Dhjetor"]},defaultWidth:"wide"}),day:(0,r.default)({values:{narrow:["D","H","M","M","E","P","S"],short:["Di","Hë","Ma","Më","En","Pr","Sh"],abbreviated:["Die","Hën","Mar","Mër","Enj","Pre","Sht"],wide:["Dielë","Hënë","Martë","Mërkurë","Enjte","Premte","Shtunë"]},defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:{narrow:{am:"p",pm:"m",midnight:"m",noon:"d",morning:"mëngjes",afternoon:"dite",evening:"mbrëmje",night:"natë"},abbreviated:{am:"PD",pm:"MD",midnight:"mesnëtë",noon:"drek",morning:"mëngjes",afternoon:"mbasdite",evening:"mbrëmje",night:"natë"},wide:{am:"p.d.",pm:"m.d.",midnight:"mesnëtë",noon:"drek",morning:"mëngjes",afternoon:"mbasdite",evening:"mbrëmje",night:"natë"}},defaultWidth:"wide",formattingValues:{narrow:{am:"p",pm:"m",midnight:"m",noon:"d",morning:"në mëngjes",afternoon:"në mbasdite",evening:"në mbrëmje",night:"në mesnatë"},abbreviated:{am:"PD",pm:"MD",midnight:"mesnatë",noon:"drek",morning:"në mëngjes",afternoon:"në mbasdite",evening:"në mbrëmje",night:"në mesnatë"},wide:{am:"p.d.",pm:"m.d.",midnight:"mesnatë",noon:"drek",morning:"në mëngjes",afternoon:"në mbasdite",evening:"në mbrëmje",night:"në mesnatë"}},defaultFormattingWidth:"wide"})};n.default=i,e.exports=n.default},96784:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);