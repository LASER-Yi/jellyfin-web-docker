"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[61772],{31900:function(t,e,a){a.d(e,{Z:function(){return m}}),a(24776),a(86584),a(84734),a(81678),a(4754),a(29305),a(32733),a(78557),a(94),a(36947),a(84701),a(44962),a(83994),a(82367);var n=a(83775),r=a(46782),i=a(47629),o=a(9482);function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,u(n.key),n)}}function u(t){var e=function(t,e){if("object"!=l(t)||!t)return t;var a=t[Symbol.toPrimitive];if(void 0!==a){var n=a.call(t,"string");if("object"!=l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==l(e)?e:String(e)}a(15453);var c="alphaPickerButton-selected";function d(){var t=this.querySelector(".".concat(c));t?n.A.focus(t):n.A.autoFocus(this,!0)}function v(t){var e="alphaPickerButton";return r.A.tv&&(e+=" alphaPickerButton-tv"),t&&(e+=" alphaPickerButton-vertical"),e}function y(t,e){return t.map((function(t){return function(t,e){return'<button data-value="'.concat(t,'" class="').concat(v(e),'">').concat(t,"</button>")}(t,e)}))}var m=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var a=this;this.options=e;var n,l,s,u,c=e.element,m=e.itemsContainer,h=e.itemClass;function f(){l=null,a.value(n)}function p(){if(u=null,document.activeElement===s){var t=s.getAttribute("data-value");a.value(t,!0)}}function b(t){var e=i.Ay.parentWithClass(t.target,"alphaPickerButton");if(e){var a=e.getAttribute("data-value");c.dispatchEvent(new CustomEvent("alphavalueclicked",{cancelable:!1,detail:{value:a}}))}}function g(t){var e=i.Ay.parentWithClass(t.target,"alphaPickerButton");if(e){var a=e.getAttribute("data-value");(this._currentValue||"").toUpperCase()===a.toUpperCase()?this.value(null,!0):this.value(a,!0)}}function S(t){u&&(clearTimeout(u),u=null);var e=i.Ay.parentWithClass(t.target,"alphaPickerButton");e&&(s=e,u=setTimeout(p,600))}function k(t){var e=i.Ay.parentWithClass(t.target,h);if(e){var a=e.getAttribute("data-prefix");null!=a&&a.length&&(n=a[0],l&&clearTimeout(l),l=setTimeout(f,100))}}this.enabled=function(t){t?(m&&m.addEventListener("focus",k,!0),"keyboard"===e.mode&&c.addEventListener("click",b),"click"!==e.valueChangeEvent?c.addEventListener("focus",S,!0):c.addEventListener("click",g.bind(this))):(m&&m.removeEventListener("focus",k,!0),c.removeEventListener("click",b),c.removeEventListener("focus",S,!0),c.removeEventListener("click",g.bind(this)))},function(t,e){t.classList.add("alphaPicker"),r.A.tv&&t.classList.add("alphaPicker-tv");var a=t.classList.contains("alphaPicker-vertical");a||t.classList.add("focuscontainer-x");var n,i="",l=v(a),s="alphaPickerRow";a&&(s+=" alphaPickerRow-vertical"),i+='<div class="'.concat(s,'">'),"keyboard"===e.mode?i+='<button data-value=" " is="paper-icon-button-light" class="'.concat(l,'" aria-label="').concat(o.Ay.translate("ButtonSpace"),'"><span class="material-icons alphaPickerButtonIcon space_bar" aria-hidden="true"></span></button>'):i+=y(n=["#"],a).join(""),i+=y(n=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],a).join(""),"keyboard"===e.mode?(i+='<button data-value="backspace" is="paper-icon-button-light" class="'.concat(l,'" aria-label="').concat(o.Ay.translate("ButtonBackspace"),'"><span class="material-icons alphaPickerButtonIcon backspace" aria-hidden="true"></span></button>'),i+="</div>",n=["0","1","2","3","4","5","6","7","8","9"],i+='<div class="'.concat(s,'">'),i+="<br/>",i+=y(n,a).join(""),i+="</div>"):i+="</div>",t.innerHTML=i,t.classList.add("focusable"),t.focus=d}(c,e),this.enabled(!0),this.visible(!0)}var e,a;return e=t,(a=[{key:"value",value:function(t,e){var a,n,r=this.options.element;if(void 0!==t)if(null!=t){if(t=t.toUpperCase(),this._currentValue=t,"keyboard"!==this.options.mode){n=r.querySelector(".".concat(c));try{a=r.querySelector(".alphaPickerButton[data-value='".concat(t,"']"))}catch(t){console.error("error in querySelector:",t)}a&&a!==n&&a.classList.add(c),n&&n!==a&&n.classList.remove(c)}}else this._currentValue=t,(n=r.querySelector(".".concat(c)))&&n.classList.remove(c);return e&&r.dispatchEvent(new CustomEvent("alphavaluechanged",{cancelable:!1,detail:{value:t}})),this._currentValue}},{key:"on",value:function(t,e){this.options.element.addEventListener(t,e)}},{key:"off",value:function(t,e){this.options.element.removeEventListener(t,e)}},{key:"updateControls",value:function(t){t.NameLessThan?this.value("#"):this.value(t.NameStartsWith),this.visible(-1!==t.SortBy.indexOf("SortName"))}},{key:"visible",value:function(t){this.options.element.style.visibility=t?"visible":"hidden"}},{key:"values",value:function(){for(var t=this.options.element.querySelectorAll(".alphaPickerButton"),e=[],a=0,n=t.length;a<n;a++)e.push(t[a].getAttribute("data-value"));return e}},{key:"focus",value:function(){var t=this.options.element;n.A.autoFocus(t,!0)}},{key:"destroy",value:function(){var t=this.options.element;this.enabled(!1),t.classList.remove("focuscontainer-x"),this.options=null}}])&&s(e.prototype,a),Object.defineProperty(e,"prototype",{writable:!1}),t}();e.A=m},61772:function(t,e,a){a.r(e),a.d(e,{default:function(){return m}}),a(44962),a(78557),a(90076),a(83994),a(82367),a(89336),a(73687),a(69892),a(95021),a(29305),a(32733),a(84701);var n=a(56869),r=a(94592),i=a(58782),o=a(31900),l=a(6940),s=a(24468),u=a(82885),c=a(9482),d=a(62014);function v(t,e){var a="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!a){if(Array.isArray(t)||(a=function(t,e){if(t){if("string"==typeof t)return y(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?y(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){a&&(t=a);var n=0,r=function(){};return{s:r,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,l=!1;return{s:function(){a=a.call(t)},n:function(){var t=a.next();return o=t.done,t},e:function(t){l=!0,i=t},f:function(){try{o||null==a.return||a.return()}finally{if(l)throw i}}}}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}function m(t,e,y){var m=this;function h(){var t=p(),e=A[t];return e||(e=A[t]={query:{SortBy:"SortName",SortOrder:"Ascending",IncludeItemTypes:"Trailer",Recursive:!0,Fields:"PrimaryImageAspectRatio,SortName",ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb",StartIndex:0},view:u.getSavedView(t)||"Poster"},u.libraryPageSize()>0&&(e.query.Limit=u.libraryPageSize()),u.loadQuerySettings(t,e.query)),e}function f(){return h().query}function p(){return e.topParentId+"-trailers"}var b,g,S,k=function t(){n.Ay.show(),w=!0;var e=f();ApiClient.getItems(ApiClient.getCurrentUserId(),e).then((function(a){var o;function d(){w||(u.libraryPageSize()>0&&(e.StartIndex+=e.Limit),t())}function h(){w||(u.libraryPageSize()>0&&(e.StartIndex=Math.max(0,e.StartIndex-e.Limit)),t())}window.scrollTo(0,0),null===(o=m.alphaPicker)||void 0===o||o.updateControls(e);var f,b=r.Ay.getQueryPagingHtml({startIndex:e.StartIndex,limit:e.Limit,totalRecordCount:a.TotalRecordCount,showLimit:!1,updatePageSizeSetting:!1,addLayoutButton:!1,sortButton:!1,filterButton:!1}),g=m.getCurrentViewStyle();f="Thumb"==g?s.default.getCardsHtml({items:a.Items,shape:"backdrop",preferThumb:!0,context:"movies",overlayPlayButton:!0}):"ThumbCard"==g?s.default.getCardsHtml({items:a.Items,shape:"backdrop",preferThumb:!0,context:"movies",cardLayout:!0,showTitle:!0,showYear:!0,centerText:!0}):"Banner"==g?s.default.getCardsHtml({items:a.Items,shape:"banner",preferBanner:!0,context:"movies"}):"List"==g?l.A.getListViewHtml({items:a.Items,context:"movies",sortBy:e.SortBy}):"PosterCard"==g?s.default.getCardsHtml({items:a.Items,shape:"portrait",context:"movies",showTitle:!0,showYear:!0,cardLayout:!0,centerText:!0}):s.default.getCardsHtml({items:a.Items,shape:"portrait",context:"movies",centerText:!0,overlayPlayButton:!0,showTitle:!0,showYear:!0});var S,k=y.querySelectorAll(".paging"),A=v(k);try{for(A.s();!(S=A.n()).done;)S.value.innerHTML=b}catch(t){A.e(t)}finally{A.f()}var L,P=v(k=y.querySelectorAll(".btnNextPage"));try{for(P.s();!(L=P.n()).done;)L.value.addEventListener("click",d)}catch(t){P.e(t)}finally{P.f()}var C,B=v(k=y.querySelectorAll(".btnPreviousPage"));try{for(B.s();!(C=B.n()).done;)C.value.addEventListener("click",h)}catch(t){B.e(t)}finally{B.f()}a.Items.length||(f="",f+='<div class="noItemsMessage centerMessage">',f+="<h1>"+c.Ay.translate("MessageNothingHere")+"</h1>",f+="<p>"+c.Ay.translate("MessageNoTrailersFound")+"</p>",f+="</div>");var I=y.querySelector(".itemsContainer");I.innerHTML=f,i.default.lazyChildren(I),u.saveQuerySettings(p(),e),n.Ay.hide(),w=!1}))},A={},w=!1;this.showFilterMenu=function(){a.e(44599).then(a.bind(a,44599)).then((function(t){var e=new(0,t.default)({query:f(),mode:"movies",serverId:ApiClient.serverId()});d.A.on(e,"filterchange",(function(){f().StartIndex=0,k()})),e.show()}))},this.getCurrentViewStyle=function(){return h().view},g=(b=y).querySelector(".alphaPicker"),S=b.querySelector(".itemsContainer"),g.addEventListener("alphavaluechanged",(function(t){var e=t.detail.value,a=f();"#"===e?(a.NameLessThan="A",delete a.NameStartsWith):(a.NameStartsWith=e,delete a.NameLessThan),a.StartIndex=0,k()})),m.alphaPicker=new o.Z({element:g,valueChangeEvent:"click"}),b.querySelector(".alphaPicker").classList.add("alphabetPicker-right"),g.classList.add("alphaPicker-fixed-right"),S.classList.add("padded-right-withalphapicker"),b.querySelector(".btnFilter").addEventListener("click",(function(){m.showFilterMenu()})),b.querySelector(".btnSort").addEventListener("click",(function(t){r.Ay.showSortMenu({items:[{name:c.Ay.translate("Name"),id:"SortName"},{name:c.Ay.translate("OptionImdbRating"),id:"CommunityRating,SortName"},{name:c.Ay.translate("OptionDateAdded"),id:"DateCreated,SortName"},{name:c.Ay.translate("OptionDatePlayed"),id:"DatePlayed,SortName"},{name:c.Ay.translate("OptionParentalRating"),id:"OfficialRating,SortName"},{name:c.Ay.translate("OptionPlayCount"),id:"PlayCount,SortName"},{name:c.Ay.translate("OptionReleaseDate"),id:"PremiereDate,SortName"}],callback:function(){f().StartIndex=0,k()},query:f(),button:t.target})})),this.renderTab=function(){var t;k(),null===(t=m.alphaPicker)||void 0===t||t.updateControls(f())}}a(1177)},94592:function(t,e,a){a(29305),a(32733),a(84701),a(89336),a(73687),a(69892),a(44962),a(86584),a(78557),a(90076),a(83994),a(82367),a(95021),a(93062);var n=a(9482);function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}var i={showLayoutMenu:function(t,e,r){var i=!0;r||(i=!1,r=(r=t.getAttribute("data-layouts"))?r.split(","):["List","Poster","PosterCard","Thumb","ThumbCard"]);var o=r.map((function(t){return{name:n.Ay.translate(t),id:t,selected:e==t}}));a.e(79617).then(a.bind(a,79617)).then((function(e){e.default.show({items:o,positionTo:t,callback:function(e){t.dispatchEvent(new CustomEvent("layoutchange",{detail:{viewStyle:e},bubbles:!0,cancelable:!1})),!i&&window.$&&$(t).trigger("layoutchange",[e])}})}))},getQueryPagingHtml:function(t){var e=t.startIndex,a=t.limit,r=t.totalRecordCount,i="",o=r?e+1:0,l=a?Math.min(e+a,r):r,s=a>0&&a<r;return i+='<div class="listPaging">',i+='<span style="vertical-align:middle;">',i+=n.Ay.translate("ListPaging",o,l,r),i+="</span>",(s||t.viewButton||t.filterButton||t.sortButton||t.addLayoutButton)&&(i+='<div style="display:inline-block;">',s&&(i+='<button is="paper-icon-button-light" class="btnPreviousPage autoSize" '+(e?"":"disabled")+'><span class="material-icons arrow_back" aria-hidden="true"></span></button>',i+='<button is="paper-icon-button-light" class="btnNextPage autoSize" '+(e+a>=r?"disabled":"")+'><span class="material-icons arrow_forward" aria-hidden="true"></span></button>'),t.addLayoutButton&&(i+='<button is="paper-icon-button-light" title="'+n.Ay.translate("ButtonSelectView")+'" class="btnChangeLayout autoSize" data-layouts="'+(t.layouts||"")+'" onclick="LibraryBrowser.showLayoutMenu(this, \''+(t.currentLayout||"")+'\');"><span class="material-icons view_comfy" aria-hidden="true"></span></button>'),t.sortButton&&(i+='<button is="paper-icon-button-light" class="btnSort autoSize" title="'+n.Ay.translate("Sort")+'"><span class="material-icons sort_by_alpha" aria-hidden="true"></span></button>'),t.filterButton&&(i+='<button is="paper-icon-button-light" class="btnFilter autoSize" title="'+n.Ay.translate("Filter")+'"><span class="material-icons filter_list" aria-hidden="true"></span></button>'),i+="</div>"),i+"</div>"},showSortMenu:function(t){Promise.all([Promise.resolve().then(a.bind(a,79754)),a.e(81613).then(a.bind(a,87642))]).then((function(e){var a=function(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var a=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=a){var n,r,i,o,l=[],s=!0,u=!1;try{if(i=(a=a.call(t)).next,0===e){if(Object(a)!==a)return;s=!1}else for(;!(s=(n=i.call(a)).done)&&(l.push(n.value),l.length!==e);s=!0);}catch(t){u=!0,r=t}finally{try{if(!s&&null!=a.return&&(o=a.return(),Object(o)!==o))return}finally{if(u)throw r}}return l}}(t,e)||function(t,e){if(t){if("string"==typeof t)return r(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?r(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(e,1)[0].default;function i(){var e=this.value;if(this.checked){var a=t.query.SortBy!=e;t.query.SortBy=e.replace("_",","),t.query.StartIndex=0,t.callback&&a&&t.callback()}}function o(){var e=this.value;if(this.checked){var a=t.query.SortOrder!=e;t.query.SortOrder=e,t.query.StartIndex=0,t.callback&&a&&t.callback()}}var l=a.createDialog({removeOnClose:!0,modal:!1,entryAnimationDuration:160,exitAnimationDuration:200});l.classList.add("ui-body-a"),l.classList.add("background-theme-a"),l.classList.add("formDialog");var s,u,c,d="";for(d+='<div style="margin:0;padding:1.25em 1.5em 1.5em;">',d+='<h2 style="margin:0 0 .5em;">',d+=n.Ay.translate("HeaderSortBy"),d+="</h2>",d+="<div>",s=0,u=t.items.length;s<u;s++){var v=t.items[s],y=v.id.replace(",","_");c=(t.query.SortBy||"").replace(",","_")==y?" checked":"",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortBy" data-id="'+v.id+'" value="'+y+'" class="menuSortBy" '+c+" /><span>"+v.name+"</span></label>"}d+="</div>",d+='<h2 style="margin: 1em 0 .5em;">',d+=n.Ay.translate("HeaderSortOrder"),d+="</h2>",d+="<div>",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Ascending" class="menuSortOrder" '+(c="Ascending"==t.query.SortOrder?" checked":"")+" /><span>"+n.Ay.translate("Ascending")+"</span></label>",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Descending" class="menuSortOrder" '+(c="Descending"==t.query.SortOrder?" checked":"")+" /><span>"+n.Ay.translate("Descending")+"</span></label>",d+="</div>",d+="</div>",l.innerHTML=d,a.open(l);var m=l.querySelectorAll(".menuSortBy");for(s=0,u=m.length;s<u;s++)m[s].addEventListener("change",i);var h=l.querySelectorAll(".menuSortOrder");for(s=0,u=h.length;s<u;s++)h[s].addEventListener("change",o)}))}};window.LibraryBrowser=i,e.Ay=i}}]);