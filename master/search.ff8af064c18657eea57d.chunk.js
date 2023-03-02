/*! For license information please see search.ff8af064c18657eea57d.chunk.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[66464,7293],{12658:function(e,t,n){"use strict";n.d(t,{w:function(){return f}}),n(23938),n(61013),n(27471),n(19068),n(87211),n(25901),n(92189),n(63238),n(95163),n(99785),n(91047),n(5769),n(17460),n(14078);var r=n(34643),i=n(30325),a=n(72365),s=n(94994);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==o(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t);if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key,"string"),"symbol"===o(i)?i:String(i)),r)}var i}n(61414);var c="alphaPickerButton-selected";function u(){var e=this.querySelector(".".concat(c));e?r.Z.focus(e):r.Z.autoFocus(this,!0)}function d(e){var t="alphaPickerButton";return i.Z.tv&&(t+=" alphaPickerButton-tv"),e&&(t+=" alphaPickerButton-vertical"),t}function h(e,t){return e.map((function(e){return function(e,t){return'<button data-value="'.concat(e,'" class="').concat(d(t),'">').concat(e,"</button>")}(e,t)}))}var f=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var n=this;this.options=t;var r,o,l,c,f=t.element,v=t.itemsContainer,m=t.itemClass;function p(){o=null,n.value(r)}function y(){if(c=null,document.activeElement===l){var e=l.getAttribute("data-value");n.value(e,!0)}}function b(e){var t=a.ZP.parentWithClass(e.target,"alphaPickerButton");if(t){var n=t.getAttribute("data-value");f.dispatchEvent(new CustomEvent("alphavalueclicked",{cancelable:!1,detail:{value:n}}))}}function g(e){var t=a.ZP.parentWithClass(e.target,"alphaPickerButton");if(t){var n=t.getAttribute("data-value");(this._currentValue||"").toUpperCase()===n.toUpperCase()?this.value(null,!0):this.value(n,!0)}}function I(e){c&&(clearTimeout(c),c=null);var t=a.ZP.parentWithClass(e.target,"alphaPickerButton");t&&(l=t,c=setTimeout(y,600))}function S(e){var t=a.ZP.parentWithClass(e.target,m);if(t){var n=t.getAttribute("data-prefix");n&&n.length&&(r=n[0],o&&clearTimeout(o),o=setTimeout(p,100))}}this.enabled=function(e){e?(v&&v.addEventListener("focus",S,!0),"keyboard"===t.mode&&f.addEventListener("click",b),"click"!==t.valueChangeEvent?f.addEventListener("focus",I,!0):f.addEventListener("click",g.bind(this))):(v&&v.removeEventListener("focus",S,!0),f.removeEventListener("click",b),f.removeEventListener("focus",I,!0),f.removeEventListener("click",g.bind(this)))},function(e,t){e.classList.add("alphaPicker"),i.Z.tv&&e.classList.add("alphaPicker-tv");var n=e.classList.contains("alphaPicker-vertical");n||e.classList.add("focuscontainer-x");var r,a="",o=d(n),l="alphaPickerRow";n&&(l+=" alphaPickerRow-vertical"),a+='<div class="'.concat(l,'">'),"keyboard"===t.mode?a+='<button data-value=" " is="paper-icon-button-light" class="'.concat(o,'" aria-label="').concat(s.ZP.translate("ButtonSpace"),'"><span class="material-icons alphaPickerButtonIcon space_bar" aria-hidden="true"></span></button>'):a+=h(r=["#"],n).join(""),a+=h(r=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],n).join(""),"keyboard"===t.mode?(a+='<button data-value="backspace" is="paper-icon-button-light" class="'.concat(o,'" aria-label="').concat(s.ZP.translate("ButtonBackspace"),'"><span class="material-icons alphaPickerButtonIcon backspace" aria-hidden="true"></span></button>'),a+="</div>",r=["0","1","2","3","4","5","6","7","8","9"],a+='<div class="'.concat(l,'">'),a+="<br/>",a+=h(r,n).join(""),a+="</div>"):a+="</div>",e.innerHTML=a,e.classList.add("focusable"),e.focus=u}(f,t),this.enabled(!0),this.visible(!0)}var t,n;return t=e,(n=[{key:"value",value:function(e,t){var n,r,i=this.options.element;if(void 0!==e)if(null!=e){if(e=e.toUpperCase(),this._currentValue=e,"keyboard"!==this.options.mode){r=i.querySelector(".".concat(c));try{n=i.querySelector(".alphaPickerButton[data-value='".concat(e,"']"))}catch(e){console.error("error in querySelector:",e)}n&&n!==r&&n.classList.add(c),r&&r!==n&&r.classList.remove(c)}}else this._currentValue=e,(r=i.querySelector(".".concat(c)))&&r.classList.remove(c);return t&&i.dispatchEvent(new CustomEvent("alphavaluechanged",{cancelable:!1,detail:{value:e}})),this._currentValue}},{key:"on",value:function(e,t){this.options.element.addEventListener(e,t)}},{key:"off",value:function(e,t){this.options.element.removeEventListener(e,t)}},{key:"updateControls",value:function(e){e.NameLessThan?this.value("#"):this.value(e.NameStartsWith),this.visible(-1!==e.SortBy.indexOf("SortName"))}},{key:"visible",value:function(e){this.options.element.style.visibility=e?"visible":"hidden"}},{key:"values",value:function(){for(var e=this.options.element.querySelectorAll(".alphaPickerButton"),t=[],n=0,r=e.length;n<r;n++)t.push(e[n].getAttribute("data-value"));return t}},{key:"focus",value:function(){var e=this.options.element;r.Z.autoFocus(e,!0)}},{key:"destroy",value:function(){var e=this.options.element;this.enabled(!1),e.classList.remove("focuscontainer-x"),this.options=null}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.Z=f},82427:function(e,t,n){"use strict";n(5769),n(63238),n(61418),n(17460),n(14078),n(27471),n(32081);var r=n(61008),i=n(58517),a=n(48957),s=n(98301),o=n(30325),l=n(57366),c=n(72365),u=n(28540),d=n(34643),h=n(44038),f=n(81643),v=(n(67752),n(18613)),m=n(28172),p=Object.create(HTMLDivElement.prototype);function y(e){var t=this,n=t.multiSelect;!1!==(null==n?void 0:n.onContainerClick.call(t,e))&&r.ZP.onClick.call(t,e)}function b(e){return e.preventDefault(),e.stopPropagation(),!1}function g(e){var t=e.target,n=c.ZP.parentWithAttribute(t,"data-id");if(n&&n.getAttribute("data-serverid"))return i.default.handleCommand("menu",{sourceElement:n}),e.preventDefault(),e.stopPropagation(),!1}function I(e,t,r){var i=this;Promise.all([n.e(61570),n.e(7293)]).then(n.bind(n,61570)).then((function(e){e.onUserDataChanged(r,i)}));var a=S(i);-1===a.indexOf("markfavorite")&&-1===a.indexOf("markplayed")||i.notifyRefreshNeeded()}function S(e){var t=e.getAttribute("data-monitor");return t?t.split(","):[]}function P(e,t,r){var i=this;if(-1===S(i).indexOf("timers")){var a=r.ProgramId,s=r.Id;Promise.all([n.e(61570),n.e(7293)]).then(n.bind(n,61570)).then((function(e){e.onTimerCreated(a,s,i)}))}else i.notifyRefreshNeeded()}function T(){-1!==S(this).indexOf("seriestimers")&&this.notifyRefreshNeeded()}function w(e,t,r){var i=this;-1===S(i).indexOf("timers")?Promise.all([n.e(61570),n.e(7293)]).then(n.bind(n,61570)).then((function(e){e.onTimerCancelled(r.Id,i)})):i.notifyRefreshNeeded()}function x(e,t,r){var i=this;-1===S(i).indexOf("seriestimers")?Promise.all([n.e(61570),n.e(7293)]).then(n.bind(n,61570)).then((function(e){e.onSeriesTimerCancelled(r.Id,i)})):i.notifyRefreshNeeded()}function C(e,t,n){var r=this,i=S(r);if(-1===i.indexOf("seriestimers")&&-1===i.indexOf("timers")){var a=n.ItemsAdded||[],s=n.ItemsRemoved||[];if(a.length||s.length){var o=r.getAttribute("data-parentid");if(o){var l=n.FoldersAddedTo||[],c=n.FoldersRemovedFrom||[],u=n.CollectionFolders||[];if(-1===l.indexOf(o)&&-1===c.indexOf(o)&&-1===u.indexOf(o))return}r.notifyRefreshNeeded()}}}function k(e,t){var n,r=this,i=t.state,a=S(r);if(i.NowPlayingItem&&"Video"===i.NowPlayingItem.MediaType){if(-1!==a.indexOf("videoplayback"))return void r.notifyRefreshNeeded(!0)}else if("Audio"===(null===(n=i.NowPlayingItem)||void 0===n?void 0:n.MediaType)&&-1!==a.indexOf("audioplayback"))return void r.notifyRefreshNeeded(!0)}function E(e,t,n,r){var i=n.bind(e);r=r||h.default,f.Z.on(r,t,i),e["event_"+t]=i}function Z(e,t,n){var r=e["event_"+t];r&&(n=n||h.default,f.Z.off(n,t,r),e["event_"+t]=null)}function j(e,t){e.refreshInterval&&(clearInterval(e.refreshInterval),e.refreshInterval=null,t||(e.refreshIntervalEndTime=null))}function A(e,t){j(e),t||(t=parseInt(e.getAttribute("data-refreshinterval")||"0")),t&&(e.refreshInterval=setInterval(e.notifyRefreshNeeded.bind(e),t),e.refreshIntervalEndTime=(new Date).getTime()+t)}function O(e){var t=e.Items||e,n=this.parentContainer;n&&(t.length?n.classList.remove("hide"):n.classList.add("hide"));var r,i,a=document.activeElement;this.contains(a)&&(i=!0,r=a.getAttribute("data-id")),this.innerHTML=this.getItemsHtml(t),s.default.lazyChildren(this),i&&function(e,t){if(t){var n=e.querySelector('[data-id="'+t+'"]');if(n)try{return void d.Z.focus(n)}catch(e){console.error(e)}}d.Z.autoFocus(e)}(this,r),A(this),this.afterRefresh&&this.afterRefresh(e)}p.enableMultiSelect=function(e){var t=this.multiSelect;if(e){if(!t){var r=this;n.e(52943).then(n.bind(n,52943)).then((function(e){var t=e.default;r.multiSelect=new t({container:r,bindOnClick:!1})}))}}else t&&(t.destroy(),this.multiSelect=null)},p.enableDragReordering=function(e){var t=this.sortable;if(e){if(!t){var n=this;n.sortable=new m.ZP(n,{draggable:".listItem",handle:".listViewDragHandle",onEnd:function(e){return function(e,t){var n=e.item,r=e.newIndex,i=n.getAttribute("data-playlistitemid"),a=n.getAttribute("data-playlistid");if(a){var s=n.getAttribute("data-serverid"),o=v.Z.getApiClient(s);u.ZP.show(),o.ajax({url:o.getUrl("Playlists/"+a+"/Items/"+i+"/Move/"+r),type:"POST"}).then((function(){u.ZP.hide()}),(function(){u.ZP.hide(),t.refreshItems()}))}else{var l=e.oldIndex;n.dispatchEvent(new CustomEvent("itemdrop",{detail:{oldIndex:l,newIndex:r,playlistItemId:i},bubbles:!0,cancelable:!1}))}}(e,n)}})}}else t&&(t.destroy(),this.sortable=null)},p.createdCallback=function(){this.classList.add("itemsContainer")},p.attachedCallback=function(){this.addEventListener("click",y),l.Z.touch?this.addEventListener("contextmenu",b):"false"!==this.getAttribute("data-contextmenu")&&this.addEventListener("contextmenu",g),(o.Z.desktop||o.Z.mobile&&"false"!==this.getAttribute("data-multiselect"))&&this.enableMultiSelect(!0),o.Z.tv&&this.classList.add("itemsContainer-tv"),r.ZP.on(this,{click:!1}),E(this,"UserDataChanged",I),E(this,"TimerCreated",P),E(this,"SeriesTimerCreated",T),E(this,"TimerCancelled",w),E(this,"SeriesTimerCancelled",x),E(this,"LibraryChanged",C),E(this,"playbackstop",k,a.O),"true"===this.getAttribute("data-dragreorder")&&this.enableDragReordering(!0)},p.detachedCallback=function(){j(this),this.enableMultiSelect(!1),this.enableDragReordering(!1),this.removeEventListener("click",y),this.removeEventListener("contextmenu",g),this.removeEventListener("contextmenu",b),r.ZP.off(this,{click:!1}),Z(this,"UserDataChanged"),Z(this,"TimerCreated"),Z(this,"SeriesTimerCreated"),Z(this,"TimerCancelled"),Z(this,"SeriesTimerCancelled"),Z(this,"LibraryChanged"),Z(this,"playbackstop",a.O),this.fetchData=null,this.getItemsHtml=null,this.parentContainer=null},p.pause=function(){j(this,!0),this.paused=!0},p.resume=function(e){this.paused=!1;var t=this.refreshIntervalEndTime;if(t){var n=t-(new Date).getTime();n>0&&!this.needsRefresh?A(this,n):(this.needsRefresh=!0,this.refreshIntervalEndTime=null)}return this.needsRefresh||e&&e.refresh?this.refreshItems():Promise.resolve()},p.refreshItems=function(){return this.fetchData?this.paused?(this.needsRefresh=!0,Promise.resolve()):(this.needsRefresh=!1,this.fetchData().then(O.bind(this))):Promise.resolve()},p.notifyRefreshNeeded=function(e){if(this.paused)this.needsRefresh=!0;else{var t=this.refreshTimeout;t&&clearTimeout(t),!0===e?this.refreshItems():this.refreshTimeout=setTimeout(this.refreshItems.bind(this),1e4)}},document.registerElement("emby-itemscontainer",{prototype:p,extends:"div"})},24432:function(e,t,n){"use strict";n(5769),n(63238),n(61418),n(17460),n(14078);var r=n(15723),i=n(72365),a=n(30325),s=n(58517),o=n(34643),l=n(57366),c=(n(67752),Object.create(HTMLDivElement.prototype));function u(e){var t=e.detail.command;"end"===t?(o.Z.focusLast(this,"."+this.getAttribute("data-navcommands")),e.preventDefault(),e.stopPropagation()):"pageup"===t?(o.Z.moveFocus(e.target,this,"."+this.getAttribute("data-navcommands"),-12),e.preventDefault(),e.stopPropagation()):"pagedown"===t&&(o.Z.moveFocus(e.target,this,"."+this.getAttribute("data-navcommands"),12),e.preventDefault(),e.stopPropagation())}c.createdCallback=function(){this.classList.add("emby-scroller")},c.scrollToBeginning=function(){this.scroller&&this.scroller.slideTo(0,!0)},c.toStart=function(e,t){this.scroller&&this.scroller.toStart(e,t)},c.toCenter=function(e,t){this.scroller&&this.scroller.toCenter(e,t)},c.scrollToPosition=function(e,t){this.scroller&&this.scroller.slideTo(e,t)},c.getScrollPosition=function(){if(this.scroller)return this.scroller.getScrollPosition()},c.getScrollSize=function(){if(this.scroller)return this.scroller.getScrollSize()},c.getScrollEventName=function(){if(this.scroller)return this.scroller.getScrollEventName()},c.getScrollSlider=function(){if(this.scroller)return this.scroller.getScrollSlider()},c.addScrollEventListener=function(e,t){this.scroller&&i.ZP.addEventListener(this.scroller.getScrollFrame(),this.scroller.getScrollEventName(),e,t)},c.removeScrollEventListener=function(e,t){this.scroller&&i.ZP.removeEventListener(this.scroller.getScrollFrame(),this.scroller.getScrollEventName(),e,t)},c.attachedCallback=function(){this.getAttribute("data-navcommands")&&s.default.on(this,u);var e="false"!==this.getAttribute("data-horizontal"),t=this.querySelector(".scrollSlider");e&&(t.style["white-space"]="nowrap");var c,d,h=a.Z.desktop&&e&&"false"!==this.getAttribute("data-scrollbuttons"),f={horizontal:e,mouseDragging:1,mouseWheel:"false"!==this.getAttribute("data-mousewheel"),touchDragging:1,slidee:t,scrollBy:200,speed:e?270:240,elasticBounds:1,dragHandle:1,autoImmediate:!0,skipSlideToWhenVisible:"true"===this.getAttribute("data-skipfocuswhenvisible"),dispatchScrollEvent:h||"true"===this.getAttribute("data-scrollevent"),hideScrollbar:h||"true"===this.getAttribute("data-hidescrollbar"),allowNativeSmoothScroll:"true"===this.getAttribute("data-allownativesmoothscroll")&&!h,allowNativeScroll:!h,forceHideScrollbars:h,requireAnimation:h&&l.Z.edge};this.scroller=new r.Z(this,f),this.scroller.init(),this.scroller.reload(),a.Z.tv&&this.getAttribute("data-centerfocus")&&(this,c=this.scroller,i.ZP.addEventListener(this,"focus",(function(e){var t=o.Z.focusableParent(e.target);t&&c.toCenter(t)}),{capture:!0,passive:!0})),h&&(d=this,n.e(39346).then(n.bind(n,39346)).then((function(){d.insertAdjacentHTML("beforebegin",'<div is="emby-scrollbuttons" class="emby-scrollbuttons padded-right"></div>')})))},c.pause=function(){var e=this.headroom;e&&e.pause()},c.resume=function(){var e=this.headroom;e&&e.resume()},c.detachedCallback=function(){this.getAttribute("data-navcommands")&&s.default.off(this,u);var e=this.headroom;e&&(e.destroy(),this.headroom=null);var t=this.scroller;t&&(t.destroy(),this.scroller=null)},document.registerElement("emby-scroller",{prototype:c,extends:"div"})},60042:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var s=i.apply(null,n);s&&e.push(s)}}else if("object"===a){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var o in n)r.call(n,o)&&n[o]&&e.push(o)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},6055:function(e,t,n){"use strict";var r=n(24246),i=n(27378),a=n(53424),s=function(){return s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},s.apply(this,arguments)};t.Z=function(e){var t=e.children,n=e.id,o=e.className,l=void 0===o?"":o,c=e.title,u=e.isBackButtonEnabled,d=void 0===u||u,h=e.isMenuButtonEnabled,f=void 0!==h&&h,v=e.isNowPlayingBarEnabled,m=void 0===v||v,p=e.isThemeMediaSupported,y=void 0!==p&&p,b=e.backDropType,g=(0,i.useRef)(null);return(0,i.useEffect)((function(){a.Z.hideView()}),[]),(0,i.useEffect)((function(){var e,t,n,r,i={bubbles:!0,cancelable:!1,detail:{isRestored:!1,options:{enableMediaControl:m,supportsThemeMedia:y}}};null===(e=g.current)||void 0===e||e.dispatchEvent(new CustomEvent("viewbeforeshow",i)),null===(t=g.current)||void 0===t||t.dispatchEvent(new CustomEvent("pagebeforeshow",i)),null===(n=g.current)||void 0===n||n.dispatchEvent(new CustomEvent("viewshow",i)),null===(r=g.current)||void 0===r||r.dispatchEvent(new CustomEvent("pageshow",i))}),[g,m,y]),(0,r.jsx)("div",s({ref:g,id:n,"data-role":"page",className:"page ".concat(l),"data-title":c,"data-backbutton":d,"data-menubutton":f,"data-backdroptype":b},{children:t}))}},57409:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return H}});var r=n(24246),i=n(27378),a=n(27851),s=n(6055),o=n(25883),l=n(12658),c=function(e){var t=e.onAlphaPicked,n=void 0===t?function(){}:t,a=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,a=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)s.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(i)throw i.error}}return s}((0,i.useState)(),2),s=a[0],o=a[1],c=(0,i.useRef)(null);return(0,i.useEffect)((function(){var e;return o(new l.Z({element:c.current,mode:"keyboard"})),null===(e=c.current)||void 0===e||e.addEventListener("alphavalueclicked",n),function(){null==s||s.destroy()}}),[]),(0,r.jsx)("div",{ref:c,className:"alphaPicker align-items-center"})},u=n(94994),d=(n(62033),n(30325)),h=n(57366),f=function(){return f=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},f.apply(this,arguments)},v=function(e){var t=e.onSearch,n=void 0===t?function(){}:t,a=(0,i.useRef)(null),s=function(){var e;return null===(e=null==a?void 0:a.current)||void 0===e?void 0:e.querySelector(".searchfields-txtSearch")},l=(0,i.useMemo)((function(){return(0,o.Z)(n,400)}),[n]);(0,i.useEffect)((function(){var e,t;return null===(e=s())||void 0===e||e.addEventListener("input",(function(e){var t;l((void 0===(t=e.target.value)&&(t=""),t.trim()))})),null===(t=s())||void 0===t||t.focus(),function(){l.cancel()}}),[l]);var v=(0,i.useCallback)((function(e){var t=e.detail.value,n=s();if(n){if("backspace"===t){var r=n.value;n.value=r.length?r.substring(0,r.length-1):""}else n.value+=t;n.dispatchEvent(new CustomEvent("input",{bubbles:!0}))}else console.error("Unexpected null reference")}),[]);return(0,r.jsxs)("div",f({className:"padded-left padded-right searchFields",ref:a},{children:[(0,r.jsxs)("div",f({className:"searchFieldsInner flex align-items-center justify-content-center"},{children:[(0,r.jsx)("span",{className:"searchfields-icon material-icons search","aria-hidden":"true"}),(0,r.jsx)("div",{className:"inputContainer flex-grow",style:{marginBottom:0},dangerouslySetInnerHTML:{__html:'<input\n    is="emby-input"\n    class="searchfields-txtSearch"\n    type="text"\n    data-keyboard="true"\n    placeholder="'.concat(u.ZP.translate("Search"),'"\n    autocomplete="off"\n    maxlength="40"\n    autofocus\n/>')}})]})),d.Z.tv&&!h.Z.tv&&(0,r.jsx)(c,{onAlphaPicked:v})]}))},m=n(60042),p=n.n(m),y=n(18613),b=n(61570),g=(n(24432),n(82427),function(){return g=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},g.apply(this,arguments)}),I=function(e){var t=e.title;return{__html:'<h2 class="sectionTitle sectionTitle-cards focuscontainer-x padded-left padded-right">'.concat(void 0===t?"":t,'</h2>\n    <div is="emby-scroller" data-horizontal="true" data-centerfocus="card" class="padded-top-focusscale padded-bottom-focusscale">\n    <div is="emby-itemscontainer" class="focuscontainer-x itemsContainer scrollSlider"></div>\n</div>')}},S=function(e){var t=e.title,n=e.items,a=void 0===n?[]:n,s=e.cardOptions,o=void 0===s?{}:s,l=(0,i.useRef)(null);return(0,i.useEffect)((function(){var e;b.default.buildCards(a,g({itemsContainer:null===(e=l.current)||void 0===e?void 0:e.querySelector(".itemsContainer"),parentContainer:l.current,shape:"autooverflow",scalable:!0,showTitle:!0,overlayText:!1,centerText:!0,allowBottomPadding:!1},o))}),[o,a]),(0,r.jsx)("div",{ref:l,className:"verticalSection",dangerouslySetInnerHTML:I({title:t})})},P=function(){return P=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},P.apply(this,arguments)},T=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,a=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)s.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(i)throw i.error}}return s},w=function(e){var t=e.serverId,n=void 0===t?window.ApiClient.serverId():t,a=e.parentId,s=e.collectionType,o=e.query,l=T((0,i.useState)([]),2),c=l[0],d=l[1],h=T((0,i.useState)([]),2),f=h[0],v=h[1],m=T((0,i.useState)([]),2),b=m[0],g=m[1],I=T((0,i.useState)([]),2),w=I[0],x=I[1],C=T((0,i.useState)([]),2),k=C[0],E=C[1],Z=T((0,i.useState)([]),2),j=Z[0],A=Z[1],O=T((0,i.useState)([]),2),L=O[0],N=O[1],R=T((0,i.useState)([]),2),M=R[0],B=R[1],D=T((0,i.useState)([]),2),q=D[0],F=D[1],H=T((0,i.useState)([]),2),U=H[0],_=H[1],V=T((0,i.useState)([]),2),W=V[0],z=V[1],K=T((0,i.useState)([]),2),G=K[0],X=K[1],Y=T((0,i.useState)([]),2),J=Y[0],Q=Y[1],$=T((0,i.useState)([]),2),ee=$[0],te=$[1],ne=T((0,i.useState)([]),2),re=ne[0],ie=ne[1],ae=T((0,i.useState)([]),2),se=ae[0],oe=ae[1];return(0,i.useEffect)((function(){var e=function(){return{ParentId:a,searchTerm:o,Limit:24,Fields:"PrimaryImageAspectRatio,CanDelete,BasicSyncInfo,MediaSourceCount",Recursive:!0,EnableTotalRecordCount:!1,ImageTypeLimit:1,IncludePeople:!1,IncludeMedia:!1,IncludeGenres:!1,IncludeStudios:!1,IncludeArtists:!1}},t=function(t,n){return void 0===n&&(n={}),null==t?void 0:t.getItems(null==t?void 0:t.getCurrentUserId(),P(P(P({},e()),{IncludeMedia:!0}),n))},r=function(){return"movies"===s},i=function(){return"tvshows"===s||"tv"===s};if(d([]),v([]),g([]),x([]),E([]),A([]),N([]),B([]),F([]),_([]),z([]),X([]),Q([]),te([]),ie([]),oe([]),o){var l=y.Z.getApiClient(n);s&&!r()||t(l,{IncludeItemTypes:"Movie"}).then((function(e){return d(e.Items||[])})),s&&!i()||(t(l,{IncludeItemTypes:"Series"}).then((function(e){return v(e.Items||[])})),t(l,{IncludeItemTypes:"Episode"}).then((function(e){return g(e.Items||[])}))),(!s||r()||i())&&function(t,n){return void 0===n&&(n={}),null==t?void 0:t.getPeople(null==t?void 0:t.getCurrentUserId(),P(P(P({},e()),{IncludePeople:!0}),n))}(l).then((function(e){return ie(e.Items||[])})),s&&"music"!==s||(t(l,{IncludeItemTypes:"Playlist"}).then((function(e){return N(e.Items||[])})),function(t,n){return void 0===n&&(n={}),null==t?void 0:t.getArtists(null==t?void 0:t.getCurrentUserId(),P(P(P({},e()),{IncludeArtists:!0}),n))}(l).then((function(e){return B(e.Items||[])})),t(l,{IncludeItemTypes:"MusicAlbum"}).then((function(e){return F(e.Items||[])})),t(l,{IncludeItemTypes:"Audio"}).then((function(e){return _(e.Items||[])}))),s||(t(l,{MediaTypes:"Video",ExcludeItemTypes:"Movie,Episode,TvChannel"}).then((function(e){return x(e.Items||[])})),t(l,{IncludeItemTypes:"LiveTvProgram"}).then((function(e){return E(e.Items||[])})),t(l,{IncludeItemTypes:"TvChannel"}).then((function(e){return A(e.Items||[])})),t(l,{IncludeItemTypes:"PhotoAlbum"}).then((function(e){return z(e.Items||[])})),t(l,{IncludeItemTypes:"Photo"}).then((function(e){return X(e.Items||[])})),t(l,{IncludeItemTypes:"AudioBook"}).then((function(e){return Q(e.Items||[])})),t(l,{IncludeItemTypes:"Book"}).then((function(e){return te(e.Items||[])})),t(l,{IncludeItemTypes:"BoxSet"}).then((function(e){return oe(e.Items||[])})))}}),[s,a,o,n]),(0,r.jsxs)("div",P({className:p()("searchResults","padded-bottom-page","padded-top",{hide:!o||"livetv"===s})},{children:[(0,r.jsx)(S,{title:u.ZP.translate("Movies"),items:c,cardOptions:{showYear:!0}}),(0,r.jsx)(S,{title:u.ZP.translate("Shows"),items:f,cardOptions:{showYear:!0}}),(0,r.jsx)(S,{title:u.ZP.translate("Episodes"),items:b,cardOptions:{coverImage:!0,showParentTitle:!0}}),(0,r.jsx)(S,{title:u.ZP.translate("HeaderVideos"),items:w,cardOptions:{showParentTitle:!0}}),(0,r.jsx)(S,{title:u.ZP.translate("Programs"),items:k,cardOptions:{preferThumb:!0,inheritThumb:!1,showParentTitleOrTitle:!0,showTitle:!1,coverImage:!0,overlayMoreButton:!0,showAirTime:!0,showAirDateTime:!0,showChannelName:!0}}),(0,r.jsx)(S,{title:u.ZP.translate("Channels"),items:j,cardOptions:{shape:"square"}}),(0,r.jsx)(S,{title:u.ZP.translate("Playlists"),items:L}),(0,r.jsx)(S,{title:u.ZP.translate("Artists"),items:M,cardOptions:{coverImage:!0}}),(0,r.jsx)(S,{title:u.ZP.translate("Albums"),items:q,cardOptions:{showParentTitle:!0}}),(0,r.jsx)(S,{title:u.ZP.translate("Songs"),items:U,cardOptions:{showParentTitle:!0}}),(0,r.jsx)(S,{title:u.ZP.translate("HeaderPhotoAlbums"),items:W}),(0,r.jsx)(S,{title:u.ZP.translate("Photos"),items:G}),(0,r.jsx)(S,{title:u.ZP.translate("HeaderAudioBooks"),items:J}),(0,r.jsx)(S,{title:u.ZP.translate("Books"),items:ee}),(0,r.jsx)(S,{title:u.ZP.translate("Collections"),items:se}),(0,r.jsx)(S,{title:u.ZP.translate("People"),items:re,cardOptions:{coverImage:!0}})]}))},x=n(92536),C=n(66107),k=n(786),E=n(65009),Z=n.n(E),j=n(52050),A=n(99998),O=(n(38228),function(){return O=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},O.apply(this,arguments)}),L=function(e){var t=e.name,n=e.href;return{__html:"<a\n    is='emby-linkbutton'\n    class='button-link'\n    style='display: inline-block; padding: 0.5em 1em;'\n    href='".concat(n,"'\n>").concat(Z()(t),"</a>")}},N=function(e){var t=e.parentId,n=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,a=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)s.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(i)throw i.error}}return s}((0,i.useState)([]),2),a=n[0],s=n[1],o=(0,A.h_)(),l=o.api,c=o.user;return(0,i.useEffect)((function(){l&&(null==c?void 0:c.Id)&&(0,C.$)(l).getItemsByUserId({userId:c.Id,sortBy:[k.X.IsFavoriteOrLiked,k.X.Random],includeItemTypes:[x.k.Movie,x.k.Series,x.k.MusicArtist],limit:20,recursive:!0,imageTypeLimit:0,enableImages:!1,parentId:t||void 0,enableTotalRecordCount:!1}).then((function(e){return s(e.data.Items||[])}))}),[l,t,c]),(0,r.jsxs)("div",O({className:"verticalSection searchSuggestions",style:{textAlign:"center"}},{children:[(0,r.jsx)("div",{children:(0,r.jsx)("h2",O({className:"sectionTitle padded-left padded-right"},{children:u.ZP.translate("Suggestions")}))}),(0,r.jsx)("div",O({className:"searchSuggestionsList padded-left padded-right"},{children:a.map((function(e){return(0,r.jsx)("div",{dangerouslySetInnerHTML:L({name:e.Name||"",href:j.appRouter.getRouteUrl(e)})},"suggestion-".concat(e.Id))}))}))]}))},R=function(){return R=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},R.apply(this,arguments)},M=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,a=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)s.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(i)throw i.error}}return s},B={preferThumb:!0,inheritThumb:!1,showParentTitleOrTitle:!0,showTitle:!1,coverImage:!0,overlayMoreButton:!0,showAirTime:!0,showAirDateTime:!0,showChannelName:!0},D=function(e){var t=e.serverId,n=void 0===t?window.ApiClient.serverId():t,a=e.parentId,s=e.collectionType,o=e.query,l=M((0,i.useState)([]),2),c=l[0],d=l[1],h=M((0,i.useState)([]),2),f=h[0],v=h[1],m=M((0,i.useState)([]),2),b=m[0],g=m[1],I=M((0,i.useState)([]),2),P=I[0],T=I[1],w=M((0,i.useState)([]),2),x=w[0],C=w[1],k=M((0,i.useState)([]),2),E=k[0],Z=k[1],j=M((0,i.useState)([]),2),A=j[0],O=j[1];return(0,i.useEffect)((function(){var e=function(e,t){return void 0===t&&(t={}),null==e?void 0:e.getItems(null==e?void 0:e.getCurrentUserId(),R(R(R({},{ParentId:a,searchTerm:o,Limit:24,Fields:"PrimaryImageAspectRatio,CanDelete,BasicSyncInfo,MediaSourceCount",Recursive:!0,EnableTotalRecordCount:!1,ImageTypeLimit:1,IncludePeople:!1,IncludeMedia:!1,IncludeGenres:!1,IncludeStudios:!1,IncludeArtists:!1}),{IncludeMedia:!0}),t))};if(d([]),v([]),g([]),T([]),C([]),Z([]),O([]),o&&"livetv"===s){var t=y.Z.getApiClient(n);e(t,{IncludeItemTypes:"LiveTvProgram",IsMovie:!0}).then((function(e){return d(e.Items||[])})),e(t,{IncludeItemTypes:"LiveTvProgram",IsMovie:!1,IsSeries:!0,IsSports:!1,IsKids:!1,IsNews:!1}).then((function(e){return v(e.Items||[])})),e(t,{IncludeItemTypes:"LiveTvProgram",IsSports:!0}).then((function(e){return g(e.Items||[])})),e(t,{IncludeItemTypes:"LiveTvProgram",IsKids:!0}).then((function(e){return T(e.Items||[])})),e(t,{IncludeItemTypes:"LiveTvProgram",IsNews:!0}).then((function(e){return C(e.Items||[])})),e(t,{IncludeItemTypes:"LiveTvProgram",IsMovie:!1,IsSeries:!1,IsSports:!1,IsKids:!1,IsNews:!1}).then((function(e){return Z(e.Items||[])})),e(t,{IncludeItemTypes:"TvChannel"}).then((function(e){return O(e.Items||[])}))}}),[s,a,o,n]),(0,r.jsxs)("div",R({className:p()("searchResults","padded-bottom-page","padded-top",{hide:!o||"livetv"!==s})},{children:[(0,r.jsx)(S,{title:u.ZP.translate("Movies"),items:c,cardOptions:R(R({},B),{shape:"overflowPortrait"})}),(0,r.jsx)(S,{title:u.ZP.translate("Episodes"),items:f,cardOptions:B}),(0,r.jsx)(S,{title:u.ZP.translate("Sports"),items:b,cardOptions:B}),(0,r.jsx)(S,{title:u.ZP.translate("Kids"),items:P,cardOptions:B}),(0,r.jsx)(S,{title:u.ZP.translate("News"),items:x,cardOptions:B}),(0,r.jsx)(S,{title:u.ZP.translate("Programs"),items:E,cardOptions:B}),(0,r.jsx)(S,{title:u.ZP.translate("Channels"),items:A,cardOptions:{shape:"square"}})]}))},q=function(){return q=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},q.apply(this,arguments)},F=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,a=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)s.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(i)throw i.error}}return s},H=function(){var e=F((0,i.useState)(),2),t=e[0],n=e[1],o=F((0,a.lr)(),1)[0];return(0,r.jsxs)(s.Z,q({id:"searchPage",title:u.ZP.translate("Search"),className:"mainAnimatedPage libraryPage allLibraryPage noSecondaryNavPage"},{children:[(0,r.jsx)(v,{onSearch:n}),!t&&(0,r.jsx)(N,{parentId:o.get("parentId")}),(0,r.jsx)(w,{serverId:o.get("serverId")||window.ApiClient.serverId(),parentId:o.get("parentId"),collectionType:o.get("collectionType"),query:t}),(0,r.jsx)(D,{serverId:o.get("serverId")||window.ApiClient.serverId(),parentId:o.get("parentId"),collectionType:o.get("collectionType"),query:t})]}))}}}]);