"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[22015,72232,22907,94891,94250,73710,23945,95671],{72232:function(a,n,e){e(99785),e(5769),e(63238),e(14078),Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(a){return function(n,e){var t;if("formatting"===(null!=e&&e.context?String(e.context):"standalone")&&a.formattingValues){var r=a.defaultFormattingWidth||a.defaultWidth,i=null!=e&&e.width?String(e.width):r;t=a.formattingValues[i]||a.formattingValues[r]}else{var d=a.defaultWidth,u=null!=e&&e.width?String(e.width):a.defaultWidth;t=a.values[u]||a.values[d]}return t[a.argumentCallback?a.argumentCallback(n):n]}},a.exports=n.default},22015:function(a,n,e){e(99785),e(95163),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t,r=(t=e(72232))&&t.__esModule?t:{default:t},i={1:"-inci",5:"-inci",8:"-inci",70:"-inci",80:"-inci",2:"-nci",7:"-nci",20:"-nci",50:"-nci",3:"-üncü",4:"-üncü",100:"-üncü",6:"-ncı",9:"-uncu",10:"-uncu",30:"-uncu",60:"-ıncı",90:"-ıncı"},d={ordinalNumber:function(a,n){var e=Number(a),t=function(a){if(0===a)return a+"-ıncı";var n=a%10,e=a%100-n,t=a>=100?100:null;return i[n]?i[n]:i[e]?i[e]:null!==t?i[t]:""}(e);return e+t},era:(0,r.default)({values:{narrow:["e.ə","b.e"],abbreviated:["e.ə","b.e"],wide:["eramızdan əvvəl","bizim era"]},defaultWidth:"wide"}),quarter:(0,r.default)({values:{narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["1ci kvartal","2ci kvartal","3cü kvartal","4cü kvartal"]},defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:(0,r.default)({values:{narrow:["Y","F","M","A","M","İ","İ","A","S","O","N","D"],abbreviated:["Yan","Fev","Mar","Apr","May","İyun","İyul","Avq","Sen","Okt","Noy","Dek"],wide:["Yanvar","Fevral","Mart","Aprel","May","İyun","İyul","Avqust","Sentyabr","Oktyabr","Noyabr","Dekabr"]},defaultWidth:"wide"}),day:(0,r.default)({values:{narrow:["B.","B.e","Ç.a","Ç.","C.a","C.","Ş."],short:["B.","B.e","Ç.a","Ç.","C.a","C.","Ş."],abbreviated:["Baz","Baz.e","Çər.a","Çər","Cüm.a","Cüm","Şə"],wide:["Bazar","Bazar ertəsi","Çərşənbə axşamı","Çərşənbə","Cümə axşamı","Cümə","Şənbə"]},defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:{narrow:{am:"am",pm:"pm",midnight:"gecəyarı",noon:"gün",morning:"səhər",afternoon:"gündüz",evening:"axşam",night:"gecə"},abbreviated:{am:"AM",pm:"PM",midnight:"gecəyarı",noon:"gün",morning:"səhər",afternoon:"gündüz",evening:"axşam",night:"gecə"},wide:{am:"a.m.",pm:"p.m.",midnight:"gecəyarı",noon:"gün",morning:"səhər",afternoon:"gündüz",evening:"axşam",night:"gecə"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"gecəyarı",noon:"gün",morning:"səhər",afternoon:"gündüz",evening:"axşam",night:"gecə"},abbreviated:{am:"AM",pm:"PM",midnight:"gecəyarı",noon:"gün",morning:"səhər",afternoon:"gündüz",evening:"axşam",night:"gecə"},wide:{am:"a.m.",pm:"p.m.",midnight:"gecəyarı",noon:"gün",morning:"səhər",afternoon:"gündüz",evening:"axşam",night:"gecə"}},defaultFormattingWidth:"wide"})};n.default=d,a.exports=n.default}}]);