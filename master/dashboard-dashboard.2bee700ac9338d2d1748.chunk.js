"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[27515],{93683:function(e,t,a){a(23938),a(61013),a(32081),a(98010),a(63238),a(40895),a(99785);var n=a(65009),s=a.n(n),r=a(81643),i=a(94994),o=a(72365),d=a(98283),l=a(44038),c=(a(38228),a(18613)),g=a(37099),u=a(15039),m=a(98555);function p(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t,a,n,r){null==n&&(n=parseInt(t.getAttribute("data-activitystartindex")||"0")),r=r||parseInt(t.getAttribute("data-activitylimit")||"7");var l=new Date,c=(0,m.s)(t.getAttribute("data-useractivity"),!0);c?l.setTime(l.getTime()-864e5):l.setTime(l.getTime()-6048e5),ApiClient.getJSON(ApiClient.getUrl("System/ActivityLog/Entries",{startIndex:n,limit:r,minDate:l.toISOString(),hasUserId:c})).then((function(l){if(t.setAttribute("data-activitystartindex",n),t.setAttribute("data-activitylimit",r),!n){var c=o.ZP.parentWithClass(t,"activityContainer");c&&(l.Items.length?c.classList.remove("hide"):c.classList.add("hide"))}e.items=l.Items,function(e,t,a){e.innerHTML=a.Items.map((function(e){return function(e,t){var a="";a+='<div class="listItem listItem-border">';var n="#00a4dc",r="notifications";return"Error"!=e.Severity&&"Fatal"!=e.Severity&&"Warn"!=e.Severity||(n="#cc0000",r="notification_important"),e.UserId&&e.UserPrimaryImageTag?a+='<span class="listItemIcon material-icons dvr" aria-hidden="true" style="width:2em!important;height:2em!important;padding:0;color:transparent;background-color:'+n+";background-image:url('"+t.getUserImageUrl(e.UserId,{type:"Primary",tag:e.UserPrimaryImageTag})+"');background-repeat:no-repeat;background-position:center center;background-size: cover;\"></span>":a+='<span class="listItemIcon material-icons '+r+'" aria-hidden="true" style="background-color:'+n+'"></span>',a+='<div class="listItemBody three-line">',a+='<div class="listItemBodyText">',a+=s()(e.Name),a+="</div>",a+='<div class="listItemBodyText secondary">',a+=(0,d.Z)(Date.parse(e.Date),Date.now(),{locale:(0,u.Kd)()}),a+="</div>",a+='<div class="listItemBodyText secondary listItemBodyText-nowrap">',a+=s()(e.ShortOverview||""),a+="</div>",a+="</div>",e.Overview&&(a+='<button type="button" is="paper-icon-button-light" class="btnEntryInfo" data-id="'.concat(e.Id,'" title="').concat(i.ZP.translate("Info"),'">\n                       <span class="material-icons info" aria-hidden="true"></span>\n                    </button>')),a+"</div>"}(e,t)})).join("")}(t,a,l)}))}function v(e,t){var a=this.options;a&&a.serverId===t.serverId()&&h(this,a.element,t)}function y(e){var t=o.ZP.parentWithClass(e.target,"btnEntryInfo");if(t){var a=t.getAttribute("data-id"),n=this.items;if(n){var s=n.filter((function(e){return e.Id.toString()===a}))[0];s&&function(e){(0,g.Z)({text:e.Overview})}(s)}}}var P=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=t;var a=t.element;a.classList.add("activityLogListWidget"),a.addEventListener("click",y.bind(this));var n=c.Z.getApiClient(t.serverId);h(this,a,n);var s=v.bind(this);this.updateFn=s,r.Z.on(l.default,"ActivityLogEntry",s),n.sendMessage("ActivityLogEntryStart","0,1500")}var t,a;return t=e,(a=[{key:"destroy",value:function(){var e=this.options;e&&(e.element.classList.remove("activityLogListWidget"),c.Z.getApiClient(e.serverId).sendMessage("ActivityLogEntryStop","0,1500"));var t=this.updateFn;t&&r.Z.off(l.default,"ActivityLogEntry",t),this.items=null,this.options=null}}])&&p(t.prototype,a),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.Z=P},77086:function(e,t,a){t.Z={getDisplayPlayMethod:function(e){return e.NowPlayingItem?e.TranscodingInfo&&e.TranscodingInfo.IsVideoDirect&&e.TranscodingInfo.IsAudioDirect?"Remux":e.TranscodingInfo&&e.TranscodingInfo.IsVideoDirect?"DirectStream":"Transcode"===e.PlayState.PlayMethod?"Transcode":"DirectStream"===e.PlayState.PlayMethod||"DirectPlay"===e.PlayState.PlayMethod?"DirectPlay":void 0:null}}},45124:function(e,t,a){a.r(t),a.d(t,{default:function(){return N}}),a(5769),a(63238),a(55849),a(61418),a(17460),a(14078),a(98010),a(76056),a(27471),a(23938);var n=a(65009),s=a.n(n),r=a(61693),i=a(81643),o=a(21776),d=a(44038),l=a(72365),c=a(94994),g=a(20990),u=a(15039),m=a(28540),p=a(77086),h=a(61570),v=a(98301),y=a(93683),P=a(51869),S=a(24102),f=(a(38228),a(82427),a(5607)),I=a(60635),b=a(18613),T=a(37099),C=a(3137);function Z(e,t){var a,n=[],s=p.Z.getDisplayPlayMethod(t);"Remux"===s?(a=c.ZP.translate("Remuxing"),n.push(c.ZP.translate("RemuxHelp1")),n.push("<br/>"),n.push(c.ZP.translate("RemuxHelp2"))):"DirectStream"===s?(a=c.ZP.translate("DirectStreaming"),n.push(c.ZP.translate("DirectStreamHelp1")),n.push("<br/>"),n.push(c.ZP.translate("DirectStreamHelp2"))):"DirectPlay"===s?(a=c.ZP.translate("DirectPlaying"),n.push(c.ZP.translate("DirectPlayHelp"))):"Transcode"===s&&(a=c.ZP.translate("Transcoding"),n.push(c.ZP.translate("MediaIsBeingConverted")),n.push(DashboardPage.getSessionNowPlayingStreamInfo(t)),t.TranscodingInfo&&t.TranscodingInfo.TranscodeReasons&&t.TranscodingInfo.TranscodeReasons.length&&(n.push("<br/>"),n.push(c.ZP.translate("LabelReasonForTranscoding")),t.TranscodingInfo.TranscodeReasons.forEach((function(e){n.push(c.ZP.translate(e))})))),(0,T.Z)({text:n.join("<br/>"),title:a})}function L(e,t){a.e(23690).then(a.bind(a,23690)).then((function(e){(0,e.default)({title:c.ZP.translate("HeaderSendMessage"),label:c.ZP.translate("LabelMessageText"),confirmText:c.ZP.translate("ButtonSend")}).then((function(e){e&&b.Z.getApiClient(t.ServerId).sendMessageCommand(t.Id,{Text:e,TimeoutMs:5e3})}))}))}function A(e){var t=l.ZP.parentWithClass(e.target,"sessionCardButton");if(t){var n=l.ZP.parentWithClass(t,"card");if(n){var s=n.id,r=(DashboardPage.sessionsList||[]).filter((function(e){return"session"+e.Id===s}))[0];r&&(t.classList.contains("btnCardOptions")?function(e,t){Promise.resolve().then(a.bind(a,12801)).then((function(a){var n=a.default,s=[];return t.ServerId&&t.DeviceId!==b.Z.deviceId()&&s.push({name:c.ZP.translate("SendMessage"),id:"sendmessage"}),t.TranscodingInfo&&t.TranscodingInfo.TranscodeReasons&&t.TranscodingInfo.TranscodeReasons.length&&s.push({name:c.ZP.translate("ViewPlaybackInfo"),id:"transcodinginfo"}),n.show({items:s,positionTo:e}).then((function(e){switch(e){case"sendmessage":L(0,t);break;case"transcodinginfo":Z(0,t)}}))}))}(t,r):t.classList.contains("btnSessionInfo")?Z(0,r):t.classList.contains("btnSessionSendMessage")?L(0,r):t.classList.contains("btnSessionStop")?b.Z.getApiClient(r.ServerId).sendPlayStateCommand(r.Id,"Stop"):t.classList.contains("btnSessionPlayPause")&&r.PlayState&&b.Z.getApiClient(r.ServerId).sendPlayStateCommand(r.Id,"PlayPause"))}}}function k(e,t){t.getSystemInfo().then((function(t){e.querySelector("#serverName").innerText=c.ZP.translate("DashboardServerName",t.ServerName),e.querySelector("#versionNumber").innerText=c.ZP.translate("DashboardVersionNumber",t.Version),e.querySelector("#operatingSystem").innerText=c.ZP.translate("DashboardOperatingSystem",t.OperatingSystem),e.querySelector("#architecture").innerText=c.ZP.translate("DashboardArchitecture",t.SystemArchitecture),t.CanSelfRestart?e.querySelector("#btnRestartServer").classList.remove("hide"):e.querySelector("#btnRestartServer").classList.add("hide"),e.querySelector("#cachePath").innerText=t.CachePath,e.querySelector("#logPath").innerText=t.LogPath,e.querySelector("#transcodePath").innerText=t.TranscodingTempPath,e.querySelector("#metadataPath").innerText=t.InternalMetadataPath,e.querySelector("#webPath").innerText=t.WebPath}))}function w(e,t){(function(e,t){var a="";DashboardPage.sessionsList=t;var n=e.querySelector(".activeDevices"),r=n.querySelector(".card");r&&r.classList.add("deadSession");for(var i=0,o=t.length;i<o;i++){var d=t[i],l="session"+d.Id,g=e.querySelector("#"+l);if(g)DashboardPage.updateSession(g,d);else{var u,m,p,v=d.NowPlayingItem,y=DashboardPage.getNowPlayingImageUrl(v);a+='<div class="scalableCard card activeSession backdropCard backdropCard-scalable" id="'+l+'">',a+='<div class="cardBox visualCardBox">',a+='<div class="cardScalable visualCardBox-cardScalable">',a+='<div class="cardPadder cardPadder-backdrop"></div>',a+='<div class="cardContent '.concat(h.default.getDefaultBackgroundClass(),'">'),y?(a+='<div class="sessionNowPlayingContent sessionNowPlayingContent-withbackground"',a+=' data-src="'+y+'" style="display:inline-block;background-image:url(\''+y+"');\"></div>"):a+='<div class="sessionNowPlayingContent"></div>',a+='<div class="sessionNowPlayingInnerContent '.concat(y?"darkenContent":"",'">'),a+='<div class="sessionAppInfo">';var P=DashboardPage.getClientImage(d);P&&(a+=P),a+='<div class="sessionAppName" style="display:inline-block; text-align:left;"  dir="ltr" >',a+='<div class="sessionDeviceName">'+s()(d.DeviceName)+"</div>",a+='<div class="sessionAppSecondaryText">'+s()(DashboardPage.getAppSecondaryText(d))+"</div>",a+="</div>",a+="</div>",a+='<div class="sessionNowPlayingDetails">';var f=DashboardPage.getNowPlayingName(d);a+='<div class="sessionNowPlayingInfo" data-imgsrc="'+f.image+'">',a+=f.html,a+="</div>",a+='<div class="sessionNowPlayingTime">'+s()(DashboardPage.getSessionNowPlayingTime(d))+"</div>",a+="</div>";var I=100*(null==d||null===(u=d.PlayState)||void 0===u?void 0:u.PositionTicks)/(null==v?void 0:v.RunTimeTicks);a+=S.ZP.getProgressHtml(I||0,{containerClass:"playbackProgress"}),I=null==d||null===(m=d.TranscodingInfo)||void 0===m||null===(p=m.CompletionPercentage)||void 0===p?void 0:p.toFixed(1),a+=S.ZP.getProgressHtml(I||0,{containerClass:"transcodingProgress"}),a+=S.ZP.getProgressHtml(100,{containerClass:"backgroundProgress"}),a+="</div>",a+="</div>",a+="</div>",a+='<div class="sessionCardFooter cardFooter">',a+='<div class="sessionCardButtons flex align-items-center justify-content-center">';var T=d.ServerId&&d.NowPlayingItem&&d.SupportsRemoteControl?"":" hide";a+='<button is="paper-icon-button-light" class="sessionCardButton btnSessionPlayPause paper-icon-button-light '+T+'"><span class="material-icons '+(d.PlayState.IsPaused?"pause":"play_arrow")+'" aria-hidden="true"></span></button>',a+='<button is="paper-icon-button-light" class="sessionCardButton btnSessionStop paper-icon-button-light '+T+'"><span class="material-icons stop" aria-hidden="true"></span></button>',a+='<button is="paper-icon-button-light" class="sessionCardButton btnSessionInfo paper-icon-button-light '+T+'" title="'+c.ZP.translate("ViewPlaybackInfo")+'"><span class="material-icons info" aria-hidden="true"></span></button>',a+='<button is="paper-icon-button-light" class="sessionCardButton btnSessionSendMessage paper-icon-button-light '+(T=d.ServerId&&-1!==d.SupportedCommands.indexOf("DisplayMessage")&&d.DeviceId!==b.Z.deviceId()?"":" hide")+'" title="'+c.ZP.translate("SendMessage")+'"><span class="material-icons message" aria-hidden="true"></span></button>',a+="</div>",a+='<div class="flex align-items-center justify-content-center">';var C=DashboardPage.getUserImage(d);a+=C?'<div class="activitylogUserPhoto" style="background-image:url(\''+C+"');\"></div>":'<div style="height:1.71em;"></div>',a+='<div class="sessionUserName">',a+=DashboardPage.getUsersHtml(d),a+="</div>",a+="</div>",a+="</div>",a+="</div>",a+="</div>"}}n.insertAdjacentHTML("beforeend",a);var Z=n.querySelector(".deadSession");Z&&Z.parentNode.removeChild(Z)})(e,t=function(e){for(var t=[],a=(new Date).getTime()-9e5,n=0,s=e.length;n<s;n++){var i=e[n];(i.NowPlayingItem||i.UserId)&&r.ZP.parseISO8601Date(i.LastActivityDate,!0).getTime()>=a&&t.push(i)}return t}(t)),m.ZP.hide()}function D(e,t){t.getSessions({ActiveWithinSeconds:960}).then((function(t){w(e,t)})),t.getScheduledTasks().then((function(t){x(e,t)}))}function x(e,t){var a="";t=t.filter((function(e){return"Idle"!=e.State&&!e.IsHidden})),t.length?e.querySelector(".runningTasksContainer").classList.remove("hide"):e.querySelector(".runningTasksContainer").classList.add("hide");for(var n=0,s=t.length;n<s;n++){var r=t[n];if(a+="<p>",a+=r.Name+"<br/>","Running"===r.State){var i=(r.CurrentProgressPercentage||0).toFixed(1);a+='<progress max="100" value="'+i+'" title="'+i+'%">',a+=i+"%",a+="</progress>",a+="<span style='color:#00a4dc;margin-left:5px;margin-right:5px;'>"+i+"%</span>",a+='<button type="button" is="paper-icon-button-light" title="'+c.ZP.translate("ButtonStop")+'" onclick="DashboardPage.stopTask(this, \''+r.Id+'\');" class="autoSize"><span class="material-icons cancel" aria-hidden="true"></span></button>'}else"Cancelling"===r.State&&(a+='<span style="color:#cc0000;">'+c.ZP.translate("LabelStopping")+"</span>");a+="</p>"}e.querySelector("#divRunningTasks").innerHTML=a}function N(e){function t(e,t){console.debug("onRestartRequired not implemented",e,t)}function a(e,t){console.debug("onServerShuttingDown not implemented",e,t)}function n(e,t){console.debug("onServerRestarting not implemented",e,t)}function s(t,a){a.serverId()===l&&(D(e,a),k(e,a))}function r(t,a,n){a.serverId()===l&&w(e,n)}function o(t,a,n){a.serverId()===l&&x(e,n)}var l=ApiClient.serverId();e.querySelector(".activeDevices").addEventListener("click",A),e.addEventListener("viewshow",(function(){var l=this,c=ApiClient;c&&(m.ZP.show(),D(l,c),DashboardPage.startInterval(c),i.Z.on(d.default,"RestartRequired",t),i.Z.on(d.default,"ServerShuttingDown",a),i.Z.on(d.default,"ServerRestarting",n),i.Z.on(d.default,"PackageInstalling",s),i.Z.on(d.default,"PackageInstallationCompleted",s),i.Z.on(d.default,"Sessions",r),i.Z.on(d.default,"ScheduledTasksInfo",o),DashboardPage.lastAppUpdateCheck=null,k(l,ApiClient),l.userActivityLog||(l.userActivityLog=new y.Z({serverId:ApiClient.serverId(),element:l.querySelector(".userActivityItems")})),l.serverActivityLog||(l.serverActivityLog=new y.Z({serverId:ApiClient.serverId(),element:l.querySelector(".serverActivityItems")})),function(e,t){t.getLiveTvRecordings({UserId:I.ZP.getCurrentUserId(),IsInProgress:!0,Fields:"CanDelete,PrimaryImageAspectRatio",EnableTotalRecordCount:!1,EnableImageTypes:"Primary,Thumb,Backdrop"}).then((function(t){var a=e.querySelector(".activeRecordingItems");if(!t.Items.length)return e.querySelector(".activeRecordingsSection").classList.add("hide"),void(a.innerHTML="");e.querySelector(".activeRecordingsSection").classList.remove("hide"),a.innerHTML=h.default.getCardsHtml({items:t.Items,shape:"auto",defaultShape:"backdrop",showTitle:!0,showParentTitle:!0,coverImage:!0,cardLayout:!1,centerText:!0,preferThumb:"auto",overlayText:!1,overlayMoreButton:!0,action:"none",centerPlayButton:!0}),v.default.lazyChildren(a)}))}(e,c),m.ZP.hide()),(0,f.Z)({mode:"on",taskKey:"RefreshLibrary",button:l.querySelector(".btnRefresh")})})),e.addEventListener("viewbeforehide",(function(){var e=ApiClient;i.Z.off(d.default,"RestartRequired",t),i.Z.off(d.default,"ServerShuttingDown",a),i.Z.off(d.default,"ServerRestarting",n),i.Z.off(d.default,"PackageInstalling",s),i.Z.off(d.default,"PackageInstallationCompleted",s),i.Z.off(d.default,"Sessions",r),i.Z.off(d.default,"ScheduledTasksInfo",o),e&&DashboardPage.stopInterval(e),(0,f.Z)({mode:"off",taskKey:"RefreshLibrary",button:this.querySelector(".btnRefresh")})})),e.addEventListener("viewdestroy",(function(){var e=this.userActivityLog;e&&e.destroy();var t=this.serverActivityLog;t&&t.destroy()}))}window.DashboardPage={startInterval:function(e){e.sendMessage("SessionsStart","0,1500"),e.sendMessage("ScheduledTasksInfoStart","0,1000")},stopInterval:function(e){e.sendMessage("SessionsStop"),e.sendMessage("ScheduledTasksInfoStop")},getSessionNowPlayingStreamInfo:function(e){var t="",a=!1,n=p.Z.getDisplayPlayMethod(e);if("DirectPlay"===n?t+=c.ZP.translate("DirectPlaying"):"Remux"===n?t+=c.ZP.translate("Remuxing"):"DirectStream"===n?t+=c.ZP.translate("DirectStreaming"):"Transcode"===n&&(e.TranscodingInfo&&e.TranscodingInfo.Framerate&&(t+="".concat(c.ZP.translate("Framerate"),": ").concat(e.TranscodingInfo.Framerate,"fps")),a=!0),a){var s=[];e.TranscodingInfo&&(e.TranscodingInfo.Bitrate&&(e.TranscodingInfo.Bitrate>1e6?s.push((e.TranscodingInfo.Bitrate/1e6).toFixed(1)+" Mbps"):s.push(Math.floor(e.TranscodingInfo.Bitrate/1e3)+" Kbps")),e.TranscodingInfo.Container&&s.push(e.TranscodingInfo.Container.toUpperCase()),e.TranscodingInfo.VideoCodec&&s.push(e.TranscodingInfo.VideoCodec.toUpperCase()),e.TranscodingInfo.AudioCodec&&e.TranscodingInfo.AudioCodec!=e.TranscodingInfo.Container&&s.push(e.TranscodingInfo.AudioCodec.toUpperCase())),s.length&&(t+="<br/><br/>"+s.join(" "))}return t},getSessionNowPlayingTime:function(e){var t=e.NowPlayingItem,a="";return t&&(e.PlayState.PositionTicks?a+=r.ZP.getDisplayRunningTime(e.PlayState.PositionTicks):a+="0:00",a+=" / ",t.RunTimeTicks?a+=r.ZP.getDisplayRunningTime(t.RunTimeTicks):a+="0:00"),a},getAppSecondaryText:function(e){return e.Client+" "+e.ApplicationVersion},getNowPlayingName:function(e){var t="",a=e.NowPlayingItem;if(!a)return{html:c.ZP.translate("LastSeen",(0,g.Z)(Date.parse(e.LastActivityDate),(0,u.LP)())),image:t};var n=s()(o.ZP.getDisplayName(a)),r="";return a.Artists&&a.Artists.length?(r=n,n=s()(a.Artists[0])):a.SeriesName||a.Album?(r=n,n=s()(a.SeriesName||a.Album)):a.ProductionYear&&(r=a.ProductionYear),a.ImageTags&&a.ImageTags.Logo?t=ApiClient.getScaledImageUrl(a.Id,{tag:a.ImageTags.Logo,maxHeight:24,maxWidth:130,type:"Logo"}):a.ParentLogoImageTag&&(t=ApiClient.getScaledImageUrl(a.ParentLogoItemId,{tag:a.ParentLogoImageTag,maxHeight:24,maxWidth:130,type:"Logo"})),t&&(n='<img src="'+t+'" style="max-height:24px;max-width:130px;" />'),{html:r?n+"<br/>"+r:n,image:t}},getUsersHtml:function(e){var t=[];e.UserId&&t.push(s()(e.UserName));for(var a=0,n=e.AdditionalUsers.length;a<n;a++)t.push(s()(e.AdditionalUsers[a].UserName));return t.join(", ")},getUserImage:function(e){return e.UserId&&e.UserPrimaryImageTag?ApiClient.getUserImageUrl(e.UserId,{tag:e.UserPrimaryImageTag,type:"Primary"}):null},updateSession:function(e,t){var a,n,s;e.classList.remove("deadSession");var r=t.NowPlayingItem;r?(e.classList.add("playingSession"),e.querySelector(".btnSessionInfo").classList.remove("hide")):(e.classList.remove("playingSession"),e.querySelector(".btnSessionInfo").classList.add("hide")),t.ServerId&&-1!==t.SupportedCommands.indexOf("DisplayMessage")?e.querySelector(".btnSessionSendMessage").classList.remove("hide"):e.querySelector(".btnSessionSendMessage").classList.add("hide");var i=e.querySelector(".btnSessionPlayPause");t.ServerId&&r&&t.SupportsRemoteControl?(i.classList.remove("hide"),e.querySelector(".btnSessionStop").classList.remove("hide")):(i.classList.add("hide"),e.querySelector(".btnSessionStop").classList.add("hide"));var o=i.querySelector(".material-icons");o.classList.remove("play_arrow","pause"),o.classList.add(t.PlayState&&t.PlayState.IsPaused?"play_arrow":"pause"),e.querySelector(".sessionNowPlayingTime").innerText=DashboardPage.getSessionNowPlayingTime(t),e.querySelector(".sessionUserName").innerHTML=DashboardPage.getUsersHtml(t),e.querySelector(".sessionAppSecondaryText").innerText=DashboardPage.getAppSecondaryText(t);var d=DashboardPage.getNowPlayingName(t),l=e.querySelector(".sessionNowPlayingInfo");d.image&&d.image==l.getAttribute("data-imgsrc")||(l.innerHTML=d.html,l.setAttribute("data-imgsrc",d.image||""));var c=e.querySelector(".playbackProgress"),g=e.querySelector(".transcodingProgress"),u=100*(null==t||null===(a=t.PlayState)||void 0===a?void 0:a.PositionTicks)/(null==r?void 0:r.RunTimeTicks);c.outerHTML=S.ZP.getProgressHtml(u||0,{containerClass:"playbackProgress"}),u=null==t||null===(n=t.TranscodingInfo)||void 0===n||null===(s=n.CompletionPercentage)||void 0===s?void 0:s.toFixed(1),g.outerHTML=S.ZP.getProgressHtml(u||0,{containerClass:"transcodingProgress"});var m=DashboardPage.getNowPlayingImageUrl(r)||"",p=e.querySelector(".sessionNowPlayingContent");m!=p.getAttribute("data-src")&&(p.style.backgroundImage=m?"url('"+m+"')":"",p.setAttribute("data-src",m),m?(p.classList.add("sessionNowPlayingContent-withbackground"),e.querySelector(".sessionNowPlayingInnerContent").classList.add("darkenContent")):(p.classList.remove("sessionNowPlayingContent-withbackground"),e.querySelector(".sessionNowPlayingInnerContent").classList.remove("darkenContent")))},getClientImage:function(e){return"<img src='"+P.ZP.getDeviceIcon(e)+"' />"},getNowPlayingImageUrl:function(e){if(e&&e.BackdropImageTags&&e.BackdropImageTags.length)return ApiClient.getScaledImageUrl(e.Id,{maxWidth:Math.round(.2*l.ZP.getScreenWidth()),type:"Backdrop",tag:e.BackdropImageTags[0]});if(e&&e.ParentBackdropImageTags&&e.ParentBackdropImageTags.length)return ApiClient.getScaledImageUrl(e.ParentBackdropItemId,{maxWidth:Math.round(.2*l.ZP.getScreenWidth()),type:"Backdrop",tag:e.ParentBackdropImageTags[0]});if(e&&e.BackdropImageTag)return ApiClient.getScaledImageUrl(e.BackdropItemId,{maxWidth:Math.round(.2*l.ZP.getScreenWidth()),type:"Backdrop",tag:e.BackdropImageTag});var t=(e||{}).ImageTags||{};return e&&t.Thumb?ApiClient.getScaledImageUrl(e.Id,{maxWidth:Math.round(.2*l.ZP.getScreenWidth()),type:"Thumb",tag:t.Thumb}):e&&e.ParentThumbImageTag?ApiClient.getScaledImageUrl(e.ParentThumbItemId,{maxWidth:Math.round(.2*l.ZP.getScreenWidth()),type:"Thumb",tag:e.ParentThumbImageTag}):e&&e.ThumbImageTag?ApiClient.getScaledImageUrl(e.ThumbItemId,{maxWidth:Math.round(.2*l.ZP.getScreenWidth()),type:"Thumb",tag:e.ThumbImageTag}):e&&t.Primary?ApiClient.getScaledImageUrl(e.Id,{maxWidth:Math.round(.2*l.ZP.getScreenWidth()),type:"Primary",tag:t.Primary}):e&&e.PrimaryImageTag?ApiClient.getScaledImageUrl(e.PrimaryImageItemId,{maxWidth:Math.round(.2*l.ZP.getScreenWidth()),type:"Primary",tag:e.PrimaryImageTag}):e&&e.AlbumPrimaryImageTag?ApiClient.getScaledImageUrl(e.AlbumId,{maxWidth:Math.round(.2*l.ZP.getScreenWidth()),type:"Primary",tag:e.AlbumPrimaryImageTag}):null},systemUpdateTaskKey:"SystemUpdateTask",stopTask:function(e,t){var a=l.ZP.parentWithClass(e,"page");ApiClient.stopScheduledTask(t).then((function(){D(a,ApiClient)}))},restart:function(e){(0,C.Z)({title:c.ZP.translate("Restart"),text:c.ZP.translate("MessageConfirmRestart"),confirmText:c.ZP.translate("Restart"),primary:"delete"}).then((function(){var t=l.ZP.parentWithClass(e,"page");t.querySelector("#btnRestartServer").disabled=!0,t.querySelector("#btnShutdown").disabled=!0,ApiClient.restartServer()}))},shutdown:function(e){(0,C.Z)({title:c.ZP.translate("ButtonShutdown"),text:c.ZP.translate("MessageConfirmShutdown"),confirmText:c.ZP.translate("ButtonShutdown"),primary:"delete"}).then((function(){var t=l.ZP.parentWithClass(e,"page");t.querySelector("#btnRestartServer").disabled=!0,t.querySelector("#btnShutdown").disabled=!0,ApiClient.shutdownServer()}))}}}}]);