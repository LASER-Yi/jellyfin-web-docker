"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5190],{85945:function(n,e,t){t.r(e);var a=t(62540),i=t(38935),c=t(63696),o=t(9055),r=t(7397),l=t(9482),s=t(39057),u=t(76165),d=t(14847),f=function(n,e){var t="function"==typeof Symbol&&n[Symbol.iterator];if(!t)return n;var a,i,c=t.call(n),o=[];try{for(;(void 0===e||e-- >0)&&!(a=c.next()).done;)o.push(a.value)}catch(n){i={error:n}}finally{try{a&&!a.done&&(t=c.return)&&t.call(c)}finally{if(i)throw i.error}}return o};e.default=function(){var n=(0,d.gf)(),e=n.api,t=n.user,p=f((0,o.ok)(),1)[0],v=(0,c.useMemo)((function(){var n;return null!==(n=p.get("code"))&&void 0!==n?n:""}),[]),m=f((0,c.useState)(v),2),h=m[0],y=m[1],b=f((0,c.useState)(),2),g=b[0],k=b[1],C=f((0,c.useState)(!1),2),x=C[0],A=C[1],j=(0,c.useCallback)((function(n){y(n)}),[]),N=(0,c.useCallback)((function(n){var a;if(n.preventDefault(),k(void 0),n.currentTarget.checkValidity()){if(!e)return console.error("[QuickConnect] cannot authorize, missing api instance"),void k("UnknownError");var c=null!==(a=p.get("userId"))&&void 0!==a?a:null==t?void 0:t.Id,o=h.replace(/\s/g,"");console.log("[QuickConnect] authorizing code %s as user %s",o,c),(0,i.k)(e).authorizeQuickConnect({code:o,userId:c}).then((function(){A(!0)})).catch((function(){k("QuickConnectAuthorizeFail")}))}else k("QuickConnectInvalidCode")}),[e,h,p,null==t?void 0:t.Id]);return(0,a.jsx)(r.A,{id:"quickConnectPreferencesPage",title:l.Ay.translate("QuickConnect"),className:"mainAnimatedPage libraryPage userPreferencesPage noSecondaryNavPage",children:(0,a.jsx)("div",{className:"padded-left padded-right padded-bottom-page",children:(0,a.jsx)("form",{onSubmit:N,children:(0,a.jsxs)("div",{className:"verticalSection",children:[(0,a.jsx)("h2",{className:"sectionTitle",children:l.Ay.translate("QuickConnect")}),(0,a.jsx)("div",{children:l.Ay.translate("QuickConnectDescription")}),(0,a.jsx)("br",{}),g&&(0,a.jsx)("div",{className:"quickConnectError",children:l.Ay.translate(g)}),x?(0,a.jsxs)("div",{style:{textAlign:"center"},children:[(0,a.jsx)("p",{children:l.Ay.translate("QuickConnectAuthorizeSuccess")}),(0,a.jsx)(o.N_,{to:"/home.html",className:"button-link emby-button",children:l.Ay.translate("GoHome")})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.A,{containerClassName:"inputContainer",initialValue:v,onChange:j,id:"txtQuickConnectCode",label:"LabelQuickConnectCode",type:"text",options:"inputmode='numeric' pattern='[0-9\\s]*' minlength='6' required autocomplete='off'"}),(0,a.jsx)(u.A,{type:"submit",className:"raised button-submit block",title:l.Ay.translate("Authorize")})]})]})})})})}},76165:function(n,e,t){var a=t(62540),i=(t(63696),t(9482)),c=function(n){var e=n.type,t=n.id,a=n.className,i=n.title,c=n.leftIcon,o=n.rightIcon;return{__html:'<button\n        is="emby-button"\n        type="'.concat(e,'"\n        ').concat(t,'\n        class="').concat(a,'"\n        >\n        ').concat(c,"\n        <span>").concat(i,"</span>\n        ").concat(o,"\n    </button>")}};e.A=function(n){var e=n.type,t=n.id,o=n.className,r=n.title,l=n.leftIcon,s=n.rightIcon;return(0,a.jsx)("div",{dangerouslySetInnerHTML:c({type:e,id:t?'id="'.concat(t,'"'):"",className:o,title:i.Ay.translate(r),leftIcon:l?'<span class="material-icons '.concat(l,'" aria-hidden="true"></span>'):"",rightIcon:s?'<span class="material-icons '.concat(s,'" aria-hidden="true"></span>'):""})})}},39057:function(n,e,t){var a=t(62540),i=t(63696),c=t(9482);e.A=function(n){var e=n.containerClassName,t=n.initialValue,o=n.onChange,r=void 0===o?function(){}:o,l=n.type,s=n.id,u=n.label,d=n.options,f=void 0===d?"":d,p=(0,i.useRef)(null),v=(0,i.useMemo)((function(){return function(n){var e=n.id,t=n.label,a=n.initialValue,i=n.options;return{__html:'<input\n        is="emby-input"\n        type="'.concat(n.type,'"\n        id="').concat(e,'"\n        label="').concat(t,'"\n        value="').concat(a,'"\n        ').concat(i,"\n    />")}}({type:l,id:s,label:c.Ay.translate(u),initialValue:t,options:f})}),[]),m=(0,i.useCallback)((function(n){r(n.target.value)}),[r]);return(0,i.useEffect)((function(){var n,e=null===(n=null==p?void 0:p.current)||void 0===n?void 0:n.querySelector("input");return null==e||e.addEventListener("input",m),function(){null==e||e.removeEventListener("input",m)}}),[p,m]),(0,a.jsx)("div",{ref:p,className:e,dangerouslySetInnerHTML:v})}}}]);