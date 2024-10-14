"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[79366,14980],{4838:function(e,t,n){t.A={getDisplayPlayMethod:function(e){var t,n,a,i;return e.NowPlayingItem?(null!==(t=e.TranscodingInfo)&&void 0!==t&&t.IsVideoDirect||null===(n=e.TranscodingInfo)||void 0===n||!n.VideoCodec)&&null!==(a=e.TranscodingInfo)&&void 0!==a&&a.IsAudioDirect?"Remux":null!==(i=e.TranscodingInfo)&&void 0!==i&&i.IsVideoDirect?"DirectStream":"Transcode"===e.PlayState.PlayMethod?"Transcode":"DirectStream"===e.PlayState.PlayMethod||"DirectPlay"===e.PlayState.PlayMethod?"DirectPlay":void 0:null}}},32947:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}}),n(24776),n(14382),n(84734),n(44962),n(9698),n(78557),n(90076),n(83994),n(23630),n(82367);var a=n(22696),i=n.n(a),r=n(98320),s=n(44797),o=n(23648),l=n(10736),d=n(47629),c=n(5898),u=n(80096),g=n(93721),h=n(8566),m=n(4838),f=n(24468),y=n(76542),v=(n(29305),n(32733),n(84701),n(81678),n(86584),n(4754),n(94),n(36947),n(96054),n(73687),n(20558)),p=(n(10353),n(86191)),b=n(41177),I=n(44305);function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function A(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,T(a.key),a)}}function T(e){var t=function(e,t){if("object"!=S(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,"string");if("object"!=S(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==S(t)?t:t+""}function P(e,t,n,a,r){null==a&&(a=parseInt(t.getAttribute("data-activitystartindex")||"0",10)),r=r||parseInt(t.getAttribute("data-activitylimit")||"7",10);var s=new Date,o=(0,I.G4)(t.getAttribute("data-useractivity"),!0);o?s.setTime(s.getTime()-864e5):s.setTime(s.getTime()-6048e5),ApiClient.getJSON(ApiClient.getUrl("System/ActivityLog/Entries",{startIndex:a,limit:r,minDate:s.toISOString(),hasUserId:o})).then((function(s){if(t.setAttribute("data-activitystartindex",a),t.setAttribute("data-activitylimit",r),!a){var o=d.Ay.parentWithClass(t,"activityContainer");o&&(s.Items.length?o.classList.remove("hide"):o.classList.add("hide"))}e.items=s.Items,function(e,t,n){e.innerHTML=n.Items.map((function(e){return function(e,t){var n="";n+='<div class="listItem listItem-border">';var a="#00a4dc",r="notifications";return"Error"!=e.Severity&&"Fatal"!=e.Severity&&"Warn"!=e.Severity||(a="#cc0000",r="notification_important"),e.UserId&&e.UserPrimaryImageTag?n+='<span class="listItemIcon material-icons dvr" aria-hidden="true" style="width:2em!important;height:2em!important;padding:0;color:transparent;background-color:'+a+";background-image:url('"+t.getUserImageUrl(e.UserId,{type:"Primary",tag:e.UserPrimaryImageTag})+"');background-repeat:no-repeat;background-position:center center;background-size: cover;\"></span>":n+='<span class="listItemIcon material-icons '+r+'" aria-hidden="true" style="background-color:'+a+'"></span>',n+='<div class="listItemBody three-line">',n+='<div class="listItemBodyText">',n+=i()(e.Name),n+="</div>",n+='<div class="listItemBodyText secondary">',n+=(0,v.A)(Date.parse(e.Date),Date.now(),{locale:(0,g.JK)()}),n+="</div>",n+='<div class="listItemBodyText secondary listItemBodyText-nowrap">',n+=i()(e.ShortOverview||""),n+="</div>",n+="</div>",e.Overview&&(n+='<button type="button" is="paper-icon-button-light" class="btnEntryInfo" data-id="'.concat(e.Id,'" title="').concat(c.Ay.translate("Info"),'">\n                       <span class="material-icons info" aria-hidden="true"></span>\n                    </button>')),n+"</div>"}(e,t)})).join("")}(t,n,s)}))}function C(e,t){var n=this.options;n&&n.serverId===t.serverId()&&P(this,n.element,t)}function w(e){var t=d.Ay.parentWithClass(e.target,"btnEntryInfo");if(t){var n=t.getAttribute("data-id"),a=this.items;if(a){var i=a.filter((function(e){return e.Id.toString()===n}))[0];i&&function(e){(0,b.A)({text:e.Overview})}(i)}}}var x=function(){return e=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=t;var n=t.element;n.classList.add("activityLogListWidget"),n.addEventListener("click",w.bind(this));var a=p.A.getApiClient(t.serverId);P(this,n,a);var i=C.bind(this);this.updateFn=i,s.A.on(l.default,"ActivityLogEntry",i),a.sendMessage("ActivityLogEntryStart","0,1500")},(t=[{key:"destroy",value:function(){var e=this.options;e&&(e.element.classList.remove("activityLogListWidget"),p.A.getApiClient(e.serverId).sendMessage("ActivityLogEntryStop","0,1500"));var t=this.updateFn;t&&s.A.off(l.default,"ActivityLogEntry",t),this.items=null,this.options=null}}])&&A(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}(),k=n(32203),L=n(51938),D=n(54048),R=n(89100),N=n(40532),M=n(36645),U=n(42305),q=n(75384),B=n(53678);function E(e,t){var n,a=[],i=m.A.getDisplayPlayMethod(t);if("Remux"===i)n=c.Ay.translate("Remuxing"),a.push(c.Ay.translate("RemuxHelp1")),a.push("<br/>"),a.push(c.Ay.translate("RemuxHelp2"));else if("DirectStream"===i)n=c.Ay.translate("DirectStreaming"),a.push(c.Ay.translate("DirectStreamHelp1")),a.push("<br/>"),a.push(c.Ay.translate("DirectStreamHelp2"));else if("DirectPlay"===i)n=c.Ay.translate("DirectPlaying"),a.push(c.Ay.translate("DirectPlayHelp"));else if("Transcode"===i){var r;n=c.Ay.translate("Transcoding"),a.push(c.Ay.translate("MediaIsBeingConverted")),a.push(DashboardPage.getSessionNowPlayingStreamInfo(t)),null!==(r=t.TranscodingInfo)&&void 0!==r&&null!==(r=r.TranscodeReasons)&&void 0!==r&&r.length&&(a.push("<br/>"),a.push(c.Ay.translate("LabelReasonForTranscoding")),t.TranscodingInfo.TranscodeReasons.forEach((function(e){a.push(c.Ay.translate(e))})))}(0,b.A)({text:a.join("<br/>"),title:n})}function W(e,t){n.e(72521).then(n.bind(n,72521)).then((function(e){(0,e.default)({title:c.Ay.translate("HeaderSendMessage"),label:c.Ay.translate("LabelMessageText"),confirmText:c.Ay.translate("ButtonSend")}).then((function(e){e&&p.A.getApiClient(t.ServerId).sendMessageCommand(t.Id,{Text:e,TimeoutMs:5e3})}))}))}function H(e){var t=d.Ay.parentWithClass(e.target,"sessionCardButton");if(t){var a=d.Ay.parentWithClass(t,"card");if(a){var i=a.id,r=(DashboardPage.sessionsList||[]).filter((function(e){return"session"+e.Id===i}))[0];r&&(t.classList.contains("btnCardOptions")?function(e,t){n.e(62882).then(n.bind(n,62882)).then((function(n){var a,i=n.default,r=[];return t.ServerId&&t.DeviceId!==p.A.deviceId()&&r.push({name:c.Ay.translate("SendMessage"),id:"sendmessage"}),null!==(a=t.TranscodingInfo)&&void 0!==a&&null!==(a=a.TranscodeReasons)&&void 0!==a&&a.length&&r.push({name:c.Ay.translate("ViewPlaybackInfo"),id:"transcodinginfo"}),i.show({items:r,positionTo:e}).then((function(e){switch(e){case"sendmessage":W(0,t);break;case"transcodinginfo":E(0,t)}}))}))}(t,r):t.classList.contains("btnSessionInfo")?E(0,r):t.classList.contains("btnSessionSendMessage")?W(0,r):t.classList.contains("btnSessionStop")?p.A.getApiClient(r.ServerId).sendPlayStateCommand(r.Id,"Stop"):t.classList.contains("btnSessionPlayPause")&&r.PlayState&&p.A.getApiClient(r.ServerId).sendPlayStateCommand(r.Id,"PlayPause"))}}}function O(e,t){e.querySelector("#buildVersion").innerText="Release";var n="10.10.0";n+=" (".concat("82d963b",")"),e.querySelector("#webVersion").innerText=n,B.q.fetchQuery((0,U.C)((0,q.C)(t))).then((function(t){e.querySelector("#serverName").innerText=t.ServerName,e.querySelector("#versionNumber").innerText=t.Version,e.querySelector("#cachePath").innerText=t.CachePath,e.querySelector("#logPath").innerText=t.LogPath,e.querySelector("#transcodePath").innerText=t.TranscodingTempPath,e.querySelector("#metadataPath").innerText=t.InternalMetadataPath,e.querySelector("#webPath").innerText=t.WebPath}))}function F(e,t){(function(e,t){var n="";DashboardPage.sessionsList=t;var a=e.querySelector(".activeDevices"),r=a.querySelector(".card");r&&r.classList.add("deadSession");for(var s=0,o=t.length;s<o;s++){var l=t[s],d="session"+l.Id,u=e.querySelector("#"+d);if(u)DashboardPage.updateSession(u,l);else{var g,h,m=l.NowPlayingItem,f=DashboardPage.getNowPlayingImageUrl(m);n+='<div class="scalableCard card activeSession backdropCard backdropCard-scalable" id="'+d+'">',n+='<div class="cardBox visualCardBox">',n+='<div class="cardScalable visualCardBox-cardScalable">',n+='<div class="cardPadder cardPadder-backdrop"></div>',n+='<div class="cardContent '.concat((0,M.Qp)(),'">'),f?(n+='<div class="sessionNowPlayingContent sessionNowPlayingContent-withbackground"',n+=' data-src="'+f+'" style="display:inline-block;background-image:url(\''+f+"');\"></div>"):n+='<div class="sessionNowPlayingContent"></div>',n+='<div class="sessionNowPlayingInnerContent '.concat(f?"darkenContent":"",'">'),n+='<div class="sessionAppInfo">';var y=DashboardPage.getClientImage(l);y&&(n+=y),n+='<div class="sessionAppName" style="display:inline-block; text-align:left;"  dir="ltr" >',n+='<div class="sessionDeviceName">'+i()(l.DeviceName)+"</div>",n+='<div class="sessionAppSecondaryText">'+i()(DashboardPage.getAppSecondaryText(l))+"</div>",n+="</div>",n+="</div>",n+='<div class="sessionNowPlayingDetails">';var v=DashboardPage.getNowPlayingName(l);n+='<div class="sessionNowPlayingInfo" data-imgsrc="'+v.image+'">',n+='<span class="sessionNowPlayingName">'+v.html+"</span>",n+="</div>",n+='<div class="sessionNowPlayingTime">'+i()(DashboardPage.getSessionNowPlayingTime(l))+"</div>",n+="</div>";var b=100*(null==l||null===(g=l.PlayState)||void 0===g?void 0:g.PositionTicks)/(null==m?void 0:m.RunTimeTicks);n+=L.Ay.getProgressHtml(b||0,{containerClass:"playbackProgress"}),b=null==l||null===(h=l.TranscodingInfo)||void 0===h||null===(h=h.CompletionPercentage)||void 0===h?void 0:h.toFixed(1),n+=L.Ay.getProgressHtml(b||0,{containerClass:"transcodingProgress"}),n+=L.Ay.getProgressHtml(100,{containerClass:"backgroundProgress"}),n+="</div>",n+="</div>",n+="</div>",n+='<div class="sessionCardFooter cardFooter">',n+='<div class="sessionCardButtons flex align-items-center justify-content-center">';var I=l.ServerId&&l.NowPlayingItem&&l.SupportsRemoteControl?"":" hide";n+='<button is="paper-icon-button-light" class="sessionCardButton btnSessionPlayPause paper-icon-button-light '+I+'"><span class="material-icons '+(l.PlayState.IsPaused?"play_arrow":"pause")+'" aria-hidden="true"></span></button>',n+='<button is="paper-icon-button-light" class="sessionCardButton btnSessionStop paper-icon-button-light '+I+'"><span class="material-icons stop" aria-hidden="true"></span></button>',n+='<button is="paper-icon-button-light" class="sessionCardButton btnSessionInfo paper-icon-button-light '+I+'" title="'+c.Ay.translate("ViewPlaybackInfo")+'"><span class="material-icons info" aria-hidden="true"></span></button>',n+='<button is="paper-icon-button-light" class="sessionCardButton btnSessionSendMessage paper-icon-button-light '+(I=l.ServerId&&-1!==l.SupportedCommands.indexOf("DisplayMessage")&&l.DeviceId!==p.A.deviceId()?"":" hide")+'" title="'+c.Ay.translate("SendMessage")+'"><span class="material-icons message" aria-hidden="true"></span></button>',n+="</div>",n+='<div class="flex align-items-center justify-content-center">';var S=DashboardPage.getUserImage(l);n+=S?'<div class="activitylogUserPhoto" style="background-image:url(\''+S+"');\"></div>":'<div style="height:1.71em;"></div>',n+='<div class="sessionUserName">',n+=DashboardPage.getUsersHtml(l),n+="</div>",n+="</div>",n+="</div>",n+="</div>",n+="</div>"}}a.insertAdjacentHTML("beforeend",n);var A=a.querySelector(".deadSession");A&&A.parentNode.removeChild(A)})(e,t=function(e){for(var t=[],n=(new Date).getTime()-9e5,a=0,i=e.length;a<i;a++){var s=e[a];(s.NowPlayingItem||s.UserId)&&r.Ay.parseISO8601Date(s.LastActivityDate,!0).getTime()>=n&&t.push(s)}return t}(t)),h.Ay.hide()}function j(e,t){t.getSessions({ActiveWithinSeconds:960}).then((function(t){F(e,t)})),t.getScheduledTasks().then((function(t){V(e,t)}))}function V(e,t){var n="";t=t.filter((function(e){return"Idle"!=e.State&&!e.IsHidden})),t.length?e.querySelector(".runningTasksContainer").classList.remove("hide"):e.querySelector(".runningTasksContainer").classList.add("hide");for(var a=0,i=t.length;a<i;a++){var r=t[a];if(n+="<p>",n+=r.Name+"<br/>","Running"===r.State){var s=(r.CurrentProgressPercentage||0).toFixed(1);n+='<progress max="100" value="'+s+'" title="'+s+'%">',n+=s+"%",n+="</progress>",n+="<span style='color:#00a4dc;margin-left:5px;margin-right:5px;'>"+s+"%</span>",n+='<button type="button" is="paper-icon-button-light" title="'+c.Ay.translate("ButtonStop")+'" onclick="DashboardPage.stopTask(this, \''+r.Id+'\');" class="autoSize"><span class="material-icons cancel" aria-hidden="true"></span></button>'}else"Cancelling"===r.State&&(n+='<span style="color:#cc0000;">'+c.Ay.translate("LabelStopping")+"</span>");n+="</p>"}e.querySelector("#divRunningTasks").innerHTML=n}function _(e){function t(e,t){console.debug("onRestartRequired not implemented",e,t)}function n(e,t){console.debug("onServerShuttingDown not implemented",e,t)}function a(e,t){console.debug("onServerRestarting not implemented",e,t)}function i(t,n){n.serverId()===d&&(j(e,n),O(e,n))}function r(t,n,a){n.serverId()===d&&F(e,a)}function o(t,n,a){n.serverId()===d&&V(e,a)}var d=ApiClient.serverId();e.querySelector(".activeDevices").addEventListener("click",H),e.addEventListener("viewshow",(function(){var d=this,c=ApiClient;c&&(h.Ay.show(),j(d,c),DashboardPage.startInterval(c),s.A.on(l.default,"RestartRequired",t),s.A.on(l.default,"ServerShuttingDown",n),s.A.on(l.default,"ServerRestarting",a),s.A.on(l.default,"PackageInstalling",i),s.A.on(l.default,"PackageInstallationCompleted",i),s.A.on(l.default,"Sessions",r),s.A.on(l.default,"ScheduledTasksInfo",o),DashboardPage.lastAppUpdateCheck=null,O(d,ApiClient),d.userActivityLog||(d.userActivityLog=new x({serverId:ApiClient.serverId(),element:d.querySelector(".userActivityItems")})),d.serverActivityLog||(d.serverActivityLog=new x({serverId:ApiClient.serverId(),element:d.querySelector(".serverActivityItems")})),function(e,t){t.getLiveTvRecordings({UserId:R.default.getCurrentUserId(),IsInProgress:!0,Fields:"CanDelete,PrimaryImageAspectRatio",EnableTotalRecordCount:!1,EnableImageTypes:"Primary,Thumb,Backdrop"}).then((function(t){var n=e.querySelector(".activeRecordingItems");if(!t.Items.length)return e.querySelector(".activeRecordingsSection").classList.add("hide"),void(n.innerHTML="");e.querySelector(".activeRecordingsSection").classList.remove("hide"),n.innerHTML=f.default.getCardsHtml({items:t.Items,shape:"auto",defaultShape:"backdrop",showTitle:!0,showParentTitle:!0,coverImage:!0,cardLayout:!1,centerText:!0,preferThumb:"auto",overlayText:!1,overlayMoreButton:!0,action:"none",centerPlayButton:!0}),y.default.lazyChildren(n)}))}(e,c),h.Ay.hide()),(0,D.A)({mode:"on",taskKey:"RefreshLibrary",button:d.querySelector(".btnRefresh")})})),e.addEventListener("viewbeforehide",(function(){var e=ApiClient;s.A.off(l.default,"RestartRequired",t),s.A.off(l.default,"ServerShuttingDown",n),s.A.off(l.default,"ServerRestarting",a),s.A.off(l.default,"PackageInstalling",i),s.A.off(l.default,"PackageInstallationCompleted",i),s.A.off(l.default,"Sessions",r),s.A.off(l.default,"ScheduledTasksInfo",o),e&&DashboardPage.stopInterval(e),(0,D.A)({mode:"off",taskKey:"RefreshLibrary",button:this.querySelector(".btnRefresh")})})),e.addEventListener("viewdestroy",(function(){var e=this.userActivityLog;e&&e.destroy();var t=this.serverActivityLog;t&&t.destroy()}))}n(1177),window.DashboardPage={startInterval:function(e){e.sendMessage("SessionsStart","0,1500"),e.sendMessage("ScheduledTasksInfoStart","0,1000")},stopInterval:function(e){e.sendMessage("SessionsStop"),e.sendMessage("ScheduledTasksInfoStop")},getSessionNowPlayingStreamInfo:function(e){var t="",n=!1,a=m.A.getDisplayPlayMethod(e);if("DirectPlay"===a)t+=c.Ay.translate("DirectPlaying");else if("Remux"===a)t+=c.Ay.translate("Remuxing");else if("DirectStream"===a)t+=c.Ay.translate("DirectStreaming");else if("Transcode"===a){var i;null!==(i=e.TranscodingInfo)&&void 0!==i&&i.Framerate&&(t+="".concat(c.Ay.translate("Framerate"),": ").concat(e.TranscodingInfo.Framerate,"fps")),n=!0}if(n){var r=[];e.TranscodingInfo&&(e.TranscodingInfo.Bitrate&&(e.TranscodingInfo.Bitrate>1e6?r.push((e.TranscodingInfo.Bitrate/1e6).toFixed(1)+" Mbps"):r.push(Math.floor(e.TranscodingInfo.Bitrate/1e3)+" Kbps")),e.TranscodingInfo.Container&&r.push(e.TranscodingInfo.Container.toUpperCase()),e.TranscodingInfo.VideoCodec&&r.push(e.TranscodingInfo.VideoCodec.toUpperCase()),e.TranscodingInfo.AudioCodec&&e.TranscodingInfo.AudioCodec!=e.TranscodingInfo.Container&&r.push(e.TranscodingInfo.AudioCodec.toUpperCase())),r.length&&(t+="<br/><br/>"+r.join(" "))}return t},getSessionNowPlayingTime:function(e){var t=e.NowPlayingItem,n="";return t&&(e.PlayState.PositionTicks?n+=r.Ay.getDisplayRunningTime(e.PlayState.PositionTicks):n+="0:00",n+=" / ",t.RunTimeTicks?n+=r.Ay.getDisplayRunningTime(t.RunTimeTicks):n+="0:00"),n},getAppSecondaryText:function(e){return e.Client+" "+e.ApplicationVersion},getNowPlayingName:function(e){var t,n,a="",r=e.NowPlayingItem;if(!r)return{html:c.Ay.translate("LastSeen",(0,u.A)(Date.parse(e.LastActivityDate),(0,g.OE)())),image:a};var s=i()(o.Ay.getDisplayName(r)),l="";return null!==(t=r.Artists)&&void 0!==t&&t.length?(l=s,s=i()(r.Artists[0])):r.SeriesName||r.Album?(l=s,s=i()(r.SeriesName||r.Album)):r.ProductionYear&&(l=r.ProductionYear),null!==(n=r.ImageTags)&&void 0!==n&&n.Logo?a=ApiClient.getScaledImageUrl(r.Id,{tag:r.ImageTags.Logo,maxHeight:24,maxWidth:130,type:"Logo"}):r.ParentLogoImageTag&&(a=ApiClient.getScaledImageUrl(r.ParentLogoItemId,{tag:r.ParentLogoImageTag,maxHeight:24,maxWidth:130,type:"Logo"})),a&&(s='<img src="'+a+'" style="max-height:24px;max-width:130px;" />'),{html:l?s+"<br/>"+l:s,image:a}},getUsersHtml:function(e){var t=[];e.UserId&&t.push(i()(e.UserName));for(var n=0,a=e.AdditionalUsers.length;n<a;n++)t.push(i()(e.AdditionalUsers[n].UserName));return t.join(", ")},getUserImage:function(e){return e.UserId&&e.UserPrimaryImageTag?ApiClient.getUserImageUrl(e.UserId,{tag:e.UserPrimaryImageTag,type:"Primary"}):null},updateSession:function(e,t){var n,a,i;e.classList.remove("deadSession");var r=t.NowPlayingItem;r?(e.classList.add("playingSession"),e.querySelector(".btnSessionInfo").classList.remove("hide")):(e.classList.remove("playingSession"),e.querySelector(".btnSessionInfo").classList.add("hide")),t.ServerId&&-1!==t.SupportedCommands.indexOf("DisplayMessage")?e.querySelector(".btnSessionSendMessage").classList.remove("hide"):e.querySelector(".btnSessionSendMessage").classList.add("hide");var s=e.querySelector(".btnSessionPlayPause");t.ServerId&&r&&t.SupportsRemoteControl?(s.classList.remove("hide"),e.querySelector(".btnSessionStop").classList.remove("hide")):(s.classList.add("hide"),e.querySelector(".btnSessionStop").classList.add("hide"));var o=s.querySelector(".material-icons");o.classList.remove("play_arrow","pause"),o.classList.add(null!==(n=t.PlayState)&&void 0!==n&&n.IsPaused?"play_arrow":"pause"),e.querySelector(".sessionNowPlayingTime").innerText=DashboardPage.getSessionNowPlayingTime(t),e.querySelector(".sessionUserName").innerHTML=DashboardPage.getUsersHtml(t),e.querySelector(".sessionAppSecondaryText").innerText=DashboardPage.getAppSecondaryText(t);var l=DashboardPage.getNowPlayingName(t),d=e.querySelector(".sessionNowPlayingInfo");l.image&&l.image==d.getAttribute("data-imgsrc")||(d.innerHTML=l.html,d.setAttribute("data-imgsrc",l.image||""));var c=e.querySelector(".playbackProgress"),u=e.querySelector(".transcodingProgress"),g=100*(null==t||null===(a=t.PlayState)||void 0===a?void 0:a.PositionTicks)/(null==r?void 0:r.RunTimeTicks);c.outerHTML=L.Ay.getProgressHtml(g||0,{containerClass:"playbackProgress"}),g=null==t||null===(i=t.TranscodingInfo)||void 0===i||null===(i=i.CompletionPercentage)||void 0===i?void 0:i.toFixed(1),u.outerHTML=L.Ay.getProgressHtml(g||0,{containerClass:"transcodingProgress"});var h=DashboardPage.getNowPlayingImageUrl(r)||"",m=e.querySelector(".sessionNowPlayingContent");h!=m.getAttribute("data-src")&&(m.style.backgroundImage=h?"url('"+h+"')":"",m.setAttribute("data-src",h),h?(m.classList.add("sessionNowPlayingContent-withbackground"),e.querySelector(".sessionNowPlayingInnerContent").classList.add("darkenContent")):(m.classList.remove("sessionNowPlayingContent-withbackground"),e.querySelector(".sessionNowPlayingInnerContent").classList.remove("darkenContent")))},getClientImage:function(e){return"<img src='"+k.Ay.getDeviceIcon(e)+"' />"},getNowPlayingImageUrl:function(e){var t,n;if(null!=e&&null!==(t=e.BackdropImageTags)&&void 0!==t&&t.length)return ApiClient.getScaledImageUrl(e.Id,{maxWidth:Math.round(.2*d.Ay.getScreenWidth()),type:"Backdrop",tag:e.BackdropImageTags[0]});if(null!=e&&null!==(n=e.ParentBackdropImageTags)&&void 0!==n&&n.length)return ApiClient.getScaledImageUrl(e.ParentBackdropItemId,{maxWidth:Math.round(.2*d.Ay.getScreenWidth()),type:"Backdrop",tag:e.ParentBackdropImageTags[0]});if(null!=e&&e.BackdropImageTag)return ApiClient.getScaledImageUrl(e.BackdropItemId,{maxWidth:Math.round(.2*d.Ay.getScreenWidth()),type:"Backdrop",tag:e.BackdropImageTag});var a=(null==e?void 0:e.ImageTags)||{};return e&&a.Thumb?ApiClient.getScaledImageUrl(e.Id,{maxWidth:Math.round(.2*d.Ay.getScreenWidth()),type:"Thumb",tag:a.Thumb}):null!=e&&e.ParentThumbImageTag?ApiClient.getScaledImageUrl(e.ParentThumbItemId,{maxWidth:Math.round(.2*d.Ay.getScreenWidth()),type:"Thumb",tag:e.ParentThumbImageTag}):null!=e&&e.ThumbImageTag?ApiClient.getScaledImageUrl(e.ThumbItemId,{maxWidth:Math.round(.2*d.Ay.getScreenWidth()),type:"Thumb",tag:e.ThumbImageTag}):e&&a.Primary?ApiClient.getScaledImageUrl(e.Id,{maxWidth:Math.round(.2*d.Ay.getScreenWidth()),type:"Primary",tag:a.Primary}):null!=e&&e.PrimaryImageTag?ApiClient.getScaledImageUrl(e.PrimaryImageItemId,{maxWidth:Math.round(.2*d.Ay.getScreenWidth()),type:"Primary",tag:e.PrimaryImageTag}):null!=e&&e.AlbumPrimaryImageTag?ApiClient.getScaledImageUrl(e.AlbumId,{maxWidth:Math.round(.2*d.Ay.getScreenWidth()),type:"Primary",tag:e.AlbumPrimaryImageTag}):null},systemUpdateTaskKey:"SystemUpdateTask",stopTask:function(e,t){var n=d.Ay.parentWithClass(e,"page");ApiClient.stopScheduledTask(t).then((function(){j(n,ApiClient)}))},restart:function(e){(0,N.A)({title:c.Ay.translate("Restart"),text:c.Ay.translate("MessageConfirmRestart"),confirmText:c.Ay.translate("Restart"),primary:"delete"}).then((function(){var t=d.Ay.parentWithClass(e,"page");t.querySelector("#btnRestartServer").disabled=!0,t.querySelector("#btnShutdown").disabled=!0,ApiClient.restartServer()}))},shutdown:function(e){(0,N.A)({title:c.Ay.translate("ButtonShutdown"),text:c.Ay.translate("MessageConfirmShutdown"),confirmText:c.Ay.translate("ButtonShutdown"),primary:"delete"}).then((function(){var t=d.Ay.parentWithClass(e,"page");t.querySelector("#btnRestartServer").disabled=!0,t.querySelector("#btnShutdown").disabled=!0,ApiClient.shutdownServer()}))}}},1177:function(e,t,n){n(84734),n(44962),n(78557),n(96054),n(90076),n(83994),n(82367);var a=n(22832),i=n(38490),r=n(21069),s=n(76542),o=n(46782),l=n(34789),d=n(47629),c=n(8566),u=n(9164),g=n(10736),h=n(44797),m=(n(69177),n(86191)),f=n(65210),y=Object.create(HTMLDivElement.prototype);function v(e){var t=this,n=t.multiSelect;!1!==(null==n?void 0:n.onContainerClick.call(t,e))&&a.Ay.onClick.call(t,e)}function p(e){return e.preventDefault(),e.stopPropagation(),!1}function b(e){var t=e.target,n=d.Ay.parentWithAttribute(t,"data-id");if(null!=n&&n.getAttribute("data-serverid"))return i.default.handleCommand("menu",{sourceElement:n}),e.preventDefault(),e.stopPropagation(),!1}function I(e,t,a){var i=this;Promise.all([n.e(45642),n.e(24468),n.e(14980)]).then(n.bind(n,24468)).then((function(e){e.onUserDataChanged(a,i)}));var r=S(i);-1===r.indexOf("markfavorite")&&-1===r.indexOf("markplayed")||i.notifyRefreshNeeded()}function S(e){var t=e.getAttribute("data-monitor");return t?t.split(","):[]}function A(e,t,a){var i=this;if(-1===S(i).indexOf("timers")){var r=a.ProgramId,s=a.Id;Promise.all([n.e(45642),n.e(24468),n.e(14980)]).then(n.bind(n,24468)).then((function(e){e.onTimerCreated(r,s,i)}))}else i.notifyRefreshNeeded()}function T(){-1!==S(this).indexOf("seriestimers")&&this.notifyRefreshNeeded()}function P(e,t,a){var i=this;-1===S(i).indexOf("timers")?Promise.all([n.e(45642),n.e(24468),n.e(14980)]).then(n.bind(n,24468)).then((function(e){e.onTimerCancelled(a.Id,i)})):i.notifyRefreshNeeded()}function C(e,t,a){var i=this;-1===S(i).indexOf("seriestimers")?Promise.all([n.e(45642),n.e(24468),n.e(14980)]).then(n.bind(n,24468)).then((function(e){e.onSeriesTimerCancelled(a.Id,i)})):i.notifyRefreshNeeded()}function w(e,t,n){var a=this,i=S(a);if(-1===i.indexOf("seriestimers")&&-1===i.indexOf("timers")){var r=n.ItemsAdded||[],s=n.ItemsRemoved||[];if(r.length||s.length){var o=a.getAttribute("data-parentid");if(o){var l=n.FoldersAddedTo||[],d=n.FoldersRemovedFrom||[],c=n.CollectionFolders||[];if(-1===l.indexOf(o)&&-1===d.indexOf(o)&&-1===c.indexOf(o))return}a.notifyRefreshNeeded()}}}function x(e,t){var n,a=this,i=t.state,r=S(a);if(i.NowPlayingItem&&"Video"===i.NowPlayingItem.MediaType){if(-1!==r.indexOf("videoplayback"))return void a.notifyRefreshNeeded(!0)}else if("Audio"===(null===(n=i.NowPlayingItem)||void 0===n?void 0:n.MediaType)&&-1!==r.indexOf("audioplayback"))return void a.notifyRefreshNeeded(!0)}function k(e,t,n,a){var i=n.bind(e);a=a||g.default,h.A.on(a,t,i),e["event_"+t]=i}function L(e,t,n){var a=e["event_"+t];a&&(n=n||g.default,h.A.off(n,t,a),e["event_"+t]=null)}function D(e,t){e.refreshInterval&&(clearInterval(e.refreshInterval),e.refreshInterval=null,t||(e.refreshIntervalEndTime=null))}function R(e,t){D(e),t||(t=parseInt(e.getAttribute("data-refreshinterval")||"0",10)),t&&(e.refreshInterval=setInterval(e.notifyRefreshNeeded.bind(e),t),e.refreshIntervalEndTime=(new Date).getTime()+t)}function N(e){var t=e.Items||e,n=this.parentContainer;n&&(t.length?n.classList.remove("hide"):n.classList.add("hide"));var a,i,r=document.activeElement;this.contains(r)&&(i=!0,a=r.getAttribute("data-id")),this.innerHTML=this.getItemsHtml(t),s.default.lazyChildren(this),i&&function(e,t){if(t){var n=e.querySelector('[data-id="'+t+'"]');if(n)try{return void u.A.focus(n)}catch(e){console.error(e)}}u.A.autoFocus(e)}(this,a),R(this),this.afterRefresh&&this.afterRefresh(e)}y.enableMultiSelect=function(e){var t=this.multiSelect;if(e){if(!t){var a=this;n.e(35308).then(n.bind(n,35308)).then((function(e){var t=e.default;a.multiSelect=new t({container:a,bindOnClick:!1})}))}}else t&&(t.destroy(),this.multiSelect=null)},y.enableDragReordering=function(e){var t=this.sortable;if(e){if(!t){var n=this;n.sortable=new f.Ay(n,{draggable:".listItem",handle:".listViewDragHandle",onEnd:function(e){return function(e,t){var n=e.item,a=e.newIndex,i=n.getAttribute("data-playlistitemid"),r=n.getAttribute("data-playlistid");if(r){var s=n.getAttribute("data-serverid"),o=m.A.getApiClient(s);c.Ay.show(),o.ajax({url:o.getUrl("Playlists/"+r+"/Items/"+i+"/Move/"+a),type:"POST"}).then((function(){c.Ay.hide()}),(function(){c.Ay.hide(),t.refreshItems()}))}else{var l=e.oldIndex;n.dispatchEvent(new CustomEvent("itemdrop",{detail:{oldIndex:l,newIndex:a,playlistItemId:i},bubbles:!0,cancelable:!1}))}}(e,n)}})}}else t&&(t.destroy(),this.sortable=null)},y.createdCallback=function(){this.classList.add("itemsContainer")},y.attachedCallback=function(){this.addEventListener("click",v),l.A.touch?this.addEventListener("contextmenu",p):"false"!==this.getAttribute("data-contextmenu")&&this.addEventListener("contextmenu",b),(o.A.desktop||o.A.mobile&&"false"!==this.getAttribute("data-multiselect"))&&this.enableMultiSelect(!0),o.A.tv&&this.classList.add("itemsContainer-tv"),a.Ay.on(this,{click:!1}),k(this,"UserDataChanged",I),k(this,"TimerCreated",A),k(this,"SeriesTimerCreated",T),k(this,"TimerCancelled",P),k(this,"SeriesTimerCancelled",C),k(this,"LibraryChanged",w),k(this,"playbackstop",x,r.f),"true"===this.getAttribute("data-dragreorder")&&this.enableDragReordering(!0)},y.detachedCallback=function(){D(this),this.enableMultiSelect(!1),this.enableDragReordering(!1),this.removeEventListener("click",v),this.removeEventListener("contextmenu",b),this.removeEventListener("contextmenu",p),a.Ay.off(this,{click:!1}),L(this,"UserDataChanged"),L(this,"TimerCreated"),L(this,"SeriesTimerCreated"),L(this,"TimerCancelled"),L(this,"SeriesTimerCancelled"),L(this,"LibraryChanged"),L(this,"playbackstop",r.f),this.fetchData=null,this.getItemsHtml=null,this.parentContainer=null},y.pause=function(){D(this,!0),this.paused=!0},y.resume=function(e){this.paused=!1;var t=this.refreshIntervalEndTime;if(t){var n=t-(new Date).getTime();n>0&&!this.needsRefresh?R(this,n):(this.needsRefresh=!0,this.refreshIntervalEndTime=null)}return this.needsRefresh||null!=e&&e.refresh?this.refreshItems():Promise.resolve()},y.refreshItems=function(){return this.fetchData?this.paused?(this.needsRefresh=!0,Promise.resolve()):(this.needsRefresh=!1,this.fetchData().then(N.bind(this))):Promise.resolve()},y.notifyRefreshNeeded=function(e){if(this.paused)this.needsRefresh=!0;else{var t=this.refreshTimeout;t&&clearTimeout(t),!0===e?this.refreshItems():this.refreshTimeout=setTimeout(this.refreshItems.bind(this),1e4)}},document.registerElement("emby-itemscontainer",{prototype:y,extends:"div"})},42305:function(e,t,n){n.d(t,{C:function(){return o},L:function(){return l}});var a=n(8280),i=n(61586),r=n(55532),s=n(69410),o=function(e){return(0,a.j)({queryKey:["SystemInfo"],queryFn:function(t){var n=t.signal;return function(e,t){return n=void 0,a=void 0,s=function(){return function(e,t){var n,a,i,r={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]},s=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return s.next=o(0),s.throw=o(1),s.return=o(2),"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function o(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s&&(s=0,o[0]&&(r=0)),r;)try{if(n=1,a&&(i=2&o[0]?a.return:o[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,o[1])).done)return i;switch(a=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return r.label++,{value:o[1],done:!1};case 5:r.label++,a=o[1],o=[0];continue;case 7:o=r.ops.pop(),r.trys.pop();continue;default:if(!((i=(i=r.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){r=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){r.label=o[1];break}if(6===o[0]&&r.label<i[1]){r.label=i[1],i=o;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(o);break}i[2]&&r.ops.pop(),r.trys.pop();continue}o=t.call(e,r)}catch(e){o=[6,e],a=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}}(this,(function(n){switch(n.label){case 0:return e?[4,(0,r.c)(e).getSystemInfo(t)]:(console.warn("[fetchSystemInfo] No API instance available"),[2]);case 1:return[2,n.sent().data]}}))},new((i=void 0)||(i=Promise))((function(e,t){function r(e){try{l(s.next(e))}catch(e){t(e)}}function o(e){try{l(s.throw(e))}catch(e){t(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(r,o)}l((s=s.apply(n,a||[])).next())}));var n,a,i,s}(e,{signal:n,headers:{"Cache-Control":"no-cache"}})},staleTime:1e3,enabled:!!e})},l=function(){var e=(0,s.gf)().api;return(0,i.I)(o(e))}}}]);