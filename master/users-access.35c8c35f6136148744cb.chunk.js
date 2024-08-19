"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[97636,96084,40367],{33283:function(e,n,a){a.r(n);var t=a(62540),c=a(63696),r=a(9055),s=a(56869),l=a(73233),i=a(5898),o=a(50764),d=a(87159),u=a(76165),h=a(85757),v=a(37777),m=a(14948),b=a(7397),f=function(e,n){var a="function"==typeof Symbol&&e[Symbol.iterator];if(!a)return e;var t,c,r=a.call(e),s=[];try{for(;(void 0===n||n-- >0)&&!(t=r.next()).done;)s.push(t.value)}catch(e){c={error:e}}finally{try{t&&!t.done&&(a=r.return)&&a.call(r)}finally{if(c)throw c.error}}return s},y=function(e){var n="function"==typeof Symbol&&Symbol.iterator,a=n&&e[n],t=0;if(a)return a.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")};n.default=function(){var e=f((0,r.ok)(),1)[0].get("userId"),n=f((0,c.useState)(""),2),a=n[0],A=n[1],p=f((0,c.useState)([]),2),k=p[0],C=p[1],g=f((0,c.useState)([]),2),N=g[0],x=g[1],I=f((0,c.useState)([]),2),S=I[0],E=I[1],P=(0,c.useRef)(null),w=function(e){var n=new Event("change",{bubbles:!1,cancelable:!0});e.dispatchEvent(n)},D=(0,c.useCallback)((function(e,n){var a,t,c,r,s,l,i=P.current;if(i){var o=[];try{for(var d=y(n),u=d.next();!u.done;u=d.next()){var h=u.value,v=(null===(c=e.Policy)||void 0===c?void 0:c.EnableAllFolders)||-1!=(null===(s=null===(r=e.Policy)||void 0===r?void 0:r.EnabledFolders)||void 0===s?void 0:s.indexOf(h.Id||""))?' checked="checked"':"";o.push({Id:h.Id,Name:h.Name,checkedAttribute:v})}}catch(e){a={error:e}}finally{try{u&&!u.done&&(t=d.return)&&t.call(d)}finally{if(a)throw a.error}}x(o);var m=i.querySelector(".chkEnableAllFolders");m.checked=Boolean(null===(l=e.Policy)||void 0===l?void 0:l.EnableAllFolders),w(m)}else console.error("[userlibraryaccess] Unexpected null page reference")}),[]),T=(0,c.useCallback)((function(e,n){var a,t,c,r,s,l,i=P.current;if(i){var o=[];try{for(var d=y(n),u=d.next();!u.done;u=d.next()){var h=u.value,v=(null===(c=e.Policy)||void 0===c?void 0:c.EnableAllChannels)||-1!=(null===(s=null===(r=e.Policy)||void 0===r?void 0:r.EnabledChannels)||void 0===s?void 0:s.indexOf(h.Id||""))?' checked="checked"':"";o.push({Id:h.Id,Name:h.Name,checkedAttribute:v})}}catch(e){a={error:e}}finally{try{u&&!u.done&&(t=d.return)&&t.call(d)}finally{if(a)throw a.error}}C(o),n.length?i.querySelector(".channelAccessContainer").classList.remove("hide"):i.querySelector(".channelAccessContainer").classList.add("hide");var m=i.querySelector(".chkEnableAllChannels");m.checked=Boolean(null===(l=e.Policy)||void 0===l?void 0:l.EnableAllChannels),w(m)}else console.error("[userlibraryaccess] Unexpected null page reference")}),[]),L=(0,c.useCallback)((function(e,n){var a,t,c,r,s,l,i,o=P.current;if(o){var d=[];try{for(var u=y(n),h=u.next();!h.done;h=u.next()){var v=h.value,m=(null===(c=e.Policy)||void 0===c?void 0:c.EnableAllDevices)||-1!=(null===(s=null===(r=e.Policy)||void 0===r?void 0:r.EnabledDevices)||void 0===s?void 0:s.indexOf(v.Id||""))?' checked="checked"':"";d.push({Id:v.Id,Name:v.Name,AppName:v.AppName,checkedAttribute:m})}}catch(e){a={error:e}}finally{try{h&&!h.done&&(t=u.return)&&t.call(u)}finally{if(a)throw a.error}}E(d);var b=o.querySelector(".chkEnableAllDevices");b.checked=Boolean(null===(l=e.Policy)||void 0===l?void 0:l.EnableAllDevices),w(b),(null===(i=e.Policy)||void 0===i?void 0:i.IsAdministrator)?o.querySelector(".deviceAccessContainer").classList.add("hide"):o.querySelector(".deviceAccessContainer").classList.remove("hide")}else console.error("[userlibraryaccess] Unexpected null page reference")}),[]),j=(0,c.useCallback)((function(e,n,a,t){A(e.Name||""),l.default.setTitle(e.Name),T(e,a),D(e,n),L(e,t),s.Ay.hide()}),[T,L,D]),F=(0,c.useCallback)((function(){s.Ay.show();var n=e?window.ApiClient.getUser(e):Promise.resolve({Configuration:{}}),a=window.ApiClient.getJSON(window.ApiClient.getUrl("Library/MediaFolders",{IsHidden:!1})),t=window.ApiClient.getJSON(window.ApiClient.getUrl("Channels")),c=window.ApiClient.getJSON(window.ApiClient.getUrl("Devices"));Promise.all([n,a,t,c]).then((function(e){j(e[0],e[1].Items,e[2].Items,e[3].Items)})).catch((function(e){console.error("[userlibraryaccess] failed to load data",e)}))}),[j,e]);return(0,c.useEffect)((function(){var n=P.current;if(n){F();var a=function(){s.Ay.hide(),(0,o.A)(i.Ay.translate("SettingsSaved"))};n.querySelector(".chkEnableAllDevices").addEventListener("change",(function(){n.querySelector(".deviceAccessListContainer").classList.toggle("hide",this.checked)})),n.querySelector(".chkEnableAllChannels").addEventListener("change",(function(){n.querySelector(".channelAccessListContainer").classList.toggle("hide",this.checked)})),n.querySelector(".chkEnableAllFolders").addEventListener("change",(function(){n.querySelector(".folderAccessListContainer").classList.toggle("hide",this.checked)})),n.querySelector(".userLibraryAccessForm").addEventListener("submit",(function(t){if(e)return s.Ay.show(),window.ApiClient.getUser(e).then((function(e){!function(e){if(!e.Id)throw new Error("Unexpected null user.Id");if(!e.Policy)throw new Error("Unexpected null user.Policy");e.Policy.EnableAllFolders=n.querySelector(".chkEnableAllFolders").checked,e.Policy.EnabledFolders=e.Policy.EnableAllFolders?[]:Array.prototype.filter.call(n.querySelectorAll(".chkFolder"),(function(e){return e.checked})).map((function(e){return e.getAttribute("data-id")})),e.Policy.EnableAllChannels=n.querySelector(".chkEnableAllChannels").checked,e.Policy.EnabledChannels=e.Policy.EnableAllChannels?[]:Array.prototype.filter.call(n.querySelectorAll(".chkChannel"),(function(e){return e.checked})).map((function(e){return e.getAttribute("data-id")})),e.Policy.EnableAllDevices=n.querySelector(".chkEnableAllDevices").checked,e.Policy.EnabledDevices=e.Policy.EnableAllDevices?[]:Array.prototype.filter.call(n.querySelectorAll(".chkDevice"),(function(e){return e.checked})).map((function(e){return e.getAttribute("data-id")})),e.Policy.BlockedChannels=null,e.Policy.BlockedMediaFolders=null,window.ApiClient.updateUserPolicy(e.Id,e.Policy).then((function(){a()})).catch((function(e){console.error("[userlibraryaccess] failed to update user policy",e)}))}(e)})).catch((function(e){console.error("[userlibraryaccess] failed to fetch user",e)})),t.preventDefault(),t.stopPropagation(),!1;console.error("[userlibraryaccess] missing user id")}))}else console.error("[userlibraryaccess] Unexpected null page reference")}),[F]),(0,t.jsx)(b.A,{id:"userLibraryAccessPage",className:"mainAnimatedPage type-interior",children:(0,t.jsxs)("div",{ref:P,className:"content-primary",children:[(0,t.jsx)("div",{className:"verticalSection",children:(0,t.jsx)(h.A,{title:a,url:"https://jellyfin.org/docs/general/server/users/"})}),(0,t.jsx)(d.A,{activeTab:"userlibraryaccess"}),(0,t.jsxs)("form",{className:"userLibraryAccessForm",children:[(0,t.jsx)(v.A,{containerClassName:"folderAccessContainer",headerTitle:"HeaderLibraryAccess",checkBoxClassName:"chkEnableAllFolders",checkBoxTitle:"OptionEnableAccessToAllLibraries",listContainerClassName:"folderAccessListContainer",accessClassName:"folderAccess",listTitle:"HeaderLibraries",description:"LibraryAccessHelp",children:N.map((function(e){return(0,t.jsx)(m.A,{className:"chkFolder",itemId:e.Id,itemName:e.Name,itemCheckedAttribute:e.checkedAttribute},e.Id)}))}),(0,t.jsx)(v.A,{containerClassName:"channelAccessContainer hide",headerTitle:"HeaderChannelAccess",checkBoxClassName:"chkEnableAllChannels",checkBoxTitle:"OptionEnableAccessToAllChannels",listContainerClassName:"channelAccessListContainer",accessClassName:"channelAccess",listTitle:"Channels",description:"ChannelAccessHelp",children:k.map((function(e){return(0,t.jsx)(m.A,{className:"chkChannel",itemId:e.Id,itemName:e.Name,itemCheckedAttribute:e.checkedAttribute},e.Id)}))}),(0,t.jsx)(v.A,{containerClassName:"deviceAccessContainer hide",headerTitle:"HeaderDeviceAccess",checkBoxClassName:"chkEnableAllDevices",checkBoxTitle:"OptionEnableAccessFromAllDevices",listContainerClassName:"deviceAccessListContainer",accessClassName:"deviceAccess",listTitle:"HeaderDevices",description:"DeviceAccessHelp",children:S.map((function(e){return(0,t.jsx)(m.A,{className:"chkDevice",itemId:e.Id,itemName:e.Name,itemAppName:e.AppName,itemCheckedAttribute:e.checkedAttribute},e.Id)}))}),(0,t.jsx)("br",{}),(0,t.jsx)("div",{children:(0,t.jsx)(u.A,{type:"submit",className:"raised button-submit block",title:"Save"})})]})]})})}},37777:function(e,n,a){var t=a(62540),c=(a(63696),a(5898)),r=a(14948);n.A=function(e){var n=e.containerClassName,a=e.headerTitle,s=e.checkBoxClassName,l=e.checkBoxTitle,i=e.listContainerClassName,o=e.accessClassName,d=e.listTitle,u=e.description,h=e.children;return(0,t.jsxs)("div",{className:n,children:[(0,t.jsx)("h2",{children:c.Ay.translate(a)}),(0,t.jsx)(r.A,{labelClassName:"checkboxContainer",className:s,title:l}),(0,t.jsxs)("div",{className:i,children:[(0,t.jsxs)("div",{className:o,children:[(0,t.jsx)("h3",{className:"checkboxListLabel",children:c.Ay.translate(d)}),(0,t.jsx)("div",{className:"checkboxList paperList",style:{padding:".5em 1em"},children:h})]}),(0,t.jsx)("div",{className:"fieldDescription",children:c.Ay.translate(u)})]})]})}},87159:function(e,n,a){var t=a(62540),c=(a(63696),a(5898)),r=function(e){return{__html:'<a href="#"\n        is="emby-linkbutton"\n        data-role="button"\n        class="'.concat("useredit"===e?"ui-btn-active":"",'"\n        onclick="Dashboard.navigate(\'/dashboard/users/profile\', true);">\n        ').concat(c.Ay.translate("Profile"),'\n    </a>\n    <a href="#"\n        is="emby-linkbutton"\n        data-role="button"\n        class="').concat("userlibraryaccess"===e?"ui-btn-active":"",'"\n        onclick="Dashboard.navigate(\'/dashboard/users/access\', true);">\n        ').concat(c.Ay.translate("TabAccess"),'\n    </a>\n    <a href="#"\n        is="emby-linkbutton"\n        data-role="button"\n        class="').concat("userparentalcontrol"===e?"ui-btn-active":"",'"\n        onclick="Dashboard.navigate(\'/dashboard/users/parentalcontrol\', true);">\n        ').concat(c.Ay.translate("TabParentalControl"),'\n    </a>\n    <a href="#"\n        is="emby-linkbutton"\n        data-role="button"\n        class="').concat("userpassword"===e?"ui-btn-active":"",'"\n        onclick="Dashboard.navigate(\'/dashboard/users/password\', true);">\n        ').concat(c.Ay.translate("HeaderPassword"),"\n    </a>")}};n.A=function(e){var n=e.activeTab;return(0,t.jsx)("div",{"data-role":"controlgroup","data-type":"horizontal",className:"localnav",dangerouslySetInnerHTML:r(n)})}},76165:function(e,n,a){var t=a(62540),c=(a(63696),a(5898)),r=function(e){var n=e.type,a=e.id,t=e.className,c=e.title,r=e.leftIcon,s=e.rightIcon;return{__html:'<button\n        is="emby-button"\n        type="'.concat(n,'"\n        ').concat(a,'\n        class="').concat(t,'"\n        >\n        ').concat(r,"\n        <span>").concat(c,"</span>\n        ").concat(s,"\n    </button>")}};n.A=function(e){var n=e.type,a=e.id,s=e.className,l=e.title,i=e.leftIcon,o=e.rightIcon;return(0,t.jsx)("div",{dangerouslySetInnerHTML:r({type:n,id:a?'id="'.concat(a,'"'):"",className:s,title:c.Ay.translate(l),leftIcon:i?'<span class="material-icons '.concat(i,'" aria-hidden="true"></span>'):"",rightIcon:o?'<span class="material-icons '.concat(o,'" aria-hidden="true"></span>'):""})})}},14948:function(e,n,a){var t=a(62540),c=a(22696),r=a.n(c),s=(a(63696),a(5898)),l=function(e){var n=e.labelClassName,a=e.className,t=e.id,c=e.dataFilter,r=e.dataItemType,s=e.dataId,l=e.checkedAttribute,i=e.renderContent;return{__html:"<label ".concat(n,'>\n        <input\n            is="emby-checkbox"\n            type="checkbox"\n            class="').concat(a,'"\n            ').concat(t,"\n            ").concat(c,"\n            ").concat(r,"\n            ").concat(s,"\n            ").concat(l,"\n        />\n        ").concat(i,"\n    </label>")}};n.A=function(e){var n=e.labelClassName,a=e.className,c=e.elementId,i=e.dataFilter,o=e.itemType,d=e.itemId,u=e.itemAppName,h=e.itemCheckedAttribute,v=e.itemName,m=e.title,b=u?"- ".concat(u):"",f=v?"<span>".concat(r()(v||"")," ").concat(b,"</span>"):"<span>".concat(s.Ay.translate(m),"</span>");return(0,t.jsx)("div",{className:"sectioncheckbox",dangerouslySetInnerHTML:l({labelClassName:n?"class='".concat(n,"'"):"",className:a,id:c?"id='".concat(c,"'"):"",dataFilter:i?"data-filter='".concat(i,"'"):"",dataItemType:o?"data-itemtype='".concat(o,"'"):"",dataId:d?"data-id='".concat(d,"'"):"",checkedAttribute:h||"",renderContent:f})})}},96268:function(e,n,a){var t=a(62540),c=(a(63696),a(5898)),r=function(e){var n=e.is,a=e.id,t=e.className,c=e.title,r=e.icon,s=e.dataIndex,l=e.dataTag,i=e.dataProfileid;return{__html:'<button\n        is="'.concat(n,'"\n        type="button"\n        ').concat(a,'\n        class="').concat(t,'"\n        ').concat(c,"\n        ").concat(s,"\n        ").concat(l,"\n        ").concat(i,'\n    >\n        <span class="material-icons ').concat(r,'" aria-hidden="true"></span>\n    </button>')}};n.A=function(e){var n=e.is,a=e.id,s=e.className,l=e.title,i=e.icon,o=e.dataIndex,d=e.dataTag,u=e.dataProfileid;return(0,t.jsx)("div",{dangerouslySetInnerHTML:r({is:n,id:a?'id="'.concat(a,'"'):"",className:s,title:l?'title="'.concat(c.Ay.translate(l),'"'):"",icon:i,dataIndex:o?'data-index="'.concat(o,'"'):"",dataTag:d?'data-tag="'.concat(d,'"'):"",dataProfileid:u?'data-profileid="'.concat(u,'"'):""})})}},85757:function(e,n,a){a.d(n,{A:function(){return i}});var t=a(62540),c=(a(63696),a(96268)),r=a(5898),s=function(e){var n=e.className,a=e.title,t=e.href;return{__html:'<a\n        is="emby-linkbutton"\n        rel="noopener noreferrer"\n        class="'.concat(n,'"\n        target="_blank"\n        href="').concat(t,'"\n        >\n        ').concat(a,"\n    </a>")}},l=function(e){var n=e.className,a=e.title,c=e.url;return(0,t.jsx)("div",{dangerouslySetInnerHTML:s({className:n,title:r.Ay.translate(a),href:c})})},i=function(e){var n=e.SectionClassName,a=e.title,r=e.isBtnVisible,s=void 0!==r&&r,i=e.btnId,o=e.btnClassName,d=e.btnTitle,u=e.btnIcon,h=e.isLinkVisible,v=void 0===h||h,m=e.url;return(0,t.jsxs)("div",{className:"".concat(n," sectionTitleContainer flex align-items-center"),children:[(0,t.jsx)("h2",{className:"sectionTitle",children:a}),s&&(0,t.jsx)(c.A,{is:"emby-button",id:i,className:o,title:d,icon:u}),v&&(0,t.jsx)(l,{className:"raised button-alt headerHelpButton",title:"Help",url:m})]})}},40782:function(e,n,a){var t=a(11444),c="assets/img/devices/";n.Ay={getDeviceIcon:function(e){var n;switch(e.AppName||e.Client){case"Samsung Smart TV":return c+"samsung.svg";case"Xbox One":return c+"xbox.svg";case"Sony PS4":return c+"playstation.svg";case"Kodi":case"Kodi JellyCon":return c+"kodi.svg";case"Jellyfin Android":case"AndroidTV":case"Android TV":return c+"android.svg";case"Jellyfin Mobile (iOS)":case"Jellyfin Mobile (iPadOS)":case"Jellyfin iOS":case"Infuse":return c+"apple.svg";case"Home Assistant":return c+"home-assistant.svg";case"Jellyfin Roku":return c+"roku.svg";case"Finamp":return c+"finamp.svg";case"Jellyfin Web":return function(e){switch(e){case"Opera":case"Opera TV":case"Opera Android":return c+"opera.svg";case"Chrome":case"Chrome Android":return c+"chrome.svg";case"Firefox":case"Firefox Android":return c+"firefox.svg";case"Safari":case"Safari iPad":case"Safari iPhone":return c+"safari.svg";case"Edge Chromium":case"Edge Chromium Android":case"Edge Chromium iPad":case"Edge Chromium iPhone":return c+"edgechromium.svg";case"Edge":return c+"edge.svg";case"Internet Explorer":return c+"msie.svg";default:return c+"html5.svg"}}(e.Name||e.DeviceName);default:if(null===(n=e.Capabilities)||void 0===n?void 0:n.IconUrl)try{return new URL(e.Capabilities.IconUrl).toString()}catch(n){console.error("[getDeviceIcon] device capabilities has invalid IconUrl",e,n)}return c+"other.svg"}},getLibraryIcon:function(e){switch(e){case"movies":return"video_library";case"music":return"library_music";case"photos":case"homevideos":return"photo_library";case"livetv":return"live_tv";case"tvshows":return"tv";case"trailers":return"local_movies";case"musicvideos":return"music_video";case"books":return"library_books";case"channels":return"videocam";case"playlists":return"view_list";default:return"folder"}},getItemTypeIcon:function(e){switch(e){case t.D.MusicAlbum:return"album";case t.D.MusicArtist:case t.D.Person:return"person";case t.D.Audio:return"audiotrack";case t.D.Movie:return"movie";case t.D.Episode:case t.D.Series:return"tv";case t.D.Program:return"live_tv";case t.D.Book:return"book";case t.D.Folder:return"folder";case t.D.BoxSet:return"collections";case t.D.Playlist:return"view_list";case t.D.Photo:return"photo";case t.D.PhotoAlbum:return"photo_album";default:return"folder"}}}}}]);