"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3479],{13594:function(e,t,a){a.d(t,{w:function(){return L},Z:function(){return B}}),a(23938),a(61013),a(27471),a(99785);var n=a(27515),r=a(78695),i=a(83094),o=a(1892),l=a.n(o),s=a(95760),c=a.n(s),u=a(38311),d=a.n(u),h=a(58192),m=a.n(h),v=a(38060),p=a.n(v),f=a(54865),y=a.n(f),b=a(63421),g={};function P(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}g.styleTagTransform=y(),g.setAttributes=m(),g.insert=d().bind(null,"head"),g.domAPI=c(),g.insertStyleElement=p(),l()(b.Z,g),b.Z&&b.Z.locals&&b.Z.locals,a(21865),a(85427);var k="alphaPickerButton-selected";function S(){var e=this.querySelector(".".concat(k));e?n.Z.focus(e):n.Z.autoFocus(this,!0)}function w(e){var t="alphaPickerButton";return r.Z.tv&&(t+=" alphaPickerButton-tv"),e&&(t+=" alphaPickerButton-vertical"),t}function x(e,t){return e.map((function(e){return function(e,t){return'<button data-value="'.concat(e,'" class="').concat(w(t),'">').concat(e,"</button>")}(e,t)}))}var L=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var a=this;this.options=t;var n,o,l,s,c=t.element,u=t.itemsContainer,d=t.itemClass;function h(){o=null,a.value(n)}function m(){if(s=null,document.activeElement===l){var e=l.getAttribute("data-value");a.value(e,!0)}}function v(e){var t=i.ZP.parentWithClass(e.target,"alphaPickerButton");if(t){var a=t.getAttribute("data-value");c.dispatchEvent(new CustomEvent("alphavalueclicked",{cancelable:!1,detail:{value:a}}))}}function p(e){var t=i.ZP.parentWithClass(e.target,"alphaPickerButton");if(t){var a=t.getAttribute("data-value");(this._currentValue||"").toUpperCase()===a.toUpperCase()?this.value(null,!0):this.value(a,!0)}}function f(e){s&&(clearTimeout(s),s=null);var t=i.ZP.parentWithClass(e.target,"alphaPickerButton");t&&(l=t,s=setTimeout(m,600))}function y(e){var t=i.ZP.parentWithClass(e.target,d);if(t){var a=t.getAttribute("data-prefix");a&&a.length&&(n=a[0],o&&clearTimeout(o),o=setTimeout(h,100))}}this.enabled=function(e){e?(u&&u.addEventListener("focus",y,!0),"keyboard"===t.mode&&c.addEventListener("click",v),"click"!==t.valueChangeEvent?c.addEventListener("focus",f,!0):c.addEventListener("click",p.bind(this))):(u&&u.removeEventListener("focus",y,!0),c.removeEventListener("click",v),c.removeEventListener("focus",f,!0),c.removeEventListener("click",p.bind(this)))},function(e,t){e.classList.add("alphaPicker"),r.Z.tv&&e.classList.add("alphaPicker-tv");var a=e.classList.contains("alphaPicker-vertical");a||e.classList.add("focuscontainer-x");var n,i="",o=w(a),l="alphaPickerRow";a&&(l+=" alphaPickerRow-vertical"),i+='<div class="'.concat(l,'">'),"keyboard"===t.mode?i+='<button data-value=" " is="paper-icon-button-light" class="'.concat(o,'"><span class="material-icons alphaPickerButtonIcon space_bar"></span></button>'):i+=x(n=["#"],a).join(""),i+=x(n=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],a).join(""),"keyboard"===t.mode?(i+='<button data-value="backspace" is="paper-icon-button-light" class="'.concat(o,'"><span class="material-icons alphaPickerButtonIcon backspace"></span></button>'),i+="</div>",n=["0","1","2","3","4","5","6","7","8","9"],i+='<div class="'.concat(l,'">'),i+="<br/>",i+=x(n,a).join(""),i+="</div>"):i+="</div>",e.innerHTML=i,e.classList.add("focusable"),e.focus=S}(c,t),this.enabled(!0),this.visible(!0)}var t,a;return t=e,(a=[{key:"value",value:function(e,t){var a,n,r=this.options.element;if(void 0!==e)if(null!=e){if(e=e.toUpperCase(),this._currentValue=e,"keyboard"!==this.options.mode){n=r.querySelector(".".concat(k));try{a=r.querySelector(".alphaPickerButton[data-value='".concat(e,"']"))}catch(e){console.error("error in querySelector:",e)}a&&a!==n&&a.classList.add(k),n&&n!==a&&n.classList.remove(k)}}else this._currentValue=e,(n=r.querySelector(".".concat(k)))&&n.classList.remove(k);return t&&r.dispatchEvent(new CustomEvent("alphavaluechanged",{cancelable:!1,detail:{value:e}})),this._currentValue}},{key:"on",value:function(e,t){this.options.element.addEventListener(e,t)}},{key:"off",value:function(e,t){this.options.element.removeEventListener(e,t)}},{key:"updateControls",value:function(e){e.NameLessThan?this.value("#"):this.value(e.NameStartsWith),this.visible(-1!==e.SortBy.indexOf("SortName"))}},{key:"visible",value:function(e){this.options.element.style.visibility=e?"visible":"hidden"}},{key:"values",value:function(){for(var e=this.options.element.querySelectorAll(".alphaPickerButton"),t=[],a=0,n=e.length;a<n;a++)t.push(e[a].getAttribute("data-value"));return t}},{key:"focus",value:function(){var e=this.options.element;n.Z.autoFocus(e,!0)}},{key:"destroy",value:function(){var e=this.options.element;this.enabled(!1),e.classList.remove("focuscontainer-x"),this.options=null}}])&&P(t.prototype,a),Object.defineProperty(t,"prototype",{writable:!1}),e}(),B=L},21297:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}}),a(5769),a(63238),a(61418),a(17460),a(14078),a(72410),a(15610),a(52077),a(25901),a(92189),a(91047);var n=a(56705),r=a(47005),i=a(2587),o=a(21361),l=a(13594),s=a(66056),c=a(61097),u=a(28978),d=a(44614);function h(e,t){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,t){if(e){if("string"==typeof e)return m(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?m(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,l=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return o=e.done,e},e:function(e){l=!0,i=e},f:function(){try{o||null==a.return||a.return()}finally{if(l)throw i}}}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function v(e,t,m){var v=this;function p(e){var t=y(e),a=g[t];return a||(a=g[t]={query:{SortBy:"SortName",SortOrder:"Ascending",IncludeItemTypes:"Trailer",Recursive:!0,Fields:"PrimaryImageAspectRatio,SortName,BasicSyncInfo",ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb",StartIndex:0},view:i.ZP.getSavedView(t)||"Poster"},u.libraryPageSize()>0&&(a.query.Limit=u.libraryPageSize()),i.ZP.loadSavedQueryValues(t,a.query)),a}function f(e){return p(e).query}function y(e){return e.savedQueryKey||(e.savedQueryKey=i.ZP.getSavedQueryKey("trailers")),e.savedQueryKey}var b=function e(){n.ZP.show(),P=!0;var t=f(m);ApiClient.getItems(ApiClient.getCurrentUserId(),t).then((function(a){var r;function l(){P||(u.libraryPageSize()>0&&(t.StartIndex+=t.Limit),e())}function p(){P||(u.libraryPageSize()>0&&(t.StartIndex=Math.max(0,t.StartIndex-t.Limit)),e())}window.scrollTo(0,0),null===(r=v.alphaPicker)||void 0===r||r.updateControls(t);var f,b=i.ZP.getQueryPagingHtml({startIndex:t.StartIndex,limit:t.Limit,totalRecordCount:a.TotalRecordCount,showLimit:!1,updatePageSizeSetting:!1,addLayoutButton:!1,sortButton:!1,filterButton:!1}),g=v.getCurrentViewStyle();f="Thumb"==g?c.default.getCardsHtml({items:a.Items,shape:"backdrop",preferThumb:!0,context:"movies",overlayPlayButton:!0}):"ThumbCard"==g?c.default.getCardsHtml({items:a.Items,shape:"backdrop",preferThumb:!0,context:"movies",cardLayout:!0,showTitle:!0,showYear:!0,centerText:!0}):"Banner"==g?c.default.getCardsHtml({items:a.Items,shape:"banner",preferBanner:!0,context:"movies"}):"List"==g?s.Z.getListViewHtml({items:a.Items,context:"movies",sortBy:t.SortBy}):"PosterCard"==g?c.default.getCardsHtml({items:a.Items,shape:"portrait",context:"movies",showTitle:!0,showYear:!0,cardLayout:!0,centerText:!0}):c.default.getCardsHtml({items:a.Items,shape:"portrait",context:"movies",centerText:!0,overlayPlayButton:!0,showTitle:!0,showYear:!0});var k,S=m.querySelectorAll(".paging"),w=h(S);try{for(w.s();!(k=w.n()).done;)k.value.innerHTML=b}catch(e){w.e(e)}finally{w.f()}var x,L=h(S=m.querySelectorAll(".btnNextPage"));try{for(L.s();!(x=L.n()).done;)x.value.addEventListener("click",l)}catch(e){L.e(e)}finally{L.f()}var B,C=h(S=m.querySelectorAll(".btnPreviousPage"));try{for(C.s();!(B=C.n()).done;)B.value.addEventListener("click",p)}catch(e){C.e(e)}finally{C.f()}a.Items.length||(f="",f+='<div class="noItemsMessage centerMessage">',f+="<h1>"+d.ZP.translate("MessageNothingHere")+"</h1>",f+="<p>"+d.ZP.translate("MessageNoTrailersFound")+"</p>",f+="</div>");var Z=m.querySelector(".itemsContainer");Z.innerHTML=f,o.default.lazyChildren(Z),i.ZP.saveQueryValues(y(m),t),n.ZP.hide(),P=!1}))},g={},P=!1;this.showFilterMenu=function(){a.e(8872).then(a.bind(a,78872)).then((function(e){var t=new(0,e.default)({query:f(m),mode:"movies",serverId:ApiClient.serverId()});r.Events.on(t,"filterchange",(function(){f(m).StartIndex=0,b()})),t.show()}))},this.getCurrentViewStyle=function(){return p(m).view},function(e){var t=e.querySelector(".alphaPicker"),a=e.querySelector(".itemsContainer");t.addEventListener("alphavaluechanged",(function(t){var a=t.detail.value,n=f(e);"#"===a?(n.NameLessThan="A",delete n.NameStartsWith):(n.NameStartsWith=a,delete n.NameLessThan),n.StartIndex=0,b()})),v.alphaPicker=new l.w({element:t,valueChangeEvent:"click"}),e.querySelector(".alphaPicker").classList.add("alphabetPicker-right"),t.classList.add("alphaPicker-fixed-right"),a.classList.add("padded-right-withalphapicker"),e.querySelector(".btnFilter").addEventListener("click",(function(){v.showFilterMenu()})),e.querySelector(".btnSort").addEventListener("click",(function(t){i.ZP.showSortMenu({items:[{name:d.ZP.translate("Name"),id:"SortName"},{name:d.ZP.translate("OptionImdbRating"),id:"CommunityRating,SortName"},{name:d.ZP.translate("OptionDateAdded"),id:"DateCreated,SortName"},{name:d.ZP.translate("OptionDatePlayed"),id:"DatePlayed,SortName"},{name:d.ZP.translate("OptionParentalRating"),id:"OfficialRating,SortName"},{name:d.ZP.translate("OptionPlayCount"),id:"PlayCount,SortName"},{name:d.ZP.translate("OptionReleaseDate"),id:"PremiereDate,SortName"}],callback:function(){f(e).StartIndex=0,b()},query:f(e),button:t.target})}))}(m),this.renderTab=function(){var e;b(),null===(e=v.alphaPicker)||void 0===e||e.updateControls(f(m))},this.destroy=function(){}}a(32420)},2587:function(e,t,a){a(25901),a(92189),a(91047),a(72410),a(15610),a(5769),a(52077),a(72482),a(48410),a(61013),a(63238),a(61418),a(17460),a(14078),a(911);var n=a(28978),r=a(44614);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var o={getSavedQueryKey:function(e){return window.location.href.split("#")[0]+(e||"")},loadSavedQueryValues:function(e,t){var a=n.get(e);return a?(a=JSON.parse(a),Object.assign(t,a)):t},saveQueryValues:function(e,t){var a={};t.SortBy&&(a.SortBy=t.SortBy),t.SortOrder&&(a.SortOrder=t.SortOrder),n.set(e,JSON.stringify(a))},saveViewSetting:function(e,t){n.set(e+"-_view",t)},getSavedView:function(e){return n.get(e+"-_view")},showLayoutMenu:function(e,t,n){var i=!0;n||(i=!1,n=(n=e.getAttribute("data-layouts"))?n.split(","):["List","Poster","PosterCard","Thumb","ThumbCard"]);var o=n.map((function(e){return{name:r.ZP.translate(e),id:e,selected:t==e}}));Promise.resolve().then(a.bind(a,78407)).then((function(t){t.default.show({items:o,positionTo:e,callback:function(t){e.dispatchEvent(new CustomEvent("layoutchange",{detail:{viewStyle:t},bubbles:!0,cancelable:!1})),i||window.$&&$(e).trigger("layoutchange",[t])}})}))},getQueryPagingHtml:function(e){var t=e.startIndex,a=e.limit,n=e.totalRecordCount,i="",o=Math.min(t+a,n),l=a<n;return i+='<div class="listPaging">',l&&(i+='<span style="vertical-align:middle;">',i+=r.ZP.translate("ListPaging",n?t+1:0,o,n),i+="</span>"),(l||e.viewButton||e.filterButton||e.sortButton||e.addLayoutButton)&&(i+='<div style="display:inline-block;">',l&&(i+='<button is="paper-icon-button-light" class="btnPreviousPage autoSize" '+(t?"":"disabled")+'><span class="material-icons arrow_back"></span></button>',i+='<button is="paper-icon-button-light" class="btnNextPage autoSize" '+(t+a>=n?"disabled":"")+'><span class="material-icons arrow_forward"></span></button>'),e.addLayoutButton&&(i+='<button is="paper-icon-button-light" title="'+r.ZP.translate("ButtonSelectView")+'" class="btnChangeLayout autoSize" data-layouts="'+(e.layouts||"")+'" onclick="LibraryBrowser.showLayoutMenu(this, \''+(e.currentLayout||"")+'\');"><span class="material-icons view_comfy"></span></button>'),e.sortButton&&(i+='<button is="paper-icon-button-light" class="btnSort autoSize" title="'+r.ZP.translate("Sort")+'"><span class="material-icons sort_by_alpha"></span></button>'),e.filterButton&&(i+='<button is="paper-icon-button-light" class="btnFilter autoSize" title="'+r.ZP.translate("Filter")+'"><span class="material-icons filter_list"></span></button>'),i+="</div>"),i+"</div>"},showSortMenu:function(e){Promise.all([Promise.resolve().then(a.bind(a,90914)),a.e(2987).then(a.bind(a,82987))]).then((function(t){var a=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,i=[],o=!0,l=!1;try{for(a=a.call(e);!(o=(n=a.next()).done)&&(i.push(n.value),!t||i.length!==t);o=!0);}catch(e){l=!0,r=e}finally{try{o||null==a.return||a.return()}finally{if(l)throw r}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t,1)[0].default;function n(){var t=this.value;if(this.checked){var a=e.query.SortBy!=t;e.query.SortBy=t.replace("_",","),e.query.StartIndex=0,e.callback&&a&&e.callback()}}function o(){var t=this.value;if(this.checked){var a=e.query.SortOrder!=t;e.query.SortOrder=t,e.query.StartIndex=0,e.callback&&a&&e.callback()}}var l=a.createDialog({removeOnClose:!0,modal:!1,entryAnimationDuration:160,exitAnimationDuration:200});l.classList.add("ui-body-a"),l.classList.add("background-theme-a"),l.classList.add("formDialog");var s,c,u,d="";for(d+='<div style="margin:0;padding:1.25em 1.5em 1.5em;">',d+='<h2 style="margin:0 0 .5em;">',d+=r.ZP.translate("HeaderSortBy"),d+="</h2>",d+="<div>",s=0,c=e.items.length;s<c;s++){var h=e.items[s],m=h.id.replace(",","_");u=(e.query.SortBy||"").replace(",","_")==m?" checked":"",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortBy" data-id="'+h.id+'" value="'+m+'" class="menuSortBy" '+u+" /><span>"+h.name+"</span></label>"}d+="</div>",d+='<h2 style="margin: 1em 0 .5em;">',d+=r.ZP.translate("HeaderSortOrder"),d+="</h2>",d+="<div>",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Ascending" class="menuSortOrder" '+(u="Ascending"==e.query.SortOrder?" checked":"")+" /><span>"+r.ZP.translate("Ascending")+"</span></label>",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Descending" class="menuSortOrder" '+(u="Descending"==e.query.SortOrder?" checked":"")+" /><span>"+r.ZP.translate("Descending")+"</span></label>",d+="</div>",d+="</div>",l.innerHTML=d,a.open(l);var v=l.querySelectorAll(".menuSortBy");for(s=0,c=v.length;s<c;s++)v[s].addEventListener("change",n);var p=l.querySelectorAll(".menuSortOrder");for(s=0,c=p.length;s<c;s++)p[s].addEventListener("change",o)}))}};window.LibraryBrowser=o,t.ZP=o},63421:function(e,t,a){var n=a(54933),r=a.n(n),i=a(93476),o=a.n(i)()(r());o.push([e.id,".alphaPicker{-webkit-align-self:center;align-self:center;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;text-align:center}.alphaPicker-vertical{line-height:1}.alphaPicker-fixed{bottom:5.5em;position:fixed}.alphaPickerRow{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;-webkit-justify-content:center;justify-content:center}.alphaPickerRow-vertical{-webkit-flex-direction:column;flex-direction:column}.alphaPickerButton{border:0!important;border-radius:.1em;cursor:pointer;-webkit-flex-grow:1;flex-grow:1;-webkit-flex-shrink:0;flex-shrink:0;font-family:inherit;font-size:inherit;font-weight:400;margin:0;min-width:0;min-width:auto;outline:none!important;padding:.1em .4em;vertical-align:middle;width:auto}@media (max-height:50em){.alphaPicker-fixed{bottom:5em}.alphaPickerButton-vertical{padding-bottom:1px!important;padding-top:1px!important}}@media (max-height:49em){.alphaPicker-vertical{font-size:94%}}@media (max-height:44em){.alphaPicker-vertical{font-size:90%}.alphaPickerButton-vertical{padding-bottom:0!important;padding-top:0!important}}@media (max-height:37em){.alphaPicker-vertical{font-size:82%}}@media (max-height:32em){.alphaPicker-vertical{font-size:74%}}.alphaPicker-vertical.alphaPicker-tv{font-size:86%}.alphaPickerButton-tv.alphaPickerButton-vertical{padding:0}.alphaPickerButton-vertical{display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;text-align:center;width:1.5em}.alphaPickerButtonIcon{font-size:100%!important}.alphaPicker-fixed.alphaPicker-tv{bottom:1%}.alphaPicker-fixed-right{right:.4em}@media (min-width:62.5em){.alphaPicker-fixed-right{right:1em}}@media (max-height:31.25em){.alphaPicker-fixed{display:none!important}}",""]),t.Z=o}}]);