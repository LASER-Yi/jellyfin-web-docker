"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[44910,79617,1998],{44910:function(t,e,n){n.r(e),n.d(e,{show:function(){return r}});var i=n(79617),o=n(98320),a=n(80669),s=n(9482);function r(t){var e=t.item,n=e.UserData?e.UserData.PlaybackPositionTicks:null,r="Program"===e.Type?e.ChannelId:e.Id;if(n&&!e.IsFolder){var l=[];l.push({name:s.Ay.translate("ResumeAt",o.Ay.getDisplayRunningTime(n)),id:"resume"}),l.push({name:s.Ay.translate("PlayFromBeginning"),id:"play"}),i.default.show({items:l,positionTo:t.positionTo}).then((function(t){switch(t){case"play":a.f.play({ids:[r],serverId:e.ServerId});break;case"resume":a.f.play({ids:[r],startPositionTicks:n,serverId:e.ServerId});break;case"queue":a.f.queue({items:[e]});break;case"shuffle":a.f.shuffle(e)}}))}else a.f.play({ids:[r],serverId:e.ServerId})}e.default={show:r}},79617:function(t,e,n){n.r(e),n.d(e,{show:function(){return d}});var i=n(22696),o=n.n(i),a=n(79754),s=n(46782),r=n(9482),l=n(47629),c=(n(10353),function(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],i=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")});function u(t,e,i){Promise.resolve().then(n.bind(n,46345)).then((function(n){var o=i?"on":"off";n.centerFocus[o](t,e)})).catch((function(t){console.warn("Error in centerFocus",t)}))}function d(t){var e,n,i,d={removeOnClose:!0,enableHistory:t.enableHistory,scrollY:!1};s.A.tv?(d.size="fullscreen",i=!0,d.autoFocus=!0):(d.modal=!1,d.entryAnimation=t.entryAnimation,d.exitAnimation=t.exitAnimation,d.entryAnimationDuration=t.entryAnimationDuration||140,d.exitAnimationDuration=t.exitAnimationDuration||100,d.autoFocus=!1);var f=a.default.createDialog(d);i?f.classList.add("actionsheet-fullscreen"):f.classList.add("actionsheet-not-fullscreen"),f.classList.add("actionSheet"),t.dialogClass&&f.classList.add(t.dialogClass);var h="",v=s.A.tv?"scrollY smoothScrollY hiddenScrollY":"scrollY",m="";t.items.length>20&&(m+="min-width:"+(l.Ay.getWindowSize().innerWidth>=300?240:200)+"px;");var y,p=!1,b=[];try{for(var A=c(t.items),I=A.next();!I.done;I=A.next())(y=(T=I.value).icon||(T.selected?"check":null))&&(p=!0),b.push(y||"")}catch(t){e={error:t}}finally{try{I&&!I.done&&(n=A.return)&&n.call(A)}finally{if(e)throw e.error}}s.A.tv&&(h+='<button is="paper-icon-button-light" class="btnCloseActionSheet hide-mouse-idle-tv" tabindex="-1" title="'.concat(r.Ay.translate("ButtonBack"),'">\n                     <span class="material-icons arrow_back" aria-hidden="true"></span>\n                 </button>'));var S=t.title&&!p;S||s.A.tv?h+='<div class="actionSheetContent actionSheetContent-centered">':h+='<div class="actionSheetContent">',t.title&&(h+='<h1 class="actionSheetTitle">'+o()(t.title)+"</h1>"),t.text&&(h+='<p class="actionSheetText">'+o()(t.text)+"</p>");var x="actionSheetScroller";s.A.tv&&(x+=" actionSheetScroller-tv focuscontainer-x focuscontainer-y"),h+='<div class="'+x+" "+v+'" style="'+m+'">';var g="listItem listItem-button actionSheetMenuItem";(t.border||t.shaded)&&(g+=" listItem-border"),t.menuItemClass&&(g+=" "+t.menuItemClass),s.A.tv&&(g+=" listItem-focusscale"),s.A.mobile&&(g+=" actionsheet-xlargeFont");for(var w=0;w<t.items.length;w++){var T;(T=t.items[w]).divider?h+='<div class="actionsheetDivider"></div>':(h+="<button"+(T.selected&&s.A.tv?" autoFocus":"")+' is="emby-button" type="button" class="'+g+'" data-id="'+(null==T.id||""===T.id?T.value:T.id)+'">',(y=b[w])?h+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons '.concat(y,'" aria-hidden="true"></span>'):p&&!S&&(h+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons check" aria-hidden="true" style="visibility:hidden;"></span>'),h+='<div class="listItemBody actionsheetListItemBody">',h+='<div class="listItemBodyText actionSheetItemText">',h+=o()(T.name||T.textContent||T.innerText),h+="</div>",T.secondaryText&&(h+='<div class="listItemBodyText secondary">'.concat(o()(T.secondaryText),"</div>")),h+="</div>",T.asideText&&(h+='<div class="listItemAside actionSheetItemAsideText">'.concat(o()(T.asideText),"</div>")),h+="</button>")}if(t.showCancel&&(h+='<div class="buttons">',h+='<button is="emby-button" type="button" class="btnCloseActionSheet">'.concat(r.Ay.translate("ButtonCancel"),"</button>"),h+="</div>"),h+="</div>",f.innerHTML=h,s.A.tv){var C=f.querySelector(".actionSheetScroller");C&&u(C,!1,!0)}var k=f.querySelector(".btnCloseActionSheet");k&&k.addEventListener("click",(function(){a.default.close(f)}));var D,L=null;return t.timeout&&(D=setTimeout((function(){a.default.close(f)}),t.timeout)),new Promise((function(e,n){var i=!1;f.addEventListener("click",(function(n){var o=l.Ay.parentWithClass(n.target,"actionSheetMenuItem");o&&(L=o.getAttribute("data-id"),t.resolveOnClick&&(Array.isArray(t.resolveOnClick)?-1!==t.resolveOnClick.indexOf(L)&&(e(L),i=!0):(e(L),i=!0)),a.default.close(f))})),f.addEventListener("close",(function(){if(s.A.tv){var o=f.querySelector(".actionSheetScroller");o&&u(o,!1,!1)}D&&(clearTimeout(D),D=void 0),i||(null!=L?(t.callback&&t.callback(L),e(L)):n("ActionSheet closed without resolving"))})),a.default.open(f).catch((function(t){console.warn("DialogHelper.open error",t)}));var o=t.positionTo&&"fullscreen"!==d.size?function(t,e,n){var i=l.Ay.getWindowSize(),o=i.innerHeight,a=i.innerWidth,s=function(t){var e,n,i=[];if(!document)return i;try{for(var o=c(t),a=o.next();!a.done;a=o.next()){var s=a.value.getBoundingClientRect();i.push({top:s.top,left:s.left,width:s.width,height:s.height})}}catch(t){e={error:t}}finally{try{a&&!a.done&&(n=o.return)&&n.call(o)}finally{if(e)throw e.error}}return i}([t])[0];"top"!==e.positionY&&(s.top+=(s.height||0)/2),s.left+=(s.width||0)/2;var r=n.offsetHeight||300,u=n.offsetWidth||160;s.top-=r/2,s.left-=u/2;var d=s.left+u-a,f=s.top+r-o;return d>0&&(s.left-=d+20),f>0&&(s.top-=f+20),s.top+=e.offsetTop||0,s.left+=e.offsetLeft||0,s.top=Math.max(s.top,10),s.left=Math.max(s.left,10),s}(t.positionTo,t,f):null;o&&(f.style.position="fixed",f.style.margin="0",f.style.left=o.left+"px",f.style.top=o.top+"px")}))}e.default={show:d}}}]);