/*! For license information please see music-musicgenres.715d71936cfcbd8a61a3.chunk.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[55523,26882,43416],{43416:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return s}}),r(13227),r(81414),r(37666),r(14011),r(11431);var n=r(60934),i=r(61570),u=r(81038),o=r(84597);function s(t,e,s){var a=this;function c(){var t=l(),r=h[t];return r||((r=h[t]={query:{SortBy:"SortName",SortOrder:"Ascending",Recursive:!0,Fields:"PrimaryImageAspectRatio,ItemCounts",StartIndex:0},view:n.getSavedView(t)||"Poster"}).query.ParentId=e.topParentId,n.loadQuerySettings(t,r.query)),r}function f(){return c().query}function l(){return"".concat(e.topParentId,"-genres")}var d,h={};this.getViewStyles=function(){return"Poster,PosterCard,Thumb,ThumbCard".split(",")},this.getCurrentViewStyle=function(){return c().view},this.setCurrentViewStyle=function(t){c().view=t,n.saveViewSetting(l(),t),function(){this.preRender(),this.renderTab()}()},this.enableViewSelection=!0,this.preRender=function(){d=function(){o.ZP.show();var t=f();return ApiClient.getGenres(ApiClient.getCurrentUserId(),t)}()},this.renderTab=function(){!function(t,e){var s=f();e.then((function(e){var c="",f=a.getCurrentViewStyle();"Thumb"==f?c=i.default.getCardsHtml({items:e.Items,shape:"backdrop",preferThumb:!0,context:"music",centerText:!0,overlayMoreButton:!0,showTitle:!0}):"ThumbCard"==f?c=i.default.getCardsHtml({items:e.Items,shape:"backdrop",preferThumb:!0,context:"music",cardLayout:!0,showTitle:!0}):"PosterCard"==f?c=i.default.getCardsHtml({items:e.Items,shape:"auto",context:"music",cardLayout:!0,showTitle:!0}):"Poster"==f&&(c=i.default.getCardsHtml({items:e.Items,shape:"auto",context:"music",centerText:!0,overlayMoreButton:!0,showTitle:!0}));var d=t.querySelector("#items");d.innerHTML=c,u.default.lazyChildren(d),n.saveQuerySettings(l(),s),o.ZP.hide(),Promise.resolve().then(r.bind(r,87680)).then((function(e){e.default.autoFocus(t)}))}))}(s,d)}}},90005:function(t,e){var r;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var t="",e=0;e<arguments.length;e++){var r=arguments[e];r&&(t=o(t,u(r)))}return t}function u(t){if("string"==typeof t||"number"==typeof t)return t;if("object"!=typeof t)return"";if(Array.isArray(t))return i.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var e="";for(var r in t)n.call(t,r)&&t[r]&&(e=o(e,r));return e}function o(t,e){return e?t?t+" "+e:t+e:t}t.exports?(i.default=i,t.exports=i):void 0===(r=function(){return i}.apply(e,[]))||(t.exports=r)}()}}]);