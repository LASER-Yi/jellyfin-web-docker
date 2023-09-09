"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[15439],{90330:function(t,e,r){r.r(e),r.d(e,{default:function(){return m}}),r(5769),r(63238),r(61418),r(17460),r(14078),r(72410),r(15610),r(52077),r(25901),r(92189),r(91047);var n=r(28540),a=r(92609),i=r(98301),o=r(63873),l=r(61570),s=r(60934),u=r(94994);function c(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return d(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return o=t.done,t},e:function(t){l=!0,i=t},f:function(){try{o||null==r.return||r.return()}finally{if(l)throw i}}}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function m(t,e,d){var m=this;function y(){var t=v(),r=g[t];return r||(r=g[t]={query:{SortBy:"SortName",SortOrder:"Ascending",IncludeItemTypes:"BoxSet",Recursive:!0,Fields:"PrimaryImageAspectRatio,SortName",ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb",StartIndex:0},view:s.getSavedView(t)||"Poster"},s.libraryPageSize()>0&&(r.query.Limit=s.libraryPageSize()),r.query.ParentId=e.topParentId,s.loadQuerySettings(t,r.query)),r}function f(){return y().query}function v(){return e.topParentId+"-moviecollections"}var b=function(){var t=m.getCurrentViewStyle(),e=d.querySelector(".itemsContainer");"List"==t?(e.classList.add("vertical-list"),e.classList.remove("vertical-wrap")):(e.classList.remove("vertical-list"),e.classList.add("vertical-wrap")),e.innerHTML=""},h=function t(e){n.ZP.show(),p=!0;var y=f();ApiClient.getItems(ApiClient.getCurrentUserId(),y).then((function(f){function b(){p||(s.libraryPageSize()>0&&(y.StartIndex+=y.Limit),t(d))}function h(){p||(s.libraryPageSize()>0&&(y.StartIndex=Math.max(0,y.StartIndex-y.Limit)),t(d))}var g;window.scrollTo(0,0);var S=a.ZP.getQueryPagingHtml({startIndex:y.StartIndex,limit:y.Limit,totalRecordCount:f.TotalRecordCount,showLimit:!1,updatePageSizeSetting:!1,addLayoutButton:!1,sortButton:!1,filterButton:!1}),w=m.getCurrentViewStyle();g="Thumb"==w?l.default.getCardsHtml({items:f.Items,shape:"backdrop",preferThumb:!0,context:"movies",overlayPlayButton:!0,centerText:!0,showTitle:!0}):"ThumbCard"==w?l.default.getCardsHtml({items:f.Items,shape:"backdrop",preferThumb:!0,context:"movies",lazy:!0,cardLayout:!0,showTitle:!0}):"Banner"==w?l.default.getCardsHtml({items:f.Items,shape:"banner",preferBanner:!0,context:"movies",lazy:!0}):"List"==w?o.Z.getListViewHtml({items:f.Items,context:"movies",sortBy:y.SortBy}):"PosterCard"==w?l.default.getCardsHtml({items:f.Items,shape:"auto",context:"movies",showTitle:!0,centerText:!1,cardLayout:!0}):l.default.getCardsHtml({items:f.Items,shape:"auto",context:"movies",centerText:!0,overlayPlayButton:!0,showTitle:!0});var P,L=d.querySelectorAll(".paging"),I=c(L);try{for(I.s();!(P=I.n()).done;)P.value.innerHTML=S}catch(t){I.e(t)}finally{I.f()}var C,k=c(L=d.querySelectorAll(".btnNextPage"));try{for(k.s();!(C=k.n()).done;)C.value.addEventListener("click",b)}catch(t){k.e(t)}finally{k.f()}var A,B=c(L=d.querySelectorAll(".btnPreviousPage"));try{for(B.s();!(A=B.n()).done;)A.value.addEventListener("click",h)}catch(t){B.e(t)}finally{B.f()}f.Items.length||(g="",g+='<div class="noItemsMessage centerMessage">',g+="<h1>"+u.ZP.translate("MessageNothingHere")+"</h1>",g+="<p>"+u.ZP.translate("MessageNoCollectionsAvailable")+"</p>",g+="</div>");var T=d.querySelector(".itemsContainer");T.innerHTML=g,i.default.lazyChildren(T),s.saveQuerySettings(v(),y),n.ZP.hide(),p=!1,Promise.resolve().then(r.bind(r,87680)).then((function(t){t.default.autoFocus(e)}))}))},g={},p=!1;this.getCurrentViewStyle=function(){return y().view},function(t){t.querySelector(".btnSort").addEventListener("click",(function(e){a.ZP.showSortMenu({items:[{name:u.ZP.translate("Name"),id:"SortName"},{name:u.ZP.translate("OptionImdbRating"),id:"CommunityRating,SortName"},{name:u.ZP.translate("OptionDateAdded"),id:"DateCreated,SortName"},{name:u.ZP.translate("OptionParentalRating"),id:"OfficialRating,SortName"},{name:u.ZP.translate("OptionReleaseDate"),id:"PremiereDate,SortName"}],callback:function(){f().StartIndex=0,h(t)},query:f(),button:e.target})}));var e=t.querySelector(".btnSelectView");e.addEventListener("click",(function(t){a.ZP.showLayoutMenu(t.target,m.getCurrentViewStyle(),"List,Poster,PosterCard,Thumb,ThumbCard".split(","))})),e.addEventListener("layoutchange",(function(e){var r=e.detail.viewStyle;y().view=r,s.saveViewSetting(v(),r),f().StartIndex=0,b(),h(t)})),t.querySelector(".btnNewCollection").addEventListener("click",(function(){r.e(19449).then(r.bind(r,19449)).then((function(t){var e=t.default,r=ApiClient.serverInfo().Id;(new e).show({items:[],serverId:r})}))}))}(d),b(),this.renderTab=function(){h(d)}}r(82427)},92609:function(t,e,r){r(25901),r(92189),r(91047),r(72410),r(15610),r(5769),r(61013),r(63238),r(61418),r(17460),r(14078),r(52077),r(911);var n=r(94994);function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var i={showLayoutMenu:function(t,e,a){var i=!0;a||(i=!1,a=(a=t.getAttribute("data-layouts"))?a.split(","):["List","Poster","PosterCard","Thumb","ThumbCard"]);var o=a.map((function(t){return{name:n.ZP.translate(t),id:t,selected:e==t}}));r.e(12801).then(r.bind(r,12801)).then((function(e){e.default.show({items:o,positionTo:t,callback:function(e){t.dispatchEvent(new CustomEvent("layoutchange",{detail:{viewStyle:e},bubbles:!0,cancelable:!1})),!i&&window.$&&$(t).trigger("layoutchange",[e])}})}))},getQueryPagingHtml:function(t){var e=t.startIndex,r=t.limit,a=t.totalRecordCount,i="",o=a?e+1:0,l=r?Math.min(e+r,a):a,s=r>0&&r<a;return i+='<div class="listPaging">',i+='<span style="vertical-align:middle;">',i+=n.ZP.translate("ListPaging",o,l,a),i+="</span>",(s||t.viewButton||t.filterButton||t.sortButton||t.addLayoutButton)&&(i+='<div style="display:inline-block;">',s&&(i+='<button is="paper-icon-button-light" class="btnPreviousPage autoSize" '+(e?"":"disabled")+'><span class="material-icons arrow_back" aria-hidden="true"></span></button>',i+='<button is="paper-icon-button-light" class="btnNextPage autoSize" '+(e+r>=a?"disabled":"")+'><span class="material-icons arrow_forward" aria-hidden="true"></span></button>'),t.addLayoutButton&&(i+='<button is="paper-icon-button-light" title="'+n.ZP.translate("ButtonSelectView")+'" class="btnChangeLayout autoSize" data-layouts="'+(t.layouts||"")+'" onclick="LibraryBrowser.showLayoutMenu(this, \''+(t.currentLayout||"")+'\');"><span class="material-icons view_comfy" aria-hidden="true"></span></button>'),t.sortButton&&(i+='<button is="paper-icon-button-light" class="btnSort autoSize" title="'+n.ZP.translate("Sort")+'"><span class="material-icons sort_by_alpha" aria-hidden="true"></span></button>'),t.filterButton&&(i+='<button is="paper-icon-button-light" class="btnFilter autoSize" title="'+n.ZP.translate("Filter")+'"><span class="material-icons filter_list" aria-hidden="true"></span></button>'),i+="</div>"),i+"</div>"},showSortMenu:function(t){Promise.all([Promise.resolve().then(r.bind(r,93355)),r.e(92144).then(r.bind(r,92144))]).then((function(e){var r=function(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,a,i,o,l=[],s=!0,u=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=i.call(r)).done)&&(l.push(n.value),l.length!==e);s=!0);}catch(t){u=!0,a=t}finally{try{if(!s&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(u)throw a}}return l}}(t,e)||function(t,e){if(t){if("string"==typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(e,1)[0].default;function i(){var e=this.value;if(this.checked){var r=t.query.SortBy!=e;t.query.SortBy=e.replace("_",","),t.query.StartIndex=0,t.callback&&r&&t.callback()}}function o(){var e=this.value;if(this.checked){var r=t.query.SortOrder!=e;t.query.SortOrder=e,t.query.StartIndex=0,t.callback&&r&&t.callback()}}var l=r.createDialog({removeOnClose:!0,modal:!1,entryAnimationDuration:160,exitAnimationDuration:200});l.classList.add("ui-body-a"),l.classList.add("background-theme-a"),l.classList.add("formDialog");var s,u,c,d="";for(d+='<div style="margin:0;padding:1.25em 1.5em 1.5em;">',d+='<h2 style="margin:0 0 .5em;">',d+=n.ZP.translate("HeaderSortBy"),d+="</h2>",d+="<div>",s=0,u=t.items.length;s<u;s++){var m=t.items[s],y=m.id.replace(",","_");c=(t.query.SortBy||"").replace(",","_")==y?" checked":"",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortBy" data-id="'+m.id+'" value="'+y+'" class="menuSortBy" '+c+" /><span>"+m.name+"</span></label>"}d+="</div>",d+='<h2 style="margin: 1em 0 .5em;">',d+=n.ZP.translate("HeaderSortOrder"),d+="</h2>",d+="<div>",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Ascending" class="menuSortOrder" '+(c="Ascending"==t.query.SortOrder?" checked":"")+" /><span>"+n.ZP.translate("Ascending")+"</span></label>",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Descending" class="menuSortOrder" '+(c="Descending"==t.query.SortOrder?" checked":"")+" /><span>"+n.ZP.translate("Descending")+"</span></label>",d+="</div>",d+="</div>",l.innerHTML=d,r.open(l);var f=l.querySelectorAll(".menuSortBy");for(s=0,u=f.length;s<u;s++)f[s].addEventListener("change",i);var v=l.querySelectorAll(".menuSortOrder");for(s=0,u=v.length;s<u;s++)v[s].addEventListener("change",o)}))}};window.LibraryBrowser=i,e.ZP=i}}]);