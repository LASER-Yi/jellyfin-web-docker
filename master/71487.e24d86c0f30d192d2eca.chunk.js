/*! For license information please see 71487.e24d86c0f30d192d2eca.chunk.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[71487,89824],{17369:function(e,t,n){"use strict";n.r(t),n(96626),n(26031),n(95822),n(56187),n(38690),n(81414),n(11908),n(33096),n(89228),n(13227),n(14011),n(11431);var a=n(17081),i=n(84597),o=n(56663),s=n(12801),r=n(94994),l=n(94915),c=n(67932),u=n(18613),d=n(90846),h=n(67561);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function f(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,y(a.key),a)}}function y(e){var t=function(e,t){if("object"!=p(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,"string");if("object"!=p(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==p(t)?t:String(t)}var m=new(function(){function e(){var t,n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.syncPlayEnabled=!1,this.SyncPlay=null===(t=c.E.firstOfType(d.z.SyncPlay))||void 0===t?void 0:t.instance,this.SyncPlay&&h.Z.on(this.SyncPlay.Manager,"enabled",(function(e,t){n.syncPlayEnabled=t})),h.Z.on(c.E,"registered",(function(e,t){t.type===d.z.SyncPlay&&(n.SyncPlay=t.instance,h.Z.on(t.instance.Manager,"enabled",(function(e,t){n.syncPlayEnabled=t})))}))}var t,n;return t=e,(n=[{key:"showNewJoinGroupSelection",value:function(e,t,n){var a=t.localUser?t.localUser.Policy:{};n.getSyncPlayGroups().then((function(l){l.json().then((function(l){var c=l.map((function(e){return{name:e.GroupName,icon:"person",id:e.GroupId,selected:!1,secondaryText:e.Participants.join(", ")}}));if("CreateAndJoinGroups"===a.SyncPlayAccess&&c.push({name:r.ZP.translate("LabelSyncPlayNewGroup"),icon:"add",id:"new-group",selected:!0,secondaryText:r.ZP.translate("LabelSyncPlayNewGroupDescription")}),0===c.length&&"JoinGroups"===a.SyncPlayAccess)return(0,o.Z)({text:r.ZP.translate("MessageSyncPlayCreateGroupDenied")}),void i.ZP.hide();var u={title:r.ZP.translate("HeaderSyncPlaySelectGroup"),items:c,positionTo:e,border:!0,dialogClass:"syncPlayGroupMenu"};s.default.show(u).then((function(e){"new-group"==e?n.createSyncPlayGroup({GroupName:r.ZP.translate("SyncPlayGroupDefaultTitle",t.localUser.Name)}):e&&n.joinSyncPlayGroup({GroupId:e})})).catch((function(e){e&&console.error("SyncPlay: unexpected error listing groups:",e)})),i.ZP.hide()}))})).catch((function(e){console.error(e),i.ZP.hide(),(0,o.Z)({text:r.ZP.translate("MessageSyncPlayErrorAccessingGroups")})}))}},{key:"showLeaveGroupSelection",value:function(e,t,n){var o,l,c,u,d=this,h=null===(o=this.SyncPlay)||void 0===o?void 0:o.Manager.getGroupInfo(),p=[];null!==(l=this.SyncPlay)&&void 0!==l&&l.Manager.isPlaylistEmpty()||null!==(c=this.SyncPlay)&&void 0!==c&&c.Manager.isPlaybackActive()?null!==(u=this.SyncPlay)&&void 0!==u&&u.Manager.isPlaybackActive()&&p.push({name:r.ZP.translate("LabelSyncPlayHaltPlayback"),icon:"pause_circle_filled",id:"halt-playback",selected:!1,secondaryText:r.ZP.translate("LabelSyncPlayHaltPlaybackDescription")}):p.push({name:r.ZP.translate("LabelSyncPlayResumePlayback"),icon:"play_circle_filled",id:"resume-playback",selected:!1,secondaryText:r.ZP.translate("LabelSyncPlayResumePlaybackDescription")}),p.push({name:r.ZP.translate("Settings"),icon:"video_settings",id:"settings",selected:!1,secondaryText:r.ZP.translate("LabelSyncPlaySettingsDescription")}),p.push({name:r.ZP.translate("LabelSyncPlayLeaveGroup"),icon:"meeting_room",id:"leave-group",selected:!0,secondaryText:r.ZP.translate("LabelSyncPlayLeaveGroupDescription")});var f={title:h.GroupName,text:h.Participants.join(", "),dialogClass:"syncPlayGroupMenu",items:p,positionTo:e,border:!0};s.default.show(f).then((function(e){var t;if("resume-playback"==e)null===(t=d.SyncPlay)||void 0===t||t.Manager.resumeGroupPlayback(n);else if("halt-playback"==e){var i;null===(i=d.SyncPlay)||void 0===i||i.Manager.haltGroupPlayback(n)}else if("leave-group"==e)n.leaveSyncPlayGroup();else if("settings"==e){var o;new a.default(n,null===(o=d.SyncPlay)||void 0===o?void 0:o.Manager.getTimeSyncCore(),{groupInfo:h}).embed().catch((function(e){e&&console.error("Error creating SyncPlay settings editor",e)}))}})).catch((function(e){e&&console.error("SyncPlay: unexpected error showing group menu:",e)})),i.ZP.hide()}},{key:"show",value:function(e){var t=this;i.ZP.show(),l.default.check().then((function(){console.debug("Playback is allowed.")})).catch((function(e){console.error("Playback not allowed!",e),(0,o.Z)({text:r.ZP.translate("MessageSyncPlayPlaybackPermissionRequired")})}));var n=u.Z.currentApiClient();u.Z.user(n).then((function(a){t.syncPlayEnabled?t.showLeaveGroupSelection(e,a,n):t.showNewJoinGroupSelection(e,a,n)})).catch((function(e){console.error(e),i.ZP.hide(),(0,o.Z)({text:r.ZP.translate("MessageSyncPlayNoGroupsAvailable")})}))}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}());t.default=m},94915:function(e,t,n){"use strict";n.r(t),n(81414),n(37666),n(44231),n(26031),n(95822),n(56187),n(38690),n(11908),n(33096),n(89228),n(13227),n(14011),n(11431);var a=n(84881);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function o(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,s(a.key),a)}}function s(e){var t=function(e,t){if("object"!=i(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,"string");if("object"!=i(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==i(t)?t:String(t)}var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,(n=[{key:"check",value:function(){if(a.M.supports("htmlaudioautoplay"))return Promise.resolve(!0);var e,t=((e=document.createElement("audio")).classList.add("testMediaPlayerAudio"),e.classList.add("hide"),document.body.appendChild(e),e.volume=1,e.src="assets/audio/silence.mp3",e);return t.play().finally((function(){!function(e){e.pause(),e.remove()}(t)}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.default=new r},71487:function(e,t,n){"use strict";n.r(t),n(88646),n(91270),n(59139),n(56187),n(38690),n(89228),n(13227),n(81414),n(37666),n(14011),n(11431),n(62659),n(47134),n(96626),n(84159),n(44901),n(54134);var a,i,o,s,r,l,c,u,d,h,p,f,y,m,v,b=n(65009),g=n.n(b),P=n(40275),S=n.n(P),L=n(30077),w=n(59091),M=n(77357),T=n(72365),k=n(30325),Z=n(58517),O=n(93110),B=n(66560),C=n(84881),E=n(48957),x=n(67932),H=n(17369),A=n(57366),I=n(94994),G=n(23509),q=n(25446),D=n(60635),U=n(18613),N=n(90846),j=n(67561),R=n(28457),_=n(61693);function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function F(){var e;return null!==(e=h)&&void 0!==e&&e.localUser?U.Z.getApiClient(h.localUser.ServerId):U.Z.currentApiClient()}function W(){u&&(u.title=I.ZP.translate("ButtonBack")),r&&(r.title=I.ZP.translate("Home")),s&&(s.title=I.ZP.translate("Menu")),m&&(m.title=I.ZP.translate("ButtonSyncPlay")),y&&(y.title=I.ZP.translate("ButtonPlayer")),p&&(p.title=I.ZP.translate("ButtonCast")),f&&(f.title=I.ZP.translate("Search")),d&&(d.title=I.ZP.translate("Settings"))}function Y(e){var t;if(W(),null!=e&&e.name?(e.imageUrl&&(J(e.imageUrl),t=!0),d.title=e.name,d.classList.remove("hide")):d.classList.add("hide"),t||J(null),null!=e&&e.localUser){r&&r.classList.remove("hide"),f&&f.classList.remove("hide"),k.Z.tv||p.classList.remove("hide");var n=e.Policy?e.Policy:e.localUser.Policy;m&&x.E.ofType(N.z.SyncPlay).length>0&&"None"!==(null==n?void 0:n.SyncPlayAccess)&&m.classList.remove("hide")}else r.classList.add("hide"),p.classList.add("hide"),m.classList.add("hide"),f&&f.classList.add("hide");he=!1}function J(e){e?(d.classList.add("headerUserButtonRound"),d.innerHTML='<div class="headerButton headerButtonRight paper-icon-button-light headerUserButtonRound" style="background-image:url(\''+e+"');\"></div>"):(d.classList.remove("headerUserButtonRound"),d.innerHTML='<span class="material-icons person" aria-hidden="true"></span>')}function V(){o.isVisible?K():o.open()}function K(){o.close()}function Q(){o.isVisible?k.Z.mobile&&document.body.classList.add("bodyWithPopupOpen"):document.body.classList.remove("bodyWithPopupOpen")}function $(){var e=this.getElementsByClassName("sectionName")[0],t=e?e.innerHTML:this.innerHTML;ye.setTitle(t)}function X(e){if(!e)return".userMenuOptions",!1,void((t=document.querySelector(".userMenuOptions"))&&t.classList.add("hide"));var t,n=D.default.getCurrentUserId(),a=F(),i=document.querySelector(".customMenuOptions");i&&(0,q.hi)().then((function(e){e.forEach((function(e){var t=document.createElement("a","emby-linkbutton");t.classList.add("navMenuOption","lnkMediaFolder"),t.rel="noopener noreferrer",t.target="_blank",t.href=e.url;var n=document.createElement("span");n.className="material-icons navMenuOptionIcon ".concat(e.icon||"link"),n.setAttribute("aria-hidden","true"),t.appendChild(n);var a=document.createElement("span");a.className="navMenuOptionText",a.textContent=e.name,t.appendChild(a),i.appendChild(t)}))}));var o=document.querySelector(".libraryMenuOptions");o&&function(e,t){return M.E.fetchQuery((0,L.l)((0,w.a)(e),t)).then((function(e){for(var t=e.Items,n=[],a=0,i=t.length;a<i;a++){var o=t[a];if(n.push(o),"livetv"==o.CollectionType){o.ImageTags={},o.icon="live_tv";var s=Object.assign({},o);s.Name=I.ZP.translate("Guide"),s.ImageTags={},s.icon="dvr",s.url="#/livetv.html?tab=1",n.push(s)}}return n}))}(a,n).then((function(e){var t=e,n='<h3 class="sidebarHeader">'.concat(I.ZP.translate("HeaderMedia"),"</h3>");n+=t.map((function(e){var t,n,a=e.icon||G.ZP.getLibraryIcon(e.CollectionType),i=e.Id;return'<a is="emby-linkbutton" data-itemid="'.concat(i,'" class="lnkMediaFolder navMenuOption" href="').concat((t=e,n=e.CollectionType,B.appRouter.getRouteUrl(t,{context:n})),'">\n                                    <span class="material-icons navMenuOptionIcon ').concat(a,'" aria-hidden="true"></span>\n                                    <span class="sectionName navMenuOptionText">').concat(g()(e.Name),"</span>\n                                  </a>")})).join(""),o.innerHTML=n;var a,i=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?z(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,i=function(){};return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,r=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){r=!0,o=e},f:function(){try{s||null==n.return||n.return()}finally{if(r)throw o}}}}(o.querySelectorAll(".navMenuOption"));try{for(i.s();!(a=i.n()).done;){var s=a.value;s.removeEventListener("click",$),s.addEventListener("click",$)}}catch(e){i.e(e)}finally{i.f()}}))}function ee(){return(0,R.a)("topParentId")||null}function te(e){T.ZP.parentWithTag(e.target,"A")&&setTimeout(K,30)}function ne(){D.default.selectServer()}function ae(){D.default.navigate("mypreferencesmenu.html")}function ie(){C.M.exit()}function oe(){D.default.logout()}function se(){var e=document,t=E.O.getPlayerInfo(),n=p.querySelector(".material-icons");n.classList.remove("cast_connected","cast"),t&&!t.isLocalPlayer?(n.classList.add("cast_connected"),p.classList.add("castButton-active"),e.querySelector(".headerSelectedPlayer").innerText=t.deviceName||t.name):(n.classList.add("cast"),p.classList.remove("castButton-active"),e.querySelector(".headerSelectedPlayer").innerHTML="")}function re(){return o?Promise.resolve(o):(a=document.querySelector(".mainDrawer"),(i=a.querySelector(".scrollContainer")).addEventListener("click",te),new Promise((function(e){n.e(64529).then(n.bind(n,64529)).then((function(t){var n,i=t.default;o=new i((n=window.screen.availWidth-50,n=Math.max(n,240),n=Math.min(n,320),{target:a,onChange:Q,width:n})),k.Z.tv||a.classList.remove("hide"),e(o)}))})))}n(61414);var le,ce=k.Z.desktop,ue=!k.Z.tv,de=document.querySelector(".skinHeader"),he=!0;(0,D.pageClassOn)("pagebeforeshow","page",(function(){this.classList.contains("withTabs")||ye.setTabs(null)})),(0,D.pageClassOn)("pageshow","page",(function(e){var t,n=this,a=n.classList.contains("type-interior"),r=n.classList.contains("homePage"),c=!a&&n.classList.contains("libraryPage");a||(s&&(ce||r&&ue?s.classList.remove("hide"):s.classList.add("hide")),"library"!==l&&(re(),l="library",t?Promise.resolve(t):U.Z.user(F()).then((function(e){!function(e){var t,n="";n+='<div style="height:.5em;"></div>',n+='<a is="emby-linkbutton" class="navMenuOption lnkMediaFolder" href="#/home.html"><span class="material-icons navMenuOptionIcon home" aria-hidden="true"></span><span class="navMenuOptionText">'.concat(I.ZP.translate("Home"),"</span></a>"),n+='<div class="customMenuOptions"></div>',n+='<div class="libraryMenuOptions"></div>',null!==(t=e.localUser)&&void 0!==t&&t.Policy.IsAdministrator&&(n+='<div class="adminMenuOptions">',n+='<h3 class="sidebarHeader">',n+=I.ZP.translate("HeaderAdmin"),n+="</h3>",n+='<a is="emby-linkbutton" class="navMenuOption lnkMediaFolder lnkManageServer" data-itemid="dashboard" href="#/dashboard"><span class="material-icons navMenuOptionIcon dashboard" aria-hidden="true"></span><span class="navMenuOptionText">'.concat(I.ZP.translate("TabDashboard"),"</span></a>"),n+='<a is="emby-linkbutton" class="navMenuOption lnkMediaFolder editorViewMenu" data-itemid="editor" href="#/metadata"><span class="material-icons navMenuOptionIcon mode_edit" aria-hidden="true"></span><span class="navMenuOptionText">'.concat(I.ZP.translate("Metadata"),"</span></a>"),n+="</div>"),e.localUser&&(n+='<div class="userMenuOptions">',n+='<h3 class="sidebarHeader">',n+=I.ZP.translate("HeaderUser"),n+="</h3>",C.M.supports("multiserver")&&(n+='<a is="emby-linkbutton" class="navMenuOption lnkMediaFolder btnSelectServer" data-itemid="selectserver" href="#"><span class="material-icons navMenuOptionIcon storage" aria-hidden="true"></span><span class="navMenuOptionText">'.concat(I.ZP.translate("SelectServer"),"</span></a>")),n+='<a is="emby-linkbutton" class="navMenuOption lnkMediaFolder btnSettings" data-itemid="settings" href="#"><span class="material-icons navMenuOptionIcon settings" aria-hidden="true"></span><span class="navMenuOptionText">'.concat(I.ZP.translate("Settings"),"</span></a>"),n+='<a is="emby-linkbutton" class="navMenuOption lnkMediaFolder btnLogout" data-itemid="logout" href="#"><span class="material-icons navMenuOptionIcon exit_to_app" aria-hidden="true"></span><span class="navMenuOptionText">'.concat(I.ZP.translate("ButtonSignOut"),"</span></a>"),C.M.supports("exitmenu")&&(n+='<a is="emby-linkbutton" class="navMenuOption lnkMediaFolder exitApp" data-itemid="exitapp" href="#"><span class="material-icons navMenuOptionIcon close" aria-hidden="true"></span><span class="navMenuOptionText">'.concat(I.ZP.translate("ButtonExitApp"),"</span></a>")),n+="</div>"),i.innerHTML=n;var a=i.querySelector(".btnSelectServer");a&&a.addEventListener("click",ne);var o=i.querySelector(".btnSettings");o&&o.addEventListener("click",ae);var s=i.querySelector(".exitApp");s&&s.addEventListener("click",ie);var r=i.querySelector(".btnLogout");r&&r.addEventListener("click",oe)}(e),X(e.localUser)})))),function(e,t){var n=3;if(e?n=2:t&&(n=1),le!==n){le=n,e&&!k.Z.mobile?de.classList.add("headroomDisabled"):de.classList.remove("headroomDisabled");var a=document.body.classList;t?(a.add("libraryDocument"),a.remove("dashboardDocument"),a.remove("hideMainDrawer"),o&&o.setEdgeSwipeEnabled(!0)):e?(a.remove("libraryDocument"),a.add("dashboardDocument"),a.remove("hideMainDrawer"),o&&o.setEdgeSwipeEnabled(!0)):(a.remove("libraryDocument"),a.remove("dashboardDocument"),a.add("hideMainDrawer"),o&&o.setEdgeSwipeEnabled(!1))}he&&U.Z.user(F()).then(Y)}(a,c),e.detail.isRestored||window.scrollTo(0,0),function(e){var t=e.getAttribute("data-title");t?ye.setTitle(t):e.classList.contains("standalonePage")&&ye.setDefaultTitle()}(n),function(e){u&&("false"!==e.getAttribute("data-backbutton")&&B.appRouter.canGoBack()?u.classList.remove("hide"):u.classList.add("hide"))}(n),function(e){for(var t=e.classList.contains("liveTvPage"),n=e.classList.contains("channelsPage"),a=e.classList.contains("metadataEditorPage"),i=e.classList.contains("mySyncPage"),o=t||n||a||i||e.classList.contains("allLibraryPage")?"":ee()||"",s=document.getElementsByClassName("lnkMediaFolder"),r=0,l=s.length;r<l;r++){var c=s[r],u=c.getAttribute("data-itemid");n&&"channels"===u||t&&"livetv"===u||a&&"editor"===u||i&&"manageoffline"===u&&-1!=window.location.href.toString().indexOf("mode=download")||i&&"syncotherdevices"===u&&-1==window.location.href.toString().indexOf("mode=download")||o&&u==o?c.classList.add("navMenuOption-selected"):c.classList.remove("navMenuOption-selected")}}(n)})),j.Z.on(U.Z,"localusersignedin",(function(e,t){var n=U.Z.getApiClient(t.ServerId);l=null,h={localUser:t},re(),U.Z.user(n).then((function(e){h=e,Y(e)}))})),j.Z.on(U.Z,"localusersignedout",(function(){h={},Y()})),j.Z.on(E.O,"playerchange",se),re();var pe,fe,ye={getTopParentId:ee,onHardwareMenuButtonClick:function(){V()},setTabs:function(e,t,a){Promise.all([n.e(15723),n.e(67345)]).then(n.bind(n,67345)).then((function(n){e?n.setTabs(O.Z.currentView(),t,a,(function(){return[]})):n.setTabs(null)}))},setDefaultTitle:function(){c||(c=document.querySelector(".pageTitle")),c&&(c.classList.add("pageTitleWithLogo"),c.classList.add("pageTitleWithDefaultLogo"),c.style.backgroundImage=null,c.innerHTML=""),document.title="Jellyfin"},setTitle:function(e){if(null!=e){"-"===e&&(e="");var t=e;c||(c=document.querySelector(".pageTitle")),c&&(c.classList.remove("pageTitleWithLogo"),c.classList.remove("pageTitleWithDefaultLogo"),c.style.backgroundImage=null,c.innerText=t||""),document.title=e||"Jellyfin"}else ye.setDefaultTitle()},setTransparentMenu:function(e){e?de.classList.add("semiTransparent"):de.classList.remove("semiTransparent")}};window.LibraryMenu=ye,fe="",fe+='<div class="flex align-items-center flex-grow headerTop">',fe+='<div class="headerLeft">',fe+='<button type="button" is="paper-icon-button-light" class="headerButton headerButtonLeft headerBackButton hide"><span class="material-icons '+(A.Z.safari?"chevron_left":"arrow_back")+'" aria-hidden="true"></span></button>',fe+='<button type="button" is="paper-icon-button-light" class="headerButton headerHomeButton hide barsMenuButton headerButtonLeft"><span class="material-icons home" aria-hidden="true"></span></button>',fe+='<button type="button" is="paper-icon-button-light" class="headerButton mainDrawerButton barsMenuButton headerButtonLeft hide"><span class="material-icons menu" aria-hidden="true"></span></button>',fe+='<h3 class="pageTitle" aria-hidden="true"></h3>',fe+="</div>",fe+='<div class="headerRight">',fe+='<button is="paper-icon-button-light" class="headerSyncButton syncButton headerButton headerButtonRight hide"><span class="material-icons groups" aria-hidden="true"></span></button>',fe+='<span class="headerSelectedPlayer"></span>',fe+='<button is="paper-icon-button-light" class="headerAudioPlayerButton audioPlayerButton headerButton headerButtonRight hide"><span class="material-icons music_note" aria-hidden="true"></span></button>',fe+='<button is="paper-icon-button-light" class="headerCastButton castButton headerButton headerButtonRight hide"><span class="material-icons cast" aria-hidden="true"></span></button>',fe+='<button type="button" is="paper-icon-button-light" class="headerButton headerButtonRight headerSearchButton hide"><span class="material-icons search" aria-hidden="true"></span></button>',fe+='<button is="paper-icon-button-light" class="headerButton headerButtonRight headerUserButton hide"><span class="material-icons person" aria-hidden="true"></span></button>',fe+='<div class="currentTimeText hide"></div>',fe+="</div>",fe+="</div>",fe+='<div class="headerTabs sectionTabs hide">',fe+="</div>",de.classList.add("skinHeader-withBackground"),de.classList.add("skinHeader-blurred"),de.innerHTML=fe,u=de.querySelector(".headerBackButton"),r=de.querySelector(".headerHomeButton"),s=de.querySelector(".mainDrawerButton"),d=de.querySelector(".headerUserButton"),p=de.querySelector(".headerCastButton"),y=de.querySelector(".headerAudioPlayerButton"),f=de.querySelector(".headerSearchButton"),m=de.querySelector(".headerSyncButton"),v=de.querySelector(".currentTimeText"),W(),n.e(81038).then(n.bind(n,81038)).then((function(e){e.lazyChildren(de)})),s&&s.addEventListener("click",V),u&&u.addEventListener("click",(function(){B.appRouter.back()})),f&&f.addEventListener("click",(function(){Z.default.handleCommand("search")})),d.addEventListener("click",(function(){D.default.navigate("mypreferencesmenu.html")})),r.addEventListener("click",(function(){D.default.navigate("home.html")})),k.Z.tv||p.addEventListener("click",(function(){var e=this;Promise.resolve().then(n.bind(n,73526)).then((function(t){t.show(e)}))})),y.addEventListener("click",(function(){return B.appRouter.showNowPlaying()})),m.addEventListener("click",(function(){H.default.show(this)})),k.Z.mobile&&(pe=de,new(S())(pe).init()),j.Z.on(E.O,"playbackstart",(function(){E.O.isPlayingAudio()&&k.Z.tv?y.classList.remove("hide"):y.classList.add("hide")})),j.Z.on(E.O,"playbackstop",(function(e,t){"Audio"!=t.nextMediaType&&y.classList.add("hide")})),se(),k.Z.tv?(v.classList.remove("hide"),setInterval((function(){v.innerText=_.ZP.getDisplayTime(new Date)}),1e3)):v.classList.add("hide"),t.default=ye},40275:function(e){e.exports=function(){"use strict";function e(){return"undefined"!=typeof window}function t(e){return(o=e)&&o.document&&function(e){return 9===e.nodeType}(o.document)?(n=(t=e).document,a=n.body,i=n.documentElement,{scrollHeight:function(){return Math.max(a.scrollHeight,i.scrollHeight,a.offsetHeight,i.offsetHeight,a.clientHeight,i.clientHeight)},height:function(){return t.innerHeight||i.clientHeight||a.clientHeight},scrollY:function(){return void 0!==t.pageYOffset?t.pageYOffset:(i||a.parentNode||a).scrollTop}}):function(e){return{scrollHeight:function(){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},height:function(){return Math.max(e.offsetHeight,e.clientHeight)},scrollY:function(){return e.scrollTop}}}(e);var t,n,a,i,o}function n(e,n,a){var i,o=function(){var e=!1;try{var t={get passive(){e=!0}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){e=!1}return e}(),s=!1,r=t(e),l=r.scrollY(),c={};function u(){var e=Math.round(r.scrollY()),t=r.height(),i=r.scrollHeight();c.scrollY=e,c.lastScrollY=l,c.direction=e>l?"down":"up",c.distance=Math.abs(e-l),c.isOutOfBounds=e<0||e+t>i,c.top=e<=n.offset[c.direction],c.bottom=e+t>=i,c.toleranceExceeded=c.distance>n.tolerance[c.direction],a(c),l=e,s=!1}function d(){s||(s=!0,i=requestAnimationFrame(u))}var h=!!o&&{passive:!0,capture:!1};return e.addEventListener("scroll",d,h),u(),{destroy:function(){cancelAnimationFrame(i),e.removeEventListener("scroll",d,h)}}}function a(e){return e===Object(e)?e:{down:e,up:e}}function i(e,t){t=t||{},Object.assign(this,i.options,t),this.classes=Object.assign({},i.options.classes,t.classes),this.elem=e,this.tolerance=a(this.tolerance),this.offset=a(this.offset),this.initialised=!1,this.frozen=!1}return i.prototype={constructor:i,init:function(){return i.cutsTheMustard&&!this.initialised&&(this.addClass("initial"),this.initialised=!0,setTimeout((function(e){e.scrollTracker=n(e.scroller,{offset:e.offset,tolerance:e.tolerance},e.update.bind(e))}),100,this)),this},destroy:function(){this.initialised=!1,Object.keys(this.classes).forEach(this.removeClass,this),this.scrollTracker.destroy()},unpin:function(){!this.hasClass("pinned")&&this.hasClass("unpinned")||(this.addClass("unpinned"),this.removeClass("pinned"),this.onUnpin&&this.onUnpin.call(this))},pin:function(){this.hasClass("unpinned")&&(this.addClass("pinned"),this.removeClass("unpinned"),this.onPin&&this.onPin.call(this))},freeze:function(){this.frozen=!0,this.addClass("frozen")},unfreeze:function(){this.frozen=!1,this.removeClass("frozen")},top:function(){this.hasClass("top")||(this.addClass("top"),this.removeClass("notTop"),this.onTop&&this.onTop.call(this))},notTop:function(){this.hasClass("notTop")||(this.addClass("notTop"),this.removeClass("top"),this.onNotTop&&this.onNotTop.call(this))},bottom:function(){this.hasClass("bottom")||(this.addClass("bottom"),this.removeClass("notBottom"),this.onBottom&&this.onBottom.call(this))},notBottom:function(){this.hasClass("notBottom")||(this.addClass("notBottom"),this.removeClass("bottom"),this.onNotBottom&&this.onNotBottom.call(this))},shouldUnpin:function(e){return"down"===e.direction&&!e.top&&e.toleranceExceeded},shouldPin:function(e){return"up"===e.direction&&e.toleranceExceeded||e.top},addClass:function(e){this.elem.classList.add.apply(this.elem.classList,this.classes[e].split(" "))},removeClass:function(e){this.elem.classList.remove.apply(this.elem.classList,this.classes[e].split(" "))},hasClass:function(e){return this.classes[e].split(" ").every((function(e){return this.classList.contains(e)}),this.elem)},update:function(e){e.isOutOfBounds||!0!==this.frozen&&(e.top?this.top():this.notTop(),e.bottom?this.bottom():this.notBottom(),this.shouldUnpin(e)?this.unpin():this.shouldPin(e)&&this.pin())}},i.options={tolerance:{up:0,down:0},offset:0,scroller:e()?window:null,classes:{frozen:"headroom--frozen",pinned:"headroom--pinned",unpinned:"headroom--unpinned",top:"headroom--top",notTop:"headroom--not-top",bottom:"headroom--bottom",notBottom:"headroom--not-bottom",initial:"headroom"}},i.cutsTheMustard=!!(e()&&function(){}.bind&&"classList"in document.documentElement&&Object.assign&&Object.keys&&requestAnimationFrame),i}()},30077:function(e,t,n){"use strict";n.d(t,{l:function(){return r},G:function(){return l}});var a=n(58832),i=n(63975),o=n(2943),s=function(){return s=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},s.apply(this,arguments)},r=function(e,t,n){return{queryKey:["User",t,"Views",n],queryFn:function(i){var o=i.signal;return function(e,t,n,i){return o=void 0,r=void 0,c=function(){return function(e,t){var n,a,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function r(r){return function(l){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,r[0]&&(s=0)),s;)try{if(n=1,a&&(i=2&r[0]?a.return:r[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,r[1])).done)return i;switch(a=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,a=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){s=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){s.label=r[1];break}if(6===r[0]&&s.label<i[1]){s.label=i[1],i=r;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(r);break}i[2]&&s.ops.pop(),s.trys.pop();continue}r=t.call(e,s)}catch(e){r=[6,e],a=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,l])}}}(this,(function(o){switch(o.label){case 0:if(!e)throw new Error("No API instance available");if(!t)throw new Error("No User ID provided");return[4,(0,a.U)(e).getUserViews(s(s({},n),{userId:t}),i)];case 1:return[2,o.sent().data]}}))},new((l=void 0)||(l=Promise))((function(e,t){function n(e){try{i(c.next(e))}catch(e){t(e)}}function a(e){try{i(c.throw(e))}catch(e){t(e)}}function i(t){var i;t.done?e(t.value):(i=t.value,i instanceof l?i:new l((function(e){e(i)}))).then(n,a)}i((c=c.apply(o,r||[])).next())}));var o,r,l,c}(e,t,n,{signal:o})},staleTime:1e3,enabled:!!e&&!!t}},l=function(e,t){var n=(0,o.h_)().api;return(0,i.a)(r(n,e,t))}}}]);