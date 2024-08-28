"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[26855],{26855:function(e,t,i){i.r(t),i.d(t,{default:function(){return j}}),i(44962),i(29305),i(32733),i(84701),i(24776),i(14382),i(69892),i(84734),i(86584),i(89336),i(26448),i(74576),i(77575),i(78557),i(96054),i(90076),i(95021),i(73687),i(83994),i(64062),i(46968),i(23630),i(82367);var a,n,r,l=i(22696),o=i.n(l),s=i(47629),d=i(46782),u=i(79754),c=i(98320),p=i(56869),y=i(9164),v=i(5898),b=(i(77157),i(98959),i(63001),i(31293),i(10353),i(15453),i(86191)),m=i(50764),f=i(70267),h='<div class="formDialogHeader"> <button is="paper-icon-button-light" class="btnCancel btnBack autoSize hide" tabindex="-1" title="${ButtonBack}"><span class="material-icons arrow_back" aria-hidden="true"></span></button> <h3 class="formDialogHeaderTitle"> ${Edit} </h3> <div class="dialogHeader flex align-items-center justify-content-center"> <button is="emby-button" type="button" class="btnHeaderSave button-accent-flat button-flat hide" tabindex="-1"> <span class="material-icons check" aria-hidden="true"></span> <span>${Save}</span> </button> <button is="paper-icon-button-light" class="btnMore autoSize" tabindex="-1" title="${ButtonMore}"> <span class="material-icons more_vert" aria-hidden="true"></span> </button> <button is="paper-icon-button-light" class="btnCancel btnClose autoSize" tabindex="-1" title="${ButtonClose}"> <span class="material-icons close" aria-hidden="true"></span> </button> </div> </div> <div class="formDialogContent smoothScrollY" style="padding-top:2em"> <form class="editItemMetadataForm editMetadataForm dialogContentInner dialog-content-centered"> <div class="metadataFormFields"> <div style="padding:0 0 10px"> <div id="fldContentType" class="selectContainer hide"> <select is="emby-select" id="selectContentType" label="${LabelContentType}"></select> </div> <div id="fldPath" class="inputContainer"> <div class="align-items-center flex"> <div class="flex-grow"> <input is="emby-input" id="txtPath" type="text" label="${LabelPath}" class="flex-grow" readonly="readonly" dir="ltr"/> </div> </div> </div> <div class="inputContainer"> <input is="emby-input" id="txtName" type="text" label="${LabelTitle}" required="required"/> </div> <div id="fldOriginalName" class="inputContainer"> <input is="emby-input" id="txtOriginalName" type="text" label="${LabelOriginalTitle}"/> </div> <div class="inputContainer"> <input is="emby-input" id="txtSortName" type="text" label="${LabelSortTitle}"/> </div> <div id="fldDateAdded" class="hide inputContainer"> <input is="emby-input" id="txtDateAdded" type="date" label="${LabelDateAdded}"/> <div class="fieldDescription">${ConfigureDateAdded}</div> </div> <div id="fldStatus" class="hide selectContainer"> <select is="emby-select" id="selectStatus" label="${LabelStatus}"></select> </div> <div id="fldArtist" class="hide inputContainer"> <input is="emby-input" id="txtArtist" type="text" label="${LabelArtists}"/> <div class="fieldDescription">${LabelArtistsHelp}</div> </div> <div id="fldAlbumArtist" class="hide inputContainer"> <input is="emby-input" id="txtAlbumArtist" type="text" label="${LabelAlbumArtists}"/> <div class="fieldDescription">${LabelArtistsHelp}</div> </div> <div id="fldAlbum" class="hide inputContainer"> <input is="emby-input" id="txtAlbum" type="text" label="${LabelAlbum}"/> </div> <div class="inlineForm"> <div id="fldParentIndexNumber" class="hide inputContainer"> <input is="emby-input" id="txtParentIndexNumber" type="number"/> </div> <div id="fldIndexNumber" class="hide inputContainer"> <input is="emby-input" id="txtIndexNumber" type="number" pattern="[0-9]*"/> </div> </div> <div id="fldCommunityRating" class="hide inputContainer"> <input is="emby-input" id="txtCommunityRating" type="number" step="any" min="0" max="10" label="${LabelCommunityRating}"/> </div> <div id="fldCriticRating" class="hide inputContainer"> <input is="emby-input" id="txtCriticRating" type="number" step=".1" label="${LabelCriticRating}"/> </div> <div id="fldTagline" class="hide inputContainer"> <input is="emby-input" id="txtTagline" type="text" label="${LabelTagline}"/> </div> <div class="inputContainer overviewContainer hide"> <textarea is="emby-textarea" id="txtOverview" label="${LabelOverview}"></textarea> </div> <div id="fldPremiereDate" class="inputContainer"> <input is="emby-input" id="txtPremiereDate" label="${LabelReleaseDate}" type="date"/> </div> <div id="fldYear" class="hide inputContainer"> <input is="emby-input" id="txtProductionYear" type="number" label="${LabelYear}"/> </div> <div id="fldPlaceOfBirth" class="hide inputContainer"> <input is="emby-input" id="txtPlaceOfBirth" type="text" label="${LabelPlaceOfBirth}"/> </div> <div id="fldEndDate" class="inputContainer"> <input is="emby-input" id="txtEndDate" label="${LabelEndDate}" type="date"/> </div> <div id="fldAirDays" class="hide"> <p>${LabelAirDays}</p> <div class="checkboxList"> <label> <input type="checkbox" is="emby-checkbox" class="chkAirDay" data-day="Sunday"/> <span>${Sunday}</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkAirDay" data-day="Monday"/> <span>${Monday}</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkAirDay" data-day="Tuesday"/> <span>${Tuesday}</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkAirDay" data-day="Wednesday"/> <span>${Wednesday}</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkAirDay" data-day="Thursday"/> <span>${Thursday}</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkAirDay" data-day="Friday"/> <span>${Friday}</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkAirDay" data-day="Saturday"/> <span>${Saturday}</span> </label> </div> <br/> </div> <div id="fldAirTime" class="inputContainer hide"> <input is="emby-input" id="txtAirTime" type="text" label="${LabelAirTime}"/> </div> <div id="fldSeriesRuntime" class="inputContainer hide"> <input is="emby-input" id="txtSeriesRuntime" type="number" label="${LabelRuntimeMinutes}"/> </div> <div class="inlineForm"> <div id="fldOfficialRating" class="selectContainer hide"> <select is="emby-select" id="selectOfficialRating" label="${LabelParentalRating}"></select> </div> <div id="fldCustomRating" class="selectContainer hide"> <select is="emby-select" id="selectCustomRating" label="${LabelCustomRating}"></select> </div> </div> <div id="fldHeight" class="selectContainer hide"> <select is="emby-select" id="selectHeight" label="${MediaInfoResolution}"> <option value="0"></option> <option value="480">${ChannelResolutionSD}</option> <option value="576">${ChannelResolutionSDPAL}</option> <option value="720">${ChannelResolutionHD}</option> <option value="1080">${ChannelResolutionFullHD}</option> <option value="2160">${ChannelResolutionUHD4K}</option> </select> </div> <div class="inlineForm"> <div id="fldOriginalAspectRatio" class="inputContainer hide"> <input is="emby-input" id="txtOriginalAspectRatio" type="text" label="${LabelOriginalAspectRatio}"/> </div> <div id="fld3dFormat" class="selectContainer hide"> <select is="emby-select" id="select3dFormat" label="${Label3DFormat}"> <option value=""></option> <option value="HalfSideBySide">HSBS</option> <option value="HalfTopAndBottom">HTAB</option> <option value="FullSideBySide">FSBS</option> <option value="FullTopAndBottom">FTAB</option> <option value="MVC">MVC</option> </select> </div> </div> <div id="fldDisplayOrder" class="fldDisplaySetting selectContainer hide"> <select is="emby-select" id="selectDisplayOrder" label="${LabelDisplayOrder}"></select> <div class="fieldDescription seriesDisplayOrderDescription">${SeriesDisplayOrderHelp}</div> </div> </div> <div class="detailSection hide" id="collapsibleSpecialEpisodeInfo"> <h2> ${HeaderSpecialEpisodeInfo} </h2> <div class="inlineForm"> <div class="inputContainer"> <input is="emby-input" id="txtAirsBeforeSeason" type="number" pattern="[0-9]*" label="${LabelAirsBeforeSeason}"/> </div> <div class="inputContainer"> <input is="emby-input" id="txtAirsAfterSeason" type="number" pattern="[0-9]*" label="${LabelAirsAfterSeason}"/> </div> <div class="inputContainer"> <input is="emby-input" id="txtAirsBeforeEpisode" type="number" pattern="[0-9]*" label="${LabelAirsBeforeEpisode}"/> </div> </div> </div> <div class="detailSection externalIdsSection hide"> <h2> ${HeaderExternalIds} </h2> <div class="externalIds editorFieldset"> </div> </div> <div id="genresCollapsible" class="editableListviewContainer hide" style="margin-top:3em"> <h2 style="margin:.6em 0;vertical-align:middle;display:inline-block"> ${Genres} </h2> <button is="emby-button" type="button" class="fab btnAddTextItem submit marginStart" title="${Add}"> <span class="material-icons add" aria-hidden="true"></span> </button> <div class="paperList" id="listGenres"></div> </div> <div id="peopleCollapsible" style="margin-top:3em" class="hide"> <h2 style="margin:.6em 0;vertical-align:middle;display:inline-block"> ${People} </h2> <button is="emby-button" type="button" id="btnAddPerson" class="fab btnAddPerson marginStart" title="${Add}"> <span class="material-icons add" aria-hidden="true"></span> </button> <div id="peopleList" class="paperList"> </div> </div> <div id="studiosCollapsible" class="editableListviewContainer hide" style="margin-top:3em"> <h2 style="margin:.6em 0;vertical-align:middle;display:inline-block"> ${Studios} </h2> <button is="emby-button" type="button" class="fab btnAddTextItem submit marginStart" title="${Add}"> <span class="material-icons add" aria-hidden="true"></span> </button> <div class="paperList" id="listStudios"></div> </div> <div id="tagsCollapsible" class="editableListviewContainer hide" style="margin-top:3em"> <h2 style="margin:.6em 0;vertical-align:middle;display:inline-block"> ${Tags} </h2> <button is="emby-button" type="button" class="fab btnAddTextItem submit marginStart" title="${Add}"> <span class="material-icons add" aria-hidden="true"></span> </button> <div class="paperList" id="listTags"></div> </div> <div id="metadataSettingsCollapsible" style="margin-top:3em" class="hide"> <h2>${HeaderMetadataSettings}</h2> <div> <div class="selectContainer"> <select is="emby-select" id="selectLanguage" label="${LabelMetadataDownloadLanguage}"></select> <div class="fieldDescription editorfieldDescription">${MessageLeaveEmptyToInherit}</div> </div> <div class="selectContainer"> <select is="emby-select" id="selectCountry" label="${LabelCountry}"></select> </div> <div class="fieldDescription editorfieldDescription">${MessageLeaveEmptyToInherit}</div> <br/><br/> <label class="checkboxContainer"> <input type="checkbox" is="emby-checkbox" id="chkLockData"/> <span>${LabelLockItemToPreventChanges}</span> </label> <div class="providerSettingsContainer checkboxList hide"> </div> </div> </div> <br/> <div class="formDialogFooter"> <button is="emby-button" type="button" class="raised button-cancel block btnCancel formDialogFooterItem"> <span>${ButtonCancel}</span> </button> <button is="emby-button" type="button" class="raised button-reset block btnReset formDialogFooterItem"> <span>${Reset}</span> </button> <button is="emby-button" type="submit" class="raised button-submit block btnSave formDialogFooterItem"> <span>${SaveChanges}</span> </button> </div> </div> </form> </div> ',S=i(98471);function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=Array(t);i<t;i++)a[i]=e[i];return a}function A(){a.classList.contains("dialog")&&u.default.close(a)}function x(e){var t=e.querySelectorAll(".chkAirDay:checked")||[];return Array.prototype.map.call(t,(function(e){return e.getAttribute("data-day")}))}function C(e){return e.querySelector("#txtAlbumArtist").value.trim().split(";").filter((function(e){return e.length>0})).map((function(e){return{Name:e}}))}function L(e){return e.querySelector("#txtArtist").value.trim().split(";").filter((function(e){return e.length>0})).map((function(e){return{Name:e}}))}function T(e,t,i){var a=e.querySelector(t).value;if(!a)return null;if(r[i]){var n=c.Ay.parseISO8601Date(r[i],!0).toISOString().split("T");n[0].startsWith(a)&&(a+="T"+n[1])}return a}function D(e){p.Ay.show();var t=this,i={Id:r.Id,Name:t.querySelector("#txtName").value,OriginalTitle:t.querySelector("#txtOriginalName").value,ForcedSortName:t.querySelector("#txtSortName").value,CommunityRating:t.querySelector("#txtCommunityRating").value,CriticRating:t.querySelector("#txtCriticRating").value,IndexNumber:t.querySelector("#txtIndexNumber").value||null,AirsBeforeSeasonNumber:t.querySelector("#txtAirsBeforeSeason").value,AirsAfterSeasonNumber:t.querySelector("#txtAirsAfterSeason").value,AirsBeforeEpisodeNumber:t.querySelector("#txtAirsBeforeEpisode").value,ParentIndexNumber:t.querySelector("#txtParentIndexNumber").value||null,DisplayOrder:t.querySelector("#selectDisplayOrder").value,Album:t.querySelector("#txtAlbum").value,AlbumArtists:C(t),ArtistItems:L(t),Overview:t.querySelector("#txtOverview").value,Status:t.querySelector("#selectStatus").value,AirDays:x(t),AirTime:t.querySelector("#txtAirTime").value,Genres:q(t.querySelector("#listGenres")),Tags:q(t.querySelector("#listTags")),Studios:q(t.querySelector("#listStudios")).map((function(e){return{Name:e}})),PremiereDate:T(t,"#txtPremiereDate","PremiereDate"),DateCreated:T(t,"#txtDateAdded","DateCreated"),EndDate:T(t,"#txtEndDate","EndDate"),ProductionYear:t.querySelector("#txtProductionYear").value,Height:t.querySelector("#selectHeight").value,AspectRatio:t.querySelector("#txtOriginalAspectRatio").value,Video3DFormat:t.querySelector("#select3dFormat").value,OfficialRating:t.querySelector("#selectOfficialRating").value,CustomRating:t.querySelector("#selectCustomRating").value,People:r.People,LockData:t.querySelector("#chkLockData").checked,LockedFields:Array.prototype.filter.call(t.querySelectorAll(".selectLockedField"),(function(e){return!e.checked})).map((function(e){return e.getAttribute("data-value")}))};i.ProviderIds=Object.assign({},r.ProviderIds);var a=t.querySelectorAll(".txtExternalId");if(Array.prototype.map.call(a,(function(e){var t=e.getAttribute("data-providerkey");i.ProviderIds[t]=e.value})),i.PreferredMetadataLanguage=t.querySelector("#selectLanguage").value,i.PreferredMetadataCountryCode=t.querySelector("#selectCountry").value,"Person"===r.Type){var l=t.querySelector("#txtPlaceOfBirth").value;i.ProductionLocations=l?[l]:[]}if("Series"===r.Type){var o=t.querySelector("#txtSeriesRuntime").value;i.RunTimeTicks=o?6e8*o:null}var s=t.querySelector("#txtTagline").value;return i.Taglines=s?[s]:[],function(e,t){function i(){(0,m.A)(v.Ay.translate("MessageItemSaved")),p.Ay.hide(),A()}var a=k();a.updateItem(t).then((function(){var r=e.querySelector("#selectContentType").value||"";(n.ContentType||"")!==r?a.ajax({url:a.getUrl("Items/"+t.Id+"/ContentType",{ContentType:r}),type:"POST"}).then((function(){i()})):i()}))}(t,i),e.preventDefault(),e.stopPropagation(),!1}function q(e){return Array.prototype.map.call(e.querySelectorAll(".textValue"),(function(e){return e.textContent}))}function P(e,t,a){i.e(47649).then(i.bind(i,47649)).then((function(i){i.default.show(t).then((function(t){-1===a&&r.People.push(t),B(e,r.People)}))}))}function I(e){var t,a,n=s.Ay.parentWithClass(e.target,"btnRemoveFromEditorList");if(n)return t=n,void(a=s.Ay.parentWithClass(t,"listItem")).parentNode.removeChild(a);var r=s.Ay.parentWithClass(e.target,"btnAddTextItem");r&&function(e,t){i.e(72521).then(i.bind(i,72521)).then((function(t){(0,t.default)({label:"Value:"}).then((function(t){var i=s.Ay.parentWithClass(e,"editableListviewContainer").querySelector(".paperList"),a=q(i);a.push(t),F(i,a,undefined)}))}))}(r)}function k(){return b.A.getApiClient(r.ServerId)}function N(){var e,t=null===(e=a)||void 0===e?void 0:e.querySelector("form");["#txtName","#txtOriginalName","#txtSortName","#txtCommunityRating","#txtCriticRating","#txtIndexNumber","#txtAirsBeforeSeason","#txtAirsAfterSeason","#txtAirsBeforeEpisode","#txtParentIndexNumber","#txtAlbum","#txtAlbumArtist","#txtArtist","#txtOverview","#selectStatus","#txtAirTime","#txtPremiereDate","#txtDateAdded","#txtEndDate","#txtProductionYear","#selectHeight","#txtOriginalAspectRatio","#select3dFormat","#selectOfficialRating","#selectCustomRating","#txtSeriesRuntime","#txtTagline"].forEach((function(e){t.querySelector(e).value=null})),t.querySelector("#selectDisplayOrder").value="",t.querySelector("#selectLanguage").value="",t.querySelector("#selectCountry").value="",t.querySelector("#listGenres").innerHTML="",t.querySelector("#listTags").innerHTML="",t.querySelector("#listStudios").innerHTML="",t.querySelector("#peopleList").innerHTML="",r.People=[],(t.querySelectorAll(".chkAirDay:checked")||[]).forEach((function(e){e.checked=!1})),t.querySelectorAll(".txtExternalId").forEach((function(e){e.value=null})),t.querySelector("#chkLockData").checked=!1,$(".providerSettingsContainer"),t.querySelectorAll(".selectLockedField").forEach((function(e){e.checked=!0}))}function O(e){d.A.desktop||(e.querySelector(".btnBack").classList.remove("hide"),e.querySelector(".btnClose").classList.add("hide")),function(e,t,i){for(var a=0,n=e.length;a<n;a++)e[a].addEventListener("click",i)}(e.querySelectorAll(".btnCancel"),0,(function(e){e.preventDefault(),A()})),e.querySelector(".btnMore").addEventListener("click",(function(t){k().getCurrentUser().then((function(a){!function(e,t,a){i.e(55802).then(i.bind(i,55802)).then((function(i){var n=i.default,l=r;n.show({item:l,positionTo:t,edit:!1,editImages:!0,editSubtitles:!0,share:!1,play:!1,queue:!1,user:a}).then((function(t){t.deleted?function(e,t){var i=t.ParentId||t.SeasonId||t.SeriesId;i?V(e,i,t.ServerId):f.appRouter.goHome()}(e,l):t.updated&&V(e,l.Id,l.ServerId)})).catch((function(){}))}))}(e,t.target,a)}))})),e.querySelector(".btnHeaderSave").addEventListener("click",(function(){e.querySelector(".btnSave").click()})),e.querySelector("#chkLockData").addEventListener("click",(function(e){e.target.checked?w(".providerSettingsContainer"):$(".providerSettingsContainer")})),e.removeEventListener("click",I),e.addEventListener("click",I);var t=e.querySelector("form");t.removeEventListener("submit",D),t.addEventListener("submit",D),e.querySelector(".btnReset").addEventListener("click",N),e.querySelector("#btnAddPerson").addEventListener("click",(function(){P(e,{},-1)})),e.querySelector("#peopleList").addEventListener("click",(function(t){var i,a=s.Ay.parentWithClass(t.target,"btnDeletePerson");a&&(i=parseInt(a.getAttribute("data-index"),10),r.People.splice(i,1),B(e,r.People));var n=s.Ay.parentWithClass(t.target,"btnEditPerson");n&&(i=parseInt(n.getAttribute("data-index"),10),P(e,r.People[i],i))}))}function E(e,t){var i=b.A.getApiClient(t);return e?i.getItem(i.getCurrentUserId(),e):i.getRootFolder(i.getCurrentUserId())}function R(e,t){var i=b.A.getApiClient(t);return e?i.getJSON(i.getUrl("Items/"+e+"/MetadataEditor")):Promise.resolve({})}function w(e,t,i){if(t=t||document,"string"==typeof e){var a=i?t.querySelectorAll(e):[t.querySelector(e)];Array.prototype.forEach.call(a,(function(e){e&&e.classList.add("hide")}))}else e.classList.add("hide")}function $(e,t,i){if(t=t||document,"string"==typeof e){var a=i?t.querySelectorAll(e):[t.querySelector(e)];Array.prototype.forEach.call(a,(function(e){e&&e.classList.remove("hide")}))}else e.classList.remove("hide")}function H(e,t,i){var a,n,r=e.querySelector("#selectOfficialRating");M(i,r,t.OfficialRating),r.value=t.OfficialRating||"",M(i,r=e.querySelector("#selectCustomRating"),t.CustomRating),r.value=t.CustomRating||"";var l=e.querySelector("#selectStatus");!function(e){var t="";t+='<option value=""></option>',t+='<option value="'.concat(S.mxw.Continuing,'">').concat(o()(v.Ay.translate("Continuing")),"</option>"),t+='<option value="'.concat(S.mxw.Ended,'">').concat(o()(v.Ay.translate("Ended")),"</option>"),t+='<option value="'.concat(S.mxw.Unreleased,'">').concat(o()(v.Ay.translate("Unreleased")),"</option>"),e.innerHTML=t}(l),l.value=t.Status||"",e.querySelector("#select3dFormat",e).value=t.Video3DFormat||"",Array.prototype.forEach.call(e.querySelectorAll(".chkAirDay",e),(function(e){e.checked=-1!==(t.AirDays||[]).indexOf(e.getAttribute("data-day"))})),F(e.querySelector("#listGenres"),t.Genres),B(e,t.People||[]),F(e.querySelector("#listStudios"),(t.Studios||[]).map((function(e){return e.Name||""}))),F(e.querySelector("#listTags"),t.Tags);var s,d=t.LockData||!1,u=e.querySelector("#chkLockData");if(u.checked=d,u.checked?w(".providerSettingsContainer",e):$(".providerSettingsContainer",e),function(e,t,i){var a=e.querySelector(".providerSettingsContainer");i=i||[];var n=[{name:v.Ay.translate("Name"),value:"Name"},{name:v.Ay.translate("Overview"),value:"Overview"},{name:v.Ay.translate("Genres"),value:"Genres"},{name:v.Ay.translate("ParentalRating"),value:"OfficialRating"},{name:v.Ay.translate("People"),value:"Cast"}];"Person"===t.Type?n.push({name:v.Ay.translate("BirthLocation"),value:"ProductionLocations"}):n.push({name:v.Ay.translate("ProductionLocations"),value:"ProductionLocations"}),"Series"===t.Type&&n.push({name:v.Ay.translate("Runtime"),value:"Runtime"}),n.push({name:v.Ay.translate("Studios"),value:"Studios"}),n.push({name:v.Ay.translate("Tags"),value:"Tags"});var r="";r+="<h2>"+v.Ay.translate("HeaderEnabledFields")+"</h2>",r+="<p>"+v.Ay.translate("HeaderEnabledFieldsHelp")+"</p>",r+=function(e,t){var i,a="",n=function(e,t){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!i){if(Array.isArray(e)||(i=function(e,t){if(e){if("string"==typeof e)return g(e,t);var i={}.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?g(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){i&&(e=i);var a=0,n=function(){};return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,o=!1;return{s:function(){i=i.call(e)},n:function(){var e=i.next();return l=e.done,e},e:function(e){o=!0,r=e},f:function(){try{l||null==i.return||i.return()}finally{if(o)throw r}}}}(e);try{for(n.s();!(i=n.n()).done;){var r=i.value,l=r.name,o=r.value||r.name,s=-1===t.indexOf(o)?" checked":"";a+="<label>",a+='<input type="checkbox" is="emby-checkbox" class="selectLockedField" data-value="'+o+'"'+s+"/>",a+="<span>"+l+"</span>",a+="</label>"}}catch(e){n.e(e)}finally{n.f()}return a}(n,i),a.innerHTML=r}(e,t,t.LockedFields),e.querySelector("#txtPath").value=t.Path||"",e.querySelector("#txtName").value=t.Name||"",e.querySelector("#txtOriginalName").value=t.OriginalTitle||"",e.querySelector("#txtOverview").value=t.Overview||"",e.querySelector("#txtTagline").value=null!==(a=t.Taglines)&&void 0!==a&&a.length?t.Taglines[0]:"",e.querySelector("#txtSortName").value=t.ForcedSortName||"",e.querySelector("#txtCommunityRating").value=t.CommunityRating||"",e.querySelector("#txtCriticRating").value=t.CriticRating||"",e.querySelector("#txtIndexNumber").value=null==t.IndexNumber?"":t.IndexNumber,e.querySelector("#txtParentIndexNumber").value=null==t.ParentIndexNumber?"":t.ParentIndexNumber,e.querySelector("#txtAirsBeforeSeason").value="AirsBeforeSeasonNumber"in t?t.AirsBeforeSeasonNumber:"",e.querySelector("#txtAirsAfterSeason").value="AirsAfterSeasonNumber"in t?t.AirsAfterSeasonNumber:"",e.querySelector("#txtAirsBeforeEpisode").value="AirsBeforeEpisodeNumber"in t?t.AirsBeforeEpisodeNumber:"",e.querySelector("#txtAlbum").value=t.Album||"",e.querySelector("#txtAlbumArtist").value=(t.AlbumArtists||[]).map((function(e){return e.Name})).join(";"),e.querySelector("#selectDisplayOrder").value=t.DisplayOrder||"",e.querySelector("#txtArtist").value=(t.ArtistItems||[]).map((function(e){return e.Name})).join(";"),t.DateCreated)try{s=c.Ay.parseISO8601Date(t.DateCreated,!0),e.querySelector("#txtDateAdded").value=s.toISOString().slice(0,10)}catch(t){e.querySelector("#txtDateAdded").value=""}else e.querySelector("#txtDateAdded").value="";if(t.PremiereDate)try{s=c.Ay.parseISO8601Date(t.PremiereDate,!0),e.querySelector("#txtPremiereDate").value=s.toISOString().slice(0,10)}catch(t){e.querySelector("#txtPremiereDate").value=""}else e.querySelector("#txtPremiereDate").value="";if(t.EndDate)try{s=c.Ay.parseISO8601Date(t.EndDate,!0),e.querySelector("#txtEndDate").value=s.toISOString().slice(0,10)}catch(t){e.querySelector("#txtEndDate").value=""}else e.querySelector("#txtEndDate").value="";e.querySelector("#txtProductionYear").value=t.ProductionYear||"",e.querySelector("#txtAirTime").value=t.AirTime||"";var p=null!==(n=t.ProductionLocations)&&void 0!==n&&n.length?t.ProductionLocations[0]:"";if(e.querySelector("#txtPlaceOfBirth").value=p,e.querySelector("#selectHeight").value=t.Height||"",e.querySelector("#txtOriginalAspectRatio").value=t.AspectRatio||"",e.querySelector("#selectLanguage").value=t.PreferredMetadataLanguage||"",e.querySelector("#selectCountry").value=t.PreferredMetadataCountryCode||"",t.RunTimeTicks){var y=t.RunTimeTicks/6e8;e.querySelector("#txtSeriesRuntime").value=Math.round(y)}else e.querySelector("#txtSeriesRuntime",e).value=""}function M(e,t,i){var a="";a+="<option value=''></option>";for(var n,r=[],l=!1,s=0,d=e.length;s<d;s++)n=e[s],r.push({Name:n.Name,Value:n.Name}),n.Name===i&&(l=!0);i&&!l&&r.push({Name:i,Value:i});for(var u=0,c=r.length;u<c;u++)n=r[u],a+="<option value='"+o()(n.Value)+"'>"+o()(n.Name)+"</option>";t.innerHTML=a}function F(e,t,i){t=t||[],void 0===i?t.sort((function(e,t){return e.toLowerCase().localeCompare(t.toLowerCase())})):t=i(t);for(var a="",n=0;n<t.length;n++)a+='<div class="listItem">',a+='<span class="material-icons listItemIcon live_tv" aria-hidden="true" style="background-color:#333;"></span>',a+='<div class="listItemBody">',a+='<div class="textValue">',a+=o()(t[n]),a+="</div>",a+="</div>",a+='<button type="button" is="paper-icon-button-light" data-index="'+n+'" class="btnRemoveFromEditorList autoSize"><span class="material-icons delete" aria-hidden="true"></span></button>',a+="</div>";e.innerHTML=a}function B(e,t){for(var i="",a=e.querySelector("#peopleList"),n=0,r=t.length;n<r;n++){var l=t[n];i+='<div class="listItem">',i+='<span class="material-icons listItemIcon person" style="background-color:#333;"></span>',i+='<div class="listItemBody">',i+='<button style="text-align:left;" type="button" class="btnEditPerson clearButton" data-index="'+n+'">',i+='<div class="textValue">',i+=o()(l.Name||""),i+="</div>",l.Role&&""!==l.Role?i+='<div class="secondary">'+l.Role+"</div>":i+='<div class="secondary">'+v.Ay.translate(l.Type)+"</div>",i+="</button>",i+="</div>",i+='<button type="button" is="paper-icon-button-light" data-index="'+n+'" class="btnDeletePerson autoSize"><span class="material-icons delete" aria-hidden="true"></span></button>',i+="</div>"}a.innerHTML=i}function V(e,t,i){p.Ay.show(),Promise.all([E(t,i),R(t,i)]).then((function(t){var i=t[0];n=t[1],r=i;var a=n.Cultures,l=n.Countries;!function(e,t){t.ContentTypeOptions.length?$("#fldContentType",e):w("#fldContentType",e);var i=t.ContentTypeOptions.map((function(e){return'<option value="'+e.Value+'">'+e.Name+"</option>"})).join(""),a=e.querySelector("#selectContentType");a.innerHTML=i,a.value=t.ContentType||""}(e,n),function(e,t,i){for(var a="",n=t.ProviderIds||{},r=0,l=i.length;r<l;r++){var s=i[r],d="txt1"+s.Key,u=s.Name;s.Type&&(u=s.Name+" "+v.Ay.translate(s.Type));var c=v.Ay.translate("LabelDynamicExternalId",o()(u));a+='<div class="inputContainer">',a+='<div class="flex align-items-center">',a+='<div class="flex-grow">',a+='<input is="emby-input" class="txtExternalId" value="'+o()(n[s.Key]||"")+'" data-providerkey="'+s.Key+'" id="'+d+'" label="'+c+'"/>',a+="</div>",a+="</div>",a+="</div>"}e.querySelector(".externalIds",e).innerHTML=a,i.length?e.querySelector(".externalIdsSection").classList.remove("hide"):e.querySelector(".externalIdsSection").classList.add("hide")}(e,i,n.ExternalIdInfos),function(e,t){var i="";i+="<option value=''></option>";for(var a=0,n=t.length;a<n;a++){var r=t[a];i+="<option value='"+r.TwoLetterISOLanguageName+"'>"+r.DisplayName+"</option>"}e.innerHTML=i}(e.querySelector("#selectLanguage"),a),function(e,t){var i="";i+="<option value=''></option>";for(var a=0,n=t.length;a<n;a++){var r=t[a];i+="<option value='"+r.TwoLetterISORegionName+"'>"+r.DisplayName+"</option>"}e.innerHTML=i}(e.querySelector("#selectCountry"),l),function(e,t){if(t.Path&&!1!==t.EnableMediaSourceDisplay?$("#fldPath",e):w("#fldPath",e),"Series"===t.Type||"Movie"===t.Type||"Trailer"===t.Type||"Person"===t.Type?$("#fldOriginalName",e):w("#fldOriginalName",e),"Series"===t.Type?$("#fldSeriesRuntime",e):w("#fldSeriesRuntime",e),"Series"===t.Type||"Person"===t.Type?$("#fldEndDate",e):w("#fldEndDate",e),"MusicAlbum"===t.Type?$("#albumAssociationMessage",e):w("#albumAssociationMessage",e),"Movie"===t.Type||"Trailer"===t.Type?$("#fldCriticRating",e):w("#fldCriticRating",e),"Series"===t.Type?($("#fldStatus",e),$("#fldAirDays",e),$("#fldAirTime",e)):(w("#fldStatus",e),w("#fldAirDays",e),w("#fldAirTime",e)),"Video"===t.MediaType&&"TvChannel"!==t.Type?$("#fld3dFormat",e):w("#fld3dFormat",e),"Audio"===t.Type?$("#fldAlbumArtist",e):w("#fldAlbumArtist",e),"Audio"===t.Type||"MusicVideo"===t.Type?($("#fldArtist",e),$("#fldAlbum",e)):(w("#fldArtist",e),w("#fldAlbum",e)),"Episode"===t.Type&&0===t.ParentIndexNumber?$("#collapsibleSpecialEpisodeInfo",e):w("#collapsibleSpecialEpisodeInfo",e),"Person"===t.Type||"Genre"===t.Type||"Studio"===t.Type||"MusicGenre"===t.Type||"TvChannel"===t.Type?w("#peopleCollapsible",e):$("#peopleCollapsible",e),"Person"===t.Type||"Genre"===t.Type||"Studio"===t.Type||"MusicGenre"===t.Type||"TvChannel"===t.Type?(w("#fldCommunityRating",e),w("#genresCollapsible",e),w("#studiosCollapsible",e),"TvChannel"===t.Type?$("#fldOfficialRating",e):w("#fldOfficialRating",e),w("#fldCustomRating",e)):($("#fldCommunityRating",e),$("#genresCollapsible",e),$("#studiosCollapsible",e),$("#fldOfficialRating",e),$("#fldCustomRating",e)),$("#tagsCollapsible",e),"TvChannel"===t.Type?(w("#metadataSettingsCollapsible",e),w("#fldPremiereDate",e),w("#fldDateAdded",e),w("#fldYear",e)):($("#metadataSettingsCollapsible",e),$("#fldPremiereDate",e),$("#fldDateAdded",e),$("#fldYear",e)),"TvChannel"===t.Type?w(".overviewContainer",e):$(".overviewContainer",e),"Person"===t.Type?(e.querySelector("#txtName").label(v.Ay.translate("LabelName")),e.querySelector("#txtSortName").label(v.Ay.translate("LabelSortName")),e.querySelector("#txtOriginalName").label(v.Ay.translate("LabelOriginalName")),e.querySelector("#txtProductionYear").label(v.Ay.translate("LabelBirthYear")),e.querySelector("#txtPremiereDate").label(v.Ay.translate("LabelBirthDate")),e.querySelector("#txtEndDate").label(v.Ay.translate("LabelDeathDate")),$("#fldPlaceOfBirth")):(e.querySelector("#txtProductionYear").label(v.Ay.translate("LabelYear")),e.querySelector("#txtPremiereDate").label(v.Ay.translate("LabelReleaseDate")),e.querySelector("#txtEndDate").label(v.Ay.translate("LabelEndDate")),w("#fldPlaceOfBirth")),"Video"===t.MediaType&&"TvChannel"===t.Type?$("#fldHeight"):w("#fldHeight"),"Video"===t.MediaType&&"TvChannel"!==t.Type?$("#fldOriginalAspectRatio"):w("#fldOriginalAspectRatio"),"Audio"===t.Type||"Episode"===t.Type||"Season"===t.Type?($("#fldIndexNumber"),"Episode"===t.Type?e.querySelector("#txtIndexNumber").label(v.Ay.translate("LabelEpisodeNumber")):"Season"===t.Type?e.querySelector("#txtIndexNumber").label(v.Ay.translate("LabelSeasonNumber")):"Audio"===t.Type?e.querySelector("#txtIndexNumber").label(v.Ay.translate("LabelTrackNumber")):e.querySelector("#txtIndexNumber").label(v.Ay.translate("LabelNumber"))):w("#fldIndexNumber"),"Audio"===t.Type||"Episode"===t.Type?($("#fldParentIndexNumber"),"Episode"===t.Type?e.querySelector("#txtParentIndexNumber").label(v.Ay.translate("LabelSeasonNumber")):"Audio"===t.Type?e.querySelector("#txtParentIndexNumber").label(v.Ay.translate("LabelDiscNumber")):e.querySelector("#txtParentIndexNumber").label(v.Ay.translate("LabelParentNumber"))):w("#fldParentIndexNumber",e),"BoxSet"===t.Type)$("#fldDisplayOrder",e),w(".seriesDisplayOrderDescription",e),e.querySelector("#selectDisplayOrder").innerHTML='<option value="SortName">'+v.Ay.translate("SortName")+'</option><option value="PremiereDate">'+v.Ay.translate("ReleaseDate")+"</option>";else if("Series"===t.Type){$("#fldDisplayOrder",e),$(".seriesDisplayOrderDescription",e);var i="";i+='<option value="">'+v.Ay.translate("Aired")+"</option>",i+='<option value="originalAirDate">'+v.Ay.translate("OriginalAirDate")+"</option>",i+='<option value="absolute">'+v.Ay.translate("Absolute")+"</option>",i+='<option value="dvd">DVD</option></option>',i+='<option value="digital">'+v.Ay.translate("Digital")+"</option>",i+='<option value="storyArc">'+v.Ay.translate("StoryArc")+"</option>",i+='<option value="production">'+v.Ay.translate("Production")+"</option>",i+='<option value="tv">TV</option>',i+='<option value="alternate">'+v.Ay.translate("Alternate")+"</option>",i+='<option value="regional">'+v.Ay.translate("Regional")+"</option>",i+='<option value="altdvd">'+v.Ay.translate("AlternateDVD")+"</option>",e.querySelector("#selectDisplayOrder").innerHTML=i}else e.querySelector("#selectDisplayOrder").innerHTML="",w("#fldDisplayOrder",e)}(e,i),H(e,i,n.ParentalRatingOptions),"Video"===i.MediaType&&"Episode"!==i.Type&&"TvChannel"!==i.Type?$("#fldTagline",e):w("#fldTagline",e),p.Ay.hide()}))}function Y(e,t,a){Promise.resolve().then(i.bind(i,46345)).then((function(i){var n=a?"on":"off";i.centerFocus[n](e,t)}))}var j={show:function(e,t){return new Promise((function(i){return function(e,t,i){p.Ay.show();var n={removeOnClose:!0,scrollY:!1};d.A.tv?n.size="fullscreen":n.size="small";var r=u.default.createDialog(n);r.classList.add("formDialog");var l="";l+=v.Ay.translateHtml(h,"core"),r.innerHTML=l,d.A.tv&&Y(r.querySelector(".formDialogContent"),!1,!0),u.default.open(r,{preventCloseOnClick:!0,preventCloseOnRightClick:!0}),r.addEventListener("close",(function(){d.A.tv&&Y(r.querySelector(".formDialogContent"),!1,!1),i()})),a=r,O(r),V(r,e,t)}(e,t,i)}))},embed:function(e,t,i){return new Promise((function(){p.Ay.show(),e.innerHTML=v.Ay.translateHtml(h,"core"),e.querySelector(".formDialogFooter").classList.remove("formDialogFooter"),e.querySelector(".btnClose").classList.add("hide"),e.querySelector(".btnHeaderSave").classList.remove("hide"),e.querySelector(".btnCancel").classList.add("hide"),a=e,O(e),V(e,t,i),y.A.autoFocus(e)}))}}},63001:function(e,t,i){var a=i(46782),n=i(34789),r=i(79617),l=(i(69177),Object.create(HTMLSelectElement.prototype));function o(){return!(!n.A.edgeUwp&&!n.A.xboxOne&&(n.A.tizen||n.A.orsay||n.A.web0s||!n.A.tv&&a.A.tv))}function s(e){var t=d(e),i=t?t.textContent||t.innerText:null;r.default.show({items:e.options,positionTo:e,title:i}).then((function(t){!function(e,t){e.value=t}(e,t),function(e){var t=new Event("change",{bubbles:!1,cancelable:!0});e.dispatchEvent(t)}(e)}))}function d(e){for(var t=e.previousSibling;t&&"LABEL"!==t.tagName;)t=t.previousSibling;return t}function u(){var e=d(this);e&&e.classList.add("selectLabelFocused")}function c(){var e=d(this);e&&e.classList.remove("selectLabelFocused")}function p(e){e.button||o()||(e.preventDefault(),s(this))}function y(e){switch(e.keyCode){case 13:return void(o()||(e.preventDefault(),s(this)));case 37:case 38:case 39:case 40:return void(a.A.tv&&e.preventDefault())}}var v=0;l.createdCallback=function(){this.id||(this.id="embyselect"+v,v++),this.classList.add("emby-select-withcolor"),a.A.tv&&this.classList.add("emby-select-focusscale"),this.addEventListener("mousedown",p),this.addEventListener("keydown",y),this.addEventListener("focus",u),this.addEventListener("blur",c)},l.attachedCallback=function(){var e;if(!this.classList.contains("emby-select")){this.classList.add("emby-select");var t,i=this.ownerDocument.createElement("label");i.innerText=this.getAttribute("label")||"",i.classList.add("selectLabel"),i.htmlFor=this.id,null===(e=this.parentNode)||void 0===e||e.insertBefore(i,this),this.classList.contains("emby-select-withcolor")&&(null===(t=this.parentNode)||void 0===t||t.insertAdjacentHTML("beforeend",'<div class="selectArrowContainer"><div style="visibility:hidden;display:none;">0</div><span class="selectArrow material-icons keyboard_arrow_down" aria-hidden="true"></span></div>'))}},l.setLabel=function(e){var t;(null===(t=this.parentNode)||void 0===t?void 0:t.querySelector("label")).innerText=e},document.registerElement("emby-select",{prototype:l,extends:"select"})},31293:function(e,t,i){function a(e,t){var i,a=this;function n(){if((!a.lineHeight||a.lineHeight<=0)&&(e.rows=1,i=function(e){for(var t=window.getComputedStyle(e,null),i=0,a=0,n=["paddingTop","paddingBottom"];a<n.length;a++)i+=parseInt(t[n[a]],10);return i}(e),a.rows=e.rows||1,a.lineHeight=e.scrollHeight/a.rows-i/a.rows,a.maxAllowedHeight=a.lineHeight*t-i),a.lineHeight<=0)return e.style.overflowY="scroll",e.style.height="auto",void(e.rows=3);var n=0;e.scrollHeight-i>a.maxAllowedHeight?(e.style.overflowY="scroll",n=a.maxAllowedHeight):(e.style.overflowY="hidden",e.style.height="auto",n=e.scrollHeight),e.style.height=n+"px"}void 0===t&&(t=999),e.addEventListener("input",n),e.addEventListener("focus",n),e.addEventListener("valueset",n),n()}i(36947),i(36457),i(96054),i(69177),i(98959);var n=Object.create(HTMLTextAreaElement.prototype),r=0;if(Object.getOwnPropertyDescriptor&&Object.defineProperty){var l=Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype,"value");if(null!=l&&l.configurable){var o=l.set;l.set=function(e){o.call(this,e),this.dispatchEvent(new CustomEvent("valueset",{bubbles:!1,cancelable:!1}))},Object.defineProperty(HTMLTextAreaElement.prototype,"value",l)}}n.createdCallback=function(){this.id||(this.id="embytextarea"+r,r++)},n.attachedCallback=function(){if(!this.classList.contains("emby-textarea")){this.rows=1,this.classList.add("emby-textarea");var e=this.parentNode,t=this.ownerDocument.createElement("label");t.innerText=this.getAttribute("label")||"",t.classList.add("textareaLabel"),t.htmlFor=this.id,e.insertBefore(t,this),this.addEventListener("focus",(function(){t.classList.add("textareaLabelFocused"),t.classList.remove("textareaLabelUnfocused")})),this.addEventListener("blur",(function(){t.classList.remove("textareaLabelFocused"),t.classList.add("textareaLabelUnfocused")})),this.label=function(e){t.innerText=e},new a(this)}},document.registerElement("emby-textarea",{prototype:n,extends:"textarea"})}}]);