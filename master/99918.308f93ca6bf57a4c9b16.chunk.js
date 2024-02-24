"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[99918,80454,49213,33390],{99918:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}}),n(44901),n(2663),n(81414),n(19131),n(96626),n(51789);var i=n(84597),s=n(94994),o=(n(12291),n(62033),n(61414),n(15856),n(38228),n(60635)),r=n(67561);function a(e){switch(e.toLowerCase()){case"m3u":return"M3U Playlist";case"hdhomerun":return"HDHomerun";case"satip":return"DVB";default:return"Unknown"}}function l(e,t,n){function l(){i.ZP.show(),ApiClient.getNamedConfiguration("livetv").then((function(n){var r=n.ListingProviders.filter((function(e){return e.Id===t}))[0]||{};u=r.ListingsId,$("#selectListing",e).val(r.ListingsId||""),e.querySelector(".txtUser").value=r.Username||"",e.querySelector(".txtPass").value="",e.querySelector(".txtZipCode").value=r.ZipCode||"",r.Username&&r.Password?e.querySelector(".listingsSection").classList.remove("hide"):e.querySelector(".listingsSection").classList.add("hide"),e.querySelector(".chkAllTuners").checked=r.EnableAllTuners,r.EnableAllTuners?e.querySelector(".selectTunersSection").classList.add("hide"):e.querySelector(".selectTunersSection").classList.remove("hide"),function(t){ApiClient.getJSON(ApiClient.getUrl("LiveTv/ListingProviders/SchedulesDirect/Countries")).then((function(n){var i,s,o=[];for(var r in n){var a=n[r];if(a.length&&"ZZZ"!==r)for(i=0,s=a.length;i<s;i++)o.push({name:a[i].fullName,value:a[i].shortName})}o.sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0})),$("#selectCountry",e).html(o.map((function(e){return'<option value="'+e.value+'">'+e.name+"</option>"})).join("")).val(t.Country||""),$(e.querySelector(".txtZipCode")).trigger("change")}),(function(){o.default.alert({message:s.ZP.translate("ErrorGettingTvLineups")})})),i.ZP.hide()}(r),function(e,t,n){for(var i="",s=0,o=n.length;s<o;s++){var r=n[s];i+='<div class="listItem">';var l=t.EnabledTuners||[],c=t.EnableAllTuners||-1!==l.indexOf(r.Id)?" checked":"";i+='<label class="checkboxContainer listItemCheckboxContainer"><input type="checkbox" is="emby-checkbox" data-id="'+r.Id+'" class="chkTuner" '+c+"/><span></span></label>",i+='<div class="listItemBody two-line">',i+='<div class="listItemBodyText">',i+=r.FriendlyName||a(r.Type),i+="</div>",i+='<div class="listItemBodyText secondary">',i+=r.Url,i+="</div>",i+="</div>",i+="</div>"}e.querySelector(".tunerList").innerHTML=i}(e,r,n.TunerHosts)}))}function c(n){n?(i.ZP.show(),ApiClient.ajax({type:"GET",url:ApiClient.getUrl("LiveTv/ListingProviders/Lineups",{Id:t,Location:n,Country:$("#selectCountry",e).val()}),dataType:"json"}).then((function(t){$("#selectListing",e).html(t.map((function(e){return'<option value="'+e.Id+'">'+e.Name+"</option>"}))),u&&$("#selectListing",e).val(u),i.ZP.hide()}),(function(){o.default.alert({message:s.ZP.translate("ErrorGettingTvLineups")}),c(""),i.ZP.hide()}))):$("#selectListing",e).html("")}var u,d=this;d.submit=function(){e.querySelector(".btnSubmitListingsContainer").click()},d.init=function(){var a=!1===(n=n||{}).showCancelButton;e.querySelector(".btnCancel").classList.toggle("hide",a);var u=!1===n.showSubmitButton;e.querySelector(".btnSubmitListings").classList.toggle("hide",u),$(".formLogin",e).on("submit",(function(){return function(){i.ZP.show();var n={Type:"SchedulesDirect",Username:e.querySelector(".txtUser").value,EnableAllTuners:!0,Password:e.querySelector(".txtPass").value},r=t;r&&(n.Id=r),ApiClient.ajax({type:"POST",url:ApiClient.getUrl("LiveTv/ListingProviders",{ValidateLogin:!0}),data:JSON.stringify(n),contentType:"application/json",dataType:"json"}).then((function(e){o.default.processServerConfigurationUpdateResult(),t=e.Id,l()}),(function(){o.default.alert({message:s.ZP.translate("ErrorSavingTvProvider")})}))}(),!1})),$(".formListings",e).on("submit",(function(){return function(){var a=$("#selectListing",e).val();if(a){i.ZP.show();var l=t;ApiClient.getNamedConfiguration("livetv").then((function(t){var c=t.ListingProviders.filter((function(e){return e.Id===l}))[0];c.ZipCode=e.querySelector(".txtZipCode").value,c.Country=$("#selectCountry",e).val(),c.ListingsId=a,c.EnableAllTuners=e.querySelector(".chkAllTuners").checked,c.EnabledTuners=c.EnableAllTuners?[]:$(".chkTuner",e).get().filter((function(e){return e.checked})).map((function(e){return e.getAttribute("data-id")})),ApiClient.ajax({type:"POST",url:ApiClient.getUrl("LiveTv/ListingProviders",{ValidateListings:!0}),data:JSON.stringify(c),contentType:"application/json"}).then((function(){i.ZP.hide(),n.showConfirmation&&o.default.processServerConfigurationUpdateResult(),r.Z.trigger(d,"submitted")}),(function(){i.ZP.hide(),o.default.alert({message:s.ZP.translate("ErrorAddingListingsToSchedulesDirect")})}))}))}else o.default.alert({message:s.ZP.translate("ErrorPleaseSelectLineup")})}(),!1})),$(".txtZipCode",e).on("change",(function(){c(this.value)})),e.querySelector(".chkAllTuners").addEventListener("change",(function(t){t.target.checked?e.querySelector(".selectTunersSection").classList.add("hide"):e.querySelector(".selectTunersSection").classList.remove("hide")})),$(".createAccountHelp",e).html(s.ZP.translate("MessageCreateAccountAt",'<a is="emby-linkbutton" class="button-link" href="http://www.schedulesdirect.org" target="_blank">http://www.schedulesdirect.org</a>')),l()}}},15856:function(e,t,n){var i=n(30325),s=n(57366),o=n(80454),r=(n(67752),Object.create(HTMLSelectElement.prototype));function a(){return!(!s.Z.edgeUwp&&!s.Z.xboxOne&&(s.Z.tizen||s.Z.orsay||s.Z.web0s||!s.Z.tv&&i.Z.tv))}function l(e){var t=c(e),n=t?t.textContent||t.innerText:null;o.default.show({items:e.options,positionTo:e,title:n}).then((function(t){!function(e,t){e.value=t}(e,t),function(e){var t=new Event("change",{bubbles:!1,cancelable:!0});e.dispatchEvent(t)}(e)}))}function c(e){for(var t=e.previousSibling;t&&"LABEL"!==t.tagName;)t=t.previousSibling;return t}function u(){var e=c(this);e&&e.classList.add("selectLabelFocused")}function d(){var e=c(this);e&&e.classList.remove("selectLabelFocused")}function v(e){e.button||a()||(e.preventDefault(),l(this))}function h(e){switch(e.keyCode){case 13:return void(a()||(e.preventDefault(),l(this)));case 37:case 38:case 39:case 40:return void(i.Z.tv&&e.preventDefault())}}var f=0;r.createdCallback=function(){this.id||(this.id="embyselect"+f,f++),this.classList.add("emby-select-withcolor"),i.Z.tv&&this.classList.add("emby-select-focusscale"),this.addEventListener("mousedown",v),this.addEventListener("keydown",h),this.addEventListener("focus",u),this.addEventListener("blur",d)},r.attachedCallback=function(){var e;if(!this.classList.contains("emby-select")){this.classList.add("emby-select");var t,n=this.ownerDocument.createElement("label");n.innerText=this.getAttribute("label")||"",n.classList.add("selectLabel"),n.htmlFor=this.id,null===(e=this.parentNode)||void 0===e||e.insertBefore(n,this),this.classList.contains("emby-select-withcolor")&&(null===(t=this.parentNode)||void 0===t||t.insertAdjacentHTML("beforeend",'<div class="selectArrowContainer"><div style="visibility:hidden;display:none;">0</div><span class="selectArrow material-icons keyboard_arrow_down" aria-hidden="true"></span></div>'))}},r.setLabel=function(e){var t;(null===(t=this.parentNode)||void 0===t?void 0:t.querySelector("label")).innerText=e},document.registerElement("emby-select",{prototype:r,extends:"select"})},80454:function(e,t,n){n.r(t),n.d(t,{show:function(){return d}});var i=n(65009),s=n.n(i),o=n(93355),r=n(30325),a=n(94994),l=n(72365),c=(n(38228),function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],i=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&i>=e.length&&(e=void 0),{value:e&&e[i++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")});function u(e,t,i){Promise.resolve().then(n.bind(n,35545)).then((function(n){var s=i?"on":"off";n.centerFocus[s](e,t)})).catch((function(e){console.warn("Error in centerFocus",e)}))}function d(e){var t,n,i,d={removeOnClose:!0,enableHistory:e.enableHistory,scrollY:!1};r.Z.tv?(d.size="fullscreen",i=!0,d.autoFocus=!0):(d.modal=!1,d.entryAnimation=e.entryAnimation,d.exitAnimation=e.exitAnimation,d.entryAnimationDuration=e.entryAnimationDuration||140,d.exitAnimationDuration=e.exitAnimationDuration||100,d.autoFocus=!1);var v=o.default.createDialog(d);i?v.classList.add("actionsheet-fullscreen"):v.classList.add("actionsheet-not-fullscreen"),v.classList.add("actionSheet"),e.dialogClass&&v.classList.add(e.dialogClass);var h="",f=r.Z.tv?"scrollY smoothScrollY hiddenScrollY":"scrollY",m="";e.items.length>20&&(m+="min-width:"+(l.ZP.getWindowSize().innerWidth>=300?240:200)+"px;");var p,y=!1,b=[];try{for(var g=c(e.items),S=g.next();!S.done;S=g.next())(p=(w=S.value).icon||(w.selected?"check":null))&&(y=!0),b.push(p||"")}catch(e){t={error:e}}finally{try{S&&!S.done&&(n=g.return)&&n.call(g)}finally{if(t)throw t.error}}r.Z.tv&&(h+='<button is="paper-icon-button-light" class="btnCloseActionSheet hide-mouse-idle-tv" tabindex="-1" title="'.concat(a.ZP.translate("ButtonBack"),'">\n                     <span class="material-icons arrow_back" aria-hidden="true"></span>\n                 </button>'));var L=e.title&&!y;L||r.Z.tv?h+='<div class="actionSheetContent actionSheetContent-centered">':h+='<div class="actionSheetContent">',e.title&&(h+='<h1 class="actionSheetTitle">'+s()(e.title)+"</h1>"),e.text&&(h+='<p class="actionSheetText">'+s()(e.text)+"</p>");var C="actionSheetScroller";r.Z.tv&&(C+=" actionSheetScroller-tv focuscontainer-x focuscontainer-y"),h+='<div class="'+C+" "+f+'" style="'+m+'">';var T="listItem listItem-button actionSheetMenuItem";(e.border||e.shaded)&&(T+=" listItem-border"),e.menuItemClass&&(T+=" "+e.menuItemClass),r.Z.tv&&(T+=" listItem-focusscale"),r.Z.mobile&&(T+=" actionsheet-xlargeFont");for(var x=0;x<e.items.length;x++){var w;(w=e.items[x]).divider?h+='<div class="actionsheetDivider"></div>':(h+="<button"+(w.selected&&r.Z.tv?" autoFocus":"")+' is="emby-button" type="button" class="'+T+'" data-id="'+(null==w.id||""===w.id?w.value:w.id)+'">',(p=b[x])?h+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons '.concat(p,'" aria-hidden="true"></span>'):y&&!L&&(h+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons check" aria-hidden="true" style="visibility:hidden;"></span>'),h+='<div class="listItemBody actionsheetListItemBody">',h+='<div class="listItemBodyText actionSheetItemText">',h+=s()(w.name||w.textContent||w.innerText),h+="</div>",w.secondaryText&&(h+='<div class="listItemBodyText secondary">'.concat(s()(w.secondaryText),"</div>")),h+="</div>",w.asideText&&(h+='<div class="listItemAside actionSheetItemAsideText">'.concat(s()(w.asideText),"</div>")),h+="</button>")}if(e.showCancel&&(h+='<div class="buttons">',h+='<button is="emby-button" type="button" class="btnCloseActionSheet">'.concat(a.ZP.translate("ButtonCancel"),"</button>"),h+="</div>"),h+="</div>",v.innerHTML=h,r.Z.tv){var Z=v.querySelector(".actionSheetScroller");Z&&u(Z,!1,!0)}var A=v.querySelector(".btnCloseActionSheet");A&&A.addEventListener("click",(function(){o.default.close(v)}));var I,k=null;return e.timeout&&(I=setTimeout((function(){o.default.close(v)}),e.timeout)),new Promise((function(t,n){var i=!1;v.addEventListener("click",(function(n){var s=l.ZP.parentWithClass(n.target,"actionSheetMenuItem");s&&(k=s.getAttribute("data-id"),e.resolveOnClick&&(Array.isArray(e.resolveOnClick)?-1!==e.resolveOnClick.indexOf(k)&&(t(k),i=!0):(t(k),i=!0)),o.default.close(v))})),v.addEventListener("close",(function(){if(r.Z.tv){var s=v.querySelector(".actionSheetScroller");s&&u(s,!1,!1)}I&&(clearTimeout(I),I=void 0),i||(null!=k?(e.callback&&e.callback(k),t(k)):n("ActionSheet closed without resolving"))})),o.default.open(v).catch((function(e){console.warn("DialogHelper.open error",e)}));var s=e.positionTo&&"fullscreen"!==d.size?function(e,t,n){var i=l.ZP.getWindowSize(),s=i.innerHeight,o=i.innerWidth,r=function(e){var t,n,i=[];if(!document)return i;try{for(var s=c(e),o=s.next();!o.done;o=s.next()){var r=o.value.getBoundingClientRect();i.push({top:r.top,left:r.left,width:r.width,height:r.height})}}catch(e){t={error:e}}finally{try{o&&!o.done&&(n=s.return)&&n.call(s)}finally{if(t)throw t.error}}return i}([e])[0];"top"!==t.positionY&&(r.top+=(r.height||0)/2),r.left+=(r.width||0)/2;var a=n.offsetHeight||300,u=n.offsetWidth||160;r.top-=a/2,r.left-=u/2;var d=r.left+u-o,v=r.top+a-s;return d>0&&(r.left-=d+20),v>0&&(r.top-=v+20),r.top+=t.offsetTop||0,r.left+=t.offsetLeft||0,r.top=Math.max(r.top,10),r.left=Math.max(r.left,10),r}(e.positionTo,e,v):null;s&&(v.style.position="fixed",v.style.margin="0",v.style.left=s.left+"px",v.style.top=s.top+"px")}))}t.default={show:d}}}]);