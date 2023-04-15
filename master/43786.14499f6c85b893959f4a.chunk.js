"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[43786],{43786:function(e,t,i){i.r(t),i.d(t,{default:function(){return F}}),i(5769),i(61013),i(98010),i(63238),i(20266),i(27471),i(48410),i(61418),i(17460),i(14078),i(52077),i(911),i(32081),i(38217),i(72410),i(69217);var a,n,r,l=i(65009),s=i.n(l),o=i(72365),d=i(30325),u=i(93355),c=i(61693),p=i(28540),v=i(34643),b=i(94994),y=i(92581),m=(i(12291),i(62033),i(15856),i(85511),i(38228),i(61414),i(18613)),f=i(56663),h=i(52050),S='<div class="formDialogHeader"> <button is="paper-icon-button-light" class="btnCancel btnBack autoSize hide" tabindex="-1" title="${ButtonBack}"><span class="material-icons arrow_back" aria-hidden="true"></span></button> <h3 class="formDialogHeaderTitle"> ${Edit} </h3> <div class="dialogHeader flex align-items-center justify-content-center"> <button is="emby-button" type="button" class="btnHeaderSave button-accent-flat button-flat hide" tabindex="-1"> <span class="material-icons check" aria-hidden="true"></span> <span>${Save}</span> </button> <button is="paper-icon-button-light" class="btnMore autoSize" tabindex="-1" title="${ButtonMore}"> <span class="material-icons more_vert" aria-hidden="true"></span> </button> <button is="paper-icon-button-light" class="btnCancel btnClose autoSize" tabindex="-1" title="${ButtonClose}"> <span class="material-icons close" aria-hidden="true"></span> </button> </div> </div> <div class="formDialogContent smoothScrollY" style="padding-top:2em"> <form class="editItemMetadataForm editMetadataForm dialogContentInner dialog-content-centered"> <div class="metadataFormFields"> <div style="padding:0 0 10px"> <div id="fldContentType" class="selectContainer hide"> <select is="emby-select" id="selectContentType" label="${LabelContentType}"></select> </div> <div id="fldPath" class="inputContainer"> <div class="align-items-center flex"> <div class="flex-grow"> <input is="emby-input" id="txtPath" type="text" label="${LabelPath}" class="flex-grow" readonly="readonly" dir="ltr"/> </div> </div> </div> <div class="inputContainer"> <input is="emby-input" id="txtName" type="text" label="${LabelTitle}" required="required"/> </div> <div id="fldOriginalName" class="inputContainer"> <input is="emby-input" id="txtOriginalName" type="text" label="${LabelOriginalTitle}"/> </div> <div class="inputContainer"> <input is="emby-input" id="txtSortName" type="text" label="${LabelSortTitle}"/> </div> <div id="fldDateAdded" class="hide inputContainer"> <input is="emby-input" id="txtDateAdded" type="date" label="${LabelDateAdded}"/> <div class="fieldDescription">${ConfigureDateAdded}</div> </div> <div id="fldStatus" class="hide selectContainer"> <select is="emby-select" id="selectStatus" label="${LabelStatus}"></select> </div> <div id="fldArtist" class="hide inputContainer"> <input is="emby-input" id="txtArtist" type="text" label="${LabelArtists}"/> <div class="fieldDescription">${LabelArtistsHelp}</div> </div> <div id="fldAlbumArtist" class="hide inputContainer"> <input is="emby-input" id="txtAlbumArtist" type="text" label="${LabelAlbumArtists}"/> <div class="fieldDescription">${LabelArtistsHelp}</div> </div> <div id="fldAlbum" class="hide inputContainer"> <input is="emby-input" id="txtAlbum" type="text" label="${LabelAlbum}"/> </div> <div class="inlineForm"> <div id="fldParentIndexNumber" class="hide inputContainer"> <input is="emby-input" id="txtParentIndexNumber" type="number"/> </div> <div id="fldIndexNumber" class="hide inputContainer"> <input is="emby-input" id="txtIndexNumber" type="number" pattern="[0-9]*"/> </div> </div> <div id="fldCommunityRating" class="hide inputContainer"> <input is="emby-input" id="txtCommunityRating" type="number" step="any" min="0" max="10" label="${LabelCommunityRating}"/> </div> <div id="fldCriticRating" class="hide inputContainer"> <input is="emby-input" id="txtCriticRating" type="number" step=".1" label="${LabelCriticRating}"/> </div> <div id="fldTagline" class="hide inputContainer"> <input is="emby-input" id="txtTagline" type="text" label="${LabelTagline}"/> </div> <div class="inputContainer overviewContainer hide"> <textarea is="emby-textarea" id="txtOverview" label="${LabelOverview}"></textarea> </div> <div id="fldPremiereDate" class="inputContainer"> <input is="emby-input" id="txtPremiereDate" label="${LabelReleaseDate}" type="date"/> </div> <div id="fldYear" class="hide inputContainer"> <input is="emby-input" id="txtProductionYear" type="number" label="${LabelYear}"/> </div> <div id="fldPlaceOfBirth" class="hide inputContainer"> <input is="emby-input" id="txtPlaceOfBirth" type="text" label="${LabelPlaceOfBirth}"/> </div> <div id="fldEndDate" class="inputContainer"> <input is="emby-input" id="txtEndDate" label="${LabelEndDate}" type="date"/> </div> <div id="fldAirDays" class="hide"> <p>${LabelAirDays}</p> <div class="checkboxList"> <label> <input type="checkbox" is="emby-checkbox" class="chkAirDay" data-day="Sunday"/> <span>${Sunday}</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkAirDay" data-day="Monday"/> <span>${Monday}</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkAirDay" data-day="Tuesday"/> <span>${Tuesday}</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkAirDay" data-day="Wednesday"/> <span>${Wednesday}</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkAirDay" data-day="Thursday"/> <span>${Thursday}</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkAirDay" data-day="Friday"/> <span>${Friday}</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkAirDay" data-day="Saturday"/> <span>${Saturday}</span> </label> </div> <br/> </div> <div id="fldAirTime" class="inputContainer hide"> <input is="emby-input" id="txtAirTime" type="text" label="${LabelAirTime}"/> </div> <div id="fldSeriesRuntime" class="inputContainer hide"> <input is="emby-input" id="txtSeriesRuntime" type="number" label="${LabelRuntimeMinutes}"/> </div> <div class="inlineForm"> <div id="fldOfficialRating" class="selectContainer hide"> <select is="emby-select" id="selectOfficialRating" label="${LabelParentalRating}"></select> </div> <div id="fldCustomRating" class="selectContainer hide"> <select is="emby-select" id="selectCustomRating" label="${LabelCustomRating}"></select> </div> </div> <div class="inlineForm"> <div id="fldOriginalAspectRatio" class="inputContainer hide"> <input is="emby-input" id="txtOriginalAspectRatio" type="text" label="${LabelOriginalAspectRatio}"/> </div> <div id="fld3dFormat" class="selectContainer hide"> <select is="emby-select" id="select3dFormat" label="${Label3DFormat}"> <option value=""></option> <option value="HalfSideBySide">HSBS</option> <option value="HalfTopAndBottom">HTAB</option> <option value="FullSideBySide">FSBS</option> <option value="FullTopAndBottom">FTAB</option> <option value="MVC">MVC</option> </select> </div> </div> <div id="fldDisplayOrder" class="fldDisplaySetting selectContainer hide"> <select is="emby-select" id="selectDisplayOrder" label="${LabelDisplayOrder}"></select> <div class="fieldDescription seriesDisplayOrderDescription">${SeriesDisplayOrderHelp}</div> </div> </div> <div class="detailSection hide" id="collapsibleSpecialEpisodeInfo"> <h2> ${HeaderSpecialEpisodeInfo} </h2> <div class="inlineForm"> <div class="inputContainer"> <input is="emby-input" id="txtAirsBeforeSeason" type="number" pattern="[0-9]*" label="${LabelAirsBeforeSeason}"/> </div> <div class="inputContainer"> <input is="emby-input" id="txtAirsAfterSeason" type="number" pattern="[0-9]*" label="${LabelAirsAfterSeason}"/> </div> <div class="inputContainer"> <input is="emby-input" id="txtAirsBeforeEpisode" type="number" pattern="[0-9]*" label="${LabelAirsBeforeEpisode}"/> </div> </div> </div> <div class="detailSection externalIdsSection hide"> <h2> ${HeaderExternalIds} </h2> <div class="externalIds editorFieldset"> </div> </div> <div id="genresCollapsible" class="editableListviewContainer hide" style="margin-top:3em"> <h2 style="margin:.6em 0;vertical-align:middle;display:inline-block"> ${Genres} </h2> <button is="emby-button" type="button" class="fab btnAddTextItem submit marginStart" title="${Add}"> <span class="material-icons add" aria-hidden="true"></span> </button> <div class="paperList" id="listGenres"></div> </div> <div id="peopleCollapsible" style="margin-top:3em" class="hide"> <h2 style="margin:.6em 0;vertical-align:middle;display:inline-block"> ${People} </h2> <button is="emby-button" type="button" id="btnAddPerson" class="fab btnAddPerson marginStart" title="${Add}"> <span class="material-icons add" aria-hidden="true"></span> </button> <div id="peopleList" class="paperList"> </div> </div> <div id="studiosCollapsible" class="editableListviewContainer hide" style="margin-top:3em"> <h2 style="margin:.6em 0;vertical-align:middle;display:inline-block"> ${Studios} </h2> <button is="emby-button" type="button" class="fab btnAddTextItem submit marginStart" title="${Add}"> <span class="material-icons add" aria-hidden="true"></span> </button> <div class="paperList" id="listStudios"></div> </div> <div id="tagsCollapsible" class="editableListviewContainer hide" style="margin-top:3em"> <h2 style="margin:.6em 0;vertical-align:middle;display:inline-block"> ${Tags} </h2> <button is="emby-button" type="button" class="fab btnAddTextItem submit marginStart" title="${Add}"> <span class="material-icons add" aria-hidden="true"></span> </button> <div class="paperList" id="listTags"></div> </div> <div id="metadataSettingsCollapsible" style="margin-top:3em" class="hide"> <h2>${HeaderMetadataSettings}</h2> <div> <div class="selectContainer"> <select is="emby-select" id="selectLanguage" label="${LabelMetadataDownloadLanguage}"></select> <div class="fieldDescription editorfieldDescription">${MessageLeaveEmptyToInherit}</div> </div> <div class="selectContainer"> <select is="emby-select" id="selectCountry" label="${LabelCountry}"></select> </div> <div class="fieldDescription editorfieldDescription">${MessageLeaveEmptyToInherit}</div> <br/><br/> <label class="checkboxContainer"> <input type="checkbox" is="emby-checkbox" id="chkLockData"/> <span>${LabelLockItemToPreventChanges}</span> </label> <div class="providerSettingsContainer checkboxList hide"> </div> </div> </div> <br/> <div class="formDialogFooter"> <button is="emby-button" type="button" class="raised button-cancel block btnCancel formDialogFooterItem"> <span>${ButtonCancel}</span> </button> <button is="emby-button" type="submit" class="raised button-submit block btnSave formDialogFooterItem"> <span>${SaveChanges}</span> </button> </div> </div> </form> </div> ';function g(){a.classList.contains("dialog")&&u.default.close(a)}function x(e){var t=e.querySelectorAll(".chkAirDay:checked")||[];return Array.prototype.map.call(t,(function(e){return e.getAttribute("data-day")}))}function L(e){return e.querySelector("#txtAlbumArtist").value.trim().split(";").filter((function(e){return e.length>0})).map((function(e){return{Name:e}}))}function A(e){return e.querySelector("#txtArtist").value.trim().split(";").filter((function(e){return e.length>0})).map((function(e){return{Name:e}}))}function C(e,t,i){var a=e.querySelector(t).value;if(!a)return null;if(r[i]){var n=c.ZP.parseISO8601Date(r[i],!0).toISOString().split("T");0===n[0].indexOf(a)&&(a+="T"+n[1])}return a}function T(e){p.ZP.show();var t=this,i={Id:r.Id,Name:t.querySelector("#txtName").value,OriginalTitle:t.querySelector("#txtOriginalName").value,ForcedSortName:t.querySelector("#txtSortName").value,CommunityRating:t.querySelector("#txtCommunityRating").value,CriticRating:t.querySelector("#txtCriticRating").value,IndexNumber:t.querySelector("#txtIndexNumber").value||null,AirsBeforeSeasonNumber:t.querySelector("#txtAirsBeforeSeason").value,AirsAfterSeasonNumber:t.querySelector("#txtAirsAfterSeason").value,AirsBeforeEpisodeNumber:t.querySelector("#txtAirsBeforeEpisode").value,ParentIndexNumber:t.querySelector("#txtParentIndexNumber").value||null,DisplayOrder:t.querySelector("#selectDisplayOrder").value,Album:t.querySelector("#txtAlbum").value,AlbumArtists:L(t),ArtistItems:A(t),Overview:t.querySelector("#txtOverview").value,Status:t.querySelector("#selectStatus").value,AirDays:x(t),AirTime:t.querySelector("#txtAirTime").value,Genres:P(t.querySelector("#listGenres")),Tags:P(t.querySelector("#listTags")),Studios:P(t.querySelector("#listStudios")).map((function(e){return{Name:e}})),PremiereDate:C(t,"#txtPremiereDate","PremiereDate"),DateCreated:C(t,"#txtDateAdded","DateCreated"),EndDate:C(t,"#txtEndDate","EndDate"),ProductionYear:t.querySelector("#txtProductionYear").value,AspectRatio:t.querySelector("#txtOriginalAspectRatio").value,Video3DFormat:t.querySelector("#select3dFormat").value,OfficialRating:t.querySelector("#selectOfficialRating").value,CustomRating:t.querySelector("#selectCustomRating").value,People:r.People,LockData:t.querySelector("#chkLockData").checked,LockedFields:Array.prototype.filter.call(t.querySelectorAll(".selectLockedField"),(function(e){return!e.checked})).map((function(e){return e.getAttribute("data-value")}))};i.ProviderIds=Object.assign({},r.ProviderIds);var a=t.querySelectorAll(".txtExternalId");if(Array.prototype.map.call(a,(function(e){var t=e.getAttribute("data-providerkey");i.ProviderIds[t]=e.value})),i.PreferredMetadataLanguage=t.querySelector("#selectLanguage").value,i.PreferredMetadataCountryCode=t.querySelector("#selectCountry").value,"Person"===r.Type){var l=t.querySelector("#txtPlaceOfBirth").value;i.ProductionLocations=l?[l]:[]}if("Series"===r.Type){var s=t.querySelector("#txtSeriesRuntime").value;i.RunTimeTicks=s?6e8*s:null}var o=t.querySelector("#txtTagline").value;return i.Taglines=o?[o]:[],function(e,t){function i(){(0,f.Z)(b.ZP.translate("MessageItemSaved")),p.ZP.hide(),g()}var a=I();a.updateItem(t).then((function(){var r=e.querySelector("#selectContentType").value||"";(n.ContentType||"")!==r?a.ajax({url:a.getUrl("Items/"+t.Id+"/ContentType",{ContentType:r}),type:"POST"}).then((function(){i()})):i()}))}(t,i),e.preventDefault(),e.stopPropagation(),!1}function P(e){return Array.prototype.map.call(e.querySelectorAll(".textValue"),(function(e){return e.textContent}))}function D(e,t,a){i.e(58006).then(i.bind(i,58006)).then((function(i){i.default.show(t).then((function(t){-1===a&&r.People.push(t),$(e,r.People)}))}))}function q(e){var t,a,n=o.ZP.parentWithClass(e.target,"btnRemoveFromEditorList");if(n)return t=n,void(a=o.ZP.parentWithClass(t,"listItem")).parentNode.removeChild(a);var r=o.ZP.parentWithClass(e.target,"btnAddTextItem");r&&function(e,t){i.e(23690).then(i.bind(i,23690)).then((function(t){(0,t.default)({label:"Value:"}).then((function(t){var i=o.ZP.parentWithClass(e,"editableListviewContainer").querySelector(".paperList"),a=P(i);a.push(t),w(i,a,undefined)}))}))}(r)}function I(){return m.Z.getApiClient(r.ServerId)}function k(e){e.querySelector(".externalIds").addEventListener("click",(function(t){var i=o.ZP.parentWithClass(t.target,"btnOpenExternalId");if(i){var a=e.querySelector("#"+i.getAttribute("data-fieldid")),n=a.getAttribute("data-formatstring");a.value&&y.Z.openUrl(n.replace("{0}",a.value))}})),d.Z.desktop||(e.querySelector(".btnBack").classList.remove("hide"),e.querySelector(".btnClose").classList.add("hide")),function(e,t,i){for(var a=0,n=e.length;a<n;a++)e[a].addEventListener("click",i)}(e.querySelectorAll(".btnCancel"),0,(function(e){e.preventDefault(),g()})),e.querySelector(".btnMore").addEventListener("click",(function(t){I().getCurrentUser().then((function(a){!function(e,t,a){i.e(9337).then(i.bind(i,9337)).then((function(i){var n=i.default,l=r;n.show({item:l,positionTo:t,edit:!1,editImages:!0,editSubtitles:!0,sync:!1,share:!1,play:!1,queue:!1,user:a}).then((function(t){t.deleted?function(e,t){var i=t.ParentId||t.SeasonId||t.SeriesId;i?H(e,i,t.ServerId):h.appRouter.goHome()}(e,l):t.updated&&H(e,l.Id,l.ServerId)}))}))}(e,t.target,a)}))})),e.querySelector(".btnHeaderSave").addEventListener("click",(function(){e.querySelector(".btnSave").click()})),e.querySelector("#chkLockData").addEventListener("click",(function(e){e.target.checked?O(".providerSettingsContainer"):Z(".providerSettingsContainer")})),e.removeEventListener("click",q),e.addEventListener("click",q);var t=e.querySelector("form");t.removeEventListener("submit",T),t.addEventListener("submit",T),e.querySelector("#btnAddPerson").addEventListener("click",(function(){D(e,{},-1)})),e.querySelector("#peopleList").addEventListener("click",(function(t){var i,a=o.ZP.parentWithClass(t.target,"btnDeletePerson");a&&(i=parseInt(a.getAttribute("data-index"),10),r.People.splice(i,1),$(e,r.People));var n=o.ZP.parentWithClass(t.target,"btnEditPerson");n&&(i=parseInt(n.getAttribute("data-index"),10),D(e,r.People[i],i))}))}function N(e,t){var i=m.Z.getApiClient(t);return e?i.getItem(i.getCurrentUserId(),e):i.getRootFolder(i.getCurrentUserId())}function E(e,t){var i=m.Z.getApiClient(t);return e?i.getJSON(i.getUrl("Items/"+e+"/MetadataEditor")):Promise.resolve({})}function O(e,t,i){if(t=t||document,"string"==typeof e){var a=i?t.querySelectorAll(e):[t.querySelector(e)];Array.prototype.forEach.call(a,(function(e){e&&e.classList.add("hide")}))}else e.classList.add("hide")}function Z(e,t,i){if(t=t||document,"string"==typeof e){var a=i?t.querySelectorAll(e):[t.querySelector(e)];Array.prototype.forEach.call(a,(function(e){e&&e.classList.remove("hide")}))}else e.classList.remove("hide")}function R(e,t,i){var a="";a+="<option value=''></option>";for(var n,r=[],l=!1,o=0,d=e.length;o<d;o++)n=e[o],r.push({Name:n.Name,Value:n.Name}),n.Name===i&&(l=!0);i&&!l&&r.push({Name:i,Value:i});for(var u=0,c=r.length;u<c;u++)n=r[u],a+="<option value='"+s()(n.Value)+"'>"+s()(n.Name)+"</option>";t.innerHTML=a}function w(e,t,i){t=t||[],void 0===i?t.sort((function(e,t){return e.toLowerCase().localeCompare(t.toLowerCase())})):t=i(t);for(var a="",n=0;n<t.length;n++)a+='<div class="listItem">',a+='<span class="material-icons listItemIcon live_tv" aria-hidden="true" style="background-color:#333;"></span>',a+='<div class="listItemBody">',a+='<div class="textValue">',a+=s()(t[n]),a+="</div>",a+="</div>",a+='<button type="button" is="paper-icon-button-light" data-index="'+n+'" class="btnRemoveFromEditorList autoSize"><span class="material-icons delete" aria-hidden="true"></span></button>',a+="</div>";e.innerHTML=a}function $(e,t){for(var i="",a=e.querySelector("#peopleList"),n=0,r=t.length;n<r;n++){var l=t[n];i+='<div class="listItem">',i+='<span class="material-icons listItemIcon person" style="background-color:#333;"></span>',i+='<div class="listItemBody">',i+='<button style="text-align:left;" type="button" class="btnEditPerson clearButton" data-index="'+n+'">',i+='<div class="textValue">',i+=s()(l.Name||""),i+="</div>",l.Role&&""!==l.Role?i+='<div class="secondary">'+l.Role+"</div>":i+='<div class="secondary">'+b.ZP.translate(l.Type)+"</div>",i+="</button>",i+="</div>",i+='<button type="button" is="paper-icon-button-light" data-index="'+n+'" class="btnDeletePerson autoSize"><span class="material-icons delete" aria-hidden="true"></span></button>',i+="</div>"}a.innerHTML=i}function H(e,t,i){p.ZP.show(),Promise.all([N(t,i),E(t,i)]).then((function(t){var i=t[0];n=t[1],r=i;var a=n.Cultures,l=n.Countries;!function(e,t){t.ContentTypeOptions.length?Z("#fldContentType",e):O("#fldContentType",e);var i=t.ContentTypeOptions.map((function(e){return'<option value="'+e.Value+'">'+e.Name+"</option>"})).join(""),a=e.querySelector("#selectContentType");a.innerHTML=i,a.value=t.ContentType||""}(e,n),function(e,t,i){for(var a="",n=t.ProviderIds||{},r=0,l=i.length;r<l;r++){var o=i[r],d="txt1"+o.Key,u=o.UrlFormatString||"",c=o.Name;o.Type&&(c=o.Name+" "+b.ZP.translate(o.Type));var p=b.ZP.translate("LabelDynamicExternalId",s()(c));a+='<div class="inputContainer">',a+='<div class="flex align-items-center">',a+='<div class="flex-grow">',a+='<input is="emby-input" class="txtExternalId" value="'+s()(n[o.Key]||"")+'" data-providerkey="'+o.Key+'" data-formatstring="'+u+'" id="'+d+'" label="'+p+'"/>',a+="</div>",u&&(a+='<button type="button" is="paper-icon-button-light" class="btnOpenExternalId align-self-flex-end" data-fieldid="'+d+'"><span class="material-icons open_in_browser" aria-hidden="true"></span></button>'),a+="</div>",a+="</div>"}e.querySelector(".externalIds",e).innerHTML=a,i.length?e.querySelector(".externalIdsSection").classList.remove("hide"):e.querySelector(".externalIdsSection").classList.add("hide")}(e,i,n.ExternalIdInfos),function(e,t){var i="";i+="<option value=''></option>";for(var a=0,n=t.length;a<n;a++){var r=t[a];i+="<option value='"+r.TwoLetterISOLanguageName+"'>"+r.DisplayName+"</option>"}e.innerHTML=i}(e.querySelector("#selectLanguage"),a),function(e,t){var i="";i+="<option value=''></option>";for(var a=0,n=t.length;a<n;a++){var r=t[a];i+="<option value='"+r.TwoLetterISORegionName+"'>"+r.DisplayName+"</option>"}e.innerHTML=i}(e.querySelector("#selectCountry"),l),function(e,t){if(t.Path&&!1!==t.EnableMediaSourceDisplay?Z("#fldPath",e):O("#fldPath",e),"Series"===t.Type||"Movie"===t.Type||"Trailer"===t.Type||"Person"===t.Type?Z("#fldOriginalName",e):O("#fldOriginalName",e),"Series"===t.Type?Z("#fldSeriesRuntime",e):O("#fldSeriesRuntime",e),"Series"===t.Type||"Person"===t.Type?Z("#fldEndDate",e):O("#fldEndDate",e),"MusicAlbum"===t.Type?Z("#albumAssociationMessage",e):O("#albumAssociationMessage",e),"Movie"===t.Type||"Trailer"===t.Type?Z("#fldCriticRating",e):O("#fldCriticRating",e),"Series"===t.Type?(Z("#fldStatus",e),Z("#fldAirDays",e),Z("#fldAirTime",e)):(O("#fldStatus",e),O("#fldAirDays",e),O("#fldAirTime",e)),"Video"===t.MediaType&&"TvChannel"!==t.Type?Z("#fld3dFormat",e):O("#fld3dFormat",e),"Audio"===t.Type?Z("#fldAlbumArtist",e):O("#fldAlbumArtist",e),"Audio"===t.Type||"MusicVideo"===t.Type?(Z("#fldArtist",e),Z("#fldAlbum",e)):(O("#fldArtist",e),O("#fldAlbum",e)),"Episode"===t.Type&&0===t.ParentIndexNumber?Z("#collapsibleSpecialEpisodeInfo",e):O("#collapsibleSpecialEpisodeInfo",e),"Person"===t.Type||"Genre"===t.Type||"Studio"===t.Type||"MusicGenre"===t.Type||"TvChannel"===t.Type||"Book"===t.Type?O("#peopleCollapsible",e):Z("#peopleCollapsible",e),"Person"===t.Type||"Genre"===t.Type||"Studio"===t.Type||"MusicGenre"===t.Type||"TvChannel"===t.Type?(O("#fldCommunityRating",e),O("#genresCollapsible",e),O("#studiosCollapsible",e),"TvChannel"===t.Type?Z("#fldOfficialRating",e):O("#fldOfficialRating",e),O("#fldCustomRating",e)):(Z("#fldCommunityRating",e),Z("#genresCollapsible",e),Z("#studiosCollapsible",e),Z("#fldOfficialRating",e),Z("#fldCustomRating",e)),Z("#tagsCollapsible",e),"TvChannel"===t.Type?(O("#metadataSettingsCollapsible",e),O("#fldPremiereDate",e),O("#fldDateAdded",e),O("#fldYear",e)):(Z("#metadataSettingsCollapsible",e),Z("#fldPremiereDate",e),Z("#fldDateAdded",e),Z("#fldYear",e)),"TvChannel"===t.Type?O(".overviewContainer",e):Z(".overviewContainer",e),"Person"===t.Type?(e.querySelector("#txtName").label(b.ZP.translate("LabelName")),e.querySelector("#txtSortName").label(b.ZP.translate("LabelSortName")),e.querySelector("#txtOriginalName").label(b.ZP.translate("LabelOriginalName")),e.querySelector("#txtProductionYear").label(b.ZP.translate("LabelBirthYear")),e.querySelector("#txtPremiereDate").label(b.ZP.translate("LabelBirthDate")),e.querySelector("#txtEndDate").label(b.ZP.translate("LabelDeathDate")),Z("#fldPlaceOfBirth")):(e.querySelector("#txtProductionYear").label(b.ZP.translate("LabelYear")),e.querySelector("#txtPremiereDate").label(b.ZP.translate("LabelReleaseDate")),e.querySelector("#txtEndDate").label(b.ZP.translate("LabelEndDate")),O("#fldPlaceOfBirth")),"Video"===t.MediaType&&"TvChannel"!==t.Type?Z("#fldOriginalAspectRatio"):O("#fldOriginalAspectRatio"),"Audio"===t.Type||"Episode"===t.Type||"Season"===t.Type?(Z("#fldIndexNumber"),"Episode"===t.Type?e.querySelector("#txtIndexNumber").label(b.ZP.translate("LabelEpisodeNumber")):"Season"===t.Type?e.querySelector("#txtIndexNumber").label(b.ZP.translate("LabelSeasonNumber")):"Audio"===t.Type?e.querySelector("#txtIndexNumber").label(b.ZP.translate("LabelTrackNumber")):e.querySelector("#txtIndexNumber").label(b.ZP.translate("LabelNumber"))):O("#fldIndexNumber"),"Audio"===t.Type||"Episode"===t.Type?(Z("#fldParentIndexNumber"),"Episode"===t.Type?e.querySelector("#txtParentIndexNumber").label(b.ZP.translate("LabelSeasonNumber")):"Audio"===t.Type?e.querySelector("#txtParentIndexNumber").label(b.ZP.translate("LabelDiscNumber")):e.querySelector("#txtParentIndexNumber").label(b.ZP.translate("LabelParentNumber"))):O("#fldParentIndexNumber",e),"BoxSet"===t.Type)Z("#fldDisplayOrder",e),O(".seriesDisplayOrderDescription",e),e.querySelector("#selectDisplayOrder").innerHTML='<option value="SortName">'+b.ZP.translate("SortName")+'</option><option value="PremiereDate">'+b.ZP.translate("ReleaseDate")+"</option>";else if("Series"===t.Type){Z("#fldDisplayOrder",e),Z(".seriesDisplayOrderDescription",e);var i="";i+='<option value="">'+b.ZP.translate("Aired")+"</option>",i+='<option value="originalAirDate">'+b.ZP.translate("OriginalAirDate")+"</option>",i+='<option value="absolute">'+b.ZP.translate("Absolute")+"</option>",i+='<option value="dvd">DVD</option></option>',i+='<option value="digital">'+b.ZP.translate("Digital")+"</option>",i+='<option value="storyArc">'+b.ZP.translate("StoryArc")+"</option>",i+='<option value="production">'+b.ZP.translate("Production")+"</option>",i+='<option value="tv">TV</option>',e.querySelector("#selectDisplayOrder").innerHTML=i}else e.querySelector("#selectDisplayOrder").innerHTML="",O("#fldDisplayOrder",e)}(e,i),function(e,t,i){var a=e.querySelector("#selectOfficialRating");R(i,a,t.OfficialRating),a.value=t.OfficialRating||"",R(i,a=e.querySelector("#selectCustomRating"),t.CustomRating),a.value=t.CustomRating||"";var n=e.querySelector("#selectStatus");!function(e){var t="";t+="<option value=''></option>",t+="<option value='Continuing'>"+b.ZP.translate("Continuing")+"</option>",t+="<option value='Ended'>"+b.ZP.translate("Ended")+"</option>",e.innerHTML=t}(n),n.value=t.Status||"",e.querySelector("#select3dFormat",e).value=t.Video3DFormat||"",Array.prototype.forEach.call(e.querySelectorAll(".chkAirDay",e),(function(e){e.checked=-1!==(t.AirDays||[]).indexOf(e.getAttribute("data-day"))})),w(e.querySelector("#listGenres"),t.Genres),$(e,t.People||[]),w(e.querySelector("#listStudios"),(t.Studios||[]).map((function(e){return e.Name||""}))),w(e.querySelector("#listTags"),t.Tags);var r,l=t.LockData||!1,s=e.querySelector("#chkLockData");if(s.checked=l,s.checked?O(".providerSettingsContainer",e):Z(".providerSettingsContainer",e),function(e,t,i){var a=e.querySelector(".providerSettingsContainer");i=i||[];var n=[{name:b.ZP.translate("Name"),value:"Name"},{name:b.ZP.translate("Overview"),value:"Overview"},{name:b.ZP.translate("Genres"),value:"Genres"},{name:b.ZP.translate("ParentalRating"),value:"OfficialRating"},{name:b.ZP.translate("People"),value:"Cast"}];"Person"===t.Type?n.push({name:b.ZP.translate("BirthLocation"),value:"ProductionLocations"}):n.push({name:b.ZP.translate("ProductionLocations"),value:"ProductionLocations"}),"Series"===t.Type&&n.push({name:b.ZP.translate("Runtime"),value:"Runtime"}),n.push({name:b.ZP.translate("Studios"),value:"Studios"}),n.push({name:b.ZP.translate("Tags"),value:"Tags"});var r="";r+="<h2>"+b.ZP.translate("HeaderEnabledFields")+"</h2>",r+="<p>"+b.ZP.translate("HeaderEnabledFieldsHelp")+"</p>",r+=function(e,t){for(var i="",a=0;a<e.length;a++){var n=e[a],r=n.name,l=n.value||n.name;i+="<label>",i+='<input type="checkbox" is="emby-checkbox" class="selectLockedField" data-value="'+l+'"'+(-1===t.indexOf(l)?" checked":"")+"/>",i+="<span>"+r+"</span>",i+="</label>"}return i}(n,i),a.innerHTML=r}(e,t,t.LockedFields),e.querySelector("#txtPath").value=t.Path||"",e.querySelector("#txtName").value=t.Name||"",e.querySelector("#txtOriginalName").value=t.OriginalTitle||"",e.querySelector("#txtOverview").value=t.Overview||"",e.querySelector("#txtTagline").value=t.Taglines&&t.Taglines.length?t.Taglines[0]:"",e.querySelector("#txtSortName").value=t.ForcedSortName||"",e.querySelector("#txtCommunityRating").value=t.CommunityRating||"",e.querySelector("#txtCriticRating").value=t.CriticRating||"",e.querySelector("#txtIndexNumber").value=null==t.IndexNumber?"":t.IndexNumber,e.querySelector("#txtParentIndexNumber").value=null==t.ParentIndexNumber?"":t.ParentIndexNumber,e.querySelector("#txtAirsBeforeSeason").value="AirsBeforeSeasonNumber"in t?t.AirsBeforeSeasonNumber:"",e.querySelector("#txtAirsAfterSeason").value="AirsAfterSeasonNumber"in t?t.AirsAfterSeasonNumber:"",e.querySelector("#txtAirsBeforeEpisode").value="AirsBeforeEpisodeNumber"in t?t.AirsBeforeEpisodeNumber:"",e.querySelector("#txtAlbum").value=t.Album||"",e.querySelector("#txtAlbumArtist").value=(t.AlbumArtists||[]).map((function(e){return e.Name})).join(";"),e.querySelector("#selectDisplayOrder").value=t.DisplayOrder||"",e.querySelector("#txtArtist").value=(t.ArtistItems||[]).map((function(e){return e.Name})).join(";"),t.DateCreated)try{r=c.ZP.parseISO8601Date(t.DateCreated,!0),e.querySelector("#txtDateAdded").value=r.toISOString().slice(0,10)}catch(t){e.querySelector("#txtDateAdded").value=""}else e.querySelector("#txtDateAdded").value="";if(t.PremiereDate)try{r=c.ZP.parseISO8601Date(t.PremiereDate,!0),e.querySelector("#txtPremiereDate").value=r.toISOString().slice(0,10)}catch(t){e.querySelector("#txtPremiereDate").value=""}else e.querySelector("#txtPremiereDate").value="";if(t.EndDate)try{r=c.ZP.parseISO8601Date(t.EndDate,!0),e.querySelector("#txtEndDate").value=r.toISOString().slice(0,10)}catch(t){e.querySelector("#txtEndDate").value=""}else e.querySelector("#txtEndDate").value="";e.querySelector("#txtProductionYear").value=t.ProductionYear||"",e.querySelector("#txtAirTime").value=t.AirTime||"";var o=t.ProductionLocations&&t.ProductionLocations.length?t.ProductionLocations[0]:"";if(e.querySelector("#txtPlaceOfBirth").value=o,e.querySelector("#txtOriginalAspectRatio").value=t.AspectRatio||"",e.querySelector("#selectLanguage").value=t.PreferredMetadataLanguage||"",e.querySelector("#selectCountry").value=t.PreferredMetadataCountryCode||"",t.RunTimeTicks){var d=t.RunTimeTicks/6e8;e.querySelector("#txtSeriesRuntime").value=Math.round(d)}else e.querySelector("#txtSeriesRuntime",e).value=""}(e,i,n.ParentalRatingOptions),"Video"===i.MediaType&&"Episode"!==i.Type&&"TvChannel"!==i.Type?Z("#fldTagline",e):O("#fldTagline",e),p.ZP.hide()}))}function M(e,t,a){Promise.resolve().then(i.bind(i,54517)).then((function(i){var n=a?"on":"off";i.centerFocus[n](e,t)}))}var F={show:function(e,t){return new Promise((function(i){return function(e,t,i){p.ZP.show();var n={removeOnClose:!0,scrollY:!1};d.Z.tv?n.size="fullscreen":n.size="small";var r=u.default.createDialog(n);r.classList.add("formDialog");var l="";l+=b.ZP.translateHtml(S,"core"),r.innerHTML=l,d.Z.tv&&M(r.querySelector(".formDialogContent"),!1,!0),u.default.open(r),r.addEventListener("close",(function(){d.Z.tv&&M(r.querySelector(".formDialogContent"),!1,!1),i()})),a=r,k(r),H(r,e,t)}(e,t,i)}))},embed:function(e,t,i){return new Promise((function(){p.ZP.show(),e.innerHTML=b.ZP.translateHtml(S,"core"),e.querySelector(".formDialogFooter").classList.remove("formDialogFooter"),e.querySelector(".btnClose").classList.add("hide"),e.querySelector(".btnHeaderSave").classList.remove("hide"),e.querySelector(".btnCancel").classList.add("hide"),a=e,k(e),H(e,t,i),v.Z.autoFocus(e)}))}}},15856:function(e,t,i){var a=i(30325),n=i(57366),r=i(12801),l=(i(67752),Object.create(HTMLSelectElement.prototype));function s(){return!(!n.Z.edgeUwp&&!n.Z.xboxOne&&(n.Z.tizen||n.Z.orsay||n.Z.web0s||!n.Z.tv&&a.Z.tv))}function o(e){var t=d(e),i=t?t.textContent||t.innerText:null;r.default.show({items:e.options,positionTo:e,title:i}).then((function(t){!function(e,t){e.value=t}(e,t),function(e){var t=document.createEvent("HTMLEvents");t.initEvent("change",!1,!0),e.dispatchEvent(t)}(e)}))}function d(e){for(var t=e.previousSibling;t&&"LABEL"!==t.tagName;)t=t.previousSibling;return t}function u(){var e=d(this);e&&e.classList.add("selectLabelFocused")}function c(){var e=d(this);e&&e.classList.remove("selectLabelFocused")}function p(e){e.button||s()||(e.preventDefault(),o(this))}function v(e){switch(e.keyCode){case 13:return void(s()||(e.preventDefault(),o(this)));case 37:case 38:case 39:case 40:return void(a.Z.tv&&e.preventDefault())}}var b=0;l.createdCallback=function(){this.id||(this.id="embyselect"+b,b++),this.classList.add("emby-select-withcolor"),a.Z.tv&&this.classList.add("emby-select-focusscale"),this.addEventListener("mousedown",p),this.addEventListener("keydown",v),this.addEventListener("focus",u),this.addEventListener("blur",c)},l.attachedCallback=function(){var e;if(!this.classList.contains("emby-select")){this.classList.add("emby-select");var t,i=this.ownerDocument.createElement("label");i.innerText=this.getAttribute("label")||"",i.classList.add("selectLabel"),i.htmlFor=this.id,null===(e=this.parentNode)||void 0===e||e.insertBefore(i,this),this.classList.contains("emby-select-withcolor")&&(null===(t=this.parentNode)||void 0===t||t.insertAdjacentHTML("beforeend",'<div class="selectArrowContainer"><div style="visibility:hidden;display:none;">0</div><span class="selectArrow material-icons keyboard_arrow_down" aria-hidden="true"></span></div>'))}},l.setLabel=function(e){var t;(null===(t=this.parentNode)||void 0===t?void 0:t.querySelector("label")).innerText=e},document.registerElement("emby-select",{prototype:l,extends:"select"})},85511:function(e,t,i){function a(e,t){var i,a=this;function n(){if((!a.lineHeight||a.lineHeight<=0)&&(e.rows=1,i=function(e){for(var t=window.getComputedStyle(e,null),i=["paddingTop","paddingBottom"],a=0,n=0;n<i.length;n++)a+=parseInt(t[i[n]],10);return a}(e),a.rows=e.rows||1,a.lineHeight=e.scrollHeight/a.rows-i/a.rows,a.maxAllowedHeight=a.lineHeight*t-i),a.lineHeight<=0)return e.style.overflowY="scroll",e.style.height="auto",void(e.rows=3);var n=0;e.scrollHeight-i>a.maxAllowedHeight?(e.style.overflowY="scroll",n=a.maxAllowedHeight):(e.style.overflowY="hidden",e.style.height="auto",n=e.scrollHeight),e.style.height=n+"px"}void 0===t&&(t=999),e.addEventListener("input",n),e.addEventListener("focus",n),e.addEventListener("valueset",n),n()}i(32081),i(20252),i(99785),i(67752),i(62033);var n=Object.create(HTMLTextAreaElement.prototype),r=0;if(Object.getOwnPropertyDescriptor&&Object.defineProperty){var l=Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype,"value");if(l&&l.configurable){var s=l.set;l.set=function(e){s.call(this,e),this.dispatchEvent(new CustomEvent("valueset",{bubbles:!1,cancelable:!1}))},Object.defineProperty(HTMLTextAreaElement.prototype,"value",l)}}n.createdCallback=function(){this.id||(this.id="embytextarea"+r,r++)},n.attachedCallback=function(){if(!this.classList.contains("emby-textarea")){this.rows=1,this.classList.add("emby-textarea");var e=this.parentNode,t=this.ownerDocument.createElement("label");t.innerText=this.getAttribute("label")||"",t.classList.add("textareaLabel"),t.htmlFor=this.id,e.insertBefore(t,this),this.addEventListener("focus",(function(){t.classList.add("textareaLabelFocused"),t.classList.remove("textareaLabelUnfocused")})),this.addEventListener("blur",(function(){t.classList.remove("textareaLabelFocused"),t.classList.add("textareaLabelUnfocused")})),this.label=function(e){t.innerText=e},new a(this)}},document.registerElement("emby-textarea",{prototype:n,extends:"textarea"})}}]);