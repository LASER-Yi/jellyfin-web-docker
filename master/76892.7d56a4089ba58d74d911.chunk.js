(self.webpackChunk=self.webpackChunk||[]).push([[76892,94160,19863,42244,75101,97482,9387,31768],{94160:function(e,t,n){"use strict";n(44962),n(36947),n(78557),n(82367),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n){var a;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,r=null!=n&&n.width?String(n.width):i;a=e.formattingValues[r]||e.formattingValues[i]}else{var d=e.defaultWidth,o=null!=n&&n.width?String(n.width):e.defaultWidth;a=e.values[o]||e.values[d]}return a[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},76892:function(e,t,n){"use strict";n(94),n(36947);var a=n(96784).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(94160)),r={ordinalNumber:function(e,t){return Number(e)+"ನೇ"},era:(0,i.default)({values:{narrow:["ಕ್ರಿ.ಪೂ","ಕ್ರಿ.ಶ"],abbreviated:["ಕ್ರಿ.ಪೂ","ಕ್ರಿ.ಶ"],wide:["ಕ್ರಿಸ್ತ ಪೂರ್ವ","ಕ್ರಿಸ್ತ ಶಕ"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["ತ್ರೈ 1","ತ್ರೈ 2","ತ್ರೈ 3","ತ್ರೈ 4"],wide:["1ನೇ ತ್ರೈಮಾಸಿಕ","2ನೇ ತ್ರೈಮಾಸಿಕ","3ನೇ ತ್ರೈಮಾಸಿಕ","4ನೇ ತ್ರೈಮಾಸಿಕ"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,i.default)({values:{narrow:["ಜ","ಫೆ","ಮಾ","ಏ","ಮೇ","ಜೂ","ಜು","ಆ","ಸೆ","ಅ","ನ","ಡಿ"],abbreviated:["ಜನ","ಫೆಬ್ರ","ಮಾರ್ಚ್","ಏಪ್ರಿ","ಮೇ","ಜೂನ್","ಜುಲೈ","ಆಗ","ಸೆಪ್ಟೆಂ","ಅಕ್ಟೋ","ನವೆಂ","ಡಿಸೆಂ"],wide:["ಜನವರಿ","ಫೆಬ್ರವರಿ","ಮಾರ್ಚ್","ಏಪ್ರಿಲ್","ಮೇ","ಜೂನ್","ಜುಲೈ","ಆಗಸ್ಟ್","ಸೆಪ್ಟೆಂಬರ್","ಅಕ್ಟೋಬರ್","ನವೆಂಬರ್","ಡಿಸೆಂಬರ್"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["ಭಾ","ಸೋ","ಮಂ","ಬು","ಗು","ಶು","ಶ"],short:["ಭಾನು","ಸೋಮ","ಮಂಗಳ","ಬುಧ","ಗುರು","ಶುಕ್ರ","ಶನಿ"],abbreviated:["ಭಾನು","ಸೋಮ","ಮಂಗಳ","ಬುಧ","ಗುರು","ಶುಕ್ರ","ಶನಿ"],wide:["ಭಾನುವಾರ","ಸೋಮವಾರ","ಮಂಗಳವಾರ","ಬುಧವಾರ","ಗುರುವಾರ","ಶುಕ್ರವಾರ","ಶನಿವಾರ"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"ಪೂರ್ವಾಹ್ನ",pm:"ಅಪರಾಹ್ನ",midnight:"ಮಧ್ಯರಾತ್ರಿ",noon:"ಮಧ್ಯಾಹ್ನ",morning:"ಬೆಳಗ್ಗೆ",afternoon:"ಮಧ್ಯಾಹ್ನ",evening:"ಸಂಜೆ",night:"ರಾತ್ರಿ"},abbreviated:{am:"ಪೂರ್ವಾಹ್ನ",pm:"ಅಪರಾಹ್ನ",midnight:"ಮಧ್ಯರಾತ್ರಿ",noon:"ಮಧ್ಯಾನ್ಹ",morning:"ಬೆಳಗ್ಗೆ",afternoon:"ಮಧ್ಯಾನ್ಹ",evening:"ಸಂಜೆ",night:"ರಾತ್ರಿ"},wide:{am:"ಪೂರ್ವಾಹ್ನ",pm:"ಅಪರಾಹ್ನ",midnight:"ಮಧ್ಯರಾತ್ರಿ",noon:"ಮಧ್ಯಾನ್ಹ",morning:"ಬೆಳಗ್ಗೆ",afternoon:"ಮಧ್ಯಾನ್ಹ",evening:"ಸಂಜೆ",night:"ರಾತ್ರಿ"}},defaultWidth:"wide",formattingValues:{narrow:{am:"ಪೂ",pm:"ಅ",midnight:"ಮಧ್ಯರಾತ್ರಿ",noon:"ಮಧ್ಯಾನ್ಹ",morning:"ಬೆಳಗ್ಗೆ",afternoon:"ಮಧ್ಯಾನ್ಹ",evening:"ಸಂಜೆ",night:"ರಾತ್ರಿ"},abbreviated:{am:"ಪೂರ್ವಾಹ್ನ",pm:"ಅಪರಾಹ್ನ",midnight:"ಮಧ್ಯ ರಾತ್ರಿ",noon:"ಮಧ್ಯಾನ್ಹ",morning:"ಬೆಳಗ್ಗೆ",afternoon:"ಮಧ್ಯಾನ್ಹ",evening:"ಸಂಜೆ",night:"ರಾತ್ರಿ"},wide:{am:"ಪೂರ್ವಾಹ್ನ",pm:"ಅಪರಾಹ್ನ",midnight:"ಮಧ್ಯ ರಾತ್ರಿ",noon:"ಮಧ್ಯಾನ್ಹ",morning:"ಬೆಳಗ್ಗೆ",afternoon:"ಮಧ್ಯಾನ್ಹ",evening:"ಸಂಜೆ",night:"ರಾತ್ರಿ"}},defaultFormattingWidth:"wide"})};t.default=r,e.exports=t.default},96784:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);