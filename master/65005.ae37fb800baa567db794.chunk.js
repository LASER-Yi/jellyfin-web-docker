(self.webpackChunk=self.webpackChunk||[]).push([[65005,37658,94160,7184,83518,95105,19863,27046,17486,42244,4665,10455,40946,98216,54552,32896,39867,75101,71808,62248,97482,49427,21933,9387,37522,332,44314,31768,15141],{37658:function(e,t,a){"use strict";a(36947),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}},e.exports=t.default},94160:function(e,t,a){"use strict";a(44962),a(36947),a(78557),a(82367),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var n;if("formatting"===(null!=a&&a.context?String(a.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,u=null!=a&&a.width?String(a.width):i;n=e.formattingValues[u]||e.formattingValues[i]}else{var r=e.defaultWidth,o=null!=a&&a.width?String(a.width):e.defaultWidth;n=e.values[o]||e.values[r]}return n[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},7184:function(e,t,a){"use strict";a(89336),a(36947),a(95021),a(53819),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a.width,i=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],u=t.match(i);if(!u)return null;var r,o=u[0],l=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(l)?function(e,t){for(var a=0;a<e.length;a++)if(e[a].test(o))return a}(l):function(e,t){for(var a in e)if(e.hasOwnProperty(a)&&e[a].test(o))return a}(l);return r=e.valueCallback?e.valueCallback(s):s,{value:r=a.valueCallback?a.valueCallback(r):r,rest:t.slice(o.length)}}},e.exports=t.default},83518:function(e,t,a){"use strict";a(89336),a(36947),a(95021),a(53819),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(e.matchPattern);if(!n)return null;var i=n[0],u=t.match(e.parsePattern);if(!u)return null;var r=e.valueCallback?e.valueCallback(u[0]):u[0];return{value:r=a.valueCallback?a.valueCallback(r):r,rest:t.slice(i.length)}}},e.exports=t.default},10455:function(e,t,a){"use strict";a(36947),a(95021),a(93062),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={lessThanXSeconds:{standalone:{one:"vähem kui üks sekund",other:"vähem kui {{count}} sekundit"},withPreposition:{one:"vähem kui ühe sekundi",other:"vähem kui {{count}} sekundi"}},xSeconds:{standalone:{one:"üks sekund",other:"{{count}} sekundit"},withPreposition:{one:"ühe sekundi",other:"{{count}} sekundi"}},halfAMinute:{standalone:"pool minutit",withPreposition:"poole minuti"},lessThanXMinutes:{standalone:{one:"vähem kui üks minut",other:"vähem kui {{count}} minutit"},withPreposition:{one:"vähem kui ühe minuti",other:"vähem kui {{count}} minuti"}},xMinutes:{standalone:{one:"üks minut",other:"{{count}} minutit"},withPreposition:{one:"ühe minuti",other:"{{count}} minuti"}},aboutXHours:{standalone:{one:"umbes üks tund",other:"umbes {{count}} tundi"},withPreposition:{one:"umbes ühe tunni",other:"umbes {{count}} tunni"}},xHours:{standalone:{one:"üks tund",other:"{{count}} tundi"},withPreposition:{one:"ühe tunni",other:"{{count}} tunni"}},xDays:{standalone:{one:"üks päev",other:"{{count}} päeva"},withPreposition:{one:"ühe päeva",other:"{{count}} päeva"}},aboutXWeeks:{standalone:{one:"umbes üks nädal",other:"umbes {{count}} nädalat"},withPreposition:{one:"umbes ühe nädala",other:"umbes {{count}} nädala"}},xWeeks:{standalone:{one:"üks nädal",other:"{{count}} nädalat"},withPreposition:{one:"ühe nädala",other:"{{count}} nädala"}},aboutXMonths:{standalone:{one:"umbes üks kuu",other:"umbes {{count}} kuud"},withPreposition:{one:"umbes ühe kuu",other:"umbes {{count}} kuu"}},xMonths:{standalone:{one:"üks kuu",other:"{{count}} kuud"},withPreposition:{one:"ühe kuu",other:"{{count}} kuu"}},aboutXYears:{standalone:{one:"umbes üks aasta",other:"umbes {{count}} aastat"},withPreposition:{one:"umbes ühe aasta",other:"umbes {{count}} aasta"}},xYears:{standalone:{one:"üks aasta",other:"{{count}} aastat"},withPreposition:{one:"ühe aasta",other:"{{count}} aasta"}},overXYears:{standalone:{one:"rohkem kui üks aasta",other:"rohkem kui {{count}} aastat"},withPreposition:{one:"rohkem kui ühe aasta",other:"rohkem kui {{count}} aasta"}},almostXYears:{standalone:{one:"peaaegu üks aasta",other:"peaaegu {{count}} aastat"},withPreposition:{one:"peaaegu ühe aasta",other:"peaaegu {{count}} aasta"}}};t.default=function(e,t,a){var i,u=null!=a&&a.addSuffix?n[e].withPreposition:n[e].standalone;return i="string"==typeof u?u:1===t?u.one:u.other.replace("{{count}}",String(t)),null!=a&&a.addSuffix?a.comparison&&a.comparison>0?i+" pärast":i+" eest":i},e.exports=t.default},40946:function(e,t,a){"use strict";a(36947);var n=a(96784).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(37658)),u={date:(0,i.default)({formats:{full:"EEEE, d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},defaultWidth:"full"}),time:(0,i.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,i.default)({formats:{full:"{{date}} 'kell' {{time}}",long:"{{date}} 'kell' {{time}}",medium:"{{date}}. {{time}}",short:"{{date}}. {{time}}"},defaultWidth:"full"})};t.default=u,e.exports=t.default},98216:function(e,t,a){"use strict";a(36947),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={lastWeek:"'eelmine' eeee 'kell' p",yesterday:"'eile kell' p",today:"'täna kell' p",tomorrow:"'homme kell' p",nextWeek:"'järgmine' eeee 'kell' p",other:"P"};t.default=function(e,t,a,i){return n[e]},e.exports=t.default},54552:function(e,t,a){"use strict";a(94),a(36947);var n=a(96784).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(94160)),u={narrow:["J","V","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jaan","veebr","märts","apr","mai","juuni","juuli","aug","sept","okt","nov","dets"],wide:["jaanuar","veebruar","märts","aprill","mai","juuni","juuli","august","september","oktoober","november","detsember"]},r={narrow:["P","E","T","K","N","R","L"],short:["P","E","T","K","N","R","L"],abbreviated:["pühap.","esmasp.","teisip.","kolmap.","neljap.","reede.","laup."],wide:["pühapäev","esmaspäev","teisipäev","kolmapäev","neljapäev","reede","laupäev"]},o={ordinalNumber:function(e,t){return Number(e)+"."},era:(0,i.default)({values:{narrow:["e.m.a","m.a.j"],abbreviated:["e.m.a","m.a.j"],wide:["enne meie ajaarvamist","meie ajaarvamise järgi"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,i.default)({values:u,defaultWidth:"wide",formattingValues:u,defaultFormattingWidth:"wide"}),day:(0,i.default)({values:r,defaultWidth:"wide",formattingValues:r,defaultFormattingWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"AM",pm:"PM",midnight:"kesköö",noon:"keskpäev",morning:"hommik",afternoon:"pärastlõuna",evening:"õhtu",night:"öö"},abbreviated:{am:"AM",pm:"PM",midnight:"kesköö",noon:"keskpäev",morning:"hommik",afternoon:"pärastlõuna",evening:"õhtu",night:"öö"},wide:{am:"AM",pm:"PM",midnight:"kesköö",noon:"keskpäev",morning:"hommik",afternoon:"pärastlõuna",evening:"õhtu",night:"öö"}},defaultWidth:"wide",formattingValues:{narrow:{am:"AM",pm:"PM",midnight:"keskööl",noon:"keskpäeval",morning:"hommikul",afternoon:"pärastlõunal",evening:"õhtul",night:"öösel"},abbreviated:{am:"AM",pm:"PM",midnight:"keskööl",noon:"keskpäeval",morning:"hommikul",afternoon:"pärastlõunal",evening:"õhtul",night:"öösel"},wide:{am:"AM",pm:"PM",midnight:"keskööl",noon:"keskpäeval",morning:"hommikul",afternoon:"pärastlõunal",evening:"õhtul",night:"öösel"}},defaultFormattingWidth:"wide"})};t.default=o,e.exports=t.default},32896:function(e,t,a){"use strict";a(36947),a(96054);var n=a(96784).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(7184)),u={ordinalNumber:(0,n(a(83518)).default)({matchPattern:/^\d+\./i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,i.default)({matchPatterns:{narrow:/^(e\.m\.a|m\.a\.j|eKr|pKr)/i,abbreviated:/^(e\.m\.a|m\.a\.j|eKr|pKr)/i,wide:/^(enne meie ajaarvamist|meie ajaarvamise järgi|enne Kristust|pärast Kristust)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^e/i,/^(m|p)/i]},defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^K[1234]/i,wide:/^[1234](\.)? kvartal/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,i.default)({matchPatterns:{narrow:/^[jvmasond]/i,abbreviated:/^(jaan|veebr|märts|apr|mai|juuni|juuli|aug|sept|okt|nov|dets)/i,wide:/^(jaanuar|veebruar|märts|aprill|mai|juuni|juuli|august|september|oktoober|november|detsember)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^v/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^v/i,/^mär/i,/^ap/i,/^mai/i,/^juun/i,/^juul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:{narrow:/^[petknrl]/i,short:/^[petknrl]/i,abbreviated:/^(püh?|esm?|tei?|kolm?|nel?|ree?|laup?)\.?/i,wide:/^(pühapäev|esmaspäev|teisipäev|kolmapäev|neljapäev|reede|laupäev)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^p/i,/^e/i,/^t/i,/^k/i,/^n/i,/^r/i,/^l/i]},defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:{any:/^(am|pm|keskööl?|keskpäev(al)?|hommik(ul)?|pärastlõunal?|õhtul?|öö(sel)?)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^keskö/i,noon:/^keskp/i,morning:/hommik/i,afternoon:/pärastlõuna/i,evening:/õhtu/i,night:/öö/i}},defaultParseWidth:"any"})};t.default=u,e.exports=t.default},65005:function(e,t,a){"use strict";a(36947);var n=a(96784).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(10455)),u=n(a(40946)),r=n(a(98216)),o=n(a(54552)),l=n(a(32896)),s={code:"et",formatDistance:i.default,formatLong:u.default,formatRelative:r.default,localize:o.default,match:l.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=s,e.exports=t.default},96784:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);