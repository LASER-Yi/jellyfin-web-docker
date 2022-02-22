"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7051,2657],{29955:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}}),n(5769),n(86248),n(95623),n(23938),n(63238),n(61418),n(17460),n(14078),n(72410),n(15610),n(52077),n(25901),n(92189),n(91047);var r=n(31699),a=n.n(r),i=n(93629),o=n(94389),c=n(67469),l=n(83094),s=n(56705),u=n(78695),d=n(3319),v=n(47518),f=n(44614),m=(n(46650),n(45368),n(76543)),h=n(53913),g=n(25152),y=n(90914),b=n(61642),S=n(61097);function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function k(e,t,n,r,a,i,o){try{var c=e[i](o),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,a)}n(35075);var q=!v.Z.slow&&!v.Z.edge;function C(e,t,n,r){s.ZP.show(),t.authenticateUserByName(n,r).then((function(e){var n=e.User;s.ZP.hide(),P(n.Id,e.AccessToken,t)}),(function(t){if(e.querySelector("#txtManualPassword").value="",s.ZP.hide(),[401,403].includes(t.status)){var n=401===t.status?"MessageInvalidUser":"MessageUnauthorizedUser";(0,g.Z)(f.ZP.translate(n))}else m.ZP.alert({message:f.ZP.translate("MessageUnableToConnectToServer"),title:f.ZP.translate("HeaderConnectionFailure")})}))}function P(e,t,n){m.ZP.onServerChanged(e,t,n),m.ZP.navigate("home.html")}function Z(e,t,n){e.querySelector(".chkRememberLogin").checked=c.Z.enableAutoLogin(),e.querySelector(".manualLoginForm").classList.remove("hide"),e.querySelector(".visualLoginForm").classList.add("hide"),e.querySelector(".btnManual").classList.add("hide"),n?e.querySelector("#txtManualPassword").focus():e.querySelector("#txtManualName").focus(),t?e.querySelector(".btnCancel").classList.remove("hide"):e.querySelector(".btnCancel").classList.add("hide")}function w(e,t){function r(){var e=t.serverid;return e?h.Z.getOrCreateApiClient(e):ApiClient}function v(){e.querySelector(".visualLoginForm").classList.remove("hide"),e.querySelector(".manualLoginForm").classList.add("hide"),e.querySelector(".btnManual").classList.remove("hide"),Promise.resolve().then(n.bind(n,6610)).then((function(t){t.default.autoFocus(e)}))}e.querySelector("#divUsers").addEventListener("click",(function(t){var n=l.ZP.parentWithClass(t.target,"card"),a=n?n.querySelector(".cardContent"):null;if(a){var i=e,o=a.getAttribute("data-userid"),c=a.getAttribute("data-username"),s=a.getAttribute("data-haspw");"manual"===o?(i.querySelector("#txtManualName").value="",Z(i,!0)):"false"==s?C(i,r(),c,""):(i.querySelector("#txtManualName").value=c,i.querySelector("#txtManualPassword").value="",Z(i,!0,!0))}})),e.querySelector(".manualLoginForm").addEventListener("submit",(function(t){c.Z.enableAutoLogin(e.querySelector(".chkRememberLogin").checked);var n=r();return C(e,n,e.querySelector("#txtManualName").value,e.querySelector("#txtManualPassword").value),t.preventDefault(),!1})),e.querySelector(".btnForgotPassword").addEventListener("click",(function(){m.ZP.navigate("forgotpassword.html")})),e.querySelector(".btnCancel").addEventListener("click",v),e.querySelector(".btnQuick").addEventListener("click",(function(){return e=r(),t=e.getUrl("/QuickConnect/Initiate"),e.getJSON(t).then((function(t){if(!t.Secret||!t.Code)return console.error("Malformed quick connect response",t),!1;(0,b.Z)({dialogOptions:{id:"quickConnectAlert"},title:f.ZP.translate("QuickConnect"),text:f.ZP.translate("QuickConnectAuthorizeCode",t.Code)});var n=e.getUrl("/QuickConnect/Connect?Secret="+t.Secret),r=setInterval((function(){e.getJSON(n).then(function(){var t,n=(t=regeneratorRuntime.mark((function t(n){var a,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.Authenticated){t.next=2;break}return t.abrupt("return");case 2:return clearInterval(r),(a=document.getElementById("quickConnectAlert"))&&y.default.close(a),t.next=7,e.quickConnect(n.Secret);case 7:P((i=t.sent).User.Id,i.AccessToken,e);case 9:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function o(e){k(i,r,a,o,c,"next",e)}function c(e){k(i,r,a,o,c,"throw",e)}o(void 0)}))});return function(e){return n.apply(this,arguments)}}(),(function(e){clearInterval(r);var t=document.getElementById("quickConnectAlert");t&&y.default.close(t),m.ZP.alert({message:f.ZP.translate("QuickConnectDeactivated"),title:f.ZP.translate("HeaderError")}),console.error("Unable to login with quick connect",e)}))}),5e3,n);return!0}),(function(e){return m.ZP.alert({message:f.ZP.translate("QuickConnectNotActive"),title:f.ZP.translate("HeaderError")}),console.error("Quick connect error: ",e),!1})),!1;var e,t})),e.querySelector(".btnManual").addEventListener("click",(function(){e.querySelector("#txtManualName").value="",Z(e,!0)})),e.querySelector(".btnSelectServer").addEventListener("click",(function(){m.ZP.selectServer()})),e.addEventListener("viewshow",(function(){s.ZP.show(),d.Z.setTransparentMenu(!0),o.M.supports("multiserver")||e.querySelector(".btnSelectServer").classList.add("hide");var t=r();t.getQuickConnect("Enabled").then((function(t){!0===t&&e.querySelector(".btnQuick").classList.remove("hide")})).catch((function(){console.debug("Failed to get QuickConnect status")})),t.getPublicUsers().then((function(n){n.length?(v(),function(e,t,n){for(var r="",a=0;a<n.length;a++){var i=n[a],o="card squareCard scalableCard squareCard-scalable";u.Z.tv&&(o+=" show-focus",q&&(o+=" show-animation")),r+='<button type="button" class="'+o+'">',r+='<div class="cardBox cardBox-bottompadded">',r+='<div class="cardScalable">',r+='<div class="cardPadder cardPadder-square"></div>',r+='<div class="cardContent" data-haspw="'.concat(i.HasPassword,'" data-username="').concat(i.Name,'" data-userid="').concat(i.Id,'">'),i.PrimaryImageTag?r+='<div class="cardImageContainer coveredImage" style="background-image:url(\''+t.getUserImageUrl(i.Id,{width:300,tag:i.PrimaryImageTag,type:"Primary"})+"');\"></div>":(r+='<div class="cardImage flex align-items-center justify-content-center '.concat(S.default.getDefaultBackgroundClass(),'">'),r+='<span class="material-icons cardImageIcon person"></span>',r+="</div>"),r+="</div>",r+="</div>",r+='<div class="cardFooter visualCardBox-cardFooter">',r+='<div class="cardText singleCardText cardTextCentered">'+i.Name+"</div>",r+="</div>",r+="</div>",r+="</button>"}e.querySelector("#divUsers").innerHTML=r}(e,t,n)):(e.querySelector("#txtManualName").value="",Z(e,!1,!1))})).catch().then((function(){s.ZP.hide()})),t.getJSON(t.getUrl("Branding/Configuration")).then((function(t){var n=e.querySelector(".disclaimer");n.innerHTML=a().sanitize((0,i.TU)(t.LoginDisclaimer||""));var r,o=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){c=!0,i=e},f:function(){try{o||null==n.return||n.return()}finally{if(c)throw i}}}}(n.querySelectorAll("a"));try{for(o.s();!(r=o.n()).done;){var c=r.value;c.target="_blank",c.classList.add("button-link"),c.setAttribute("is","emby-linkbutton"),u.Z.tv&&(c.tabIndex=-1)}}catch(e){o.e(e)}finally{o.f()}}))})),e.addEventListener("viewhide",(function(){d.Z.setTransparentMenu(!1)}))}},99480:function(e,t,n){var r=n(54933),a=n.n(r),i=n(93476),o=n.n(i)()(a());o.push([e.id,".disclaimerContainer{display:-webkit-flex;display:flex;margin-top:2em}.disclaimer{margin:0 auto}.disclaimer h1,.disclaimer h2,.disclaimer h3,.disclaimer h4,.disclaimer h5,.disclaimer h6,.disclaimer p{text-align:center}.disclaimer ol,.disclaimer ul{margin-left:auto;margin-right:auto;max-width:40em;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}",""]),t.Z=o},35075:function(e,t,n){n.r(t);var r=n(1892),a=n.n(r),i=n(95760),o=n.n(i),c=n(38311),l=n.n(c),s=n(58192),u=n.n(s),d=n(38060),v=n.n(d),f=n(54865),m=n.n(f),h=n(99480),g={};g.styleTagTransform=m(),g.setAttributes=u(),g.insert=l().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=v(),a()(h.Z,g),t.default=h.Z&&h.Z.locals?h.Z.locals:void 0}}]);