"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[74901],{12658:function(e,t,i){i.d(t,{w:function(){return f}}),i(23938),i(61013),i(27471),i(19068),i(87211),i(25901),i(92189),i(63238),i(95163),i(99785),i(91047),i(5769),i(17460),i(14078);var n=i(34643),a=i(30325),r=i(72365),s=i(94994);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function l(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,a=function(e,t){if("object"!==o(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,"string");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===o(a)?a:String(a)),n)}var a}i(61414);var c="alphaPickerButton-selected";function u(){var e=this.querySelector(".".concat(c));e?n.Z.focus(e):n.Z.autoFocus(this,!0)}function d(e){var t="alphaPickerButton";return a.Z.tv&&(t+=" alphaPickerButton-tv"),e&&(t+=" alphaPickerButton-vertical"),t}function h(e,t){return e.map((function(e){return function(e,t){return'<button data-value="'.concat(e,'" class="').concat(d(t),'">').concat(e,"</button>")}(e,t)}))}var f=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var i=this;this.options=t;var n,o,l,c,f=t.element,v=t.itemsContainer,m=t.itemClass;function p(){o=null,i.value(n)}function b(){if(c=null,document.activeElement===l){var e=l.getAttribute("data-value");i.value(e,!0)}}function y(e){var t=r.ZP.parentWithClass(e.target,"alphaPickerButton");if(t){var i=t.getAttribute("data-value");f.dispatchEvent(new CustomEvent("alphavalueclicked",{cancelable:!1,detail:{value:i}}))}}function g(e){var t=r.ZP.parentWithClass(e.target,"alphaPickerButton");if(t){var i=t.getAttribute("data-value");(this._currentValue||"").toUpperCase()===i.toUpperCase()?this.value(null,!0):this.value(i,!0)}}function k(e){c&&(clearTimeout(c),c=null);var t=r.ZP.parentWithClass(e.target,"alphaPickerButton");t&&(l=t,c=setTimeout(b,600))}function P(e){var t=r.ZP.parentWithClass(e.target,m);if(t){var i=t.getAttribute("data-prefix");i&&i.length&&(n=i[0],o&&clearTimeout(o),o=setTimeout(p,100))}}this.enabled=function(e){e?(v&&v.addEventListener("focus",P,!0),"keyboard"===t.mode&&f.addEventListener("click",y),"click"!==t.valueChangeEvent?f.addEventListener("focus",k,!0):f.addEventListener("click",g.bind(this))):(v&&v.removeEventListener("focus",P,!0),f.removeEventListener("click",y),f.removeEventListener("focus",k,!0),f.removeEventListener("click",g.bind(this)))},function(e,t){e.classList.add("alphaPicker"),a.Z.tv&&e.classList.add("alphaPicker-tv");var i=e.classList.contains("alphaPicker-vertical");i||e.classList.add("focuscontainer-x");var n,r="",o=d(i),l="alphaPickerRow";i&&(l+=" alphaPickerRow-vertical"),r+='<div class="'.concat(l,'">'),"keyboard"===t.mode?r+='<button data-value=" " is="paper-icon-button-light" class="'.concat(o,'" aria-label="').concat(s.ZP.translate("ButtonSpace"),'"><span class="material-icons alphaPickerButtonIcon space_bar" aria-hidden="true"></span></button>'):r+=h(n=["#"],i).join(""),r+=h(n=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],i).join(""),"keyboard"===t.mode?(r+='<button data-value="backspace" is="paper-icon-button-light" class="'.concat(o,'" aria-label="').concat(s.ZP.translate("ButtonBackspace"),'"><span class="material-icons alphaPickerButtonIcon backspace" aria-hidden="true"></span></button>'),r+="</div>",n=["0","1","2","3","4","5","6","7","8","9"],r+='<div class="'.concat(l,'">'),r+="<br/>",r+=h(n,i).join(""),r+="</div>"):r+="</div>",e.innerHTML=r,e.classList.add("focusable"),e.focus=u}(f,t),this.enabled(!0),this.visible(!0)}var t,i;return t=e,(i=[{key:"value",value:function(e,t){var i,n,a=this.options.element;if(void 0!==e)if(null!=e){if(e=e.toUpperCase(),this._currentValue=e,"keyboard"!==this.options.mode){n=a.querySelector(".".concat(c));try{i=a.querySelector(".alphaPickerButton[data-value='".concat(e,"']"))}catch(e){console.error("error in querySelector:",e)}i&&i!==n&&i.classList.add(c),n&&n!==i&&n.classList.remove(c)}}else this._currentValue=e,(n=a.querySelector(".".concat(c)))&&n.classList.remove(c);return t&&a.dispatchEvent(new CustomEvent("alphavaluechanged",{cancelable:!1,detail:{value:e}})),this._currentValue}},{key:"on",value:function(e,t){this.options.element.addEventListener(e,t)}},{key:"off",value:function(e,t){this.options.element.removeEventListener(e,t)}},{key:"updateControls",value:function(e){e.NameLessThan?this.value("#"):this.value(e.NameStartsWith),this.visible(-1!==e.SortBy.indexOf("SortName"))}},{key:"visible",value:function(e){this.options.element.style.visibility=e?"visible":"hidden"}},{key:"values",value:function(){for(var e=this.options.element.querySelectorAll(".alphaPickerButton"),t=[],i=0,n=e.length;i<n;i++)t.push(e[i].getAttribute("data-value"));return t}},{key:"focus",value:function(){var e=this.options.element;n.Z.autoFocus(e,!0)}},{key:"destroy",value:function(){var e=this.options.element;this.enabled(!1),e.classList.remove("focuscontainer-x"),this.options=null}}])&&l(t.prototype,i),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.Z=f},82427:function(e,t,i){i(5769),i(63238),i(61418),i(17460),i(14078),i(27471),i(32081);var n=i(61008),a=i(58517),r=i(48957),s=i(98301),o=i(30325),l=i(57366),c=i(72365),u=i(28540),d=i(34643),h=i(44038),f=i(81643),v=(i(67752),i(18613)),m=i(28172),p=Object.create(HTMLDivElement.prototype);function b(e){var t=this,i=t.multiSelect;!1!==(null==i?void 0:i.onContainerClick.call(t,e))&&n.ZP.onClick.call(t,e)}function y(e){return e.preventDefault(),e.stopPropagation(),!1}function g(e){var t=e.target,i=c.ZP.parentWithAttribute(t,"data-id");if(i&&i.getAttribute("data-serverid"))return a.default.handleCommand("menu",{sourceElement:i}),e.preventDefault(),e.stopPropagation(),!1}function k(e,t,n){var a=this;Promise.all([i.e(61570),i.e(83264)]).then(i.bind(i,61570)).then((function(e){e.onUserDataChanged(n,a)}));var r=P(a);-1===r.indexOf("markfavorite")&&-1===r.indexOf("markplayed")||a.notifyRefreshNeeded()}function P(e){var t=e.getAttribute("data-monitor");return t?t.split(","):[]}function C(e,t,n){var a=this;if(-1===P(a).indexOf("timers")){var r=n.ProgramId,s=n.Id;Promise.all([i.e(61570),i.e(83264)]).then(i.bind(i,61570)).then((function(e){e.onTimerCreated(r,s,a)}))}else a.notifyRefreshNeeded()}function I(){-1!==P(this).indexOf("seriestimers")&&this.notifyRefreshNeeded()}function E(e,t,n){var a=this;-1===P(a).indexOf("timers")?Promise.all([i.e(61570),i.e(83264)]).then(i.bind(i,61570)).then((function(e){e.onTimerCancelled(n.Id,a)})):a.notifyRefreshNeeded()}function L(e,t,n){var a=this;-1===P(a).indexOf("seriestimers")?Promise.all([i.e(61570),i.e(83264)]).then(i.bind(i,61570)).then((function(e){e.onSeriesTimerCancelled(n.Id,a)})):a.notifyRefreshNeeded()}function T(e,t,i){var n=this,a=P(n);if(-1===a.indexOf("seriestimers")&&-1===a.indexOf("timers")){var r=i.ItemsAdded||[],s=i.ItemsRemoved||[];if(r.length||s.length){var o=n.getAttribute("data-parentid");if(o){var l=i.FoldersAddedTo||[],c=i.FoldersRemovedFrom||[],u=i.CollectionFolders||[];if(-1===l.indexOf(o)&&-1===c.indexOf(o)&&-1===u.indexOf(o))return}n.notifyRefreshNeeded()}}}function S(e,t){var i,n=this,a=t.state,r=P(n);if(a.NowPlayingItem&&"Video"===a.NowPlayingItem.MediaType){if(-1!==r.indexOf("videoplayback"))return void n.notifyRefreshNeeded(!0)}else if("Audio"===(null===(i=a.NowPlayingItem)||void 0===i?void 0:i.MediaType)&&-1!==r.indexOf("audioplayback"))return void n.notifyRefreshNeeded(!0)}function Z(e,t,i,n){var a=i.bind(e);n=n||h.default,f.Z.on(n,t,a),e["event_"+t]=a}function x(e,t,i){var n=e["event_"+t];n&&(i=i||h.default,f.Z.off(i,t,n),e["event_"+t]=null)}function R(e,t){e.refreshInterval&&(clearInterval(e.refreshInterval),e.refreshInterval=null,t||(e.refreshIntervalEndTime=null))}function w(e,t){R(e),t||(t=parseInt(e.getAttribute("data-refreshinterval")||"0",10)),t&&(e.refreshInterval=setInterval(e.notifyRefreshNeeded.bind(e),t),e.refreshIntervalEndTime=(new Date).getTime()+t)}function A(e){var t=e.Items||e,i=this.parentContainer;i&&(t.length?i.classList.remove("hide"):i.classList.add("hide"));var n,a,r=document.activeElement;this.contains(r)&&(a=!0,n=r.getAttribute("data-id")),this.innerHTML=this.getItemsHtml(t),s.default.lazyChildren(this),a&&function(e,t){if(t){var i=e.querySelector('[data-id="'+t+'"]');if(i)try{return void d.Z.focus(i)}catch(e){console.error(e)}}d.Z.autoFocus(e)}(this,n),w(this),this.afterRefresh&&this.afterRefresh(e)}p.enableMultiSelect=function(e){var t=this.multiSelect;if(e){if(!t){var n=this;Promise.all([i.e(52943),i.e(9245)]).then(i.bind(i,52943)).then((function(e){var t=e.default;n.multiSelect=new t({container:n,bindOnClick:!1})}))}}else t&&(t.destroy(),this.multiSelect=null)},p.enableDragReordering=function(e){var t=this.sortable;if(e){if(!t){var i=this;i.sortable=new m.ZP(i,{draggable:".listItem",handle:".listViewDragHandle",onEnd:function(e){return function(e,t){var i=e.item,n=e.newIndex,a=i.getAttribute("data-playlistitemid"),r=i.getAttribute("data-playlistid");if(r){var s=i.getAttribute("data-serverid"),o=v.Z.getApiClient(s);u.ZP.show(),o.ajax({url:o.getUrl("Playlists/"+r+"/Items/"+a+"/Move/"+n),type:"POST"}).then((function(){u.ZP.hide()}),(function(){u.ZP.hide(),t.refreshItems()}))}else{var l=e.oldIndex;i.dispatchEvent(new CustomEvent("itemdrop",{detail:{oldIndex:l,newIndex:n,playlistItemId:a},bubbles:!0,cancelable:!1}))}}(e,i)}})}}else t&&(t.destroy(),this.sortable=null)},p.createdCallback=function(){this.classList.add("itemsContainer")},p.attachedCallback=function(){this.addEventListener("click",b),l.Z.touch?this.addEventListener("contextmenu",y):"false"!==this.getAttribute("data-contextmenu")&&this.addEventListener("contextmenu",g),(o.Z.desktop||o.Z.mobile&&"false"!==this.getAttribute("data-multiselect"))&&this.enableMultiSelect(!0),o.Z.tv&&this.classList.add("itemsContainer-tv"),n.ZP.on(this,{click:!1}),Z(this,"UserDataChanged",k),Z(this,"TimerCreated",C),Z(this,"SeriesTimerCreated",I),Z(this,"TimerCancelled",E),Z(this,"SeriesTimerCancelled",L),Z(this,"LibraryChanged",T),Z(this,"playbackstop",S,r.O),"true"===this.getAttribute("data-dragreorder")&&this.enableDragReordering(!0)},p.detachedCallback=function(){R(this),this.enableMultiSelect(!1),this.enableDragReordering(!1),this.removeEventListener("click",b),this.removeEventListener("contextmenu",g),this.removeEventListener("contextmenu",y),n.ZP.off(this,{click:!1}),x(this,"UserDataChanged"),x(this,"TimerCreated"),x(this,"SeriesTimerCreated"),x(this,"TimerCancelled"),x(this,"SeriesTimerCancelled"),x(this,"LibraryChanged"),x(this,"playbackstop",r.O),this.fetchData=null,this.getItemsHtml=null,this.parentContainer=null},p.pause=function(){R(this,!0),this.paused=!0},p.resume=function(e){this.paused=!1;var t=this.refreshIntervalEndTime;if(t){var i=t-(new Date).getTime();i>0&&!this.needsRefresh?w(this,i):(this.needsRefresh=!0,this.refreshIntervalEndTime=null)}return this.needsRefresh||e&&e.refresh?this.refreshItems():Promise.resolve()},p.refreshItems=function(){return this.fetchData?this.paused?(this.needsRefresh=!0,Promise.resolve()):(this.needsRefresh=!1,this.fetchData().then(A.bind(this))):Promise.resolve()},p.notifyRefreshNeeded=function(e){if(this.paused)this.needsRefresh=!0;else{var t=this.refreshTimeout;t&&clearTimeout(t),!0===e?this.refreshItems():this.refreshTimeout=setTimeout(this.refreshItems.bind(this),1e4)}},document.registerElement("emby-itemscontainer",{prototype:p,extends:"div"})}}]);