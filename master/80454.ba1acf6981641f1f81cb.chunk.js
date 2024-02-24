"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[80454,33390],{80454:function(t,e,n){n.r(e),n.d(e,{show:function(){return u}});var i=n(65009),o=n.n(i),a=n(93355),l=n(30325),r=n(94994),s=n(72365),c=(n(38228),function(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],i=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")});function d(t,e,i){Promise.resolve().then(n.bind(n,35545)).then((function(n){var o=i?"on":"off";n.centerFocus[o](t,e)})).catch((function(t){console.warn("Error in centerFocus",t)}))}function u(t){var e,n,i,u={removeOnClose:!0,enableHistory:t.enableHistory,scrollY:!1};l.Z.tv?(u.size="fullscreen",i=!0,u.autoFocus=!0):(u.modal=!1,u.entryAnimation=t.entryAnimation,u.exitAnimation=t.exitAnimation,u.entryAnimationDuration=t.entryAnimationDuration||140,u.exitAnimationDuration=t.exitAnimationDuration||100,u.autoFocus=!1);var h=a.default.createDialog(u);i?h.classList.add("actionsheet-fullscreen"):h.classList.add("actionsheet-not-fullscreen"),h.classList.add("actionSheet"),t.dialogClass&&h.classList.add(t.dialogClass);var f="",v=l.Z.tv?"scrollY smoothScrollY hiddenScrollY":"scrollY",m="";t.items.length>20&&(m+="min-width:"+(s.ZP.getWindowSize().innerWidth>=300?240:200)+"px;");var p,y=!1,b=[];try{for(var x=c(t.items),S=x.next();!S.done;S=x.next())(p=(T=S.value).icon||(T.selected?"check":null))&&(y=!0),b.push(p||"")}catch(t){e={error:t}}finally{try{S&&!S.done&&(n=x.return)&&n.call(x)}finally{if(e)throw e.error}}l.Z.tv&&(f+='<button is="paper-icon-button-light" class="btnCloseActionSheet hide-mouse-idle-tv" tabindex="-1" title="'.concat(r.ZP.translate("ButtonBack"),'">\n                     <span class="material-icons arrow_back" aria-hidden="true"></span>\n                 </button>'));var I=t.title&&!y;I||l.Z.tv?f+='<div class="actionSheetContent actionSheetContent-centered">':f+='<div class="actionSheetContent">',t.title&&(f+='<h1 class="actionSheetTitle">'+o()(t.title)+"</h1>"),t.text&&(f+='<p class="actionSheetText">'+o()(t.text)+"</p>");var g="actionSheetScroller";l.Z.tv&&(g+=" actionSheetScroller-tv focuscontainer-x focuscontainer-y"),f+='<div class="'+g+" "+v+'" style="'+m+'">';var C="listItem listItem-button actionSheetMenuItem";(t.border||t.shaded)&&(C+=" listItem-border"),t.menuItemClass&&(C+=" "+t.menuItemClass),l.Z.tv&&(C+=" listItem-focusscale"),l.Z.mobile&&(C+=" actionsheet-xlargeFont");for(var w=0;w<t.items.length;w++){var T;(T=t.items[w]).divider?f+='<div class="actionsheetDivider"></div>':(f+="<button"+(T.selected&&l.Z.tv?" autoFocus":"")+' is="emby-button" type="button" class="'+C+'" data-id="'+(null==T.id||""===T.id?T.value:T.id)+'">',(p=b[w])?f+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons '.concat(p,'" aria-hidden="true"></span>'):y&&!I&&(f+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons check" aria-hidden="true" style="visibility:hidden;"></span>'),f+='<div class="listItemBody actionsheetListItemBody">',f+='<div class="listItemBodyText actionSheetItemText">',f+=o()(T.name||T.textContent||T.innerText),f+="</div>",T.secondaryText&&(f+='<div class="listItemBodyText secondary">'.concat(o()(T.secondaryText),"</div>")),f+="</div>",T.asideText&&(f+='<div class="listItemAside actionSheetItemAsideText">'.concat(o()(T.asideText),"</div>")),f+="</button>")}if(t.showCancel&&(f+='<div class="buttons">',f+='<button is="emby-button" type="button" class="btnCloseActionSheet">'.concat(r.ZP.translate("ButtonCancel"),"</button>"),f+="</div>"),f+="</div>",h.innerHTML=f,l.Z.tv){var A=h.querySelector(".actionSheetScroller");A&&d(A,!1,!0)}var k=h.querySelector(".btnCloseActionSheet");k&&k.addEventListener("click",(function(){a.default.close(h)}));var Z,L=null;return t.timeout&&(Z=setTimeout((function(){a.default.close(h)}),t.timeout)),new Promise((function(e,n){var i=!1;h.addEventListener("click",(function(n){var o=s.ZP.parentWithClass(n.target,"actionSheetMenuItem");o&&(L=o.getAttribute("data-id"),t.resolveOnClick&&(Array.isArray(t.resolveOnClick)?-1!==t.resolveOnClick.indexOf(L)&&(e(L),i=!0):(e(L),i=!0)),a.default.close(h))})),h.addEventListener("close",(function(){if(l.Z.tv){var o=h.querySelector(".actionSheetScroller");o&&d(o,!1,!1)}Z&&(clearTimeout(Z),Z=void 0),i||(null!=L?(t.callback&&t.callback(L),e(L)):n("ActionSheet closed without resolving"))})),a.default.open(h).catch((function(t){console.warn("DialogHelper.open error",t)}));var o=t.positionTo&&"fullscreen"!==u.size?function(t,e,n){var i=s.ZP.getWindowSize(),o=i.innerHeight,a=i.innerWidth,l=function(t){var e,n,i=[];if(!document)return i;try{for(var o=c(t),a=o.next();!a.done;a=o.next()){var l=a.value.getBoundingClientRect();i.push({top:l.top,left:l.left,width:l.width,height:l.height})}}catch(t){e={error:t}}finally{try{a&&!a.done&&(n=o.return)&&n.call(o)}finally{if(e)throw e.error}}return i}([t])[0];"top"!==e.positionY&&(l.top+=(l.height||0)/2),l.left+=(l.width||0)/2;var r=n.offsetHeight||300,d=n.offsetWidth||160;l.top-=r/2,l.left-=d/2;var u=l.left+d-a,h=l.top+r-o;return u>0&&(l.left-=u+20),h>0&&(l.top-=h+20),l.top+=e.offsetTop||0,l.left+=e.offsetLeft||0,l.top=Math.max(l.top,10),l.left=Math.max(l.left,10),l}(t.positionTo,t,h):null;o&&(h.style.position="fixed",h.style.margin="0",h.style.left=o.left+"px",h.style.top=o.top+"px")}))}e.default={show:u}}}]);