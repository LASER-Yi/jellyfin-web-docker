(self.webpackChunk=self.webpackChunk||[]).push([[80187,14980],{31900:function(e,t,r){"use strict";r.d(t,{Z:function(){return v}}),r(29305),r(32733),r(84701),r(81678),r(24776),r(84734),r(44962),r(86584),r(4754),r(94),r(36947),r(78557),r(83994),r(82367);var n=r(9164),i=r(46782),a=r(47629),s=r(5898);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,c(n.key),n)}}function c(e){var t=function(e,t){if("object"!=o(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==o(t)?t:t+""}r(15453);var u="alphaPickerButton-selected";function d(){var e=this.querySelector(".".concat(u));e?n.A.focus(e):n.A.autoFocus(this,!0)}function f(e){var t="alphaPickerButton";return i.A.tv&&(t+=" alphaPickerButton-tv"),e&&(t+=" alphaPickerButton-vertical"),t}function h(e,t){return e.map((function(e){return function(e,t){return'<button data-value="'.concat(e,'" class="').concat(f(t),'">').concat(e,"</button>")}(e,t)}))}var v=function(){return e=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var r=this;this.options=t;var n,o,l,c,u=t.element,v=t.itemsContainer,p=t.itemClass;function m(){o=null,r.value(n)}function y(){if(c=null,document.activeElement===l){var e=l.getAttribute("data-value");r.value(e,!0)}}function b(e){var t=a.Ay.parentWithClass(e.target,"alphaPickerButton");if(t){var r=t.getAttribute("data-value");u.dispatchEvent(new CustomEvent("alphavalueclicked",{cancelable:!1,detail:{value:r}}))}}function g(e){var t=a.Ay.parentWithClass(e.target,"alphaPickerButton");if(t){var r=t.getAttribute("data-value");(this._currentValue||"").toUpperCase()===r.toUpperCase()?this.value(null,!0):this.value(r,!0)}}function I(e){c&&(clearTimeout(c),c=null);var t=a.Ay.parentWithClass(e.target,"alphaPickerButton");t&&(l=t,c=setTimeout(y,600))}function T(e){var t=a.Ay.parentWithClass(e.target,p);if(t){var r=t.getAttribute("data-prefix");null!=r&&r.length&&(n=r[0],o&&clearTimeout(o),o=setTimeout(m,100))}}this.enabled=function(e){e?(v&&v.addEventListener("focus",T,!0),"keyboard"===t.mode&&u.addEventListener("click",b),"click"!==t.valueChangeEvent?u.addEventListener("focus",I,!0):u.addEventListener("click",g.bind(this))):(v&&v.removeEventListener("focus",T,!0),u.removeEventListener("click",b),u.removeEventListener("focus",I,!0),u.removeEventListener("click",g.bind(this)))},function(e,t){e.classList.add("alphaPicker"),i.A.tv&&e.classList.add("alphaPicker-tv");var r=e.classList.contains("alphaPicker-vertical");r||e.classList.add("focuscontainer-x");var n,a="",o=f(r),l="alphaPickerRow";r&&(l+=" alphaPickerRow-vertical"),a+='<div class="'.concat(l,'">'),"keyboard"===t.mode?a+='<button data-value=" " is="paper-icon-button-light" class="'.concat(o,'" aria-label="').concat(s.Ay.translate("ButtonSpace"),'"><span class="material-icons alphaPickerButtonIcon space_bar" aria-hidden="true"></span></button>'):a+=h(n=["#"],r).join(""),a+=h(n=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],r).join(""),"keyboard"===t.mode?(a+='<button data-value="backspace" is="paper-icon-button-light" class="'.concat(o,'" aria-label="').concat(s.Ay.translate("ButtonBackspace"),'"><span class="material-icons alphaPickerButtonIcon backspace" aria-hidden="true"></span></button>'),a+="</div>",n=["0","1","2","3","4","5","6","7","8","9"],a+='<div class="'.concat(l,'">'),a+="<br/>",a+=h(n,r).join(""),a+="</div>"):a+="</div>",e.innerHTML=a,e.classList.add("focusable"),e.focus=d}(u,t),this.enabled(!0),this.visible(!0)},(t=[{key:"value",value:function(e,t){var r,n,i=this.options.element;if(void 0!==e)if(null!=e){if(e=e.toUpperCase(),this._currentValue=e,"keyboard"!==this.options.mode){n=i.querySelector(".".concat(u));try{r=i.querySelector(".alphaPickerButton[data-value='".concat(e,"']"))}catch(e){console.error("error in querySelector:",e)}r&&r!==n&&r.classList.add(u),n&&n!==r&&n.classList.remove(u)}}else this._currentValue=e,(n=i.querySelector(".".concat(u)))&&n.classList.remove(u);return t&&i.dispatchEvent(new CustomEvent("alphavaluechanged",{cancelable:!1,detail:{value:e}})),this._currentValue}},{key:"on",value:function(e,t){this.options.element.addEventListener(e,t)}},{key:"off",value:function(e,t){this.options.element.removeEventListener(e,t)}},{key:"updateControls",value:function(e){e.NameLessThan?this.value("#"):this.value(e.NameStartsWith),this.visible(-1!==e.SortBy.indexOf("SortName"))}},{key:"visible",value:function(e){this.options.element.style.visibility=e?"visible":"hidden"}},{key:"values",value:function(){for(var e=this.options.element.querySelectorAll(".alphaPickerButton"),t=[],r=0,n=e.length;r<n;r++)t.push(e[r].getAttribute("data-value"));return t}},{key:"focus",value:function(){var e=this.options.element;n.A.autoFocus(e,!0)}},{key:"destroy",value:function(){var e=this.options.element;this.enabled(!1),e.classList.remove("focuscontainer-x"),this.options=null}}])&&l(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}();t.A=v},1177:function(e,t,r){"use strict";r(84734),r(44962),r(78557),r(96054),r(90076),r(83994),r(82367);var n=r(22832),i=r(38490),a=r(56142),s=r(76542),o=r(46782),l=r(34789),c=r(47629),u=r(8566),d=r(9164),f=r(10736),h=r(44797),v=(r(69177),r(86191)),p=r(65210),m=Object.create(HTMLDivElement.prototype);function y(e){var t=this,r=t.multiSelect;!1!==(null==r?void 0:r.onContainerClick.call(t,e))&&n.Ay.onClick.call(t,e)}function b(e){return e.preventDefault(),e.stopPropagation(),!1}function g(e){var t=e.target,r=c.Ay.parentWithAttribute(t,"data-id");if(null!=r&&r.getAttribute("data-serverid"))return i.default.handleCommand("menu",{sourceElement:r}),e.preventDefault(),e.stopPropagation(),!1}function I(e,t,n){var i=this;Promise.all([r.e(45642),r.e(24468),r.e(14980)]).then(r.bind(r,24468)).then((function(e){e.onUserDataChanged(n,i)}));var a=T(i);-1===a.indexOf("markfavorite")&&-1===a.indexOf("markplayed")||i.notifyRefreshNeeded()}function T(e){var t=e.getAttribute("data-monitor");return t?t.split(","):[]}function A(e,t,n){var i=this;if(-1===T(i).indexOf("timers")){var a=n.ProgramId,s=n.Id;Promise.all([r.e(45642),r.e(24468),r.e(14980)]).then(r.bind(r,24468)).then((function(e){e.onTimerCreated(a,s,i)}))}else i.notifyRefreshNeeded()}function w(){-1!==T(this).indexOf("seriestimers")&&this.notifyRefreshNeeded()}function S(e,t,n){var i=this;-1===T(i).indexOf("timers")?Promise.all([r.e(45642),r.e(24468),r.e(14980)]).then(r.bind(r,24468)).then((function(e){e.onTimerCancelled(n.Id,i)})):i.notifyRefreshNeeded()}function k(e,t,n){var i=this;-1===T(i).indexOf("seriestimers")?Promise.all([r.e(45642),r.e(24468),r.e(14980)]).then(r.bind(r,24468)).then((function(e){e.onSeriesTimerCancelled(n.Id,i)})):i.notifyRefreshNeeded()}function x(e,t,r){var n=this,i=T(n);if(-1===i.indexOf("seriestimers")&&-1===i.indexOf("timers")){var a=r.ItemsAdded||[],s=r.ItemsRemoved||[];if(a.length||s.length){var o=n.getAttribute("data-parentid");if(o){var l=r.FoldersAddedTo||[],c=r.FoldersRemovedFrom||[],u=r.CollectionFolders||[];if(-1===l.indexOf(o)&&-1===c.indexOf(o)&&-1===u.indexOf(o))return}n.notifyRefreshNeeded()}}}function P(e,t){var r,n=this,i=t.state,a=T(n);if(i.NowPlayingItem&&"Video"===i.NowPlayingItem.MediaType){if(-1!==a.indexOf("videoplayback"))return void n.notifyRefreshNeeded(!0)}else if("Audio"===(null===(r=i.NowPlayingItem)||void 0===r?void 0:r.MediaType)&&-1!==a.indexOf("audioplayback"))return void n.notifyRefreshNeeded(!0)}function C(e,t,r,n){var i=r.bind(e);n=n||f.default,h.A.on(n,t,i),e["event_"+t]=i}function O(e,t,r){var n=e["event_"+t];n&&(r=r||f.default,h.A.off(r,t,n),e["event_"+t]=null)}function j(e,t){e.refreshInterval&&(clearInterval(e.refreshInterval),e.refreshInterval=null,t||(e.refreshIntervalEndTime=null))}function E(e,t){j(e),t||(t=parseInt(e.getAttribute("data-refreshinterval")||"0",10)),t&&(e.refreshInterval=setInterval(e.notifyRefreshNeeded.bind(e),t),e.refreshIntervalEndTime=(new Date).getTime()+t)}function L(e){var t=e.Items||e,r=this.parentContainer;r&&(t.length?r.classList.remove("hide"):r.classList.add("hide"));var n,i,a=document.activeElement;this.contains(a)&&(i=!0,n=a.getAttribute("data-id")),this.innerHTML=this.getItemsHtml(t),s.default.lazyChildren(this),i&&function(e,t){if(t){var r=e.querySelector('[data-id="'+t+'"]');if(r)try{return void d.A.focus(r)}catch(e){console.error(e)}}d.A.autoFocus(e)}(this,n),E(this),this.afterRefresh&&this.afterRefresh(e)}m.enableMultiSelect=function(e){var t=this.multiSelect;if(e){if(!t){var n=this;r.e(35308).then(r.bind(r,35308)).then((function(e){var t=e.default;n.multiSelect=new t({container:n,bindOnClick:!1})}))}}else t&&(t.destroy(),this.multiSelect=null)},m.enableDragReordering=function(e){var t=this.sortable;if(e){if(!t){var r=this;r.sortable=new p.Ay(r,{draggable:".listItem",handle:".listViewDragHandle",onEnd:function(e){return function(e,t){var r=e.item,n=e.newIndex,i=r.getAttribute("data-playlistitemid"),a=r.getAttribute("data-playlistid");if(a){var s=r.getAttribute("data-serverid"),o=v.A.getApiClient(s);u.Ay.show(),o.ajax({url:o.getUrl("Playlists/"+a+"/Items/"+i+"/Move/"+n),type:"POST"}).then((function(){u.Ay.hide()}),(function(){u.Ay.hide(),t.refreshItems()}))}else{var l=e.oldIndex;r.dispatchEvent(new CustomEvent("itemdrop",{detail:{oldIndex:l,newIndex:n,playlistItemId:i},bubbles:!0,cancelable:!1}))}}(e,r)}})}}else t&&(t.destroy(),this.sortable=null)},m.createdCallback=function(){this.classList.add("itemsContainer")},m.attachedCallback=function(){this.addEventListener("click",y),l.A.touch?this.addEventListener("contextmenu",b):"false"!==this.getAttribute("data-contextmenu")&&this.addEventListener("contextmenu",g),(o.A.desktop||o.A.mobile&&"false"!==this.getAttribute("data-multiselect"))&&this.enableMultiSelect(!0),o.A.tv&&this.classList.add("itemsContainer-tv"),n.Ay.on(this,{click:!1}),C(this,"UserDataChanged",I),C(this,"TimerCreated",A),C(this,"SeriesTimerCreated",w),C(this,"TimerCancelled",S),C(this,"SeriesTimerCancelled",k),C(this,"LibraryChanged",x),C(this,"playbackstop",P,a.f),"true"===this.getAttribute("data-dragreorder")&&this.enableDragReordering(!0)},m.detachedCallback=function(){j(this),this.enableMultiSelect(!1),this.enableDragReordering(!1),this.removeEventListener("click",y),this.removeEventListener("contextmenu",g),this.removeEventListener("contextmenu",b),n.Ay.off(this,{click:!1}),O(this,"UserDataChanged"),O(this,"TimerCreated"),O(this,"SeriesTimerCreated"),O(this,"TimerCancelled"),O(this,"SeriesTimerCancelled"),O(this,"LibraryChanged"),O(this,"playbackstop",a.f),this.fetchData=null,this.getItemsHtml=null,this.parentContainer=null},m.pause=function(){j(this,!0),this.paused=!0},m.resume=function(e){this.paused=!1;var t=this.refreshIntervalEndTime;if(t){var r=t-(new Date).getTime();r>0&&!this.needsRefresh?E(this,r):(this.needsRefresh=!0,this.refreshIntervalEndTime=null)}return this.needsRefresh||null!=e&&e.refresh?this.refreshItems():Promise.resolve()},m.refreshItems=function(){return this.fetchData?this.paused?(this.needsRefresh=!0,Promise.resolve()):(this.needsRefresh=!1,this.fetchData().then(L.bind(this))):Promise.resolve()},m.notifyRefreshNeeded=function(e){if(this.paused)this.needsRefresh=!0;else{var t=this.refreshTimeout;t&&clearTimeout(t),!0===e?this.refreshItems():this.refreshTimeout=setTimeout(this.refreshItems.bind(this),1e4)}},document.registerElement("emby-itemscontainer",{prototype:m,extends:"div"})},41765:function(e,t,r){"use strict";r(44962),r(78557),r(90076),r(83994),r(82367);var n=r(4113),i=r(47629),a=r(46782),s=r(38490),o=r(9164),l=r(34789),c=(r(69177),Object.create(HTMLDivElement.prototype));function u(e){var t=e.detail.command;"end"===t?(o.A.focusLast(this,"."+this.getAttribute("data-navcommands")),e.preventDefault(),e.stopPropagation()):"pageup"===t?(o.A.moveFocus(e.target,this,"."+this.getAttribute("data-navcommands"),-12),e.preventDefault(),e.stopPropagation()):"pagedown"===t&&(o.A.moveFocus(e.target,this,"."+this.getAttribute("data-navcommands"),12),e.preventDefault(),e.stopPropagation())}c.createdCallback=function(){this.classList.add("emby-scroller")},c.scrollToBeginning=function(){this.scroller&&this.scroller.slideTo(0,!0)},c.toStart=function(e,t){this.scroller&&this.scroller.toStart(e,t)},c.toCenter=function(e,t){this.scroller&&this.scroller.toCenter(e,t)},c.scrollToPosition=function(e,t){this.scroller&&this.scroller.slideTo(e,t)},c.getScrollPosition=function(){if(this.scroller)return this.scroller.getScrollPosition()},c.getScrollSize=function(){if(this.scroller)return this.scroller.getScrollSize()},c.getScrollEventName=function(){if(this.scroller)return this.scroller.getScrollEventName()},c.getScrollSlider=function(){if(this.scroller)return this.scroller.getScrollSlider()},c.addScrollEventListener=function(e,t){this.scroller&&i.Ay.addEventListener(this.scroller.getScrollFrame(),this.scroller.getScrollEventName(),e,t)},c.removeScrollEventListener=function(e,t){this.scroller&&i.Ay.removeEventListener(this.scroller.getScrollFrame(),this.scroller.getScrollEventName(),e,t)},c.attachedCallback=function(){this.getAttribute("data-navcommands")&&s.default.on(this,u);var e="false"!==this.getAttribute("data-horizontal"),t=this.querySelector(".scrollSlider");e&&(t.style["white-space"]="nowrap");var c,d,f=a.A.desktop&&e&&"false"!==this.getAttribute("data-scrollbuttons"),h={horizontal:e,mouseDragging:1,mouseWheel:"false"!==this.getAttribute("data-mousewheel"),touchDragging:1,slidee:t,scrollBy:200,speed:e?270:240,elasticBounds:1,dragHandle:1,autoImmediate:!0,skipSlideToWhenVisible:"true"===this.getAttribute("data-skipfocuswhenvisible"),dispatchScrollEvent:f||"true"===this.getAttribute("data-scrollevent"),hideScrollbar:f||"true"===this.getAttribute("data-hidescrollbar"),allowNativeSmoothScroll:"true"===this.getAttribute("data-allownativesmoothscroll")&&!f,allowNativeScroll:!f,forceHideScrollbars:f,requireAnimation:f&&l.A.edge};this.scroller=new n.A(this,h),this.scroller.init(),this.scroller.reload(),a.A.tv&&this.getAttribute("data-centerfocus")&&(this,c=this.scroller,i.Ay.addEventListener(this,"focus",(function(e){var t=o.A.focusableParent(e.target);t&&c.toCenter(t)}),{capture:!0,passive:!0})),f&&(d=this,r.e(49275).then(r.bind(r,49275)).then((function(){d.insertAdjacentHTML("beforebegin",'<div is="emby-scrollbuttons" class="emby-scrollbuttons padded-right"></div>')})))},c.pause=function(){var e=this.headroom;e&&e.pause()},c.resume=function(){var e=this.headroom;e&&e.resume()},c.detachedCallback=function(){this.getAttribute("data-navcommands")&&s.default.off(this,u);var e=this.headroom;e&&(e.destroy(),this.headroom=null);var t=this.scroller;t&&(t.destroy(),this.scroller=null)},document.registerElement("emby-scroller",{prototype:c,extends:"div"})},28601:function(e,t,r){var n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,s=/^0o[0-7]+$/i,o=parseInt,l="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,c="object"==typeof self&&self&&self.Object===Object&&self,u=l||c||Function("return this")(),d=Object.prototype.toString,f=Math.max,h=Math.min,v=function(){return u.Date.now()};function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function m(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var r=a.test(e);return r||s.test(e)?o(e.slice(2),r?2:8):i.test(e)?NaN:+e}e.exports=function(e,t,r){var n,i,a,s,o,l,c=0,u=!1,d=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var r=n,a=i;return n=i=void 0,c=t,s=e.apply(a,r)}function g(e){var r=e-l;return void 0===l||r>=t||r<0||d&&e-c>=a}function I(){var e=v();if(g(e))return T(e);o=setTimeout(I,function(e){var r=t-(e-l);return d?h(r,a-(e-c)):r}(e))}function T(e){return o=void 0,y&&n?b(e):(n=i=void 0,s)}function A(){var e=v(),r=g(e);if(n=arguments,i=this,l=e,r){if(void 0===o)return function(e){return c=e,o=setTimeout(I,t),u?b(e):s}(l);if(d)return o=setTimeout(I,t),b(l)}return void 0===o&&(o=setTimeout(I,t)),s}return t=m(t)||0,p(r)&&(u=!!r.leading,a=(d="maxWait"in r)?f(m(r.maxWait)||0,t):a,y="trailing"in r?!!r.trailing:y),A.cancel=function(){void 0!==o&&clearTimeout(o),c=0,n=l=i=o=void 0},A.flush=function(){return void 0===o?s:T(v())},A}},13789:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return J}});var n=r(62540),i=r(63696),a=r(9055),s=r(1161),o=r(5898),l=r(65242),c=r(31900),u=function(e){var t=e.onAlphaPicked,r=void 0===t?function(){}:t,a=function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,a=r.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(n=a.next()).done;)s.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}return s}((0,i.useState)(),2),s=a[0],o=a[1],l=(0,i.useRef)(null);return(0,i.useEffect)((function(){var e;return o(new c.A({element:l.current,mode:"keyboard"})),null===(e=l.current)||void 0===e||e.addEventListener("alphavalueclicked",r),function(){null==s||s.destroy()}}),[]),(0,n.jsx)("div",{ref:l,className:"alphaPicker align-items-center"})},d=r(4452),f=r.n(d),h=function(){return h=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},h.apply(this,arguments)},v=(0,i.forwardRef)((function(e,t){var r=e.id,a=e.label,s=e.className,o=e.onBlur,l=e.onFocus,c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}(e,["id","label","className","onBlur","onFocus"]),u=function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,a=r.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(n=a.next()).done;)s.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}return s}((0,i.useState)(!1),2),d=u[0],v=u[1],p=(0,i.useCallback)((function(e){v(!1),null==o||o(e)}),[o]),m=(0,i.useCallback)((function(e){v(!0),null==l||l(e)}),[l]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("label",{htmlFor:r,className:f()("inputLabel",{inputLabelUnfocused:!d,inputLabelFocused:d}),children:a}),(0,n.jsx)("input",h({ref:t,id:r,className:f()("emby-input",s),onBlur:p,onFocus:m},c))]})}));v.displayName="Input";var p=v,m=r(46782),y=r(34789),b=function(e){var t=e.onSearch,r=void 0===t?function(){}:t,a=e.query,s=(0,i.useRef)(null),l=(0,i.useCallback)((function(e){var t,n=e.detail.value,i=(null===(t=s.current)||void 0===t?void 0:t.value)||"";r("backspace"===n?i.length?i.substring(0,i.length-1):"":i+n)}),[r]),c=(0,i.useCallback)((function(e){r(e.target.value)}),[r]);return(0,n.jsxs)("div",{className:"padded-left padded-right searchFields",children:[(0,n.jsxs)("div",{className:"searchFieldsInner flex align-items-center justify-content-center",children:[(0,n.jsx)("span",{className:"searchfields-icon material-icons search","aria-hidden":"true"}),(0,n.jsx)("div",{className:"inputContainer flex-grow",style:{marginBottom:0},children:(0,n.jsx)(p,{ref:s,id:"searchTextInput",className:"searchfields-txtSearch",type:"text","data-keyboard":"true",placeholder:o.Ay.translate("Search"),autoComplete:"off",maxLength:40,autoFocus:!0,value:a,onChange:c})})]}),m.A.tv&&!y.A.tv&&(0,n.jsx)(u,{onAlphaPicked:l})]})},g=r(11444),I=r(65369),T=r(36873),A=r(45251),w=r(32215),S=r(9789),k=r(48727),x=r(61586),P=r(69410),C=r(76942),O=function(){return O=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},O.apply(this,arguments)},j=function(e,t,r,n){return new(r||(r=Promise))((function(i,a){function s(e){try{l(n.next(e))}catch(e){a(e)}}function o(e){try{l(n.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,o)}l((n=n.apply(e,t||[])).next())}))},E=function(e,t){var r,n,i,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]},s=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return s.next=o(0),s.throw=o(1),s.return=o(2),"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function o(o){return function(l){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,o[0]&&(a=0)),a;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},L={limit:100,fields:[T.z.PrimaryImageAspectRatio,T.z.CanDelete,T.z.MediaSourceCount],enableTotalRecordCount:!1,imageTypeLimit:1},N=function(e,t,r,n){return j(void 0,void 0,void 0,(function(){return E(this,(function(i){switch(i.label){case 0:return[4,(0,w.n)(e).getItems(O(O(O({},L),{userId:t,recursive:!0}),r),n)];case 1:return[2,i.sent().data]}}))}))},D=function(e,t,r,n){return j(void 0,void 0,void 0,(function(){return E(this,(function(i){switch(i.label){case 0:return[4,(0,S.p)(e).getPersons(O(O(O({},L),{userId:t}),r),n)];case 1:return[2,i.sent().data]}}))}))},R=function(e,t,r,n){return j(void 0,void 0,void 0,(function(){return E(this,(function(i){switch(i.label){case 0:return[4,(0,k.v)(e).getArtists(O(O(O({},L),{userId:t}),r),n)];case 1:return[2,i.sent().data]}}))}))},B=function(e){return e===I.X.Movies},M=function(e){return e===I.X.Tvshows},F={preferThumb:!0,inheritThumb:!1,showParentTitleOrTitle:!0,showTitle:!1,coverImage:!0,overlayMoreButton:!0,showAirTime:!0,showAirDateTime:!0,showChannelName:!0},q=r(98471),H=function(e){var t=(0,P.gf)(),r=t.api,n=t.user,i=null==n?void 0:n.Id;return(0,x.I)({queryKey:["SearchSuggestions",{parentId:e}],queryFn:function(t){var n=t.signal;return function(e,t,r,n){return i=void 0,a=void 0,o=function(){return function(e,t){var r,n,i,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]},s=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return s.next=o(0),s.throw=o(1),s.return=o(2),"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function o(o){return function(l){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,o[0]&&(a=0)),a;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}}(this,(function(i){switch(i.label){case 0:if(!e)throw new Error("No API instance available");if(!t)throw new Error("No User ID provided");return[4,(0,w.n)(e).getItems({userId:t,sortBy:[q.BBu.IsFavoriteOrLiked,q.BBu.Random],includeItemTypes:[g.D.Movie,g.D.Series,g.D.MusicArtist],limit:20,recursive:!0,imageTypeLimit:0,enableImages:!1,parentId:r,enableTotalRecordCount:!1},n)];case 1:return[2,i.sent().data.Items||[]]}}))},new((s=void 0)||(s=Promise))((function(e,t){function r(e){try{l(o.next(e))}catch(e){t(e)}}function n(e){try{l(o.throw(e))}catch(e){t(e)}}function l(t){var i;t.done?e(t.value):(i=t.value,i instanceof s?i:new s((function(e){e(i)}))).then(r,n)}l((o=o.apply(i,a||[])).next())}));var i,a,s,o}(r,i,e,{signal:n})},enabled:!!r&&!!i})},U=r(84849),W=r(70267),z=r(84851),V=(r(10353),function(e){var t=e.parentId,r=H(t),i=r.isLoading,a=r.data;return i?(0,n.jsx)(U.A,{}):(0,n.jsxs)("div",{className:"verticalSection searchSuggestions",style:{textAlign:"center"},children:[(0,n.jsx)("div",{children:(0,n.jsx)("h2",{className:"sectionTitle padded-left padded-right",children:o.Ay.translate("Suggestions")})}),(0,n.jsx)("div",{className:"searchSuggestionsList padded-left padded-right",children:null==a?void 0:a.map((function(e){return(0,n.jsx)("div",{children:(0,n.jsx)(z.A,{className:"button-link",href:W.appRouter.getRouteUrl(e),style:{display:"inline-block",padding:"0.5em 1em"},children:e.Name})},"suggestion-".concat(e.Id))}))})]})}),_=r(24468),K=(r(41765),r(1177),function(){return K=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},K.apply(this,arguments)}),G=function(e){var t=e.title;return{__html:'<h2 class="sectionTitle sectionTitle-cards focuscontainer-x padded-left padded-right">'.concat(void 0===t?"":t,'</h2>\n    <div is="emby-scroller" data-horizontal="true" data-centerfocus="card" class="padded-top-focusscale padded-bottom-focusscale">\n    <div is="emby-itemscontainer" class="focuscontainer-x itemsContainer scrollSlider"></div>\n</div>')}},X=function(e){var t=e.title,r=e.items,a=void 0===r?[]:r,s=e.cardOptions,o=void 0===s?{}:s,l=(0,i.useRef)(null);return(0,i.useEffect)((function(){var e;_.default.buildCards(a,K({itemsContainer:null===(e=l.current)||void 0===e?void 0:e.querySelector(".itemsContainer")},o))}),[o,a]),(0,n.jsx)("div",{ref:l,className:"verticalSection",dangerouslySetInnerHTML:G({title:t})})},Y=function(){return Y=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Y.apply(this,arguments)},$=function(e){var t=e.parentId,r=e.collectionType,i=e.query,a=function(e,t,r){var n=(0,P.gf)(),i=n.api,a=n.user,s=null==a?void 0:a.Id;return(0,x.I)({queryKey:["SearchItems",{parentId:e,collectionType:t,searchTerm:r}],queryFn:function(n){return j(void 0,[n],void 0,(function(n){var o,l,c,u,d,f,h,v,p,m,y,b,T,w,S,k,x,P,j,L,q,H,U=n.signal;return E(this,(function(n){switch(n.label){case 0:if(!i)throw new Error("No API instance available");if(!s)throw new Error("No User ID provided");return o=[],l=function(e,t,r){t&&(null==t?void 0:t.length)>0&&o.push({title:e,items:t,cardOptions:r})},t&&function(e){return e===I.X.Livetv}(t)?[4,N(i,s,{includeItemTypes:[g.D.LiveTvProgram],isMovie:!0,searchTerm:r},{signal:U})]:[3,8];case 1:return f=n.sent(),l("Movies",f.Items,O(O({},F),{shape:C.G8.PortraitOverflow})),[4,N(i,s,{includeItemTypes:[g.D.LiveTvProgram],isMovie:!1,isSeries:!0,isSports:!1,isKids:!1,isNews:!1,searchTerm:r},{signal:U})];case 2:return v=n.sent(),l("Episodes",v.Items,O({},F)),[4,N(i,s,{includeItemTypes:[g.D.LiveTvProgram],isSports:!0,searchTerm:r},{signal:U})];case 3:return c=n.sent(),l("Sports",c.Items,O({},F)),[4,N(i,s,{includeItemTypes:[g.D.LiveTvProgram],isKids:!0,searchTerm:r},{signal:U})];case 4:return u=n.sent(),l("Kids",u.Items,O({},F)),[4,N(i,s,{includeItemTypes:[g.D.LiveTvProgram],isNews:!0,searchTerm:r},{signal:U})];case 5:return d=n.sent(),l("News",d.Items,O({},F)),[4,N(i,s,{includeItemTypes:[g.D.LiveTvProgram],isMovie:!1,isSeries:!1,isSports:!1,isKids:!1,isNews:!1,searchTerm:r},{signal:U})];case 6:return S=n.sent(),l("Programs",S.Items,O({},F)),[4,N(i,s,{includeItemTypes:[g.D.TvChannel],searchTerm:r},{signal:U})];case 7:k=n.sent(),l("Channels",k.Items),n.label=8;case 8:return t&&!B(t)?[3,10]:[4,N(i,s,{includeItemTypes:[g.D.Movie],parentId:e,searchTerm:r},{signal:U})];case 9:f=n.sent(),l("Movies",f.Items,{showYear:!0}),n.label=10;case 10:return t&&!M(t)?[3,13]:[4,N(i,s,{includeItemTypes:[g.D.Series],parentId:e,searchTerm:r},{signal:U})];case 11:return h=n.sent(),l("Shows",h.Items,{showYear:!0}),[4,N(i,s,{includeItemTypes:[g.D.Episode],parentId:e,isMissing:null===(H=null==a?void 0:a.Configuration)||void 0===H?void 0:H.DisplayMissingEpisodes,searchTerm:r},{signal:U})];case 12:v=n.sent(),l("Episodes",v.Items,{coverImage:!0,showParentTitle:!0}),n.label=13;case 13:return!t||B(t)||M(t)?[4,D(i,s,{searchTerm:r},{signal:U})]:[3,15];case 14:p=n.sent(),l("People",p.Items,{coverImage:!0}),n.label=15;case 15:return t&&!function(e){return e===I.X.Music}(t)?[3,20]:[4,N(i,s,{includeItemTypes:[g.D.Playlist],parentId:e,searchTerm:r},{signal:U})];case 16:return m=n.sent(),l("Playlists",m.Items),[4,R(i,s,{parentId:e,searchTerm:r},{signal:U})];case 17:return y=n.sent(),l("Artists",y.Items,{coverImage:!0}),[4,N(i,s,{includeItemTypes:[g.D.MusicAlbum],parentId:e,searchTerm:r},{signal:U})];case 18:return b=n.sent(),l("Albums",b.Items,{showYear:!0}),[4,N(i,s,{includeItemTypes:[g.D.Audio],parentId:e,searchTerm:r},{signal:U})];case 19:T=n.sent(),l("Songs",T.Items,{showParentTitle:!0,shape:C.G8.SquareOverflow}),n.label=20;case 20:return t?[3,29]:[4,N(i,s,{mediaTypes:[A.z.Video],excludeItemTypes:[g.D.Movie,g.D.Episode,g.D.TvChannel],parentId:e,searchTerm:r},{signal:U})];case 21:return w=n.sent(),l("HeaderVideos",w.Items,{showParentTitle:!0}),[4,N(i,s,{includeItemTypes:[g.D.LiveTvProgram],parentId:e,searchTerm:r},{signal:U})];case 22:return S=n.sent(),l("Programs",S.Items,O({},F)),[4,N(i,s,{includeItemTypes:[g.D.TvChannel],parentId:e,searchTerm:r},{signal:U})];case 23:return k=n.sent(),l("Channels",k.Items),[4,N(i,s,{includeItemTypes:[g.D.PhotoAlbum],parentId:e,searchTerm:r},{signal:U})];case 24:return x=n.sent(),l("HeaderPhotoAlbums",x.Items),[4,N(i,s,{includeItemTypes:[g.D.Photo],parentId:e,searchTerm:r},{signal:U})];case 25:return P=n.sent(),l("Photos",P.Items),[4,N(i,s,{includeItemTypes:[g.D.AudioBook],parentId:e,searchTerm:r},{signal:U})];case 26:return j=n.sent(),l("HeaderAudioBooks",j.Items),[4,N(i,s,{includeItemTypes:[g.D.Book],parentId:e,searchTerm:r},{signal:U})];case 27:return L=n.sent(),l("Books",L.Items),[4,N(i,s,{includeItemTypes:[g.D.BoxSet],parentId:e,searchTerm:r},{signal:U})];case 28:q=n.sent(),l("Collections",q.Items),n.label=29;case 29:return[2,o]}}))}))},enabled:!!i&&!!s})}(t,r,i),s=a.isLoading,l=a.data;return s?(0,n.jsx)(U.A,{}):(null==l?void 0:l.length)?(0,n.jsx)("div",{className:"searchResults, padded-top, padded-bottom-page",children:l.map((function(e,t){return function(e,t){return(0,n.jsx)(X,{title:o.Ay.translate(e.title),items:e.items,cardOptions:Y({shape:C.G8.AutoOverflow,scalable:!0,showTitle:!0,overlayText:!1,centerText:!0,allowBottomPadding:!1},e.cardOptions)},"".concat(e.title,"-").concat(t))}(e,t)}))}):(0,n.jsx)("div",{className:"noItemsMessage centerMessage",children:o.Ay.translate("SearchResultsEmpty",i)})},Q=function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,a=r.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(n=a.next()).done;)s.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}return s},Z="query",J=function(){var e,t,r=Q((0,a.ok)(),2),c=r[0],u=r[1],d=c.get("parentId")||void 0,f=c.get("collectionType")||void 0,h=c.get(Z)||"",v=Q((0,i.useState)(h),2),p=v[0],m=v[1],y=(e=p,"",t=(0,i.useRef)(""),(0,i.useEffect)((function(){t.current=e}),[e]),t.current),g=Q((0,s.Q3)(p,500),1)[0];return(0,i.useEffect)((function(){p!==y?""===p&&""!==h?(c.delete(Z),u(c,{replace:!0})):p!==h&&(c.set(Z,p),u(c,{replace:!0})):p!==h&&(h||(c.delete(Z),u(c,{replace:!0})),m(h))}),[p,y,c,u,h]),(0,n.jsxs)(l.A,{id:"searchPage",title:o.Ay.translate("Search"),className:"mainAnimatedPage libraryPage allLibraryPage noSecondaryNavPage",children:[(0,n.jsx)(b,{query:p,onSearch:m}),p?(0,n.jsx)($,{parentId:d,collectionType:f,query:g}):(0,n.jsx)(V,{parentId:d})]})}},84851:function(e,t,r){"use strict";var n=r(62540),i=r(63696),a=r(4452),s=r.n(a),o=r(46782),l=r(13615),c=r(70267),u=r(22622),d=function(){return d=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},d.apply(this,arguments)};t.A=function(e){var t=e.className,r=e.isAutoHideEnabled,a=e.href,f=e.target,h=e.children,v=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}(e,["className","isAutoHideEnabled","href","target","children"]),p=(0,i.useCallback)((function(e){var t=a||"";"#"!==t?f?u.g.supports("targetblank")||(e.preventDefault(),l.A.openUrl(t)):(e.preventDefault(),c.appRouter.show(t).catch((function(e){console.error("[LinkButton] failed to show url",t,e)}))):e.preventDefault()}),[a,f]);if(!0===r&&!u.g.supports("externallinks"))return null;var m=s()("emby-button",t,{"show-focus":o.A.tv});return(0,n.jsx)("a",d({className:m,href:a,target:f,onClick:p},v,{children:h}))}}}]);