"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[50813],{50813:function(e,t,o){o.r(t),o.d(t,{default:function(){return T}}),o(29305),o(32733),o(84701),o(81678),o(24776),o(76281),o(44962),o(86584),o(4754),o(94),o(36947),o(78557),o(90076),o(95021),o(99425),o(83994),o(93062),o(82367);var n=o(22696),i=o.n(n),a=o(59721),s=o(75384),l=o(53678),r=o(46782),c=o(9164),u=o(5898),d=o(8566),v=o(44797),p=o(56213),m=o(47629),y=(o(63001),o(77157),o(86191)),h=o(50764),b=o(46850);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function g(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,S(n.key),n)}}function S(e){var t=function(e,t){if("object"!=f(e)||!e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,"string");if("object"!=f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==f(t)?t:t+""}function A(e,t,o){var n,a="";if("Channel"!==e.Type&&"boxsets"!==e.CollectionType&&"playlists"!==e.CollectionType||(n=!(t.Configuration.MyMediaExcludes||[]).includes(e.Id),a+="<div>",a+="<label>",a+='<input type="checkbox" is="emby-checkbox" class="chkIncludeInMyMedia" data-folderid="'.concat(e.Id,'"').concat(n?' checked="checked"':"","/>"),a+="<span>".concat(u.Ay.translate("DisplayInMyMedia"),"</span>"),a+="</label>",a+="</div>"),["playlists","livetv","boxsets","channels"].includes(e.CollectionType||"")||(n=!t.Configuration.LatestItemsExcludes.includes(e.Id),a+='<label class="fldIncludeInLatest">',a+='<input type="checkbox" is="emby-checkbox" class="chkIncludeInLatest" data-folderid="'.concat(e.Id,'"').concat(n?' checked="checked"':"","/>"),a+="<span>".concat(u.Ay.translate("DisplayInOtherHomeScreenSections"),"</span>"),a+="</label>"),a&&(a='<div class="checkboxListContainer">'.concat(a,"</div>")),"movies"===e.CollectionType||"tvshows"===e.CollectionType||"music"===e.CollectionType||"livetv"===e.CollectionType){var s="livetv"===e.CollectionType?e.CollectionType:e.Id;a+='<div class="selectContainer">',a+='<select is="emby-select" class="selectLanding" data-folderid="'.concat(s,'" label="').concat(u.Ay.translate("LabelDefaultScreen"),'">');var l=o.get("landing-".concat(s));a+=function(e,t){return function(e){var t=[];return"movies"===e?(t.push({name:u.Ay.translate("Movies"),value:b.D.Movies,isDefault:!0}),t.push({name:u.Ay.translate("Suggestions"),value:b.D.Suggestions}),t.push({name:u.Ay.translate("Trailers"),value:b.D.Trailers}),t.push({name:u.Ay.translate("Favorites"),value:b.D.Favorites}),t.push({name:u.Ay.translate("Collections"),value:b.D.Collections}),t.push({name:u.Ay.translate("Genres"),value:b.D.Genres})):"tvshows"===e?(t.push({name:u.Ay.translate("Shows"),value:b.D.Series,isDefault:!0}),t.push({name:u.Ay.translate("Suggestions"),value:b.D.Suggestions}),t.push({name:u.Ay.translate("TabUpcoming"),value:b.D.Upcoming}),t.push({name:u.Ay.translate("Genres"),value:b.D.Genres}),t.push({name:u.Ay.translate("TabNetworks"),value:b.D.Networks}),t.push({name:u.Ay.translate("Episodes"),value:b.D.Episodes})):"music"===e?(t.push({name:u.Ay.translate("Albums"),value:b.D.Albums,isDefault:!0}),t.push({name:u.Ay.translate("Suggestions"),value:b.D.Suggestions}),t.push({name:u.Ay.translate("HeaderAlbumArtists"),value:b.D.AlbumArtists}),t.push({name:u.Ay.translate("Artists"),value:b.D.Artists}),t.push({name:u.Ay.translate("Playlists"),value:b.D.Playlists}),t.push({name:u.Ay.translate("Songs"),value:b.D.Songs}),t.push({name:u.Ay.translate("Genres"),value:b.D.Genres})):"livetv"===e&&(t.push({name:u.Ay.translate("Programs"),value:b.D.Programs,isDefault:!0}),t.push({name:u.Ay.translate("Guide"),value:b.D.Guide}),t.push({name:u.Ay.translate("Channels"),value:b.D.Channels}),t.push({name:u.Ay.translate("Recordings"),value:b.D.Recordings}),t.push({name:u.Ay.translate("Schedule"),value:b.D.Schedule}),t.push({name:u.Ay.translate("Series"),value:b.D.SeriesTimers})),t}(e).map((function(e){var o=t===e.value||e.isDefault&&!t?" selected":"",n=e.isDefault?"":e.value;return'<option value="'.concat(n,'"').concat(o,">").concat(i()(e.name),"</option>")})).join("")}(e.CollectionType,l),a+="</select>",a+="</div>"}if(a){var r="";r+='<div class="verticalSection">',r+='<h2 class="sectionTitle">',r+=i()(e.Name),a=(r+="</h2>")+a,a+="</div>"}return a}function H(e){var t=m.Ay.parentWithClass(e.target,"btnViewItemMove");if(t){var o=m.Ay.parentWithClass(t,"viewItem");if(o)if(t.classList.contains("btnViewItemDown")){var n=o.nextSibling;n&&(o.parentNode.removeChild(o),n.parentNode.insertBefore(o,n.nextSibling),c.A.focus(e.target))}else{var i=o.previousSibling;i&&(o.parentNode.removeChild(o),i.parentNode.insertBefore(o,i),c.A.focus(e.target))}}}function C(e,t,o){for(var n=t.querySelectorAll(e),i=[],a=0,s=n.length;a<s;a++)n[a].checked===o&&i.push(n[a]);return i}function $(e){var t=this,o=y.A.getApiClient(t.options.serverId),n=t.options.userId,i=t.options.userSettings;return i.setUserInfo(n,o).then((function(){var e=t.options.enableSaveConfirmation;!function(e,t,o,n,i,a){d.Ay.show(),i.getUser(o).then((function(o){(function(e,t,o,n){t.Configuration.HidePlayedInLatest=e.querySelector(".chkHidePlayedFromLatest").checked,t.Configuration.LatestItemsExcludes=C(".chkIncludeInLatest",e,!1).map((function(e){return e.getAttribute("data-folderid")})),t.Configuration.MyMediaExcludes=C(".chkIncludeInMyMedia",e,!1).map((function(e){return e.getAttribute("data-folderid")})),t.Configuration.GroupedFolders=C(".chkGroupFolder",e,!0).map((function(e){return e.getAttribute("data-folderid")}));var i,a,s=e.querySelectorAll(".viewItem"),l=[];for(i=0,a=s.length;i<a;i++)l.push(s[i].getAttribute("data-viewid"));t.Configuration.OrderedViews=l,o.set("tvhome",e.querySelector(".selectTVHomeScreen").value),o.set("homesection0",e.querySelector("#selectHomeSection1").value),o.set("homesection1",e.querySelector("#selectHomeSection2").value),o.set("homesection2",e.querySelector("#selectHomeSection3").value),o.set("homesection3",e.querySelector("#selectHomeSection4").value),o.set("homesection4",e.querySelector("#selectHomeSection5").value),o.set("homesection5",e.querySelector("#selectHomeSection6").value),o.set("homesection6",e.querySelector("#selectHomeSection7").value),o.set("homesection7",e.querySelector("#selectHomeSection8").value),o.set("homesection8",e.querySelector("#selectHomeSection9").value),o.set("homesection9",e.querySelector("#selectHomeSection10").value);var r=e.querySelectorAll(".selectLanding");for(i=0,a=r.length;i<a;i++){var c=r[i];o.set("landing-".concat(c.getAttribute("data-folderid")),c.value)}return n.updateUserConfiguration(t.Id,t.Configuration)})(t,o,n,i).then((function(){d.Ay.hide(),a&&(0,h.A)(u.Ay.translate("SettingsSaved")),v.A.trigger(e,"saved")}),(function(){d.Ay.hide()}))}))}(t,t.options.element,n,i,o,e)})),e&&e.preventDefault(),!1}function L(e){var t=m.Ay.parentWithClass(e.target,"chkIncludeInMyMedia");if(t){var o=m.Ay.parentWithClass(t,"verticalSection").querySelector(".fldIncludeInLatest");o&&(t.checked?o.classList.remove("hide"):o.classList.add("hide"))}}var I=function(){return e=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=t,function(e,t){for(var o='<form style="margin:0 auto"> <div class="verticalSection verticalSection-extrabottompadding"> <h2 class="sectionTitle">${Home}</h2> <div class="selectContainer hide selectTVHomeScreenContainer"> <select is="emby-select" class="selectTVHomeScreen" label="${LabelTVHomeScreen}"> <option value="horizontal">${Horizontal}</option> <option value="vertical">${Vertical}</option> </select> <div class="fieldDescription">${LabelPleaseRestart}</div> </div> <div class="verticalSection verticalSection-extrabottompadding"> <label class="checkboxContainer"> <input class="chkHidePlayedFromLatest" type="checkbox" is="emby-checkbox"/> <span>${HideWatchedContentFromLatestMedia}</span> </label> </div> <div class="selectContainer"> <select is="emby-select" id="selectHomeSection1" label="{section1label}"> <option value="smalllibrarytiles">${HeaderMyMedia}</option> <option value="librarybuttons">${HeaderMyMediaSmall}</option> <option value="activerecordings">${HeaderActiveRecordings}</option> <option value="resume">${HeaderContinueWatching}</option> <option value="resumeaudio">${HeaderContinueListening}</option> <option value="resumebook">${HeaderContinueReading}</option> <option value="latestmedia">${HeaderLatestMedia}</option> <option value="nextup">${NextUp}</option> <option value="livetv">${LiveTV}</option> <option value="none">${None}</option> </select> </div> <div class="selectContainer"> <select is="emby-select" id="selectHomeSection2" label="{section2label}"> <option value="smalllibrarytiles">${HeaderMyMedia}</option> <option value="librarybuttons">${HeaderMyMediaSmall}</option> <option value="activerecordings">${HeaderActiveRecordings}</option> <option value="resume">${HeaderContinueWatching}</option> <option value="resumeaudio">${HeaderContinueListening}</option> <option value="resumebook">${HeaderContinueReading}</option> <option value="latestmedia">${HeaderLatestMedia}</option> <option value="nextup">${NextUp}</option> <option value="livetv">${LiveTV}</option> <option value="none">${None}</option> </select> </div> <div class="selectContainer"> <select is="emby-select" id="selectHomeSection3" label="{section3label}"> <option value="smalllibrarytiles">${HeaderMyMedia}</option> <option value="librarybuttons">${HeaderMyMediaSmall}</option> <option value="activerecordings">${HeaderActiveRecordings}</option> <option value="resume">${HeaderContinueWatching}</option> <option value="resumeaudio">${HeaderContinueListening}</option> <option value="resumebook">${HeaderContinueReading}</option> <option value="latestmedia">${HeaderLatestMedia}</option> <option value="nextup">${NextUp}</option> <option value="livetv">${LiveTV}</option> <option value="none">${None}</option> </select> </div> <div class="selectContainer"> <select is="emby-select" id="selectHomeSection4" label="{section4label}"> <option value="smalllibrarytiles">${HeaderMyMedia}</option> <option value="librarybuttons">${HeaderMyMediaSmall}</option> <option value="activerecordings">${HeaderActiveRecordings}</option> <option value="resume">${HeaderContinueWatching}</option> <option value="resumeaudio">${HeaderContinueListening}</option> <option value="resumebook">${HeaderContinueReading}</option> <option value="latestmedia">${HeaderLatestMedia}</option> <option value="nextup">${NextUp}</option> <option value="livetv">${LiveTV}</option> <option value="none">${None}</option> </select> </div> <div class="selectContainer"> <select is="emby-select" id="selectHomeSection5" label="{section5label}"> <option value="smalllibrarytiles">${HeaderMyMedia}</option> <option value="librarybuttons">${HeaderMyMediaSmall}</option> <option value="activerecordings">${HeaderActiveRecordings}</option> <option value="resume">${HeaderContinueWatching}</option> <option value="resumeaudio">${HeaderContinueListening}</option> <option value="resumebook">${HeaderContinueReading}</option> <option value="latestmedia">${HeaderLatestMedia}</option> <option value="nextup">${NextUp}</option> <option value="livetv">${LiveTV}</option> <option value="none">${None}</option> </select> </div> <div class="selectContainer"> <select is="emby-select" id="selectHomeSection6" label="{section6label}"> <option value="smalllibrarytiles">${HeaderMyMedia}</option> <option value="librarybuttons">${HeaderMyMediaSmall}</option> <option value="activerecordings">${HeaderActiveRecordings}</option> <option value="resume">${HeaderContinueWatching}</option> <option value="resumeaudio">${HeaderContinueListening}</option> <option value="resumebook">${HeaderContinueReading}</option> <option value="latestmedia">${HeaderLatestMedia}</option> <option value="nextup">${NextUp}</option> <option value="livetv">${LiveTV}</option> <option value="none">${None}</option> </select> </div> <div class="selectContainer"> <select is="emby-select" id="selectHomeSection7" label="{section7label}"> <option value="smalllibrarytiles">${HeaderMyMedia}</option> <option value="librarybuttons">${HeaderMyMediaSmall}</option> <option value="activerecordings">${HeaderActiveRecordings}</option> <option value="resume">${HeaderContinueWatching}</option> <option value="resumeaudio">${HeaderContinueListening}</option> <option value="resumebook">${HeaderContinueReading}</option> <option value="latestmedia">${HeaderLatestMedia}</option> <option value="nextup">${NextUp}</option> <option value="livetv">${LiveTV}</option> <option value="none">${None}</option> </select> </div> <div class="selectContainer"> <select is="emby-select" id="selectHomeSection8" label="{section8label}"> <option value="smalllibrarytiles">${HeaderMyMedia}</option> <option value="librarybuttons">${HeaderMyMediaSmall}</option> <option value="activerecordings">${HeaderActiveRecordings}</option> <option value="resume">${HeaderContinueWatching}</option> <option value="resumeaudio">${HeaderContinueListening}</option> <option value="resumebook">${HeaderContinueReading}</option> <option value="latestmedia">${HeaderLatestMedia}</option> <option value="nextup">${NextUp}</option> <option value="livetv">${LiveTV}</option> <option value="none">${None}</option> </select> </div> <div class="selectContainer"> <select is="emby-select" id="selectHomeSection9" label="{section9label}"> <option value="smalllibrarytiles">${HeaderMyMedia}</option> <option value="librarybuttons">${HeaderMyMediaSmall}</option> <option value="activerecordings">${HeaderActiveRecordings}</option> <option value="resume">${HeaderContinueWatching}</option> <option value="resumeaudio">${HeaderContinueListening}</option> <option value="resumebook">${HeaderContinueReading}</option> <option value="latestmedia">${HeaderLatestMedia}</option> <option value="nextup">${NextUp}</option> <option value="livetv">${LiveTV}</option> <option value="none">${None}</option> </select> </div> <div class="selectContainer"> <select is="emby-select" id="selectHomeSection10" label="{section10label}"> <option value="smalllibrarytiles">${HeaderMyMedia}</option> <option value="librarybuttons">${HeaderMyMediaSmall}</option> <option value="activerecordings">${HeaderActiveRecordings}</option> <option value="resume">${HeaderContinueWatching}</option> <option value="resumeaudio">${HeaderContinueListening}</option> <option value="resumebook">${HeaderContinueReading}</option> <option value="latestmedia">${HeaderLatestMedia}</option> <option value="nextup">${NextUp}</option> <option value="livetv">${LiveTV}</option> <option value="none">${None}</option> </select> </div> </div> <div class="verticalSection verticalSection-extrabottompadding"> <h2 class="sectionTitle">${HeaderLibraryOrder}</h2> <div class="paperList viewOrderList"></div> </div> <div class="perLibrarySettings"></div> <div class="verticalSection verticalSection-extrabottompadding"> <h2 class="sectionTitle">${HeaderLibraryFolders}</h2> <div> <p>${LabelSelectFolderGroups}</p> <div class="folderGroupList"></div> <div class="fieldDescription checkboxFieldDescription">${LabelSelectFolderGroupsHelp}</div> </div> </div> <button is="emby-button" type="submit" class="raised button-submit block btnSave hide"> <span>${Save}</span> </button> </form> ',n=1;n<=10;n++)o=o.replace("{section".concat(n,"label}"),u.Ay.translate("LabelHomeScreenSectionValue",n));e.element.innerHTML=u.Ay.translateHtml(o,"core"),e.element.querySelector(".viewOrderList").addEventListener("click",H),e.element.querySelector("form").addEventListener("submit",$.bind(t)),e.element.addEventListener("change",L),e.enableSaveButton&&e.element.querySelector(".btnSave").classList.remove("hide"),r.A.tv?e.element.querySelector(".selectTVHomeScreenContainer").classList.remove("hide"):e.element.querySelector(".selectTVHomeScreenContainer").classList.add("hide"),t.loadData(e.autoFocus)}(t,this)},t=[{key:"loadData",value:function(e){var t=this,o=t.options.element;d.Ay.show();var n=t.options.userId,r=y.A.getApiClient(t.options.serverId),v=t.options.userSettings;r.getUser(n).then((function(m){v.setUserInfo(n,r).then((function(){t.dataLoaded=!0,function(e,t,o,n){e.querySelector(".chkHidePlayedFromLatest").checked=t.Configuration.HidePlayedInLatest||!1,function(e,t){for(var o=1;o<=10;o++){var n=e.querySelector("#selectHomeSection".concat(o)),i=p.Ay.getDefaultSection(o-1),a=n.querySelector('option[value="'.concat(i,'"]'))||n.querySelector('option[value=""]'),s=t.get("homesection".concat(o-1));a&&(a.value=""),n.value=s!==i&&s?s:""}e.querySelector(".selectTVHomeScreen").value=t.get("tvhome")||""}(e,o);var r=l.q.fetchQuery((0,a.q)((0,s.C)(n),t.Id,{includeHidden:!0})),c=n.getJSON(n.getUrl("Users/".concat(t.Id,"/GroupingOptions")));Promise.all([r,c]).then((function(n){!function(e,t,o){var n="";n+=o.Items.map((function(e){var t="";return t+='<div class="listItem viewItem" data-viewid="'.concat(e.Id,'">'),t+='<span class="material-icons listItemIcon folder_open" aria-hidden="true"></span>',t+='<div class="listItemBody">',t+="<div>",t+=i()(e.Name),t+="</div>",t+="</div>",t+='<button type="button" is="paper-icon-button-light" class="btnViewItemUp btnViewItemMove autoSize" title="'.concat(u.Ay.translate("Up"),'"><span class="material-icons keyboard_arrow_up" aria-hidden="true"></span></button>'),(t+='<button type="button" is="paper-icon-button-light" class="btnViewItemDown btnViewItemMove autoSize" title="'.concat(u.Ay.translate("Down"),'"><span class="material-icons keyboard_arrow_down" aria-hidden="true"></span></button>'))+"</div>"})).join(""),e.querySelector(".viewOrderList").innerHTML=n}(e,0,n[0]),function(e,t,o,n){for(var i=e.querySelector(".perLibrarySettings"),a="",s=0,l=o.length;s<l;s++)a+=A(o[s],t,n);i.innerHTML=a}(e,t,n[0].Items,o),function(e,t,o){var n="";n+='<div class="checkboxList">',n+=o.map((function(e){var o="",n="chkGroupFolder".concat(e.Id),a=t.Configuration.GroupedFolders.includes(e.Id)?' checked="checked"':"";return o+="<label>",o+='<input type="checkbox" is="emby-checkbox" class="chkGroupFolder" data-folderid="'.concat(e.Id,'" id="').concat(n,'"').concat(a,"/>"),(o+="<span>".concat(i()(e.Name),"</span>"))+"</label>"})).join(""),n+="</div>",e.querySelector(".folderGroupList").innerHTML=n}(e,t,n[1]),d.Ay.hide()}))}(o,m,v,r),e&&c.A.autoFocus(o)}))}))}},{key:"submit",value:function(){$.call(this)}},{key:"destroy",value:function(){this.options=null}}],t&&g(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}(),x=I,M=o(82885),k=o(84069),w=M.UserSettings;function T(e,t){var o,n=t.userId||ApiClient.getCurrentUserId(),i=n===ApiClient.getCurrentUserId()?M:new w;e.addEventListener("viewshow",(function(){o?o.loadData():o=new x({serverId:ApiClient.serverId(),userId:n,element:e.querySelector(".homeScreenSettingsContainer"),userSettings:i,enableSaveButton:!0,enableSaveConfirmation:!0,autoFocus:k.default.isEnabled()})})),e.addEventListener("viewdestroy",(function(){o&&(o.destroy(),o=null)}))}},63001:function(e,t,o){var n=o(46782),i=o(34789),a=o(62882),s=(o(69177),Object.create(HTMLSelectElement.prototype));function l(){return!(!i.A.edgeUwp&&!i.A.xboxOne&&(i.A.tizen||i.A.orsay||i.A.web0s||!i.A.tv&&n.A.tv))}function r(e){var t=c(e),o=t?t.textContent||t.innerText:null;a.default.show({items:e.options,positionTo:e,title:o}).then((function(t){!function(e,t){e.value=t}(e,t),function(e){var t=new Event("change",{bubbles:!1,cancelable:!0});e.dispatchEvent(t)}(e)}))}function c(e){for(var t=e.previousSibling;t&&"LABEL"!==t.tagName;)t=t.previousSibling;return t}function u(){var e=c(this);e&&e.classList.add("selectLabelFocused")}function d(){var e=c(this);e&&e.classList.remove("selectLabelFocused")}function v(e){e.button||l()||(e.preventDefault(),r(this))}function p(e){switch(e.keyCode){case 13:return void(l()||(e.preventDefault(),r(this)));case 37:case 38:case 39:case 40:return void(n.A.tv&&e.preventDefault())}}var m=0;s.createdCallback=function(){this.id||(this.id="embyselect"+m,m++),this.classList.add("emby-select-withcolor"),n.A.tv&&this.classList.add("emby-select-focusscale"),this.addEventListener("mousedown",v),this.addEventListener("keydown",p),this.addEventListener("focus",u),this.addEventListener("blur",d)},s.attachedCallback=function(){var e;if(!this.classList.contains("emby-select")){this.classList.add("emby-select");var t,o=this.ownerDocument.createElement("label");o.innerText=this.getAttribute("label")||"",o.classList.add("selectLabel"),o.htmlFor=this.id,null===(e=this.parentNode)||void 0===e||e.insertBefore(o,this),this.classList.contains("emby-select-withcolor")&&(null===(t=this.parentNode)||void 0===t||t.insertAdjacentHTML("beforeend",'<div class="selectArrowContainer"><div style="visibility:hidden;display:none;">0</div><span class="selectArrow material-icons keyboard_arrow_down" aria-hidden="true"></span></div>'))}},s.setLabel=function(e){var t;(null===(t=this.parentNode)||void 0===t?void 0:t.querySelector("label")).innerText=e},document.registerElement("emby-select",{prototype:s,extends:"select"})},62882:function(e,t,o){o.r(t),o.d(t,{show:function(){return d}});var n=o(22696),i=o.n(n),a=o(79754),s=o(46782),l=o(5898),r=o(47629),c=(o(10353),function(e){var t="function"==typeof Symbol&&Symbol.iterator,o=t&&e[t],n=0;if(o)return o.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")});function u(e,t,n){Promise.resolve().then(o.bind(o,10838)).then((function(o){var i=n?"on":"off";o.centerFocus[i](e,t)})).catch((function(e){console.warn("Error in centerFocus",e)}))}function d(e){var t,o,n,d={removeOnClose:!0,enableHistory:e.enableHistory,scrollY:!1};s.A.tv?(d.size="fullscreen",n=!0,d.autoFocus=!0):(d.modal=!1,d.entryAnimation=e.entryAnimation,d.exitAnimation=e.exitAnimation,d.entryAnimationDuration=e.entryAnimationDuration||140,d.exitAnimationDuration=e.exitAnimationDuration||100,d.autoFocus=!1);var v=a.default.createDialog(d);n?v.classList.add("actionsheet-fullscreen"):v.classList.add("actionsheet-not-fullscreen"),v.classList.add("actionSheet"),e.dialogClass&&v.classList.add(e.dialogClass);var p="",m=s.A.tv?"scrollY smoothScrollY hiddenScrollY":"scrollY",y="";e.items.length>20&&(y+="min-width:"+(r.Ay.getWindowSize().innerWidth>=300?240:200)+"px;");var h,b=!1,f=[];try{for(var g=c(e.items),S=g.next();!S.done;S=g.next())(h=(L=S.value).icon||(L.selected?"check":null))&&(b=!0),f.push(h||"")}catch(e){t={error:e}}finally{try{S&&!S.done&&(o=g.return)&&o.call(g)}finally{if(t)throw t.error}}s.A.tv&&(p+='<button is="paper-icon-button-light" class="btnCloseActionSheet hide-mouse-idle-tv" tabindex="-1" title="'.concat(l.Ay.translate("ButtonBack"),'">\n                     <span class="material-icons arrow_back" aria-hidden="true"></span>\n                 </button>'));var A=e.title&&!b;A||s.A.tv?p+='<div class="actionSheetContent actionSheetContent-centered">':p+='<div class="actionSheetContent">',e.title&&(p+='<h1 class="actionSheetTitle">'+i()(e.title)+"</h1>"),e.text&&(p+='<p class="actionSheetText">'+i()(e.text)+"</p>");var H="actionSheetScroller";s.A.tv&&(H+=" actionSheetScroller-tv focuscontainer-x focuscontainer-y"),p+='<div class="'+H+" "+m+'" style="'+y+'">';var C="listItem listItem-button actionSheetMenuItem";(e.border||e.shaded)&&(C+=" listItem-border"),e.menuItemClass&&(C+=" "+e.menuItemClass),s.A.tv&&(C+=" listItem-focusscale"),s.A.mobile&&(C+=" actionsheet-xlargeFont");for(var $=0;$<e.items.length;$++){var L;(L=e.items[$]).divider?p+='<div class="actionsheetDivider"></div>':(p+="<button"+(L.selected&&s.A.tv?" autoFocus":"")+' is="emby-button" type="button" class="'+C+'" data-id="'+(null==L.id||""===L.id?L.value:L.id)+'">',(h=f[$])?p+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons '.concat(h,'" aria-hidden="true"></span>'):b&&!A&&(p+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons check" aria-hidden="true" style="visibility:hidden;"></span>'),p+='<div class="listItemBody actionsheetListItemBody">',p+='<div class="listItemBodyText actionSheetItemText">',p+=i()(L.name||L.textContent||L.innerText),p+="</div>",L.secondaryText&&(p+='<div class="listItemBodyText secondary">'.concat(i()(L.secondaryText),"</div>")),p+="</div>",L.asideText&&(p+='<div class="listItemAside actionSheetItemAsideText">'.concat(i()(L.asideText),"</div>")),p+="</button>")}if(e.showCancel&&(p+='<div class="buttons">',p+='<button is="emby-button" type="button" class="btnCloseActionSheet">'.concat(l.Ay.translate("ButtonCancel"),"</button>"),p+="</div>"),p+="</div>",v.innerHTML=p,s.A.tv){var I=v.querySelector(".actionSheetScroller");I&&u(I,!1,!0)}var x=v.querySelector(".btnCloseActionSheet");x&&x.addEventListener("click",(function(){a.default.close(v)}));var M,k=null;return e.timeout&&(M=setTimeout((function(){a.default.close(v)}),e.timeout)),new Promise((function(t,o){var n=!1;v.addEventListener("click",(function(o){var i=r.Ay.parentWithClass(o.target,"actionSheetMenuItem");i&&(k=i.getAttribute("data-id"),e.resolveOnClick&&(Array.isArray(e.resolveOnClick)?-1!==e.resolveOnClick.indexOf(k)&&(t(k),n=!0):(t(k),n=!0)),a.default.close(v))})),v.addEventListener("close",(function(){if(s.A.tv){var i=v.querySelector(".actionSheetScroller");i&&u(i,!1,!1)}M&&(clearTimeout(M),M=void 0),n||(null!=k?(e.callback&&e.callback(k),t(k)):o(new Error("ActionSheet closed without resolving")))})),a.default.open(v).catch((function(e){console.warn("DialogHelper.open error",e)}));var i=e.positionTo&&"fullscreen"!==d.size?function(e,t,o){var n=r.Ay.getWindowSize(),i=n.innerHeight,a=n.innerWidth,s=function(e){var t,o,n=[];if(!document)return n;try{for(var i=c(e),a=i.next();!a.done;a=i.next()){var s=a.value.getBoundingClientRect();n.push({top:s.top,left:s.left,width:s.width,height:s.height})}}catch(e){t={error:e}}finally{try{a&&!a.done&&(o=i.return)&&o.call(i)}finally{if(t)throw t.error}}return n}([e])[0];"top"!==t.positionY&&(s.top+=(s.height||0)/2),s.left+=(s.width||0)/2;var l=o.offsetHeight||300,u=o.offsetWidth||160;s.top-=l/2,s.left-=u/2;var d=s.left+u-a,v=s.top+l-i;return d>0&&(s.left-=d+20),v>0&&(s.top-=v+20),s.top+=t.offsetTop||0,s.left+=t.offsetLeft||0,s.top=Math.max(s.top,10),s.left=Math.max(s.left,10),s}(e.positionTo,e,v):null;i&&(v.style.position="fixed",v.style.margin="0",v.style.left=i.left+"px",v.style.top=i.top+"px")}))}t.default={show:d}},46850:function(e,t,o){var n;o.d(t,{D:function(){return n}}),function(e){e.Albums="albums",e.AlbumArtists="albumartists",e.Artists="artists",e.Channels="channels",e.Collections="collections",e.Episodes="episodes",e.Favorites="favorites",e.Genres="genres",e.Guide="guide",e.Movies="movies",e.Networks="networks",e.Playlists="playlists",e.Programs="programs",e.Recordings="recordings",e.Schedule="schedule",e.Series="series",e.SeriesTimers="seriestimers",e.Songs="songs",e.Suggestions="suggestions",e.Trailers="trailers",e.Upcoming="upcoming",e.PhotoAlbums="photoalbums",e.Photos="photos",e.Videos="videos",e.Books="books"}(n||(n={}))}}]);