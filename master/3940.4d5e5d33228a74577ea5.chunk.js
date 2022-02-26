"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3940],{63940:function(e,n,t){t.r(n),t.d(n,{default:function(){return P}}),t(5769),t(63238),t(61418),t(17460),t(14078);var i,l,a,o=t(90914),s=t(44614),r=t(78695),c=t(56705),d=t(74227),u=t(28469),p=(t(87201),t(78066),t(45368),t(83225),t(20716),t(21865),t(6626),t(43734),t(85427),t(15359),t(53913)),m='<div class="formDialogHeader"> <button is="paper-icon-button-light" class="btnCancel autoSize" tabindex="-1"><span class="material-icons arrow_back" aria-hidden="true"></span></button> <h3 class="formDialogHeaderTitle"> ${HeaderSeriesOptions} </h3> </div> <div class="formDialogContent smoothScrollY"> <div class="dialogContentInner dialog-content-centered" style="padding-top:2em"> <form style="max-width:none"> <div class="selectContainer"> <select is="emby-select" class="selectShowType" label="${LabelRecord}"> <option value="new">${NewEpisodesOnly}</option> <option value="all">${AllEpisodes}</option> </select> </div> <div class="checkboxContainer checkboxContainer-withDescription"> <label> <input type="checkbox" is="emby-checkbox" class="chkSkipEpisodesInLibrary"/> <span>${SkipEpisodesAlreadyInMyLibrary}</span> </label> <div class="fieldDescription checkboxFieldDescription">${SkipEpisodesAlreadyInMyLibraryHelp}</div> </div> <div class="selectContainer"> <select is="emby-select" class="selectChannels" label="${LabelChannels}"> <option class="optionChannelOnly" value="one">${OneChannel}</option> <option value="all">${AllChannels}</option> </select> </div> <div class="selectContainer"> <select is="emby-select" class="selectAirTime" label="${LabelAirTime}"> <option class="optionAroundTime" value="original"></option> <option value="any">${Anytime}</option> </select> </div> <div class="selectContainer"> <select is="emby-select" class="selectKeepUpTo" label="${LabelKeepUpTo}"></select> </div> <div class="inputContainer"> <div class="flex align-items-center"> <div class="flex-grow"> <input is="emby-input" type="number" id="txtPrePaddingMinutes" pattern="[0-9]*" required="required" min="0" step="1" label="${LabelStartWhenPossible}"/> </div> <div class="fieldDescription" style="margin-left:.5em;font-size:90%;margin-top:1.3em"> ${MinutesBefore} </div> </div> </div> <div class="inputContainer"> <div class="flex align-items-center"> <div class="flex-grow"> <input is="emby-input" type="number" id="txtPostPaddingMinutes" pattern="[0-9]*" required="required" min="0" step="1" label="${LabelStopWhenPossible}"/> </div> <div class="fieldDescription" style="margin-left:.5em;font-size:90%;margin-top:1.3em"> ${MinutesAfter} </div> </div> </div> <br/> <div class="formDialogFooter"> <button is="emby-button" type="submit" class="raised btnSubmit block formDialogFooterItem button-submit hide"> <span>${Save}</span> </button> <button is="emby-button" type="button" class="raised btnCancelRecording block formDialogFooterItem button-cancel" style="white-space:nowrap"> <span>${HeaderCancelRecording}</span> </button> </div> </form> </div> </div> ',v=!1,y=!1;function b(e,n){e.querySelector("#txtPrePaddingMinutes").value=n.PrePaddingSeconds/60,e.querySelector("#txtPostPaddingMinutes").value=n.PostPaddingSeconds/60,e.querySelector(".selectChannels").value=n.RecordAnyChannel?"all":"one",e.querySelector(".selectAirTime").value=n.RecordAnyTime?"any":"original",e.querySelector(".selectShowType").value=n.RecordNewOnly?"new":"all",e.querySelector(".chkSkipEpisodesInLibrary").checked=n.SkipEpisodesInLibrary,e.querySelector(".selectKeepUpTo").value=n.KeepUpTo||0,n.ChannelName||n.ChannelNumber?e.querySelector(".optionChannelOnly").innerHTML=s.ZP.translate("ChannelNameOnly",n.ChannelName||n.ChannelNumber):e.querySelector(".optionChannelOnly").innerHTML=s.ZP.translate("OneChannel"),e.querySelector(".optionAroundTime").innerHTML=s.ZP.translate("AroundTime",u.ZP.getDisplayTime(u.ZP.parseISO8601Date(n.StartDate))),c.ZP.hide()}function f(e){v=!0,y=e,o.default.close(i)}function h(e){var n=this,t=p.Z.getApiClient(a);return t.getLiveTvSeriesTimer(l).then((function(e){e.PrePaddingSeconds=60*n.querySelector("#txtPrePaddingMinutes").value,e.PostPaddingSeconds=60*n.querySelector("#txtPostPaddingMinutes").value,e.RecordAnyChannel="all"===n.querySelector(".selectChannels").value,e.RecordAnyTime="any"===n.querySelector(".selectAirTime").value,e.RecordNewOnly="new"===n.querySelector(".selectShowType").value,e.SkipEpisodesInLibrary=n.querySelector(".chkSkipEpisodesInLibrary").checked,e.KeepUpTo=n.querySelector(".selectKeepUpTo").value,t.updateLiveTvSeriesTimer(e)})),e.preventDefault(),!1}function g(e){!function(e){for(var n="",t=0;t<=50;t++)n+='<option value="'+t+'">'+(0===t?s.ZP.translate("AsManyAsPossible"):1===t?s.ZP.translate("ValueOneEpisode"):s.ZP.translate("ValueEpisodeCount",t))+"</option>";e.querySelector(".selectKeepUpTo").innerHTML=n}(e),e.querySelector(".btnCancel").addEventListener("click",(function(){f(!1)})),e.querySelector(".btnCancelRecording").addEventListener("click",(function(){var e,n;(e=p.Z.getApiClient(a),n=l,new Promise((function(i,l){Promise.resolve().then(t.bind(t,58104)).then((function(t){t.default.cancelSeriesTimerWithConfirmation(n,e.serverId()).then(i,l)}))}))).then((function(){f(!0)}))})),e.querySelector("form").addEventListener("submit",h)}function S(e,n){var t=p.Z.getApiClient(a);c.ZP.show(),"string"==typeof n?(l=n,t.getLiveTvSeriesTimer(n).then((function(n){b(e,n),c.ZP.hide()}))):n&&(l=n.Id,b(e,n),c.ZP.hide())}function C(){this.querySelector(".btnSubmit").click()}var P={show:function(e,n,t){return new Promise((function(l,u){v=!1,y=!1,a=n,c.ZP.show(),t=t||{};var p={removeOnClose:!0,scrollY:!1};r.Z.tv?p.size="fullscreen":p.size="small";var b=o.default.createDialog(p);b.classList.add("formDialog"),b.classList.add("recordingDialog"),r.Z.tv||(b.style["min-width"]="20%");var f="";f+=s.ZP.translateHtml(m,"core"),b.innerHTML=f,!1===t.enableCancel&&b.querySelector(".formDialogFooter").classList.add("hide"),i=b,b.addEventListener("closing",(function(){y||this.querySelector(".btnSubmit").click()})),b.addEventListener("close",(function(){v?l({updated:!0,deleted:y}):u()})),r.Z.tv&&d.default.centerFocus.on(b.querySelector(".formDialogContent"),!1),g(b),S(b,e),o.default.open(b)}))},embed:function(e,n,t){v=!1,y=!1,a=n,c.ZP.show(),t=t||{};var l={removeOnClose:!0,scrollY:!1};r.Z.tv?l.size="fullscreen":l.size="small";var o=t.context;o.classList.add("hide"),o.innerHTML=s.ZP.translateHtml(m,"core"),o.querySelector(".formDialogHeader").classList.add("hide"),o.querySelector(".formDialogFooter").classList.add("hide"),o.querySelector(".formDialogContent").className="",o.querySelector(".dialogContentInner").className="",o.classList.remove("hide"),o.removeEventListener("change",C),o.addEventListener("change",C),i=o,g(o),S(o,e)}}},47249:function(e,n,t){var i=t(54933),l=t.n(i),a=t(93476),o=t.n(a)()(l());o.push([e.id,".recordingDialog-imageContainer{-webkit-flex-shrink:0;flex-shrink:0;padding:1em 1em 1em 0;width:25%}.recordingDialog-img{width:100%}.recordingDialog-itemName{margin-top:.7em}.recordingDetailsContainer{display:-webkit-flex;display:flex}.recordingDetails{-webkit-flex-grow:1;flex-grow:1}.recordingDetailText{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}",""]),n.Z=o},43734:function(e,n,t){var i=t(1892),l=t.n(i),a=t(95760),o=t.n(a),s=t(38311),r=t.n(s),c=t(58192),d=t.n(c),u=t(38060),p=t.n(u),m=t(54865),v=t.n(m),y=t(47249),b={};b.styleTagTransform=v(),b.setAttributes=d(),b.insert=r().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=p(),l()(y.Z,b),y.Z&&y.Z.locals&&y.Z.locals}}]);