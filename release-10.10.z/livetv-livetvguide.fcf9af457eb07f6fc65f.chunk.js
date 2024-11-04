"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[69212,19069,7160],{38193:function(e,t,s){s.r(t),s.d(t,{default:function(){return a}});var i=s(36934);function a(e,t,s){var a,n=this;n.renderTab=function(){a||(a=new i.A({element:s,serverId:ApiClient.serverId()}))},n.onShow=function(){a&&a.resume()},n.onHide=function(){a&&a.pause()}}},79845:function(e,t,s){s(96054),s(69177);var i=s(47629),a=s(4113),n=s(34789),r=s(9164),l=s(46782),c=Object.create(HTMLDivElement.prototype),o="emby-tab-button",d=o+"-active";function u(e){e.classList.add(d)}function h(e,t,s){var i;e.dispatchEvent(new CustomEvent("beforetabchange",{detail:{selectedTabIndex:t,previousIndex:s}})),null!=s&&s!==t&&(i=null)&&i.classList.remove("is-active")}function v(e){var t=this,s=t.querySelector("."+d),a=i.Ay.parentWithClass(e.target,o);if(a&&a!==s){s&&s.classList.remove(d);var n=s?parseInt(s.getAttribute("data-index"),10):null;u(a);var r=parseInt(a.getAttribute("data-index"),10);h(t,r,n),setTimeout((function(){t.selectedTabIndex=r,t.dispatchEvent(new CustomEvent("tabchange",{detail:{selectedTabIndex:r,previousIndex:n}}))}),120),t.scroller&&t.scroller.toCenter(a,!1)}}function f(e){var t=i.Ay.parentWithClass(e.target,o);t&&this.scroller&&this.scroller.toCenter(t,!1)}function b(e){var t=e.target.parentNode.querySelector(".lastFocused");t&&t.classList.remove("lastFocused"),e.target.classList.add("lastFocused")}function g(e){return e.querySelector("."+d)}function m(e,t){for(var s=e[t];s;){if(s.classList.contains(o)&&!s.classList.contains("hide"))return s;s=s[t]}return null}c.createdCallback=function(){this.classList.contains("emby-tabs")||(this.classList.add("emby-tabs"),this.classList.add("focusable"),i.Ay.addEventListener(this,"click",v,{passive:!0}),l.A.tv&&i.Ay.addEventListener(this,"focusin",f,{passive:!0}),i.Ay.addEventListener(this,"focusout",b))},c.focus=function(){var e=this.querySelector("."+d),t=this.querySelector(".lastFocused");t?r.A.focus(t):e?r.A.focus(e):r.A.autoFocus(this)},c.refresh=function(){this.scroller&&this.scroller.reload()},c.attachedCallback=function(){!function(e){if(!e.scroller){var t=e.querySelector(".emby-tabs-slider");t?(e.scroller=new a.A(e,{horizontal:1,itemNav:0,mouseDragging:1,touchDragging:1,slidee:t,smart:!0,releaseSwing:!0,scrollBy:200,speed:120,elasticBounds:1,dragHandle:1,dynamicHandle:1,clickBar:1,hiddenScroll:!0,requireAnimation:!n.A.safari,allowNativeSmoothScroll:!0}),e.scroller.init()):(e.classList.add("scrollX"),e.classList.add("hiddenScrollX"),e.classList.add("smoothScrollX"))}}(this);var e=this.querySelector("."+d),t=e?parseInt(e.getAttribute("data-index"),10):parseInt(this.getAttribute("data-index")||"0",10);if(-1!==t){this.selectedTabIndex=t;var s=this.querySelectorAll("."+o)[t];s&&u(s)}this.readyFired||(this.readyFired=!0,this.dispatchEvent(new CustomEvent("ready",{})))},c.detachedCallback=function(){this.scroller&&(this.scroller.destroy(),this.scroller=null),i.Ay.removeEventListener(this,"click",v,{passive:!0}),l.A.tv&&i.Ay.removeEventListener(this,"focusin",f,{passive:!0})},c.selectedIndex=function(e,t){var s=this;if(null==e)return s.selectedTabIndex||0;var i=s.selectedIndex();s.selectedTabIndex=e;var a=s.querySelectorAll("."+o);if(i===e||!1===t){h(s,e,i),s.dispatchEvent(new CustomEvent("tabchange",{detail:{selectedTabIndex:e}}));var n=a[i];u(a[e]),i!==e&&n&&n.classList.remove(d)}else v.call(s,{target:a[e]})},c.selectNext=function(){var e=m(g(this),"nextSibling");e&&v.call(this,{target:e})},c.selectPrevious=function(){var e=m(g(this),"previousSibling");e&&v.call(this,{target:e})},c.triggerBeforeTabChange=function(){h(this,this.selectedIndex())},c.triggerTabChange=function(){this.dispatchEvent(new CustomEvent("tabchange",{detail:{selectedTabIndex:this.selectedIndex()}}))},c.setTabEnabled=function(e,t){var s=this.querySelector('.emby-tab-button[data-index="'+e+'"]');t?s.classList.remove("hide"):s.classList.remove("add")},document.registerElement("emby-tabs",{prototype:c,extends:"div"})}}]);