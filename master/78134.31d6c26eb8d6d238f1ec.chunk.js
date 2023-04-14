"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[78134],{51869:function(e,t,s){t.ZP={getDeviceIcon:function(e){switch(e.AppName||e.Client){case"Samsung Smart TV":return"assets/img/devices/samsung.svg";case"Xbox One":return"assets/img/devices/xbox.svg";case"Sony PS4":return"assets/img/devices/playstation.svg";case"Kodi":case"Kodi JellyCon":return"assets/img/devices/kodi.svg";case"Jellyfin Android":case"AndroidTV":case"Android TV":return"assets/img/devices/android.svg";case"Jellyfin Mobile (iOS)":case"Jellyfin Mobile (iPadOS)":case"Jellyfin iOS":case"Infuse":return"assets/img/devices/apple.svg";case"Home Assistant":return"assets/img/devices/home-assistant.svg";case"Jellyfin Roku":return"assets/img/devices/roku.svg";case"Finamp":return"assets/img/devices/finamp.svg";case"Jellyfin Web":return function(e){switch(e){case"Opera":case"Opera TV":case"Opera Android":return"assets/img/devices/opera.svg";case"Chrome":case"Chrome Android":return"assets/img/devices/chrome.svg";case"Firefox":case"Firefox Android":return"assets/img/devices/firefox.svg";case"Safari":case"Safari iPad":case"Safari iPhone":return"assets/img/devices/safari.svg";case"Edge Chromium":case"Edge Chromium Android":case"Edge Chromium iPad":case"Edge Chromium iPhone":return"assets/img/devices/edgechromium.svg";case"Edge":return"assets/img/devices/edge.svg";case"Internet Explorer":return"assets/img/devices/msie.svg";default:return"assets/img/devices/html5.svg"}}(e.Name||e.DeviceName);default:return"assets/img/devices/other.svg"}},getLibraryIcon:function(e){switch(e){case"movies":return"video_library";case"music":return"library_music";case"photos":case"homevideos":return"photo_library";case"livetv":return"live_tv";case"tvshows":return"tv";case"trailers":return"local_movies";case"musicvideos":return"music_video";case"books":return"library_books";case"channels":return"videocam";case"playlists":return"view_list";default:return"folder"}}}},6055:function(e,t,s){var a=s(24246),n=s(27378),r=s(53424),i=function(){return i=Object.assign||function(e){for(var t,s=1,a=arguments.length;s<a;s++)for(var n in t=arguments[s])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},i.apply(this,arguments)};t.Z=function(e){var t=e.children,s=e.id,o=e.className,c=void 0===o?"":o,l=e.title,d=e.isBackButtonEnabled,u=void 0===d||d,v=e.isMenuButtonEnabled,m=void 0!==v&&v,p=e.isNowPlayingBarEnabled,f=void 0===p||p,h=e.isThemeMediaSupported,w=void 0!==h&&h,b=e.backDropType,P=(0,n.useRef)(null);return(0,n.useEffect)((function(){r.Z.hideView()}),[]),(0,n.useEffect)((function(){var e,t,s,a,n={bubbles:!0,cancelable:!1,detail:{isRestored:!1,options:{enableMediaControl:f,supportsThemeMedia:w}}};null===(e=P.current)||void 0===e||e.dispatchEvent(new CustomEvent("viewbeforeshow",n)),null===(t=P.current)||void 0===t||t.dispatchEvent(new CustomEvent("pagebeforeshow",n)),null===(s=P.current)||void 0===s||s.dispatchEvent(new CustomEvent("viewshow",n)),null===(a=P.current)||void 0===a||a.dispatchEvent(new CustomEvent("pageshow",n))}),[P,f,w]),(0,a.jsx)("div",i({ref:P,id:s,"data-role":"page",className:"page ".concat(c),"data-title":l,"data-backbutton":u,"data-menubutton":m,"data-backdroptype":b},{children:t}))}},42363:function(e,t,s){var a=s(24246),n=s(27378),r=s(60635),i=s(94994),o=s(71487),c=s(3137),l=s(28540),d=s(56663),u=s(48606),v=s(76197),m=s(8121),p=function(){return p=Object.assign||function(e){for(var t,s=1,a=arguments.length;s<a;s++)for(var n in t=arguments[s])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},p.apply(this,arguments)};t.Z=function(e){var t=e.userId,f=(0,n.useRef)(null),h=(0,n.useCallback)((function(){var e=f.current;e?(window.ApiClient.getUser(t).then((function(t){r.default.getCurrentUser().then((function(a){var n,r;if(!t.Policy)throw new Error("Unexpected null user.Policy");if(!t.Configuration)throw new Error("Unexpected null user.Configuration");o.default.setTitle(t.Name);var i=!1;t.HasConfiguredPassword?(e.querySelector("#btnResetPassword").classList.remove("hide"),e.querySelector("#fldCurrentPassword").classList.remove("hide"),i=!0):(e.querySelector("#btnResetPassword").classList.add("hide"),e.querySelector("#fldCurrentPassword").classList.add("hide")),(null===(n=null==a?void 0:a.Policy)||void 0===n?void 0:n.IsAdministrator)||t.Policy.EnableUserPreferenceAccess?e.querySelector(".passwordSection").classList.remove("hide"):e.querySelector(".passwordSection").classList.add("hide"),i&&((null===(r=null==a?void 0:a.Policy)||void 0===r?void 0:r.IsAdministrator)||t.Policy.EnableUserPreferenceAccess)?e.querySelector(".localAccessSection").classList.remove("hide"):e.querySelector(".localAccessSection").classList.add("hide");var c=e.querySelector("#txtEasyPassword");c.value="",t.HasConfiguredEasyPassword?(c.placeholder="******",e.querySelector("#btnResetEasyPassword").classList.remove("hide")):(c.removeAttribute("placeholder"),c.placeholder="",e.querySelector("#btnResetEasyPassword").classList.add("hide")),e.querySelector(".chkEnableLocalEasyPassword").checked=t.Configuration.EnableLocalPassword||!1,Promise.resolve().then(s.bind(s,87680)).then((function(t){t.default.autoFocus(e)}))}))})),e.querySelector("#txtCurrentPassword").value="",e.querySelector("#txtNewPassword").value="",e.querySelector("#txtNewPasswordConfirm").value=""):console.error("Unexpected null reference")}),[t]);return(0,n.useEffect)((function(){var e=f.current;if(e){h();var s=function(){window.ApiClient.getUser(t).then((function(t){if(!t.Configuration)throw new Error("Unexpected null user.Configuration");if(!t.Id)throw new Error("Unexpected null user.Id");t.Configuration.EnableLocalPassword=e.querySelector(".chkEnableLocalEasyPassword").checked,window.ApiClient.updateUserConfiguration(t.Id,t.Configuration).then((function(){l.ZP.hide(),(0,d.Z)(i.ZP.translate("SettingsSaved")),h()}))}))};e.querySelector(".updatePasswordForm").addEventListener("submit",(function(s){return e.querySelector("#txtNewPassword").value!=e.querySelector("#txtNewPasswordConfirm").value?(0,d.Z)(i.ZP.translate("PasswordMatchError")):(l.ZP.show(),a=e.querySelector("#txtCurrentPassword").value,n=e.querySelector("#txtNewPassword").value,e.querySelector("#fldCurrentPassword").classList.contains("hide")&&(a=""),window.ApiClient.updateUserPassword(t,a,n).then((function(){l.ZP.hide(),(0,d.Z)(i.ZP.translate("PasswordSaved")),h()}),(function(){l.ZP.hide(),r.default.alert({title:i.ZP.translate("HeaderLoginFailure"),message:i.ZP.translate("MessageInvalidUser")})}))),s.preventDefault(),!1;var a,n})),e.querySelector(".localAccessForm").addEventListener("submit",(function(a){return l.ZP.show(),(n=e.querySelector("#txtEasyPassword").value)?window.ApiClient.updateEasyPassword(t,n).then((function(){s()})):s(),a.preventDefault(),!1;var n})),e.querySelector("#btnResetEasyPassword").addEventListener("click",(function(){var e=i.ZP.translate("PinCodeResetConfirmation");(0,c.Z)(e,i.ZP.translate("HeaderPinCodeReset")).then((function(){l.ZP.show(),window.ApiClient.resetEasyPassword(t).then((function(){l.ZP.hide(),r.default.alert({message:i.ZP.translate("PinCodeResetComplete"),title:i.ZP.translate("HeaderPinCodeReset")}),h()}))}))})),e.querySelector("#btnResetPassword").addEventListener("click",(function(){var e=i.ZP.translate("PasswordResetConfirmation");(0,c.Z)(e,i.ZP.translate("ResetPassword")).then((function(){l.ZP.show(),window.ApiClient.resetUserPassword(t).then((function(){l.ZP.hide(),r.default.alert({message:i.ZP.translate("PasswordResetComplete"),title:i.ZP.translate("ResetPassword")}),h()}))}))}))}else console.error("Unexpected null reference")}),[h,t]),(0,a.jsxs)("div",p({ref:f},{children:[(0,a.jsx)("form",p({className:"updatePasswordForm passwordSection hide",style:{margin:"0 auto 2em"}},{children:(0,a.jsxs)("div",p({className:"detailSection"},{children:[(0,a.jsx)("div",p({id:"fldCurrentPassword",className:"inputContainer hide"},{children:(0,a.jsx)(m.Z,{type:"password",id:"txtCurrentPassword",label:"LabelCurrentPassword",options:'autoComplete="off"'})})),(0,a.jsx)("div",p({className:"inputContainer"},{children:(0,a.jsx)(m.Z,{type:"password",id:"txtNewPassword",label:"LabelNewPassword",options:'autoComplete="off"'})})),(0,a.jsx)("div",p({className:"inputContainer"},{children:(0,a.jsx)(m.Z,{type:"password",id:"txtNewPasswordConfirm",label:"LabelNewPasswordConfirm",options:'autoComplete="off"'})})),(0,a.jsx)("br",{}),(0,a.jsxs)("div",{children:[(0,a.jsx)(u.Z,{type:"submit",className:"raised button-submit block",title:"Save"}),(0,a.jsx)(u.Z,{type:"button",id:"btnResetPassword",className:"raised button-cancel block hide",title:"ResetPassword"})]})]}))})),(0,a.jsx)("br",{}),(0,a.jsx)("form",p({className:"localAccessForm localAccessSection",style:{margin:"0 auto"}},{children:(0,a.jsxs)("div",p({className:"detailSection"},{children:[(0,a.jsx)("div",p({className:"detailSectionHeader"},{children:i.ZP.translate("HeaderEasyPinCode")})),(0,a.jsx)("br",{}),(0,a.jsx)("div",{children:i.ZP.translate("EasyPasswordHelp")}),(0,a.jsx)("br",{}),(0,a.jsx)("div",p({className:"inputContainer"},{children:(0,a.jsx)(m.Z,{type:"number",id:"txtEasyPassword",label:"LabelEasyPinCode",options:'autoComplete="off" pattern="[0-9]*" step="1" maxlength="5"'})})),(0,a.jsx)("br",{}),(0,a.jsxs)("div",p({className:"checkboxContainer checkboxContainer-withDescription"},{children:[(0,a.jsx)(v.Z,{className:"chkEnableLocalEasyPassword",title:"LabelInNetworkSignInWithEasyPassword"}),(0,a.jsx)("div",p({className:"fieldDescription checkboxFieldDescription"},{children:i.ZP.translate("LabelInNetworkSignInWithEasyPasswordHelp")}))]})),(0,a.jsxs)("div",{children:[(0,a.jsx)(u.Z,{type:"submit",className:"raised button-submit block",title:"Save"}),(0,a.jsx)(u.Z,{type:"button",id:"btnResetEasyPassword",className:"raised button-cancel block hide",title:"ButtonResetEasyPassword"})]})]}))}))]}))}},48606:function(e,t,s){var a=s(24246),n=s(94994),r=function(e){var t=e.type,s=e.id,a=e.className,n=e.title,r=e.leftIcon,i=e.rightIcon;return{__html:'<button\n        is="emby-button"\n        type="'.concat(t,'"\n        ').concat(s,'\n        class="').concat(a,'"\n        >\n        ').concat(r,"\n        <span>").concat(n,"</span>\n        ").concat(i,"\n    </button>")}};t.Z=function(e){var t=e.type,s=e.id,i=e.className,o=e.title,c=e.leftIcon,l=e.rightIcon;return(0,a.jsx)("div",{dangerouslySetInnerHTML:r({type:t,id:s?'id="'.concat(s,'"'):"",className:i,title:n.ZP.translate(o),leftIcon:c?'<span class="material-icons '.concat(c,'" aria-hidden="true"></span>'):"",rightIcon:l?'<span class="material-icons '.concat(l,'" aria-hidden="true"></span>'):""})})}},76197:function(e,t,s){var a=s(24246),n=s(65009),r=s.n(n),i=s(94994),o=function(e){var t=e.labelClassName,s=e.className,a=e.id,n=e.dataFilter,r=e.dataItemType,i=e.dataId,o=e.checkedAttribute,c=e.renderContent;return{__html:"<label ".concat(t,'>\n        <input\n            is="emby-checkbox"\n            type="checkbox"\n            class="').concat(s,'"\n            ').concat(a,"\n            ").concat(n,"\n            ").concat(r,"\n            ").concat(i,"\n            ").concat(o,"\n        />\n        ").concat(c,"\n    </label>")}};t.Z=function(e){var t=e.labelClassName,s=e.className,n=e.elementId,c=e.dataFilter,l=e.itemType,d=e.itemId,u=e.itemAppName,v=e.itemCheckedAttribute,m=e.itemName,p=e.title,f=u?"- ".concat(u):"",h=m?"<span>".concat(r()(m||"")," ").concat(f,"</span>"):"<span>".concat(i.ZP.translate(p),"</span>");return(0,a.jsx)("div",{className:"sectioncheckbox",dangerouslySetInnerHTML:o({labelClassName:t?"class='".concat(t,"'"):"",className:s,id:n?"id='".concat(n,"'"):"",dataFilter:c?"data-filter='".concat(c,"'"):"",dataItemType:l?"data-itemtype='".concat(l,"'"):"",dataId:d?"data-id='".concat(d,"'"):"",checkedAttribute:v||"",renderContent:h})})}},8121:function(e,t,s){var a=s(24246),n=s(94994),r=function(e){var t=e.type,s=e.id,a=e.label,n=e.options;return{__html:'<input\n        is="emby-input"\n        type="'.concat(t,'"\n        id="').concat(s,'"\n        label="').concat(a,'"\n        ').concat(n,"\n    />")}};t.Z=function(e){var t=e.type,s=e.id,i=e.label,o=e.options;return(0,a.jsx)("div",{dangerouslySetInnerHTML:r({type:t,id:s,label:n.ZP.translate(i),options:o||""})})}}}]);