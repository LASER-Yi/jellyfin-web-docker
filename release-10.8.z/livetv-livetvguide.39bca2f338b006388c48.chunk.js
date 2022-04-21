"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7425],{87861:function(e,t,s){s(32081),s(67752);var i=s(83094),n=s(13800),a=s(47518),r=s(27515),l=s(78695),o=s(1892),c=s.n(o),d=s(95760),u=s.n(d),h=s(38311),b=s.n(h),v=s(58192),f=s.n(v),m=s(38060),g=s.n(m),p=s(54865),y=s.n(p),x=s(1841),L={};L.styleTagTransform=y(),L.setAttributes=f(),L.insert=b().bind(null,"head"),L.domAPI=u(),L.insertStyleElement=g(),c()(x.Z,L),x.Z&&x.Z.locals&&x.Z.locals,s(87201);var w=Object.create(HTMLDivElement.prototype),E="emby-tab-button",I=E+"-active";function S(e){e.classList.add(I)}function Z(e,t,s){var i;e.dispatchEvent(new CustomEvent("beforetabchange",{detail:{selectedTabIndex:t,previousIndex:s}})),null!=s&&s!==t&&(i=null)&&i.classList.remove("is-active")}function k(e){var t=this,s=t.querySelector("."+I),n=i.ZP.parentWithClass(e.target,E);if(n&&n!==s){s&&s.classList.remove(I);var a=s?parseInt(s.getAttribute("data-index")):null;S(n);var r=parseInt(n.getAttribute("data-index"));Z(t,r,a),setTimeout((function(){t.selectedTabIndex=r,t.dispatchEvent(new CustomEvent("tabchange",{detail:{selectedTabIndex:r,previousIndex:a}}))}),120),t.scroller&&t.scroller.toCenter(n,!1)}}function C(e){var t=i.ZP.parentWithClass(e.target,E);t&&this.scroller&&this.scroller.toCenter(t,!1)}function T(e){var t=e.target.parentNode.querySelector(".lastFocused");t&&t.classList.remove("lastFocused"),e.target.classList.add("lastFocused")}function q(e){return e.querySelector("."+I)}function A(e,t){for(var s=e[t];s;){if(s.classList.contains(E)&&!s.classList.contains("hide"))return s;s=s[t]}return null}w.createdCallback=function(){this.classList.contains("emby-tabs")||(this.classList.add("emby-tabs"),this.classList.add("focusable"),i.ZP.addEventListener(this,"click",k,{passive:!0}),l.Z.tv&&i.ZP.addEventListener(this,"focusin",C,{passive:!0}),i.ZP.addEventListener(this,"focusout",T))},w.focus=function(){var e=this.querySelector("."+I),t=this.querySelector(".lastFocused");t?r.Z.focus(t):e?r.Z.focus(e):r.Z.autoFocus(this)},w.refresh=function(){this.scroller&&this.scroller.reload()},w.attachedCallback=function(){!function(e){if(!e.scroller){var t=e.querySelector(".emby-tabs-slider");t?(e.scroller=new n.Z(e,{horizontal:1,itemNav:0,mouseDragging:1,touchDragging:1,slidee:t,smart:!0,releaseSwing:!0,scrollBy:200,speed:120,elasticBounds:1,dragHandle:1,dynamicHandle:1,clickBar:1,hiddenScroll:!0,requireAnimation:!a.Z.safari,allowNativeSmoothScroll:!0}),e.scroller.init()):(e.classList.add("scrollX"),e.classList.add("hiddenScrollX"),e.classList.add("smoothScrollX"))}}(this);var e=this.querySelector("."+I),t=e?parseInt(e.getAttribute("data-index")):parseInt(this.getAttribute("data-index")||"0");if(-1!==t){this.selectedTabIndex=t;var s=this.querySelectorAll("."+E)[t];s&&S(s)}this.readyFired||(this.readyFired=!0,this.dispatchEvent(new CustomEvent("ready",{})))},w.detachedCallback=function(){this.scroller&&(this.scroller.destroy(),this.scroller=null),i.ZP.removeEventListener(this,"click",k,{passive:!0}),l.Z.tv&&i.ZP.removeEventListener(this,"focusin",C,{passive:!0})},w.selectedIndex=function(e,t){var s=this;if(null==e)return s.selectedTabIndex||0;var i=s.selectedIndex();s.selectedTabIndex=e;var n=s.querySelectorAll("."+E);if(i===e||!1===t){Z(s,e,i),s.dispatchEvent(new CustomEvent("tabchange",{detail:{selectedTabIndex:e}}));var a=n[i];S(n[e]),i!==e&&a&&a.classList.remove(I)}else k.call(s,{target:n[e]})},w.selectNext=function(){var e=A(q(this),"nextSibling");e&&k.call(this,{target:e})},w.selectPrevious=function(){var e=A(q(this),"previousSibling");e&&k.call(this,{target:e})},w.triggerBeforeTabChange=function(){Z(this,this.selectedIndex())},w.triggerTabChange=function(){this.dispatchEvent(new CustomEvent("tabchange",{detail:{selectedTabIndex:this.selectedIndex()}}))},w.setTabEnabled=function(e,t){var s=this.querySelector('.emby-tab-button[data-index="'+e+'"]');t?s.classList.remove("hide"):s.classList.remove("add")},document.registerElement("emby-tabs",{prototype:w,extends:"div"})},1841:function(e,t,s){var i=s(54933),n=s.n(i),a=s(93476),r=s.n(a)()(n());r.push([e.id,".emby-tab-button{background:transparent;border-radius:0;box-shadow:none;box-sizing:border-box;cursor:pointer;display:inline-block;-webkit-flex-shrink:0;flex-shrink:0;font-family:inherit;font-size:inherit;font-weight:600;height:auto;line-height:1.25;margin:0;min-width:0;min-width:auto;outline:none;overflow:hidden;padding:1.5em;position:relative;vertical-align:middle;width:auto}.emby-tab-button.show-focus:focus{background:0!important;-webkit-transform:scale(1.3)!important;transform:scale(1.3)!important}.emby-tabs-slider{position:relative}.tabContent:not(.is-active){display:none}",""]),t.Z=r}}]);