"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6452],{6452:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var n=r(65009),a=r.n(n),i=r(30325),o=r(28540),s=r(60934),d=r(61570),l=r(31338),u=r(94994),c=r(66560);function m(e,t,r){var n=this;function m(){var e=p(),r=C[e];return r||((r=C[e]={query:{SortBy:"SortName",SortOrder:"Ascending",IncludeItemTypes:"Movie",Recursive:!0,EnableTotalRecordCount:!1},view:s.getSavedView(e)||"Poster"}).query.ParentId=t.topParentId,s.loadQuerySettings(e,r.query)),r}function h(){return m().query}function p(){return t.topParentId+"-moviegenres"}function v(){return!i.Z.desktop}function f(){return v()?"overflowBackdrop":"backdrop"}function b(){return v()?"overflowPortrait":"portrait"}var T,g=function(e){var a=e.target,i=a.getAttribute("data-id"),o=n.getCurrentViewStyle(),s="Thumb"==o||"ThumbCard"==o?5:9;v()&&(s=10);var l={SortBy:"Random",SortOrder:"Ascending",IncludeItemTypes:"Movie",Recursive:!0,Fields:"PrimaryImageAspectRatio,MediaSourceCount,BasicSyncInfo",ImageTypeLimit:1,EnableImageTypes:"Thumb"==o||"ThumbCard"==o?"Primary,Backdrop,Thumb":"Primary",Limit:s,GenreIds:i,EnableTotalRecordCount:!1,ParentId:t.topParentId};ApiClient.getItems(ApiClient.getCurrentUserId(),l).then((function(e){"Thumb"==o?d.default.buildCards(e.Items,{itemsContainer:a,shape:f(),preferThumb:!0,showTitle:!0,scalable:!0,centerText:!0,overlayMoreButton:!0,allowBottomPadding:!1}):"ThumbCard"==o?d.default.buildCards(e.Items,{itemsContainer:a,shape:f(),preferThumb:!0,showTitle:!0,scalable:!0,centerText:!1,cardLayout:!0,showYear:!0}):"PosterCard"==o?d.default.buildCards(e.Items,{itemsContainer:a,shape:b(),showTitle:!0,scalable:!0,centerText:!1,cardLayout:!0,showYear:!0}):"Poster"==o&&d.default.buildCards(e.Items,{itemsContainer:a,shape:b(),scalable:!0,overlayMoreButton:!0,allowBottomPadding:!0,showTitle:!0,centerText:!0,showYear:!0}),e.Items.length>=l.Limit&&r.querySelector(".btnMoreFromGenre"+i+" .material-icons").classList.remove("hide")}))},C={};this.getViewStyles=function(){return"Poster,PosterCard,Thumb,ThumbCard".split(",")},this.getCurrentViewStyle=function(){return m().view},this.setCurrentViewStyle=function(e){m().view=e,s.saveViewSetting(p(),e),n.preRender(),n.renderTab()},this.enableViewSelection=!0,this.preRender=function(){T=function(){o.ZP.show();var e=h();return ApiClient.getGenres(ApiClient.getCurrentUserId(),e)}()},this.renderTab=function(){!function(e,r){var n=h();r.then((function(r){for(var d=e.querySelector("#items"),m="",h=r.Items,f=0,b=h.length;f<b;f++){var T=h[f];if(m+='<div class="verticalSection">',m+='<div class="sectionTitleContainer sectionTitleContainer-cards padded-left">',m+='<a is="emby-linkbutton" href="'+c.appRouter.getRouteUrl(T,{context:"movies",parentId:t.topParentId})+'" class="more button-flat button-flat-mini sectionTitleTextButton btnMoreFromGenre'+T.Id+'">',m+='<h2 class="sectionTitle sectionTitle-cards">',m+=a()(T.Name),m+="</h2>",m+='<span class="material-icons hide chevron_right" aria-hidden="true"></span>',m+="</a>",m+="</div>",v()){var C="scrollX hiddenScrollX";i.Z.tv&&(C+="smoothScrollX padded-top-focusscale padded-bottom-focusscale"),m+='<div is="emby-itemscontainer" class="itemsContainer '+C+' lazy padded-left padded-right" data-id="'+T.Id+'">'}else m+='<div is="emby-itemscontainer" class="itemsContainer vertical-wrap lazy padded-left padded-right" data-id="'+T.Id+'">';m+="</div>",m+="</div>"}r.Items.length||(m="",m+='<div class="noItemsMessage centerMessage">',m+="<h1>"+u.ZP.translate("MessageNothingHere")+"</h1>",m+="<p>"+u.ZP.translate("MessageNoGenresAvailable")+"</p>",m+="</div>"),d.innerHTML=m,l.ZP.lazyChildren(d,g),s.saveQuerySettings(p(),n),o.ZP.hide()}))}(r,T)}}r(38228)}}]);