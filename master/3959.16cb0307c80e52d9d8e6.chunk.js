"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3959,72232,22907,94891,94250,73710,23945,95671],{72232:function(e,n,t){t(99785),t(5769),t(63238),t(14078),Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return function(n,t){var a;if("formatting"===(null!=t&&t.context?String(t.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,r=null!=t&&t.width?String(t.width):i;a=e.formattingValues[r]||e.formattingValues[i]}else{var d=e.defaultWidth,o=null!=t&&t.width?String(t.width):e.defaultWidth;a=e.values[o]||e.values[d]}return a[e.argumentCallback?e.argumentCallback(n):n]}},e.exports=n.default},3959:function(e,n,t){t(99785),t(95163),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a,i=(a=t(72232))&&a.__esModule?a:{default:a},r={ordinalNumber:function(e,n){var t=Number(e),a=t%100;return a<10&&a%10==1?t+"֊ին":t+"֊րդ"},era:(0,i.default)({values:{narrow:["Ք","Մ"],abbreviated:["ՔԱ","ՄԹ"],wide:["Քրիստոսից առաջ","Մեր թվարկության"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["Ք1","Ք2","Ք3","Ք4"],wide:["1֊ին քառորդ","2֊րդ քառորդ","3֊րդ քառորդ","4֊րդ քառորդ"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,i.default)({values:{narrow:["Հ","Փ","Մ","Ա","Մ","Հ","Հ","Օ","Ս","Հ","Ն","Դ"],abbreviated:["հուն","փետ","մար","ապր","մայ","հուն","հուլ","օգս","սեպ","հոկ","նոյ","դեկ"],wide:["հունվար","փետրվար","մարտ","ապրիլ","մայիս","հունիս","հուլիս","օգոստոս","սեպտեմբեր","հոկտեմբեր","նոյեմբեր","դեկտեմբեր"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["Կ","Ե","Ե","Չ","Հ","Ո","Շ"],short:["կր","եր","եք","չք","հգ","ուր","շբ"],abbreviated:["կիր","երկ","երք","չոր","հնգ","ուրբ","շաբ"],wide:["կիրակի","երկուշաբթի","երեքշաբթի","չորեքշաբթի","հինգշաբթի","ուրբաթ","շաբաթ"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"a",pm:"p",midnight:"կեսգշ",noon:"կեսօր",morning:"առավոտ",afternoon:"ցերեկ",evening:"երեկո",night:"գիշեր"},abbreviated:{am:"AM",pm:"PM",midnight:"կեսգիշեր",noon:"կեսօր",morning:"առավոտ",afternoon:"ցերեկ",evening:"երեկո",night:"գիշեր"},wide:{am:"a.m.",pm:"p.m.",midnight:"կեսգիշեր",noon:"կեսօր",morning:"առավոտ",afternoon:"ցերեկ",evening:"երեկո",night:"գիշեր"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"կեսգշ",noon:"կեսօր",morning:"առավոտը",afternoon:"ցերեկը",evening:"երեկոյան",night:"գիշերը"},abbreviated:{am:"AM",pm:"PM",midnight:"կեսգիշերին",noon:"կեսօրին",morning:"առավոտը",afternoon:"ցերեկը",evening:"երեկոյան",night:"գիշերը"},wide:{am:"a.m.",pm:"p.m.",midnight:"կեսգիշերին",noon:"կեսօրին",morning:"առավոտը",afternoon:"ցերեկը",evening:"երեկոյան",night:"գիշերը"}},defaultFormattingWidth:"wide"})};n.default=r,e.exports=n.default}}]);