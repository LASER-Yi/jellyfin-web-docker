(self.webpackChunk=self.webpackChunk||[]).push([[3884],{79547:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return M}}),o(61013),o(95623),o(61514),o(23938),o(5769),o(63238),o(61418),o(17460),o(14078),o(52077),o(911),o(19068),o(87211),o(25901),o(92189),o(95163),o(99785),o(91047);var n=o(78695),i=o(27515),a=o(53754),l=o(6594),s=o(47005),r=o(28874),c=o(83094),u=(o(17734),o(50447),o(65219),o(53913)),d=o(38440),v=o(83665),p=o.n(v);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function b(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==m(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,t);if("object"!==m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key,"string"),"symbol"===m(i)?i:String(i)),n)}var i}function h(e,t,o,n){var i,l="";if("Channel"!==e.Type&&"boxsets"!==e.CollectionType&&"playlists"!==e.CollectionType||(i=!(t.Configuration.MyMediaExcludes||[]).includes(e.Id),l+="<div>",l+="<label>",l+='<input type="checkbox" is="emby-checkbox" class="chkIncludeInMyMedia" data-folderid="'.concat(e.Id,'"').concat(i?' checked="checked"':"","/>"),l+="<span>".concat(a.ZP.translate("DisplayInMyMedia"),"</span>"),l+="</label>",l+="</div>"),["playlists","livetv","boxsets","channels"].includes(e.CollectionType||"")||(i=!t.Configuration.LatestItemsExcludes.includes(e.Id),l+='<label class="fldIncludeInLatest">',l+='<input type="checkbox" is="emby-checkbox" class="chkIncludeInLatest" data-folderid="'.concat(e.Id,'"').concat(i?' checked="checked"':"","/>"),l+="<span>".concat(a.ZP.translate("DisplayInOtherHomeScreenSections"),"</span>"),l+="</label>"),l&&(l='<div class="checkboxListContainer">'.concat(l,"</div>")),"movies"===e.CollectionType||"tvshows"===e.CollectionType||"music"===e.CollectionType||"livetv"===e.CollectionType){var s="livetv"===e.CollectionType?e.CollectionType:e.Id;l+='<div class="selectContainer">',l+='<select is="emby-select" class="selectLanding" data-folderid="'.concat(s,'" label="').concat(a.ZP.translate("LabelDefaultScreen"),'">');var r=o.get("landing-".concat(s));l+=function(e,t){return function(e){var t=[];return"movies"===e?(t.push({name:a.ZP.translate("Movies"),value:"movies",isDefault:!0}),t.push({name:a.ZP.translate("Suggestions"),value:"suggestions"}),t.push({name:a.ZP.translate("Trailers"),value:"trailers"}),t.push({name:a.ZP.translate("Favorites"),value:"favorites"}),t.push({name:a.ZP.translate("Collections"),value:"collections"}),t.push({name:a.ZP.translate("Genres"),value:"genres"})):"tvshows"===e?(t.push({name:a.ZP.translate("Shows"),value:"shows",isDefault:!0}),t.push({name:a.ZP.translate("Suggestions"),value:"suggestions"}),t.push({name:a.ZP.translate("TabUpcoming"),value:"upcoming"}),t.push({name:a.ZP.translate("Genres"),value:"genres"}),t.push({name:a.ZP.translate("TabNetworks"),value:"networks"}),t.push({name:a.ZP.translate("Episodes"),value:"episodes"})):"music"===e?(t.push({name:a.ZP.translate("Albums"),value:"albums",isDefault:!0}),t.push({name:a.ZP.translate("Suggestions"),value:"suggestions"}),t.push({name:a.ZP.translate("HeaderAlbumArtists"),value:"albumartists"}),t.push({name:a.ZP.translate("Artists"),value:"artists"}),t.push({name:a.ZP.translate("Playlists"),value:"playlists"}),t.push({name:a.ZP.translate("Songs"),value:"songs"}),t.push({name:a.ZP.translate("Genres"),value:"genres"})):"livetv"===e&&(t.push({name:a.ZP.translate("Programs"),value:"programs",isDefault:!0}),t.push({name:a.ZP.translate("Guide"),value:"guide"}),t.push({name:a.ZP.translate("Channels"),value:"channels"}),t.push({name:a.ZP.translate("Recordings"),value:"recordings"}),t.push({name:a.ZP.translate("Schedule"),value:"schedule"}),t.push({name:a.ZP.translate("Series"),value:"series"})),t}(e).map((function(e){var o=t===e.value||e.isDefault&&!t?" selected":"",n=e.isDefault?"":e.value;return'<option value="'.concat(n,'"').concat(o,">").concat(e.name,"</option>")})).join("")}(e.CollectionType,r),l+="</select>",l+="</div>"}if(l){var c="";c+='<div class="verticalSection">',c+='<h2 class="sectionTitle">',c+=e.Name,l=(c+="</h2>")+l,l+="</div>"}return l}function y(e){var t=c.ZP.parentWithClass(e.target,"btnViewItemMove");if(t){var o=c.ZP.parentWithClass(t,"viewItem");if(o)if(t.classList.contains("btnViewItemDown")){var n=o.nextSibling;n&&(o.parentNode.removeChild(o),n.parentNode.insertBefore(o,n.nextSibling),i.Z.focus(e.target))}else{var a=o.previousSibling;a&&(o.parentNode.removeChild(o),a.parentNode.insertBefore(o,a),i.Z.focus(e.target))}}}function f(e,t,o){for(var n=t.querySelectorAll(e),i=[],a=0,l=n.length;a<l;a++)n[a].checked===o&&i.push(n[a]);return i}function g(e){var t=this,o=u.Z.getApiClient(t.options.serverId),n=t.options.userId,i=t.options.userSettings;return i.setUserInfo(n,o).then((function(){var e=t.options.enableSaveConfirmation;!function(e,t,o,n,i,r){l.ZP.show(),i.getUser(o).then((function(o){(function(e,t,o,n){t.Configuration.HidePlayedInLatest=e.querySelector(".chkHidePlayedFromLatest").checked,t.Configuration.LatestItemsExcludes=f(".chkIncludeInLatest",e,!1).map((function(e){return e.getAttribute("data-folderid")})),t.Configuration.MyMediaExcludes=f(".chkIncludeInMyMedia",e,!1).map((function(e){return e.getAttribute("data-folderid")})),t.Configuration.GroupedFolders=f(".chkGroupFolder",e,!0).map((function(e){return e.getAttribute("data-folderid")}));var i,a,l=e.querySelectorAll(".viewItem"),s=[];for(i=0,a=l.length;i<a;i++)s.push(l[i].getAttribute("data-viewid"));t.Configuration.OrderedViews=s,o.set("tvhome",e.querySelector(".selectTVHomeScreen").value),o.set("homesection0",e.querySelector("#selectHomeSection1").value),o.set("homesection1",e.querySelector("#selectHomeSection2").value),o.set("homesection2",e.querySelector("#selectHomeSection3").value),o.set("homesection3",e.querySelector("#selectHomeSection4").value),o.set("homesection4",e.querySelector("#selectHomeSection5").value),o.set("homesection5",e.querySelector("#selectHomeSection6").value),o.set("homesection6",e.querySelector("#selectHomeSection7").value);var r=e.querySelectorAll(".selectLanding");for(i=0,a=r.length;i<a;i++){var c=r[i];o.set("landing-".concat(c.getAttribute("data-folderid")),c.value)}return n.updateUserConfiguration(t.Id,t.Configuration)})(t,o,n,i).then((function(){l.ZP.hide(),r&&(0,d.Z)(a.ZP.translate("SettingsSaved")),s.Events.trigger(e,"saved")}),(function(){l.ZP.hide()}))}))}(t,t.options.element,n,i,o,e)})),e&&e.preventDefault(),!1}function S(e){var t=c.ZP.parentWithClass(e.target,"chkIncludeInMyMedia");if(t){var o=c.ZP.parentWithClass(t,"verticalSection").querySelector(".fldIncludeInLatest");o&&(t.checked?o.classList.remove("hide"):o.classList.add("hide"))}}var H=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=t,function(e,t){for(var o=p(),i=1;i<=7;i++)o=o.replace("{section".concat(i,"label}"),a.ZP.translate("LabelHomeScreenSectionValue",i));e.element.innerHTML=a.ZP.translateHtml(o,"core"),e.element.querySelector(".viewOrderList").addEventListener("click",y),e.element.querySelector("form").addEventListener("submit",g.bind(t)),e.element.addEventListener("change",S),e.enableSaveButton&&e.element.querySelector(".btnSave").classList.remove("hide"),n.Z.tv?e.element.querySelector(".selectTVHomeScreenContainer").classList.remove("hide"):e.element.querySelector(".selectTVHomeScreenContainer").classList.add("hide"),t.loadData(e.autoFocus)}(t,this)}var t,o;return t=e,o=[{key:"loadData",value:function(e){var t=this,o=t.options.element;l.ZP.show();var n=t.options.userId,s=u.Z.getApiClient(t.options.serverId),c=t.options.userSettings;s.getUser(n).then((function(u){c.setUserInfo(n,s).then((function(){t.dataLoaded=!0,function(e,t,o,n){e.querySelector(".chkHidePlayedFromLatest").checked=t.Configuration.HidePlayedInLatest||!1,function(e,t){for(var o=1;o<=7;o++){var n=e.querySelector("#selectHomeSection".concat(o)),i=r.ZP.getDefaultSection(o-1),a=n.querySelector("option[value=".concat(i,"]"))||n.querySelector('option[value=""]'),l=t.get("homesection".concat(o-1));a.value="",n.value=l!==i&&l?l:""}e.querySelector(".selectTVHomeScreen").value=t.get("tvhome")||""}(e,o);var i=n.getUserViews({IncludeHidden:!0},t.Id),s=n.getJSON(n.getUrl("Users/".concat(t.Id,"/GroupingOptions")));Promise.all([i,s]).then((function(n){!function(e,t,o){var n="";n+=o.Items.map((function(e){var t="";return t+='<div class="listItem viewItem" data-viewid="'.concat(e.Id,'">'),t+='<span class="material-icons listItemIcon folder_open"></span>',t+='<div class="listItemBody">',t+="<div>",t+=e.Name,t+="</div>",t+="</div>",t+='<button type="button" is="paper-icon-button-light" class="btnViewItemUp btnViewItemMove autoSize" title="'.concat(a.ZP.translate("Up"),'"><span class="material-icons keyboard_arrow_up"></span></button>'),(t+='<button type="button" is="paper-icon-button-light" class="btnViewItemDown btnViewItemMove autoSize" title="'.concat(a.ZP.translate("Down"),'"><span class="material-icons keyboard_arrow_down"></span></button>'))+"</div>"})).join(""),e.querySelector(".viewOrderList").innerHTML=n}(e,0,n[0]),function(e,t,o,n,i){for(var a=e.querySelector(".perLibrarySettings"),l="",s=0,r=o.length;s<r;s++)l+=h(o[s],t,n);a.innerHTML=l}(e,t,n[0].Items,o),function(e,t,o){var n="";n+='<div class="checkboxList">',n+=o.map((function(e){var o="",n="chkGroupFolder".concat(e.Id),i=t.Configuration.GroupedFolders.includes(e.Id)?' checked="checked"':"";return o+="<label>",o+='<input type="checkbox" is="emby-checkbox" class="chkGroupFolder" data-folderid="'.concat(e.Id,'" id="').concat(n,'"').concat(i,"/>"),(o+="<span>".concat(e.Name,"</span>"))+"</label>"})).join(""),n+="</div>",e.querySelector(".folderGroupList").innerHTML=n}(e,t,n[1]),l.ZP.hide()}))}(o,u,c,s),e&&i.Z.autoFocus(o)}))}))}},{key:"submit",value:function(){g.call(this)}},{key:"destroy",value:function(){this.options=null}}],o&&b(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}(),$=H,C=o(28978),L=o(6610),I=C.UserSettings;function M(e,t){var o,n=t.userId||ApiClient.getCurrentUserId(),i=n===ApiClient.getCurrentUserId()?C:new I;e.addEventListener("viewshow",(function(){o?o.loadData():o=new $({serverId:ApiClient.serverId(),userId:n,element:e.querySelector(".homeScreenSettingsContainer"),userSettings:i,enableSaveButton:!0,enableSaveConfirmation:!0,autoFocus:L.default.isEnabled()})})),e.addEventListener("change",(function(){})),e.addEventListener("viewdestroy",(function(){o&&(o.destroy(),o=null)}))}},83665:function(e){e.exports='<form style="margin:0 auto"> <div class="verticalSection verticalSection-extrabottompadding"> <h2 class="sectionTitle">${Home}</h2> <div class="selectContainer hide selectTVHomeScreenContainer"> <select is="emby-select" class="selectTVHomeScreen" label="${LabelTVHomeScreen}"> <option value="horizontal">${Horizontal}</option> <option value="vertical">${Vertical}</option> </select> <div class="fieldDescription">${LabelPleaseRestart}</div> </div> <div class="verticalSection verticalSection-extrabottompadding"> <label class="checkboxContainer"> <input class="chkHidePlayedFromLatest" type="checkbox" is="emby-checkbox"/> <span>${HideWatchedContentFromLatestMedia}</span> </label> </div> <div class="selectContainer"> <select is="emby-select" id="selectHomeSection1" label="{section1label}"> <option value="smalllibrarytiles">${HeaderMyMedia}</option> <option value="librarybuttons">${HeaderMyMediaSmall}</option> <option value="activerecordings">${HeaderActiveRecordings}</option> <option value="resume">${HeaderContinueWatching}</option> <option value="resumeaudio">${HeaderContinueListening}</option> <option value="latestmedia">${HeaderLatestMedia}</option> <option value="nextup">${NextUp}</option> <option value="livetv">${LiveTV}</option> <option value="none">${None}</option> </select> </div> <div class="selectContainer"> <select is="emby-select" id="selectHomeSection2" label="{section2label}"> <option value="smalllibrarytiles">${HeaderMyMedia}</option> <option value="librarybuttons">${HeaderMyMediaSmall}</option> <option value="activerecordings">${HeaderActiveRecordings}</option> <option value="resume">${HeaderContinueWatching}</option> <option value="resumeaudio">${HeaderContinueListening}</option> <option value="latestmedia">${HeaderLatestMedia}</option> <option value="nextup">${NextUp}</option> <option value="livetv">${LiveTV}</option> <option value="none">${None}</option> </select> </div> <div class="selectContainer"> <select is="emby-select" id="selectHomeSection3" label="{section3label}"> <option value="smalllibrarytiles">${HeaderMyMedia}</option> <option value="librarybuttons">${HeaderMyMediaSmall}</option> <option value="activerecordings">${HeaderActiveRecordings}</option> <option value="resume">${HeaderContinueWatching}</option> <option value="resumeaudio">${HeaderContinueListening}</option> <option value="latestmedia">${HeaderLatestMedia}</option> <option value="nextup">${NextUp}</option> <option value="livetv">${LiveTV}</option> <option value="none">${None}</option> </select> </div> <div class="selectContainer"> <select is="emby-select" id="selectHomeSection4" label="{section4label}"> <option value="smalllibrarytiles">${HeaderMyMedia}</option> <option value="librarybuttons">${HeaderMyMediaSmall}</option> <option value="activerecordings">${HeaderActiveRecordings}</option> <option value="resume">${HeaderContinueWatching}</option> <option value="resumeaudio">${HeaderContinueListening}</option> <option value="latestmedia">${HeaderLatestMedia}</option> <option value="nextup">${NextUp}</option> <option value="livetv">${LiveTV}</option> <option value="none">${None}</option> </select> </div> <div class="selectContainer"> <select is="emby-select" id="selectHomeSection5" label="{section5label}"> <option value="smalllibrarytiles">${HeaderMyMedia}</option> <option value="librarybuttons">${HeaderMyMediaSmall}</option> <option value="activerecordings">${HeaderActiveRecordings}</option> <option value="resume">${HeaderContinueWatching}</option> <option value="resumeaudio">${HeaderContinueListening}</option> <option value="latestmedia">${HeaderLatestMedia}</option> <option value="nextup">${NextUp}</option> <option value="livetv">${LiveTV}</option> <option value="none">${None}</option> </select> </div> <div class="selectContainer"> <select is="emby-select" id="selectHomeSection6" label="{section6label}"> <option value="smalllibrarytiles">${HeaderMyMedia}</option> <option value="librarybuttons">${HeaderMyMediaSmall}</option> <option value="activerecordings">${HeaderActiveRecordings}</option> <option value="resume">${HeaderContinueWatching}</option> <option value="resumeaudio">${HeaderContinueListening}</option> <option value="latestmedia">${HeaderLatestMedia}</option> <option value="nextup">${NextUp}</option> <option value="livetv">${LiveTV}</option> <option value="none">${None}</option> </select> </div> <div class="selectContainer"> <select is="emby-select" id="selectHomeSection7" label="{section7label}"> <option value="smalllibrarytiles">${HeaderMyMedia}</option> <option value="librarybuttons">${HeaderMyMediaSmall}</option> <option value="activerecordings">${HeaderActiveRecordings}</option> <option value="resume">${HeaderContinueWatching}</option> <option value="resumeaudio">${HeaderContinueListening}</option> <option value="latestmedia">${HeaderLatestMedia}</option> <option value="nextup">${NextUp}</option> <option value="livetv">${LiveTV}</option> <option value="none">${None}</option> </select> </div> </div> <div class="verticalSection verticalSection-extrabottompadding"> <h2 class="sectionTitle">${HeaderLibraryOrder}</h2> <div class="paperList viewOrderList"></div> </div> <div class="perLibrarySettings"></div> <div class="verticalSection verticalSection-extrabottompadding"> <h2 class="sectionTitle">${HeaderLibraryFolders}</h2> <div> <p>${LabelSelectFolderGroups}</p> <div class="folderGroupList"></div> <div class="fieldDescription checkboxFieldDescription">${LabelSelectFolderGroupsHelp}</div> </div> </div> <button is="emby-button" type="submit" class="raised button-submit block btnSave hide"> <span>${Save}</span> </button> </form> '}}]);