"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[67007],{67007:function(t,e,r){r.r(e),r.d(e,{default:function(){return c}}),r(5769),r(63238),r(61418),r(17460),r(14078),r(72410),r(15610),r(52077),r(25901),r(92189),r(91047);var n=r(61570),a=r(98301),i=r(92609),o=r(28540),l=r(60934),u=r(81643);function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function c(t,e,c){function d(){return(h||(h={query:{StartIndex:0,Fields:"PrimaryImageAspectRatio"}}),l.libraryPageSize()>0&&(h.query.Limit=l.libraryPageSize()),h).query}function y(t,e){function r(){b||(l.libraryPageSize()>0&&(c.StartIndex+=c.Limit),f(t).then((function(){window.scrollTo(0,0)})))}function o(){b||(l.libraryPageSize()>0&&(c.StartIndex=Math.max(0,c.StartIndex-c.Limit)),f(t).then((function(){window.scrollTo(0,0)})))}var u,c=d(),y=function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return s(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return o=t.done,t},e:function(t){l=!0,i=t},f:function(){try{o||null==r.return||r.return()}finally{if(l)throw i}}}}(t.querySelectorAll(".paging"));try{for(y.s();!(u=y.n()).done;)u.value.innerHTML=i.ZP.getQueryPagingHtml({startIndex:c.StartIndex,limit:c.Limit,totalRecordCount:e.TotalRecordCount,showLimit:!1,updatePageSizeSetting:!1,filterButton:!1})}catch(t){y.e(t)}finally{y.f()}var h,m,v,g,p=(h=e.Items,n.default.getCardsHtml({items:h,shape:"square",showTitle:!0,lazy:!0,cardLayout:!0,showDetailsMenu:!0,showCurrentProgram:!0,showCurrentProgramTime:!0})),S=t.querySelector("#items");for(S.innerHTML=p,a.default.lazyChildren(S),m=0,v=(g=t.querySelectorAll(".btnNextPage")).length;m<v;m++)g[m].addEventListener("click",r);for(m=0,v=(g=t.querySelectorAll(".btnPreviousPage")).length;m<v;m++)g[m].addEventListener("click",o)}function f(t){o.ZP.show(),b=!0;var e=d(),n=ApiClient;return e.UserId=n.getCurrentUserId(),n.getLiveTvChannels(e).then((function(e){y(t,e),o.ZP.hide(),b=!1,Promise.resolve().then(r.bind(r,87680)).then((function(e){e.default.autoFocus(t)}))}))}var h,b=!1;c.querySelector(".btnFilter").addEventListener("click",(function(){var t;t=c,r.e(3751).then(r.bind(r,3751)).then((function(e){var r=new(0,e.default)({query:d(),mode:"livetvchannels",serverId:ApiClient.serverId()});u.Z.on(r,"filterchange",(function(){f(t)})),r.show()}))})),this.renderTab=function(){f(c)}}r(82427)},92609:function(t,e,r){r(25901),r(92189),r(91047),r(72410),r(15610),r(5769),r(61013),r(63238),r(61418),r(17460),r(14078),r(52077),r(911);var n=r(94994);function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var i={showLayoutMenu:function(t,e,a){var i=!0;a||(i=!1,a=(a=t.getAttribute("data-layouts"))?a.split(","):["List","Poster","PosterCard","Thumb","ThumbCard"]);var o=a.map((function(t){return{name:n.ZP.translate(t),id:t,selected:e==t}}));r.e(12801).then(r.bind(r,12801)).then((function(e){e.default.show({items:o,positionTo:t,callback:function(e){t.dispatchEvent(new CustomEvent("layoutchange",{detail:{viewStyle:e},bubbles:!0,cancelable:!1})),!i&&window.$&&$(t).trigger("layoutchange",[e])}})}))},getQueryPagingHtml:function(t){var e=t.startIndex,r=t.limit,a=t.totalRecordCount,i="",o=a?e+1:0,l=r?Math.min(e+r,a):a,u=r>0&&r<a;return i+='<div class="listPaging">',i+='<span style="vertical-align:middle;">',i+=n.ZP.translate("ListPaging",o,l,a),i+="</span>",(u||t.viewButton||t.filterButton||t.sortButton||t.addLayoutButton)&&(i+='<div style="display:inline-block;">',u&&(i+='<button is="paper-icon-button-light" class="btnPreviousPage autoSize" '+(e?"":"disabled")+'><span class="material-icons arrow_back" aria-hidden="true"></span></button>',i+='<button is="paper-icon-button-light" class="btnNextPage autoSize" '+(e+r>=a?"disabled":"")+'><span class="material-icons arrow_forward" aria-hidden="true"></span></button>'),t.addLayoutButton&&(i+='<button is="paper-icon-button-light" title="'+n.ZP.translate("ButtonSelectView")+'" class="btnChangeLayout autoSize" data-layouts="'+(t.layouts||"")+'" onclick="LibraryBrowser.showLayoutMenu(this, \''+(t.currentLayout||"")+'\');"><span class="material-icons view_comfy" aria-hidden="true"></span></button>'),t.sortButton&&(i+='<button is="paper-icon-button-light" class="btnSort autoSize" title="'+n.ZP.translate("Sort")+'"><span class="material-icons sort_by_alpha" aria-hidden="true"></span></button>'),t.filterButton&&(i+='<button is="paper-icon-button-light" class="btnFilter autoSize" title="'+n.ZP.translate("Filter")+'"><span class="material-icons filter_list" aria-hidden="true"></span></button>'),i+="</div>"),i+"</div>"},showSortMenu:function(t){Promise.all([Promise.resolve().then(r.bind(r,93355)),r.e(92144).then(r.bind(r,92144))]).then((function(e){var r=function(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,a,i,o,l=[],u=!0,s=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(l.push(n.value),l.length!==e);u=!0);}catch(t){s=!0,a=t}finally{try{if(!u&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(s)throw a}}return l}}(t,e)||function(t,e){if(t){if("string"==typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(e,1)[0].default;function i(){var e=this.value;if(this.checked){var r=t.query.SortBy!=e;t.query.SortBy=e.replace("_",","),t.query.StartIndex=0,t.callback&&r&&t.callback()}}function o(){var e=this.value;if(this.checked){var r=t.query.SortOrder!=e;t.query.SortOrder=e,t.query.StartIndex=0,t.callback&&r&&t.callback()}}var l=r.createDialog({removeOnClose:!0,modal:!1,entryAnimationDuration:160,exitAnimationDuration:200});l.classList.add("ui-body-a"),l.classList.add("background-theme-a"),l.classList.add("formDialog");var u,s,c,d="";for(d+='<div style="margin:0;padding:1.25em 1.5em 1.5em;">',d+='<h2 style="margin:0 0 .5em;">',d+=n.ZP.translate("HeaderSortBy"),d+="</h2>",d+="<div>",u=0,s=t.items.length;u<s;u++){var y=t.items[u],f=y.id.replace(",","_");c=(t.query.SortBy||"").replace(",","_")==f?" checked":"",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortBy" data-id="'+y.id+'" value="'+f+'" class="menuSortBy" '+c+" /><span>"+y.name+"</span></label>"}d+="</div>",d+='<h2 style="margin: 1em 0 .5em;">',d+=n.ZP.translate("HeaderSortOrder"),d+="</h2>",d+="<div>",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Ascending" class="menuSortOrder" '+(c="Ascending"==t.query.SortOrder?" checked":"")+" /><span>"+n.ZP.translate("Ascending")+"</span></label>",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Descending" class="menuSortOrder" '+(c="Descending"==t.query.SortOrder?" checked":"")+" /><span>"+n.ZP.translate("Descending")+"</span></label>",d+="</div>",d+="</div>",l.innerHTML=d,r.open(l);var h=l.querySelectorAll(".menuSortBy");for(u=0,s=h.length;u<s;u++)h[u].addEventListener("change",i);var b=l.querySelectorAll(".menuSortOrder");for(u=0,s=b.length;u<s;u++)b[u].addEventListener("change",o)}))}};window.LibraryBrowser=i,e.ZP=i}}]);