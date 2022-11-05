"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[21722,42490,72232,15995,68931,79829,22907,82563,5526,94891,73653,46879,94250,70053,42796,73710,61791,12311,88208,19641,99355,21650,78688,23945,80289,43821,5054,95671,74735],{42490:function(e,t,a){a(99785),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth,n=e.formats[a]||e.formats[e.defaultWidth];return n}},e.exports=t.default},72232:function(e,t,a){a(99785),a(5769),a(63238),a(14078),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var n;if("formatting"===(null!=a&&a.context?String(a.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,i=null!=a&&a.width?String(a.width):r;n=e.formattingValues[i]||e.formattingValues[r]}else{var o=e.defaultWidth,u=null!=a&&a.width?String(a.width):e.defaultWidth;n=e.values[u]||e.values[o]}return n[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},15995:function(e,t,a){function n(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}function r(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}a(99785),a(52077),a(1203),a(72410),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=a.width,o=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],u=t.match(o);if(!u)return null;var d,l=u[0],s=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth],m=Array.isArray(s)?r(s,(function(e){return e.test(l)})):n(s,(function(e){return e.test(l)}));d=e.valueCallback?e.valueCallback(m):m,d=a.valueCallback?a.valueCallback(d):d;var f=t.slice(l.length);return{value:d,rest:f}}},e.exports=t.default},68931:function(e,t,a){a(99785),a(52077),a(1203),a(72410),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(e.matchPattern);if(!n)return null;var r=n[0],i=t.match(e.parsePattern);if(!i)return null;var o=e.valueCallback?e.valueCallback(i[0]):i[0];o=a.valueCallback?a.valueCallback(o):o;var u=t.slice(r.length);return{value:o,rest:u}}},e.exports=t.default},12311:function(e,t,a){a(99785),a(52077),a(911),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={lessThanXSeconds:{one:"më pak se një sekondë",other:"më pak se {{count}} sekonda"},xSeconds:{one:"1 sekondë",other:"{{count}} sekonda"},halfAMinute:"gjysëm minuti",lessThanXMinutes:{one:"më pak se një minute",other:"më pak se {{count}} minuta"},xMinutes:{one:"1 minutë",other:"{{count}} minuta"},aboutXHours:{one:"rreth 1 orë",other:"rreth {{count}} orë"},xHours:{one:"1 orë",other:"{{count}} orë"},xDays:{one:"1 ditë",other:"{{count}} ditë"},aboutXWeeks:{one:"rreth 1 javë",other:"rreth {{count}} javë"},xWeeks:{one:"1 javë",other:"{{count}} javë"},aboutXMonths:{one:"rreth 1 muaj",other:"rreth {{count}} muaj"},xMonths:{one:"1 muaj",other:"{{count}} muaj"},aboutXYears:{one:"rreth 1 vit",other:"rreth {{count}} vite"},xYears:{one:"1 vit",other:"{{count}} vite"},overXYears:{one:"mbi 1 vit",other:"mbi {{count}} vite"},almostXYears:{one:"pothuajse 1 vit",other:"pothuajse {{count}} vite"}};t.default=function(e,t,a){var r,i=n[e];return r="string"==typeof i?i:1===t?i.one:i.other.replace("{{count}}",String(t)),null!=a&&a.addSuffix?a.comparison&&a.comparison>0?"në "+r:r+" më parë":r},e.exports=t.default},88208:function(e,t,a){a(99785),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=(n=a(42490))&&n.__esModule?n:{default:n},i={date:(0,r.default)({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:(0,r.default)({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:(0,r.default)({formats:{full:"{{date}} 'në' {{time}}",long:"{{date}} 'në' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};t.default=i,e.exports=t.default},19641:function(e,t,a){a(99785),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={lastWeek:"'të' eeee 'e shkuar në' p",yesterday:"'dje në' p",today:"'sot në' p",tomorrow:"'nesër në' p",nextWeek:"eeee 'at' p",other:"P"};t.default=function(e,t,a,r){return n[e]},e.exports=t.default},99355:function(e,t,a){a(99785),a(95163),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=(n=a(72232))&&n.__esModule?n:{default:n},i={ordinalNumber:function(e,t){var a=Number(e);return"hour"===(null==t?void 0:t.unit)?String(a):1===a?a+"-rë":4===a?a+"t":a+"-të"},era:(0,r.default)({values:{narrow:["P","M"],abbreviated:["PK","MK"],wide:["Para Krishtit","Mbas Krishtit"]},defaultWidth:"wide"}),quarter:(0,r.default)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["4-mujori I","4-mujori II","4-mujori III","4-mujori IV"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,r.default)({values:{narrow:["J","S","M","P","M","Q","K","G","S","T","N","D"],abbreviated:["Jan","Shk","Mar","Pri","Maj","Qer","Kor","Gus","Sht","Tet","Nën","Dhj"],wide:["Janar","Shkurt","Mars","Prill","Maj","Qershor","Korrik","Gusht","Shtator","Tetor","Nëntor","Dhjetor"]},defaultWidth:"wide"}),day:(0,r.default)({values:{narrow:["D","H","M","M","E","P","S"],short:["Di","Hë","Ma","Më","En","Pr","Sh"],abbreviated:["Die","Hën","Mar","Mër","Enj","Pre","Sht"],wide:["Dielë","Hënë","Martë","Mërkurë","Enjte","Premte","Shtunë"]},defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:{narrow:{am:"p",pm:"m",midnight:"m",noon:"d",morning:"mëngjes",afternoon:"dite",evening:"mbrëmje",night:"natë"},abbreviated:{am:"PD",pm:"MD",midnight:"mesnëtë",noon:"drek",morning:"mëngjes",afternoon:"mbasdite",evening:"mbrëmje",night:"natë"},wide:{am:"p.d.",pm:"m.d.",midnight:"mesnëtë",noon:"drek",morning:"mëngjes",afternoon:"mbasdite",evening:"mbrëmje",night:"natë"}},defaultWidth:"wide",formattingValues:{narrow:{am:"p",pm:"m",midnight:"m",noon:"d",morning:"në mëngjes",afternoon:"në mbasdite",evening:"në mbrëmje",night:"në mesnatë"},abbreviated:{am:"PD",pm:"MD",midnight:"mesnatë",noon:"drek",morning:"në mëngjes",afternoon:"në mbasdite",evening:"në mbrëmje",night:"në mesnatë"},wide:{am:"p.d.",pm:"m.d.",midnight:"mesnatë",noon:"drek",morning:"në mëngjes",afternoon:"në mbasdite",evening:"në mbrëmje",night:"në mesnatë"}},defaultFormattingWidth:"wide"})};t.default=i,e.exports=t.default},21650:function(e,t,a){a(99785),a(32081),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(15995));function r(e){return e&&e.__esModule?e:{default:e}}var i={ordinalNumber:(0,r(a(68931)).default)({matchPattern:/^(\d+)(-rë|-të|t|)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,n.default)({matchPatterns:{narrow:/^(p|m)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(para krishtit|mbas krishtit)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(p|m)/i]},defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]-mujori (i{1,3}|iv)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,n.default)({matchPatterns:{narrow:/^[jsmpqkftnd]/i,abbreviated:/^(jan|shk|mar|pri|maj|qer|kor|gus|sht|tet|nën|dhj)/i,wide:/^(janar|shkurt|mars|prill|maj|qershor|korrik|gusht|shtator|tetor|nëntor|dhjetor)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^s/i,/^m/i,/^p/i,/^m/i,/^q/i,/^k/i,/^g/i,/^s/i,/^t/i,/^n/i,/^d/i],any:[/^ja/i,/^shk/i,/^mar/i,/^pri/i,/^maj/i,/^qer/i,/^kor/i,/^gu/i,/^sht/i,/^tet/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:{narrow:/^[dhmeps]/i,short:/^(di|hë|ma|më|en|pr|sh)/i,abbreviated:/^(die|hën|mar|mër|enj|pre|sht)/i,wide:/^(dielë|hënë|martë|mërkurë|enjte|premte|shtunë)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^d/i,/^h/i,/^m/i,/^m/i,/^e/i,/^p/i,/^s/i],any:[/^d/i,/^h/i,/^ma/i,/^më/i,/^e/i,/^p/i,/^s/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:{narrow:/^(p|m|me|në (mëngjes|mbasdite|mbrëmje|mesnatë))/i,any:/^([pm]\.?\s?d\.?|drek|në (mëngjes|mbasdite|mbrëmje|mesnatë))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^p/i,pm:/^m/i,midnight:/^me/i,noon:/^dr/i,morning:/mëngjes/i,afternoon:/mbasdite/i,evening:/mbrëmje/i,night:/natë/i}},defaultParseWidth:"any"})};t.default=i,e.exports=t.default},21722:function(e,t,a){a(99785),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(a(12311)),r=d(a(88208)),i=d(a(19641)),o=d(a(99355)),u=d(a(21650));function d(e){return e&&e.__esModule?e:{default:e}}var l={code:"sq",formatDistance:n.default,formatLong:r.default,formatRelative:i.default,localize:o.default,match:u.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};t.default=l,e.exports=t.default}}]);