"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7488],{71033:function(e,t,a){a.d(t,{w:function(){return v},Z:function(){return p}}),a(23938),a(61013),a(19068),a(87211),a(25901),a(92189),a(63238),a(95163),a(99785),a(91047),a(5769),a(17460),a(14078);var r=a(27515),n=a(78695),i=a(83094),o=a(1892),l=a.n(o),s=a(97672);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,n=function(e,t){if("object"!==c(e)||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t);if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key,"string"),"symbol"===c(n)?n:String(n)),r)}var n}l()(s.Z,{insert:"head",singleton:!1}),s.Z.locals,a(21865),a(56561);var d="alphaPickerButton-selected";function m(){var e=this.querySelector(".".concat(d));e?r.Z.focus(e):r.Z.autoFocus(this,!0)}function f(e){var t="alphaPickerButton";return n.Z.tv&&(t+=" alphaPickerButton-tv"),e&&(t+=" alphaPickerButton-vertical"),t}function h(e,t){return e.map((function(e){return function(e,t){return'<button data-value="'.concat(e,'" class="').concat(f(t),'">').concat(e,"</button>")}(e,t)}))}var v=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var a=this;this.options=t;var r,o,l,s,c=t.element,u=t.itemsContainer,d=t.itemClass;function v(){o=null,a.value(r)}function p(){if(s=null,document.activeElement===l){var e=l.getAttribute("data-value");a.value(e,!0)}}function y(e){var t=i.ZP.parentWithClass(e.target,"alphaPickerButton");if(t){var a=t.getAttribute("data-value");c.dispatchEvent(new CustomEvent("alphavalueclicked",{cancelable:!1,detail:{value:a}}))}}function b(e){var t=i.ZP.parentWithClass(e.target,"alphaPickerButton");if(t){var a=t.getAttribute("data-value");(this._currentValue||"").toUpperCase()===a.toUpperCase()?this.value(null,!0):this.value(a,!0)}}function g(e){s&&(clearTimeout(s),s=null);var t=i.ZP.parentWithClass(e.target,"alphaPickerButton");t&&(l=t,s=setTimeout(p,600))}function P(e){var t=i.ZP.parentWithClass(e.target,d);if(t){var a=t.getAttribute("data-prefix");a&&a.length&&(r=a[0],o&&clearTimeout(o),o=setTimeout(v,100))}}this.enabled=function(e){e?(u&&u.addEventListener("focus",P,!0),"keyboard"===t.mode&&c.addEventListener("click",y),"click"!==t.valueChangeEvent?c.addEventListener("focus",g,!0):c.addEventListener("click",b.bind(this))):(u&&u.removeEventListener("focus",P,!0),c.removeEventListener("click",y),c.removeEventListener("focus",g,!0),c.removeEventListener("click",b.bind(this)))},function(e,t){e.classList.add("alphaPicker"),n.Z.tv&&e.classList.add("alphaPicker-tv");var a=e.classList.contains("alphaPicker-vertical");a||e.classList.add("focuscontainer-x");var r,i="",o=f(a),l="alphaPickerRow";a&&(l+=" alphaPickerRow-vertical"),i+='<div class="'.concat(l,'">'),"keyboard"===t.mode?i+='<button data-value=" " is="paper-icon-button-light" class="'.concat(o,'"><span class="material-icons alphaPickerButtonIcon space_bar"></span></button>'):i+=h(r=["#"],a).join(""),i+=h(r=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],a).join(""),"keyboard"===t.mode?(i+='<button data-value="backspace" is="paper-icon-button-light" class="'.concat(o,'"><span class="material-icons alphaPickerButtonIcon backspace"></span></button>'),i+="</div>",r=["0","1","2","3","4","5","6","7","8","9"],i+='<div class="'.concat(l,'">'),i+="<br/>",i+=h(r,a).join(""),i+="</div>"):i+="</div>",e.innerHTML=i,e.classList.add("focusable"),e.focus=m}(c,t),this.enabled(!0),this.visible(!0)}var t,a;return t=e,(a=[{key:"value",value:function(e,t){var a,r,n=this.options.element;if(void 0!==e)if(null!=e){if(e=e.toUpperCase(),this._currentValue=e,"keyboard"!==this.options.mode){r=n.querySelector(".".concat(d));try{a=n.querySelector(".alphaPickerButton[data-value='".concat(e,"']"))}catch(e){console.error("error in querySelector:",e)}a&&a!==r&&a.classList.add(d),r&&r!==a&&r.classList.remove(d)}}else this._currentValue=e,(r=n.querySelector(".".concat(d)))&&r.classList.remove(d);return t&&n.dispatchEvent(new CustomEvent("alphavaluechanged",{cancelable:!1,detail:{value:e}})),this._currentValue}},{key:"on",value:function(e,t){this.options.element.addEventListener(e,t)}},{key:"off",value:function(e,t){this.options.element.removeEventListener(e,t)}},{key:"visible",value:function(e){this.options.element.style.visibility=e?"visible":"hidden"}},{key:"values",value:function(){for(var e=this.options.element.querySelectorAll(".alphaPickerButton"),t=[],a=0,r=e.length;a<r;a++)t.push(e[a].getAttribute("data-value"));return t}},{key:"focus",value:function(){var e=this.options.element;r.Z.autoFocus(e,!0)}},{key:"destroy",value:function(){var e=this.options.element;this.enabled(!1),e.classList.remove("focuscontainer-x"),this.options=null}}])&&u(t.prototype,a),Object.defineProperty(t,"prototype",{writable:!1}),e}(),p=v},32109:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}}),a(5769),a(27471),a(63238),a(61418),a(17460),a(14078),a(52077),a(72482),a(72410),a(15610),a(25901),a(92189),a(91047);var r=a(6594),n=a(28978),i=a(47005),o=a(2587),l=a(71033),s=a(66056),c=a(61097),u=a(53754);function d(e,t){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,t){if(e){if("string"==typeof e)return m(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?m(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,l=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return o=e.done,e},e:function(e){l=!0,i=e},f:function(){try{o||null==a.return||a.return()}finally{if(l)throw i}}}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function f(e,t,m,f){var h=this,v=function(){"List"==h.getCurrentViewStyle()?(P.classList.add("vertical-list"),P.classList.remove("vertical-wrap")):(P.classList.remove("vertical-list"),P.classList.add("vertical-wrap")),P.innerHTML=""},p=function(){h.alphaPicker&&(h.alphaPicker.value(w.NameStartsWith),0===w.SortBy.indexOf("SortName")?h.alphaPicker.visible(!0):h.alphaPicker.visible(!1))};function y(){return x=!0,r.ZP.show(),ApiClient.getItems(ApiClient.getCurrentUserId(),w)}function b(e){function t(){x||(n.libraryPageSize()>0&&(w.StartIndex+=w.Limit),P.refreshItems())}function i(){x||(n.libraryPageSize()>0&&(w.StartIndex=Math.max(0,w.StartIndex-w.Limit)),P.refreshItems())}window.scrollTo(0,0),p();var l,s=o.ZP.getQueryPagingHtml({startIndex:w.StartIndex,limit:w.Limit,totalRecordCount:e.TotalRecordCount,showLimit:!1,updatePageSizeSetting:!1,addLayoutButton:!1,sortButton:!1,filterButton:!1}),c=d(m.querySelectorAll(".paging"));try{for(c.s();!(l=c.n()).done;)l.value.innerHTML=s}catch(e){c.e(e)}finally{c.f()}var u,f=d(m.querySelectorAll(".btnNextPage"));try{for(f.s();!(u=f.n()).done;)u.value.addEventListener("click",t)}catch(e){f.e(e)}finally{f.f()}var h,v=d(m.querySelectorAll(".btnPreviousPage"));try{for(v.s();!(h=v.n()).done;)h.value.addEventListener("click",i)}catch(e){v.e(e)}finally{v.f()}x=!1,r.ZP.hide(),Promise.resolve().then(a.bind(a,6610)).then((function(e){e.default.autoFocus(m)}))}var g=function(e){var t=h.getCurrentViewStyle();return"Thumb"==t?c.default.getCardsHtml({items:e,shape:"backdrop",preferThumb:!0,context:"movies",lazy:!0,overlayPlayButton:!0,showTitle:!0,showYear:!0,centerText:!0}):"ThumbCard"==t?c.default.getCardsHtml({items:e,shape:"backdrop",preferThumb:!0,context:"movies",lazy:!0,cardLayout:!0,showTitle:!0,showYear:!0,centerText:!0}):"Banner"==t?c.default.getCardsHtml({items:e,shape:"banner",preferBanner:!0,context:"movies",lazy:!0}):"List"==t?s.Z.getListViewHtml({items:e,context:"movies",sortBy:w.SortBy}):"PosterCard"==t?c.default.getCardsHtml({items:e,shape:"portrait",context:"movies",showTitle:!0,showYear:!0,centerText:!0,lazy:!0,cardLayout:!0}):c.default.getCardsHtml({items:e,shape:"portrait",context:"movies",overlayPlayButton:!0,showTitle:!0,showYear:!0,centerText:!0})},P=m.querySelector(".itemsContainer"),S=t.topParentId+"-"+f.mode,k=S+"-view",w={SortBy:"SortName,ProductionYear",SortOrder:"Ascending",IncludeItemTypes:"Movie",Recursive:!0,Fields:"PrimaryImageAspectRatio,MediaSourceCount,BasicSyncInfo",ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb",StartIndex:0,ParentId:t.topParentId};n.libraryPageSize()>0&&(w.Limit=n.libraryPageSize());var x=!1;"favorites"===f.mode&&(w.IsFavorite=!0),w=n.loadQuerySettings(S,w),this.showFilterMenu=function(){a.e(3201).then(a.bind(a,83201)).then((function(e){var t=new(0,e.default)({query:w,mode:"movies",serverId:ApiClient.serverId()});i.Events.on(t,"filterchange",(function(){w.StartIndex=0,P.refreshItems()})),t.show()}))},this.getCurrentViewStyle=function(){return n.get(k)||"Poster"},this.initTab=function(){!function(e){P.fetchData=y,P.getItemsHtml=g,P.afterRefresh=b;var t=e.querySelector(".alphaPicker");t&&(t.addEventListener("alphavaluechanged",(function(e){var t=e.detail.value;w.NameStartsWith=t,w.StartIndex=0,P.refreshItems()})),h.alphaPicker=new l.w({element:t,valueChangeEvent:"click"}),e.querySelector(".alphaPicker").classList.add("alphabetPicker-right"),t.classList.add("alphaPicker-fixed-right"),P.classList.add("padded-right-withalphapicker"));var a=e.querySelector(".btnFilter");a&&a.addEventListener("click",(function(){h.showFilterMenu()}));var r=e.querySelector(".btnSort");r&&r.addEventListener("click",(function(e){o.ZP.showSortMenu({items:[{name:u.ZP.translate("Name"),id:"SortName,ProductionYear"},{name:u.ZP.translate("OptionImdbRating"),id:"CommunityRating,SortName,ProductionYear"},{name:u.ZP.translate("OptionCriticRating"),id:"CriticRating,SortName,ProductionYear"},{name:u.ZP.translate("OptionDateAdded"),id:"DateCreated,SortName,ProductionYear"},{name:u.ZP.translate("OptionDatePlayed"),id:"DatePlayed,SortName,ProductionYear"},{name:u.ZP.translate("OptionParentalRating"),id:"OfficialRating,SortName,ProductionYear"},{name:u.ZP.translate("OptionPlayCount"),id:"PlayCount,SortName,ProductionYear"},{name:u.ZP.translate("OptionReleaseDate"),id:"PremiereDate,SortName,ProductionYear"},{name:u.ZP.translate("Runtime"),id:"Runtime,SortName,ProductionYear"}],callback:function(){w.StartIndex=0,n.saveQuerySettings(S,w),P.refreshItems()},query:w,button:e.target})}));var i=e.querySelector(".btnSelectView");i.addEventListener("click",(function(e){o.ZP.showLayoutMenu(e.target,h.getCurrentViewStyle(),"Banner,List,Poster,PosterCard,Thumb,ThumbCard".split(","))})),i.addEventListener("layoutchange",(function(e){var t=e.detail.viewStyle;n.set(k,t),w.StartIndex=0,v(),P.refreshItems()}))}(m),v()},this.renderTab=function(){P.refreshItems(),p()},this.destroy=function(){P=null}}a(32420)},2587:function(e,t,a){a(25901),a(92189),a(91047),a(72410),a(15610),a(5769),a(52077),a(72482),a(48410),a(61013),a(63238),a(61418),a(17460),a(14078),a(911);var r=a(28978),n=a(53754);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var o={getSavedQueryKey:function(e){return window.location.href.split("#")[0]+(e||"")},loadSavedQueryValues:function(e,t){var a=r.get(e);return a?(a=JSON.parse(a),Object.assign(t,a)):t},saveQueryValues:function(e,t){var a={};t.SortBy&&(a.SortBy=t.SortBy),t.SortOrder&&(a.SortOrder=t.SortOrder),r.set(e,JSON.stringify(a))},saveViewSetting:function(e,t){r.set(e+"-_view",t)},getSavedView:function(e){return r.get(e+"-_view")},showLayoutMenu:function(e,t,r){var i=!0;r||(i=!1,r=(r=e.getAttribute("data-layouts"))?r.split(","):["List","Poster","PosterCard","Thumb","ThumbCard"]);var o=r.map((function(e){return{name:n.ZP.translate(e),id:e,selected:t==e}}));Promise.resolve().then(a.bind(a,32465)).then((function(t){t.default.show({items:o,positionTo:e,callback:function(t){e.dispatchEvent(new CustomEvent("layoutchange",{detail:{viewStyle:t},bubbles:!0,cancelable:!1})),i||window.$&&$(e).trigger("layoutchange",[t])}})}))},getQueryPagingHtml:function(e){var t=e.startIndex,a=e.limit,r=e.totalRecordCount,i="",o=Math.min(t+a,r),l=a<r;return i+='<div class="listPaging">',l&&(i+='<span style="vertical-align:middle;">',i+=n.ZP.translate("ListPaging",r?t+1:0,o,r),i+="</span>"),(l||e.viewButton||e.filterButton||e.sortButton||e.addLayoutButton)&&(i+='<div style="display:inline-block;">',l&&(i+='<button is="paper-icon-button-light" class="btnPreviousPage autoSize" '+(t?"":"disabled")+'><span class="material-icons arrow_back"></span></button>',i+='<button is="paper-icon-button-light" class="btnNextPage autoSize" '+(t+a>=r?"disabled":"")+'><span class="material-icons arrow_forward"></span></button>'),e.addLayoutButton&&(i+='<button is="paper-icon-button-light" title="'+n.ZP.translate("ButtonSelectView")+'" class="btnChangeLayout autoSize" data-layouts="'+(e.layouts||"")+'" onclick="LibraryBrowser.showLayoutMenu(this, \''+(e.currentLayout||"")+'\');"><span class="material-icons view_comfy"></span></button>'),e.sortButton&&(i+='<button is="paper-icon-button-light" class="btnSort autoSize" title="'+n.ZP.translate("Sort")+'"><span class="material-icons sort_by_alpha"></span></button>'),e.filterButton&&(i+='<button is="paper-icon-button-light" class="btnFilter autoSize" title="'+n.ZP.translate("Filter")+'"><span class="material-icons filter_list"></span></button>'),i+="</div>"),i+"</div>"},showSortMenu:function(e){Promise.all([Promise.resolve().then(a.bind(a,1115)),a.e(1674).then(a.bind(a,21674))]).then((function(t){var a=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r,n,i,o,l=[],s=!0,c=!1;try{if(i=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;s=!1}else for(;!(s=(r=i.call(a)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(e){c=!0,n=e}finally{try{if(!s&&null!=a.return&&(o=a.return(),Object(o)!==o))return}finally{if(c)throw n}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t,1)[0].default;function r(){var t=this.value;if(this.checked){var a=e.query.SortBy!=t;e.query.SortBy=t.replace("_",","),e.query.StartIndex=0,e.callback&&a&&e.callback()}}function o(){var t=this.value;if(this.checked){var a=e.query.SortOrder!=t;e.query.SortOrder=t,e.query.StartIndex=0,e.callback&&a&&e.callback()}}var l=a.createDialog({removeOnClose:!0,modal:!1,entryAnimationDuration:160,exitAnimationDuration:200});l.classList.add("ui-body-a"),l.classList.add("background-theme-a"),l.classList.add("formDialog");var s,c,u,d="";for(d+='<div style="margin:0;padding:1.25em 1.5em 1.5em;">',d+='<h2 style="margin:0 0 .5em;">',d+=n.ZP.translate("HeaderSortBy"),d+="</h2>",d+="<div>",s=0,c=e.items.length;s<c;s++){var m=e.items[s],f=m.id.replace(",","_");u=(e.query.SortBy||"").replace(",","_")==f?" checked":"",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortBy" data-id="'+m.id+'" value="'+f+'" class="menuSortBy" '+u+" /><span>"+m.name+"</span></label>"}d+="</div>",d+='<h2 style="margin: 1em 0 .5em;">',d+=n.ZP.translate("HeaderSortOrder"),d+="</h2>",d+="<div>",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Ascending" class="menuSortOrder" '+(u="Ascending"==e.query.SortOrder?" checked":"")+" /><span>"+n.ZP.translate("Ascending")+"</span></label>",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Descending" class="menuSortOrder" '+(u="Descending"==e.query.SortOrder?" checked":"")+" /><span>"+n.ZP.translate("Descending")+"</span></label>",d+="</div>",d+="</div>",l.innerHTML=d,a.open(l);var h=l.querySelectorAll(".menuSortBy");for(s=0,c=h.length;s<c;s++)h[s].addEventListener("change",r);var v=l.querySelectorAll(".menuSortOrder");for(s=0,c=v.length;s<c;s++)v[s].addEventListener("change",o)}))}};window.LibraryBrowser=o,t.ZP=o},97672:function(e,t,a){var r=a(93476),n=a.n(r)()((function(e){return e[1]}));n.push([e.id,".alphaPicker{text-align:center;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-align-self:center;align-self:center}.alphaPicker-vertical{line-height:1}.alphaPicker-fixed{position:fixed;bottom:5.5em}.alphaPickerRow{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-direction:row;flex-direction:row}.alphaPickerRow-vertical{-webkit-flex-direction:column;flex-direction:column}.alphaPickerButton{border:0!important;cursor:pointer;outline:none!important;vertical-align:middle;font-family:inherit;font-size:inherit;min-width:0;margin:0;padding:.1em .4em;width:auto;border-radius:.1em;font-weight:400;-webkit-flex-shrink:0;flex-shrink:0;-webkit-flex-grow:1;flex-grow:1}@media (max-height:50em){.alphaPicker-fixed{bottom:5em}.alphaPickerButton-vertical{padding-top:1px!important;padding-bottom:1px!important}}@media (max-height:49em){.alphaPicker-vertical{font-size:94%}}@media (max-height:44em){.alphaPicker-vertical{font-size:90%}.alphaPickerButton-vertical{padding-top:0!important;padding-bottom:0!important}}@media (max-height:37em){.alphaPicker-vertical{font-size:82%}}@media (max-height:32em){.alphaPicker-vertical{font-size:74%}}.alphaPicker-vertical.alphaPicker-tv{font-size:86%}.alphaPickerButton-tv.alphaPickerButton-vertical{padding:0}.alphaPickerButton-vertical{width:1.5em;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;text-align:center}.alphaPickerButtonIcon{font-size:100%!important}.alphaPicker-fixed.alphaPicker-tv{bottom:1%}.alphaPicker-fixed-right{right:.4em}@media (min-width:62.5em){.alphaPicker-fixed-right{right:1em}}@media (max-height:31.25em){.alphaPicker-fixed{display:none!important}}",""]),t.Z=n}}]);