(self.webpackChunk=self.webpackChunk||[]).push([[21789,37658,94160,7184,83518,95105,19863,27046,17486,42244,4665,39867,75101,71808,62248,97482,49427,74535,77826,78968,93384,57104,21933,9387,37522,332,44314,31768,15141],{37658:function(t,e,n){"use strict";n(36947),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}},t.exports=e.default},94160:function(t,e,n){"use strict";n(44962),n(36947),n(78557),n(82367),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e,n){var a;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,o=null!=n&&n.width?String(n.width):i;a=t.formattingValues[o]||t.formattingValues[i]}else{var r=t.defaultWidth,u=null!=n&&n.width?String(n.width):t.defaultWidth;a=t.values[u]||t.values[r]}return a[t.argumentCallback?t.argumentCallback(e):e]}},t.exports=e.default},7184:function(t,e,n){"use strict";n(89336),n(36947),n(95021),n(53819),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.width,i=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],o=e.match(i);if(!o)return null;var r,u=o[0],d=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],l=Array.isArray(d)?function(t,e){for(var n=0;n<t.length;n++)if(t[n].test(u))return n}(d):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n].test(u))return n}(d);return r=t.valueCallback?t.valueCallback(l):l,{value:r=n.valueCallback?n.valueCallback(r):r,rest:e.slice(u.length)}}},t.exports=e.default},83518:function(t,e,n){"use strict";n(89336),n(36947),n(95021),n(53819),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=e.match(t.matchPattern);if(!a)return null;var i=a[0],o=e.match(t.parsePattern);if(!o)return null;var r=t.valueCallback?t.valueCallback(o[0]):o[0];return{value:r=n.valueCallback?n.valueCallback(r):r,rest:e.slice(i.length)}}},t.exports=e.default},74535:function(t,e,n){"use strict";n(36947),n(95021),n(93062),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={lessThanXSeconds:{one:{standalone:"мање од 1 секунде",withPrepositionAgo:"мање од 1 секунде",withPrepositionIn:"мање од 1 секунду"},dual:"мање од {{count}} секунде",other:"мање од {{count}} секунди"},xSeconds:{one:{standalone:"1 секунда",withPrepositionAgo:"1 секунде",withPrepositionIn:"1 секунду"},dual:"{{count}} секунде",other:"{{count}} секунди"},halfAMinute:"пола минуте",lessThanXMinutes:{one:{standalone:"мање од 1 минуте",withPrepositionAgo:"мање од 1 минуте",withPrepositionIn:"мање од 1 минуту"},dual:"мање од {{count}} минуте",other:"мање од {{count}} минута"},xMinutes:{one:{standalone:"1 минута",withPrepositionAgo:"1 минуте",withPrepositionIn:"1 минуту"},dual:"{{count}} минуте",other:"{{count}} минута"},aboutXHours:{one:{standalone:"око 1 сат",withPrepositionAgo:"око 1 сат",withPrepositionIn:"око 1 сат"},dual:"око {{count}} сата",other:"око {{count}} сати"},xHours:{one:{standalone:"1 сат",withPrepositionAgo:"1 сат",withPrepositionIn:"1 сат"},dual:"{{count}} сата",other:"{{count}} сати"},xDays:{one:{standalone:"1 дан",withPrepositionAgo:"1 дан",withPrepositionIn:"1 дан"},dual:"{{count}} дана",other:"{{count}} дана"},aboutXWeeks:{one:{standalone:"око 1 недељу",withPrepositionAgo:"око 1 недељу",withPrepositionIn:"око 1 недељу"},dual:"око {{count}} недеље",other:"око {{count}} недеље"},xWeeks:{one:{standalone:"1 недељу",withPrepositionAgo:"1 недељу",withPrepositionIn:"1 недељу"},dual:"{{count}} недеље",other:"{{count}} недеље"},aboutXMonths:{one:{standalone:"око 1 месец",withPrepositionAgo:"око 1 месец",withPrepositionIn:"око 1 месец"},dual:"око {{count}} месеца",other:"око {{count}} месеци"},xMonths:{one:{standalone:"1 месец",withPrepositionAgo:"1 месец",withPrepositionIn:"1 месец"},dual:"{{count}} месеца",other:"{{count}} месеци"},aboutXYears:{one:{standalone:"око 1 годину",withPrepositionAgo:"око 1 годину",withPrepositionIn:"око 1 годину"},dual:"око {{count}} године",other:"око {{count}} година"},xYears:{one:{standalone:"1 година",withPrepositionAgo:"1 године",withPrepositionIn:"1 годину"},dual:"{{count}} године",other:"{{count}} година"},overXYears:{one:{standalone:"преко 1 годину",withPrepositionAgo:"преко 1 годину",withPrepositionIn:"преко 1 годину"},dual:"преко {{count}} године",other:"преко {{count}} година"},almostXYears:{one:{standalone:"готово 1 годину",withPrepositionAgo:"готово 1 годину",withPrepositionIn:"готово 1 годину"},dual:"готово {{count}} године",other:"готово {{count}} година"}};e.default=function(t,e,n){var i,o=a[t];return i="string"==typeof o?o:1===e?null!=n&&n.addSuffix?n.comparison&&n.comparison>0?o.one.withPrepositionIn:o.one.withPrepositionAgo:o.one.standalone:e%10>1&&e%10<5&&"1"!==String(e).substr(-2,1)?o.dual.replace("{{count}}",String(e)):o.other.replace("{{count}}",String(e)),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"за "+i:"пре "+i:i},t.exports=e.default},77826:function(t,e,n){"use strict";n(36947);var a=n(96784).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n(37658)),o={date:(0,i.default)({formats:{full:"EEEE, d. MMMM yyyy.",long:"d. MMMM yyyy.",medium:"d. MMM yy.",short:"dd. MM. yy."},defaultWidth:"full"}),time:(0,i.default)({formats:{full:"HH:mm:ss (zzzz)",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,i.default)({formats:{full:"{{date}} 'у' {{time}}",long:"{{date}} 'у' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};e.default=o,t.exports=e.default},78968:function(t,e,n){"use strict";n(36947),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={lastWeek:function(t){switch(t.getUTCDay()){case 0:return"'прошле недеље у' p";case 3:return"'прошле среде у' p";case 6:return"'прошле суботе у' p";default:return"'прошли' EEEE 'у' p"}},yesterday:"'јуче у' p",today:"'данас у' p",tomorrow:"'сутра у' p",nextWeek:function(t){switch(t.getUTCDay()){case 0:return"'следеће недеље у' p";case 3:return"'следећу среду у' p";case 6:return"'следећу суботу у' p";default:return"'следећи' EEEE 'у' p"}},other:"P"};e.default=function(t,e,n,i){var o=a[t];return"function"==typeof o?o(e):o},t.exports=e.default},93384:function(t,e,n){"use strict";n(94),n(36947);var a=n(96784).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n(94160)),o={ordinalNumber:function(t,e){return Number(t)+"."},era:(0,i.default)({values:{narrow:["пр.н.е.","АД"],abbreviated:["пр. Хр.","по. Хр."],wide:["Пре Христа","После Христа"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1.","2.","3.","4."],abbreviated:["1. кв.","2. кв.","3. кв.","4. кв."],wide:["1. квартал","2. квартал","3. квартал","4. квартал"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:(0,i.default)({values:{narrow:["1.","2.","3.","4.","5.","6.","7.","8.","9.","10.","11.","12."],abbreviated:["јан","феб","мар","апр","мај","јун","јул","авг","сеп","окт","нов","дец"],wide:["јануар","фебруар","март","април","мај","јун","јул","август","септембар","октобар","новембар","децембар"]},defaultWidth:"wide",formattingValues:{narrow:["1.","2.","3.","4.","5.","6.","7.","8.","9.","10.","11.","12."],abbreviated:["јан","феб","мар","апр","мај","јун","јул","авг","сеп","окт","нов","дец"],wide:["јануар","фебруар","март","април","мај","јун","јул","август","септембар","октобар","новембар","децембар"]},defaultFormattingWidth:"wide"}),day:(0,i.default)({values:{narrow:["Н","П","У","С","Ч","П","С"],short:["нед","пон","уто","сре","чет","пет","суб"],abbreviated:["нед","пон","уто","сре","чет","пет","суб"],wide:["недеља","понедељак","уторак","среда","четвртак","петак","субота"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"AM",pm:"PM",midnight:"поноћ",noon:"подне",morning:"ујутру",afternoon:"поподне",evening:"увече",night:"ноћу"},abbreviated:{am:"AM",pm:"PM",midnight:"поноћ",noon:"подне",morning:"ујутру",afternoon:"поподне",evening:"увече",night:"ноћу"},wide:{am:"AM",pm:"PM",midnight:"поноћ",noon:"подне",morning:"ујутру",afternoon:"после подне",evening:"увече",night:"ноћу"}},defaultWidth:"wide",formattingValues:{narrow:{am:"АМ",pm:"ПМ",midnight:"поноћ",noon:"подне",morning:"ујутру",afternoon:"поподне",evening:"увече",night:"ноћу"},abbreviated:{am:"АМ",pm:"ПМ",midnight:"поноћ",noon:"подне",morning:"ујутру",afternoon:"поподне",evening:"увече",night:"ноћу"},wide:{am:"AM",pm:"PM",midnight:"поноћ",noon:"подне",morning:"ујутру",afternoon:"после подне",evening:"увече",night:"ноћу"}},defaultFormattingWidth:"wide"})};e.default=o,t.exports=e.default},57104:function(t,e,n){"use strict";n(36947),n(96054);var a=n(96784).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n(7184)),o={ordinalNumber:(0,a(n(83518)).default)({matchPattern:/^(\d+)\./i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}}),era:(0,i.default)({matchPatterns:{narrow:/^(пр\.н\.е\.|АД)/i,abbreviated:/^(пр\.\s?Хр\.|по\.\s?Хр\.)/i,wide:/^(Пре Христа|пре нове ере|После Христа|нова ера)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^пр/i,/^(по|нова)/i]},defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234]\.\s?кв\.?/i,wide:/^[1234]\. квартал/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:(0,i.default)({matchPatterns:{narrow:/^(10|11|12|[123456789])\./i,abbreviated:/^(јан|феб|мар|апр|мај|јун|јул|авг|сеп|окт|нов|дец)/i,wide:/^((јануар|јануара)|(фебруар|фебруара)|(март|марта)|(април|априла)|(мја|маја)|(јун|јуна)|(јул|јула)|(август|августа)|(септембар|септембра)|(октобар|октобра)|(новембар|новембра)|(децембар|децембра))/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^1/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^7/i,/^8/i,/^9/i,/^10/i,/^11/i,/^12/i],any:[/^ја/i,/^ф/i,/^мар/i,/^ап/i,/^мај/i,/^јун/i,/^јул/i,/^авг/i,/^с/i,/^о/i,/^н/i,/^д/i]},defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:{narrow:/^[пусчн]/i,short:/^(нед|пон|уто|сре|чет|пет|суб)/i,abbreviated:/^(нед|пон|уто|сре|чет|пет|суб)/i,wide:/^(недеља|понедељак|уторак|среда|четвртак|петак|субота)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^п/i,/^у/i,/^с/i,/^ч/i,/^п/i,/^с/i,/^н/i],any:[/^нед/i,/^пон/i,/^уто/i,/^сре/i,/^чет/i,/^пет/i,/^суб/i]},defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:{any:/^(ам|пм|поноћ|(по)?подне|увече|ноћу|после подне|ујутру)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^поно/i,noon:/^под/i,morning:/ујутру/i,afternoon:/(после\s|по)+подне/i,evening:/(увече)/i,night:/(ноћу)/i}},defaultParseWidth:"any"})};e.default=o,t.exports=e.default},21789:function(t,e,n){"use strict";n(36947);var a=n(96784).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n(74535)),o=a(n(77826)),r=a(n(78968)),u=a(n(93384)),d=a(n(57104)),l={code:"sr",formatDistance:i.default,formatLong:o.default,formatRelative:r.default,localize:u.default,match:d.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};e.default=l,t.exports=e.default},96784:function(t){t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.__esModule=!0,t.exports.default=t.exports}}]);