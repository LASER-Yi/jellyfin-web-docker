"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[62882],{62882:function(t,e,n){n.r(e),n.d(e,{show:function(){return u}});var i=n(22696),o=n.n(i),a=n(79754),l=n(46782),r=n(5898),s=n(47629),c=(n(10353),function(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],i=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")});function d(t,e,i){Promise.resolve().then(n.bind(n,10838)).then((function(n){var o=i?"on":"off";n.centerFocus[o](t,e)})).catch((function(t){console.warn("Error in centerFocus",t)}))}function u(t){var e,n,i,u={removeOnClose:!0,enableHistory:t.enableHistory,scrollY:!1};l.A.tv?(u.size="fullscreen",i=!0,u.autoFocus=!0):(u.modal=!1,u.entryAnimation=t.entryAnimation,u.exitAnimation=t.exitAnimation,u.entryAnimationDuration=t.entryAnimationDuration||140,u.exitAnimationDuration=t.exitAnimationDuration||100,u.autoFocus=!1);var h=a.default.createDialog(u);i?h.classList.add("actionsheet-fullscreen"):h.classList.add("actionsheet-not-fullscreen"),h.classList.add("actionSheet"),t.dialogClass&&h.classList.add(t.dialogClass);var f="",v=l.A.tv?"scrollY smoothScrollY hiddenScrollY":"scrollY",m="";t.items.length>20&&(m+="min-width:"+(s.Ay.getWindowSize().innerWidth>=300?240:200)+"px;");var y,p=!1,b=[];try{for(var x=c(t.items),A=x.next();!A.done;A=x.next())(y=(C=A.value).icon||(C.selected?"check":null))&&(p=!0),b.push(y||"")}catch(t){e={error:t}}finally{try{A&&!A.done&&(n=x.return)&&n.call(x)}finally{if(e)throw e.error}}l.A.tv&&(f+='<button is="paper-icon-button-light" class="btnCloseActionSheet hide-mouse-idle-tv" tabindex="-1" title="'.concat(r.Ay.translate("ButtonBack"),'">\n                     <span class="material-icons arrow_back" aria-hidden="true"></span>\n                 </button>'));var S=t.title&&!p;S||l.A.tv?f+='<div class="actionSheetContent actionSheetContent-centered">':f+='<div class="actionSheetContent">',t.title&&(f+='<h1 class="actionSheetTitle">'+o()(t.title)+"</h1>"),t.text&&(f+='<p class="actionSheetText">'+o()(t.text)+"</p>");var I="actionSheetScroller";l.A.tv&&(I+=" actionSheetScroller-tv focuscontainer-x focuscontainer-y"),f+='<div class="'+I+" "+v+'" style="'+m+'">';var g="listItem listItem-button actionSheetMenuItem";(t.border||t.shaded)&&(g+=" listItem-border"),t.menuItemClass&&(g+=" "+t.menuItemClass),l.A.tv&&(g+=" listItem-focusscale"),l.A.mobile&&(g+=" actionsheet-xlargeFont");for(var w=0;w<t.items.length;w++){var C;(C=t.items[w]).divider?f+='<div class="actionsheetDivider"></div>':(f+="<button"+(C.selected&&l.A.tv?" autoFocus":"")+' is="emby-button" type="button" class="'+g+'" data-id="'+(null==C.id||""===C.id?C.value:C.id)+'">',(y=b[w])?f+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons '.concat(y,'" aria-hidden="true"></span>'):p&&!S&&(f+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons check" aria-hidden="true" style="visibility:hidden;"></span>'),f+='<div class="listItemBody actionsheetListItemBody">',f+='<div class="listItemBodyText actionSheetItemText">',f+=o()(C.name||C.textContent||C.innerText),f+="</div>",C.secondaryText&&(f+='<div class="listItemBodyText secondary">'.concat(o()(C.secondaryText),"</div>")),f+="</div>",C.asideText&&(f+='<div class="listItemAside actionSheetItemAsideText">'.concat(o()(C.asideText),"</div>")),f+="</button>")}if(t.showCancel&&(f+='<div class="buttons">',f+='<button is="emby-button" type="button" class="btnCloseActionSheet">'.concat(r.Ay.translate("ButtonCancel"),"</button>"),f+="</div>"),f+="</div>",h.innerHTML=f,l.A.tv){var T=h.querySelector(".actionSheetScroller");T&&d(T,!1,!0)}var k=h.querySelector(".btnCloseActionSheet");k&&k.addEventListener("click",(function(){a.default.close(h)}));var L,B=null;return t.timeout&&(L=setTimeout((function(){a.default.close(h)}),t.timeout)),new Promise((function(e,n){var i=!1;h.addEventListener("click",(function(n){var o=s.Ay.parentWithClass(n.target,"actionSheetMenuItem");o&&(B=o.getAttribute("data-id"),t.resolveOnClick&&(Array.isArray(t.resolveOnClick)?-1!==t.resolveOnClick.indexOf(B)&&(e(B),i=!0):(e(B),i=!0)),a.default.close(h))})),h.addEventListener("close",(function(){if(l.A.tv){var o=h.querySelector(".actionSheetScroller");o&&d(o,!1,!1)}L&&(clearTimeout(L),L=void 0),i||(null!=B?(t.callback&&t.callback(B),e(B)):n(new Error("ActionSheet closed without resolving")))})),a.default.open(h).catch((function(t){console.warn("DialogHelper.open error",t)}));var o=t.positionTo&&"fullscreen"!==u.size?function(t,e,n){var i=s.Ay.getWindowSize(),o=i.innerHeight,a=i.innerWidth,l=function(t){var e,n,i=[];if(!document)return i;try{for(var o=c(t),a=o.next();!a.done;a=o.next()){var l=a.value.getBoundingClientRect();i.push({top:l.top,left:l.left,width:l.width,height:l.height})}}catch(t){e={error:t}}finally{try{a&&!a.done&&(n=o.return)&&n.call(o)}finally{if(e)throw e.error}}return i}([t])[0];"top"!==e.positionY&&(l.top+=(l.height||0)/2),l.left+=(l.width||0)/2;var r=n.offsetHeight||300,d=n.offsetWidth||160;l.top-=r/2,l.left-=d/2;var u=l.left+d-a,h=l.top+r-o;return u>0&&(l.left-=u+20),h>0&&(l.top-=h+20),l.top+=e.offsetTop||0,l.left+=e.offsetLeft||0,l.top=Math.max(l.top,10),l.left=Math.max(l.left,10),l}(t.positionTo,t,h):null;o&&(h.style.position="fixed",h.style.margin="0",h.style.left=o.left+"px",h.style.top=o.top+"px")}))}e.default={show:u}}}]);