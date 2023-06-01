"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[23504],{12658:function(e,t,a){a.d(t,{w:function(){return h}}),a(23938),a(61013),a(27471),a(19068),a(87211),a(25901),a(92189),a(63238),a(95163),a(99785),a(91047),a(5769),a(17460),a(14078);var r=a(34643),n=a(30325),i=a(72365),o=a(94994);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,n=function(e,t){if("object"!==l(e)||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===l(n)?n:String(n)),r)}var n}a(61414);var u="alphaPickerButton-selected";function c(){var e=this.querySelector(".".concat(u));e?r.Z.focus(e):r.Z.autoFocus(this,!0)}function d(e){var t="alphaPickerButton";return n.Z.tv&&(t+=" alphaPickerButton-tv"),e&&(t+=" alphaPickerButton-vertical"),t}function v(e,t){return e.map((function(e){return function(e,t){return'<button data-value="'.concat(e,'" class="').concat(d(t),'">').concat(e,"</button>")}(e,t)}))}var h=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var a=this;this.options=t;var r,l,s,u,h=t.element,y=t.itemsContainer,p=t.itemClass;function f(){l=null,a.value(r)}function m(){if(u=null,document.activeElement===s){var e=s.getAttribute("data-value");a.value(e,!0)}}function b(e){var t=i.ZP.parentWithClass(e.target,"alphaPickerButton");if(t){var a=t.getAttribute("data-value");h.dispatchEvent(new CustomEvent("alphavalueclicked",{cancelable:!1,detail:{value:a}}))}}function g(e){var t=i.ZP.parentWithClass(e.target,"alphaPickerButton");if(t){var a=t.getAttribute("data-value");(this._currentValue||"").toUpperCase()===a.toUpperCase()?this.value(null,!0):this.value(a,!0)}}function S(e){u&&(clearTimeout(u),u=null);var t=i.ZP.parentWithClass(e.target,"alphaPickerButton");t&&(s=t,u=setTimeout(m,600))}function P(e){var t=i.ZP.parentWithClass(e.target,p);if(t){var a=t.getAttribute("data-prefix");null!=a&&a.length&&(r=a[0],l&&clearTimeout(l),l=setTimeout(f,100))}}this.enabled=function(e){e?(y&&y.addEventListener("focus",P,!0),"keyboard"===t.mode&&h.addEventListener("click",b),"click"!==t.valueChangeEvent?h.addEventListener("focus",S,!0):h.addEventListener("click",g.bind(this))):(y&&y.removeEventListener("focus",P,!0),h.removeEventListener("click",b),h.removeEventListener("focus",S,!0),h.removeEventListener("click",g.bind(this)))},function(e,t){e.classList.add("alphaPicker"),n.Z.tv&&e.classList.add("alphaPicker-tv");var a=e.classList.contains("alphaPicker-vertical");a||e.classList.add("focuscontainer-x");var r,i="",l=d(a),s="alphaPickerRow";a&&(s+=" alphaPickerRow-vertical"),i+='<div class="'.concat(s,'">'),"keyboard"===t.mode?i+='<button data-value=" " is="paper-icon-button-light" class="'.concat(l,'" aria-label="').concat(o.ZP.translate("ButtonSpace"),'"><span class="material-icons alphaPickerButtonIcon space_bar" aria-hidden="true"></span></button>'):i+=v(r=["#"],a).join(""),i+=v(r=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],a).join(""),"keyboard"===t.mode?(i+='<button data-value="backspace" is="paper-icon-button-light" class="'.concat(l,'" aria-label="').concat(o.ZP.translate("ButtonBackspace"),'"><span class="material-icons alphaPickerButtonIcon backspace" aria-hidden="true"></span></button>'),i+="</div>",r=["0","1","2","3","4","5","6","7","8","9"],i+='<div class="'.concat(s,'">'),i+="<br/>",i+=v(r,a).join(""),i+="</div>"):i+="</div>",e.innerHTML=i,e.classList.add("focusable"),e.focus=c}(h,t),this.enabled(!0),this.visible(!0)}var t,a;return t=e,(a=[{key:"value",value:function(e,t){var a,r,n=this.options.element;if(void 0!==e)if(null!=e){if(e=e.toUpperCase(),this._currentValue=e,"keyboard"!==this.options.mode){r=n.querySelector(".".concat(u));try{a=n.querySelector(".alphaPickerButton[data-value='".concat(e,"']"))}catch(e){console.error("error in querySelector:",e)}a&&a!==r&&a.classList.add(u),r&&r!==a&&r.classList.remove(u)}}else this._currentValue=e,(r=n.querySelector(".".concat(u)))&&r.classList.remove(u);return t&&n.dispatchEvent(new CustomEvent("alphavaluechanged",{cancelable:!1,detail:{value:e}})),this._currentValue}},{key:"on",value:function(e,t){this.options.element.addEventListener(e,t)}},{key:"off",value:function(e,t){this.options.element.removeEventListener(e,t)}},{key:"updateControls",value:function(e){e.NameLessThan?this.value("#"):this.value(e.NameStartsWith),this.visible(-1!==e.SortBy.indexOf("SortName"))}},{key:"visible",value:function(e){this.options.element.style.visibility=e?"visible":"hidden"}},{key:"values",value:function(){for(var e=this.options.element.querySelectorAll(".alphaPickerButton"),t=[],a=0,r=e.length;a<r;a++)t.push(e[a].getAttribute("data-value"));return t}},{key:"focus",value:function(){var e=this.options.element;r.Z.autoFocus(e,!0)}},{key:"destroy",value:function(){var e=this.options.element;this.enabled(!1),e.classList.remove("focuscontainer-x"),this.options=null}}])&&s(t.prototype,a),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.Z=h},23504:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}}),a(5769),a(63238),a(61418),a(17460),a(14078);var r=a(28540),n=a(92609),i=a(98301),o=a(12658),l=a(63873),s=a(61570),u=a(60934),c=a(81643);function d(e,t,d){var v=this;function h(e){var a=p(e),r=b[a];if(!r){var i={SortBy:"SortName",SortOrder:"Ascending",Recursive:!0,Fields:"PrimaryImageAspectRatio,SortName,BasicSyncInfo",StartIndex:0,ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb"};u.libraryPageSize()>0&&(i.Limit=u.libraryPageSize()),(r=b[a]={query:i,view:n.ZP.getSavedView(a)||"Poster"}).query.ParentId=t.topParentId,n.ZP.loadSavedQueryValues(a,r.query)}return r}function y(e){return h(e).query}var p=function(e){return e.savedQueryKey||(e.savedQueryKey=n.ZP.getSavedQueryKey(v.mode)),e.savedQueryKey},f=function(){var e=v.getCurrentViewStyle(),t=d.querySelector(".itemsContainer");"List"==e?(t.classList.add("vertical-list"),t.classList.remove("vertical-wrap")):(t.classList.remove("vertical-list"),t.classList.add("vertical-wrap")),t.innerHTML=""},m=function e(t){r.ZP.show(),g=!0;var o=y(t);("albumartists"==v.mode?ApiClient.getAlbumArtists(ApiClient.getCurrentUserId(),o):ApiClient.getArtists(ApiClient.getCurrentUserId(),o)).then((function(c){var h,y;function f(){g||(u.libraryPageSize()>0&&(o.StartIndex+=o.Limit),e(d))}function m(){g||(u.libraryPageSize()>0&&(o.StartIndex=Math.max(0,o.StartIndex-o.Limit)),e(d))}window.scrollTo(0,0),null===(h=v.alphaPicker)||void 0===h||h.updateControls(o);var b=n.ZP.getQueryPagingHtml({startIndex:o.StartIndex,limit:o.Limit,totalRecordCount:c.TotalRecordCount,showLimit:!1,updatePageSizeSetting:!1,addLayoutButton:!1,sortButton:!1,filterButton:!1}),S=v.getCurrentViewStyle();y="List"==S?l.Z.getListViewHtml({items:c.Items,sortBy:o.SortBy}):"PosterCard"==S?s.default.getCardsHtml({items:c.Items,shape:"square",context:"music",showTitle:!0,coverImage:!0,cardLayout:!0}):s.default.getCardsHtml({items:c.Items,shape:"square",context:"music",showTitle:!0,coverImage:!0,lazy:!0,centerText:!0,overlayPlayButton:!0});for(var P=d.querySelectorAll(".paging"),k=0,w=P.length;k<w;k++)P[k].innerHTML=b;for(var L=0,C=(P=d.querySelectorAll(".btnNextPage")).length;L<C;L++)P[L].addEventListener("click",f);for(var B=0,A=(P=d.querySelectorAll(".btnPreviousPage")).length;B<A;B++)P[B].addEventListener("click",m);var q=d.querySelector(".itemsContainer");q.innerHTML=y,i.default.lazyChildren(q),n.ZP.saveQueryValues(p(t),o),r.ZP.hide(),g=!1,Promise.resolve().then(a.bind(a,87680)).then((function(e){e.default.autoFocus(d)}))}))},b={},g=!1;this.showFilterMenu=function(){var e=this;a.e(3751).then(a.bind(a,3751)).then((function(t){var a=new(0,t.default)({query:y(d),mode:e.mode,serverId:ApiClient.serverId()});c.Z.on(a,"filterchange",(function(){y(d).StartIndex=0,m(d)})),a.show()}))},this.getCurrentViewStyle=function(){return h(d).view},function(e){var t=e.querySelector(".alphaPicker"),a=e.querySelector(".itemsContainer");t.addEventListener("alphavaluechanged",(function(t){var a=t.detail.value,r=y(e);"#"===a?(r.NameLessThan="A",delete r.NameStartsWith):(r.NameStartsWith=a,delete r.NameLessThan),r.StartIndex=0,m(e)})),v.alphaPicker=new o.w({element:t,valueChangeEvent:"click"}),e.querySelector(".alphaPicker").classList.add("alphabetPicker-right"),t.classList.add("alphaPicker-fixed-right"),a.classList.add("padded-right-withalphapicker"),e.querySelector(".btnFilter").addEventListener("click",(function(){v.showFilterMenu()}));var r=e.querySelector(".btnSelectView");r.addEventListener("click",(function(e){n.ZP.showLayoutMenu(e.target,v.getCurrentViewStyle(),"List,Poster,PosterCard".split(","))})),r.addEventListener("layoutchange",(function(t){var a=t.detail.viewStyle;h(e).view=a,n.ZP.saveViewSetting(p(e),a),y(e).StartIndex=0,f(),m(e)}))}(d),f(),this.renderTab=function(){var e;m(d),null===(e=v.alphaPicker)||void 0===e||e.updateControls(y(d))}}a(82427)},92609:function(e,t,a){a(25901),a(92189),a(91047),a(72410),a(15610),a(5769),a(48410),a(61013),a(63238),a(61418),a(17460),a(14078),a(52077),a(911);var r=a(60934),n=a(94994);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var o={getSavedQueryKey:function(e){return window.location.href.split("#")[0]+(e||"")},loadSavedQueryValues:function(e,t){var a=r.get(e);return a?(a=JSON.parse(a),Object.assign(t,a)):t},saveQueryValues:function(e,t){var a={};t.SortBy&&(a.SortBy=t.SortBy),t.SortOrder&&(a.SortOrder=t.SortOrder),r.set(e,JSON.stringify(a))},saveViewSetting:function(e,t){r.set(e+"-_view",t)},getSavedView:function(e){return r.get(e+"-_view")},showLayoutMenu:function(e,t,r){var i=!0;r||(i=!1,r=(r=e.getAttribute("data-layouts"))?r.split(","):["List","Poster","PosterCard","Thumb","ThumbCard"]);var o=r.map((function(e){return{name:n.ZP.translate(e),id:e,selected:t==e}}));a.e(12801).then(a.bind(a,12801)).then((function(t){t.default.show({items:o,positionTo:e,callback:function(t){e.dispatchEvent(new CustomEvent("layoutchange",{detail:{viewStyle:t},bubbles:!0,cancelable:!1})),!i&&window.$&&$(e).trigger("layoutchange",[t])}})}))},getQueryPagingHtml:function(e){var t=e.startIndex,a=e.limit,r=e.totalRecordCount,i="",o=r?t+1:0,l=a?Math.min(t+a,r):r,s=a>0&&a<r;return i+='<div class="listPaging">',i+='<span style="vertical-align:middle;">',i+=n.ZP.translate("ListPaging",o,l,r),i+="</span>",(s||e.viewButton||e.filterButton||e.sortButton||e.addLayoutButton)&&(i+='<div style="display:inline-block;">',s&&(i+='<button is="paper-icon-button-light" class="btnPreviousPage autoSize" '+(t?"":"disabled")+'><span class="material-icons arrow_back" aria-hidden="true"></span></button>',i+='<button is="paper-icon-button-light" class="btnNextPage autoSize" '+(t+a>=r?"disabled":"")+'><span class="material-icons arrow_forward" aria-hidden="true"></span></button>'),e.addLayoutButton&&(i+='<button is="paper-icon-button-light" title="'+n.ZP.translate("ButtonSelectView")+'" class="btnChangeLayout autoSize" data-layouts="'+(e.layouts||"")+'" onclick="LibraryBrowser.showLayoutMenu(this, \''+(e.currentLayout||"")+'\');"><span class="material-icons view_comfy" aria-hidden="true"></span></button>'),e.sortButton&&(i+='<button is="paper-icon-button-light" class="btnSort autoSize" title="'+n.ZP.translate("Sort")+'"><span class="material-icons sort_by_alpha" aria-hidden="true"></span></button>'),e.filterButton&&(i+='<button is="paper-icon-button-light" class="btnFilter autoSize" title="'+n.ZP.translate("Filter")+'"><span class="material-icons filter_list" aria-hidden="true"></span></button>'),i+="</div>"),i+"</div>"},showSortMenu:function(e){Promise.all([Promise.resolve().then(a.bind(a,93355)),a.e(92144).then(a.bind(a,92144))]).then((function(t){var a=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r,n,i,o,l=[],s=!0,u=!1;try{if(i=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;s=!1}else for(;!(s=(r=i.call(a)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(e){u=!0,n=e}finally{try{if(!s&&null!=a.return&&(o=a.return(),Object(o)!==o))return}finally{if(u)throw n}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t,1)[0].default;function r(){var t=this.value;if(this.checked){var a=e.query.SortBy!=t;e.query.SortBy=t.replace("_",","),e.query.StartIndex=0,e.callback&&a&&e.callback()}}function o(){var t=this.value;if(this.checked){var a=e.query.SortOrder!=t;e.query.SortOrder=t,e.query.StartIndex=0,e.callback&&a&&e.callback()}}var l=a.createDialog({removeOnClose:!0,modal:!1,entryAnimationDuration:160,exitAnimationDuration:200});l.classList.add("ui-body-a"),l.classList.add("background-theme-a"),l.classList.add("formDialog");var s,u,c,d="";for(d+='<div style="margin:0;padding:1.25em 1.5em 1.5em;">',d+='<h2 style="margin:0 0 .5em;">',d+=n.ZP.translate("HeaderSortBy"),d+="</h2>",d+="<div>",s=0,u=e.items.length;s<u;s++){var v=e.items[s],h=v.id.replace(",","_");c=(e.query.SortBy||"").replace(",","_")==h?" checked":"",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortBy" data-id="'+v.id+'" value="'+h+'" class="menuSortBy" '+c+" /><span>"+v.name+"</span></label>"}d+="</div>",d+='<h2 style="margin: 1em 0 .5em;">',d+=n.ZP.translate("HeaderSortOrder"),d+="</h2>",d+="<div>",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Ascending" class="menuSortOrder" '+(c="Ascending"==e.query.SortOrder?" checked":"")+" /><span>"+n.ZP.translate("Ascending")+"</span></label>",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Descending" class="menuSortOrder" '+(c="Descending"==e.query.SortOrder?" checked":"")+" /><span>"+n.ZP.translate("Descending")+"</span></label>",d+="</div>",d+="</div>",l.innerHTML=d,a.open(l);var y=l.querySelectorAll(".menuSortBy");for(s=0,u=y.length;s<u;s++)y[s].addEventListener("change",r);var p=l.querySelectorAll(".menuSortOrder");for(s=0,u=p.length;s<u;s++)p[s].addEventListener("change",o)}))}};window.LibraryBrowser=o,t.ZP=o}}]);