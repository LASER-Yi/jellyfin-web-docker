(self.webpackChunk=self.webpackChunk||[]).push([[76530,15995,68931,53374,96595,66097,27984,54802,98703],{15995:function(e,a,t){"use strict";t(99785),t(52077),t(1203),t(72410),Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.width,r=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],n=a.match(r);if(!n)return null;var s,u=n[0],d=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(d)?function(e,a){for(var t=0;t<e.length;t++)if(e[t].test(u))return t}(d):function(e,a){for(var t in e)if(e.hasOwnProperty(t)&&e[t].test(u))return t}(d);return s=e.valueCallback?e.valueCallback(l):l,{value:s=t.valueCallback?t.valueCallback(s):s,rest:a.slice(u.length)}}},e.exports=a.default},68931:function(e,a,t){"use strict";t(99785),t(52077),t(1203),t(72410),Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=a.match(e.matchPattern);if(!i)return null;var r=i[0],n=a.match(e.parsePattern);if(!n)return null;var s=e.valueCallback?e.valueCallback(n[0]):n[0];return{value:s=t.valueCallback?t.valueCallback(s):s,rest:a.slice(r.length)}}},e.exports=a.default},76530:function(e,a,t){"use strict";t(99785),t(32081);var i=t(73203).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=i(t(15995)),n={ordinalNumber:(0,i(t(68931)).default)({matchPattern:/^(\d+)e?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^([fn]\.? ?K\.?)/,abbreviated:/^([fn]\. ?Kr\.?)/,wide:/^((foar|nei) Kristus)/},defaultMatchWidth:"wide",parsePatterns:{any:[/^f/,/^n/]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^K[1234]/i,wide:/^[1234]e fearnsjier/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,r.default)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan.|feb.|mrt.|apr.|mai.|jun.|jul.|aug.|sep.|okt.|nov.|des.)/i,wide:/^(jannewaris|febrewaris|maart|april|maaie|juny|july|augustus|septimber|oktober|novimber|desimber)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^jan/i,/^feb/i,/^m(r|a)/i,/^apr/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^sep/i,/^okt/i,/^nov/i,/^des/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^[smtwf]/i,short:/^(si|mo|ti|wo|to|fr|so)/i,abbreviated:/^(snein|moa|tii|woa|ton|fre|sneon)/i,wide:/^(snein|moandei|tiisdei|woansdei|tongersdei|freed|sneon)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^sn/i,/^mo/i,/^ti/i,/^wo/i,/^to/i,/^fr/i,/^sn/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{any:/^(am|pm|middernacht|middeis|moarns|middei|jûns|nachts)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^am/i,pm:/^pm/i,midnight:/^middernacht/i,noon:/^middei/i,morning:/moarns/i,afternoon:/^middeis/i,evening:/jûns/i,night:/nachts/i}},defaultParseWidth:"any"})};a.default=n,e.exports=a.default},73203:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);