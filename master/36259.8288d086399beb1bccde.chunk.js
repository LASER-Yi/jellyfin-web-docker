"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[36259,72232,22907,94891,94250,73710,23945,95671],{72232:function(e,n,t){t(99785),t(5769),t(63238),t(14078),Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return function(n,t){var a;if("formatting"===(null!=t&&t.context?String(t.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,r=null!=t&&t.width?String(t.width):i;a=e.formattingValues[r]||e.formattingValues[i]}else{var d=e.defaultWidth,u=null!=t&&t.width?String(t.width):e.defaultWidth;a=e.values[u]||e.values[d]}return a[e.argumentCallback?e.argumentCallback(n):n]}},e.exports=n.default},36259:function(e,n,t){t(99785),t(95163),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a,i=(a=t(72232))&&a.__esModule?a:{default:a},r={ordinalNumber:function(e,n){var t=Number(e);switch(null==n?void 0:n.unit){case"date":return t+"日";case"hour":return t+"時";case"minute":return t+"分";case"second":return t+"秒";default:return"第 "+t}},era:(0,i.default)({values:{narrow:["前","公元"],abbreviated:["前","公元"],wide:["公元前","公元"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["第一季","第二季","第三季","第四季"],wide:["第一季度","第二季度","第三季度","第四季度"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,i.default)({values:{narrow:["一","二","三","四","五","六","七","八","九","十","十一","十二"],abbreviated:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],wide:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["日","一","二","三","四","五","六"],short:["日","一","二","三","四","五","六"],abbreviated:["週日","週一","週二","週三","週四","週五","週六"],wide:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"上",pm:"下",midnight:"午夜",noon:"晌",morning:"早",afternoon:"午",evening:"晚",night:"夜"},abbreviated:{am:"上午",pm:"下午",midnight:"午夜",noon:"中午",morning:"上午",afternoon:"下午",evening:"晚上",night:"夜晚"},wide:{am:"上午",pm:"下午",midnight:"午夜",noon:"中午",morning:"上午",afternoon:"下午",evening:"晚上",night:"夜晚"}},defaultWidth:"wide",formattingValues:{narrow:{am:"上",pm:"下",midnight:"午夜",noon:"晌",morning:"早",afternoon:"午",evening:"晚",night:"夜"},abbreviated:{am:"上午",pm:"下午",midnight:"午夜",noon:"中午",morning:"上午",afternoon:"下午",evening:"晚上",night:"夜晚"},wide:{am:"上午",pm:"下午",midnight:"午夜",noon:"中午",morning:"上午",afternoon:"下午",evening:"晚上",night:"夜晚"}},defaultFormattingWidth:"wide"})};n.default=r,e.exports=n.default}}]);