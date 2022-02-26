"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2912],{52912:function(e,t,n){n.r(t),n.d(t,{default:function(){return R}}),n(5769),n(98010),n(63238),n(61013),n(58112),n(61418),n(17460),n(14078);var a=n(94389),i=n(90914),s=n(78695),l=n(44614),r=n(28978),o=n(56705),u=n(27515),d=n(83094),c=(n(20716),n(664),n(21865),n(6626),n(85427),n(1892)),m=n.n(c),b=n(95760),h=n.n(b),v=n(38311),g=n.n(v),p=n(58192),f=n.n(p),S=n(38060),y=n.n(S),I=n(54865),Z=n.n(I),L=n(13927),P={};P.styleTagTransform=Z(),P.setAttributes=f(),P.insert=g().bind(null,"head"),P.domAPI=h(),P.insertStyleElement=y(),m()(L.Z,P),L.Z&&L.Z.locals&&L.Z.locals,n(78066),n(15359);var C,D,q=n(53913),x=n(25152),w=n(56346);function T(e,t){var n="Items/"+C.Id+"/RemoteSearch/Subtitles/"+t,a=q.Z.getApiClient(C.ServerId);a.ajax({type:"POST",url:a.getUrl(n)}).then((function(){D=!0,(0,x.Z)(l.ZP.translate("MessageDownloadQueued")),u.Z.autoFocus(e)}))}function M(e,t,n){function a(t){C=t,function(e,t){var n=(t.MediaStreams||[]).filter((function(e){return"Subtitle"===e.Type})),a="";n.length&&(a+="<h2>"+l.ZP.translate("MySubtitles")+"</h2>",a+="<div>",a+=n.map((function(e){var t="",n=s.Z.tv?"button":"div",a=s.Z.tv&&e.Path?"listItem listItem-border btnDelete":"listItem listItem-border";return s.Z.tv&&(a+=" listItem-focusscale listItem-button"),t+="<"+n+' class="'+(a+=" listItem-noborder")+'" data-index="'+e.Index+'">',t+='<span class="listItemIcon material-icons closed_caption" aria-hidden="true"></span>',t+='<div class="listItemBody two-line">',t+="<div>",t+=e.DisplayTitle||"",t+="</div>",e.Path&&(t+='<div class="secondary listItemBodyText">'+e.Path+"</div>"),t+="</a>",t+="</div>",s.Z.tv||e.Path&&(t+='<button is="paper-icon-button-light" data-index="'+e.Index+'" title="'+l.ZP.translate("Delete")+'" class="btnDelete listItemButton"><span class="material-icons delete" aria-hidden="true"></span></button>'),t+"</"+n+">"})).join(""),a+="</div>");var i=e.querySelector(".subtitleList");n.length?i.classList.remove("hide"):i.classList.add("hide"),i.innerHTML=a}(e,t);var n=t.Path||"",a=Math.max(n.lastIndexOf("/"),n.lastIndexOf("\\"));a>-1&&(n=n.substring(a+1)),n?(e.querySelector(".pathValue").innerHTML=n,e.querySelector(".originalFile").classList.remove("hide")):(e.querySelector(".pathValue").innerHTML="",e.querySelector(".originalFile").classList.add("hide")),o.ZP.hide()}e.querySelector(".noSearchResults").classList.add("hide"),"string"==typeof n?t.getItem(t.getCurrentUserId(),n).then(a):a(n)}function H(e){var t=this,n=t.querySelector("#selectLanguage",t).value;return function(e,t){r.set("subtitleeditor-language",t),o.ZP.show();var n=q.Z.getApiClient(C.ServerId),a=n.getUrl("Items/"+C.Id+"/RemoteSearch/Subtitles/"+t);n.getJSON(a).then((function(t){!function(e,t){var n="",a="";if(!t.length)return e.querySelector(".noSearchResults").classList.remove("hide"),e.querySelector(".subtitleResults").innerHTML="",void o.ZP.hide();e.querySelector(".noSearchResults").classList.add("hide");for(var i=0,r=t.length;i<r;i++){var u=t[i],d=u.ProviderName;d!==n&&(i>0&&(a+="</div>"),a+="<h2>"+d+"</h2>",a+="<div>",n=d);var c=s.Z.tv?"button":"div",m=s.Z.tv?"listItem listItem-border btnOptions":"listItem listItem-border";s.Z.tv&&(m+=" listItem-focusscale listItem-button"),a+="<"+c+' class="'+m+'" data-subid="'+u.Id+'">',a+='<span class="listItemIcon material-icons closed_caption" aria-hidden="true"></span>',a+='<div class="listItemBody '+(u.Comment||u.IsHashMatch?"three-line":"two-line")+'">',a+="<div>"+u.Name+"</div>",a+='<div class="secondary listItemBodyText">',u.Format&&(a+='<span style="margin-right:1em;">'+l.ZP.translate("FormatValue",u.Format)+"</span>"),null!=u.DownloadCount&&(a+="<span>"+l.ZP.translate("DownloadsValue",u.DownloadCount)+"</span>"),a+="</div>",u.Comment&&(a+='<div class="secondary listItemBodyText">'+u.Comment+"</div>"),u.IsHashMatch&&(a+='<div class="secondary listItemBodyText"><div class="inline-flex align-items-center justify-content-center" style="background:#3388cc;color:#fff;padding: .3em 1em;border-radius:1000em;">'+l.ZP.translate("PerfectMatch")+"</div></div>"),a+="</div>",s.Z.tv||(a+='<button type="button" is="paper-icon-button-light" data-subid="'+u.Id+'" class="btnDownload listItemButton"><span class="material-icons file_download" aria-hidden="true"></span></button>'),a+="</"+c+">"}t.length&&(a+="</div>"),e.querySelector(".subtitleResults").innerHTML=a,o.ZP.hide()}(e,t)}))}(d.ZP.parentWithClass(t,"formDialogContent"),n),e.preventDefault(),!1}function k(e){var t=d.ZP.parentWithClass(e.target,"btnDelete");if(t){var n=t.getAttribute("data-index");!function(e,t){var n=l.ZP.translate("MessageAreYouSureDeleteSubtitles");(0,w.Z)({title:l.ZP.translate("ConfirmDeletion"),text:n,confirmText:l.ZP.translate("Delete"),primary:"delete"}).then((function(){o.ZP.show();var n=C.Id,a="Videos/"+n+"/Subtitles/"+t,i=q.Z.getApiClient(C.ServerId);i.ajax({type:"DELETE",url:i.getUrl(a)}).then((function(){D=!0,M(e,i,n)}))}))}(d.ZP.parentWithClass(t,"subtitleEditorDialog"),n)}}function F(e){var t,a=d.ZP.parentWithClass(e.target,"btnOptions");a&&(t=a.getAttribute("data-subid"),function(e,t,a){var i=[];i.push({name:l.ZP.translate("Download"),id:"download"}),Promise.resolve().then(n.bind(n,78407)).then((function(n){n.show({items:i,positionTo:e}).then((function(e){"download"===e&&T(t,a)}))}))}(a,d.ZP.parentWithClass(a,"subtitleEditorDialog"),t));var i=d.ZP.parentWithClass(e.target,"btnDownload");i&&(t=i.getAttribute("data-subid"),T(d.ZP.parentWithClass(i,"subtitleEditorDialog"),t))}function E(e,t,a){Promise.resolve().then(n.bind(n,74227)).then((function(n){var i=n.default,s=a?"on":"off";i.centerFocus[s](e,t)}))}function A(e){var t=d.ZP.parentWithClass(e.target,"subtitleEditorDialog"),a=t.querySelector("#selectLanguage"),i=q.Z.getApiClient(C.ServerId);Promise.all([n.e(3800),n.e(3052)]).then(n.bind(n,93052)).then((function(e){e.default.show({languages:{list:a.innerHTML,value:a.value},itemId:C.Id,serverId:C.ServerId}).then((function(e){e&&(D=!0,M(t,i,C.Id))}))}))}var R={show:function(e,t){return o.ZP.show(),function(e,t){D=!1;var n=q.Z.getApiClient(t);return n.getItem(n.getCurrentUserId(),e).then((function(e){var t={removeOnClose:!0,scrollY:!1};s.Z.tv?t.size="fullscreen":t.size="small";var o=i.default.createDialog(t);o.classList.add("formDialog"),o.classList.add("subtitleEditorDialog"),o.innerHTML=l.ZP.translateHtml('<div class="formDialogHeader"> <button is="paper-icon-button-light" class="btnCancel autoSize" tabindex="-1"><span class="material-icons arrow_back" aria-hidden="true"></span></button> <h3 class="formDialogHeaderTitle">${Subtitles}</h3> <a is="emby-linkbutton" rel="noopener noreferrer" data-autohide="true" class="button-link btnHelp flex align-items-center" href="https://docs.jellyfin.org/general/server/media/subtitles.html" target="_blank" style="margin-left:auto;margin-right:.5em;padding:.25em" title="${Help}"><span class="material-icons info" aria-hidden="true"></span><span style="margin-left:.25em">${Help}</span></a> </div> <div class="formDialogContent smoothScrollY"> <div class="dialogContentInner dialog-content-centered"> <div class="subtitleList" style="margin-bottom:2em"></div> <h2>${SearchForSubtitles}</h2> <p style="margin:1.5em 0" class="originalFile"><span class="originalSubtitleFileLabel secondaryText"></span><span class="pathValue"></span></p> <form class="subtitleSearchForm" style="max-width:none"> <div class="flex align-items-center"> <div class="selectContainer flex-grow" style="margin-bottom:0"> <select is="emby-select" id="selectLanguage" required="required" label="${LabelLanguage}" autofocus></select> </div> <button type="submit" is="paper-icon-button-light" title="${Search}" class="btnSearchSubtitles flex-shrink-zero emby-select-iconbutton"><span class="material-icons search" aria-hidden="true"></span></button> <button type="button" is="paper-icon-button-light" title="${Upload}" class="btnOpenUploadMenu flex-shrink-zero emby-select-iconbutton"><span class="material-icons add" aria-hidden="true"></span></button> </div> <button is="emby-button" type="submit" class="raised btnSubmit block button-submit">${Search}</button> </form> <br/> <div class="subtitleResults"></div> <div class="noSearchResults hide"> ${NoSubtitleSearchResultsFound} </div> </div> </div> ',"core"),o.querySelector(".originalSubtitleFileLabel").innerHTML=l.ZP.translate("File"),o.querySelector(".subtitleSearchForm").addEventListener("submit",H),o.querySelector(".btnOpenUploadMenu").addEventListener("click",A);var u=o.querySelector(".btnSubmit");s.Z.tv?(E(o.querySelector(".formDialogContent"),!1,!0),o.querySelector(".btnSearchSubtitles").classList.add("hide")):u.classList.add("hide"),!s.Z.tv&&a.M.supports("externallinks")||o.querySelector(".btnHelp").remove();var d=o.querySelector(".formDialogContent");return o.querySelector(".subtitleList").addEventListener("click",k),o.querySelector(".subtitleResults").addEventListener("click",F),n.getCultures().then((function(e){!function(e,t,n){var a=e.querySelector("#selectLanguage");a.innerHTML=n.map((function(e){return'<option value="'+e.ThreeLetterISOLanguageName+'">'+e.DisplayName+"</option>"}));var i=r.get("subtitleeditor-language");i?a.value=i:t.getCurrentUser().then((function(e){var t=e.Configuration.SubtitleLanguagePreference;t&&(a.value=t)}))}(d,n,e)})),o.querySelector(".btnCancel").addEventListener("click",(function(){i.default.close(o)})),new Promise((function(t,a){o.addEventListener("close",(function(){s.Z.tv&&E(o.querySelector(".formDialogContent"),!1,!1),D?t():a()})),i.default.open(o),M(d,n,e)}))}))}(e,t)}}},13927:function(e,t,n){var a=n(54933),i=n.n(a),s=n(93476),l=n.n(s)()(i());l.push([e.id,".originalSubtitleFileLabel{margin-right:1em}",""]),t.Z=l}}]);