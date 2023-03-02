"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[43884,7293],{680:function(e,t,o){o.r(t),o.d(t,{default:function(){return M}}),o(61013),o(95623),o(61514),o(23938),o(5769),o(63238),o(61418),o(17460),o(14078),o(52077),o(911),o(19068),o(87211),o(25901),o(92189),o(95163),o(99785),o(91047);var n=o(65009),i=o.n(n),a=o(30325),l=o(34643),s=o(94994),r=o(28540),c=o(81643),u=o(71890),d=o(72365),p=(o(15856),o(12291),o(18613)),v=o(56663);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function b(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==m(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,t);if("object"!==m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key,"string"),"symbol"===m(i)?i:String(i)),n)}var i}function h(e,t,o){var n,a="";if("Channel"!==e.Type&&"boxsets"!==e.CollectionType&&"playlists"!==e.CollectionType||(n=!(t.Configuration.MyMediaExcludes||[]).includes(e.Id),a+="<div>",a+="<label>",a+='<input type="checkbox" is="emby-checkbox" class="chkIncludeInMyMedia" data-folderid="'.concat(e.Id,'"').concat(n?' checked="checked"':"","/>"),a+="<span>".concat(s.ZP.translate("DisplayInMyMedia"),"</span>"),a+="</label>",a+="</div>"),["playlists","livetv","boxsets","channels"].includes(e.CollectionType||"")||(n=!t.Configuration.LatestItemsExcludes.includes(e.Id),a+='<label class="fldIncludeInLatest">',a+='<input type="checkbox" is="emby-checkbox" class="chkIncludeInLatest" data-folderid="'.concat(e.Id,'"').concat(n?' checked="checked"':"","/>"),a+="<span>".concat(s.ZP.translate("DisplayInOtherHomeScreenSections"),"</span>"),a+="</label>"),a&&(a='<div class="checkboxListContainer">'.concat(a,"</div>")),"movies"===e.CollectionType||"tvshows"===e.CollectionType||"music"===e.CollectionType||"livetv"===e.CollectionType){var l="livetv"===e.CollectionType?e.CollectionType:e.Id;a+='<div class="selectContainer">',a+='<select is="emby-select" class="selectLanding" data-folderid="'.concat(l,'" label="').concat(s.ZP.translate("LabelDefaultScreen"),'">');var r=o.get("landing-".concat(l));a+=function(e,t){return function(e){var t=[];return"movies"===e?(t.push({name:s.ZP.translate("Movies"),value:"movies",isDefault:!0}),t.push({name:s.ZP.translate("Suggestions"),value:"suggestions"}),t.push({name:s.ZP.translate("Trailers"),value:"trailers"}),t.push({name:s.ZP.translate("Favorites"),value:"favorites"}),t.push({name:s.ZP.translate("Collections"),value:"collections"}),t.push({name:s.ZP.translate("Genres"),value:"genres"})):"tvshows"===e?(t.push({name:s.ZP.translate("Shows"),value:"shows",isDefault:!0}),t.push({name:s.ZP.translate("Suggestions"),value:"suggestions"}),t.push({name:s.ZP.translate("TabUpcoming"),value:"upcoming"}),t.push({name:s.ZP.translate("Genres"),value:"genres"}),t.push({name:s.ZP.translate("TabNetworks"),value:"networks"}),t.push({name:s.ZP.translate("Episodes"),value:"episodes"})):"music"===e?(t.push({name:s.ZP.translate("Albums"),value:"albums",isDefault:!0}),t.push({name:s.ZP.translate("Suggestions"),value:"suggestions"}),t.push({name:s.ZP.translate("HeaderAlbumArtists"),value:"albumartists"}),t.push({name:s.ZP.translate("Artists"),value:"artists"}),t.push({name:s.ZP.translate("Playlists"),value:"playlists"}),t.push({name:s.ZP.translate("Songs"),value:"songs"}),t.push({name:s.ZP.translate("Genres"),value:"genres"})):"livetv"===e&&(t.push({name:s.ZP.translate("Programs"),value:"programs",isDefault:!0}),t.push({name:s.ZP.translate("Guide"),value:"guide"}),t.push({name:s.ZP.translate("Channels"),value:"channels"}),t.push({name:s.ZP.translate("Recordings"),value:"recordings"}),t.push({name:s.ZP.translate("Schedule"),value:"schedule"}),t.push({name:s.ZP.translate("Series"),value:"series"})),t}(e).map((function(e){var o=t===e.value||e.isDefault&&!t?" selected":"",n=e.isDefault?"":e.value;return'<option value="'.concat(n,'"').concat(o,">").concat(i()(e.name),"</option>")})).join("")}(e.CollectionType,r),a+="</select>",a+="</div>"}if(a){var c="";c+='<div class="verticalSection">',c+='<h2 class="sectionTitle">',c+=i()(e.Name),a=(c+="</h2>")+a,a+="</div>"}return a}function y(e){var t=d.ZP.parentWithClass(e.target,"btnViewItemMove");if(t){var o=d.ZP.parentWithClass(t,"viewItem");if(o)if(t.classList.contains("btnViewItemDown")){var n=o.nextSibling;n&&(o.parentNode.removeChild(o),n.parentNode.insertBefore(o,n.nextSibling),l.Z.focus(e.target))}else{var i=o.previousSibling;i&&(o.parentNode.removeChild(o),i.parentNode.insertBefore(o,i),l.Z.focus(e.target))}}}function g(e,t,o){for(var n=t.querySelectorAll(e),i=[],a=0,l=n.length;a<l;a++)n[a].checked===o&&i.push(n[a]);return i}function f(e){var t=this,o=p.Z.getApiClient(t.options.serverId),n=t.options.userId,i=t.options.userSettings;return i.setUserInfo(n,o).then((function(){var e=t.options.enableSaveConfirmation;!function(e,t,o,n,i,a){r.ZP.show(),i.getUser(o).then((function(o){(function(e,t,o,n){t.Configuration.HidePlayedInLatest=e.querySelector(".chkHidePlayedFromLatest").checked,t.Configuration.LatestItemsExcludes=g(".chkIncludeInLatest",e,!1).map((function(e){return e.getAttribute("data-folderid")})),t.Configuration.MyMediaExcludes=g(".chkIncludeInMyMedia",e,!1).map((function(e){return e.getAttribute("data-folderid")})),t.Configuration.GroupedFolders=g(".chkGroupFolder",e,!0).map((function(e){return e.getAttribute("data-folderid")}));var i,a,l=e.querySelectorAll(".viewItem"),s=[];for(i=0,a=l.length;i<a;i++)s.push(l[i].getAttribute("data-viewid"));t.Configuration.OrderedViews=s,o.set("tvhome",e.querySelector(".selectTVHomeScreen").value),o.set("homesection0",e.querySelector("#selectHomeSection1").value),o.set("homesection1",e.querySelector("#selectHomeSection2").value),o.set("homesection2",e.querySelector("#selectHomeSection3").value),o.set("homesection3",e.querySelector("#selectHomeSection4").value),o.set("homesection4",e.querySelector("#selectHomeSection5").value),o.set("homesection5",e.querySelector("#selectHomeSection6").value),o.set("homesection6",e.querySelector("#selectHomeSection7").value);var r=e.querySelectorAll(".selectLanding");for(i=0,a=r.length;i<a;i++){var c=r[i];o.set("landing-".concat(c.getAttribute("data-folderid")),c.value)}return n.updateUserConfiguration(t.Id,t.Configuration)})(t,o,n,i).then((function(){r.ZP.hide(),a&&(0,v.Z)(s.ZP.translate("SettingsSaved")),c.Z.trigger(e,"saved")}),(function(){r.ZP.hide()}))}))}(t,t.options.element,n,i,o,e)})),e&&e.preventDefault(),!1}function S(e){var t=d.ZP.parentWithClass(e.target,"chkIncludeInMyMedia");if(t){var o=d.ZP.parentWithClass(t,"verticalSection").querySelector(".fldIncludeInLatest");o&&(t.checked?o.classList.remove("hide"):o.classList.add("hide"))}}var H=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=t,function(e,t){for(var o='<form style="margin:0 auto"> <div class="verticalSection verticalSection-extrabottompadding"> <h2 class="sectionTitle">${Home}</h2> <div class="selectContainer hide selectTVHomeScreenContainer"> <select is="emby-select" class="selectTVHomeScreen" label="${LabelTVHomeScreen}"> <option value="horizontal">${Horizontal}</option> <option value="vertical">${Vertical}</option> </select> <div class="fieldDescription">${LabelPleaseRestart}</div> </div> <div class="verticalSection verticalSection-extrabottompadding"> <label class="checkboxContainer"> <input class="chkHidePlayedFromLatest" type="checkbox" is="emby-checkbox"/> <span>${HideWatchedContentFromLatestMedia}</span> </label> </div> <div class="selectContainer"> <select is="emby-select" id="selectHomeSection1" label="{section1label}"> <option value="smalllibrarytiles">${HeaderMyMedia}</option> <option value="librarybuttons">${HeaderMyMediaSmall}</option> <option value="activerecordings">${HeaderActiveRecordings}</option> <option value="resume">${HeaderContinueWatching}</option> <option value="resumeaudio">${HeaderContinueListening}</option> <option value="resumebook">${HeaderContinueReading}</option> <option value="latestmedia">${HeaderLatestMedia}</option> <option value="nextup">${NextUp}</option> <option value="livetv">${LiveTV}</option> <option value="none">${None}</option> </select> </div> <div class="selectContainer"> <select is="emby-select" id="selectHomeSection2" label="{section2label}"> <option value="smalllibrarytiles">${HeaderMyMedia}</option> <option value="librarybuttons">${HeaderMyMediaSmall}</option> <option value="activerecordings">${HeaderActiveRecordings}</option> <option value="resume">${HeaderContinueWatching}</option> <option value="resumeaudio">${HeaderContinueListening}</option> <option value="resumebook">${HeaderContinueReading}</option> <option value="latestmedia">${HeaderLatestMedia}</option> <option value="nextup">${NextUp}</option> <option value="livetv">${LiveTV}</option> <option value="none">${None}</option> </select> </div> <div class="selectContainer"> <select is="emby-select" id="selectHomeSection3" label="{section3label}"> <option value="smalllibrarytiles">${HeaderMyMedia}</option> <option value="librarybuttons">${HeaderMyMediaSmall}</option> <option value="activerecordings">${HeaderActiveRecordings}</option> <option value="resume">${HeaderContinueWatching}</option> <option value="resumeaudio">${HeaderContinueListening}</option> <option value="resumebook">${HeaderContinueReading}</option> <option value="latestmedia">${HeaderLatestMedia}</option> <option value="nextup">${NextUp}</option> <option value="livetv">${LiveTV}</option> <option value="none">${None}</option> </select> </div> <div class="selectContainer"> <select is="emby-select" id="selectHomeSection4" label="{section4label}"> <option value="smalllibrarytiles">${HeaderMyMedia}</option> <option value="librarybuttons">${HeaderMyMediaSmall}</option> <option value="activerecordings">${HeaderActiveRecordings}</option> <option value="resume">${HeaderContinueWatching}</option> <option value="resumeaudio">${HeaderContinueListening}</option> <option value="resumebook">${HeaderContinueReading}</option> <option value="latestmedia">${HeaderLatestMedia}</option> <option value="nextup">${NextUp}</option> <option value="livetv">${LiveTV}</option> <option value="none">${None}</option> </select> </div> <div class="selectContainer"> <select is="emby-select" id="selectHomeSection5" label="{section5label}"> <option value="smalllibrarytiles">${HeaderMyMedia}</option> <option value="librarybuttons">${HeaderMyMediaSmall}</option> <option value="activerecordings">${HeaderActiveRecordings}</option> <option value="resume">${HeaderContinueWatching}</option> <option value="resumeaudio">${HeaderContinueListening}</option> <option value="resumebook">${HeaderContinueReading}</option> <option value="latestmedia">${HeaderLatestMedia}</option> <option value="nextup">${NextUp}</option> <option value="livetv">${LiveTV}</option> <option value="none">${None}</option> </select> </div> <div class="selectContainer"> <select is="emby-select" id="selectHomeSection6" label="{section6label}"> <option value="smalllibrarytiles">${HeaderMyMedia}</option> <option value="librarybuttons">${HeaderMyMediaSmall}</option> <option value="activerecordings">${HeaderActiveRecordings}</option> <option value="resume">${HeaderContinueWatching}</option> <option value="resumeaudio">${HeaderContinueListening}</option> <option value="resumebook">${HeaderContinueReading}</option> <option value="latestmedia">${HeaderLatestMedia}</option> <option value="nextup">${NextUp}</option> <option value="livetv">${LiveTV}</option> <option value="none">${None}</option> </select> </div> <div class="selectContainer"> <select is="emby-select" id="selectHomeSection7" label="{section7label}"> <option value="smalllibrarytiles">${HeaderMyMedia}</option> <option value="librarybuttons">${HeaderMyMediaSmall}</option> <option value="activerecordings">${HeaderActiveRecordings}</option> <option value="resume">${HeaderContinueWatching}</option> <option value="resumeaudio">${HeaderContinueListening}</option> <option value="resumebook">${HeaderContinueReading}</option> <option value="latestmedia">${HeaderLatestMedia}</option> <option value="nextup">${NextUp}</option> <option value="livetv">${LiveTV}</option> <option value="none">${None}</option> </select> </div> </div> <div class="verticalSection verticalSection-extrabottompadding"> <h2 class="sectionTitle">${HeaderLibraryOrder}</h2> <div class="paperList viewOrderList"></div> </div> <div class="perLibrarySettings"></div> <div class="verticalSection verticalSection-extrabottompadding"> <h2 class="sectionTitle">${HeaderLibraryFolders}</h2> <div> <p>${LabelSelectFolderGroups}</p> <div class="folderGroupList"></div> <div class="fieldDescription checkboxFieldDescription">${LabelSelectFolderGroupsHelp}</div> </div> </div> <button is="emby-button" type="submit" class="raised button-submit block btnSave hide"> <span>${Save}</span> </button> </form> ',n=1;n<=7;n++)o=o.replace("{section".concat(n,"label}"),s.ZP.translate("LabelHomeScreenSectionValue",n));e.element.innerHTML=s.ZP.translateHtml(o,"core"),e.element.querySelector(".viewOrderList").addEventListener("click",y),e.element.querySelector("form").addEventListener("submit",f.bind(t)),e.element.addEventListener("change",S),e.enableSaveButton&&e.element.querySelector(".btnSave").classList.remove("hide"),a.Z.tv?e.element.querySelector(".selectTVHomeScreenContainer").classList.remove("hide"):e.element.querySelector(".selectTVHomeScreenContainer").classList.add("hide"),t.loadData(e.autoFocus)}(t,this)}var t,o;return t=e,o=[{key:"loadData",value:function(e){var t=this,o=t.options.element;r.ZP.show();var n=t.options.userId,a=p.Z.getApiClient(t.options.serverId),c=t.options.userSettings;a.getUser(n).then((function(d){c.setUserInfo(n,a).then((function(){t.dataLoaded=!0,function(e,t,o,n){e.querySelector(".chkHidePlayedFromLatest").checked=t.Configuration.HidePlayedInLatest||!1,function(e,t){for(var o=1;o<=7;o++){var n=e.querySelector("#selectHomeSection".concat(o)),i=u.ZP.getDefaultSection(o-1),a=n.querySelector("option[value=".concat(i,"]"))||n.querySelector('option[value=""]'),l=t.get("homesection".concat(o-1));a.value="",n.value=l!==i&&l?l:""}e.querySelector(".selectTVHomeScreen").value=t.get("tvhome")||""}(e,o);var a=n.getUserViews({IncludeHidden:!0},t.Id),l=n.getJSON(n.getUrl("Users/".concat(t.Id,"/GroupingOptions")));Promise.all([a,l]).then((function(n){!function(e,t,o){var n="";n+=o.Items.map((function(e){var t="";return t+='<div class="listItem viewItem" data-viewid="'.concat(e.Id,'">'),t+='<span class="material-icons listItemIcon folder_open" aria-hidden="true"></span>',t+='<div class="listItemBody">',t+="<div>",t+=i()(e.Name),t+="</div>",t+="</div>",t+='<button type="button" is="paper-icon-button-light" class="btnViewItemUp btnViewItemMove autoSize" title="'.concat(s.ZP.translate("Up"),'"><span class="material-icons keyboard_arrow_up" aria-hidden="true"></span></button>'),(t+='<button type="button" is="paper-icon-button-light" class="btnViewItemDown btnViewItemMove autoSize" title="'.concat(s.ZP.translate("Down"),'"><span class="material-icons keyboard_arrow_down" aria-hidden="true"></span></button>'))+"</div>"})).join(""),e.querySelector(".viewOrderList").innerHTML=n}(e,0,n[0]),function(e,t,o,n){for(var i=e.querySelector(".perLibrarySettings"),a="",l=0,s=o.length;l<s;l++)a+=h(o[l],t,n);i.innerHTML=a}(e,t,n[0].Items,o),function(e,t,o){var n="";n+='<div class="checkboxList">',n+=o.map((function(e){var o="",n="chkGroupFolder".concat(e.Id),a=t.Configuration.GroupedFolders.includes(e.Id)?' checked="checked"':"";return o+="<label>",o+='<input type="checkbox" is="emby-checkbox" class="chkGroupFolder" data-folderid="'.concat(e.Id,'" id="').concat(n,'"').concat(a,"/>"),(o+="<span>".concat(i()(e.Name),"</span>"))+"</label>"})).join(""),n+="</div>",e.querySelector(".folderGroupList").innerHTML=n}(e,t,n[1]),r.ZP.hide()}))}(o,d,c,a),e&&l.Z.autoFocus(o)}))}))}},{key:"submit",value:function(){f.call(this)}},{key:"destroy",value:function(){this.options=null}}],o&&b(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}(),$=H,C=o(60934),L=o(87680),I=C.UserSettings;function M(e,t){var o,n=t.userId||ApiClient.getCurrentUserId(),i=n===ApiClient.getCurrentUserId()?C:new I;e.addEventListener("viewshow",(function(){o?o.loadData():o=new $({serverId:ApiClient.serverId(),userId:n,element:e.querySelector(".homeScreenSettingsContainer"),userSettings:i,enableSaveButton:!0,enableSaveConfirmation:!0,autoFocus:L.default.isEnabled()})})),e.addEventListener("viewdestroy",(function(){o&&(o.destroy(),o=null)}))}}}]);