"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[37677],{37677:function(e,t,r){r.r(t),r.d(t,{default:function(){return a}}),r(14382),r(44962),r(86584),r(78557),r(90076),r(83994),r(46968),r(82367);var n=r(8566),i=r(5898),l=(r(77157),r(63001),r(89100)),o=r(41177);function c(e){var t=this,r=t.querySelector("#txtLocalAddress").value,o=t.querySelector("#chkEnableUpnp").checked;!function(e,t,r){e||!t?s({title:i.Ay.translate("TitleHostingSettings"),text:i.Ay.translate("SettingsWarning")}).then(r):r()}(r,o,(function(){var e=function(e){return e.querySelector("#txtPublicHttpPort").value===e.querySelector("#txtPublicHttpsPort").value?"The public http and https ports must be different.":e.querySelector("#txtPortNumber").value===e.querySelector("#txtHttpsPort").value?"The http and https ports must be different.":e.querySelector("#chkEnableIP6").checked||e.querySelector("#chkEnableIP4").checked?null:"Either IPv4 or IPv6 need to be checked."}(t);e?s(e):function(e){var t=e.querySelector("#txtCertificatePath").value||null;return e.querySelector("#chkEnableHttps").checked&&!t?s({title:i.Ay.translate("TitleHostingSettings"),text:i.Ay.translate("HttpsRequiresCert")}).then(Promise.reject):Promise.resolve()}(t).then((function(){n.Ay.show(),ApiClient.getNamedConfiguration("network").then((function(e){e.LocalNetworkSubnets=t.querySelector("#txtLanNetworks").value.split(",").map((function(e){return e.trim()})).filter((function(e){return e.length>0})),e.RemoteIPFilter=t.querySelector("#txtExternalAddressFilter").value.split(",").map((function(e){return e.trim()})).filter((function(e){return e.length>0})),e.KnownProxies=t.querySelector("#txtKnownProxies").value.split(",").map((function(e){return e.trim()})).filter((function(e){return e.length>0})),e.LocalNetworkAddresses=t.querySelector("#txtLocalAddress").value.split(",").map((function(e){return e.trim()})).filter((function(e){return e.length>0})),e.PublishedServerUriBySubnet=t.querySelector("#txtPublishedServer").value.split(",").map((function(e){return e.trim()})).filter((function(e){return e.length>0})),e.IsRemoteIPFilterBlacklist="blacklist"===t.querySelector("#selectExternalAddressFilterMode").value,e.PublicHttpPort=t.querySelector("#txtPublicHttpPort").value,e.PublicHttpsPort=t.querySelector("#txtPublicHttpsPort").value,e.InternalHttpPort=t.querySelector("#txtPortNumber").value,e.InternalHttpsPort=t.querySelector("#txtHttpsPort").value,e.EnableHttps=t.querySelector("#chkEnableHttps").checked,e.RequireHttps=t.querySelector("#chkRequireHttps").checked,e.EnableUPnP=o,e.BaseUrl=t.querySelector("#txtBaseUrl").value,e.EnableRemoteAccess=t.querySelector("#chkRemoteAccess").checked,e.CertificatePath=t.querySelector("#txtCertificatePath").value||null,e.CertificatePassword=t.querySelector("#txtCertPassword").value||null,e.AutoDiscovery=t.querySelector("#chkAutodiscovery").checked,e.EnableIPv6=t.querySelector("#chkEnableIP6").checked,e.EnableIPv4=t.querySelector("#chkEnableIP4").checked,ApiClient.updateNamedConfiguration("network",e).then(l.default.processServerConfigurationUpdateResult,l.default.processErrorResponse)}))}))})),e.preventDefault()}function s(e){return new Promise((function(t,r){(0,o.A)(e).then(t,r)}))}function a(e){e.querySelector("#chkRemoteAccess").addEventListener("change",(function(){this.checked?(e.querySelector(".fldExternalAddressFilter").classList.remove("hide"),e.querySelector(".fldExternalAddressFilterMode").classList.remove("hide"),e.querySelector(".fldPublicHttpPort").classList.remove("hide"),e.querySelector(".fldPublicHttpsPort").classList.remove("hide"),e.querySelector(".fldEnableUpnp").classList.remove("hide")):(e.querySelector(".fldExternalAddressFilter").classList.add("hide"),e.querySelector(".fldExternalAddressFilterMode").classList.add("hide"),e.querySelector(".fldPublicHttpPort").classList.add("hide"),e.querySelector(".fldPublicHttpsPort").classList.add("hide"),e.querySelector(".fldEnableUpnp").classList.add("hide"))})),e.querySelector("#btnSelectCertPath").addEventListener("click",(function(){Promise.resolve().then(r.bind(r,21840)).then((function(t){var r=new(0,t.default);r.show({includeFiles:!0,includeDirectories:!0,callback:function(t){t&&(e.querySelector("#txtCertificatePath").value=t),r.close()},header:i.Ay.translate("HeaderSelectCertificatePath")})}))})),e.querySelector(".dashboardHostingForm").addEventListener("submit",c),e.addEventListener("viewshow",(function(){n.Ay.show(),ApiClient.getNamedConfiguration("network").then((function(t){!function(e,t){var r,i;e.querySelector("#txtPortNumber").value=t.InternalHttpPort,e.querySelector("#txtPublicHttpPort").value=t.PublicHttpPort,e.querySelector("#txtPublicHttpsPort").value=t.PublicHttpsPort,e.querySelector("#txtLocalAddress").value=(t.LocalNetworkAddresses||[]).join(", "),e.querySelector("#txtLanNetworks").value=(t.LocalNetworkSubnets||[]).join(", "),e.querySelector("#txtKnownProxies").value=(t.KnownProxies||[]).join(", "),e.querySelector("#txtExternalAddressFilter").value=(t.RemoteIPFilter||[]).join(", "),e.querySelector("#selectExternalAddressFilterMode").value=t.IsRemoteIPFilterBlacklist?"blacklist":"whitelist",e.querySelector("#chkRemoteAccess").checked=null==t.EnableRemoteAccess||t.EnableRemoteAccess,e.querySelector("#txtHttpsPort").value=t.InternalHttpsPort,e.querySelector("#chkEnableHttps").checked=t.EnableHttps,e.querySelector("#chkRequireHttps").checked=t.RequireHttps,e.querySelector("#txtBaseUrl").value=t.BaseUrl||"",e.querySelector("#txtCertificatePath").value=t.CertificatePath||"",e.querySelector("#txtCertPassword").value=t.CertificatePassword||"",e.querySelector("#chkEnableUpnp").checked=t.EnableUPnP,r=e.querySelector("#chkRemoteAccess"),i=new Event("change",{bubbles:!1,cancelable:!0}),r.dispatchEvent(i),e.querySelector("#chkAutodiscovery").checked=t.AutoDiscovery,e.querySelector("#chkEnableIP6").checked=t.EnableIPv6,e.querySelector("#chkEnableIP4").checked=t.EnableIPv4,e.querySelector("#txtPublishedServer").value=(t.PublishedServerUriBySubnet||[]).join(", "),n.Ay.hide()}(e,t)}))}))}},63001:function(e,t,r){var n=r(46782),i=r(34789),l=r(62882),o=(r(69177),Object.create(HTMLSelectElement.prototype));function c(){return!(!i.A.edgeUwp&&!i.A.xboxOne&&(i.A.tizen||i.A.orsay||i.A.web0s||!i.A.tv&&n.A.tv))}function s(e){var t=a(e),r=t?t.textContent||t.innerText:null;l.default.show({items:e.options,positionTo:e,title:r}).then((function(t){!function(e,t){e.value=t}(e,t),function(e){var t=new Event("change",{bubbles:!1,cancelable:!0});e.dispatchEvent(t)}(e)}))}function a(e){for(var t=e.previousSibling;t&&"LABEL"!==t.tagName;)t=t.previousSibling;return t}function u(){var e=a(this);e&&e.classList.add("selectLabelFocused")}function d(){var e=a(this);e&&e.classList.remove("selectLabelFocused")}function h(e){e.button||c()||(e.preventDefault(),s(this))}function v(e){switch(e.keyCode){case 13:return void(c()||(e.preventDefault(),s(this)));case 37:case 38:case 39:case 40:return void(n.A.tv&&e.preventDefault())}}var f=0;o.createdCallback=function(){this.id||(this.id="embyselect"+f,f++),this.classList.add("emby-select-withcolor"),n.A.tv&&this.classList.add("emby-select-focusscale"),this.addEventListener("mousedown",h),this.addEventListener("keydown",v),this.addEventListener("focus",u),this.addEventListener("blur",d)},o.attachedCallback=function(){var e;if(!this.classList.contains("emby-select")){this.classList.add("emby-select");var t,r=this.ownerDocument.createElement("label");r.innerText=this.getAttribute("label")||"",r.classList.add("selectLabel"),r.htmlFor=this.id,null===(e=this.parentNode)||void 0===e||e.insertBefore(r,this),this.classList.contains("emby-select-withcolor")&&(null===(t=this.parentNode)||void 0===t||t.insertAdjacentHTML("beforeend",'<div class="selectArrowContainer"><div style="visibility:hidden;display:none;">0</div><span class="selectArrow material-icons keyboard_arrow_down" aria-hidden="true"></span></div>'))}},o.setLabel=function(e){var t;(null===(t=this.parentNode)||void 0===t?void 0:t.querySelector("label")).innerText=e},document.registerElement("emby-select",{prototype:o,extends:"select"})},62882:function(e,t,r){r.r(t),r.d(t,{show:function(){return d}});var n=r(22696),i=r.n(n),l=r(79754),o=r(46782),c=r(5898),s=r(47629),a=(r(10353),function(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")});function u(e,t,n){Promise.resolve().then(r.bind(r,10838)).then((function(r){var i=n?"on":"off";r.centerFocus[i](e,t)})).catch((function(e){console.warn("Error in centerFocus",e)}))}function d(e){var t,r,n,d={removeOnClose:!0,enableHistory:e.enableHistory,scrollY:!1};o.A.tv?(d.size="fullscreen",n=!0,d.autoFocus=!0):(d.modal=!1,d.entryAnimation=e.entryAnimation,d.exitAnimation=e.exitAnimation,d.entryAnimationDuration=e.entryAnimationDuration||140,d.exitAnimationDuration=e.exitAnimationDuration||100,d.autoFocus=!1);var h=l.default.createDialog(d);n?h.classList.add("actionsheet-fullscreen"):h.classList.add("actionsheet-not-fullscreen"),h.classList.add("actionSheet"),e.dialogClass&&h.classList.add(e.dialogClass);var v="",f=o.A.tv?"scrollY smoothScrollY hiddenScrollY":"scrollY",y="";e.items.length>20&&(y+="min-width:"+(s.Ay.getWindowSize().innerWidth>=300?240:200)+"px;");var b,p=!1,m=[];try{for(var S=a(e.items),x=S.next();!x.done;x=S.next())(b=(w=x.value).icon||(w.selected?"check":null))&&(p=!0),m.push(b||"")}catch(e){t={error:e}}finally{try{x&&!x.done&&(r=S.return)&&r.call(S)}finally{if(t)throw t.error}}o.A.tv&&(v+='<button is="paper-icon-button-light" class="btnCloseActionSheet hide-mouse-idle-tv" tabindex="-1" title="'.concat(c.Ay.translate("ButtonBack"),'">\n                     <span class="material-icons arrow_back" aria-hidden="true"></span>\n                 </button>'));var P=e.title&&!p;P||o.A.tv?v+='<div class="actionSheetContent actionSheetContent-centered">':v+='<div class="actionSheetContent">',e.title&&(v+='<h1 class="actionSheetTitle">'+i()(e.title)+"</h1>"),e.text&&(v+='<p class="actionSheetText">'+i()(e.text)+"</p>");var A="actionSheetScroller";o.A.tv&&(A+=" actionSheetScroller-tv focuscontainer-x focuscontainer-y"),v+='<div class="'+A+" "+f+'" style="'+y+'">';var k="listItem listItem-button actionSheetMenuItem";(e.border||e.shaded)&&(k+=" listItem-border"),e.menuItemClass&&(k+=" "+e.menuItemClass),o.A.tv&&(k+=" listItem-focusscale"),o.A.mobile&&(k+=" actionsheet-xlargeFont");for(var q=0;q<e.items.length;q++){var w;(w=e.items[q]).divider?v+='<div class="actionsheetDivider"></div>':(v+="<button"+(w.selected&&o.A.tv?" autoFocus":"")+' is="emby-button" type="button" class="'+k+'" data-id="'+(null==w.id||""===w.id?w.value:w.id)+'">',(b=m[q])?v+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons '.concat(b,'" aria-hidden="true"></span>'):p&&!P&&(v+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons check" aria-hidden="true" style="visibility:hidden;"></span>'),v+='<div class="listItemBody actionsheetListItemBody">',v+='<div class="listItemBodyText actionSheetItemText">',v+=i()(w.name||w.textContent||w.innerText),v+="</div>",w.secondaryText&&(v+='<div class="listItemBodyText secondary">'.concat(i()(w.secondaryText),"</div>")),v+="</div>",w.asideText&&(v+='<div class="listItemAside actionSheetItemAsideText">'.concat(i()(w.asideText),"</div>")),v+="</button>")}if(e.showCancel&&(v+='<div class="buttons">',v+='<button is="emby-button" type="button" class="btnCloseActionSheet">'.concat(c.Ay.translate("ButtonCancel"),"</button>"),v+="</div>"),v+="</div>",h.innerHTML=v,o.A.tv){var E=h.querySelector(".actionSheetScroller");E&&u(E,!1,!0)}var L=h.querySelector(".btnCloseActionSheet");L&&L.addEventListener("click",(function(){l.default.close(h)}));var g,I=null;return e.timeout&&(g=setTimeout((function(){l.default.close(h)}),e.timeout)),new Promise((function(t,r){var n=!1;h.addEventListener("click",(function(r){var i=s.Ay.parentWithClass(r.target,"actionSheetMenuItem");i&&(I=i.getAttribute("data-id"),e.resolveOnClick&&(Array.isArray(e.resolveOnClick)?-1!==e.resolveOnClick.indexOf(I)&&(t(I),n=!0):(t(I),n=!0)),l.default.close(h))})),h.addEventListener("close",(function(){if(o.A.tv){var i=h.querySelector(".actionSheetScroller");i&&u(i,!1,!1)}g&&(clearTimeout(g),g=void 0),n||(null!=I?(e.callback&&e.callback(I),t(I)):r(new Error("ActionSheet closed without resolving")))})),l.default.open(h).catch((function(e){console.warn("DialogHelper.open error",e)}));var i=e.positionTo&&"fullscreen"!==d.size?function(e,t,r){var n=s.Ay.getWindowSize(),i=n.innerHeight,l=n.innerWidth,o=function(e){var t,r,n=[];if(!document)return n;try{for(var i=a(e),l=i.next();!l.done;l=i.next()){var o=l.value.getBoundingClientRect();n.push({top:o.top,left:o.left,width:o.width,height:o.height})}}catch(e){t={error:e}}finally{try{l&&!l.done&&(r=i.return)&&r.call(i)}finally{if(t)throw t.error}}return n}([e])[0];"top"!==t.positionY&&(o.top+=(o.height||0)/2),o.left+=(o.width||0)/2;var c=r.offsetHeight||300,u=r.offsetWidth||160;o.top-=c/2,o.left-=u/2;var d=o.left+u-l,h=o.top+c-i;return d>0&&(o.left-=d+20),h>0&&(o.top-=h+20),o.top+=t.offsetTop||0,o.left+=t.offsetLeft||0,o.top=Math.max(o.top,10),o.left=Math.max(o.left,10),o}(e.positionTo,e,h):null;i&&(h.style.position="fixed",h.style.margin="0",h.style.left=i.left+"px",h.style.top=i.top+"px")}))}t.default={show:d}}}]);