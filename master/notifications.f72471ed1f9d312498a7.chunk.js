"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[51909],{35106:function(e,n,t){t.r(n);var a=t(24246),i=(t(27378),t(87143)),s=t(94994),o=function(){return(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:"<a\n                is='emby-linkbutton'\n                class='button-link'\n                href='#/dashboard/plugins/add?name=Webhook&guid=71552a5a5c5c4350a2aeebe451a30173'\n            >\n                ".concat(s.ZP.translate("GetThePlugin"),"\n            </a>")}})};n.default=function(){return(0,a.jsx)(i.Z,{id:"notificationSettingPage",title:s.ZP.translate("Notifications"),className:"mainAnimatedPage type-interior",children:(0,a.jsxs)("div",{className:"content-primary",children:[(0,a.jsx)("h2",{children:s.ZP.translate("Notifications")}),(0,a.jsx)("p",{children:s.ZP.translate("NotificationsMovedMessage")}),(0,a.jsx)(o,{})]})})}},87143:function(e,n,t){var a=t(24246),i=t(27378),s=t(93110);n.Z=function(e){var n=e.children,t=e.id,o=e.className,d=void 0===o?"":o,r=e.title,c=e.isBackButtonEnabled,l=void 0===c||c,u=e.isMenuButtonEnabled,v=void 0!==u&&u,h=e.isNowPlayingBarEnabled,p=void 0===h||h,b=e.isThemeMediaSupported,f=void 0!==b&&b,m=e.backDropType,w=(0,i.useRef)(null);return(0,i.useEffect)((function(){s.Z.hideView()}),[]),(0,i.useEffect)((function(){var e,n,t,a,i={bubbles:!0,cancelable:!1,detail:{isRestored:!1,options:{enableMediaControl:p,supportsThemeMedia:f}}};null===(e=w.current)||void 0===e||e.dispatchEvent(new CustomEvent("viewbeforeshow",i)),null===(n=w.current)||void 0===n||n.dispatchEvent(new CustomEvent("pagebeforeshow",i)),null===(t=w.current)||void 0===t||t.dispatchEvent(new CustomEvent("viewshow",i)),null===(a=w.current)||void 0===a||a.dispatchEvent(new CustomEvent("pageshow",i))}),[w,p,f]),(0,a.jsx)("div",{ref:w,id:t,"data-role":"page",className:"page ".concat(d),"data-title":r,"data-backbutton":l,"data-menubutton":v,"data-backdroptype":m,children:n})}}}]);