"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7031],{67097:function(e,t,r){r.r(t),r.d(t,{default:function(){return u}}),r(5769),r(63238),r(61418),r(17460),r(14078);var n=r(61097),a=r(91081),i=r(2587),o=r(6594),l=r(47005),s=r(28978);function u(e,t,u){function c(){return(y||(y={query:{StartIndex:0,Fields:"PrimaryImageAspectRatio"}}),s.libraryPageSize()>0&&(y.query.Limit=s.libraryPageSize()),y).query}function d(t,l){o.ZP.show(),b=!0;var u=c(),y=ApiClient;u.UserId=y.getCurrentUserId(),y.getLiveTvChannels(u).then((function(l){(function(e,t){function r(){b||(s.libraryPageSize()>0&&(l.StartIndex+=l.Limit),d(e))}function o(){b||(s.libraryPageSize()>0&&(l.StartIndex=Math.max(0,l.StartIndex-l.Limit)),d(e))}var l=c();e.querySelector(".paging").innerHTML=i.ZP.getQueryPagingHtml({startIndex:l.StartIndex,limit:l.Limit,totalRecordCount:t.TotalRecordCount,showLimit:!1,updatePageSizeSetting:!1,filterButton:!1});var u,y,v,f,h=(u=t.Items,n.default.getCardsHtml({items:u,shape:"square",showTitle:!0,lazy:!0,cardLayout:!0,showDetailsMenu:!0,showCurrentProgram:!0,showCurrentProgramTime:!0})),m=e.querySelector("#items");for(m.innerHTML=h,a.default.lazyChildren(m),y=0,v=(f=e.querySelectorAll(".btnNextPage")).length;y<v;y++)f[y].addEventListener("click",r);for(y=0,v=(f=e.querySelectorAll(".btnPreviousPage")).length;y<v;y++)f[y].addEventListener("click",o)})(t,l),o.ZP.hide(),b=!1,Promise.resolve().then(r.bind(r,6610)).then((function(t){t.default.autoFocus(e)}))}))}var y,b=!1;u.querySelector(".btnFilter").addEventListener("click",(function(){var e;e=u,r.e(3201).then(r.bind(r,83201)).then((function(t){var r=new(0,t.default)({query:c(),mode:"livetvchannels",serverId:ApiClient.serverId()});l.Events.on(r,"filterchange",(function(){d(e)})),r.show()}))})),this.renderTab=function(){d(u)}}r(32420)},2587:function(e,t,r){r(25901),r(92189),r(91047),r(72410),r(15610),r(5769),r(52077),r(72482),r(48410),r(61013),r(63238),r(61418),r(17460),r(14078),r(911);var n=r(28978),a=r(53754);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var o={getSavedQueryKey:function(e){return window.location.href.split("#")[0]+(e||"")},loadSavedQueryValues:function(e,t){var r=n.get(e);return r?(r=JSON.parse(r),Object.assign(t,r)):t},saveQueryValues:function(e,t){var r={};t.SortBy&&(r.SortBy=t.SortBy),t.SortOrder&&(r.SortOrder=t.SortOrder),n.set(e,JSON.stringify(r))},saveViewSetting:function(e,t){n.set(e+"-_view",t)},getSavedView:function(e){return n.get(e+"-_view")},showLayoutMenu:function(e,t,n){var i=!0;n||(i=!1,n=(n=e.getAttribute("data-layouts"))?n.split(","):["List","Poster","PosterCard","Thumb","ThumbCard"]);var o=n.map((function(e){return{name:a.ZP.translate(e),id:e,selected:t==e}}));Promise.resolve().then(r.bind(r,32465)).then((function(t){t.default.show({items:o,positionTo:e,callback:function(t){e.dispatchEvent(new CustomEvent("layoutchange",{detail:{viewStyle:t},bubbles:!0,cancelable:!1})),i||window.$&&$(e).trigger("layoutchange",[t])}})}))},getQueryPagingHtml:function(e){var t=e.startIndex,r=e.limit,n=e.totalRecordCount,i="",o=Math.min(t+r,n),l=r<n;return i+='<div class="listPaging">',l&&(i+='<span style="vertical-align:middle;">',i+=a.ZP.translate("ListPaging",n?t+1:0,o,n),i+="</span>"),(l||e.viewButton||e.filterButton||e.sortButton||e.addLayoutButton)&&(i+='<div style="display:inline-block;">',l&&(i+='<button is="paper-icon-button-light" class="btnPreviousPage autoSize" '+(t?"":"disabled")+'><span class="material-icons arrow_back"></span></button>',i+='<button is="paper-icon-button-light" class="btnNextPage autoSize" '+(t+r>=n?"disabled":"")+'><span class="material-icons arrow_forward"></span></button>'),e.addLayoutButton&&(i+='<button is="paper-icon-button-light" title="'+a.ZP.translate("ButtonSelectView")+'" class="btnChangeLayout autoSize" data-layouts="'+(e.layouts||"")+'" onclick="LibraryBrowser.showLayoutMenu(this, \''+(e.currentLayout||"")+'\');"><span class="material-icons view_comfy"></span></button>'),e.sortButton&&(i+='<button is="paper-icon-button-light" class="btnSort autoSize" title="'+a.ZP.translate("Sort")+'"><span class="material-icons sort_by_alpha"></span></button>'),e.filterButton&&(i+='<button is="paper-icon-button-light" class="btnFilter autoSize" title="'+a.ZP.translate("Filter")+'"><span class="material-icons filter_list"></span></button>'),i+="</div>"),i+"</div>"},showSortMenu:function(e){Promise.all([Promise.resolve().then(r.bind(r,1115)),r.e(1674).then(r.bind(r,21674))]).then((function(t){var r=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,i,o,l=[],s=!0,u=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=i.call(r)).done)&&(l.push(n.value),l.length!==t);s=!0);}catch(e){u=!0,a=e}finally{try{if(!s&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(u)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t,1)[0].default;function n(){var t=this.value;if(this.checked){var r=e.query.SortBy!=t;e.query.SortBy=t.replace("_",","),e.query.StartIndex=0,e.callback&&r&&e.callback()}}function o(){var t=this.value;if(this.checked){var r=e.query.SortOrder!=t;e.query.SortOrder=t,e.query.StartIndex=0,e.callback&&r&&e.callback()}}var l=r.createDialog({removeOnClose:!0,modal:!1,entryAnimationDuration:160,exitAnimationDuration:200});l.classList.add("ui-body-a"),l.classList.add("background-theme-a"),l.classList.add("formDialog");var s,u,c,d="";for(d+='<div style="margin:0;padding:1.25em 1.5em 1.5em;">',d+='<h2 style="margin:0 0 .5em;">',d+=a.ZP.translate("HeaderSortBy"),d+="</h2>",d+="<div>",s=0,u=e.items.length;s<u;s++){var y=e.items[s],b=y.id.replace(",","_");c=(e.query.SortBy||"").replace(",","_")==b?" checked":"",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortBy" data-id="'+y.id+'" value="'+b+'" class="menuSortBy" '+c+" /><span>"+y.name+"</span></label>"}d+="</div>",d+='<h2 style="margin: 1em 0 .5em;">',d+=a.ZP.translate("HeaderSortOrder"),d+="</h2>",d+="<div>",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Ascending" class="menuSortOrder" '+(c="Ascending"==e.query.SortOrder?" checked":"")+" /><span>"+a.ZP.translate("Ascending")+"</span></label>",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Descending" class="menuSortOrder" '+(c="Descending"==e.query.SortOrder?" checked":"")+" /><span>"+a.ZP.translate("Descending")+"</span></label>",d+="</div>",d+="</div>",l.innerHTML=d,r.open(l);var v=l.querySelectorAll(".menuSortBy");for(s=0,u=v.length;s<u;s++)v[s].addEventListener("change",n);var f=l.querySelectorAll(".menuSortOrder");for(s=0,u=f.length;s<u;s++)f[s].addEventListener("change",o)}))}};window.LibraryBrowser=o,t.ZP=o}}]);