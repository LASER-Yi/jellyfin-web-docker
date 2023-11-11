"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[35605],{2474:function(e,n,t){t.r(n);var a=t(24246),c=t(27378),l=t(60635),r=t(94994),s=t(28540),i=t(56663),o=t(87926),d=t(503),u=t(5712),h=t(85897),m=t(91904),f=t(87143),p=function(e,n){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var a,c,l=t.call(e),r=[];try{for(;(void 0===n||n-- >0)&&!(a=l.next()).done;)r.push(a.value)}catch(e){c={error:e}}finally{try{a&&!a.done&&(t=l.return)&&t.call(l)}finally{if(c)throw c.error}}return r};n.default=function(){var e=p((0,c.useState)([]),2),n=e[0],t=e[1],v=p((0,c.useState)([]),2),b=v[0],y=v[1],C=(0,c.useRef)(null),N=function(e){return e.map((function(e){return{Id:e.Id,Name:e.Name}}))},x=(0,c.useCallback)((function(e){var n=C.current;if(n){var t=N(e);y(t),n.querySelector(".folderAccess").dispatchEvent(new CustomEvent("create")),n.querySelector(".chkEnableAllFolders").checked=!1}else console.error("Unexpected null reference")}),[]),k=(0,c.useCallback)((function(e){var n=C.current;if(n){var a=N(e);t(a),n.querySelector(".channelAccess").dispatchEvent(new CustomEvent("create"));var c=n.querySelector(".channelAccessContainer");a.length?c.classList.remove("hide"):c.classList.add("hide"),n.querySelector(".chkEnableAllChannels").checked=!1}else console.error("Unexpected null reference")}),[]),A=(0,c.useCallback)((function(){var e=C.current;if(e){e.querySelector("#txtUsername").value="",e.querySelector("#txtPassword").value="",s.ZP.show();var n=window.ApiClient.getJSON(window.ApiClient.getUrl("Library/MediaFolders",{IsHidden:!1})),t=window.ApiClient.getJSON(window.ApiClient.getUrl("Channels"));Promise.all([n,t]).then((function(e){x(e[0].Items),k(e[1].Items),s.ZP.hide()})).catch((function(e){console.error("[usernew] failed to load data",e)}))}else console.error("Unexpected null reference")}),[k,x]);return(0,c.useEffect)((function(){var e=C.current;e?(A(),e.querySelector(".chkEnableAllChannels").addEventListener("change",(function(){var n=e.querySelector(".channelAccessListContainer");this.checked?n.classList.add("hide"):n.classList.remove("hide")})),e.querySelector(".chkEnableAllFolders").addEventListener("change",(function(){var n=e.querySelector(".folderAccessListContainer");this.checked?n.classList.add("hide"):n.classList.remove("hide")})),e.querySelector(".newUserProfileForm").addEventListener("submit",(function(n){var t;return s.ZP.show(),(t={}).Name=e.querySelector("#txtUsername").value,t.Password=e.querySelector("#txtPassword").value,window.ApiClient.createUser(t).then((function(n){if(!n.Id||!n.Policy)throw new Error("Unexpected null user id or policy");n.Policy.EnableAllFolders=e.querySelector(".chkEnableAllFolders").checked,n.Policy.EnabledFolders=[],n.Policy.EnableAllFolders||(n.Policy.EnabledFolders=Array.prototype.filter.call(e.querySelectorAll(".chkFolder"),(function(e){return e.checked})).map((function(e){return e.getAttribute("data-id")}))),n.Policy.EnableAllChannels=e.querySelector(".chkEnableAllChannels").checked,n.Policy.EnabledChannels=[],n.Policy.EnableAllChannels||(n.Policy.EnabledChannels=Array.prototype.filter.call(e.querySelectorAll(".chkChannel"),(function(e){return e.checked})).map((function(e){return e.getAttribute("data-id")}))),window.ApiClient.updateUserPolicy(n.Id,n.Policy).then((function(){l.default.navigate("/dashboard/users/profile?userId="+n.Id).catch((function(e){console.error("[usernew] failed to navigate to edit user page",e)}))})).catch((function(e){console.error("[usernew] failed to update user policy",e)}))}),(function(){(0,i.Z)(r.ZP.translate("ErrorDefault")),s.ZP.hide()})),n.preventDefault(),n.stopPropagation(),!1})),e.querySelector("#btnCancel").addEventListener("click",(function(){window.history.back()}))):console.error("Unexpected null reference")}),[A]),(0,a.jsx)(f.Z,{id:"newUserPage",className:"mainAnimatedPage type-interior",children:(0,a.jsxs)("div",{ref:C,className:"content-primary",children:[(0,a.jsx)("div",{className:"verticalSection",children:(0,a.jsx)(o.Z,{title:r.ZP.translate("HeaderAddUser"),url:"https://jellyfin.org/docs/general/server/users/"})}),(0,a.jsxs)("form",{className:"newUserProfileForm",children:[(0,a.jsx)("div",{className:"inputContainer",children:(0,a.jsx)(d.Z,{type:"text",id:"txtUsername",label:"LabelName",options:"required"})}),(0,a.jsx)("div",{className:"inputContainer",children:(0,a.jsx)(d.Z,{type:"password",id:"txtPassword",label:"LabelPassword"})}),(0,a.jsx)(h.Z,{containerClassName:"folderAccessContainer",headerTitle:"HeaderLibraryAccess",checkBoxClassName:"chkEnableAllFolders",checkBoxTitle:"OptionEnableAccessToAllLibraries",listContainerClassName:"folderAccessListContainer",accessClassName:"folderAccess",listTitle:"HeaderLibraries",description:"LibraryAccessHelp",children:b.map((function(e){return(0,a.jsx)(m.Z,{className:"chkFolder",itemId:e.Id,itemName:e.Name},e.Id)}))}),(0,a.jsx)(h.Z,{containerClassName:"channelAccessContainer verticalSection-extrabottompadding hide",headerTitle:"HeaderChannelAccess",checkBoxClassName:"chkEnableAllChannels",checkBoxTitle:"OptionEnableAccessToAllChannels",listContainerClassName:"channelAccessListContainer",accessClassName:"channelAccess",listTitle:"Channels",description:"ChannelAccessHelp",children:n.map((function(e){return(0,a.jsx)(m.Z,{className:"chkChannel",itemId:e.Id,itemName:e.Name},e.Id)}))}),(0,a.jsxs)("div",{children:[(0,a.jsx)(u.Z,{type:"submit",className:"raised button-submit block",title:"Save"}),(0,a.jsx)(u.Z,{type:"button",id:"btnCancel",className:"raised button-cancel block",title:"ButtonCancel"})]})]})]})})}},87143:function(e,n,t){var a=t(24246),c=t(27378),l=t(93110);n.Z=function(e){var n=e.children,t=e.id,r=e.className,s=void 0===r?"":r,i=e.title,o=e.isBackButtonEnabled,d=void 0===o||o,u=e.isMenuButtonEnabled,h=void 0!==u&&u,m=e.isNowPlayingBarEnabled,f=void 0===m||m,p=e.isThemeMediaSupported,v=void 0!==p&&p,b=e.backDropType,y=(0,c.useRef)(null);return(0,c.useEffect)((function(){l.Z.hideView()}),[]),(0,c.useEffect)((function(){var e,n,t,a,c={bubbles:!0,cancelable:!1,detail:{isRestored:!1,options:{enableMediaControl:f,supportsThemeMedia:v}}};null===(e=y.current)||void 0===e||e.dispatchEvent(new CustomEvent("viewbeforeshow",c)),null===(n=y.current)||void 0===n||n.dispatchEvent(new CustomEvent("pagebeforeshow",c)),null===(t=y.current)||void 0===t||t.dispatchEvent(new CustomEvent("viewshow",c)),null===(a=y.current)||void 0===a||a.dispatchEvent(new CustomEvent("pageshow",c))}),[y,f,v]),(0,a.jsx)("div",{ref:y,id:t,"data-role":"page",className:"page ".concat(s),"data-title":i,"data-backbutton":d,"data-menubutton":h,"data-backdroptype":b,children:n})}},85897:function(e,n,t){var a=t(24246),c=(t(27378),t(94994)),l=t(91904);n.Z=function(e){var n=e.containerClassName,t=e.headerTitle,r=e.checkBoxClassName,s=e.checkBoxTitle,i=e.listContainerClassName,o=e.accessClassName,d=e.listTitle,u=e.description,h=e.children;return(0,a.jsxs)("div",{className:n,children:[(0,a.jsx)("h2",{children:c.ZP.translate(t)}),(0,a.jsx)(l.Z,{labelClassName:"checkboxContainer",className:r,title:s}),(0,a.jsxs)("div",{className:i,children:[(0,a.jsxs)("div",{className:o,children:[(0,a.jsx)("h3",{className:"checkboxListLabel",children:c.ZP.translate(d)}),(0,a.jsx)("div",{className:"checkboxList paperList",style:{padding:".5em 1em"},children:h})]}),(0,a.jsx)("div",{className:"fieldDescription",children:c.ZP.translate(u)})]})]})}},5712:function(e,n,t){var a=t(24246),c=(t(27378),t(94994)),l=function(e){var n=e.type,t=e.id,a=e.className,c=e.title,l=e.leftIcon,r=e.rightIcon;return{__html:'<button\n        is="emby-button"\n        type="'.concat(n,'"\n        ').concat(t,'\n        class="').concat(a,'"\n        >\n        ').concat(l,"\n        <span>").concat(c,"</span>\n        ").concat(r,"\n    </button>")}};n.Z=function(e){var n=e.type,t=e.id,r=e.className,s=e.title,i=e.leftIcon,o=e.rightIcon;return(0,a.jsx)("div",{dangerouslySetInnerHTML:l({type:n,id:t?'id="'.concat(t,'"'):"",className:r,title:c.ZP.translate(s),leftIcon:i?'<span class="material-icons '.concat(i,'" aria-hidden="true"></span>'):"",rightIcon:o?'<span class="material-icons '.concat(o,'" aria-hidden="true"></span>'):""})})}},91904:function(e,n,t){var a=t(24246),c=t(65009),l=t.n(c),r=(t(27378),t(94994)),s=function(e){var n=e.labelClassName,t=e.className,a=e.id,c=e.dataFilter,l=e.dataItemType,r=e.dataId,s=e.checkedAttribute,i=e.renderContent;return{__html:"<label ".concat(n,'>\n        <input\n            is="emby-checkbox"\n            type="checkbox"\n            class="').concat(t,'"\n            ').concat(a,"\n            ").concat(c,"\n            ").concat(l,"\n            ").concat(r,"\n            ").concat(s,"\n        />\n        ").concat(i,"\n    </label>")}};n.Z=function(e){var n=e.labelClassName,t=e.className,c=e.elementId,i=e.dataFilter,o=e.itemType,d=e.itemId,u=e.itemAppName,h=e.itemCheckedAttribute,m=e.itemName,f=e.title,p=u?"- ".concat(u):"",v=m?"<span>".concat(l()(m||"")," ").concat(p,"</span>"):"<span>".concat(r.ZP.translate(f),"</span>");return(0,a.jsx)("div",{className:"sectioncheckbox",dangerouslySetInnerHTML:s({labelClassName:n?"class='".concat(n,"'"):"",className:t,id:c?"id='".concat(c,"'"):"",dataFilter:i?"data-filter='".concat(i,"'"):"",dataItemType:o?"data-itemtype='".concat(o,"'"):"",dataId:d?"data-id='".concat(d,"'"):"",checkedAttribute:h||"",renderContent:v})})}},56285:function(e,n,t){var a=t(24246),c=(t(27378),t(94994)),l=function(e){var n=e.is,t=e.id,a=e.className,c=e.title,l=e.icon,r=e.dataIndex,s=e.dataTag,i=e.dataProfileid;return{__html:'<button\n        is="'.concat(n,'"\n        type="button"\n        ').concat(t,'\n        class="').concat(a,'"\n        ').concat(c,"\n        ").concat(r,"\n        ").concat(s,"\n        ").concat(i,'\n    >\n        <span class="material-icons ').concat(l,'" aria-hidden="true"></span>\n    </button>')}};n.Z=function(e){var n=e.is,t=e.id,r=e.className,s=e.title,i=e.icon,o=e.dataIndex,d=e.dataTag,u=e.dataProfileid;return(0,a.jsx)("div",{dangerouslySetInnerHTML:l({is:n,id:t?'id="'.concat(t,'"'):"",className:r,title:s?'title="'.concat(c.ZP.translate(s),'"'):"",icon:i,dataIndex:o?'data-index="'.concat(o,'"'):"",dataTag:d?'data-tag="'.concat(d,'"'):"",dataProfileid:u?'data-profileid="'.concat(u,'"'):""})})}},503:function(e,n,t){var a=t(24246),c=t(27378),l=t(94994);n.Z=function(e){var n=e.containerClassName,t=e.initialValue,r=e.onChange,s=void 0===r?function(){}:r,i=e.type,o=e.id,d=e.label,u=e.options,h=void 0===u?"":u,m=(0,c.useRef)(null),f=(0,c.useMemo)((function(){return function(e){var n=e.id,t=e.label,a=e.initialValue,c=e.options;return{__html:'<input\n        is="emby-input"\n        type="'.concat(e.type,'"\n        id="').concat(n,'"\n        label="').concat(t,'"\n        value="').concat(a,'"\n        ').concat(c,"\n    />")}}({type:i,id:o,label:l.ZP.translate(d),initialValue:t,options:h})}),[]),p=(0,c.useCallback)((function(e){s(e.target.value)}),[s]);return(0,c.useEffect)((function(){var e,n=null===(e=null==m?void 0:m.current)||void 0===e?void 0:e.querySelector("input");return null==n||n.addEventListener("input",p),function(){null==n||n.removeEventListener("input",p)}}),[m,p]),(0,a.jsx)("div",{ref:m,className:n,dangerouslySetInnerHTML:f})}},87926:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(24246),c=(t(27378),t(56285)),l=t(94994),r=function(e){var n=e.className,t=e.title,a=e.href;return{__html:'<a\n        is="emby-linkbutton"\n        rel="noopener noreferrer"\n        class="'.concat(n,'"\n        target="_blank"\n        href="').concat(a,'"\n        >\n        ').concat(t,"\n    </a>")}},s=function(e){var n=e.className,t=e.title,c=e.url;return(0,a.jsx)("div",{dangerouslySetInnerHTML:r({className:n,title:l.ZP.translate(t),href:c})})},i=function(e){var n=e.SectionClassName,t=e.title,l=e.isBtnVisible,r=void 0!==l&&l,i=e.btnId,o=e.btnClassName,d=e.btnTitle,u=e.btnIcon,h=e.isLinkVisible,m=void 0===h||h,f=e.url;return(0,a.jsxs)("div",{className:"".concat(n," sectionTitleContainer flex align-items-center"),children:[(0,a.jsx)("h2",{className:"sectionTitle",children:t}),r&&(0,a.jsx)(c.Z,{is:"emby-button",id:i,className:o,title:d,icon:u}),m&&(0,a.jsx)(s,{className:"raised button-alt headerHelpButton",title:"Help",url:f})]})}}}]);