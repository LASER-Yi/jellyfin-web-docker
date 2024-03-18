"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[91812,49213,59841],{45249:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var a=n(24246),c=n(27378),i=n(65009),r=n.n(i),l=n(60635),o=n(94994),s=n(71487),d=n(5712),u=n(91904),h=n(503),m=function(e){var t=e.className,n=e.title;return{__html:'<a\n        is="emby-linkbutton"\n        class="'.concat(t,"\"\n        href='#'\n        >\n        ").concat(n,"\n    </a>")}},b=function(e){var t=e.className,n=e.title;return(0,a.jsx)("div",{dangerouslySetInnerHTML:m({className:t,title:o.ZP.translate(n)})})},v=n(87926),p=n(614),y=n(84597),f=n(56663),k=n(28457),P=n(19636),x=n(87143),g=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var a,c,i=n.call(e),r=[];try{for(;(void 0===t||t-- >0)&&!(a=i.next()).done;)r.push(a.value)}catch(e){c={error:e}}finally{try{a&&!a.done&&(n=i.return)&&n.call(i)}finally{if(c)throw c.error}}return r},S=function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],a=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&a>=e.length&&(e=void 0),{value:e&&e[a++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},N=function(){var e=g((0,c.useState)(""),2),t=e[0],n=e[1],i=g((0,c.useState)([]),2),m=i[0],N=i[1],A=g((0,c.useState)([]),2),C=A[0],w=A[1],j=g((0,c.useState)([]),2),E=j[0],L=j[1],Z=g((0,c.useState)(""),2),I=Z[0],D=Z[1],T=g((0,c.useState)(""),2),q=T[0],R=T[1],M=(0,c.useRef)(null),O=function(){var e=(0,k.a)("userId");return window.ApiClient.getUser(e)},U=(0,c.useCallback)((function(e,t){var n=M.current;if(n){n.querySelector(".fldSelectLoginProvider").classList.toggle("hide",t.length<=1),w(t);var a=e.Policy.AuthenticationProviderId;D(a)}else console.error("Unexpected null reference")}),[]),H=(0,c.useCallback)((function(e,t){var n=M.current;if(n){n.querySelector(".fldSelectPasswordResetProvider").classList.toggle("hide",t.length<=1),L(t);var a=e.Policy.PasswordResetProviderId;R(a)}else console.error("Unexpected null reference")}),[]),F=(0,c.useCallback)((function(e,t){var n=M.current;n?window.ApiClient.getJSON(window.ApiClient.getUrl("Channels",{SupportsMediaDeletion:!0})).then((function(a){var c,i,r,l,o,s=[];try{for(var d=S(t),u=d.next();!u.done;u=d.next()){var h=u.value;o=e.Policy.EnableContentDeletion||-1!=e.Policy.EnableContentDeletionFromFolders.indexOf(h.Id)?' checked="checked"':"",s.push({Id:h.Id,Name:h.Name,checkedAttribute:o})}}catch(e){c={error:e}}finally{try{u&&!u.done&&(i=d.return)&&i.call(d)}finally{if(c)throw c.error}}try{for(var m=S(a.Items),b=m.next();!b.done;b=m.next())h=b.value,o=e.Policy.EnableContentDeletion||-1!=e.Policy.EnableContentDeletionFromFolders.indexOf(h.Id)?' checked="checked"':"",s.push({Id:h.Id,Name:h.Name,checkedAttribute:o})}catch(e){r={error:e}}finally{try{b&&!b.done&&(l=m.return)&&l.call(m)}finally{if(r)throw r.error}}N(s);var v,p,y=n.querySelector(".chkEnableDeleteAllFolders");y.checked=e.Policy.EnableContentDeletion,v=y,p=new Event("change",{bubbles:!1,cancelable:!0}),v.dispatchEvent(p)})).catch((function(e){console.error("[useredit] failed to fetch channels",e)})):console.error("Unexpected null reference")}),[]),B=(0,c.useCallback)((function(e){var t=M.current;if(t){window.ApiClient.getJSON(window.ApiClient.getUrl("Auth/Providers")).then((function(t){U(e,t)})).catch((function(e){console.error("[useredit] failed to fetch auth providers",e)})),window.ApiClient.getJSON(window.ApiClient.getUrl("Auth/PasswordResetProviders")).then((function(t){H(e,t)})).catch((function(e){console.error("[useredit] failed to fetch password reset providers",e)})),window.ApiClient.getJSON(window.ApiClient.getUrl("Library/MediaFolders",{IsHidden:!1})).then((function(t){F(e,t.Items)})).catch((function(e){console.error("[useredit] failed to fetch media folders",e)})),t.querySelector(".disabledUserBanner").classList.toggle("hide",!e.Policy.IsDisabled);var a=t.querySelector("#txtUserName");a.disabled=!1,a.removeAttribute("disabled"),t.querySelector(".lnkEditUserPreferences").setAttribute("href","mypreferencesmenu.html?userId="+e.Id),s.default.setTitle(e.Name),n(e.Name),t.querySelector("#txtUserName").value=e.Name,t.querySelector(".chkIsAdmin").checked=e.Policy.IsAdministrator,t.querySelector(".chkDisabled").checked=e.Policy.IsDisabled,t.querySelector(".chkIsHidden").checked=e.Policy.IsHidden,t.querySelector(".chkEnableCollectionManagement").checked=e.Policy.EnableCollectionManagement,t.querySelector(".chkEnableSubtitleManagement").checked=e.Policy.EnableSubtitleManagement,t.querySelector(".chkRemoteControlSharedDevices").checked=e.Policy.EnableSharedDeviceControl,t.querySelector(".chkEnableRemoteControlOtherUsers").checked=e.Policy.EnableRemoteControlOfOtherUsers,t.querySelector(".chkEnableDownloading").checked=e.Policy.EnableContentDownloading,t.querySelector(".chkManageLiveTv").checked=e.Policy.EnableLiveTvManagement,t.querySelector(".chkEnableLiveTvAccess").checked=e.Policy.EnableLiveTvAccess,t.querySelector(".chkEnableMediaPlayback").checked=e.Policy.EnableMediaPlayback,t.querySelector(".chkEnableAudioPlaybackTranscoding").checked=e.Policy.EnableAudioPlaybackTranscoding,t.querySelector(".chkEnableVideoPlaybackTranscoding").checked=e.Policy.EnableVideoPlaybackTranscoding,t.querySelector(".chkEnableVideoPlaybackRemuxing").checked=e.Policy.EnablePlaybackRemuxing,t.querySelector(".chkForceRemoteSourceTranscoding").checked=e.Policy.ForceRemoteSourceTranscoding,t.querySelector(".chkRemoteAccess").checked=null==e.Policy.EnableRemoteAccess||e.Policy.EnableRemoteAccess,t.querySelector("#txtRemoteClientBitrateLimit").value=e.Policy.RemoteClientBitrateLimit>0?(e.Policy.RemoteClientBitrateLimit/1e6).toLocaleString(void 0,{maximumFractionDigits:6}):"",t.querySelector("#txtLoginAttemptsBeforeLockout").value=e.Policy.LoginAttemptsBeforeLockout||"0",t.querySelector("#txtMaxActiveSessions").value=e.Policy.MaxActiveSessions||"0",window.ApiClient.isMinServerVersion("10.6.0")&&(t.querySelector("#selectSyncPlayAccess").value=e.Policy.SyncPlayAccess),y.ZP.hide()}else console.error("Unexpected null reference")}),[U,H,F]),_=(0,c.useCallback)((function(){y.ZP.show(),O().then((function(e){B(e)})).catch((function(e){console.error("[useredit] failed to load data",e)}))}),[B]);(0,c.useEffect)((function(){var e=M.current;if(e){_();e.querySelector(".chkEnableDeleteAllFolders").addEventListener("change",(function(){e.querySelector(".deleteAccess").classList.toggle("hide",this.checked)})),window.ApiClient.getNamedConfiguration("network").then((function(t){e.querySelector(".fldRemoteAccess").classList.toggle("hide",!t.EnableRemoteAccess)})).catch((function(e){console.error("[useredit] failed to load network config",e)})),e.querySelector(".editUserProfileForm").addEventListener("submit",(function(t){return y.ZP.show(),O().then((function(t){!function(t){if(!t.Id||!t.Policy)throw new Error("Unexpected null user id or policy");var n;t.Name=e.querySelector("#txtUserName").value,t.Policy.IsAdministrator=e.querySelector(".chkIsAdmin").checked,t.Policy.IsHidden=e.querySelector(".chkIsHidden").checked,t.Policy.IsDisabled=e.querySelector(".chkDisabled").checked,t.Policy.EnableRemoteControlOfOtherUsers=e.querySelector(".chkEnableRemoteControlOtherUsers").checked,t.Policy.EnableLiveTvManagement=e.querySelector(".chkManageLiveTv").checked,t.Policy.EnableLiveTvAccess=e.querySelector(".chkEnableLiveTvAccess").checked,t.Policy.EnableSharedDeviceControl=e.querySelector(".chkRemoteControlSharedDevices").checked,t.Policy.EnableMediaPlayback=e.querySelector(".chkEnableMediaPlayback").checked,t.Policy.EnableAudioPlaybackTranscoding=e.querySelector(".chkEnableAudioPlaybackTranscoding").checked,t.Policy.EnableVideoPlaybackTranscoding=e.querySelector(".chkEnableVideoPlaybackTranscoding").checked,t.Policy.EnablePlaybackRemuxing=e.querySelector(".chkEnableVideoPlaybackRemuxing").checked,t.Policy.EnableCollectionManagement=e.querySelector(".chkEnableCollectionManagement").checked,t.Policy.EnableSubtitleManagement=e.querySelector(".chkEnableSubtitleManagement").checked,t.Policy.ForceRemoteSourceTranscoding=e.querySelector(".chkForceRemoteSourceTranscoding").checked,t.Policy.EnableContentDownloading=e.querySelector(".chkEnableDownloading").checked,t.Policy.EnableRemoteAccess=e.querySelector(".chkRemoteAccess").checked,t.Policy.RemoteClientBitrateLimit=Math.floor(1e6*parseFloat(e.querySelector("#txtRemoteClientBitrateLimit").value||"0")),t.Policy.LoginAttemptsBeforeLockout=parseInt(e.querySelector("#txtLoginAttemptsBeforeLockout").value||"0",10),t.Policy.MaxActiveSessions=parseInt(e.querySelector("#txtMaxActiveSessions").value||"0",10),t.Policy.AuthenticationProviderId=e.querySelector("#selectLoginProvider").value,t.Policy.PasswordResetProviderId=e.querySelector("#selectPasswordResetProvider").value,t.Policy.EnableContentDeletion=e.querySelector(".chkEnableDeleteAllFolders").checked,t.Policy.EnableContentDeletionFromFolders=t.Policy.EnableContentDeletion?[]:(n=e.querySelectorAll(".chkFolder"),Array.prototype.filter.call(n,(function(e){return e.checked})).map((function(e){return e.getAttribute("data-id")}))),t.Policy.SyncPlayAccess=e.querySelector("#selectSyncPlayAccess").value,window.ApiClient.updateUser(t).then((function(){return window.ApiClient.updateUserPolicy(t.Id||"",t.Policy||{PasswordResetProviderId:"",AuthenticationProviderId:""})})).then((function(){l.default.navigate("/dashboard/users").catch((function(e){console.error("[useredit] failed to navigate to user profile",e)})),y.ZP.hide(),(0,f.Z)(o.ZP.translate("SettingsSaved"))})).catch((function(e){console.error("[useredit] failed to update user",e)}))}(t)})).catch((function(e){console.error("[useredit] failed to fetch user",e)})),t.preventDefault(),t.stopPropagation(),!1})),e.querySelector("#btnCancel").addEventListener("click",(function(){window.history.back()}))}else console.error("Unexpected null reference")}),[_]);var V,J=C.map((function(e){var t=e.Id===I||C.length<2?" selected":"";return'<option value="'.concat(e.Id,'"').concat(t,">").concat(r()(e.Name),"</option>")})),G=E.map((function(e){var t=e.Id===q||E.length<2?" selected":"";return'<option value="'.concat(e.Id,'"').concat(t,">").concat(r()(e.Name),"</option>")}));return(0,a.jsx)(x.Z,{id:"editUserPage",className:"mainAnimatedPage type-interior",children:(0,a.jsxs)("div",{ref:M,className:"content-primary",children:[(0,a.jsx)("div",{className:"verticalSection",children:(0,a.jsx)(v.Z,{title:t,url:"https://jellyfin.org/docs/general/server/users/"})}),(0,a.jsx)(p.Z,{activeTab:"useredit"}),(0,a.jsx)("div",{className:"lnkEditUserPreferencesContainer",style:{paddingBottom:"1em"},children:(0,a.jsx)(b,{className:"lnkEditUserPreferences button-link",title:"ButtonEditOtherUserPreferences"})}),(0,a.jsxs)("form",{className:"editUserProfileForm",children:[(0,a.jsx)("div",{className:"disabledUserBanner hide",children:(0,a.jsxs)("div",{className:"btn btnDarkAccent btnStatic",children:[(0,a.jsx)("div",{children:o.ZP.translate("HeaderThisUserIsCurrentlyDisabled")}),(0,a.jsx)("div",{style:{marginTop:5},children:o.ZP.translate("MessageReenableUser")})]})}),(0,a.jsx)("div",{id:"fldUserName",className:"inputContainer",children:(0,a.jsx)(h.Z,{type:"text",id:"txtUserName",label:"LabelName",options:"required"})}),(0,a.jsxs)("div",{className:"selectContainer fldSelectLoginProvider hide",children:[(0,a.jsx)(P.Z,{id:"selectLoginProvider",label:"LabelAuthProvider",children:J}),(0,a.jsx)("div",{className:"fieldDescription",children:o.ZP.translate("AuthProviderHelp")})]}),(0,a.jsxs)("div",{className:"selectContainer fldSelectPasswordResetProvider hide",children:[(0,a.jsx)(P.Z,{id:"selectPasswordResetProvider",label:"LabelPasswordResetProvider",children:G}),(0,a.jsx)("div",{className:"fieldDescription",children:o.ZP.translate("PasswordResetProviderHelp")})]}),(0,a.jsxs)("div",{className:"checkboxContainer checkboxContainer-withDescription fldRemoteAccess hide",children:[(0,a.jsx)(u.Z,{className:"chkRemoteAccess",title:"AllowRemoteAccess"}),(0,a.jsx)("div",{className:"fieldDescription checkboxFieldDescription",children:o.ZP.translate("AllowRemoteAccessHelp")})]}),(0,a.jsx)(u.Z,{labelClassName:"checkboxContainer",className:"chkIsAdmin",title:"OptionAllowUserToManageServer"}),(0,a.jsx)(u.Z,{labelClassName:"checkboxContainer",className:"chkEnableCollectionManagement",title:"AllowCollectionManagement"}),(0,a.jsx)(u.Z,{labelClassName:"checkboxContainer",className:"chkEnableSubtitleManagement",title:"AllowSubtitleManagement"}),(0,a.jsxs)("div",{id:"featureAccessFields",className:"verticalSection",children:[(0,a.jsx)("h2",{className:"paperListLabel",children:o.ZP.translate("HeaderFeatureAccess")}),(0,a.jsxs)("div",{className:"checkboxList paperList",style:{padding:".5em 1em"},children:[(0,a.jsx)(u.Z,{className:"chkEnableLiveTvAccess",title:"OptionAllowBrowsingLiveTv"}),(0,a.jsx)(u.Z,{className:"chkManageLiveTv",title:"OptionAllowManageLiveTv"})]})]}),(0,a.jsxs)("div",{className:"verticalSection",children:[(0,a.jsx)("h2",{className:"paperListLabel",children:o.ZP.translate("HeaderPlayback")}),(0,a.jsxs)("div",{className:"checkboxList paperList",style:{padding:".5em 1em"},children:[(0,a.jsx)(u.Z,{className:"chkEnableMediaPlayback",title:"OptionAllowMediaPlayback"}),(0,a.jsx)(u.Z,{className:"chkEnableAudioPlaybackTranscoding",title:"OptionAllowAudioPlaybackTranscoding"}),(0,a.jsx)(u.Z,{className:"chkEnableVideoPlaybackTranscoding",title:"OptionAllowVideoPlaybackTranscoding"}),(0,a.jsx)(u.Z,{className:"chkEnableVideoPlaybackRemuxing",title:"OptionAllowVideoPlaybackRemuxing"}),(0,a.jsx)(u.Z,{className:"chkForceRemoteSourceTranscoding",title:"OptionForceRemoteSourceTranscoding"})]}),(0,a.jsx)("div",{className:"fieldDescription",children:o.ZP.translate("OptionAllowMediaPlaybackTranscodingHelp")})]}),(0,a.jsx)("br",{}),(0,a.jsx)("div",{className:"verticalSection",children:(0,a.jsxs)("div",{className:"inputContainer",children:[(0,a.jsx)(h.Z,{type:"number",id:"txtRemoteClientBitrateLimit",label:"LabelRemoteClientBitrateLimit",options:'inputMode="decimal" pattern="[0-9]*(.[0-9]+)?" min="{0}" step=".25"'}),(0,a.jsx)("div",{className:"fieldDescription",children:o.ZP.translate("LabelRemoteClientBitrateLimitHelp")}),(0,a.jsx)("div",{className:"fieldDescription",children:o.ZP.translate("LabelUserRemoteClientBitrateLimitHelp")})]})}),(0,a.jsx)("div",{className:"verticalSection",children:(0,a.jsxs)("div",{className:"selectContainer fldSelectSyncPlayAccess",children:[(0,a.jsx)(P.Z,{id:"selectSyncPlayAccess",label:"LabelSyncPlayAccess",children:(V="",V+="<option value='CreateAndJoinGroups'>".concat(o.ZP.translate("LabelSyncPlayAccessCreateAndJoinGroups"),"</option>"),V+="<option value='JoinGroups'>".concat(o.ZP.translate("LabelSyncPlayAccessJoinGroups"),"</option>"),V+="<option value='None'>".concat(o.ZP.translate("LabelSyncPlayAccessNone"),"</option>"))}),(0,a.jsx)("div",{className:"fieldDescription",children:o.ZP.translate("SyncPlayAccessHelp")})]})}),(0,a.jsxs)("div",{className:"verticalSection",children:[(0,a.jsx)("h2",{className:"checkboxListLabel",style:{marginBottom:"1em"},children:o.ZP.translate("HeaderAllowMediaDeletionFrom")}),(0,a.jsxs)("div",{className:"checkboxList paperList checkboxList-paperList",children:[(0,a.jsx)(u.Z,{labelClassName:"checkboxContainer",className:"chkEnableDeleteAllFolders",title:"AllLibraries"}),(0,a.jsx)("div",{className:"deleteAccess",children:m.map((function(e){return(0,a.jsx)(u.Z,{className:"chkFolder",itemId:e.Id,itemName:e.Name,itemCheckedAttribute:e.checkedAttribute},e.Id)}))})]})]}),(0,a.jsxs)("div",{className:"verticalSection",children:[(0,a.jsx)("h2",{className:"checkboxListLabel",children:o.ZP.translate("HeaderRemoteControl")}),(0,a.jsxs)("div",{className:"checkboxList paperList",style:{padding:".5em 1em"},children:[(0,a.jsx)(u.Z,{className:"chkEnableRemoteControlOtherUsers",title:"OptionAllowRemoteControlOthers"}),(0,a.jsx)(u.Z,{className:"chkRemoteControlSharedDevices",title:"OptionAllowRemoteSharedDevices"})]}),(0,a.jsx)("div",{className:"fieldDescription",children:o.ZP.translate("OptionAllowRemoteSharedDevicesHelp")})]}),(0,a.jsx)("h2",{className:"checkboxListLabel",children:o.ZP.translate("Other")}),(0,a.jsxs)("div",{className:"checkboxContainer checkboxContainer-withDescription",children:[(0,a.jsx)(u.Z,{className:"chkEnableDownloading",title:"OptionAllowContentDownload"}),(0,a.jsx)("div",{className:"fieldDescription checkboxFieldDescription",children:o.ZP.translate("OptionAllowContentDownloadHelp")})]}),(0,a.jsxs)("div",{className:"checkboxContainer checkboxContainer-withDescription",id:"fldIsEnabled",children:[(0,a.jsx)(u.Z,{className:"chkDisabled",title:"OptionDisableUser"}),(0,a.jsx)("div",{className:"fieldDescription checkboxFieldDescription",children:o.ZP.translate("OptionDisableUserHelp")})]}),(0,a.jsxs)("div",{className:"checkboxContainer checkboxContainer-withDescription",id:"fldIsHidden",children:[(0,a.jsx)(u.Z,{className:"chkIsHidden",title:"OptionHideUser"}),(0,a.jsx)("div",{className:"fieldDescription checkboxFieldDescription",children:o.ZP.translate("OptionHideUserFromLoginHelp")})]}),(0,a.jsx)("br",{}),(0,a.jsx)("div",{className:"verticalSection",children:(0,a.jsxs)("div",{className:"inputContainer",id:"fldLoginAttemptsBeforeLockout",children:[(0,a.jsx)(h.Z,{type:"number",id:"txtLoginAttemptsBeforeLockout",label:"LabelUserLoginAttemptsBeforeLockout",options:"min={-1} step={1}"}),(0,a.jsx)("div",{className:"fieldDescription",children:o.ZP.translate("OptionLoginAttemptsBeforeLockout")}),(0,a.jsx)("div",{className:"fieldDescription",children:o.ZP.translate("OptionLoginAttemptsBeforeLockoutHelp")})]})}),(0,a.jsx)("br",{}),(0,a.jsx)("div",{className:"verticalSection",children:(0,a.jsxs)("div",{className:"inputContainer",id:"fldMaxActiveSessions",children:[(0,a.jsx)(h.Z,{type:"number",id:"txtMaxActiveSessions",label:"LabelUserMaxActiveSessions",options:"min={0} step={1}"}),(0,a.jsx)("div",{className:"fieldDescription",children:o.ZP.translate("OptionMaxActiveSessions")}),(0,a.jsx)("div",{className:"fieldDescription",children:o.ZP.translate("OptionMaxActiveSessionsHelp")})]})}),(0,a.jsx)("br",{}),(0,a.jsxs)("div",{children:[(0,a.jsx)(d.Z,{type:"submit",className:"raised button-submit block",title:"Save"}),(0,a.jsx)(d.Z,{type:"button",id:"btnCancel",className:"raised button-cancel block",title:"ButtonCancel"})]})]})]})})}},87143:function(e,t,n){var a=n(24246),c=n(27378),i=n(93110);t.Z=function(e){var t=e.children,n=e.id,r=e.className,l=void 0===r?"":r,o=e.title,s=e.isBackButtonEnabled,d=void 0===s||s,u=e.isMenuButtonEnabled,h=void 0!==u&&u,m=e.isNowPlayingBarEnabled,b=void 0===m||m,v=e.isThemeMediaSupported,p=void 0!==v&&v,y=e.backDropType,f=(0,c.useRef)(null);return(0,c.useEffect)((function(){i.Z.hideView()}),[]),(0,c.useEffect)((function(){var e,t,n,a,c={bubbles:!0,cancelable:!1,detail:{isRestored:!1,options:{enableMediaControl:b,supportsThemeMedia:p}}};null===(e=f.current)||void 0===e||e.dispatchEvent(new CustomEvent("viewbeforeshow",c)),null===(t=f.current)||void 0===t||t.dispatchEvent(new CustomEvent("pagebeforeshow",c)),null===(n=f.current)||void 0===n||n.dispatchEvent(new CustomEvent("viewshow",c)),null===(a=f.current)||void 0===a||a.dispatchEvent(new CustomEvent("pageshow",c))}),[f,b,p]),(0,a.jsx)("div",{ref:f,id:n,"data-role":"page",className:"page ".concat(l),"data-title":o,"data-backbutton":d,"data-menubutton":h,"data-backdroptype":y,children:t})}},614:function(e,t,n){var a=n(24246),c=(n(27378),n(94994)),i=function(e){return{__html:'<a href="#"\n        is="emby-linkbutton"\n        data-role="button"\n        class="'.concat("useredit"===e?"ui-btn-active":"",'"\n        onclick="Dashboard.navigate(\'/dashboard/users/profile\', true);">\n        ').concat(c.ZP.translate("Profile"),'\n    </a>\n    <a href="#"\n        is="emby-linkbutton"\n        data-role="button"\n        class="').concat("userlibraryaccess"===e?"ui-btn-active":"",'"\n        onclick="Dashboard.navigate(\'/dashboard/users/access\', true);">\n        ').concat(c.ZP.translate("TabAccess"),'\n    </a>\n    <a href="#"\n        is="emby-linkbutton"\n        data-role="button"\n        class="').concat("userparentalcontrol"===e?"ui-btn-active":"",'"\n        onclick="Dashboard.navigate(\'/dashboard/users/parentalcontrol\', true);">\n        ').concat(c.ZP.translate("TabParentalControl"),'\n    </a>\n    <a href="#"\n        is="emby-linkbutton"\n        data-role="button"\n        class="').concat("userpassword"===e?"ui-btn-active":"",'"\n        onclick="Dashboard.navigate(\'/dashboard/users/password\', true);">\n        ').concat(c.ZP.translate("HeaderPassword"),"\n    </a>")}};t.Z=function(e){var t=e.activeTab;return(0,a.jsx)("div",{"data-role":"controlgroup","data-type":"horizontal",className:"localnav",dangerouslySetInnerHTML:i(t)})}},5712:function(e,t,n){var a=n(24246),c=(n(27378),n(94994)),i=function(e){var t=e.type,n=e.id,a=e.className,c=e.title,i=e.leftIcon,r=e.rightIcon;return{__html:'<button\n        is="emby-button"\n        type="'.concat(t,'"\n        ').concat(n,'\n        class="').concat(a,'"\n        >\n        ').concat(i,"\n        <span>").concat(c,"</span>\n        ").concat(r,"\n    </button>")}};t.Z=function(e){var t=e.type,n=e.id,r=e.className,l=e.title,o=e.leftIcon,s=e.rightIcon;return(0,a.jsx)("div",{dangerouslySetInnerHTML:i({type:t,id:n?'id="'.concat(n,'"'):"",className:r,title:c.ZP.translate(l),leftIcon:o?'<span class="material-icons '.concat(o,'" aria-hidden="true"></span>'):"",rightIcon:s?'<span class="material-icons '.concat(s,'" aria-hidden="true"></span>'):""})})}},91904:function(e,t,n){var a=n(24246),c=n(65009),i=n.n(c),r=(n(27378),n(94994)),l=function(e){var t=e.labelClassName,n=e.className,a=e.id,c=e.dataFilter,i=e.dataItemType,r=e.dataId,l=e.checkedAttribute,o=e.renderContent;return{__html:"<label ".concat(t,'>\n        <input\n            is="emby-checkbox"\n            type="checkbox"\n            class="').concat(n,'"\n            ').concat(a,"\n            ").concat(c,"\n            ").concat(i,"\n            ").concat(r,"\n            ").concat(l,"\n        />\n        ").concat(o,"\n    </label>")}};t.Z=function(e){var t=e.labelClassName,n=e.className,c=e.elementId,o=e.dataFilter,s=e.itemType,d=e.itemId,u=e.itemAppName,h=e.itemCheckedAttribute,m=e.itemName,b=e.title,v=u?"- ".concat(u):"",p=m?"<span>".concat(i()(m||"")," ").concat(v,"</span>"):"<span>".concat(r.ZP.translate(b),"</span>");return(0,a.jsx)("div",{className:"sectioncheckbox",dangerouslySetInnerHTML:l({labelClassName:t?"class='".concat(t,"'"):"",className:n,id:c?"id='".concat(c,"'"):"",dataFilter:o?"data-filter='".concat(o,"'"):"",dataItemType:s?"data-itemtype='".concat(s,"'"):"",dataId:d?"data-id='".concat(d,"'"):"",checkedAttribute:h||"",renderContent:p})})}},56285:function(e,t,n){var a=n(24246),c=(n(27378),n(94994)),i=function(e){var t=e.is,n=e.id,a=e.className,c=e.title,i=e.icon,r=e.dataIndex,l=e.dataTag,o=e.dataProfileid;return{__html:'<button\n        is="'.concat(t,'"\n        type="button"\n        ').concat(n,'\n        class="').concat(a,'"\n        ').concat(c,"\n        ").concat(r,"\n        ").concat(l,"\n        ").concat(o,'\n    >\n        <span class="material-icons ').concat(i,'" aria-hidden="true"></span>\n    </button>')}};t.Z=function(e){var t=e.is,n=e.id,r=e.className,l=e.title,o=e.icon,s=e.dataIndex,d=e.dataTag,u=e.dataProfileid;return(0,a.jsx)("div",{dangerouslySetInnerHTML:i({is:t,id:n?'id="'.concat(n,'"'):"",className:r,title:l?'title="'.concat(c.ZP.translate(l),'"'):"",icon:o,dataIndex:s?'data-index="'.concat(s,'"'):"",dataTag:d?'data-tag="'.concat(d,'"'):"",dataProfileid:u?'data-profileid="'.concat(u,'"'):""})})}},503:function(e,t,n){var a=n(24246),c=n(27378),i=n(94994);t.Z=function(e){var t=e.containerClassName,n=e.initialValue,r=e.onChange,l=void 0===r?function(){}:r,o=e.type,s=e.id,d=e.label,u=e.options,h=void 0===u?"":u,m=(0,c.useRef)(null),b=(0,c.useMemo)((function(){return function(e){var t=e.id,n=e.label,a=e.initialValue,c=e.options;return{__html:'<input\n        is="emby-input"\n        type="'.concat(e.type,'"\n        id="').concat(t,'"\n        label="').concat(n,'"\n        value="').concat(a,'"\n        ').concat(c,"\n    />")}}({type:o,id:s,label:i.ZP.translate(d),initialValue:n,options:h})}),[]),v=(0,c.useCallback)((function(e){l(e.target.value)}),[l]);return(0,c.useEffect)((function(){var e,t=null===(e=null==m?void 0:m.current)||void 0===e?void 0:e.querySelector("input");return null==t||t.addEventListener("input",v),function(){null==t||t.removeEventListener("input",v)}}),[m,v]),(0,a.jsx)("div",{ref:m,className:t,dangerouslySetInnerHTML:b})}},87926:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(24246),c=(n(27378),n(56285)),i=n(94994),r=function(e){var t=e.className,n=e.title,a=e.href;return{__html:'<a\n        is="emby-linkbutton"\n        rel="noopener noreferrer"\n        class="'.concat(t,'"\n        target="_blank"\n        href="').concat(a,'"\n        >\n        ').concat(n,"\n    </a>")}},l=function(e){var t=e.className,n=e.title,c=e.url;return(0,a.jsx)("div",{dangerouslySetInnerHTML:r({className:t,title:i.ZP.translate(n),href:c})})},o=function(e){var t=e.SectionClassName,n=e.title,i=e.isBtnVisible,r=void 0!==i&&i,o=e.btnId,s=e.btnClassName,d=e.btnTitle,u=e.btnIcon,h=e.isLinkVisible,m=void 0===h||h,b=e.url;return(0,a.jsxs)("div",{className:"".concat(t," sectionTitleContainer flex align-items-center"),children:[(0,a.jsx)("h2",{className:"sectionTitle",children:n}),r&&(0,a.jsx)(c.Z,{is:"emby-button",id:o,className:s,title:d,icon:u}),m&&(0,a.jsx)(l,{className:"raised button-alt headerHelpButton",title:"Help",url:b})]})}},19636:function(e,t,n){var a=n(24246),c=(n(27378),n(94994)),i=function(e){var t=e.name,n=e.id,a=e.required,c=e.label,i=e.option;return{__html:'<select\n        is="emby-select"\n        '.concat(t,'\n        id="').concat(n,'"\n        ').concat(a,'\n        label="').concat(c,'"\n    >\n        ').concat(i,"\n    </select>")}};t.Z=function(e){var t=e.name,n=e.id,r=e.required,l=e.label,o=e.children;return(0,a.jsx)("div",{dangerouslySetInnerHTML:i({name:t?"name='".concat(t,"'"):"",id:n,required:r?"required='".concat(r,"'"):"",label:c.ZP.translate(l),option:o})})}},23509:function(e,t,n){var a=n(16918),c="assets/img/devices/";t.ZP={getDeviceIcon:function(e){var t;switch(e.AppName||e.Client){case"Samsung Smart TV":return c+"samsung.svg";case"Xbox One":return c+"xbox.svg";case"Sony PS4":return c+"playstation.svg";case"Kodi":case"Kodi JellyCon":return c+"kodi.svg";case"Jellyfin Android":case"AndroidTV":case"Android TV":return c+"android.svg";case"Jellyfin Mobile (iOS)":case"Jellyfin Mobile (iPadOS)":case"Jellyfin iOS":case"Infuse":return c+"apple.svg";case"Home Assistant":return c+"home-assistant.svg";case"Jellyfin Roku":return c+"roku.svg";case"Finamp":return c+"finamp.svg";case"Jellyfin Web":return function(e){switch(e){case"Opera":case"Opera TV":case"Opera Android":return c+"opera.svg";case"Chrome":case"Chrome Android":return c+"chrome.svg";case"Firefox":case"Firefox Android":return c+"firefox.svg";case"Safari":case"Safari iPad":case"Safari iPhone":return c+"safari.svg";case"Edge Chromium":case"Edge Chromium Android":case"Edge Chromium iPad":case"Edge Chromium iPhone":return c+"edgechromium.svg";case"Edge":return c+"edge.svg";case"Internet Explorer":return c+"msie.svg";default:return c+"html5.svg"}}(e.Name||e.DeviceName);default:if(null===(t=e.Capabilities)||void 0===t?void 0:t.IconUrl)try{return new URL(e.Capabilities.IconUrl).toString()}catch(t){console.error("[getDeviceIcon] device capabilities has invalid IconUrl",e,t)}return c+"other.svg"}},getLibraryIcon:function(e){switch(e){case"movies":return"video_library";case"music":return"library_music";case"photos":case"homevideos":return"photo_library";case"livetv":return"live_tv";case"tvshows":return"tv";case"trailers":return"local_movies";case"musicvideos":return"music_video";case"books":return"library_books";case"channels":return"videocam";case"playlists":return"view_list";default:return"folder"}},getItemTypeIcon:function(e){switch(e){case a.k.MusicAlbum:return"album";case a.k.MusicArtist:case a.k.Person:return"person";case a.k.Audio:return"audiotrack";case a.k.Movie:return"movie";case a.k.Episode:case a.k.Series:return"tv";case a.k.Program:return"live_tv";case a.k.Book:return"book";case a.k.Folder:return"folder";case a.k.BoxSet:return"collections";case a.k.Playlist:return"view_list";case a.k.Photo:return"photo";case a.k.PhotoAlbum:return"photo_album";default:return"folder"}}}}}]);