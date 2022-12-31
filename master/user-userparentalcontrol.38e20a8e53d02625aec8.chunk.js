"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[34829],{6055:function(e,t,n){var a=n(24246),r=n(27378),l=n(53424),c=function(){return c=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},c.apply(this,arguments)};t.Z=function(e){var t=e.children,n=e.id,i=e.className,o=void 0===i?"":i,s=e.title,u=e.isBackButtonEnabled,d=void 0===u||u,f=e.isMenuButtonEnabled,m=void 0!==f&&f,h=e.isNowPlayingBarEnabled,v=void 0===h||h,b=e.isThemeMediaSupported,p=void 0!==b&&b,y=e.backDropType,g=(0,r.useRef)(null);return(0,r.useEffect)((function(){l.Z.hideView()}),[]),(0,r.useEffect)((function(){var e,t,n,a,r={bubbles:!0,cancelable:!1,detail:{isRestored:!1,options:{enableMediaControl:v,supportsThemeMedia:p}}};null===(e=g.current)||void 0===e||e.dispatchEvent(new CustomEvent("viewbeforeshow",r)),null===(t=g.current)||void 0===t||t.dispatchEvent(new CustomEvent("pagebeforeshow",r)),null===(n=g.current)||void 0===n||n.dispatchEvent(new CustomEvent("viewshow",r)),null===(a=g.current)||void 0===a||a.dispatchEvent(new CustomEvent("pageshow",r))}),[g,v,p]),(0,a.jsx)("div",c({ref:g,id:n,"data-role":"page",className:"page ".concat(o),"data-title":s,"data-backbutton":d,"data-menubutton":m,"data-backdroptype":y},{children:t}))}},44243:function(e,t,n){var a=n(24246),r=n(94994),l=function(e){return{__html:'<a href="#"\n        is="emby-linkbutton"\n        data-role="button"\n        class="'.concat("useredit"===e?"ui-btn-active":"",'"\n        onclick="Dashboard.navigate(\'useredit.html\', true);">\n        ').concat(r.ZP.translate("Profile"),'\n    </a>\n    <a href="#"\n        is="emby-linkbutton"\n        data-role="button"\n        class="').concat("userlibraryaccess"===e?"ui-btn-active":"",'"\n        onclick="Dashboard.navigate(\'userlibraryaccess.html\', true);">\n        ').concat(r.ZP.translate("TabAccess"),'\n    </a>\n    <a href="#"\n        is="emby-linkbutton"\n        data-role="button"\n        class="').concat("userparentalcontrol"===e?"ui-btn-active":"",'"\n        onclick="Dashboard.navigate(\'userparentalcontrol.html\', true);">\n        ').concat(r.ZP.translate("TabParentalControl"),'\n    </a>\n    <a href="#"\n        is="emby-linkbutton"\n        data-role="button"\n        class="').concat("userpassword"===e?"ui-btn-active":"",'"\n        onclick="Dashboard.navigate(\'userpassword.html\', true);">\n        ').concat(r.ZP.translate("HeaderPassword"),"\n    </a>")}};t.Z=function(e){var t=e.activeTab;return(0,a.jsx)("div",{"data-role":"controlgroup","data-type":"horizontal",className:"localnav",dangerouslySetInnerHTML:l(t)})}},48606:function(e,t,n){var a=n(24246),r=n(94994),l=function(e){var t=e.type,n=e.id,a=e.className,r=e.title,l=e.leftIcon,c=e.rightIcon;return{__html:'<button\n        is="emby-button"\n        type="'.concat(t,'"\n        ').concat(n,'\n        class="').concat(a,'"\n        >\n        ').concat(l,"\n        <span>").concat(r,"</span>\n        ").concat(c,"\n    </button>")}};t.Z=function(e){var t=e.type,n=e.id,c=e.className,i=e.title,o=e.leftIcon,s=e.rightIcon;return(0,a.jsx)("div",{dangerouslySetInnerHTML:l({type:t,id:n?'id="'.concat(n,'"'):"",className:c,title:r.ZP.translate(i),leftIcon:o?'<span class="material-icons '.concat(o,'" aria-hidden="true"></span>'):"",rightIcon:s?'<span class="material-icons '.concat(s,'" aria-hidden="true"></span>'):""})})}},76197:function(e,t,n){var a=n(24246),r=n(65009),l=n.n(r),c=n(94994),i=function(e){var t=e.labelClassName,n=e.className,a=e.id,r=e.dataFilter,l=e.dataItemType,c=e.dataId,i=e.checkedAttribute,o=e.renderContent;return{__html:"<label ".concat(t,'>\n        <input\n            is="emby-checkbox"\n            type="checkbox"\n            class="').concat(n,'"\n            ').concat(a,"\n            ").concat(r,"\n            ").concat(l,"\n            ").concat(c,"\n            ").concat(i,"\n        />\n        ").concat(o,"\n    </label>")}};t.Z=function(e){var t=e.labelClassName,n=e.className,r=e.elementId,o=e.dataFilter,s=e.itemType,u=e.itemId,d=e.itemAppName,f=e.itemCheckedAttribute,m=e.itemName,h=e.title,v=d?"- ".concat(d):"",b=m?"<span>".concat(l()(m||"")," ").concat(v,"</span>"):"<span>".concat(c.ZP.translate(h),"</span>");return(0,a.jsx)("div",{className:"sectioncheckbox",dangerouslySetInnerHTML:i({labelClassName:t?"class='".concat(t,"'"):"",className:n,id:r?"id='".concat(r,"'"):"",dataFilter:o?"data-filter='".concat(o,"'"):"",dataItemType:s?"data-itemtype='".concat(s,"'"):"",dataId:u?"data-id='".concat(u,"'"):"",checkedAttribute:f||"",renderContent:b})})}},43771:function(e,t,n){var a=n(24246),r=n(94994),l=function(e){var t=e.is,n=e.id,a=e.className,r=e.title,l=e.icon,c=e.dataIndex,i=e.dataTag,o=e.dataProfileid;return{__html:'<button\n        is="'.concat(t,'"\n        type="button"\n        ').concat(n,'\n        class="').concat(a,'"\n        ').concat(r,"\n        ").concat(c,"\n        ").concat(i,"\n        ").concat(o,'\n    >\n        <span class="material-icons ').concat(l,'" aria-hidden="true"></span>\n    </button>')}};t.Z=function(e){var t=e.is,n=e.id,c=e.className,i=e.title,o=e.icon,s=e.dataIndex,u=e.dataTag,d=e.dataProfileid;return(0,a.jsx)("div",{dangerouslySetInnerHTML:l({is:t,id:n?'id="'.concat(n,'"'):"",className:c,title:i?'title="'.concat(r.ZP.translate(i),'"'):"",icon:o,dataIndex:s?'data-index="'.concat(s,'"'):"",dataTag:u?'data-tag="'.concat(u,'"'):"",dataProfileid:d?'data-profileid="'.concat(d,'"'):""})})}},51361:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(24246),r=n(43771),l=n(94994),c=function(e){var t=e.className,n=e.title,a=e.href;return{__html:'<a\n        is="emby-linkbutton"\n        rel="noopener noreferrer"\n        class="'.concat(t,'"\n        target="_blank"\n        href="').concat(a,'"\n        >\n        ').concat(n,"\n    </a>")}},i=function(e){var t=e.className,n=e.title,r=e.url;return(0,a.jsx)("div",{dangerouslySetInnerHTML:c({className:t,title:l.ZP.translate(n),href:r})})},o=function(){return o=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},o.apply(this,arguments)},s=function(e){var t=e.SectionClassName,n=e.title,l=e.isBtnVisible,c=void 0!==l&&l,s=e.btnId,u=e.btnClassName,d=e.btnTitle,f=e.btnIcon,m=e.isLinkVisible,h=void 0===m||m,v=e.url;return(0,a.jsxs)("div",o({className:"".concat(t," sectionTitleContainer flex align-items-center")},{children:[(0,a.jsx)("h2",o({className:"sectionTitle"},{children:n})),c&&(0,a.jsx)(r.Z,{is:"emby-button",id:s,className:u,title:d,icon:f}),h&&(0,a.jsx)(i,{className:"raised button-alt headerHelpButton",title:"Help",url:v})]}))}},6067:function(e,t,n){var a=n(24246),r=n(94994),l=function(e){var t=e.name,n=e.id,a=e.required,r=e.label,l=e.option;return{__html:'<select\n        is="emby-select"\n        '.concat(t,'\n        id="').concat(n,'"\n        ').concat(a,'\n        label="').concat(r,'"\n    >\n        ').concat(l,"\n    </select>")}};t.Z=function(e){var t=e.name,n=e.id,c=e.required,i=e.label,o=e.children;return(0,a.jsx)("div",{dangerouslySetInnerHTML:l({name:t?"name='".concat(t,"'"):"",id:n,required:c?"required='".concat(c,"'"):"",label:r.ZP.translate(i),option:o})})}},21716:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var a=n(24246),r=n(45013),l=n(27378),c=n(94994),i=n(71487),o=n(61693),s=n(43771),u=function(){return u=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},u.apply(this,arguments)};function d(e){void 0===e&&(e=0);var t=0,n=e%1;return n&&(t=Math.floor(60*n)),o.ZP.getDisplayTime(new Date(2e3,1,1,e,t,0,0))}var f=function(e){var t=e.index,n=e.DayOfWeek,r=e.StartHour,l=e.EndHour;return(0,a.jsxs)("div",u({className:"liSchedule listItem","data-day":n,"data-start":r,"data-end":l},{children:[(0,a.jsxs)("div",u({className:"listItemBody two-line"},{children:[(0,a.jsx)("h3",u({className:"listItemBodyText"},{children:c.ZP.translate(n)})),(0,a.jsx)("div",u({className:"listItemBodyText secondary"},{children:d(r)+" - "+d(l)}))]})),(0,a.jsx)(s.Z,{is:"paper-icon-button-light",className:"btnDelete listItemButton",title:"Delete",icon:"delete",dataIndex:t})]}))},m=function(){return m=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},m.apply(this,arguments)},h=function(e){var t=e.tag;return(0,a.jsx)("div",m({className:"paperList"},{children:(0,a.jsxs)("div",m({className:"listItem"},{children:[(0,a.jsx)("div",m({className:"listItemBody"},{children:(0,a.jsx)("h3",m({className:"listItemBodyText"},{children:t}))})),(0,a.jsx)(s.Z,{is:"paper-icon-button-light",className:"blockedTag btnDeleteTag listItemButton",title:"Delete",icon:"delete",dataTag:t})]}))}))},v=n(48606),b=n(51361),p=n(44243),y=n(28540),g=n(56663),x=n(85951),P=n(76197),k=n(65009),N=n.n(k),S=n(6067),j=n(6055),I=function(){return I=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},I.apply(this,arguments)},T=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var a,r,l=n.call(e),c=[];try{for(;(void 0===t||t-- >0)&&!(a=l.next()).done;)c.push(a.value)}catch(e){r={error:e}}finally{try{a&&!a.done&&(n=l.return)&&n.call(l)}finally{if(r)throw r.error}}return c},Z=function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],a=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&a>=e.length&&(e=void 0),{value:e&&e[a++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},w=function(){var e=T((0,l.useState)(""),2),t=e[0],o=e[1],s=T((0,l.useState)([]),2),u=s[0],d=s[1],m=T((0,l.useState)([]),2),k=m[0],w=m[1],C=T((0,l.useState)([]),2),A=C[0],B=C[1],E=T((0,l.useState)([]),2),L=E[0],H=E[1],M=(0,l.useRef)(null),O=(0,l.useCallback)((function(e){for(var t,n=[],a=0,r=e.length;a<r;a++){if(t=e[a],n.length){var l=n[n.length-1];if(l.Value===t.Value){l.Name+="/"+t.Name;continue}}n.push({Name:t.Name,Value:t.Value})}d(n)}),[]),D=(0,l.useCallback)((function(e){var t,n,a=M.current;if(a){var r=[{name:c.ZP.translate("Books"),value:"Book"},{name:c.ZP.translate("Channels"),value:"ChannelContent"},{name:c.ZP.translate("LiveTV"),value:"LiveTvChannel"},{name:c.ZP.translate("Movies"),value:"Movie"},{name:c.ZP.translate("Music"),value:"Music"},{name:c.ZP.translate("Trailers"),value:"Trailer"},{name:c.ZP.translate("Shows"),value:"Series"}],l=[];try{for(var i=Z(r),o=i.next();!o.done;o=i.next()){var s=o.value,u=-1!=e.Policy.BlockUnratedItems.indexOf(s.value)?' checked="checked"':"";l.push({value:s.value,name:s.name,checkedAttribute:u})}}catch(e){t={error:e}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}w(l),a.querySelector(".blockUnratedItems").dispatchEvent(new CustomEvent("create"))}else console.error("Unexpected null reference")}),[]),q=(0,l.useCallback)((function(e){var t,n,a=M.current;if(a){H(e);var r=a.querySelector(".blockedTags"),l=function(t){t.addEventListener("click",(function(){var n=t.getAttribute("data-tag"),a=e.filter((function(e){return e!=n}));q(a)}))};try{for(var c=Z(r.querySelectorAll(".btnDeleteTag")),i=c.next();!i.done;i=c.next())l(i.value)}catch(e){t={error:e}}finally{try{i&&!i.done&&(n=c.return)&&n.call(c)}finally{if(t)throw t.error}}}else console.error("Unexpected null reference")}),[]),U=(0,l.useCallback)((function(e){var t,n,a=M.current;if(a){B(e);var r=a.querySelector(".accessScheduleList"),l=function(t){t.addEventListener("click",(function(){var n=parseInt(t.getAttribute("data-index")||"0",10);e.splice(n,1);var a=e.filter((function(e){return e!=n}));U(a)}))};try{for(var c=Z(r.querySelectorAll(".btnDelete")),i=c.next();!i.done;i=c.next())l(i.value)}catch(e){t={error:e}}finally{try{i&&!i.done&&(n=c.return)&&n.call(c)}finally{if(t)throw t.error}}}else console.error("Unexpected null reference")}),[]),V=(0,l.useCallback)((function(e,t){var n=M.current;if(n){o(e.Name),i.Z.setTitle(e.Name),D(e),q(e.Policy.BlockedTags),O(t);var a="";if(null!=e.Policy.MaxParentalRating)for(var r=0,l=t.length;r<l;r++){var c=t[r];e.Policy.MaxParentalRating>=c.Value&&(a=c.Value)}n.querySelector("#selectMaxParentalRating").value=a,e.Policy.IsAdministrator?n.querySelector(".accessScheduleSection").classList.add("hide"):n.querySelector(".accessScheduleSection").classList.remove("hide"),U(e.Policy.AccessSchedules||[]),y.ZP.hide()}else console.error("Unexpected null reference")}),[q,D,O,U]),R=(0,l.useCallback)((function(){y.ZP.show();var e=(0,x.a)("userId"),t=window.ApiClient.getUser(e),n=window.ApiClient.getParentalRatings();Promise.all([t,n]).then((function(e){V(e[0],e[1])}))}),[V]);return(0,l.useEffect)((function(){var e=M.current;if(e){R();var t=function(){return Array.prototype.map.call(e.querySelectorAll(".liSchedule"),(function(e){return{DayOfWeek:e.getAttribute("data-day"),StartHour:e.getAttribute("data-start"),EndHour:e.getAttribute("data-end")}}))},a=function(){return Array.prototype.map.call(e.querySelectorAll(".blockedTag"),(function(e){return e.getAttribute("data-tag")}))};e.querySelector("#btnAddSchedule").addEventListener("click",(function(){var e,a;e={Id:0,UserId:"",DayOfWeek:r.W.Sunday,StartHour:0,EndHour:0},a=-1,e=e||{},n.e(39592).then(n.bind(n,39592)).then((function(n){n.default.show({schedule:e}).then((function(e){var n=t();-1==a&&(a=n.length),n[a]=e,U(n)}))}))})),e.querySelector("#btnAddBlockedTag").addEventListener("click",(function(){n.e(23690).then(n.bind(n,23690)).then((function(e){(0,e.default)({label:c.ZP.translate("LabelTag")}).then((function(e){var t=a();-1==t.indexOf(e)&&(t.push(e),q(t))}))}))})),e.querySelector(".userParentalControlForm").addEventListener("submit",(function(n){y.ZP.show();var r=(0,x.a)("userId");return window.ApiClient.getUser(r).then((function(n){!function(n){if(!n.Id)throw new Error("Unexpected null user.Id");if(!n.Policy)throw new Error("Unexpected null user.Policy");var r=parseInt(e.querySelector("#selectMaxParentalRating").value,10);n.Policy.MaxParentalRating=Number.isNaN(r)?null:r,n.Policy.BlockUnratedItems=Array.prototype.filter.call(e.querySelectorAll(".chkUnratedItem"),(function(e){return e.checked})).map((function(e){return e.getAttribute("data-itemtype")})),n.Policy.AccessSchedules=t(),n.Policy.BlockedTags=a(),window.ApiClient.updateUserPolicy(n.Id,n.Policy).then((function(){y.ZP.hide(),(0,g.Z)(c.ZP.translate("SettingsSaved"))}))}(n)})),n.preventDefault(),n.stopPropagation(),!1}))}else console.error("Unexpected null reference")}),[q,R,U]),(0,a.jsx)(j.Z,I({id:"userParentalControlPage",className:"mainAnimatedPage type-interior"},{children:(0,a.jsxs)("div",I({ref:M,className:"content-primary"},{children:[(0,a.jsx)("div",I({className:"verticalSection"},{children:(0,a.jsx)(b.Z,{title:t,url:"https://jellyfin.org/docs/general/server/users/"})})),(0,a.jsx)(p.Z,{activeTab:"userparentalcontrol"}),(0,a.jsxs)("form",I({className:"userParentalControlForm"},{children:[(0,a.jsxs)("div",I({className:"selectContainer"},{children:[(0,a.jsx)(S.Z,I({id:"selectMaxParentalRating",label:"LabelMaxParentalRating"},{children:function(){var e,t,n="";n+="<option value=''></option>";try{for(var a=Z(u),r=a.next();!r.done;r=a.next()){var l=r.value;n+="<option value='".concat(l.Value,"'>").concat(N()(l.Name),"</option>")}}catch(t){e={error:t}}finally{try{r&&!r.done&&(t=a.return)&&t.call(a)}finally{if(e)throw e.error}}return n}()})),(0,a.jsx)("div",I({className:"fieldDescription"},{children:c.ZP.translate("MaxParentalRatingHelp")}))]})),(0,a.jsx)("div",{children:(0,a.jsxs)("div",I({className:"blockUnratedItems"},{children:[(0,a.jsx)("h3",I({className:"checkboxListLabel"},{children:c.ZP.translate("HeaderBlockItemsWithNoRating")})),(0,a.jsx)("div",I({className:"checkboxList paperList",style:{padding:".5em 1em"}},{children:k.map((function(e){return(0,a.jsx)(P.Z,{className:"chkUnratedItem",itemType:e.value,itemName:e.name,itemCheckedAttribute:e.checkedAttribute},e.value)}))}))]}))}),(0,a.jsx)("br",{}),(0,a.jsxs)("div",I({className:"verticalSection",style:{marginBottom:"2em"}},{children:[(0,a.jsx)(b.Z,{SectionClassName:"detailSectionHeader",title:c.ZP.translate("LabelBlockContentWithTags"),isBtnVisible:!0,btnId:"btnAddBlockedTag",btnClassName:"fab submit sectionTitleButton",btnTitle:"Add",btnIcon:"add",isLinkVisible:!1}),(0,a.jsx)("div",I({className:"blockedTags",style:{marginTop:".5em"}},{children:L.map((function(e){return(0,a.jsx)(h,{tag:e},e)}))}))]})),(0,a.jsxs)("div",I({className:"accessScheduleSection verticalSection",style:{marginBottom:"2em"}},{children:[(0,a.jsx)(b.Z,{title:c.ZP.translate("HeaderAccessSchedule"),isBtnVisible:!0,btnId:"btnAddSchedule",btnClassName:"fab submit sectionTitleButton",btnTitle:"Add",btnIcon:"add",isLinkVisible:!1}),(0,a.jsx)("p",{children:c.ZP.translate("HeaderAccessScheduleHelp")}),(0,a.jsx)("div",I({className:"accessScheduleList paperList"},{children:A.map((function(e,t){return(0,a.jsx)(f,{index:t,Id:e.Id,DayOfWeek:e.DayOfWeek,StartHour:e.StartHour,EndHour:e.EndHour},e.Id)}))}))]})),(0,a.jsx)("div",{children:(0,a.jsx)(v.Z,{type:"submit",className:"raised button-submit block",title:"Save"})})]}))]}))}))}}}]);