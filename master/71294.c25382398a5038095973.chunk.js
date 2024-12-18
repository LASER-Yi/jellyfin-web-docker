"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[71294],{11520:function(e,r,n){n.r(r),n.d(r,{Component:function(){return me}});var t=n(62540),a=n(81622),o=n(5271),i=n(96073),s=n(92218),l=n(71991),c=n(63696),u=n(87404),d=n(13258),f=n(78248),h=n(75785),p=n(64174),y=n(69410),b=n(62864),x=n(5898),A=n(93721),v=n(28626),j=n(49889),g=n(56639),m=n(23125),w=n(98526),P=n(9055),k=n(42538),S=n(44797),O=function(e,r){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var t,a,o=n.call(e),i=[];try{for(;(void 0===r||r-- >0)&&!(t=o.next()).done;)i.push(t.value)}catch(e){a={error:e}}finally{try{t&&!t.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return i},T=(0,m.A)((function(){return window.dispatchEvent(new Event("resize"))}),100),C=function(e){var r=e.isDrawerOpen,n=(0,c.useRef)(document),a=O((0,c.useState)(0),2),o=a[0],s=a[1],l=O((0,c.useState)(),2),u=l[0],d=l[1],f=(0,i.A)((function(e){return e.breakpoints.up("sm")})),h=(0,c.useCallback)((function(e,r,n,t){void 0===n&&(n=0),s(n),(0,w.A)(u,t)||d(t)}),[u]);return(0,c.useEffect)((function(){var e=n.current;return e&&S.A.on(e,k.B.SET_TABS,h),function(){e&&S.A.off(e,k.B.SET_TABS,h)}}),[h]),(0,c.useEffect)((function(){T()}),[r]),(null==u?void 0:u.length)?(0,t.jsx)(g.A,{value:o,sx:{width:"100%",flexShrink:{xs:0,lg:"unset"},order:{xs:100,lg:"unset"}},variant:f?"standard":"scrollable",centered:f,children:u.map((function(e,r){var n=e.href,a=e.name;return(0,t.jsx)(j.A,{label:a,"data-tab-index":"".concat(r),component:P.N_,to:n},"tab-".concat(a))}))}):null},I=n(59616),E=n(10041),D=n(89073),L=n(23849),H=n(94568),B=n(63774),M=n(17071),_=n(960),N=n(91480),q=n(32051),R=n(9902),F=n(59894),z=n(65641),G=n(2111),V=n(82535),U=n(91120),K=n(95858),Q=function(e,r){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var t,a,o=n.call(e),i=[];try{for(;(void 0===r||r-- >0)&&!(t=o.next()).done;)i.push(t.value)}catch(e){a={error:e}}finally{try{t&&!t.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return i},W=["/dashboard/libraries","/dashboard/libraries/display","/dashboard/libraries/metadata","/dashboard/libraries/nfo"],J=["/dashboard/playback/transcoding","/dashboard/playback/resume","/dashboard/playback/streaming","/dashboard/playback/trickplay"],$=function(){var e=(0,u.zy)(),r=Q((0,c.useState)(W.includes(e.pathname)),2),n=r[0],a=r[1],o=Q((0,c.useState)(J.includes(e.pathname)),2),i=o[0],s=o[1],l=(0,c.useCallback)((function(){a((function(e){return!e}))}),[]),d=(0,c.useCallback)((function(){s((function(e){return!e}))}),[]);return(0,t.jsxs)(E.A,{"aria-labelledby":"server-subheader",subheader:(0,t.jsx)(U.A,{component:"div",id:"server-subheader",children:x.Ay.translate("TabServer")}),children:[(0,t.jsx)(I.Ay,{disablePadding:!0,children:(0,t.jsxs)(K.A,{to:"/dashboard",children:[(0,t.jsx)(G.A,{children:(0,t.jsx)(L.A,{})}),(0,t.jsx)(V.A,{primary:x.Ay.translate("TabDashboard")})]})}),(0,t.jsx)(I.Ay,{disablePadding:!0,children:(0,t.jsxs)(K.A,{to:"/dashboard/settings",children:[(0,t.jsx)(G.A,{children:(0,t.jsx)(H.A,{})}),(0,t.jsx)(V.A,{primary:x.Ay.translate("General")})]})}),(0,t.jsxs)(K.A,{to:"/dashboard/branding",children:[(0,t.jsx)(G.A,{children:(0,t.jsx)(R.A,{})}),(0,t.jsx)(V.A,{primary:x.Ay.translate("HeaderBranding")})]}),(0,t.jsx)(I.Ay,{disablePadding:!0,children:(0,t.jsxs)(K.A,{to:"/dashboard/users",children:[(0,t.jsx)(G.A,{children:(0,t.jsx)(B.A,{})}),(0,t.jsx)(V.A,{primary:x.Ay.translate("HeaderUsers")})]})}),(0,t.jsx)(I.Ay,{disablePadding:!0,children:(0,t.jsxs)(z.A,{onClick:l,children:[(0,t.jsx)(G.A,{children:(0,t.jsx)(M.A,{})}),(0,t.jsx)(V.A,{primary:x.Ay.translate("HeaderLibraries")}),n?(0,t.jsx)(_.A,{}):(0,t.jsx)(N.A,{})]})}),(0,t.jsx)(F.A,{in:n,timeout:"auto",unmountOnExit:!0,children:(0,t.jsxs)(E.A,{component:"div",disablePadding:!0,children:[(0,t.jsx)(K.A,{to:"/dashboard/libraries",sx:{pl:4},children:(0,t.jsx)(V.A,{inset:!0,primary:x.Ay.translate("HeaderLibraries")})}),(0,t.jsx)(K.A,{to:"/dashboard/libraries/display",sx:{pl:4},children:(0,t.jsx)(V.A,{inset:!0,primary:x.Ay.translate("Display")})}),(0,t.jsx)(K.A,{to:"/dashboard/libraries/metadata",sx:{pl:4},children:(0,t.jsx)(V.A,{inset:!0,primary:x.Ay.translate("LabelMetadata")})}),(0,t.jsx)(K.A,{to:"/dashboard/libraries/nfo",sx:{pl:4},children:(0,t.jsx)(V.A,{inset:!0,primary:x.Ay.translate("TabNfoSettings")})})]})}),(0,t.jsx)(I.Ay,{disablePadding:!0,children:(0,t.jsxs)(z.A,{onClick:d,children:[(0,t.jsx)(G.A,{children:(0,t.jsx)(q.A,{})}),(0,t.jsx)(V.A,{primary:x.Ay.translate("TitlePlayback")}),i?(0,t.jsx)(_.A,{}):(0,t.jsx)(N.A,{})]})}),(0,t.jsx)(F.A,{in:i,timeout:"auto",unmountOnExit:!0,children:(0,t.jsxs)(E.A,{component:"div",disablePadding:!0,children:[(0,t.jsx)(K.A,{to:"/dashboard/playback/transcoding",sx:{pl:4},children:(0,t.jsx)(V.A,{inset:!0,primary:x.Ay.translate("Transcoding")})}),(0,t.jsx)(K.A,{to:"/dashboard/playback/resume",sx:{pl:4},children:(0,t.jsx)(V.A,{inset:!0,primary:x.Ay.translate("ButtonResume")})}),(0,t.jsx)(K.A,{to:"/dashboard/playback/streaming",sx:{pl:4},children:(0,t.jsx)(V.A,{inset:!0,primary:x.Ay.translate("TabStreaming")})}),(0,t.jsx)(K.A,{to:"/dashboard/playback/trickplay",sx:{pl:4},children:(0,t.jsx)(V.A,{inset:!0,primary:x.Ay.translate("Trickplay")})})]})})]})},X=n(34266),Y=n(95041),Z=function(){return(0,t.jsxs)(E.A,{"aria-labelledby":"devices-subheader",subheader:(0,t.jsx)(U.A,{component:"div",id:"devices-subheader",children:x.Ay.translate("HeaderDevices")}),children:[(0,t.jsx)(I.Ay,{disablePadding:!0,children:(0,t.jsxs)(K.A,{to:"/dashboard/devices",children:[(0,t.jsx)(G.A,{children:(0,t.jsx)(X.A,{})}),(0,t.jsx)(V.A,{primary:x.Ay.translate("HeaderDevices")})]})}),(0,t.jsx)(I.Ay,{disablePadding:!0,children:(0,t.jsxs)(K.A,{to:"/dashboard/activity",children:[(0,t.jsx)(G.A,{children:(0,t.jsx)(Y.A,{})}),(0,t.jsx)(V.A,{primary:x.Ay.translate("HeaderActivity")})]})})]})},ee=n(84917),re=n(56465),ne=function(){return(0,t.jsxs)(E.A,{"aria-labelledby":"livetv-subheader",subheader:(0,t.jsx)(U.A,{component:"div",id:"livetv-subheader",children:x.Ay.translate("LiveTV")}),children:[(0,t.jsx)(I.Ay,{disablePadding:!0,children:(0,t.jsxs)(K.A,{to:"/dashboard/livetv",children:[(0,t.jsx)(G.A,{children:(0,t.jsx)(ee.A,{})}),(0,t.jsx)(V.A,{primary:x.Ay.translate("LiveTV")})]})}),(0,t.jsx)(I.Ay,{disablePadding:!0,children:(0,t.jsxs)(K.A,{to:"/dashboard/recordings",children:[(0,t.jsx)(G.A,{children:(0,t.jsx)(re.A,{})}),(0,t.jsx)(V.A,{primary:x.Ay.translate("HeaderDVR")})]})})]})},te=n(37079),ae=n(36406),oe=n(15644),ie=n(14910),se=function(){return(0,t.jsxs)(E.A,{"aria-labelledby":"advanced-subheader",subheader:(0,t.jsx)(U.A,{component:"div",id:"advanced-subheader",children:x.Ay.translate("TabAdvanced")}),children:[(0,t.jsx)(I.Ay,{disablePadding:!0,children:(0,t.jsxs)(K.A,{to:"/dashboard/networking",children:[(0,t.jsx)(G.A,{children:(0,t.jsx)(ae.A,{})}),(0,t.jsx)(V.A,{primary:x.Ay.translate("TabNetworking")})]})}),(0,t.jsx)(I.Ay,{disablePadding:!0,children:(0,t.jsxs)(K.A,{to:"/dashboard/keys",children:[(0,t.jsx)(G.A,{children:(0,t.jsx)(ie.A,{})}),(0,t.jsx)(V.A,{primary:x.Ay.translate("HeaderApiKeys")})]})}),(0,t.jsx)(I.Ay,{disablePadding:!0,children:(0,t.jsxs)(K.A,{to:"/dashboard/logs",children:[(0,t.jsx)(G.A,{children:(0,t.jsx)(te.A,{})}),(0,t.jsx)(V.A,{primary:x.Ay.translate("TabLogs")})]})}),(0,t.jsx)(I.Ay,{disablePadding:!0,children:(0,t.jsxs)(K.A,{to:"/dashboard/tasks",children:[(0,t.jsx)(G.A,{children:(0,t.jsx)(oe.A,{})}),(0,t.jsx)(V.A,{primary:x.Ay.translate("TabScheduledTasks")})]})})]})},le=n(6048),ce=n(57941),ue=n(11904),de=n(89100),fe=n(85069),he=function(){var e=(0,fe.q)({enableInMainMenu:!0}),r=e.data,n=e.error;return(0,c.useEffect)((function(){n&&console.error("[PluginDrawerSection] unable to fetch plugin config pages",n)}),[n]),(0,t.jsxs)(E.A,{"aria-labelledby":"plugins-subheader",subheader:(0,t.jsx)(U.A,{component:"div",id:"plugins-subheader",children:x.Ay.translate("TabPlugins")}),children:[(0,t.jsxs)(K.A,{to:"/dashboard/plugins",includePaths:["/configurationpage"],excludePaths:null==r?void 0:r.map((function(e){return"/".concat(de.default.getPluginUrl(e.Name))})),children:[(0,t.jsx)(G.A,{children:(0,t.jsx)(le.A,{})}),(0,t.jsx)(V.A,{primary:x.Ay.translate("TabMyPlugins")})]}),(0,t.jsxs)(K.A,{to:"/dashboard/plugins/catalog",includePaths:["/dashboard/plugins/repositories"],children:[(0,t.jsx)(G.A,{children:(0,t.jsx)(ue.A,{})}),(0,t.jsx)(V.A,{primary:x.Ay.translate("TabCatalog")})]}),null==r?void 0:r.map((function(e){return(0,t.jsxs)(K.A,{to:"/".concat(de.default.getPluginUrl(e.Name)),children:[(0,t.jsx)(G.A,{children:(0,t.jsx)(ce.A,{})}),(0,t.jsx)(V.A,{primary:e.DisplayName})]},e.PluginId)}))]})},pe=function(e){var r=e.open,n=void 0!==r&&r,a=e.onClose,o=e.onOpen;return(0,t.jsxs)(p.A,{open:n,onClose:a,onOpen:o,children:[(0,t.jsx)(E.A,{disablePadding:!0,children:(0,t.jsx)(I.Ay,{disablePadding:!0,children:(0,t.jsx)(D.A,{})})}),(0,t.jsx)($,{}),(0,t.jsx)(Z,{}),(0,t.jsx)(ne,{}),(0,t.jsx)(he,{}),(0,t.jsx)(se,{})]})},ye=n(44166),be=n(34907),xe=n(20541),Ae=[{paths:["/dashboard/devices"],url:"https://jellyfin.org/docs/general/server/devices"},{paths:["/dashboard/libraries"],url:"https://jellyfin.org/docs/general/server/libraries"},{paths:["/dashboard/livetv","/dashboard/livetv/tuner","/dashboard/recordings"],url:"https://jellyfin.org/docs/general/server/live-tv/"},{paths:["/dashboard/livetv/guide"],url:"https://jellyfin.org/docs/general/server/live-tv/setup-guide#adding-guide-data"},{paths:["/dashboard/networking"],url:"https://jellyfin.org/docs/general/networking/"},{paths:["/dashboard/playback/transcoding"],url:"https://jellyfin.org/docs/general/server/transcoding"},{paths:["/dashboard/plugins","/dashboard/plugins/catalog"],url:"https://jellyfin.org/docs/general/server/plugins/"},{paths:["/dashboard/plugins/repositories"],url:"https://jellyfin.org/docs/general/server/plugins/#repositories"},{paths:["/dashboard/branding","/dashboard/settings"],url:"https://jellyfin.org/docs/general/server/settings"},{paths:["/dashboard/tasks"],url:"https://jellyfin.org/docs/general/server/tasks"},{paths:["/dashboard/users"],url:"https://jellyfin.org/docs/general/server/users/adding-managing-users"},{paths:["/dashboard/users/access","/dashboard/users/parentalcontrol","/dashboard/users/password","/dashboard/users/profile"],url:"https://jellyfin.org/docs/general/server/users/"}],ve=function(){return(0,t.jsx)(u.BV,{children:Ae.map((function(e){var r=e.paths,n=e.url;return r.map((function(e){return(0,t.jsx)(u.qh,{path:e,element:(0,t.jsx)(xe.A,{title:x.Ay.translate("Help"),children:(0,t.jsx)(be.A,{href:n,rel:"noopener noreferrer",target:"_blank",size:"large",color:"inherit",children:(0,t.jsx)(ye.A,{})})})},[n,e].join("-"))}))})).flat()})},je=n(7603),ge=[je.DASHBOARD_APP_PATHS.MetadataManager],me=function(){var e=function(e,r){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var t,a,o=n.call(e),i=[];try{for(;(void 0===r||r-- >0)&&!(t=o.next()).done;)i.push(t.value)}catch(e){a={error:e}}finally{try{t&&!t.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return i}((0,c.useState)(!1),2),r=e[0],n=e[1],j=(0,u.zy)(),g=(0,y.gf)().user,m=function(){var e=this,r=(0,v.Q)(),n=r.dateTimeLocale,t=r.language,a=function(e,r){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var t,a,o=n.call(e),i=[];try{for(;(void 0===r||r-- >0)&&!(t=o.next()).done;)i.push(t.value)}catch(e){a={error:e}}finally{try{t&&!t.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return i}((0,c.useState)(b.A),2),o=a[0],i=a[1],s=(0,c.useMemo)((function(){return(0,x.Tl)(t||(0,x.i5)())}),[t]),l=(0,c.useMemo)((function(){return n?(0,x.Tl)(n):s}),[n,s]);return(0,c.useEffect)((function(){var r,n,t,a;r=e,n=void 0,a=function(){var e,r;return function(e,r){var n,t,a,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]},i=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return i.next=s(0),i.throw=s(1),i.return=s(2),"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(l){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(o=0)),o;)try{if(n=1,t&&(a=2&s[0]?t.return:s[0]?t.throw||((a=t.return)&&a.call(t),0):t.next)&&!(a=a.call(t,s[1])).done)return a;switch(t=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,t=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){o.label=s[1];break}if(6===s[0]&&o.label<a[1]){o.label=a[1],a=s;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(s);break}a[2]&&o.ops.pop(),o.trys.pop();continue}s=r.call(e,o)}catch(e){s=[6,e],t=0}finally{n=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}}(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,(0,A.Fq)((0,A.QC)(l))];case 1:return e=n.sent(),i(e),[3,3];case 2:return r=n.sent(),console.warn("[useLocale] failed to fetch dateFns locale",r),[3,3];case 3:return[2]}}))},new((t=void 0)||(t=Promise))((function(e,o){function i(e){try{l(a.next(e))}catch(e){o(e)}}function s(e){try{l(a.throw(e))}catch(e){o(e)}}function l(r){var n;r.done?e(r.value):(n=r.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,s)}l((a=a.apply(r,n||[])).next())}))}),[l]),{locale:s,dateTimeLocale:l,dateFnsLocale:o}}().dateFnsLocale,w=(0,i.A)((function(e){return e.breakpoints.up("md")})),P=Boolean(g)&&!ge.some((function(e){return j.pathname.startsWith("/".concat(e))})),k=r&&P,S=(0,c.useCallback)((function(){n(!r)}),[r,n]);return(0,c.useEffect)((function(){return document.body.classList.add("dashboardDocument"),function(){document.body.classList.remove("dashboardDocument")}}),[]),(0,t.jsx)(s.$,{dateAdapter:l.h,adapterLocale:m,children:(0,t.jsxs)(o.A,{sx:{display:"flex"},children:[(0,t.jsxs)(c.StrictMode,{children:[(0,t.jsx)(h.A,{elevate:!1,children:(0,t.jsx)(a.A,{position:"fixed",sx:{width:{xs:"100%",md:P?"calc(100% - ".concat(p.d,"px)"):"100%"},ml:{xs:0,md:P?p.d:0}},children:(0,t.jsx)(f.A,{isDrawerAvailable:!w&&P,isDrawerOpen:k,onDrawerButtonClick:S,buttons:(0,t.jsx)(ve,{}),children:(0,t.jsx)(C,{isDrawerOpen:k})})})}),P&&(0,t.jsx)(pe,{open:k,onClose:S,onOpen:S})]}),(0,t.jsx)(o.A,{component:"main",sx:{width:"100%",flexGrow:1},children:(0,t.jsx)(d.A,{children:(0,t.jsx)(u.sv,{})})})]})})}},83565:function(e,r,n){var t;n.d(r,{k:function(){return t}}),function(e){e.ConfigurationPages="ConfigurationPages",e.PackageInfo="PackageInfo",e.Plugins="Plugins"}(t||(t={}))},85069:function(e,r,n){n.d(r,{q:function(){return c}});var t=n(39599),a=n(8280),o=n(61586),i=n(69410),s=n(83565),l=function(e,r){return(0,a.j)({queryKey:[s.k.ConfigurationPages,null==r?void 0:r.enableInMainMenu],queryFn:function(n){var a=n.signal;return function(e,r,n){return a=void 0,o=void 0,s=function(){return function(e,r){var n,t,a,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]},i=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return i.next=s(0),i.throw=s(1),i.return=s(2),"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(l){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(o=0)),o;)try{if(n=1,t&&(a=2&s[0]?t.return:s[0]?t.throw||((a=t.return)&&a.call(t),0):t.next)&&!(a=a.call(t,s[1])).done)return a;switch(t=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,t=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){o.label=s[1];break}if(6===s[0]&&o.label<a[1]){o.label=a[1],a=s;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(s);break}a[2]&&o.ops.pop(),o.trys.pop();continue}s=r.call(e,o)}catch(e){s=[6,e],t=0}finally{n=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}}(this,(function(a){switch(a.label){case 0:return e?[4,(0,t.T)(e).getConfigurationPages(r,n)]:(console.warn("[fetchConfigurationPages] No API instance available"),[2,[]]);case 1:return[2,a.sent().data]}}))},new((i=void 0)||(i=Promise))((function(e,r){function n(e){try{l(s.next(e))}catch(e){r(e)}}function t(e){try{l(s.throw(e))}catch(e){r(e)}}function l(r){var a;r.done?e(r.value):(a=r.value,a instanceof i?a:new i((function(e){e(a)}))).then(n,t)}l((s=s.apply(a,o||[])).next())}));var a,o,i,s}(e,r,{signal:a})},enabled:!!e})},c=function(e){var r=(0,i.gf)().api;return(0,o.I)(l(r,e))}},89073:function(e,r,n){n.d(r,{A:function(){return u}});var t=n(62540),a=n(5271),o=n(2111),i=n(82535),s=(n(63696),n(42305)),l=n(95858),c=n.p+"baba78f2a106d9baee83.png",u=function(){var e=(0,s.L)().data;return(0,t.jsxs)(l.A,{to:"/",children:[(0,t.jsx)(o.A,{sx:{minWidth:56},children:(0,t.jsx)(a.A,{component:"img",src:c,sx:{height:"2.5rem"}})}),(0,t.jsx)(i.A,{primary:(null==e?void 0:e.ServerName)||"Jellyfin",primaryTypographyProps:{variant:"h6"},secondary:null==e?void 0:e.Version})]})}},75785:function(e,r,n){var t=n(51695),a=n(63696);r.A=function(e){var r=e.children,n=e.elevate,o=void 0!==n&&n,i=(0,t.A)({disableHysteresis:!0,threshold:0}),s=o||i;return a.cloneElement(r,{color:s?"primary":"transparent",elevation:s?4:0})}},95858:function(e,r,n){var t=n(62540),a=n(65641),o=(n(63696),n(87404)),i=n(9055),s=function(){return s=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var a in r=arguments[n])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},s.apply(this,arguments)},l=function(e,r){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var t,a,o=n.call(e),i=[];try{for(;(void 0===r||r-- >0)&&!(t=o.next()).done;)i.push(t.value)}catch(e){a={error:e}}finally{try{t&&!t.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return i};r.A=function(e){var r=e.children,n=e.to,c=e.includePaths,u=void 0===c?[]:c,d=e.excludePaths,f=void 0===d?[]:d,h=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]])}return n}(e,["children","to","includePaths","excludePaths"]),p=(0,o.zy)(),y=l((0,i.ok)(),1)[0],b=l(n.split("?"),2),x=b[0],A=b[1],v=new URLSearchParams("?".concat(A)),j=function(e,r,n){if(n||2===arguments.length)for(var t,a=0,o=r.length;a<o;a++)!t&&a in r||(t||(t=Array.prototype.slice.call(r,0,a)),t[a]=r[a]);return e.concat(t||Array.prototype.slice.call(r))}([x],l(u),!1).includes(p.pathname)&&!f.includes(p.pathname+p.search)&&(!A||function(e,r){var n,t;try{for(var a=function(e){var r="function"==typeof Symbol&&Symbol.iterator,n=r&&e[r],t=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")}(e),o=a.next();!o.done;o=a.next()){var i=o.value;if(r.get(i[0])!==i[1])return!1}}catch(e){n={error:e}}finally{try{o&&!o.done&&(t=a.return)&&t.call(a)}finally{if(n)throw n.error}}return!0}(v,y));return(0,t.jsx)(a.A,s({component:i.N_,to:n,selected:j},h,{children:r}))}},42305:function(e,r,n){n.d(r,{C:function(){return s},L:function(){return l}});var t=n(8280),a=n(61586),o=n(55532),i=n(69410),s=function(e){return(0,t.j)({queryKey:["SystemInfo"],queryFn:function(r){var n=r.signal;return function(e,r){return n=void 0,t=void 0,i=function(){return function(e,r){var n,t,a,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]},i=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return i.next=s(0),i.throw=s(1),i.return=s(2),"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(l){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(o=0)),o;)try{if(n=1,t&&(a=2&s[0]?t.return:s[0]?t.throw||((a=t.return)&&a.call(t),0):t.next)&&!(a=a.call(t,s[1])).done)return a;switch(t=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,t=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){o.label=s[1];break}if(6===s[0]&&o.label<a[1]){o.label=a[1],a=s;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(s);break}a[2]&&o.ops.pop(),o.trys.pop();continue}s=r.call(e,o)}catch(e){s=[6,e],t=0}finally{n=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}}(this,(function(n){switch(n.label){case 0:return e?[4,(0,o.c)(e).getSystemInfo(r)]:(console.warn("[fetchSystemInfo] No API instance available"),[2]);case 1:return[2,n.sent().data]}}))},new((a=void 0)||(a=Promise))((function(e,r){function o(e){try{l(i.next(e))}catch(e){r(e)}}function s(e){try{l(i.throw(e))}catch(e){r(e)}}function l(r){var n;r.done?e(r.value):(n=r.value,n instanceof a?n:new a((function(e){e(n)}))).then(o,s)}l((i=i.apply(n,t||[])).next())}));var n,t,a,i}(e,{signal:n,headers:{"Cache-Control":"no-cache"}})},staleTime:1e3,enabled:!!e})},l=function(){var e=(0,i.gf)().api;return(0,a.I)(s(e))}},70167:function(e,r,n){n.d(r,{A:function(){return a}});var t=n(16438);function a(e,r){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=(0,t.A)(e))||r&&e&&"number"==typeof e.length){n&&(e=n);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){l=!0,i=e},f:function(){try{s||null==n.return||n.return()}finally{if(l)throw i}}}}},69799:function(e,r,n){function t(e){return t=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},t(e)}function a(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(a=function(){return!!e})()}n.d(r,{A:function(){return s}});var o=n(40694),i=n(72367);function s(e){var r=a();return function(){var n,a=t(e);if(r){var s=t(this).constructor;n=Reflect.construct(a,arguments,s)}else n=a.apply(this,arguments);return function(e,r){if(r&&("object"==(0,o.A)(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return(0,i.A)(e)}(this,n)}}},50171:function(e,r,n){n.d(r,{A:function(){return a}});var t=n(91576);function a(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),r&&(0,t.A)(e,r)}}}]);