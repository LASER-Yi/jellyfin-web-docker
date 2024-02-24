"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[43884,80454,49213,33390,83264],{680:function(e,t,n){n.r(t),n.d(t,{default:function(){return M}}),n(96626),n(66066),n(33370),n(84159),n(13227),n(81414),n(37666),n(14011),n(11431),n(59139),n(86028),n(26031),n(95822),n(56187),n(38690),n(11908),n(33096),n(89228);var o=n(65009),i=n.n(o),a=n(38552),s=n(59091),l=n(77357),r=n(30325),c=n(34643),u=n(94994),d=n(84597),v=n(67561),p=n(73327),m=n(72365),h=(n(15856),n(12291),n(18613)),b=n(56663),f=n(13661);function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function g(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,S(o.key),o)}}function S(e){var t=function(e,t){if("object"!=y(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!=y(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==y(t)?t:String(t)}function C(e,t,n){var o,a="";if("Channel"!==e.Type&&"boxsets"!==e.CollectionType&&"playlists"!==e.CollectionType||(o=!(t.Configuration.MyMediaExcludes||[]).includes(e.Id),a+="<div>",a+="<label>",a+='<input type="checkbox" is="emby-checkbox" class="chkIncludeInMyMedia" data-folderid="'.concat(e.Id,'"').concat(o?' checked="checked"':"","/>"),a+="<span>".concat(u.ZP.translate("DisplayInMyMedia"),"</span>"),a+="</label>",a+="</div>"),["playlists","livetv","boxsets","channels"].includes(e.CollectionType||"")||(o=!t.Configuration.LatestItemsExcludes.includes(e.Id),a+='<label class="fldIncludeInLatest">',a+='<input type="checkbox" is="emby-checkbox" class="chkIncludeInLatest" data-folderid="'.concat(e.Id,'"').concat(o?' checked="checked"':"","/>"),a+="<span>".concat(u.ZP.translate("DisplayInOtherHomeScreenSections"),"</span>"),a+="</label>"),a&&(a='<div class="checkboxListContainer">'.concat(a,"</div>")),"movies"===e.CollectionType||"tvshows"===e.CollectionType||"music"===e.CollectionType||"livetv"===e.CollectionType){var s="livetv"===e.CollectionType?e.CollectionType:e.Id;a+='<div class="selectContainer">',a+='<select is="emby-select" class="selectLanding" data-folderid="'.concat(s,'" label="').concat(u.ZP.translate("LabelDefaultScreen"),'">');var l=n.get("landing-".concat(s));a+=function(e,t){return function(e){var t=[];return"movies"===e?(t.push({name:u.ZP.translate("Movies"),value:f.$.Movies,isDefault:!0}),t.push({name:u.ZP.translate("Suggestions"),value:f.$.Suggestions}),t.push({name:u.ZP.translate("Trailers"),value:f.$.Trailers}),t.push({name:u.ZP.translate("Favorites"),value:f.$.Favorites}),t.push({name:u.ZP.translate("Collections"),value:f.$.Collections}),t.push({name:u.ZP.translate("Genres"),value:f.$.Genres})):"tvshows"===e?(t.push({name:u.ZP.translate("Shows"),value:f.$.Series,isDefault:!0}),t.push({name:u.ZP.translate("Suggestions"),value:f.$.Suggestions}),t.push({name:u.ZP.translate("TabUpcoming"),value:f.$.Upcoming}),t.push({name:u.ZP.translate("Genres"),value:f.$.Genres}),t.push({name:u.ZP.translate("TabNetworks"),value:f.$.Networks}),t.push({name:u.ZP.translate("Episodes"),value:f.$.Episodes})):"music"===e?(t.push({name:u.ZP.translate("Albums"),value:f.$.Albums,isDefault:!0}),t.push({name:u.ZP.translate("Suggestions"),value:f.$.Suggestions}),t.push({name:u.ZP.translate("HeaderAlbumArtists"),value:f.$.AlbumArtists}),t.push({name:u.ZP.translate("Artists"),value:f.$.Artists}),t.push({name:u.ZP.translate("Playlists"),value:f.$.Playlists}),t.push({name:u.ZP.translate("Songs"),value:f.$.Songs}),t.push({name:u.ZP.translate("Genres"),value:f.$.Genres})):"livetv"===e&&(t.push({name:u.ZP.translate("Programs"),value:f.$.Programs,isDefault:!0}),t.push({name:u.ZP.translate("Guide"),value:f.$.Guide}),t.push({name:u.ZP.translate("Channels"),value:f.$.Channels}),t.push({name:u.ZP.translate("Recordings"),value:f.$.Recordings}),t.push({name:u.ZP.translate("Schedule"),value:f.$.Schedule}),t.push({name:u.ZP.translate("Series"),value:f.$.SeriesTimers})),t}(e).map((function(e){var n=t===e.value||e.isDefault&&!t?" selected":"",o=e.isDefault?"":e.value;return'<option value="'.concat(o,'"').concat(n,">").concat(i()(e.name),"</option>")})).join("")}(e.CollectionType,l),a+="</select>",a+="</div>"}if(a){var r="";r+='<div class="verticalSection">',r+='<h2 class="sectionTitle">',r+=i()(e.Name),a=(r+="</h2>")+a,a+="</div>"}return a}function $(e){var t=m.ZP.parentWithClass(e.target,"btnViewItemMove");if(t){var n=m.ZP.parentWithClass(t,"viewItem");if(n)if(t.classList.contains("btnViewItemDown")){var o=n.nextSibling;o&&(n.parentNode.removeChild(n),o.parentNode.insertBefore(n,o.nextSibling),c.Z.focus(e.target))}else{var i=n.previousSibling;i&&(n.parentNode.removeChild(n),i.parentNode.insertBefore(n,i),c.Z.focus(e.target))}}}function H(e,t,n){for(var o=t.querySelectorAll(e),i=[],a=0,s=o.length;a<s;a++)o[a].checked===n&&i.push(o[a]);return i}function L(e){var t=this,n=h.Z.getApiClient(t.options.serverId),o=t.options.userId,i=t.options.userSettings;return i.setUserInfo(o,n).then((function(){var e=t.options.enableSaveConfirmation;!function(e,t,n,o,i,a){d.ZP.show(),i.getUser(n).then((function(n){(function(e,t,n,o){t.Configuration.HidePlayedInLatest=e.querySelector(".chkHidePlayedFromLatest").checked,t.Configuration.LatestItemsExcludes=H(".chkIncludeInLatest",e,!1).map((function(e){return e.getAttribute("data-folderid")})),t.Configuration.MyMediaExcludes=H(".chkIncludeInMyMedia",e,!1).map((function(e){return e.getAttribute("data-folderid")})),t.Configuration.GroupedFolders=H(".chkGroupFolder",e,!0).map((function(e){return e.getAttribute("data-folderid")}));var i,a,s=e.querySelectorAll(".viewItem"),l=[];for(i=0,a=s.length;i<a;i++)l.push(s[i].getAttribute("data-viewid"));t.Configuration.OrderedViews=l,n.set("tvhome",e.querySelector(".selectTVHomeScreen").value),n.set("homesection0",e.querySelector("#selectHomeSection1").value),n.set("homesection1",e.querySelector("#selectHomeSection2").value),n.set("homesection2",e.querySelector("#selectHomeSection3").value),n.set("homesection3",e.querySelector("#selectHomeSection4").value),n.set("homesection4",e.querySelector("#selectHomeSection5").value),n.set("homesection5",e.querySelector("#selectHomeSection6").value),n.set("homesection6",e.querySelector("#selectHomeSection7").value);var r=e.querySelectorAll(".selectLanding");for(i=0,a=r.length;i<a;i++){var c=r[i];n.set("landing-".concat(c.getAttribute("data-folderid")),c.value)}return o.updateUserConfiguration(t.Id,t.Configuration)})(t,n,o,i).then((function(){d.ZP.hide(),a&&(0,b.Z)(u.ZP.translate("SettingsSaved")),v.Z.trigger(e,"saved")}),(function(){d.ZP.hide()}))}))}(t,t.options.element,o,i,n,e)})),e&&e.preventDefault(),!1}function I(e){var t=m.ZP.parentWithClass(e.target,"chkIncludeInMyMedia");if(t){var n=m.ZP.parentWithClass(t,"verticalSection").querySelector(".fldIncludeInLatest");n&&(t.checked?n.classList.remove("hide"):n.classList.add("hide"))}}var x=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=t,function(e,t){for(var n='<form style="margin:0 auto"> <div class="verticalSection verticalSection-extrabottompadding"> <h2 class="sectionTitle">${Home}</h2> <div class="selectContainer hide selectTVHomeScreenContainer"> <select is="emby-select" class="selectTVHomeScreen" label="${LabelTVHomeScreen}"> <option value="horizontal">${Horizontal}</option> <option value="vertical">${Vertical}</option> </select> <div class="fieldDescription">${LabelPleaseRestart}</div> </div> <div class="verticalSection verticalSection-extrabottompadding"> <label class="checkboxContainer"> <input class="chkHidePlayedFromLatest" type="checkbox" is="emby-checkbox"/> <span>${HideWatchedContentFromLatestMedia}</span> </label> </div> <div class="selectContainer"> <select is="emby-select" id="selectHomeSection1" label="{section1label}"> <option value="smalllibrarytiles">${HeaderMyMedia}</option> <option value="librarybuttons">${HeaderMyMediaSmall}</option> <option value="activerecordings">${HeaderActiveRecordings}</option> <option value="resume">${HeaderContinueWatching}</option> <option value="resumeaudio">${HeaderContinueListening}</option> <option value="resumebook">${HeaderContinueReading}</option> <option value="latestmedia">${HeaderLatestMedia}</option> <option value="nextup">${NextUp}</option> <option value="livetv">${LiveTV}</option> <option value="none">${None}</option> </select> </div> <div class="selectContainer"> <select is="emby-select" id="selectHomeSection2" label="{section2label}"> <option value="smalllibrarytiles">${HeaderMyMedia}</option> <option value="librarybuttons">${HeaderMyMediaSmall}</option> <option value="activerecordings">${HeaderActiveRecordings}</option> <option value="resume">${HeaderContinueWatching}</option> <option value="resumeaudio">${HeaderContinueListening}</option> <option value="resumebook">${HeaderContinueReading}</option> <option value="latestmedia">${HeaderLatestMedia}</option> <option value="nextup">${NextUp}</option> <option value="livetv">${LiveTV}</option> <option value="none">${None}</option> </select> </div> <div class="selectContainer"> <select is="emby-select" id="selectHomeSection3" label="{section3label}"> <option value="smalllibrarytiles">${HeaderMyMedia}</option> <option value="librarybuttons">${HeaderMyMediaSmall}</option> <option value="activerecordings">${HeaderActiveRecordings}</option> <option value="resume">${HeaderContinueWatching}</option> <option value="resumeaudio">${HeaderContinueListening}</option> <option value="resumebook">${HeaderContinueReading}</option> <option value="latestmedia">${HeaderLatestMedia}</option> <option value="nextup">${NextUp}</option> <option value="livetv">${LiveTV}</option> <option value="none">${None}</option> </select> </div> <div class="selectContainer"> <select is="emby-select" id="selectHomeSection4" label="{section4label}"> <option value="smalllibrarytiles">${HeaderMyMedia}</option> <option value="librarybuttons">${HeaderMyMediaSmall}</option> <option value="activerecordings">${HeaderActiveRecordings}</option> <option value="resume">${HeaderContinueWatching}</option> <option value="resumeaudio">${HeaderContinueListening}</option> <option value="resumebook">${HeaderContinueReading}</option> <option value="latestmedia">${HeaderLatestMedia}</option> <option value="nextup">${NextUp}</option> <option value="livetv">${LiveTV}</option> <option value="none">${None}</option> </select> </div> <div class="selectContainer"> <select is="emby-select" id="selectHomeSection5" label="{section5label}"> <option value="smalllibrarytiles">${HeaderMyMedia}</option> <option value="librarybuttons">${HeaderMyMediaSmall}</option> <option value="activerecordings">${HeaderActiveRecordings}</option> <option value="resume">${HeaderContinueWatching}</option> <option value="resumeaudio">${HeaderContinueListening}</option> <option value="resumebook">${HeaderContinueReading}</option> <option value="latestmedia">${HeaderLatestMedia}</option> <option value="nextup">${NextUp}</option> <option value="livetv">${LiveTV}</option> <option value="none">${None}</option> </select> </div> <div class="selectContainer"> <select is="emby-select" id="selectHomeSection6" label="{section6label}"> <option value="smalllibrarytiles">${HeaderMyMedia}</option> <option value="librarybuttons">${HeaderMyMediaSmall}</option> <option value="activerecordings">${HeaderActiveRecordings}</option> <option value="resume">${HeaderContinueWatching}</option> <option value="resumeaudio">${HeaderContinueListening}</option> <option value="resumebook">${HeaderContinueReading}</option> <option value="latestmedia">${HeaderLatestMedia}</option> <option value="nextup">${NextUp}</option> <option value="livetv">${LiveTV}</option> <option value="none">${None}</option> </select> </div> <div class="selectContainer"> <select is="emby-select" id="selectHomeSection7" label="{section7label}"> <option value="smalllibrarytiles">${HeaderMyMedia}</option> <option value="librarybuttons">${HeaderMyMediaSmall}</option> <option value="activerecordings">${HeaderActiveRecordings}</option> <option value="resume">${HeaderContinueWatching}</option> <option value="resumeaudio">${HeaderContinueListening}</option> <option value="resumebook">${HeaderContinueReading}</option> <option value="latestmedia">${HeaderLatestMedia}</option> <option value="nextup">${NextUp}</option> <option value="livetv">${LiveTV}</option> <option value="none">${None}</option> </select> </div> </div> <div class="verticalSection verticalSection-extrabottompadding"> <h2 class="sectionTitle">${HeaderLibraryOrder}</h2> <div class="paperList viewOrderList"></div> </div> <div class="perLibrarySettings"></div> <div class="verticalSection verticalSection-extrabottompadding"> <h2 class="sectionTitle">${HeaderLibraryFolders}</h2> <div> <p>${LabelSelectFolderGroups}</p> <div class="folderGroupList"></div> <div class="fieldDescription checkboxFieldDescription">${LabelSelectFolderGroupsHelp}</div> </div> </div> <button is="emby-button" type="submit" class="raised button-submit block btnSave hide"> <span>${Save}</span> </button> </form> ',o=1;o<=7;o++)n=n.replace("{section".concat(o,"label}"),u.ZP.translate("LabelHomeScreenSectionValue",o));e.element.innerHTML=u.ZP.translateHtml(n,"core"),e.element.querySelector(".viewOrderList").addEventListener("click",$),e.element.querySelector("form").addEventListener("submit",L.bind(t)),e.element.addEventListener("change",I),e.enableSaveButton&&e.element.querySelector(".btnSave").classList.remove("hide"),r.Z.tv?e.element.querySelector(".selectTVHomeScreenContainer").classList.remove("hide"):e.element.querySelector(".selectTVHomeScreenContainer").classList.add("hide"),t.loadData(e.autoFocus)}(t,this)}var t,n;return t=e,n=[{key:"loadData",value:function(e){var t=this,n=t.options.element;d.ZP.show();var o=t.options.userId,r=h.Z.getApiClient(t.options.serverId),v=t.options.userSettings;r.getUser(o).then((function(m){v.setUserInfo(o,r).then((function(){t.dataLoaded=!0,function(e,t,n,o){e.querySelector(".chkHidePlayedFromLatest").checked=t.Configuration.HidePlayedInLatest||!1,function(e,t){for(var n=1;n<=7;n++){var o=e.querySelector("#selectHomeSection".concat(n)),i=p.ZP.getDefaultSection(n-1),a=o.querySelector("option[value=".concat(i,"]"))||o.querySelector('option[value=""]'),s=t.get("homesection".concat(n-1));a.value="",o.value=s!==i&&s?s:""}e.querySelector(".selectTVHomeScreen").value=t.get("tvhome")||""}(e,n);var r=l.E.fetchQuery((0,a.l)((0,s.a)(o),t.Id,{includeHidden:!0})),c=o.getJSON(o.getUrl("Users/".concat(t.Id,"/GroupingOptions")));Promise.all([r,c]).then((function(o){!function(e,t,n){var o="";o+=n.Items.map((function(e){var t="";return t+='<div class="listItem viewItem" data-viewid="'.concat(e.Id,'">'),t+='<span class="material-icons listItemIcon folder_open" aria-hidden="true"></span>',t+='<div class="listItemBody">',t+="<div>",t+=i()(e.Name),t+="</div>",t+="</div>",t+='<button type="button" is="paper-icon-button-light" class="btnViewItemUp btnViewItemMove autoSize" title="'.concat(u.ZP.translate("Up"),'"><span class="material-icons keyboard_arrow_up" aria-hidden="true"></span></button>'),(t+='<button type="button" is="paper-icon-button-light" class="btnViewItemDown btnViewItemMove autoSize" title="'.concat(u.ZP.translate("Down"),'"><span class="material-icons keyboard_arrow_down" aria-hidden="true"></span></button>'))+"</div>"})).join(""),e.querySelector(".viewOrderList").innerHTML=o}(e,0,o[0]),function(e,t,n,o){for(var i=e.querySelector(".perLibrarySettings"),a="",s=0,l=n.length;s<l;s++)a+=C(n[s],t,o);i.innerHTML=a}(e,t,o[0].Items,n),function(e,t,n){var o="";o+='<div class="checkboxList">',o+=n.map((function(e){var n="",o="chkGroupFolder".concat(e.Id),a=t.Configuration.GroupedFolders.includes(e.Id)?' checked="checked"':"";return n+="<label>",n+='<input type="checkbox" is="emby-checkbox" class="chkGroupFolder" data-folderid="'.concat(e.Id,'" id="').concat(o,'"').concat(a,"/>"),(n+="<span>".concat(i()(e.Name),"</span>"))+"</label>"})).join(""),o+="</div>",e.querySelector(".folderGroupList").innerHTML=o}(e,t,o[1]),d.ZP.hide()}))}(n,m,v,r),e&&c.Z.autoFocus(n)}))}))}},{key:"submit",value:function(){L.call(this)}},{key:"destroy",value:function(){this.options=null}}],n&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),w=x,Z=n(60934),k=n(87680),P=Z.UserSettings;function M(e,t){var n,o=t.userId||ApiClient.getCurrentUserId(),i=o===ApiClient.getCurrentUserId()?Z:new P;e.addEventListener("viewshow",(function(){n?n.loadData():n=new w({serverId:ApiClient.serverId(),userId:o,element:e.querySelector(".homeScreenSettingsContainer"),userSettings:i,enableSaveButton:!0,enableSaveConfirmation:!0,autoFocus:k.default.isEnabled()})})),e.addEventListener("viewdestroy",(function(){n&&(n.destroy(),n=null)}))}},15856:function(e,t,n){var o=n(30325),i=n(57366),a=n(80454),s=(n(67752),Object.create(HTMLSelectElement.prototype));function l(){return!(!i.Z.edgeUwp&&!i.Z.xboxOne&&(i.Z.tizen||i.Z.orsay||i.Z.web0s||!i.Z.tv&&o.Z.tv))}function r(e){var t=c(e),n=t?t.textContent||t.innerText:null;a.default.show({items:e.options,positionTo:e,title:n}).then((function(t){!function(e,t){e.value=t}(e,t),function(e){var t=new Event("change",{bubbles:!1,cancelable:!0});e.dispatchEvent(t)}(e)}))}function c(e){for(var t=e.previousSibling;t&&"LABEL"!==t.tagName;)t=t.previousSibling;return t}function u(){var e=c(this);e&&e.classList.add("selectLabelFocused")}function d(){var e=c(this);e&&e.classList.remove("selectLabelFocused")}function v(e){e.button||l()||(e.preventDefault(),r(this))}function p(e){switch(e.keyCode){case 13:return void(l()||(e.preventDefault(),r(this)));case 37:case 38:case 39:case 40:return void(o.Z.tv&&e.preventDefault())}}var m=0;s.createdCallback=function(){this.id||(this.id="embyselect"+m,m++),this.classList.add("emby-select-withcolor"),o.Z.tv&&this.classList.add("emby-select-focusscale"),this.addEventListener("mousedown",v),this.addEventListener("keydown",p),this.addEventListener("focus",u),this.addEventListener("blur",d)},s.attachedCallback=function(){var e;if(!this.classList.contains("emby-select")){this.classList.add("emby-select");var t,n=this.ownerDocument.createElement("label");n.innerText=this.getAttribute("label")||"",n.classList.add("selectLabel"),n.htmlFor=this.id,null===(e=this.parentNode)||void 0===e||e.insertBefore(n,this),this.classList.contains("emby-select-withcolor")&&(null===(t=this.parentNode)||void 0===t||t.insertAdjacentHTML("beforeend",'<div class="selectArrowContainer"><div style="visibility:hidden;display:none;">0</div><span class="selectArrow material-icons keyboard_arrow_down" aria-hidden="true"></span></div>'))}},s.setLabel=function(e){var t;(null===(t=this.parentNode)||void 0===t?void 0:t.querySelector("label")).innerText=e},document.registerElement("emby-select",{prototype:s,extends:"select"})},80454:function(e,t,n){n.r(t),n.d(t,{show:function(){return d}});var o=n(65009),i=n.n(o),a=n(93355),s=n(30325),l=n(94994),r=n(72365),c=(n(38228),function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],o=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&o>=e.length&&(e=void 0),{value:e&&e[o++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")});function u(e,t,o){Promise.resolve().then(n.bind(n,35545)).then((function(n){var i=o?"on":"off";n.centerFocus[i](e,t)})).catch((function(e){console.warn("Error in centerFocus",e)}))}function d(e){var t,n,o,d={removeOnClose:!0,enableHistory:e.enableHistory,scrollY:!1};s.Z.tv?(d.size="fullscreen",o=!0,d.autoFocus=!0):(d.modal=!1,d.entryAnimation=e.entryAnimation,d.exitAnimation=e.exitAnimation,d.entryAnimationDuration=e.entryAnimationDuration||140,d.exitAnimationDuration=e.exitAnimationDuration||100,d.autoFocus=!1);var v=a.default.createDialog(d);o?v.classList.add("actionsheet-fullscreen"):v.classList.add("actionsheet-not-fullscreen"),v.classList.add("actionSheet"),e.dialogClass&&v.classList.add(e.dialogClass);var p="",m=s.Z.tv?"scrollY smoothScrollY hiddenScrollY":"scrollY",h="";e.items.length>20&&(h+="min-width:"+(r.ZP.getWindowSize().innerWidth>=300?240:200)+"px;");var b,f=!1,y=[];try{for(var g=c(e.items),S=g.next();!S.done;S=g.next())(b=(I=S.value).icon||(I.selected?"check":null))&&(f=!0),y.push(b||"")}catch(e){t={error:e}}finally{try{S&&!S.done&&(n=g.return)&&n.call(g)}finally{if(t)throw t.error}}s.Z.tv&&(p+='<button is="paper-icon-button-light" class="btnCloseActionSheet hide-mouse-idle-tv" tabindex="-1" title="'.concat(l.ZP.translate("ButtonBack"),'">\n                     <span class="material-icons arrow_back" aria-hidden="true"></span>\n                 </button>'));var C=e.title&&!f;C||s.Z.tv?p+='<div class="actionSheetContent actionSheetContent-centered">':p+='<div class="actionSheetContent">',e.title&&(p+='<h1 class="actionSheetTitle">'+i()(e.title)+"</h1>"),e.text&&(p+='<p class="actionSheetText">'+i()(e.text)+"</p>");var $="actionSheetScroller";s.Z.tv&&($+=" actionSheetScroller-tv focuscontainer-x focuscontainer-y"),p+='<div class="'+$+" "+m+'" style="'+h+'">';var H="listItem listItem-button actionSheetMenuItem";(e.border||e.shaded)&&(H+=" listItem-border"),e.menuItemClass&&(H+=" "+e.menuItemClass),s.Z.tv&&(H+=" listItem-focusscale"),s.Z.mobile&&(H+=" actionsheet-xlargeFont");for(var L=0;L<e.items.length;L++){var I;(I=e.items[L]).divider?p+='<div class="actionsheetDivider"></div>':(p+="<button"+(I.selected&&s.Z.tv?" autoFocus":"")+' is="emby-button" type="button" class="'+H+'" data-id="'+(null==I.id||""===I.id?I.value:I.id)+'">',(b=y[L])?p+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons '.concat(b,'" aria-hidden="true"></span>'):f&&!C&&(p+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons check" aria-hidden="true" style="visibility:hidden;"></span>'),p+='<div class="listItemBody actionsheetListItemBody">',p+='<div class="listItemBodyText actionSheetItemText">',p+=i()(I.name||I.textContent||I.innerText),p+="</div>",I.secondaryText&&(p+='<div class="listItemBodyText secondary">'.concat(i()(I.secondaryText),"</div>")),p+="</div>",I.asideText&&(p+='<div class="listItemAside actionSheetItemAsideText">'.concat(i()(I.asideText),"</div>")),p+="</button>")}if(e.showCancel&&(p+='<div class="buttons">',p+='<button is="emby-button" type="button" class="btnCloseActionSheet">'.concat(l.ZP.translate("ButtonCancel"),"</button>"),p+="</div>"),p+="</div>",v.innerHTML=p,s.Z.tv){var x=v.querySelector(".actionSheetScroller");x&&u(x,!1,!0)}var w=v.querySelector(".btnCloseActionSheet");w&&w.addEventListener("click",(function(){a.default.close(v)}));var Z,k=null;return e.timeout&&(Z=setTimeout((function(){a.default.close(v)}),e.timeout)),new Promise((function(t,n){var o=!1;v.addEventListener("click",(function(n){var i=r.ZP.parentWithClass(n.target,"actionSheetMenuItem");i&&(k=i.getAttribute("data-id"),e.resolveOnClick&&(Array.isArray(e.resolveOnClick)?-1!==e.resolveOnClick.indexOf(k)&&(t(k),o=!0):(t(k),o=!0)),a.default.close(v))})),v.addEventListener("close",(function(){if(s.Z.tv){var i=v.querySelector(".actionSheetScroller");i&&u(i,!1,!1)}Z&&(clearTimeout(Z),Z=void 0),o||(null!=k?(e.callback&&e.callback(k),t(k)):n("ActionSheet closed without resolving"))})),a.default.open(v).catch((function(e){console.warn("DialogHelper.open error",e)}));var i=e.positionTo&&"fullscreen"!==d.size?function(e,t,n){var o=r.ZP.getWindowSize(),i=o.innerHeight,a=o.innerWidth,s=function(e){var t,n,o=[];if(!document)return o;try{for(var i=c(e),a=i.next();!a.done;a=i.next()){var s=a.value.getBoundingClientRect();o.push({top:s.top,left:s.left,width:s.width,height:s.height})}}catch(e){t={error:e}}finally{try{a&&!a.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return o}([e])[0];"top"!==t.positionY&&(s.top+=(s.height||0)/2),s.left+=(s.width||0)/2;var l=n.offsetHeight||300,u=n.offsetWidth||160;s.top-=l/2,s.left-=u/2;var d=s.left+u-a,v=s.top+l-i;return d>0&&(s.left-=d+20),v>0&&(s.top-=v+20),s.top+=t.offsetTop||0,s.left+=t.offsetLeft||0,s.top=Math.max(s.top,10),s.left=Math.max(s.left,10),s}(e.positionTo,e,v):null;i&&(v.style.position="fixed",v.style.margin="0",v.style.left=i.left+"px",v.style.top=i.top+"px")}))}t.default={show:d}},13661:function(e,t,n){var o;n.d(t,{$:function(){return o}}),function(e){e.Albums="albums",e.AlbumArtists="albumartists",e.Artists="artists",e.Channels="channels",e.Collections="collections",e.Episodes="episodes",e.Favorites="favorites",e.Genres="genres",e.Guide="guide",e.Movies="movies",e.Networks="networks",e.Playlists="playlists",e.Programs="programs",e.Recordings="recordings",e.Schedule="schedule",e.Series="series",e.SeriesTimers="seriestimers",e.Songs="songs",e.Suggestions="suggestions",e.Trailers="trailers",e.Upcoming="upcoming",e.Photos="photos",e.Videos="videos",e.Books="books"}(o||(o={}))}}]);