"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[27515,53152],{93683:function(e,t,a){a(23938),a(61013),a(32081),a(98010),a(63238),a(40895),a(19068),a(87211),a(25901),a(92189),a(95163),a(99785),a(91047),a(5769),a(17460),a(14078);var n=a(65009),i=a.n(n),r=a(81643),s=a(94994),o=a(72365),l=a(98283),d=a(44038),c=(a(38228),a(18613)),u=a(37099),g=a(15039),m=a(98555);function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function f(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==h(e)||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,t);if("object"!==h(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key,"string"),"symbol"===h(i)?i:String(i)),n)}var i}function v(e,t,a,n,r){null==n&&(n=parseInt(t.getAttribute("data-activitystartindex")||"0",10)),r=r||parseInt(t.getAttribute("data-activitylimit")||"7",10);var d=new Date,c=(0,m.s)(t.getAttribute("data-useractivity"),!0);c?d.setTime(d.getTime()-864e5):d.setTime(d.getTime()-6048e5),ApiClient.getJSON(ApiClient.getUrl("System/ActivityLog/Entries",{startIndex:n,limit:r,minDate:d.toISOString(),hasUserId:c})).then((function(d){if(t.setAttribute("data-activitystartindex",n),t.setAttribute("data-activitylimit",r),!n){var c=o.ZP.parentWithClass(t,"activityContainer");c&&(d.Items.length?c.classList.remove("hide"):c.classList.add("hide"))}e.items=d.Items,function(e,t,a){e.innerHTML=a.Items.map((function(e){return function(e,t){var a="";a+='<div class="listItem listItem-border">';var n="#00a4dc",r="notifications";return"Error"!=e.Severity&&"Fatal"!=e.Severity&&"Warn"!=e.Severity||(n="#cc0000",r="notification_important"),e.UserId&&e.UserPrimaryImageTag?a+='<span class="listItemIcon material-icons dvr" aria-hidden="true" style="width:2em!important;height:2em!important;padding:0;color:transparent;background-color:'+n+";background-image:url('"+t.getUserImageUrl(e.UserId,{type:"Primary",tag:e.UserPrimaryImageTag})+"');background-repeat:no-repeat;background-position:center center;background-size: cover;\"></span>":a+='<span class="listItemIcon material-icons '+r+'" aria-hidden="true" style="background-color:'+n+'"></span>',a+='<div class="listItemBody three-line">',a+='<div class="listItemBodyText">',a+=i()(e.Name),a+="</div>",a+='<div class="listItemBodyText secondary">',a+=(0,l.Z)(Date.parse(e.Date),Date.now(),{locale:(0,g.Kd)()}),a+="</div>",a+='<div class="listItemBodyText secondary listItemBodyText-nowrap">',a+=i()(e.ShortOverview||""),a+="</div>",a+="</div>",e.Overview&&(a+='<button type="button" is="paper-icon-button-light" class="btnEntryInfo" data-id="'.concat(e.Id,'" title="').concat(s.ZP.translate("Info"),'">\n                       <span class="material-icons info" aria-hidden="true"></span>\n                    </button>')),a+"</div>"}(e,t)})).join("")}(t,a,d)}))}function p(e,t){var a=this.options;a&&a.serverId===t.serverId()&&v(this,a.element,t)}function y(e){var t=o.ZP.parentWithClass(e.target,"btnEntryInfo");if(t){var a=t.getAttribute("data-id"),n=this.items;if(n){var i=n.filter((function(e){return e.Id.toString()===a}))[0];i&&function(e){(0,u.Z)({text:e.Overview})}(i)}}}var P=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=t;var a=t.element;a.classList.add("activityLogListWidget"),a.addEventListener("click",y.bind(this));var n=c.Z.getApiClient(t.serverId);v(this,a,n);var i=p.bind(this);this.updateFn=i,r.Z.on(d.default,"ActivityLogEntry",i),n.sendMessage("ActivityLogEntryStart","0,1500")}var t,a;return t=e,(a=[{key:"destroy",value:function(){var e=this.options;e&&(e.element.classList.remove("activityLogListWidget"),c.Z.getApiClient(e.serverId).sendMessage("ActivityLogEntryStop","0,1500"));var t=this.updateFn;t&&r.Z.off(d.default,"ActivityLogEntry",t),this.items=null,this.options=null}}])&&f(t.prototype,a),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.Z=P},77086:function(e,t,a){t.Z={getDisplayPlayMethod:function(e){return e.NowPlayingItem?e.TranscodingInfo&&e.TranscodingInfo.IsVideoDirect&&e.TranscodingInfo.IsAudioDirect?"Remux":e.TranscodingInfo&&e.TranscodingInfo.IsVideoDirect?"DirectStream":"Transcode"===e.PlayState.PlayMethod?"Transcode":"DirectStream"===e.PlayState.PlayMethod||"DirectPlay"===e.PlayState.PlayMethod?"DirectPlay":void 0:null}}},45124:function(e,t,a){a.r(t),a.d(t,{default:function(){return R}}),a(5769),a(63238),a(55849),a(61418),a(17460),a(14078),a(98010),a(76056),a(27471),a(23938);var n=a(65009),i=a.n(n),r=a(61693),s=a(81643),o=a(21776),l=a(44038),d=a(72365),c=a(94994),u=a(20990),g=a(15039),m=a(28540),h=a(77086),f=a(61570),v=a(98301),p=a(93683),y=a(51869),P=a(24102),I=(a(38228),a(82427),a(5607)),b=a(60635),S=a(18613),T=a(37099),C=a(3137);function Z(e,t){var a,n=[],i=h.Z.getDisplayPlayMethod(t);"Remux"===i?(a=c.ZP.translate("Remuxing"),n.push(c.ZP.translate("RemuxHelp1")),n.push("<br/>"),n.push(c.ZP.translate("RemuxHelp2"))):"DirectStream"===i?(a=c.ZP.translate("DirectStreaming"),n.push(c.ZP.translate("DirectStreamHelp1")),n.push("<br/>"),n.push(c.ZP.translate("DirectStreamHelp2"))):"DirectPlay"===i?(a=c.ZP.translate("DirectPlaying"),n.push(c.ZP.translate("DirectPlayHelp"))):"Transcode"===i&&(a=c.ZP.translate("Transcoding"),n.push(c.ZP.translate("MediaIsBeingConverted")),n.push(DashboardPage.getSessionNowPlayingStreamInfo(t)),t.TranscodingInfo&&t.TranscodingInfo.TranscodeReasons&&t.TranscodingInfo.TranscodeReasons.length&&(n.push("<br/>"),n.push(c.ZP.translate("LabelReasonForTranscoding")),t.TranscodingInfo.TranscodeReasons.forEach((function(e){n.push(c.ZP.translate(e))})))),(0,T.Z)({text:n.join("<br/>"),title:a})}function k(e,t){a.e(23690).then(a.bind(a,23690)).then((function(e){(0,e.default)({title:c.ZP.translate("HeaderSendMessage"),label:c.ZP.translate("LabelMessageText"),confirmText:c.ZP.translate("ButtonSend")}).then((function(e){e&&S.Z.getApiClient(t.ServerId).sendMessageCommand(t.Id,{Text:e,TimeoutMs:5e3})}))}))}function L(e){var t=d.ZP.parentWithClass(e.target,"sessionCardButton");if(t){var n=d.ZP.parentWithClass(t,"card");if(n){var i=n.id,r=(DashboardPage.sessionsList||[]).filter((function(e){return"session"+e.Id===i}))[0];r&&(t.classList.contains("btnCardOptions")?function(e,t){a.e(12801).then(a.bind(a,12801)).then((function(a){var n=a.default,i=[];return t.ServerId&&t.DeviceId!==S.Z.deviceId()&&i.push({name:c.ZP.translate("SendMessage"),id:"sendmessage"}),t.TranscodingInfo&&t.TranscodingInfo.TranscodeReasons&&t.TranscodingInfo.TranscodeReasons.length&&i.push({name:c.ZP.translate("ViewPlaybackInfo"),id:"transcodinginfo"}),n.show({items:i,positionTo:e}).then((function(e){switch(e){case"sendmessage":k(0,t);break;case"transcodinginfo":Z(0,t)}}))}))}(t,r):t.classList.contains("btnSessionInfo")?Z(0,r):t.classList.contains("btnSessionSendMessage")?k(0,r):t.classList.contains("btnSessionStop")?S.Z.getApiClient(r.ServerId).sendPlayStateCommand(r.Id,"Stop"):t.classList.contains("btnSessionPlayPause")&&r.PlayState&&S.Z.getApiClient(r.ServerId).sendPlayStateCommand(r.Id,"PlayPause"))}}}function A(e,t){t.getSystemInfo().then((function(t){e.querySelector("#serverName").innerText=c.ZP.translate("DashboardServerName",t.ServerName),e.querySelector("#versionNumber").innerText=c.ZP.translate("DashboardVersionNumber",t.Version),t.CanSelfRestart?e.querySelector("#btnRestartServer").classList.remove("hide"):e.querySelector("#btnRestartServer").classList.add("hide"),e.querySelector("#cachePath").innerText=t.CachePath,e.querySelector("#logPath").innerText=t.LogPath,e.querySelector("#transcodePath").innerText=t.TranscodingTempPath,e.querySelector("#metadataPath").innerText=t.InternalMetadataPath,e.querySelector("#webPath").innerText=t.WebPath}))}function x(e,t){(function(e,t){var a="";DashboardPage.sessionsList=t;var n=e.querySelector(".activeDevices"),r=n.querySelector(".card");r&&r.classList.add("deadSession");for(var s=0,o=t.length;s<o;s++){var l=t[s],d="session"+l.Id,u=e.querySelector("#"+d);if(u)DashboardPage.updateSession(u,l);else{var g,m,h,v=l.NowPlayingItem,p=DashboardPage.getNowPlayingImageUrl(v);a+='<div class="scalableCard card activeSession backdropCard backdropCard-scalable" id="'+d+'">',a+='<div class="cardBox visualCardBox">',a+='<div class="cardScalable visualCardBox-cardScalable">',a+='<div class="cardPadder cardPadder-backdrop"></div>',a+='<div class="cardContent '.concat(f.default.getDefaultBackgroundClass(),'">'),p?(a+='<div class="sessionNowPlayingContent sessionNowPlayingContent-withbackground"',a+=' data-src="'+p+'" style="display:inline-block;background-image:url(\''+p+"');\"></div>"):a+='<div class="sessionNowPlayingContent"></div>',a+='<div class="sessionNowPlayingInnerContent '.concat(p?"darkenContent":"",'">'),a+='<div class="sessionAppInfo">';var y=DashboardPage.getClientImage(l);y&&(a+=y),a+='<div class="sessionAppName" style="display:inline-block; text-align:left;"  dir="ltr" >',a+='<div class="sessionDeviceName">'+i()(l.DeviceName)+"</div>",a+='<div class="sessionAppSecondaryText">'+i()(DashboardPage.getAppSecondaryText(l))+"</div>",a+="</div>",a+="</div>",a+='<div class="sessionNowPlayingDetails">';var I=DashboardPage.getNowPlayingName(l);a+='<div class="sessionNowPlayingInfo" data-imgsrc="'+I.image+'">',a+='<span class="sessionNowPlayingName">'+I.html+"</span>",a+="</div>",a+='<div class="sessionNowPlayingTime">'+i()(DashboardPage.getSessionNowPlayingTime(l))+"</div>",a+="</div>";var b=100*(null==l||null===(g=l.PlayState)||void 0===g?void 0:g.PositionTicks)/(null==v?void 0:v.RunTimeTicks);a+=P.ZP.getProgressHtml(b||0,{containerClass:"playbackProgress"}),b=null==l||null===(m=l.TranscodingInfo)||void 0===m||null===(h=m.CompletionPercentage)||void 0===h?void 0:h.toFixed(1),a+=P.ZP.getProgressHtml(b||0,{containerClass:"transcodingProgress"}),a+=P.ZP.getProgressHtml(100,{containerClass:"backgroundProgress"}),a+="</div>",a+="</div>",a+="</div>",a+='<div class="sessionCardFooter cardFooter">',a+='<div class="sessionCardButtons flex align-items-center justify-content-center">';var T=l.ServerId&&l.NowPlayingItem&&l.SupportsRemoteControl?"":" hide";a+='<button is="paper-icon-button-light" class="sessionCardButton btnSessionPlayPause paper-icon-button-light '+T+'"><span class="material-icons '+(l.PlayState.IsPaused?"pause":"play_arrow")+'" aria-hidden="true"></span></button>',a+='<button is="paper-icon-button-light" class="sessionCardButton btnSessionStop paper-icon-button-light '+T+'"><span class="material-icons stop" aria-hidden="true"></span></button>',a+='<button is="paper-icon-button-light" class="sessionCardButton btnSessionInfo paper-icon-button-light '+T+'" title="'+c.ZP.translate("ViewPlaybackInfo")+'"><span class="material-icons info" aria-hidden="true"></span></button>',a+='<button is="paper-icon-button-light" class="sessionCardButton btnSessionSendMessage paper-icon-button-light '+(T=l.ServerId&&-1!==l.SupportedCommands.indexOf("DisplayMessage")&&l.DeviceId!==S.Z.deviceId()?"":" hide")+'" title="'+c.ZP.translate("SendMessage")+'"><span class="material-icons message" aria-hidden="true"></span></button>',a+="</div>",a+='<div class="flex align-items-center justify-content-center">';var C=DashboardPage.getUserImage(l);a+=C?'<div class="activitylogUserPhoto" style="background-image:url(\''+C+"');\"></div>":'<div style="height:1.71em;"></div>',a+='<div class="sessionUserName">',a+=DashboardPage.getUsersHtml(l),a+="</div>",a+="</div>",a+="</div>",a+="</div>",a+="</div>"}}n.insertAdjacentHTML("beforeend",a);var Z=n.querySelector(".deadSession");Z&&Z.parentNode.removeChild(Z)})(e,t=function(e){for(var t=[],a=(new Date).getTime()-9e5,n=0,i=e.length;n<i;n++){var s=e[n];(s.NowPlayingItem||s.UserId)&&r.ZP.parseISO8601Date(s.LastActivityDate,!0).getTime()>=a&&t.push(s)}return t}(t)),m.ZP.hide()}function w(e,t){t.getSessions({ActiveWithinSeconds:960}).then((function(t){x(e,t)})),t.getScheduledTasks().then((function(t){D(e,t)}))}function D(e,t){var a="";t=t.filter((function(e){return"Idle"!=e.State&&!e.IsHidden})),t.length?e.querySelector(".runningTasksContainer").classList.remove("hide"):e.querySelector(".runningTasksContainer").classList.add("hide");for(var n=0,i=t.length;n<i;n++){var r=t[n];if(a+="<p>",a+=r.Name+"<br/>","Running"===r.State){var s=(r.CurrentProgressPercentage||0).toFixed(1);a+='<progress max="100" value="'+s+'" title="'+s+'%">',a+=s+"%",a+="</progress>",a+="<span style='color:#00a4dc;margin-left:5px;margin-right:5px;'>"+s+"%</span>",a+='<button type="button" is="paper-icon-button-light" title="'+c.ZP.translate("ButtonStop")+'" onclick="DashboardPage.stopTask(this, \''+r.Id+'\');" class="autoSize"><span class="material-icons cancel" aria-hidden="true"></span></button>'}else"Cancelling"===r.State&&(a+='<span style="color:#cc0000;">'+c.ZP.translate("LabelStopping")+"</span>");a+="</p>"}e.querySelector("#divRunningTasks").innerHTML=a}function R(e){function t(e,t){console.debug("onRestartRequired not implemented",e,t)}function a(e,t){console.debug("onServerShuttingDown not implemented",e,t)}function n(e,t){console.debug("onServerRestarting not implemented",e,t)}function i(t,a){a.serverId()===d&&(w(e,a),A(e,a))}function r(t,a,n){a.serverId()===d&&x(e,n)}function o(t,a,n){a.serverId()===d&&D(e,n)}var d=ApiClient.serverId();e.querySelector(".activeDevices").addEventListener("click",L),e.addEventListener("viewshow",(function(){var d=this,c=ApiClient;c&&(m.ZP.show(),w(d,c),DashboardPage.startInterval(c),s.Z.on(l.default,"RestartRequired",t),s.Z.on(l.default,"ServerShuttingDown",a),s.Z.on(l.default,"ServerRestarting",n),s.Z.on(l.default,"PackageInstalling",i),s.Z.on(l.default,"PackageInstallationCompleted",i),s.Z.on(l.default,"Sessions",r),s.Z.on(l.default,"ScheduledTasksInfo",o),DashboardPage.lastAppUpdateCheck=null,A(d,ApiClient),d.userActivityLog||(d.userActivityLog=new p.Z({serverId:ApiClient.serverId(),element:d.querySelector(".userActivityItems")})),d.serverActivityLog||(d.serverActivityLog=new p.Z({serverId:ApiClient.serverId(),element:d.querySelector(".serverActivityItems")})),function(e,t){t.getLiveTvRecordings({UserId:b.default.getCurrentUserId(),IsInProgress:!0,Fields:"CanDelete,PrimaryImageAspectRatio",EnableTotalRecordCount:!1,EnableImageTypes:"Primary,Thumb,Backdrop"}).then((function(t){var a=e.querySelector(".activeRecordingItems");if(!t.Items.length)return e.querySelector(".activeRecordingsSection").classList.add("hide"),void(a.innerHTML="");e.querySelector(".activeRecordingsSection").classList.remove("hide"),a.innerHTML=f.default.getCardsHtml({items:t.Items,shape:"auto",defaultShape:"backdrop",showTitle:!0,showParentTitle:!0,coverImage:!0,cardLayout:!1,centerText:!0,preferThumb:"auto",overlayText:!1,overlayMoreButton:!0,action:"none",centerPlayButton:!0}),v.default.lazyChildren(a)}))}(e,c),m.ZP.hide()),(0,I.Z)({mode:"on",taskKey:"RefreshLibrary",button:d.querySelector(".btnRefresh")})})),e.addEventListener("viewbeforehide",(function(){var e=ApiClient;s.Z.off(l.default,"RestartRequired",t),s.Z.off(l.default,"ServerShuttingDown",a),s.Z.off(l.default,"ServerRestarting",n),s.Z.off(l.default,"PackageInstalling",i),s.Z.off(l.default,"PackageInstallationCompleted",i),s.Z.off(l.default,"Sessions",r),s.Z.off(l.default,"ScheduledTasksInfo",o),e&&DashboardPage.stopInterval(e),(0,I.Z)({mode:"off",taskKey:"RefreshLibrary",button:this.querySelector(".btnRefresh")})})),e.addEventListener("viewdestroy",(function(){var e=this.userActivityLog;e&&e.destroy();var t=this.serverActivityLog;t&&t.destroy()}))}window.DashboardPage={startInterval:function(e){e.sendMessage("SessionsStart","0,1500"),e.sendMessage("ScheduledTasksInfoStart","0,1000")},stopInterval:function(e){e.sendMessage("SessionsStop"),e.sendMessage("ScheduledTasksInfoStop")},getSessionNowPlayingStreamInfo:function(e){var t="",a=!1,n=h.Z.getDisplayPlayMethod(e);if("DirectPlay"===n?t+=c.ZP.translate("DirectPlaying"):"Remux"===n?t+=c.ZP.translate("Remuxing"):"DirectStream"===n?t+=c.ZP.translate("DirectStreaming"):"Transcode"===n&&(e.TranscodingInfo&&e.TranscodingInfo.Framerate&&(t+="".concat(c.ZP.translate("Framerate"),": ").concat(e.TranscodingInfo.Framerate,"fps")),a=!0),a){var i=[];e.TranscodingInfo&&(e.TranscodingInfo.Bitrate&&(e.TranscodingInfo.Bitrate>1e6?i.push((e.TranscodingInfo.Bitrate/1e6).toFixed(1)+" Mbps"):i.push(Math.floor(e.TranscodingInfo.Bitrate/1e3)+" Kbps")),e.TranscodingInfo.Container&&i.push(e.TranscodingInfo.Container.toUpperCase()),e.TranscodingInfo.VideoCodec&&i.push(e.TranscodingInfo.VideoCodec.toUpperCase()),e.TranscodingInfo.AudioCodec&&e.TranscodingInfo.AudioCodec!=e.TranscodingInfo.Container&&i.push(e.TranscodingInfo.AudioCodec.toUpperCase())),i.length&&(t+="<br/><br/>"+i.join(" "))}return t},getSessionNowPlayingTime:function(e){var t=e.NowPlayingItem,a="";return t&&(e.PlayState.PositionTicks?a+=r.ZP.getDisplayRunningTime(e.PlayState.PositionTicks):a+="0:00",a+=" / ",t.RunTimeTicks?a+=r.ZP.getDisplayRunningTime(t.RunTimeTicks):a+="0:00"),a},getAppSecondaryText:function(e){return e.Client+" "+e.ApplicationVersion},getNowPlayingName:function(e){var t="",a=e.NowPlayingItem;if(!a)return{html:c.ZP.translate("LastSeen",(0,u.Z)(Date.parse(e.LastActivityDate),(0,g.LP)())),image:t};var n=i()(o.ZP.getDisplayName(a)),r="";return a.Artists&&a.Artists.length?(r=n,n=i()(a.Artists[0])):a.SeriesName||a.Album?(r=n,n=i()(a.SeriesName||a.Album)):a.ProductionYear&&(r=a.ProductionYear),a.ImageTags&&a.ImageTags.Logo?t=ApiClient.getScaledImageUrl(a.Id,{tag:a.ImageTags.Logo,maxHeight:24,maxWidth:130,type:"Logo"}):a.ParentLogoImageTag&&(t=ApiClient.getScaledImageUrl(a.ParentLogoItemId,{tag:a.ParentLogoImageTag,maxHeight:24,maxWidth:130,type:"Logo"})),t&&(n='<img src="'+t+'" style="max-height:24px;max-width:130px;" />'),{html:r?n+"<br/>"+r:n,image:t}},getUsersHtml:function(e){var t=[];e.UserId&&t.push(i()(e.UserName));for(var a=0,n=e.AdditionalUsers.length;a<n;a++)t.push(i()(e.AdditionalUsers[a].UserName));return t.join(", ")},getUserImage:function(e){return e.UserId&&e.UserPrimaryImageTag?ApiClient.getUserImageUrl(e.UserId,{tag:e.UserPrimaryImageTag,type:"Primary"}):null},updateSession:function(e,t){var a,n,i;e.classList.remove("deadSession");var r=t.NowPlayingItem;r?(e.classList.add("playingSession"),e.querySelector(".btnSessionInfo").classList.remove("hide")):(e.classList.remove("playingSession"),e.querySelector(".btnSessionInfo").classList.add("hide")),t.ServerId&&-1!==t.SupportedCommands.indexOf("DisplayMessage")?e.querySelector(".btnSessionSendMessage").classList.remove("hide"):e.querySelector(".btnSessionSendMessage").classList.add("hide");var s=e.querySelector(".btnSessionPlayPause");t.ServerId&&r&&t.SupportsRemoteControl?(s.classList.remove("hide"),e.querySelector(".btnSessionStop").classList.remove("hide")):(s.classList.add("hide"),e.querySelector(".btnSessionStop").classList.add("hide"));var o=s.querySelector(".material-icons");o.classList.remove("play_arrow","pause"),o.classList.add(t.PlayState&&t.PlayState.IsPaused?"play_arrow":"pause"),e.querySelector(".sessionNowPlayingTime").innerText=DashboardPage.getSessionNowPlayingTime(t),e.querySelector(".sessionUserName").innerHTML=DashboardPage.getUsersHtml(t),e.querySelector(".sessionAppSecondaryText").innerText=DashboardPage.getAppSecondaryText(t);var l=DashboardPage.getNowPlayingName(t),d=e.querySelector(".sessionNowPlayingInfo");l.image&&l.image==d.getAttribute("data-imgsrc")||(d.innerHTML=l.html,d.setAttribute("data-imgsrc",l.image||""));var c=e.querySelector(".playbackProgress"),u=e.querySelector(".transcodingProgress"),g=100*(null==t||null===(a=t.PlayState)||void 0===a?void 0:a.PositionTicks)/(null==r?void 0:r.RunTimeTicks);c.outerHTML=P.ZP.getProgressHtml(g||0,{containerClass:"playbackProgress"}),g=null==t||null===(n=t.TranscodingInfo)||void 0===n||null===(i=n.CompletionPercentage)||void 0===i?void 0:i.toFixed(1),u.outerHTML=P.ZP.getProgressHtml(g||0,{containerClass:"transcodingProgress"});var m=DashboardPage.getNowPlayingImageUrl(r)||"",h=e.querySelector(".sessionNowPlayingContent");m!=h.getAttribute("data-src")&&(h.style.backgroundImage=m?"url('"+m+"')":"",h.setAttribute("data-src",m),m?(h.classList.add("sessionNowPlayingContent-withbackground"),e.querySelector(".sessionNowPlayingInnerContent").classList.add("darkenContent")):(h.classList.remove("sessionNowPlayingContent-withbackground"),e.querySelector(".sessionNowPlayingInnerContent").classList.remove("darkenContent")))},getClientImage:function(e){return"<img src='"+y.ZP.getDeviceIcon(e)+"' />"},getNowPlayingImageUrl:function(e){if(e&&e.BackdropImageTags&&e.BackdropImageTags.length)return ApiClient.getScaledImageUrl(e.Id,{maxWidth:Math.round(.2*d.ZP.getScreenWidth()),type:"Backdrop",tag:e.BackdropImageTags[0]});if(e&&e.ParentBackdropImageTags&&e.ParentBackdropImageTags.length)return ApiClient.getScaledImageUrl(e.ParentBackdropItemId,{maxWidth:Math.round(.2*d.ZP.getScreenWidth()),type:"Backdrop",tag:e.ParentBackdropImageTags[0]});if(e&&e.BackdropImageTag)return ApiClient.getScaledImageUrl(e.BackdropItemId,{maxWidth:Math.round(.2*d.ZP.getScreenWidth()),type:"Backdrop",tag:e.BackdropImageTag});var t=(e||{}).ImageTags||{};return e&&t.Thumb?ApiClient.getScaledImageUrl(e.Id,{maxWidth:Math.round(.2*d.ZP.getScreenWidth()),type:"Thumb",tag:t.Thumb}):e&&e.ParentThumbImageTag?ApiClient.getScaledImageUrl(e.ParentThumbItemId,{maxWidth:Math.round(.2*d.ZP.getScreenWidth()),type:"Thumb",tag:e.ParentThumbImageTag}):e&&e.ThumbImageTag?ApiClient.getScaledImageUrl(e.ThumbItemId,{maxWidth:Math.round(.2*d.ZP.getScreenWidth()),type:"Thumb",tag:e.ThumbImageTag}):e&&t.Primary?ApiClient.getScaledImageUrl(e.Id,{maxWidth:Math.round(.2*d.ZP.getScreenWidth()),type:"Primary",tag:t.Primary}):e&&e.PrimaryImageTag?ApiClient.getScaledImageUrl(e.PrimaryImageItemId,{maxWidth:Math.round(.2*d.ZP.getScreenWidth()),type:"Primary",tag:e.PrimaryImageTag}):e&&e.AlbumPrimaryImageTag?ApiClient.getScaledImageUrl(e.AlbumId,{maxWidth:Math.round(.2*d.ZP.getScreenWidth()),type:"Primary",tag:e.AlbumPrimaryImageTag}):null},systemUpdateTaskKey:"SystemUpdateTask",stopTask:function(e,t){var a=d.ZP.parentWithClass(e,"page");ApiClient.stopScheduledTask(t).then((function(){w(a,ApiClient)}))},restart:function(e){(0,C.Z)({title:c.ZP.translate("Restart"),text:c.ZP.translate("MessageConfirmRestart"),confirmText:c.ZP.translate("Restart"),primary:"delete"}).then((function(){var t=d.ZP.parentWithClass(e,"page");t.querySelector("#btnRestartServer").disabled=!0,t.querySelector("#btnShutdown").disabled=!0,ApiClient.restartServer()}))},shutdown:function(e){(0,C.Z)({title:c.ZP.translate("ButtonShutdown"),text:c.ZP.translate("MessageConfirmShutdown"),confirmText:c.ZP.translate("ButtonShutdown"),primary:"delete"}).then((function(){var t=d.ZP.parentWithClass(e,"page");t.querySelector("#btnRestartServer").disabled=!0,t.querySelector("#btnShutdown").disabled=!0,ApiClient.shutdownServer()}))}}},82427:function(e,t,a){a(5769),a(63238),a(61418),a(17460),a(14078),a(27471),a(32081);var n=a(61008),i=a(58517),r=a(48957),s=a(98301),o=a(30325),l=a(57366),d=a(72365),c=a(28540),u=a(34643),g=a(44038),m=a(81643),h=(a(67752),a(18613)),f=a(28172),v=Object.create(HTMLDivElement.prototype);function p(e){var t=this,a=t.multiSelect;!1!==(null==a?void 0:a.onContainerClick.call(t,e))&&n.ZP.onClick.call(t,e)}function y(e){return e.preventDefault(),e.stopPropagation(),!1}function P(e){var t=e.target,a=d.ZP.parentWithAttribute(t,"data-id");if(a&&a.getAttribute("data-serverid"))return i.default.handleCommand("menu",{sourceElement:a}),e.preventDefault(),e.stopPropagation(),!1}function I(e,t,n){var i=this;Promise.all([a.e(61570),a.e(53152)]).then(a.bind(a,61570)).then((function(e){e.onUserDataChanged(n,i)}));var r=b(i);-1===r.indexOf("markfavorite")&&-1===r.indexOf("markplayed")||i.notifyRefreshNeeded()}function b(e){var t=e.getAttribute("data-monitor");return t?t.split(","):[]}function S(e,t,n){var i=this;if(-1===b(i).indexOf("timers")){var r=n.ProgramId,s=n.Id;Promise.all([a.e(61570),a.e(53152)]).then(a.bind(a,61570)).then((function(e){e.onTimerCreated(r,s,i)}))}else i.notifyRefreshNeeded()}function T(){-1!==b(this).indexOf("seriestimers")&&this.notifyRefreshNeeded()}function C(e,t,n){var i=this;-1===b(i).indexOf("timers")?Promise.all([a.e(61570),a.e(53152)]).then(a.bind(a,61570)).then((function(e){e.onTimerCancelled(n.Id,i)})):i.notifyRefreshNeeded()}function Z(e,t,n){var i=this;-1===b(i).indexOf("seriestimers")?Promise.all([a.e(61570),a.e(53152)]).then(a.bind(a,61570)).then((function(e){e.onSeriesTimerCancelled(n.Id,i)})):i.notifyRefreshNeeded()}function k(e,t,a){var n=this,i=b(n);if(-1===i.indexOf("seriestimers")&&-1===i.indexOf("timers")){var r=a.ItemsAdded||[],s=a.ItemsRemoved||[];if(r.length||s.length){var o=n.getAttribute("data-parentid");if(o){var l=a.FoldersAddedTo||[],d=a.FoldersRemovedFrom||[],c=a.CollectionFolders||[];if(-1===l.indexOf(o)&&-1===d.indexOf(o)&&-1===c.indexOf(o))return}n.notifyRefreshNeeded()}}}function L(e,t){var a,n=this,i=t.state,r=b(n);if(i.NowPlayingItem&&"Video"===i.NowPlayingItem.MediaType){if(-1!==r.indexOf("videoplayback"))return void n.notifyRefreshNeeded(!0)}else if("Audio"===(null===(a=i.NowPlayingItem)||void 0===a?void 0:a.MediaType)&&-1!==r.indexOf("audioplayback"))return void n.notifyRefreshNeeded(!0)}function A(e,t,a,n){var i=a.bind(e);n=n||g.default,m.Z.on(n,t,i),e["event_"+t]=i}function x(e,t,a){var n=e["event_"+t];n&&(a=a||g.default,m.Z.off(a,t,n),e["event_"+t]=null)}function w(e,t){e.refreshInterval&&(clearInterval(e.refreshInterval),e.refreshInterval=null,t||(e.refreshIntervalEndTime=null))}function D(e,t){w(e),t||(t=parseInt(e.getAttribute("data-refreshinterval")||"0",10)),t&&(e.refreshInterval=setInterval(e.notifyRefreshNeeded.bind(e),t),e.refreshIntervalEndTime=(new Date).getTime()+t)}function R(e){var t=e.Items||e,a=this.parentContainer;a&&(t.length?a.classList.remove("hide"):a.classList.add("hide"));var n,i,r=document.activeElement;this.contains(r)&&(i=!0,n=r.getAttribute("data-id")),this.innerHTML=this.getItemsHtml(t),s.default.lazyChildren(this),i&&function(e,t){if(t){var a=e.querySelector('[data-id="'+t+'"]');if(a)try{return void u.Z.focus(a)}catch(e){console.error(e)}}u.Z.autoFocus(e)}(this,n),D(this),this.afterRefresh&&this.afterRefresh(e)}v.enableMultiSelect=function(e){var t=this.multiSelect;if(e){if(!t){var n=this;a.e(52943).then(a.bind(a,52943)).then((function(e){var t=e.default;n.multiSelect=new t({container:n,bindOnClick:!1})}))}}else t&&(t.destroy(),this.multiSelect=null)},v.enableDragReordering=function(e){var t=this.sortable;if(e){if(!t){var a=this;a.sortable=new f.ZP(a,{draggable:".listItem",handle:".listViewDragHandle",onEnd:function(e){return function(e,t){var a=e.item,n=e.newIndex,i=a.getAttribute("data-playlistitemid"),r=a.getAttribute("data-playlistid");if(r){var s=a.getAttribute("data-serverid"),o=h.Z.getApiClient(s);c.ZP.show(),o.ajax({url:o.getUrl("Playlists/"+r+"/Items/"+i+"/Move/"+n),type:"POST"}).then((function(){c.ZP.hide()}),(function(){c.ZP.hide(),t.refreshItems()}))}else{var l=e.oldIndex;a.dispatchEvent(new CustomEvent("itemdrop",{detail:{oldIndex:l,newIndex:n,playlistItemId:i},bubbles:!0,cancelable:!1}))}}(e,a)}})}}else t&&(t.destroy(),this.sortable=null)},v.createdCallback=function(){this.classList.add("itemsContainer")},v.attachedCallback=function(){this.addEventListener("click",p),l.Z.touch?this.addEventListener("contextmenu",y):"false"!==this.getAttribute("data-contextmenu")&&this.addEventListener("contextmenu",P),(o.Z.desktop||o.Z.mobile&&"false"!==this.getAttribute("data-multiselect"))&&this.enableMultiSelect(!0),o.Z.tv&&this.classList.add("itemsContainer-tv"),n.ZP.on(this,{click:!1}),A(this,"UserDataChanged",I),A(this,"TimerCreated",S),A(this,"SeriesTimerCreated",T),A(this,"TimerCancelled",C),A(this,"SeriesTimerCancelled",Z),A(this,"LibraryChanged",k),A(this,"playbackstop",L,r.O),"true"===this.getAttribute("data-dragreorder")&&this.enableDragReordering(!0)},v.detachedCallback=function(){w(this),this.enableMultiSelect(!1),this.enableDragReordering(!1),this.removeEventListener("click",p),this.removeEventListener("contextmenu",P),this.removeEventListener("contextmenu",y),n.ZP.off(this,{click:!1}),x(this,"UserDataChanged"),x(this,"TimerCreated"),x(this,"SeriesTimerCreated"),x(this,"TimerCancelled"),x(this,"SeriesTimerCancelled"),x(this,"LibraryChanged"),x(this,"playbackstop",r.O),this.fetchData=null,this.getItemsHtml=null,this.parentContainer=null},v.pause=function(){w(this,!0),this.paused=!0},v.resume=function(e){this.paused=!1;var t=this.refreshIntervalEndTime;if(t){var a=t-(new Date).getTime();a>0&&!this.needsRefresh?D(this,a):(this.needsRefresh=!0,this.refreshIntervalEndTime=null)}return this.needsRefresh||e&&e.refresh?this.refreshItems():Promise.resolve()},v.refreshItems=function(){return this.fetchData?this.paused?(this.needsRefresh=!0,Promise.resolve()):(this.needsRefresh=!1,this.fetchData().then(R.bind(this))):Promise.resolve()},v.notifyRefreshNeeded=function(e){if(this.paused)this.needsRefresh=!0;else{var t=this.refreshTimeout;t&&clearTimeout(t),!0===e?this.refreshItems():this.refreshTimeout=setTimeout(this.refreshItems.bind(this),1e4)}},document.registerElement("emby-itemscontainer",{prototype:v,extends:"div"})}}]);