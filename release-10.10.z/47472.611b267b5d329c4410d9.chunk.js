"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[47472,25091],{25091:function(e,t,s){s.r(t),s.d(t,{getTabsElement:function(){return h},selectedTabIndex:function(){return b},setTabs:function(){return v}}),s(44962),s(86584),s(78557),s(90076),s(83994),s(82367);var n,a,i,r=s(47629),c=s(34789),l=s(44797),d=(s(79845),s(10353),document.querySelector(".skinHeader"));function o(){this.selectedIndex(this.readySelectedIndex),this.readySelectedIndex=null}function u(e){function t(e){if(r.Ay.parentWithTag(e,"input"))return!1;var t=e.classList;return!t||!t.contains("scrollX")&&!t.contains("animatedScrollX")}for(var s=e;null!=s;){if(!t(s))return!1;s=s.parentNode}return!0}function v(e,t,r,v,b,h,f){if(a||(a=d.querySelector(".headerTabs")),!e)return n&&(document.body.classList.remove("withSectionTabs"),a.innerHTML="",a.classList.add("hide"),n=null),{tabsContainer:a,replaced:!1};var m=a;if(n||m.classList.remove("hide"),n!==e){var y=0,g='<div is="emby-tabs"'+(null==t?"":' data-index="'+t+'"')+' class="tabs-viewmenubar"><div class="emby-tabs-slider" style="white-space:nowrap;">'+r().map((function(e){var t,s="emby-tab-button";return!1===e.enabled&&(s+=" hide"),e.cssClass&&(s+=" "+e.cssClass),t=e.href?'<a href="'+e.href+'" is="emby-linkbutton" class="'+s+'" data-index="'+y+'"><div class="emby-button-foreground">'+e.name+"</div></a>":'<button type="button" is="emby-button" class="'+s+'" data-index="'+y+'"><div class="emby-button-foreground">'+e.name+"</div></button>",y++,t})).join("")+"</div></div>";return m.innerHTML=g,window.CustomElements.upgradeSubtree(m),document.body.classList.add("withSectionTabs"),n=e,function(e,t){if(c.A.touch){var n=function(s,n){u(n)&&e.contains(n)&&t.selectNext()},a=function(s,n){u(n)&&e.contains(n)&&t.selectPrevious()};s.e(19842).then(s.bind(s,19842)).then((function(t){var s=new(0,t.default)(e.parentNode.parentNode);l.A.on(s,"swipeleft",n),l.A.on(s,"swiperight",a),e.addEventListener("viewdestroy",(function(){s.destroy()}))}))}}(e,i=m.querySelector('[is="emby-tabs"]')),v&&i.addEventListener("beforetabchange",(function(e){var t=v();if(null!=e.detail.previousIndex){var s=t[e.detail.previousIndex];s&&s.classList.remove("is-active")}var n=t[e.detail.selectedTabIndex];n&&n.classList.add("is-active")})),b&&i.addEventListener("beforetabchange",b),h&&i.addEventListener("tabchange",h),!1!==f&&(i.selectedIndex?i.selectedIndex(t):(i.readySelectedIndex=t,i.addEventListener("ready",o))),{tabsContainer:m,tabs:i,replaced:!0}}return i.selectedIndex(t),{tabsContainer:m,tabs:i,replaced:!1}}function b(e){null!=e?i.selectedIndex(e):i.triggerTabChange()}function h(){return document.querySelector(".tabs-viewmenubar")}},79845:function(e,t,s){s(96054),s(69177);var n=s(47629),a=s(4113),i=s(34789),r=s(9164),c=s(46782),l=Object.create(HTMLDivElement.prototype),d="emby-tab-button",o=d+"-active";function u(e){e.classList.add(o)}function v(e,t,s){var n;e.dispatchEvent(new CustomEvent("beforetabchange",{detail:{selectedTabIndex:t,previousIndex:s}})),null!=s&&s!==t&&(n=null)&&n.classList.remove("is-active")}function b(e){var t=this,s=t.querySelector("."+o),a=n.Ay.parentWithClass(e.target,d);if(a&&a!==s){s&&s.classList.remove(o);var i=s?parseInt(s.getAttribute("data-index"),10):null;u(a);var r=parseInt(a.getAttribute("data-index"),10);v(t,r,i),setTimeout((function(){t.selectedTabIndex=r,t.dispatchEvent(new CustomEvent("tabchange",{detail:{selectedTabIndex:r,previousIndex:i}}))}),120),t.scroller&&t.scroller.toCenter(a,!1)}}function h(e){var t=n.Ay.parentWithClass(e.target,d);t&&this.scroller&&this.scroller.toCenter(t,!1)}function f(e){var t=e.target.parentNode.querySelector(".lastFocused");t&&t.classList.remove("lastFocused"),e.target.classList.add("lastFocused")}function m(e){return e.querySelector("."+o)}function y(e,t){for(var s=e[t];s;){if(s.classList.contains(d)&&!s.classList.contains("hide"))return s;s=s[t]}return null}l.createdCallback=function(){this.classList.contains("emby-tabs")||(this.classList.add("emby-tabs"),this.classList.add("focusable"),n.Ay.addEventListener(this,"click",b,{passive:!0}),c.A.tv&&n.Ay.addEventListener(this,"focusin",h,{passive:!0}),n.Ay.addEventListener(this,"focusout",f))},l.focus=function(){var e=this.querySelector("."+o),t=this.querySelector(".lastFocused");t?r.A.focus(t):e?r.A.focus(e):r.A.autoFocus(this)},l.refresh=function(){this.scroller&&this.scroller.reload()},l.attachedCallback=function(){!function(e){if(!e.scroller){var t=e.querySelector(".emby-tabs-slider");t?(e.scroller=new a.A(e,{horizontal:1,itemNav:0,mouseDragging:1,touchDragging:1,slidee:t,smart:!0,releaseSwing:!0,scrollBy:200,speed:120,elasticBounds:1,dragHandle:1,dynamicHandle:1,clickBar:1,hiddenScroll:!0,requireAnimation:!i.A.safari,allowNativeSmoothScroll:!0}),e.scroller.init()):(e.classList.add("scrollX"),e.classList.add("hiddenScrollX"),e.classList.add("smoothScrollX"))}}(this);var e=this.querySelector("."+o),t=e?parseInt(e.getAttribute("data-index"),10):parseInt(this.getAttribute("data-index")||"0",10);if(-1!==t){this.selectedTabIndex=t;var s=this.querySelectorAll("."+d)[t];s&&u(s)}this.readyFired||(this.readyFired=!0,this.dispatchEvent(new CustomEvent("ready",{})))},l.detachedCallback=function(){this.scroller&&(this.scroller.destroy(),this.scroller=null),n.Ay.removeEventListener(this,"click",b,{passive:!0}),c.A.tv&&n.Ay.removeEventListener(this,"focusin",h,{passive:!0})},l.selectedIndex=function(e,t){var s=this;if(null==e)return s.selectedTabIndex||0;var n=s.selectedIndex();s.selectedTabIndex=e;var a=s.querySelectorAll("."+d);if(n===e||!1===t){v(s,e,n),s.dispatchEvent(new CustomEvent("tabchange",{detail:{selectedTabIndex:e}}));var i=a[n];u(a[e]),n!==e&&i&&i.classList.remove(o)}else b.call(s,{target:a[e]})},l.selectNext=function(){var e=y(m(this),"nextSibling");e&&b.call(this,{target:e})},l.selectPrevious=function(){var e=y(m(this),"previousSibling");e&&b.call(this,{target:e})},l.triggerBeforeTabChange=function(){v(this,this.selectedIndex())},l.triggerTabChange=function(){this.dispatchEvent(new CustomEvent("tabchange",{detail:{selectedTabIndex:this.selectedIndex()}}))},l.setTabEnabled=function(e,t){var s=this.querySelector('.emby-tab-button[data-index="'+e+'"]');t?s.classList.remove("hide"):s.classList.remove("add")},document.registerElement("emby-tabs",{prototype:l,extends:"div"})}}]);