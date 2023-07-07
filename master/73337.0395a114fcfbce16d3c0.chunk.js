"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[73337,42490,72232,15995,68931,79829,22907,82563,5526,94891,73653,86986,70405,91856,87144,81857,46879,94250,70053,42796,73710,61791,78688,23945,80289,43821,5054,95671,74735],{42490:function(e,t,a){a(99785),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}},e.exports=t.default},72232:function(e,t,a){a(99785),a(5769),a(63238),a(14078),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var n;if("formatting"===(null!=a&&a.context?String(a.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,i=null!=a&&a.width?String(a.width):r;n=e.formattingValues[i]||e.formattingValues[r]}else{var u=e.defaultWidth,d=null!=a&&a.width?String(a.width):e.defaultWidth;n=e.values[d]||e.values[u]}return n[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},15995:function(e,t,a){a(99785),a(52077),a(1203),a(72410),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a.width,r=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],i=t.match(r);if(!i)return null;var u,d=i[0],o=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(o)?function(e,t){for(var a=0;a<e.length;a++)if(e[a].test(d))return a}(o):function(e,t){for(var a in e)if(e.hasOwnProperty(a)&&e[a].test(d))return a}(o);return u=e.valueCallback?e.valueCallback(l):l,{value:u=a.valueCallback?a.valueCallback(u):u,rest:t.slice(d.length)}}},e.exports=t.default},68931:function(e,t,a){a(99785),a(52077),a(1203),a(72410),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(e.matchPattern);if(!n)return null;var r=n[0],i=t.match(e.parsePattern);if(!i)return null;var u=e.valueCallback?e.valueCallback(i[0]):i[0];return{value:u=a.valueCallback?a.valueCallback(u):u,rest:t.slice(r.length)}}},e.exports=t.default},86986:function(e,t,a){a(99785),a(52077),a(911),a(63238),a(40895),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={lessThanXSeconds:{one:"minna en 1 sekúnda",other:"minna en {{count}} sekúndur"},xSeconds:{one:"1 sekúnda",other:"{{count}} sekúndur"},halfAMinute:"hálf mínúta",lessThanXMinutes:{one:"minna en 1 mínúta",other:"minna en {{count}} mínútur"},xMinutes:{one:"1 mínúta",other:"{{count}} mínútur"},aboutXHours:{one:"u.þ.b. 1 klukkustund",other:"u.þ.b. {{count}} klukkustundir"},xHours:{one:"1 klukkustund",other:"{{count}} klukkustundir"},xDays:{one:"1 dagur",other:"{{count}} dagar"},aboutXWeeks:{one:"um viku",other:"um {{count}} vikur"},xWeeks:{one:"1 viku",other:"{{count}} vikur"},aboutXMonths:{one:"u.þ.b. 1 mánuður",other:"u.þ.b. {{count}} mánuðir"},xMonths:{one:"1 mánuður",other:"{{count}} mánuðir"},aboutXYears:{one:"u.þ.b. 1 ár",other:"u.þ.b. {{count}} ár"},xYears:{one:"1 ár",other:"{{count}} ár"},overXYears:{one:"meira en 1 ár",other:"meira en {{count}} ár"},almostXYears:{one:"næstum 1 ár",other:"næstum {{count}} ár"}};t.default=function(e,t,a){var r,i=n[e];return r="string"==typeof i?i:1===t?i.one:i.other.replace("{{count}}",t.toString()),null!=a&&a.addSuffix?a.comparison&&a.comparison>0?"í "+r:r+" síðan":r},e.exports=t.default},70405:function(e,t,a){a(99785);var n=a(73203).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(42490)),i={date:(0,r.default)({formats:{full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"d.MM.y"},defaultWidth:"full"}),time:(0,r.default)({formats:{full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,r.default)({formats:{full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};t.default=i,e.exports=t.default},91856:function(e,t,a){a(99785),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={lastWeek:"'síðasta' dddd 'kl.' p",yesterday:"'í gær kl.' p",today:"'í dag kl.' p",tomorrow:"'á morgun kl.' p",nextWeek:"dddd 'kl.' p",other:"P"};t.default=function(e,t,a,r){return n[e]},e.exports=t.default},87144:function(e,t,a){a(99785),a(95163);var n=a(73203).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(72232)),i={ordinalNumber:function(e,t){return Number(e)+"."},era:(0,r.default)({values:{narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["fyrir Krist","eftir Krist"]},defaultWidth:"wide"}),quarter:(0,r.default)({values:{narrow:["1","2","3","4"],abbreviated:["1F","2F","3F","4F"],wide:["1. fjórðungur","2. fjórðungur","3. fjórðungur","4. fjórðungur"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,r.default)({values:{narrow:["J","F","M","A","M","J","J","Á","S","Ó","N","D"],abbreviated:["jan.","feb.","mars","apríl","maí","júní","júlí","ágúst","sept.","okt.","nóv.","des."],wide:["janúar","febrúar","mars","apríl","maí","júní","júlí","ágúst","september","október","nóvember","desember"]},defaultWidth:"wide"}),day:(0,r.default)({values:{narrow:["S","M","Þ","M","F","F","L"],short:["Su","Má","Þr","Mi","Fi","Fö","La"],abbreviated:["sun.","mán.","þri.","mið.","fim.","fös.","lau."],wide:["sunnudagur","mánudagur","þriðjudagur","miðvikudagur","fimmtudagur","föstudagur","laugardagur"]},defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:{narrow:{am:"f",pm:"e",midnight:"miðnætti",noon:"hádegi",morning:"morgunn",afternoon:"síðdegi",evening:"kvöld",night:"nótt"},abbreviated:{am:"f.h.",pm:"e.h.",midnight:"miðnætti",noon:"hádegi",morning:"morgunn",afternoon:"síðdegi",evening:"kvöld",night:"nótt"},wide:{am:"fyrir hádegi",pm:"eftir hádegi",midnight:"miðnætti",noon:"hádegi",morning:"morgunn",afternoon:"síðdegi",evening:"kvöld",night:"nótt"}},defaultWidth:"wide",formattingValues:{narrow:{am:"f",pm:"e",midnight:"á miðnætti",noon:"á hádegi",morning:"að morgni",afternoon:"síðdegis",evening:"um kvöld",night:"um nótt"},abbreviated:{am:"f.h.",pm:"e.h.",midnight:"á miðnætti",noon:"á hádegi",morning:"að morgni",afternoon:"síðdegis",evening:"um kvöld",night:"um nótt"},wide:{am:"fyrir hádegi",pm:"eftir hádegi",midnight:"á miðnætti",noon:"á hádegi",morning:"að morgni",afternoon:"síðdegis",evening:"um kvöld",night:"um nótt"}},defaultFormattingWidth:"wide"})};t.default=i,e.exports=t.default},81857:function(e,t,a){a(99785),a(32081);var n=a(73203).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(15995)),i={ordinalNumber:(0,n(a(68931)).default)({matchPattern:/^(\d+)(\.)?/i,parsePattern:/\d+(\.)?/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^(f\.Kr\.|e\.Kr\.)/i,abbreviated:/^(f\.Kr\.|e\.Kr\.)/i,wide:/^(fyrir Krist|eftir Krist)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^(f\.Kr\.)/i,/^(e\.Kr\.)/i]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[1234]\.?/i,abbreviated:/^q[1234]\.?/i,wide:/^[1234]\.? fjórðungur/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1\.?/i,/2\.?/i,/3\.?/i,/4\.?/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,r.default)({matchPatterns:{narrow:/^[jfmásónd]/i,abbreviated:/^(jan\.|feb\.|mars\.|apríl\.|maí|júní|júlí|águst|sep\.|oct\.|nov\.|dec\.)/i,wide:/^(januar|febrúar|mars|apríl|maí|júní|júlí|águst|september|október|nóvember|desember)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^á/i,/^s/i,/^ó/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maí/i,/^jún/i,/^júl/i,/^áu/i,/^s/i,/^ó/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|má|þr|mi|fi|fö|la)/i,abbreviated:/^(sun|mán|þri|mið|fim|fös|lau)\.?/i,wide:/^(sunnudagur|mánudagur|þriðjudagur|miðvikudagur|fimmtudagur|föstudagur|laugardagur)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^þ/i,/^m/i,/^f/i,/^f/i,/^l/i],any:[/^su/i,/^má/i,/^þr/i,/^mi/i,/^fi/i,/^fö/i,/^la/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{narrow:/^(f|e|síðdegis|(á|að|um) (morgni|kvöld|nótt|miðnætti))/i,any:/^(fyrir hádegi|eftir hádegi|[ef]\.?h\.?|síðdegis|morgunn|(á|að|um) (morgni|kvöld|nótt|miðnætti))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^f/i,pm:/^e/i,midnight:/^mi/i,noon:/^há/i,morning:/morgunn/i,afternoon:/síðdegi/i,evening:/kvöld/i,night:/nótt/i}},defaultParseWidth:"any"})};t.default=i,e.exports=t.default},73337:function(e,t,a){a(99785);var n=a(73203).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(86986)),i=n(a(70405)),u=n(a(91856)),d=n(a(87144)),o=n(a(81857)),l={code:"is",formatDistance:r.default,formatLong:i.default,formatRelative:u.default,localize:d.default,match:o.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=l,e.exports=t.default}}]);