"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[25091],{25091:function(e,t,n){n.r(t),n.d(t,{getTabsElement:function(){return v},selectedTabIndex:function(){return f},setTabs:function(){return b}}),n(44962),n(86584),n(78557),n(90076),n(83994),n(82367);var a,s,i,r=n(47629),d=n(34789),c=n(44797),o=(n(79845),n(10353),document.querySelector(".skinHeader"));function u(){this.selectedIndex(this.readySelectedIndex),this.readySelectedIndex=null}function l(e){function t(e){if(r.Ay.parentWithTag(e,"input"))return!1;var t=e.classList;return!t||!t.contains("scrollX")&&!t.contains("animatedScrollX")}for(var n=e;null!=n;){if(!t(n))return!1;n=n.parentNode}return!0}function b(e,t,r,b,f,v,h){if(s||(s=o.querySelector(".headerTabs")),!e)return a&&(document.body.classList.remove("withSectionTabs"),s.innerHTML="",s.classList.add("hide"),a=null),{tabsContainer:s,replaced:!1};var m=s;if(a||m.classList.remove("hide"),a!==e){var y=0,p='<div is="emby-tabs"'+(null==t?"":' data-index="'+t+'"')+' class="tabs-viewmenubar"><div class="emby-tabs-slider" style="white-space:nowrap;">'+r().map((function(e){var t,n="emby-tab-button";return!1===e.enabled&&(n+=" hide"),e.cssClass&&(n+=" "+e.cssClass),t=e.href?'<a href="'+e.href+'" is="emby-linkbutton" class="'+n+'" data-index="'+y+'"><div class="emby-button-foreground">'+e.name+"</div></a>":'<button type="button" is="emby-button" class="'+n+'" data-index="'+y+'"><div class="emby-button-foreground">'+e.name+"</div></button>",y++,t})).join("")+"</div></div>";return m.innerHTML=p,window.CustomElements.upgradeSubtree(m),document.body.classList.add("withSectionTabs"),a=e,function(e,t){if(d.A.touch){var a=function(n,a){l(a)&&e.contains(a)&&t.selectNext()},s=function(n,a){l(a)&&e.contains(a)&&t.selectPrevious()};n.e(19842).then(n.bind(n,19842)).then((function(t){var n=new(0,t.default)(e.parentNode.parentNode);c.A.on(n,"swipeleft",a),c.A.on(n,"swiperight",s),e.addEventListener("viewdestroy",(function(){n.destroy()}))}))}}(e,i=m.querySelector('[is="emby-tabs"]')),b&&i.addEventListener("beforetabchange",(function(e){var t=b();if(null!=e.detail.previousIndex){var n=t[e.detail.previousIndex];n&&n.classList.remove("is-active")}var a=t[e.detail.selectedTabIndex];a&&a.classList.add("is-active")})),f&&i.addEventListener("beforetabchange",f),v&&i.addEventListener("tabchange",v),!1!==h&&(i.selectedIndex?i.selectedIndex(t):(i.readySelectedIndex=t,i.addEventListener("ready",u))),{tabsContainer:m,tabs:i,replaced:!0}}return i.selectedIndex(t),{tabsContainer:m,tabs:i,replaced:!1}}function f(e){null!=e?i.selectedIndex(e):i.triggerTabChange()}function v(){return document.querySelector(".tabs-viewmenubar")}}}]);