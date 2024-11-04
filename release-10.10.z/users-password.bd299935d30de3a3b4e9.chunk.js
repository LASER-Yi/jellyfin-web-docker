"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[38245],{19715:function(e,t,r){r.r(t);var n=r(62540),a=r(63696),s=r(9055),o=r(58702),i=r(25235),l=r(30658),c=r(65242),u=r(8566),d=function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,a,s=r.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(n=s.next()).done;)o.push(n.value)}catch(e){a={error:e}}finally{try{n&&!n.done&&(r=s.return)&&r.call(s)}finally{if(a)throw a.error}}return o};t.default=function(){var e=d((0,s.ok)(),1)[0].get("userId"),t=d((0,a.useState)(""),2),r=t[0],f=t[1],p=(0,a.useCallback)((function(){e?(u.Ay.show(),window.ApiClient.getUser(e).then((function(e){if(!e.Name)throw new Error("Unexpected null user.Name");f(e.Name),u.Ay.hide()})).catch((function(e){console.error("[userpassword] failed to fetch user",e)}))):console.error("[userpassword] missing user id")}),[e]);return(0,a.useEffect)((function(){p()}),[p]),(0,n.jsx)(c.A,{id:"userPasswordPage",className:"mainAnimatedPage type-interior userPasswordPage",children:(0,n.jsxs)("div",{className:"content-primary",children:[(0,n.jsx)("div",{className:"verticalSection",children:(0,n.jsx)(l.A,{title:r,url:"https://jellyfin.org/docs/general/server/users/"})}),(0,n.jsx)(o.A,{activeTab:"userpassword"}),(0,n.jsx)("div",{className:"readOnlyContent",children:(0,n.jsx)(i.A,{userId:e})})]})})}},58702:function(e,t,r){var n=r(62540),a=r(63696),s=r(5898),o=r(89100),i=r(84851);function l(e){return a.useCallback((function(){(0,o.navigate)(e,!0).catch((function(e){console.warn("Error navigating to dashboard url",e)}))}),[e])}t.A=function(e){var t=e.activeTab,r=l("/dashboard/users/profile"),a=l("/dashboard/users/access"),o=l("/dashboard/users/parentalcontrol"),c=l("/dashboard/users/password");return(0,n.jsxs)("div",{"data-role":"controlgroup","data-type":"horizontal",className:"localnav",children:[(0,n.jsx)(i.A,{href:"#","data-role":"button",className:"useredit"===t?"ui-btn-active":"",onClick:r,children:s.Ay.translate("Profile")}),(0,n.jsx)(i.A,{href:"#","data-role":"button",className:"userlibraryaccess"===t?"ui-btn-active":"",onClick:a,children:s.Ay.translate("TabAccess")}),(0,n.jsx)(i.A,{href:"#","data-role":"button",className:"userparentalcontrol"===t?"ui-btn-active":"",onClick:o,children:s.Ay.translate("TabParentalControl")}),(0,n.jsx)(i.A,{href:"#","data-role":"button",className:"userpassword"===t?"ui-btn-active":"",onClick:c,children:s.Ay.translate("HeaderPassword")})]})}},25235:function(e,t,r){var n=r(62540),a=r(63696),s=r(89100),o=r(5898),i=r(40532),l=r(8566),c=r(50764),u=r(86068),d=r(63622),f=function(e,t,r,n){return new(r||(r=Promise))((function(a,s){function o(e){try{l(n.next(e))}catch(e){s(e)}}function i(e){try{l(n.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,i)}l((n=n.apply(e,t||[])).next())}))},p=function(e,t){var r,n,a,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]},o=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return o.next=i(0),o.throw=i(1),o.return=i(2),"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(i){return function(l){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,i[0]&&(s=0)),s;)try{if(r=1,n&&(a=2&i[0]?n.return:i[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,i[1])).done)return a;switch(n=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((a=(a=s.trys).length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){s.label=i[1];break}if(6===i[0]&&s.label<a[1]){s.label=a[1],a=i;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(i);break}a[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],n=0}finally{r=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}};t.A=function(e){var t=e.userId,v=(0,a.useRef)(null),h=(0,a.useRef)(),y=(0,a.useMemo)((function(){return f(void 0,void 0,void 0,(function(){return p(this,(function(e){switch(e.label){case 0:return[4,Promise.all([r.e(45642),r.e(45568),r.e(73233),r.e(47027)]).then(r.bind(r,73233))];case 1:return[2,e.sent().default]}}))}))}),[]),w=(0,a.useCallback)((function(){return f(void 0,void 0,void 0,(function(){var e,n,a,o,i,l;return p(this,(function(c){switch(c.label){case 0:return(e=v.current)?t?(n=h,[4,window.ApiClient.getUser(t)]):(console.error("[UserPasswordForm] missing user id"),[2]):(console.error("[UserPasswordForm] Unexpected null page reference"),[2]);case 1:return n.current=c.sent(),[4,s.default.getCurrentUser()];case 2:if(a=c.sent(),!h.current.Policy||!h.current.Configuration)throw new Error("Unexpected null user policy or configuration");return[4,y];case 3:return c.sent().setTitle(h.current.Name),h.current.HasConfiguredPassword?((null===(i=h.current.Policy)||void 0===i?void 0:i.IsAdministrator)||e.querySelector("#btnResetPassword").classList.remove("hide"),e.querySelector("#fldCurrentPassword").classList.remove("hide")):(e.querySelector("#btnResetPassword").classList.add("hide"),e.querySelector("#fldCurrentPassword").classList.add("hide")),o=(null===(l=null==a?void 0:a.Policy)||void 0===l?void 0:l.IsAdministrator)||h.current.Policy.EnableUserPreferenceAccess,e.querySelector(".passwordSection").classList.toggle("hide",!o),Promise.resolve().then(r.bind(r,84069)).then((function(t){t.default.autoFocus(e)})).catch((function(e){console.error("[UserPasswordForm] failed to load autofocuser",e)})),e.querySelector("#txtCurrentPassword").value="",e.querySelector("#txtNewPassword").value="",e.querySelector("#txtNewPasswordConfirm").value="",[2]}}))}))}),[t]);return(0,a.useEffect)((function(){var e=v.current;if(e){w().catch((function(e){console.error("[UserPasswordForm] failed to load user",e)}));e.querySelector(".updatePasswordForm").addEventListener("submit",(function(r){var n,a;return e.querySelector("#txtNewPassword").value!=e.querySelector("#txtNewPasswordConfirm").value?(0,c.A)(o.Ay.translate("PasswordMatchError")):""==e.querySelector("#txtNewPassword").value&&(null===(a=null===(n=h.current)||void 0===n?void 0:n.Policy)||void 0===a?void 0:a.IsAdministrator)?(0,c.A)(o.Ay.translate("PasswordMissingSaveError")):(l.Ay.show(),function(){if(t){var r=e.querySelector("#txtCurrentPassword").value,n=e.querySelector("#txtNewPassword").value;e.querySelector("#fldCurrentPassword").classList.contains("hide")&&(r=""),window.ApiClient.updateUserPassword(t,r,n).then((function(){l.Ay.hide(),(0,c.A)(o.Ay.translate("PasswordSaved")),w().catch((function(e){console.error("[UserPasswordForm] failed to load user",e)}))}),(function(){l.Ay.hide(),s.default.alert({title:o.Ay.translate("HeaderLoginFailure"),message:o.Ay.translate("MessageInvalidUser")})}))}else console.error("[UserPasswordForm.savePassword] missing user id")}()),r.preventDefault(),!1})),e.querySelector("#btnResetPassword").addEventListener("click",(function(){if(t){var e=o.Ay.translate("PasswordResetConfirmation");(0,i.A)(e,o.Ay.translate("ResetPassword")).then((function(){l.Ay.show(),window.ApiClient.resetUserPassword(t).then((function(){l.Ay.hide(),s.default.alert({message:o.Ay.translate("PasswordResetComplete"),title:o.Ay.translate("ResetPassword")}),w().catch((function(e){console.error("[UserPasswordForm] failed to load user",e)}))})).catch((function(e){console.error("[UserPasswordForm] failed to reset user password",e)}))})).catch((function(){}))}else console.error("[UserPasswordForm.resetPassword] missing user id")}))}else console.error("[UserPasswordForm] Unexpected null page reference")}),[w,t]),(0,n.jsx)("div",{ref:v,children:(0,n.jsx)("form",{className:"updatePasswordForm passwordSection hide",style:{margin:"0 auto 2em"},children:(0,n.jsxs)("div",{className:"detailSection",children:[(0,n.jsx)("div",{id:"fldCurrentPassword",className:"inputContainer hide",children:(0,n.jsx)(d.A,{type:"password",id:"txtCurrentPassword",label:"LabelCurrentPassword",options:'autoComplete="off"'})}),(0,n.jsx)("div",{className:"inputContainer",children:(0,n.jsx)(d.A,{type:"password",id:"txtNewPassword",label:"LabelNewPassword",options:'autoComplete="off"'})}),(0,n.jsx)("div",{className:"inputContainer",children:(0,n.jsx)(d.A,{type:"password",id:"txtNewPasswordConfirm",label:"LabelNewPasswordConfirm",options:'autoComplete="off"'})}),(0,n.jsx)("br",{}),(0,n.jsxs)("div",{children:[(0,n.jsx)(u.A,{type:"submit",className:"raised button-submit block",title:"SavePassword"}),(0,n.jsx)(u.A,{type:"button",id:"btnResetPassword",className:"raised button-cancel block hide",title:"ResetPassword"})]})]})})})}},86068:function(e,t,r){var n=r(62540),a=(r(63696),r(5898)),s=function(e){var t=e.type,r=e.id,n=e.className,a=e.title,s=e.leftIcon,o=e.rightIcon;return{__html:'<button\n        is="emby-button"\n        type="'.concat(t,'"\n        ').concat(r,'\n        class="').concat(n,'"\n        >\n        ').concat(s,"\n        <span>").concat(a,"</span>\n        ").concat(o,"\n    </button>")}};t.A=function(e){var t=e.type,r=e.id,o=e.className,i=e.title,l=e.leftIcon,c=e.rightIcon;return(0,n.jsx)("div",{dangerouslySetInnerHTML:s({type:t,id:r?'id="'.concat(r,'"'):"",className:o,title:a.Ay.translate(i),leftIcon:l?'<span class="material-icons '.concat(l,'" aria-hidden="true"></span>'):"",rightIcon:c?'<span class="material-icons '.concat(c,'" aria-hidden="true"></span>'):""})})}},85817:function(e,t,r){var n=r(62540),a=(r(63696),r(5898));t.A=function(e){var t=e.is,r=e.id,s=e.className,o=e.title,i=e.icon,l=e.dataIndex,c=e.dataTag,u=e.dataProfileid,d=e.onClick,f=function(e){var t=e.id,r=e.className,n=e.title,a=e.icon,s=e.dataIndex,o=e.dataTag,i=e.dataProfileid;return{__html:'<button\n        is="'.concat(e.is,'"\n        type="button"\n        ').concat(t,'\n        class="').concat(r,'"\n        ').concat(n,"\n        ").concat(s,"\n        ").concat(o,"\n        ").concat(i,'\n    >\n        <span class="material-icons ').concat(a,'" aria-hidden="true"></span>\n    </button>')}}({is:t,id:r?'id="'.concat(r,'"'):"",className:s,title:o?'title="'.concat(a.Ay.translate(o),'"'):"",icon:i,dataIndex:l||0===l?'data-index="'.concat(l,'"'):"",dataTag:c?'data-tag="'.concat(c,'"'):"",dataProfileid:u?'data-profileid="'.concat(u,'"'):""});return void 0!==d?(0,n.jsx)("button",{style:{all:"unset"},dangerouslySetInnerHTML:f,onClick:d}):(0,n.jsx)("div",{dangerouslySetInnerHTML:f})}},63622:function(e,t,r){var n=r(62540),a=r(63696),s=r(5898);t.A=function(e){var t=e.containerClassName,r=e.initialValue,o=e.onChange,i=void 0===o?function(){}:o,l=e.type,c=e.id,u=e.label,d=e.options,f=void 0===d?"":d,p=(0,a.useRef)(null),v=(0,a.useMemo)((function(){return function(e){var t=e.id,r=e.label,n=e.initialValue,a=e.options;return{__html:'<input\n        is="emby-input"\n        type="'.concat(e.type,'"\n        id="').concat(t,'"\n        label="').concat(r,'"\n        value="').concat(n,'"\n        ').concat(a,"\n    />")}}({type:l,id:c,label:s.Ay.translate(u),initialValue:r,options:f})}),[]),h=(0,a.useCallback)((function(e){i(e.target.value)}),[i]);return(0,a.useEffect)((function(){var e,t=null===(e=null==p?void 0:p.current)||void 0===e?void 0:e.querySelector("input");return null==t||t.addEventListener("input",h),function(){null==t||t.removeEventListener("input",h)}}),[p,h]),(0,n.jsx)("div",{ref:p,className:t,dangerouslySetInnerHTML:v})}},30658:function(e,t,r){var n=r(62540),a=(r(63696),r(85817)),s=r(84851),o=r(5898);t.A=function(e){var t=e.SectionClassName,r=e.title,i=e.isBtnVisible,l=void 0!==i&&i,c=e.btnId,u=e.btnClassName,d=e.btnTitle,f=e.btnIcon,p=e.isLinkVisible,v=void 0===p||p,h=e.url;return(0,n.jsxs)("div",{className:"".concat(t," sectionTitleContainer flex align-items-center"),children:[(0,n.jsx)("h2",{className:"sectionTitle",children:r}),l&&(0,n.jsx)(a.A,{is:"emby-button",id:c,className:u,title:d,icon:f}),v&&(0,n.jsx)(s.A,{className:"raised button-alt headerHelpButton",target:"_blank",rel:"noopener noreferrer",href:h,children:o.Ay.translate("Help")})]})}},84851:function(e,t,r){var n=r(62540),a=r(63696),s=r(4452),o=r.n(s),i=r(46782),l=r(13615),c=r(70267),u=r(22622),d=function(){return d=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},d.apply(this,arguments)};t.A=function(e){var t=e.className,r=e.isAutoHideEnabled,s=e.href,f=e.target,p=e.onClick,v=e.children,h=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}(e,["className","isAutoHideEnabled","href","target","onClick","children"]),y=(0,a.useCallback)((function(e){var t=s||"";"#"!==t?f?u.g.supports("targetblank")||(e.preventDefault(),l.A.openUrl(t)):(e.preventDefault(),c.appRouter.show(t).catch((function(e){console.error("[LinkButton] failed to show url",t,e)}))):e.preventDefault(),null==p||p(e)}),[s,f,p]);if(!0===r&&!u.g.supports("externallinks"))return null;var w=o()("emby-button",t,{"show-focus":i.A.tv});return(0,n.jsx)("a",d({className:w,href:s,target:f,onClick:y},h,{children:v}))}}}]);