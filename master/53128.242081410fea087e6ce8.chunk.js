"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[53128,42490,72232,15995,68931,79829,22907,82563,5526,94891,73653,46879,94250,70053,42796,73710,61791,78688,23945,80289,43821,5054,95671,74735,57689,40800,49515,71655,57592],{42490:function(a,e,t){t(99785),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.width?String(e.width):a.defaultWidth,n=a.formats[t]||a.formats[a.defaultWidth];return n}},a.exports=e.default},72232:function(a,e,t){t(99785),t(5769),t(63238),t(14078),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e,t){var n;if("formatting"===(null!=t&&t.context?String(t.context):"standalone")&&a.formattingValues){var i=a.defaultFormattingWidth||a.defaultWidth,r=null!=t&&t.width?String(t.width):i;n=a.formattingValues[r]||a.formattingValues[i]}else{var u=a.defaultWidth,o=null!=t&&t.width?String(t.width):a.defaultWidth;n=a.values[o]||a.values[u]}return n[a.argumentCallback?a.argumentCallback(e):e]}},a.exports=e.default},15995:function(a,e,t){function n(a,e){for(var t in a)if(a.hasOwnProperty(t)&&e(a[t]))return t}function i(a,e){for(var t=0;t<a.length;t++)if(e(a[t]))return t}t(99785),t(52077),t(1203),t(72410),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.width,u=r&&a.matchPatterns[r]||a.matchPatterns[a.defaultMatchWidth],o=e.match(u);if(!o)return null;var d,l=o[0],h=r&&a.parsePatterns[r]||a.parsePatterns[a.defaultParseWidth],s=Array.isArray(h)?i(h,(function(a){return a.test(l)})):n(h,(function(a){return a.test(l)}));d=a.valueCallback?a.valueCallback(s):s,d=t.valueCallback?t.valueCallback(d):d;var f=e.slice(l.length);return{value:d,rest:f}}},a.exports=e.default},68931:function(a,e,t){t(99785),t(52077),t(1203),t(72410),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(a.matchPattern);if(!n)return null;var i=n[0],r=e.match(a.parsePattern);if(!r)return null;var u=a.valueCallback?a.valueCallback(r[0]):r[0];u=t.valueCallback?t.valueCallback(u):u;var o=e.slice(i.length);return{value:u,rest:o}}},a.exports=e.default},57689:function(a,e,t){t(99785),t(52077),t(911),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={lessThanXSeconds:{one:"sekunddan kam",other:"{{count}} sekunddan kam"},xSeconds:{one:"1 sekund",other:"{{count}} sekund"},halfAMinute:"yarim minut",lessThanXMinutes:{one:"bir minutdan kam",other:"{{count}} minutdan kam"},xMinutes:{one:"1 minut",other:"{{count}} minut"},aboutXHours:{one:"tahminan 1 soat",other:"tahminan {{count}} soat"},xHours:{one:"1 soat",other:"{{count}} soat"},xDays:{one:"1 kun",other:"{{count}} kun"},aboutXWeeks:{one:"tahminan 1 hafta",other:"tahminan {{count}} hafta"},xWeeks:{one:"1 hafta",other:"{{count}} hafta"},aboutXMonths:{one:"tahminan 1 oy",other:"tahminan {{count}} oy"},xMonths:{one:"1 oy",other:"{{count}} oy"},aboutXYears:{one:"tahminan 1 yil",other:"tahminan {{count}} yil"},xYears:{one:"1 yil",other:"{{count}} yil"},overXYears:{one:"1 yildan ko'p",other:"{{count}} yildan ko'p"},almostXYears:{one:"deyarli 1 yil",other:"deyarli {{count}} yil"}};e.default=function(a,e,t){var i,r=n[a];return i="string"==typeof r?r:1===e?r.one:r.other.replace("{{count}}",String(e)),null!=t&&t.addSuffix?t.comparison&&t.comparison>0?i+" dan keyin":i+" oldin":i},a.exports=e.default},40800:function(a,e,t){t(99785),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,i=(n=t(42490))&&n.__esModule?n:{default:n},r={date:(0,i.default)({formats:{full:"EEEE, do MMMM, y",long:"do MMMM, y",medium:"d MMM, y",short:"dd/MM/yyyy"},defaultWidth:"full"}),time:(0,i.default)({formats:{full:"h:mm:ss zzzz",long:"h:mm:ss z",medium:"h:mm:ss",short:"h:mm"},defaultWidth:"full"}),dateTime:(0,i.default)({formats:{any:"{{date}}, {{time}}"},defaultWidth:"any"})};e.default=r,a.exports=e.default},49515:function(a,e,t){t(99785),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={lastWeek:"'oldingi' eeee p 'da'",yesterday:"'kecha' p 'da'",today:"'bugun' p 'da'",tomorrow:"'ertaga' p 'da'",nextWeek:"eeee p 'da'",other:"P"};e.default=function(a,e,t,i){return n[a]},a.exports=e.default},71655:function(a,e,t){t(99785),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,i=(n=t(72232))&&n.__esModule?n:{default:n},r={ordinalNumber:function(a,e){return String(a)},era:(0,i.default)({values:{narrow:["M.A","M."],abbreviated:["M.A","M."],wide:["Miloddan Avvalgi","Milodiy"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["CH.1","CH.2","CH.3","CH.4"],wide:["1-chi chorak","2-chi chorak","3-chi chorak","4-chi chorak"]},defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:(0,i.default)({values:{narrow:["Y","F","M","A","M","I","I","A","S","O","N","D"],abbreviated:["Yan","Fev","Mar","Apr","May","Iyun","Iyul","Avg","Sen","Okt","Noy","Dek"],wide:["Yanvar","Fevral","Mart","Aprel","May","Iyun","Iyul","Avgust","Sentabr","Oktabr","Noyabr","Dekabr"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["Y","D","S","CH","P","J","SH"],short:["Ya","Du","Se","Cho","Pa","Ju","Sha"],abbreviated:["Yak","Dush","Sesh","Chor","Pay","Jum","Shan"],wide:["Yakshanba","Dushanba","Seshanba","Chorshanba","Payshanba","Juma","Shanba"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"a",pm:"p",midnight:"y.t",noon:"p.",morning:"ertalab",afternoon:"tushdan keyin",evening:"kechqurun",night:"tun"},abbreviated:{am:"AM",pm:"PM",midnight:"yarim tun",noon:"peshin",morning:"ertalab",afternoon:"tushdan keyin",evening:"kechqurun",night:"tun"},wide:{am:"a.m.",pm:"p.m.",midnight:"yarim tun",noon:"peshin",morning:"ertalab",afternoon:"tushdan keyin",evening:"kechqurun",night:"tun"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"y.t",noon:"p.",morning:"ertalab",afternoon:"tushdan keyin",evening:"kechqurun",night:"tun"},abbreviated:{am:"AM",pm:"PM",midnight:"yarim tun",noon:"peshin",morning:"ertalab",afternoon:"tushdan keyin",evening:"kechqurun",night:"tun"},wide:{am:"a.m.",pm:"p.m.",midnight:"yarim tun",noon:"peshin",morning:"ertalab",afternoon:"tushdan keyin",evening:"kechqurun",night:"tun"}},defaultFormattingWidth:"wide"})};e.default=r,a.exports=e.default},57592:function(a,e,t){t(99785),t(32081),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(t(15995));function i(a){return a&&a.__esModule?a:{default:a}}var r={ordinalNumber:(0,i(t(68931)).default)({matchPattern:/^(\d+)(chi)?/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}}),era:(0,n.default)({matchPatterns:{narrow:/^(m\.a|m\.)/i,abbreviated:/^(m\.a\.?\s?m\.?)/i,wide:/^(miloddan avval|miloddan keyin)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](chi)? chorak/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,n.default)({matchPatterns:{narrow:/^[yfmasond]/i,abbreviated:/^(yan|fev|mar|apr|may|iyun|iyul|avg|sen|okt|noy|dek)/i,wide:/^(yanvar|fevral|mart|aprel|may|iyun|iyul|avgust|sentabr|oktabr|noyabr|dekabr)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^y/i,/^f/i,/^m/i,/^a/i,/^m/i,/^i/i,/^i/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ya/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^iyun/i,/^iyul/i,/^av/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:{narrow:/^[ydschj]/i,short:/^(ya|du|se|cho|pa|ju|sha)/i,abbreviated:/^(yak|dush|sesh|chor|pay|jum|shan)/i,wide:/^(yakshanba|dushanba|seshanba|chorshanba|payshanba|juma|shanba)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^y/i,/^d/i,/^s/i,/^ch/i,/^p/i,/^j/i,/^sh/i],any:[/^ya/i,/^d/i,/^se/i,/^ch/i,/^p/i,/^j/i,/^sh/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:{narrow:/^(a|p|y\.t|p| (ertalab|tushdan keyin|kechqurun|tun))/i,any:/^([ap]\.?\s?m\.?|yarim tun|peshin| (ertalab|tushdan keyin|kechqurun|tun))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^y\.t/i,noon:/^pe/i,morning:/ertalab/i,afternoon:/tushdan keyin/i,evening:/kechqurun/i,night:/tun/i}},defaultParseWidth:"any"})};e.default=r,a.exports=e.default},53128:function(a,e,t){t(99785),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=d(t(57689)),i=d(t(40800)),r=d(t(49515)),u=d(t(71655)),o=d(t(57592));function d(a){return a&&a.__esModule?a:{default:a}}var l={code:"uz",formatDistance:n.default,formatLong:i.default,formatRelative:r.default,localize:u.default,match:o.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};e.default=l,a.exports=e.default}}]);