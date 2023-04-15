"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[35273,49213,55357,23976],{75899:function(e,s,t){t.r(s),t.d(s,{default:function(){return l}}),t(5769),t(63238),t(61418),t(17460),t(14078);var r=t(28540),a=t(71487),i=t(94994),n=(t(38228),t(60635)),o=t(56663),c=t(3137);function d(e,s){var r=s.userId;ApiClient.getUser(r).then((function(s){n.default.getCurrentUser().then((function(r){a.default.setTitle(s.Name),e.querySelector(".username").innerText=s.Name;var i=!0,n=!1;"Guest"==s.ConnectLinkType?(e.querySelector(".localAccessSection").classList.add("hide"),i=!1):s.HasConfiguredPassword?(e.querySelector("#btnResetPassword").classList.remove("hide"),e.querySelector("#fldCurrentPassword").classList.remove("hide"),n=!0):(e.querySelector("#btnResetPassword").classList.add("hide"),e.querySelector("#fldCurrentPassword").classList.add("hide")),i&&(r.Policy.IsAdministrator||s.Policy.EnableUserPreferenceAccess)?e.querySelector(".passwordSection").classList.remove("hide"):e.querySelector(".passwordSection").classList.add("hide"),n&&(r.Policy.IsAdministrator||s.Policy.EnableUserPreferenceAccess)?e.querySelector(".localAccessSection").classList.remove("hide"):e.querySelector(".localAccessSection").classList.add("hide");var o=e.querySelector("#txtEasyPassword");o.value="",s.HasConfiguredEasyPassword?(o.placeholder="******",e.querySelector("#btnResetEasyPassword").classList.remove("hide")):(o.removeAttribute("placeholder"),o.placeholder="",e.querySelector("#btnResetEasyPassword").classList.add("hide")),e.querySelector(".chkEnableLocalEasyPassword").checked=s.Configuration.EnableLocalPassword,Promise.resolve().then(t.bind(t,87680)).then((function(s){s.default.autoFocus(e)}))}))})),e.querySelector("#txtCurrentPassword").value="",e.querySelector("#txtNewPassword").value="",e.querySelector("#txtNewPasswordConfirm").value=""}function l(e,s){function t(t){ApiClient.getUser(t).then((function(t){t.Configuration.EnableLocalPassword=e.querySelector(".chkEnableLocalEasyPassword").checked,ApiClient.updateUserConfiguration(t.Id,t.Configuration).then((function(){r.ZP.hide(),(0,o.Z)(i.ZP.translate("SettingsSaved")),d(e,s)}))}))}e.querySelector(".updatePasswordForm").addEventListener("submit",(function(t){var a,c,l;return this.querySelector("#txtNewPassword").value!=this.querySelector("#txtNewPasswordConfirm").value?(0,o.Z)(i.ZP.translate("PasswordMatchError")):(r.ZP.show(),a=s.userId,c=e.querySelector("#txtCurrentPassword").value,l=e.querySelector("#txtNewPassword").value,e.querySelector("#fldCurrentPassword").classList.contains("hide")&&(c=""),ApiClient.updateUserPassword(a,c,l).then((function(){r.ZP.hide(),(0,o.Z)(i.ZP.translate("PasswordSaved")),d(e,s)}),(function(){r.ZP.hide(),n.default.alert({title:i.ZP.translate("HeaderLoginFailure"),message:i.ZP.translate("MessageInvalidUser")})}))),t.preventDefault(),!1})),e.querySelector(".localAccessForm").addEventListener("submit",(function(a){var i,n;return r.ZP.show(),i=s.userId,(n=e.querySelector("#txtEasyPassword").value)?ApiClient.updateEasyPassword(i,n).then((function(){t(i)})):t(i),a.preventDefault(),!1})),e.querySelector("#btnResetEasyPassword").addEventListener("click",(function(){var t=i.ZP.translate("PinCodeResetConfirmation");(0,c.Z)(t,i.ZP.translate("HeaderPinCodeReset")).then((function(){var t=s.userId;r.ZP.show(),ApiClient.resetEasyPassword(t).then((function(){r.ZP.hide(),n.default.alert({message:i.ZP.translate("PinCodeResetComplete"),title:i.ZP.translate("HeaderPinCodeReset")}),d(e,s)}))}))})),e.querySelector("#btnResetPassword").addEventListener("click",(function(){var t=i.ZP.translate("PasswordResetConfirmation");(0,c.Z)(t,i.ZP.translate("ResetPassword")).then((function(){var t=s.userId;r.ZP.show(),ApiClient.resetUserPassword(t).then((function(){r.ZP.hide(),n.default.alert({message:i.ZP.translate("PasswordResetComplete"),title:i.ZP.translate("ResetPassword")}),d(e,s)}))}))})),e.addEventListener("viewshow",(function(){d(e,s)}))}},17905:function(e,s,t){t.r(s),t.d(s,{default:function(){return f}}),t(52077),t(1203);var r=t(75899),a=t(28540),i=t(71487),n=t(84881),o=t(94994),c=(t(38228),t(60635)),d=t(56663),l=t(3137),u=t(85951);function m(e){var s=(0,u.a)("userId");a.ZP.show(),ApiClient.getUser(s).then((function(s){e.querySelector(".username").innerText=s.Name,i.default.setTitle(s.Name);var t="assets/img/avatar.png";s.PrimaryImageTag&&(t=ApiClient.getUserImageUrl(s.Id,{tag:s.PrimaryImageTag,type:"Primary"})),e.querySelector("#image").style.backgroundImage="url("+t+")",c.default.getCurrentUser().then((function(t){s.PrimaryImageTag?(e.querySelector("#btnAddImage").classList.add("hide"),e.querySelector("#btnDeleteImage").classList.remove("hide")):n.M.supports("fileinput")&&(t.Policy.IsAdministrator||s.Policy.EnableUserPreferenceAccess)&&(e.querySelector("#btnDeleteImage").classList.add("hide"),e.querySelector("#btnAddImage").classList.remove("hide"))})),a.ZP.hide()}))}function v(e){switch(a.ZP.hide(),e.target.error.code){case e.target.error.NOT_FOUND_ERR:(0,d.Z)(o.ZP.translate("FileNotFound"));break;case e.target.error.ABORT_ERR:g();break;case e.target.error.NOT_READABLE_ERR:default:(0,d.Z)(o.ZP.translate("FileReadError"))}}function g(){a.ZP.hide(),(0,d.Z)(o.ZP.translate("FileReadCancelled"))}function f(e,s){m(e),new r.default(e,s),e.querySelector("#btnDeleteImage").addEventListener("click",(function(){(0,l.Z)(o.ZP.translate("DeleteImageConfirmation"),o.ZP.translate("DeleteImage")).then((function(){a.ZP.show();var s=(0,u.a)("userId");ApiClient.deleteUserImage(s,"primary").then((function(){a.ZP.hide(),m(e)}))}))})),e.querySelector("#btnAddImage").addEventListener("click",(function(){e.querySelector("#uploadImage").click()})),e.querySelector("#uploadImage").addEventListener("change",(function(s){!function(e,s){var t=e.querySelector("#image"),r=s[0];if(!r||!r.type.match("image.*"))return!1;var i=new FileReader;i.onerror=v,i.onabort=g,i.onload=function(s){t.style.backgroundImage="url("+s.target.result+")";var i=(0,u.a)("userId");ApiClient.uploadUserImage(i,"Primary",r).then((function(){a.ZP.hide(),m(e)}))},i.readAsDataURL(r)}(e,s.target.files)}))}},51869:function(e,s,t){s.ZP={getDeviceIcon:function(e){switch(e.AppName||e.Client){case"Samsung Smart TV":return"assets/img/devices/samsung.svg";case"Xbox One":return"assets/img/devices/xbox.svg";case"Sony PS4":return"assets/img/devices/playstation.svg";case"Kodi":case"Kodi JellyCon":return"assets/img/devices/kodi.svg";case"Jellyfin Android":case"AndroidTV":case"Android TV":return"assets/img/devices/android.svg";case"Jellyfin Mobile (iOS)":case"Jellyfin Mobile (iPadOS)":case"Jellyfin iOS":case"Infuse":return"assets/img/devices/apple.svg";case"Home Assistant":return"assets/img/devices/home-assistant.svg";case"Jellyfin Roku":return"assets/img/devices/roku.svg";case"Finamp":return"assets/img/devices/finamp.svg";case"Jellyfin Web":return function(e){switch(e){case"Opera":case"Opera TV":case"Opera Android":return"assets/img/devices/opera.svg";case"Chrome":case"Chrome Android":return"assets/img/devices/chrome.svg";case"Firefox":case"Firefox Android":return"assets/img/devices/firefox.svg";case"Safari":case"Safari iPad":case"Safari iPhone":return"assets/img/devices/safari.svg";case"Edge Chromium":case"Edge Chromium Android":case"Edge Chromium iPad":case"Edge Chromium iPhone":return"assets/img/devices/edgechromium.svg";case"Edge":return"assets/img/devices/edge.svg";case"Internet Explorer":return"assets/img/devices/msie.svg";default:return"assets/img/devices/html5.svg"}}(e.Name||e.DeviceName);default:return"assets/img/devices/other.svg"}},getLibraryIcon:function(e){switch(e){case"movies":return"video_library";case"music":return"library_music";case"photos":case"homevideos":return"photo_library";case"livetv":return"live_tv";case"tvshows":return"tv";case"trailers":return"local_movies";case"musicvideos":return"music_video";case"books":return"library_books";case"channels":return"videocam";case"playlists":return"view_list";default:return"folder"}}}}}]);