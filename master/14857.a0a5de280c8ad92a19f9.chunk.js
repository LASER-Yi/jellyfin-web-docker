"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[14857],{12658:function(e,t,a){a.d(t,{w:function(){return h}}),a(23938),a(61013),a(27471),a(19068),a(87211),a(25901),a(92189),a(63238),a(95163),a(99785),a(91047),a(5769),a(17460),a(14078);var n=a(34643),r=a(30325),i=a(72365),o=a(94994);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,r=function(e,t){if("object"!==l(e)||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,"string");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===l(r)?r:String(r)),n)}var r}a(61414);var u="alphaPickerButton-selected";function c(){var e=this.querySelector(".".concat(u));e?n.Z.focus(e):n.Z.autoFocus(this,!0)}function d(e){var t="alphaPickerButton";return r.Z.tv&&(t+=" alphaPickerButton-tv"),e&&(t+=" alphaPickerButton-vertical"),t}function v(e,t){return e.map((function(e){return function(e,t){return'<button data-value="'.concat(e,'" class="').concat(d(t),'">').concat(e,"</button>")}(e,t)}))}var h=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var a=this;this.options=t;var n,l,s,u,h=t.element,m=t.itemsContainer,f=t.itemClass;function y(){l=null,a.value(n)}function p(){if(u=null,document.activeElement===s){var e=s.getAttribute("data-value");a.value(e,!0)}}function b(e){var t=i.ZP.parentWithClass(e.target,"alphaPickerButton");if(t){var a=t.getAttribute("data-value");h.dispatchEvent(new CustomEvent("alphavalueclicked",{cancelable:!1,detail:{value:a}}))}}function g(e){var t=i.ZP.parentWithClass(e.target,"alphaPickerButton");if(t){var a=t.getAttribute("data-value");(this._currentValue||"").toUpperCase()===a.toUpperCase()?this.value(null,!0):this.value(a,!0)}}function S(e){u&&(clearTimeout(u),u=null);var t=i.ZP.parentWithClass(e.target,"alphaPickerButton");t&&(s=t,u=setTimeout(p,600))}function P(e){var t=i.ZP.parentWithClass(e.target,f);if(t){var a=t.getAttribute("data-prefix");null!=a&&a.length&&(n=a[0],l&&clearTimeout(l),l=setTimeout(y,100))}}this.enabled=function(e){e?(m&&m.addEventListener("focus",P,!0),"keyboard"===t.mode&&h.addEventListener("click",b),"click"!==t.valueChangeEvent?h.addEventListener("focus",S,!0):h.addEventListener("click",g.bind(this))):(m&&m.removeEventListener("focus",P,!0),h.removeEventListener("click",b),h.removeEventListener("focus",S,!0),h.removeEventListener("click",g.bind(this)))},function(e,t){e.classList.add("alphaPicker"),r.Z.tv&&e.classList.add("alphaPicker-tv");var a=e.classList.contains("alphaPicker-vertical");a||e.classList.add("focuscontainer-x");var n,i="",l=d(a),s="alphaPickerRow";a&&(s+=" alphaPickerRow-vertical"),i+='<div class="'.concat(s,'">'),"keyboard"===t.mode?i+='<button data-value=" " is="paper-icon-button-light" class="'.concat(l,'" aria-label="').concat(o.ZP.translate("ButtonSpace"),'"><span class="material-icons alphaPickerButtonIcon space_bar" aria-hidden="true"></span></button>'):i+=v(n=["#"],a).join(""),i+=v(n=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],a).join(""),"keyboard"===t.mode?(i+='<button data-value="backspace" is="paper-icon-button-light" class="'.concat(l,'" aria-label="').concat(o.ZP.translate("ButtonBackspace"),'"><span class="material-icons alphaPickerButtonIcon backspace" aria-hidden="true"></span></button>'),i+="</div>",n=["0","1","2","3","4","5","6","7","8","9"],i+='<div class="'.concat(s,'">'),i+="<br/>",i+=v(n,a).join(""),i+="</div>"):i+="</div>",e.innerHTML=i,e.classList.add("focusable"),e.focus=c}(h,t),this.enabled(!0),this.visible(!0)}var t,a;return t=e,(a=[{key:"value",value:function(e,t){var a,n,r=this.options.element;if(void 0!==e)if(null!=e){if(e=e.toUpperCase(),this._currentValue=e,"keyboard"!==this.options.mode){n=r.querySelector(".".concat(u));try{a=r.querySelector(".alphaPickerButton[data-value='".concat(e,"']"))}catch(e){console.error("error in querySelector:",e)}a&&a!==n&&a.classList.add(u),n&&n!==a&&n.classList.remove(u)}}else this._currentValue=e,(n=r.querySelector(".".concat(u)))&&n.classList.remove(u);return t&&r.dispatchEvent(new CustomEvent("alphavaluechanged",{cancelable:!1,detail:{value:e}})),this._currentValue}},{key:"on",value:function(e,t){this.options.element.addEventListener(e,t)}},{key:"off",value:function(e,t){this.options.element.removeEventListener(e,t)}},{key:"updateControls",value:function(e){e.NameLessThan?this.value("#"):this.value(e.NameStartsWith),this.visible(-1!==e.SortBy.indexOf("SortName"))}},{key:"visible",value:function(e){this.options.element.style.visibility=e?"visible":"hidden"}},{key:"values",value:function(){for(var e=this.options.element.querySelectorAll(".alphaPickerButton"),t=[],a=0,n=e.length;a<n;a++)t.push(e[a].getAttribute("data-value"));return t}},{key:"focus",value:function(){var e=this.options.element;n.Z.autoFocus(e,!0)}},{key:"destroy",value:function(){var e=this.options.element;this.enabled(!1),e.classList.remove("focuscontainer-x"),this.options=null}}])&&s(t.prototype,a),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.Z=h},14857:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}}),a(5769),a(63238),a(61418),a(17460),a(14078),a(72410),a(15610),a(52077),a(25901),a(92189),a(91047);var n=a(28540),r=a(92609),i=a(98301),o=a(12658),l=a(63873),s=a(61570),u=a(60934),c=a(94994),d=a(81643);function v(e,t){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,t){if(e){if("string"==typeof e)return h(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?h(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,l=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return o=e.done,e},e:function(e){l=!0,i=e},f:function(){try{o||null==a.return||a.return()}finally{if(l)throw i}}}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function m(e,t,h){var m=this;function f(){var e=p(),t=k[e];return t||(t=k[e]={query:{SortBy:"SortName",SortOrder:"Ascending",IncludeItemTypes:"Trailer",Recursive:!0,Fields:"PrimaryImageAspectRatio,SortName,BasicSyncInfo",ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb",StartIndex:0},view:r.ZP.getSavedView(e)||"Poster"},u.libraryPageSize()>0&&(t.query.Limit=u.libraryPageSize()),r.ZP.loadSavedQueryValues(e,t.query)),t}function y(){return f().query}function p(){return t.topParentId+"-trailers"}var b,g,S,P=function e(){n.ZP.show(),w=!0;var t=y();ApiClient.getItems(ApiClient.getCurrentUserId(),t).then((function(a){var o;function d(){w||(u.libraryPageSize()>0&&(t.StartIndex+=t.Limit),e())}function f(){w||(u.libraryPageSize()>0&&(t.StartIndex=Math.max(0,t.StartIndex-t.Limit)),e())}window.scrollTo(0,0),null===(o=m.alphaPicker)||void 0===o||o.updateControls(t);var y,b=r.ZP.getQueryPagingHtml({startIndex:t.StartIndex,limit:t.Limit,totalRecordCount:a.TotalRecordCount,showLimit:!1,updatePageSizeSetting:!1,addLayoutButton:!1,sortButton:!1,filterButton:!1}),g=m.getCurrentViewStyle();y="Thumb"==g?s.default.getCardsHtml({items:a.Items,shape:"backdrop",preferThumb:!0,context:"movies",overlayPlayButton:!0}):"ThumbCard"==g?s.default.getCardsHtml({items:a.Items,shape:"backdrop",preferThumb:!0,context:"movies",cardLayout:!0,showTitle:!0,showYear:!0,centerText:!0}):"Banner"==g?s.default.getCardsHtml({items:a.Items,shape:"banner",preferBanner:!0,context:"movies"}):"List"==g?l.Z.getListViewHtml({items:a.Items,context:"movies",sortBy:t.SortBy}):"PosterCard"==g?s.default.getCardsHtml({items:a.Items,shape:"portrait",context:"movies",showTitle:!0,showYear:!0,cardLayout:!0,centerText:!0}):s.default.getCardsHtml({items:a.Items,shape:"portrait",context:"movies",centerText:!0,overlayPlayButton:!0,showTitle:!0,showYear:!0});var S,P=h.querySelectorAll(".paging"),k=v(P);try{for(k.s();!(S=k.n()).done;)S.value.innerHTML=b}catch(e){k.e(e)}finally{k.f()}var L,C=v(P=h.querySelectorAll(".btnNextPage"));try{for(C.s();!(L=C.n()).done;)L.value.addEventListener("click",d)}catch(e){C.e(e)}finally{C.f()}var B,I=v(P=h.querySelectorAll(".btnPreviousPage"));try{for(I.s();!(B=I.n()).done;)B.value.addEventListener("click",f)}catch(e){I.e(e)}finally{I.f()}a.Items.length||(y="",y+='<div class="noItemsMessage centerMessage">',y+="<h1>"+c.ZP.translate("MessageNothingHere")+"</h1>",y+="<p>"+c.ZP.translate("MessageNoTrailersFound")+"</p>",y+="</div>");var Z=h.querySelector(".itemsContainer");Z.innerHTML=y,i.default.lazyChildren(Z),r.ZP.saveQueryValues(p(),t),n.ZP.hide(),w=!1}))},k={},w=!1;this.showFilterMenu=function(){a.e(3751).then(a.bind(a,3751)).then((function(e){var t=new(0,e.default)({query:y(),mode:"movies",serverId:ApiClient.serverId()});d.Z.on(t,"filterchange",(function(){y().StartIndex=0,P()})),t.show()}))},this.getCurrentViewStyle=function(){return f().view},g=(b=h).querySelector(".alphaPicker"),S=b.querySelector(".itemsContainer"),g.addEventListener("alphavaluechanged",(function(e){var t=e.detail.value,a=y();"#"===t?(a.NameLessThan="A",delete a.NameStartsWith):(a.NameStartsWith=t,delete a.NameLessThan),a.StartIndex=0,P()})),m.alphaPicker=new o.w({element:g,valueChangeEvent:"click"}),b.querySelector(".alphaPicker").classList.add("alphabetPicker-right"),g.classList.add("alphaPicker-fixed-right"),S.classList.add("padded-right-withalphapicker"),b.querySelector(".btnFilter").addEventListener("click",(function(){m.showFilterMenu()})),b.querySelector(".btnSort").addEventListener("click",(function(e){r.ZP.showSortMenu({items:[{name:c.ZP.translate("Name"),id:"SortName"},{name:c.ZP.translate("OptionImdbRating"),id:"CommunityRating,SortName"},{name:c.ZP.translate("OptionDateAdded"),id:"DateCreated,SortName"},{name:c.ZP.translate("OptionDatePlayed"),id:"DatePlayed,SortName"},{name:c.ZP.translate("OptionParentalRating"),id:"OfficialRating,SortName"},{name:c.ZP.translate("OptionPlayCount"),id:"PlayCount,SortName"},{name:c.ZP.translate("OptionReleaseDate"),id:"PremiereDate,SortName"}],callback:function(){y().StartIndex=0,P()},query:y(),button:e.target})})),this.renderTab=function(){var e;P(),null===(e=m.alphaPicker)||void 0===e||e.updateControls(y())}}a(82427)},92609:function(e,t,a){a(25901),a(92189),a(91047),a(72410),a(15610),a(5769),a(48410),a(61013),a(63238),a(61418),a(17460),a(14078),a(52077),a(911);var n=a(60934),r=a(94994);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var o={getSavedQueryKey:function(e){return window.location.href.split("#")[0]+(e||"")},loadSavedQueryValues:function(e,t){var a=n.get(e);return a?(a=JSON.parse(a),Object.assign(t,a)):t},saveQueryValues:function(e,t){var a={};t.SortBy&&(a.SortBy=t.SortBy),t.SortOrder&&(a.SortOrder=t.SortOrder),n.set(e,JSON.stringify(a))},saveViewSetting:function(e,t){n.set(e+"-_view",t)},getSavedView:function(e){return n.get(e+"-_view")},showLayoutMenu:function(e,t,n){var i=!0;n||(i=!1,n=(n=e.getAttribute("data-layouts"))?n.split(","):["List","Poster","PosterCard","Thumb","ThumbCard"]);var o=n.map((function(e){return{name:r.ZP.translate(e),id:e,selected:t==e}}));a.e(12801).then(a.bind(a,12801)).then((function(t){t.default.show({items:o,positionTo:e,callback:function(t){e.dispatchEvent(new CustomEvent("layoutchange",{detail:{viewStyle:t},bubbles:!0,cancelable:!1})),!i&&window.$&&$(e).trigger("layoutchange",[t])}})}))},getQueryPagingHtml:function(e){var t=e.startIndex,a=e.limit,n=e.totalRecordCount,i="",o=n?t+1:0,l=a?Math.min(t+a,n):n,s=a>0&&a<n;return i+='<div class="listPaging">',i+='<span style="vertical-align:middle;">',i+=r.ZP.translate("ListPaging",o,l,n),i+="</span>",(s||e.viewButton||e.filterButton||e.sortButton||e.addLayoutButton)&&(i+='<div style="display:inline-block;">',s&&(i+='<button is="paper-icon-button-light" class="btnPreviousPage autoSize" '+(t?"":"disabled")+'><span class="material-icons arrow_back" aria-hidden="true"></span></button>',i+='<button is="paper-icon-button-light" class="btnNextPage autoSize" '+(t+a>=n?"disabled":"")+'><span class="material-icons arrow_forward" aria-hidden="true"></span></button>'),e.addLayoutButton&&(i+='<button is="paper-icon-button-light" title="'+r.ZP.translate("ButtonSelectView")+'" class="btnChangeLayout autoSize" data-layouts="'+(e.layouts||"")+'" onclick="LibraryBrowser.showLayoutMenu(this, \''+(e.currentLayout||"")+'\');"><span class="material-icons view_comfy" aria-hidden="true"></span></button>'),e.sortButton&&(i+='<button is="paper-icon-button-light" class="btnSort autoSize" title="'+r.ZP.translate("Sort")+'"><span class="material-icons sort_by_alpha" aria-hidden="true"></span></button>'),e.filterButton&&(i+='<button is="paper-icon-button-light" class="btnFilter autoSize" title="'+r.ZP.translate("Filter")+'"><span class="material-icons filter_list" aria-hidden="true"></span></button>'),i+="</div>"),i+"</div>"},showSortMenu:function(e){Promise.all([Promise.resolve().then(a.bind(a,93355)),a.e(92144).then(a.bind(a,92144))]).then((function(t){var a=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,i,o,l=[],s=!0,u=!1;try{if(i=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;s=!1}else for(;!(s=(n=i.call(a)).done)&&(l.push(n.value),l.length!==t);s=!0);}catch(e){u=!0,r=e}finally{try{if(!s&&null!=a.return&&(o=a.return(),Object(o)!==o))return}finally{if(u)throw r}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t,1)[0].default;function n(){var t=this.value;if(this.checked){var a=e.query.SortBy!=t;e.query.SortBy=t.replace("_",","),e.query.StartIndex=0,e.callback&&a&&e.callback()}}function o(){var t=this.value;if(this.checked){var a=e.query.SortOrder!=t;e.query.SortOrder=t,e.query.StartIndex=0,e.callback&&a&&e.callback()}}var l=a.createDialog({removeOnClose:!0,modal:!1,entryAnimationDuration:160,exitAnimationDuration:200});l.classList.add("ui-body-a"),l.classList.add("background-theme-a"),l.classList.add("formDialog");var s,u,c,d="";for(d+='<div style="margin:0;padding:1.25em 1.5em 1.5em;">',d+='<h2 style="margin:0 0 .5em;">',d+=r.ZP.translate("HeaderSortBy"),d+="</h2>",d+="<div>",s=0,u=e.items.length;s<u;s++){var v=e.items[s],h=v.id.replace(",","_");c=(e.query.SortBy||"").replace(",","_")==h?" checked":"",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortBy" data-id="'+v.id+'" value="'+h+'" class="menuSortBy" '+c+" /><span>"+v.name+"</span></label>"}d+="</div>",d+='<h2 style="margin: 1em 0 .5em;">',d+=r.ZP.translate("HeaderSortOrder"),d+="</h2>",d+="<div>",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Ascending" class="menuSortOrder" '+(c="Ascending"==e.query.SortOrder?" checked":"")+" /><span>"+r.ZP.translate("Ascending")+"</span></label>",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Descending" class="menuSortOrder" '+(c="Descending"==e.query.SortOrder?" checked":"")+" /><span>"+r.ZP.translate("Descending")+"</span></label>",d+="</div>",d+="</div>",l.innerHTML=d,a.open(l);var m=l.querySelectorAll(".menuSortBy");for(s=0,u=m.length;s<u;s++)m[s].addEventListener("change",n);var f=l.querySelectorAll(".menuSortOrder");for(s=0,u=f.length;s<u;s++)f[s].addEventListener("change",o)}))}};window.LibraryBrowser=o,t.ZP=o}}]);