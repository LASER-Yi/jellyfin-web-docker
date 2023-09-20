"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[21277],{33206:function(e,n,t){t.r(n);var a=t(24246),i=t(63268),o=t(27378),r=t(27851),c=t(87143),l=t(94994),s=t(503),u=t(5712),d=t(51240),p=function(){return p=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},p.apply(this,arguments)},v=function(e,n){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var a,i,o=t.call(e),r=[];try{for(;(void 0===n||n-- >0)&&!(a=o.next()).done;)r.push(a.value)}catch(e){i={error:e}}finally{try{a&&!a.done&&(t=o.return)&&t.call(o)}finally{if(i)throw i.error}}return r};n.default=function(){var e=(0,d.h_)(),n=e.api,t=e.user,f=v((0,r.lr)(),1)[0],h=(0,o.useMemo)((function(){var e;return null!==(e=f.get("code"))&&void 0!==e?e:""}),[]),m=v((0,o.useState)(h),2),b=m[0],y=m[1],g=v((0,o.useState)(),2),C=g[0],k=g[1],j=v((0,o.useState)(!1),2),x=j[0],P=j[1],w=(0,o.useCallback)((function(e){y(e)}),[]),E=(0,o.useCallback)((function(e){var a;if(e.preventDefault(),k(void 0),e.currentTarget.checkValidity()){if(!n)return console.error("[QuickConnect] cannot authorize, missing api instance"),void k("UnknownError");var o=null!==(a=f.get("userId"))&&void 0!==a?a:null==t?void 0:t.Id,r=b.replace(/\s/g,"");console.log("[QuickConnect] authorizing code %s as user %s",r,o),(0,i.y)(n).authorizeQuickConnect({code:r,userId:o}).then((function(){P(!0)})).catch((function(){k("QuickConnectAuthorizeFail")}))}else k("QuickConnectInvalidCode")}),[n,b,f,null==t?void 0:t.Id]);return(0,a.jsx)(c.Z,p({id:"quickConnectPreferencesPage",title:l.ZP.translate("QuickConnect"),className:"mainAnimatedPage libraryPage userPreferencesPage noSecondaryNavPage"},{children:(0,a.jsx)("div",p({className:"padded-left padded-right padded-bottom-page"},{children:(0,a.jsx)("form",p({onSubmit:E},{children:(0,a.jsxs)("div",p({className:"verticalSection"},{children:[(0,a.jsx)("h2",p({className:"sectionTitle"},{children:l.ZP.translate("QuickConnect")})),(0,a.jsx)("div",{children:l.ZP.translate("QuickConnectDescription")}),(0,a.jsx)("br",{}),C&&(0,a.jsx)("div",p({className:"quickConnectError"},{children:l.ZP.translate(C)})),x?(0,a.jsxs)("div",p({style:{textAlign:"center"}},{children:[(0,a.jsx)("p",{children:l.ZP.translate("QuickConnectAuthorizeSuccess")}),(0,a.jsx)(r.rU,p({to:"/home.html",className:"button-link emby-button"},{children:l.ZP.translate("GoHome")}))]})):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.Z,{containerClassName:"inputContainer",initialValue:h,onChange:w,id:"txtQuickConnectCode",label:"LabelQuickConnectCode",type:"text",options:"inputmode='numeric' pattern='[0-9\\s]*' minlength='6' required autocomplete='off'"}),(0,a.jsx)(u.Z,{type:"submit",className:"raised button-submit block",title:l.ZP.translate("Authorize")})]})]}))}))}))}))}},87143:function(e,n,t){var a=t(24246),i=t(27378),o=t(53424),r=function(){return r=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},r.apply(this,arguments)};n.Z=function(e){var n=e.children,t=e.id,c=e.className,l=void 0===c?"":c,s=e.title,u=e.isBackButtonEnabled,d=void 0===u||u,p=e.isMenuButtonEnabled,v=void 0!==p&&p,f=e.isNowPlayingBarEnabled,h=void 0===f||f,m=e.isThemeMediaSupported,b=void 0!==m&&m,y=e.backDropType,g=(0,i.useRef)(null);return(0,i.useEffect)((function(){o.Z.hideView()}),[]),(0,i.useEffect)((function(){var e,n,t,a,i={bubbles:!0,cancelable:!1,detail:{isRestored:!1,options:{enableMediaControl:h,supportsThemeMedia:b}}};null===(e=g.current)||void 0===e||e.dispatchEvent(new CustomEvent("viewbeforeshow",i)),null===(n=g.current)||void 0===n||n.dispatchEvent(new CustomEvent("pagebeforeshow",i)),null===(t=g.current)||void 0===t||t.dispatchEvent(new CustomEvent("viewshow",i)),null===(a=g.current)||void 0===a||a.dispatchEvent(new CustomEvent("pageshow",i))}),[g,h,b]),(0,a.jsx)("div",r({ref:g,id:t,"data-role":"page",className:"page ".concat(l),"data-title":s,"data-backbutton":d,"data-menubutton":v,"data-backdroptype":y},{children:n}))}},5712:function(e,n,t){var a=t(24246),i=(t(27378),t(94994)),o=function(e){var n=e.type,t=e.id,a=e.className,i=e.title,o=e.leftIcon,r=e.rightIcon;return{__html:'<button\n        is="emby-button"\n        type="'.concat(n,'"\n        ').concat(t,'\n        class="').concat(a,'"\n        >\n        ').concat(o,"\n        <span>").concat(i,"</span>\n        ").concat(r,"\n    </button>")}};n.Z=function(e){var n=e.type,t=e.id,r=e.className,c=e.title,l=e.leftIcon,s=e.rightIcon;return(0,a.jsx)("div",{dangerouslySetInnerHTML:o({type:n,id:t?'id="'.concat(t,'"'):"",className:r,title:i.ZP.translate(c),leftIcon:l?'<span class="material-icons '.concat(l,'" aria-hidden="true"></span>'):"",rightIcon:s?'<span class="material-icons '.concat(s,'" aria-hidden="true"></span>'):""})})}},503:function(e,n,t){var a=t(24246),i=t(27378),o=t(94994);n.Z=function(e){var n=e.containerClassName,t=e.initialValue,r=e.onChange,c=void 0===r?function(){}:r,l=e.type,s=e.id,u=e.label,d=e.options,p=void 0===d?"":d,v=(0,i.useRef)(null),f=(0,i.useMemo)((function(){return function(e){var n=e.id,t=e.label,a=e.initialValue,i=e.options;return{__html:'<input\n        is="emby-input"\n        type="'.concat(e.type,'"\n        id="').concat(n,'"\n        label="').concat(t,'"\n        value="').concat(a,'"\n        ').concat(i,"\n    />")}}({type:l,id:s,label:o.ZP.translate(u),initialValue:t,options:p})}),[]),h=(0,i.useCallback)((function(e){c(e.target.value)}),[c]);return(0,i.useEffect)((function(){var e,n=null===(e=null==v?void 0:v.current)||void 0===e?void 0:e.querySelector("input");return null==n||n.addEventListener("input",h),function(){null==n||n.removeEventListener("input",h)}}),[v,h]),(0,a.jsx)("div",{ref:v,className:n,dangerouslySetInnerHTML:f})}}}]);