"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9030],{24468:function(e,t,r){r.r(t),r.d(t,{default:function(){return i}}),r(5769),r(63238),r(61418),r(17460),r(14078);var n=r(94389),s=(r(664),r(78066),r(78695)),c=r(76543);function i(e,t){e.querySelector(".btnLogout").addEventListener("click",(function(){c.ZP.logout()})),e.querySelector(".selectServer").addEventListener("click",(function(){c.ZP.selectServer()})),e.querySelector(".clientSettings").addEventListener("click",(function(){window.NativeShell.openClientSettings()})),e.querySelector(".exitApp").addEventListener("click",(function(){n.M.exit()})),e.addEventListener("viewshow",(function(){var i=t.userId||c.ZP.getCurrentUserId(),l=this;l.querySelector(".lnkMyProfile").setAttribute("href","#!/myprofile.html?userId="+i),l.querySelector(".lnkDisplayPreferences").setAttribute("href","#!/mypreferencesdisplay.html?userId="+i),l.querySelector(".lnkHomePreferences").setAttribute("href","#!/mypreferenceshome.html?userId="+i),l.querySelector(".lnkPlaybackPreferences").setAttribute("href","#!/mypreferencesplayback.html?userId="+i),l.querySelector(".lnkSubtitlePreferences").setAttribute("href","#!/mypreferencessubtitles.html?userId="+i),l.querySelector(".lnkQuickConnectPreferences").setAttribute("href","#!/mypreferencesquickconnect.html"),l.querySelector(".lnkControlsPreferences").setAttribute("href","#!/mypreferencescontrols.html?userId="+i);var o=n.M.supports("clientsettings");l.querySelector(".clientSettings").classList.toggle("hide",!o);var u=n.M.supports("exitmenu");l.querySelector(".exitApp").classList.toggle("hide",!u);var d=n.M.supports("multiserver");l.querySelector(".selectServer").classList.toggle("hide",!d),l.querySelector(".lnkControlsPreferences").classList.toggle("hide",s.Z.mobile),ApiClient.getQuickConnect("Enabled").then((function(e){!0===e&&l.querySelector(".lnkQuickConnectPreferences").classList.remove("hide")})).catch((function(){console.debug("Failed to get QuickConnect status")})),ApiClient.getUser(i).then((function(e){l.querySelector(".headerUsername").innerHTML=e.Name,e.Policy.IsAdministrator&&!s.Z.tv&&l.querySelector(".adminSection").classList.remove("hide")})),t.userId&&t.userId!==c.ZP.getCurrentUserId&&(l.querySelector(".userSection").classList.add("hide"),l.querySelector(".adminSection").classList.add("hide"),l.querySelector(".lnkControlsPreferences").classList.add("hide")),Promise.resolve().then(r.bind(r,6610)).then((function(t){t.default.autoFocus(e)}))}))}}}]);