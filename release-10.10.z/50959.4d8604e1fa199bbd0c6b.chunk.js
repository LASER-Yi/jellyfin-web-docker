"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[50959],{50959:function(e,t,r){r.r(t),r.d(t,{default:function(){return a}}),r(44962),r(78557),r(90076),r(83994),r(82367);var n=r(82885),i=r(24468),u=r(76542),s=r(8566);function a(e,t,a){var o=this;function c(){var e=l(),r=m[e];return r||((r=m[e]={query:{SortBy:"SortName",SortOrder:"Ascending",Recursive:!0,Fields:"PrimaryImageAspectRatio,ItemCounts",StartIndex:0},view:n.getSavedView(e)||"Poster"}).query.ParentId=t.topParentId,n.loadQuerySettings(e,r.query)),r}function d(){return c().query}function l(){return"".concat(t.topParentId,"-genres")}var h,m={};this.getViewStyles=function(){return"Poster,PosterCard,Thumb,ThumbCard".split(",")},this.getCurrentViewStyle=function(){return c().view},this.setCurrentViewStyle=function(e){c().view=e,n.saveViewSetting(l(),e),function(){this.preRender(),this.renderTab()}()},this.enableViewSelection=!0,this.preRender=function(){h=function(){s.Ay.show();var e=d();return ApiClient.getGenres(ApiClient.getCurrentUserId(),e)}()},this.renderTab=function(){!function(e,t){var a=d();t.then((function(t){var c="",d=o.getCurrentViewStyle();"Thumb"==d?c=i.default.getCardsHtml({items:t.Items,shape:"backdrop",preferThumb:!0,context:"music",centerText:!0,overlayMoreButton:!0,showTitle:!0}):"ThumbCard"==d?c=i.default.getCardsHtml({items:t.Items,shape:"backdrop",preferThumb:!0,context:"music",cardLayout:!0,showTitle:!0}):"PosterCard"==d?c=i.default.getCardsHtml({items:t.Items,shape:"auto",context:"music",cardLayout:!0,showTitle:!0}):"Poster"==d&&(c=i.default.getCardsHtml({items:t.Items,shape:"auto",context:"music",centerText:!0,overlayMoreButton:!0,showTitle:!0}));var h=e.querySelector("#items");h.innerHTML=c,u.default.lazyChildren(h),n.saveQuerySettings(l(),a),s.Ay.hide(),Promise.resolve().then(r.bind(r,84069)).then((function(t){t.default.autoFocus(e)}))}))}(a,h)}}}}]);