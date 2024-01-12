"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[89322,83264,19372],{19372:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}}),r(88646),r(81414),r(54134),r(91270),r(14011),r(59139),r(56187),r(38690),r(89228),r(13227),r(11431);var n=r(65009),a=r.n(n),i=r(61570),o=r(31338),s=r(30325),l=r(84597),d=r(66560),u=r(94994),c=r(60934),m=r(35478);function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function h(e,t,r){function n(){var e=p(),r=T[e];return r||((r=T[e]={query:{SortBy:"SortName",SortOrder:"Ascending",IncludeItemTypes:"Series",Recursive:!0,EnableTotalRecordCount:!1},view:"Poster"}).query.ParentId=t.topParentId,c.loadQuerySettings(e,r.query)),r}function h(){return n().query}function p(){return"".concat(t.topParentId,"-seriesgenres")}function y(){return!s.Z.desktop}function b(e){var n=e.target,a=n.getAttribute("data-id"),o=g.getCurrentViewStyle(),s="Thumb"==o||"ThumbCard"==o?5:9;y()&&(s=10);var l={SortBy:"Random",SortOrder:"Ascending",IncludeItemTypes:"Series",Recursive:!0,Fields:"PrimaryImageAspectRatio,MediaSourceCount",ImageTypeLimit:1,EnableImageTypes:"Thumb"==o||"ThumbCard"==o?"Primary,Backdrop,Thumb":"Primary",Limit:s,GenreIds:a,EnableTotalRecordCount:!1,ParentId:t.topParentId};ApiClient.getItems(ApiClient.getCurrentUserId(),l).then((function(e){"Thumb"==o?i.default.buildCards(e.Items,{itemsContainer:n,shape:(0,m.gB)(y()),preferThumb:!0,showTitle:!0,scalable:!0,centerText:!0,overlayMoreButton:!0,allowBottomPadding:!1}):"ThumbCard"==o?i.default.buildCards(e.Items,{itemsContainer:n,shape:(0,m.gB)(y()),preferThumb:!0,showTitle:!0,scalable:!0,centerText:!1,cardLayout:!0,showYear:!0}):"PosterCard"==o?i.default.buildCards(e.Items,{itemsContainer:n,shape:(0,m.pk)(y()),showTitle:!0,scalable:!0,centerText:!1,cardLayout:!0,showYear:!0}):"Poster"==o&&i.default.buildCards(e.Items,{itemsContainer:n,shape:(0,m.pk)(y()),scalable:!0,showTitle:!0,centerText:!0,showYear:!0,overlayMoreButton:!0,allowBottomPadding:!1}),e.Items.length>=l.Limit&&r.querySelector(".btnMoreFromGenre"+a+" .material-icons").classList.remove("hide")}))}var v,g=this,T={};g.getViewStyles=function(){return"Poster,PosterCard,Thumb,ThumbCard".split(",")},g.getCurrentViewStyle=function(){return n().view},g.setCurrentViewStyle=function(e){n().view=e,c.saveViewSetting(p(),e),g.preRender(),g.renderTab()},g.enableViewSelection=!0,g.preRender=function(){v=function(){l.ZP.show();var e=h();return ApiClient.getGenres(ApiClient.getCurrentUserId(),e)}()},g.renderTab=function(){!function(e,r){var n=h();r.then((function(r){var i,m=e.querySelector("#items"),h="",v=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw i}}}}(r.Items);try{for(v.s();!(i=v.n()).done;){var g=i.value;if(h+='<div class="verticalSection">',h+='<div class="sectionTitleContainer sectionTitleContainer-cards padded-left">',h+='<a is="emby-linkbutton" href="'+d.appRouter.getRouteUrl(g,{context:"tvshows",parentId:t.topParentId})+'" class="more button-flat button-flat-mini sectionTitleTextButton btnMoreFromGenre'+g.Id+'">',h+='<h2 class="sectionTitle sectionTitle-cards">',h+=a()(g.Name),h+="</h2>",h+='<span class="material-icons hide chevron_right" aria-hidden="true"></span>',h+="</a>",h+="</div>",y()){var T="scrollX hiddenScrollX";s.Z.tv&&(T+="smoothScrollX padded-top-focusscale padded-bottom-focusscale"),h+='<div is="emby-itemscontainer" class="itemsContainer '+T+' lazy padded-left padded-right" data-id="'+g.Id+'">'}else h+='<div is="emby-itemscontainer" class="itemsContainer vertical-wrap lazy padded-left padded-right" data-id="'+g.Id+'">';h+="</div>",h+="</div>"}}catch(e){v.e(e)}finally{v.f()}r.Items.length||(h="",h+='<div class="noItemsMessage centerMessage">',h+="<h1>"+u.ZP.translate("MessageNothingHere")+"</h1>",h+="<p>"+u.ZP.translate("MessageNoGenresAvailable")+"</p>",h+="</div>"),m.innerHTML=h,o.ZP.lazyChildren(m,b),c.saveQuerySettings(p(),n),l.ZP.hide()}))}(r,v)}}r(38228)}}]);