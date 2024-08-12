"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8860,7184,83518,9911,32292,65149,87530,99435,21816],{7184:function(a,t,e){e(89336),e(36947),e(95021),e(53819),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(a){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.width,r=i&&a.matchPatterns[i]||a.matchPatterns[a.defaultMatchWidth],n=t.match(r);if(!n)return null;var l,u=n[0],d=i&&a.parsePatterns[i]||a.parsePatterns[a.defaultParseWidth],s=Array.isArray(d)?function(a,t){for(var e=0;e<a.length;e++)if(a[e].test(u))return e}(d):function(a,t){for(var e in a)if(a.hasOwnProperty(e)&&a[e].test(u))return e}(d);return l=a.valueCallback?a.valueCallback(s):s,{value:l=e.valueCallback?e.valueCallback(l):l,rest:t.slice(u.length)}}},a.exports=t.default},83518:function(a,t,e){e(89336),e(36947),e(95021),e(53819),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(a){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.match(a.matchPattern);if(!i)return null;var r=i[0],n=t.match(a.parsePattern);if(!n)return null;var l=a.valueCallback?a.valueCallback(n[0]):n[0];return{value:l=e.valueCallback?e.valueCallback(l):l,rest:t.slice(r.length)}}},a.exports=t.default},86479:function(a,t,e){e(36947),e(96054);var i=e(96784).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(e(7184)),n={ordinalNumber:(0,i(e(83518)).default)({matchPattern:/^(\d+)(ನೇ|ನೆ)?/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^(ಕ್ರಿ.ಪೂ|ಕ್ರಿ.ಶ)/i,abbreviated:/^(ಕ್ರಿ\.?\s?ಪೂ\.?|ಕ್ರಿ\.?\s?ಶ\.?|ಪ್ರ\.?\s?ಶ\.?)/i,wide:/^(ಕ್ರಿಸ್ತ ಪೂರ್ವ|ಕ್ರಿಸ್ತ ಶಕ|ಪ್ರಸಕ್ತ ಶಕ)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^ಪೂ/i,/^(ಶ|ಪ್ರ)/i]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^ತ್ರೈ[1234]|ತ್ರೈ [1234]| [1234]ತ್ರೈ/i,wide:/^[1234](ನೇ)? ತ್ರೈಮಾಸಿಕ/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,r.default)({matchPatterns:{narrow:/^(ಜೂ|ಜು|ಜ|ಫೆ|ಮಾ|ಏ|ಮೇ|ಆ|ಸೆ|ಅ|ನ|ಡಿ)/i,abbreviated:/^(ಜನ|ಫೆಬ್ರ|ಮಾರ್ಚ್|ಏಪ್ರಿ|ಮೇ|ಜೂನ್|ಜುಲೈ|ಆಗ|ಸೆಪ್ಟೆಂ|ಅಕ್ಟೋ|ನವೆಂ|ಡಿಸೆಂ)/i,wide:/^(ಜನವರಿ|ಫೆಬ್ರವರಿ|ಮಾರ್ಚ್|ಏಪ್ರಿಲ್|ಮೇ|ಜೂನ್|ಜುಲೈ|ಆಗಸ್ಟ್|ಸೆಪ್ಟೆಂಬರ್|ಅಕ್ಟೋಬರ್|ನವೆಂಬರ್|ಡಿಸೆಂಬರ್)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^ಜ$/i,/^ಫೆ/i,/^ಮಾ/i,/^ಏ/i,/^ಮೇ/i,/^ಜೂ/i,/^ಜು$/i,/^ಆ/i,/^ಸೆ/i,/^ಅ/i,/^ನ/i,/^ಡಿ/i],any:[/^ಜನ/i,/^ಫೆ/i,/^ಮಾ/i,/^ಏ/i,/^ಮೇ/i,/^ಜೂನ್/i,/^ಜುಲೈ/i,/^ಆ/i,/^ಸೆ/i,/^ಅ/i,/^ನ/i,/^ಡಿ/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^(ಭಾ|ಸೋ|ಮ|ಬು|ಗು|ಶು|ಶ)/i,short:/^(ಭಾನು|ಸೋಮ|ಮಂಗಳ|ಬುಧ|ಗುರು|ಶುಕ್ರ|ಶನಿ)/i,abbreviated:/^(ಭಾನು|ಸೋಮ|ಮಂಗಳ|ಬುಧ|ಗುರು|ಶುಕ್ರ|ಶನಿ)/i,wide:/^(ಭಾನುವಾರ|ಸೋಮವಾರ|ಮಂಗಳವಾರ|ಬುಧವಾರ|ಗುರುವಾರ|ಶುಕ್ರವಾರ|ಶನಿವಾರ)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^ಭಾ/i,/^ಸೋ/i,/^ಮ/i,/^ಬು/i,/^ಗು/i,/^ಶು/i,/^ಶ/i],any:[/^ಭಾ/i,/^ಸೋ/i,/^ಮ/i,/^ಬು/i,/^ಗು/i,/^ಶು/i,/^ಶ/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{narrow:/^(ಪೂ|ಅ|ಮಧ್ಯರಾತ್ರಿ|ಮಧ್ಯಾನ್ಹ|ಬೆಳಗ್ಗೆ|ಸಂಜೆ|ರಾತ್ರಿ)/i,any:/^(ಪೂರ್ವಾಹ್ನ|ಅಪರಾಹ್ನ|ಮಧ್ಯರಾತ್ರಿ|ಮಧ್ಯಾನ್ಹ|ಬೆಳಗ್ಗೆ|ಸಂಜೆ|ರಾತ್ರಿ)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^ಪೂ/i,pm:/^ಅ/i,midnight:/ಮಧ್ಯರಾತ್ರಿ/i,noon:/ಮಧ್ಯಾನ್ಹ/i,morning:/ಬೆಳಗ್ಗೆ/i,afternoon:/ಮಧ್ಯಾನ್ಹ/i,evening:/ಸಂಜೆ/i,night:/ರಾತ್ರಿ/i}},defaultParseWidth:"any"})};t.default=n,a.exports=t.default}}]);