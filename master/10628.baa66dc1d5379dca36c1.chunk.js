"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[10628],{76834:function(e,n,r){r.r(n),r.d(n,{Component:function(){return ye}});var t=r(62540),a=r(81622),i=r(5271),o=r(96073),s=r(92218),l=r(71991),c=r(63696),u=r(87404),d=r(82371),f=r(30408),h=r(75092),y=r(81049),b=r(14847),p=r(62864),x=r(5898),A=r(56948),v=r(96577),j=r(49889),m=r(56639),g=r(23125),w=r(98526),P=r(9055),k=r(10947),S=r(62014),T=function(e,n){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var t,a,i=r.call(e),o=[];try{for(;(void 0===n||n-- >0)&&!(t=i.next()).done;)o.push(t.value)}catch(e){a={error:e}}finally{try{t&&!t.done&&(r=i.return)&&r.call(i)}finally{if(a)throw a.error}}return o},O=(0,g.A)((function(){return window.dispatchEvent(new Event("resize"))}),100),E=function(e){var n=e.isDrawerOpen,r=(0,c.useRef)(document),a=T((0,c.useState)(0),2),i=a[0],s=a[1],l=T((0,c.useState)(),2),u=l[0],d=l[1],f=(0,o.A)((function(e){return e.breakpoints.up("sm")})),h=(0,c.useCallback)((function(e,n,r,t){void 0===r&&(r=0),s(r),(0,w.A)(u,t)||d(t)}),[u]);return(0,c.useEffect)((function(){var e=r.current;return e&&S.A.on(e,k.B.SET_TABS,h),function(){e&&S.A.off(e,k.B.SET_TABS,h)}}),[h]),(0,c.useEffect)((function(){O()}),[n]),(null==u?void 0:u.length)?(0,t.jsx)(m.A,{value:i,sx:{width:"100%",flexShrink:{xs:0,lg:"unset"},order:{xs:100,lg:"unset"}},variant:f?"standard":"scrollable",centered:f,children:u.map((function(e,n){var r=e.href,a=e.name;return(0,t.jsx)(j.A,{label:a,"data-tab-index":"".concat(n),component:P.N_,to:r},"tab-".concat(a))}))}):null},C=r(59616),D=r(10041),L=r(42485),I=r(23849),H=r(94568),B=r(63774),M=r(17071),N=r(960),_=r(91480),q=r(32051),R=r(59894),F=r(2111),G=r(82535),z=r(91120),U=r(29849),V=["/dashboard/libraries","/dashboard/libraries/display","/dashboard/libraries/metadata","/dashboard/libraries/nfo"],K=["/dashboard/playback/transcoding","/dashboard/playback/resume","/dashboard/playback/streaming","/dashboard/playback/trickplay"],Q=function(){var e=(0,u.zy)(),n=V.includes(e.pathname),r=K.includes(e.pathname);return(0,t.jsxs)(D.A,{"aria-labelledby":"server-subheader",subheader:(0,t.jsx)(z.A,{component:"div",id:"server-subheader",children:x.Ay.translate("TabServer")}),children:[(0,t.jsx)(C.Ay,{disablePadding:!0,children:(0,t.jsxs)(U.A,{to:"/dashboard",children:[(0,t.jsx)(F.A,{children:(0,t.jsx)(I.A,{})}),(0,t.jsx)(G.A,{primary:x.Ay.translate("TabDashboard")})]})}),(0,t.jsx)(C.Ay,{disablePadding:!0,children:(0,t.jsxs)(U.A,{to:"/dashboard/settings",children:[(0,t.jsx)(F.A,{children:(0,t.jsx)(H.A,{})}),(0,t.jsx)(G.A,{primary:x.Ay.translate("General")})]})}),(0,t.jsx)(C.Ay,{disablePadding:!0,children:(0,t.jsxs)(U.A,{to:"/dashboard/users",children:[(0,t.jsx)(F.A,{children:(0,t.jsx)(B.A,{})}),(0,t.jsx)(G.A,{primary:x.Ay.translate("HeaderUsers")})]})}),(0,t.jsx)(C.Ay,{disablePadding:!0,children:(0,t.jsxs)(U.A,{to:"/dashboard/libraries",selected:!1,children:[(0,t.jsx)(F.A,{children:(0,t.jsx)(M.A,{})}),(0,t.jsx)(G.A,{primary:x.Ay.translate("HeaderLibraries")}),n?(0,t.jsx)(N.A,{}):(0,t.jsx)(_.A,{})]})}),(0,t.jsx)(R.A,{in:n,timeout:"auto",unmountOnExit:!0,children:(0,t.jsxs)(D.A,{component:"div",disablePadding:!0,children:[(0,t.jsx)(U.A,{to:"/dashboard/libraries",sx:{pl:4},children:(0,t.jsx)(G.A,{inset:!0,primary:x.Ay.translate("HeaderLibraries")})}),(0,t.jsx)(U.A,{to:"/dashboard/libraries/display",sx:{pl:4},children:(0,t.jsx)(G.A,{inset:!0,primary:x.Ay.translate("Display")})}),(0,t.jsx)(U.A,{to:"/dashboard/libraries/metadata",sx:{pl:4},children:(0,t.jsx)(G.A,{inset:!0,primary:x.Ay.translate("Metadata")})}),(0,t.jsx)(U.A,{to:"/dashboard/libraries/nfo",sx:{pl:4},children:(0,t.jsx)(G.A,{inset:!0,primary:x.Ay.translate("TabNfoSettings")})})]})}),(0,t.jsx)(C.Ay,{disablePadding:!0,children:(0,t.jsxs)(U.A,{to:"/dashboard/playback/transcoding",selected:!1,children:[(0,t.jsx)(F.A,{children:(0,t.jsx)(q.A,{})}),(0,t.jsx)(G.A,{primary:x.Ay.translate("TitlePlayback")}),r?(0,t.jsx)(N.A,{}):(0,t.jsx)(_.A,{})]})}),(0,t.jsx)(R.A,{in:r,timeout:"auto",unmountOnExit:!0,children:(0,t.jsxs)(D.A,{component:"div",disablePadding:!0,children:[(0,t.jsx)(U.A,{to:"/dashboard/playback/transcoding",sx:{pl:4},children:(0,t.jsx)(G.A,{inset:!0,primary:x.Ay.translate("Transcoding")})}),(0,t.jsx)(U.A,{to:"/dashboard/playback/resume",sx:{pl:4},children:(0,t.jsx)(G.A,{inset:!0,primary:x.Ay.translate("ButtonResume")})}),(0,t.jsx)(U.A,{to:"/dashboard/playback/streaming",sx:{pl:4},children:(0,t.jsx)(G.A,{inset:!0,primary:x.Ay.translate("TabStreaming")})}),(0,t.jsx)(U.A,{to:"/dashboard/playback/trickplay",sx:{pl:4},children:(0,t.jsx)(G.A,{inset:!0,primary:x.Ay.translate("Trickplay")})})]})})]})},W=r(34266),J=r(95041),$=function(){return(0,t.jsxs)(D.A,{"aria-labelledby":"devices-subheader",subheader:(0,t.jsx)(z.A,{component:"div",id:"devices-subheader",children:x.Ay.translate("HeaderDevices")}),children:[(0,t.jsx)(C.Ay,{disablePadding:!0,children:(0,t.jsxs)(U.A,{to:"/dashboard/devices",children:[(0,t.jsx)(F.A,{children:(0,t.jsx)(W.A,{})}),(0,t.jsx)(G.A,{primary:x.Ay.translate("HeaderDevices")})]})}),(0,t.jsx)(C.Ay,{disablePadding:!0,children:(0,t.jsxs)(U.A,{to:"/dashboard/activity",children:[(0,t.jsx)(F.A,{children:(0,t.jsx)(J.A,{})}),(0,t.jsx)(G.A,{primary:x.Ay.translate("HeaderActivity")})]})})]})},X=r(84917),Y=r(56465),Z=function(){return(0,t.jsxs)(D.A,{"aria-labelledby":"livetv-subheader",subheader:(0,t.jsx)(z.A,{component:"div",id:"livetv-subheader",children:x.Ay.translate("LiveTV")}),children:[(0,t.jsx)(C.Ay,{disablePadding:!0,children:(0,t.jsxs)(U.A,{to:"/dashboard/livetv",children:[(0,t.jsx)(F.A,{children:(0,t.jsx)(X.A,{})}),(0,t.jsx)(G.A,{primary:x.Ay.translate("LiveTV")})]})}),(0,t.jsx)(C.Ay,{disablePadding:!0,children:(0,t.jsxs)(U.A,{to:"/dashboard/recordings",children:[(0,t.jsx)(F.A,{children:(0,t.jsx)(Y.A,{})}),(0,t.jsx)(G.A,{primary:x.Ay.translate("HeaderDVR")})]})})]})},ee=r(37079),ne=r(36406),re=r(15644),te=r(14910),ae=function(){return(0,t.jsxs)(D.A,{"aria-labelledby":"advanced-subheader",subheader:(0,t.jsx)(z.A,{component:"div",id:"advanced-subheader",children:x.Ay.translate("TabAdvanced")}),children:[(0,t.jsx)(C.Ay,{disablePadding:!0,children:(0,t.jsxs)(U.A,{to:"/dashboard/networking",children:[(0,t.jsx)(F.A,{children:(0,t.jsx)(ne.A,{})}),(0,t.jsx)(G.A,{primary:x.Ay.translate("TabNetworking")})]})}),(0,t.jsx)(C.Ay,{disablePadding:!0,children:(0,t.jsxs)(U.A,{to:"/dashboard/keys",children:[(0,t.jsx)(F.A,{children:(0,t.jsx)(te.A,{})}),(0,t.jsx)(G.A,{primary:x.Ay.translate("HeaderApiKeys")})]})}),(0,t.jsx)(C.Ay,{disablePadding:!0,children:(0,t.jsxs)(U.A,{to:"/dashboard/logs",children:[(0,t.jsx)(F.A,{children:(0,t.jsx)(ee.A,{})}),(0,t.jsx)(G.A,{primary:x.Ay.translate("TabLogs")})]})}),(0,t.jsx)(C.Ay,{disablePadding:!0,children:(0,t.jsxs)(U.A,{to:"/dashboard/tasks",children:[(0,t.jsx)(F.A,{children:(0,t.jsx)(re.A,{})}),(0,t.jsx)(G.A,{primary:x.Ay.translate("TabScheduledTasks")})]})})]})},ie=r(6048),oe=r(57941),se=r(11904),le=r(89100),ce=r(61408),ue=function(){var e=(0,ce.q)({enableInMainMenu:!0}),n=e.data,r=e.error;return(0,c.useEffect)((function(){r&&console.error("[PluginDrawerSection] unable to fetch plugin config pages",r)}),[r]),(0,t.jsxs)(D.A,{"aria-labelledby":"plugins-subheader",subheader:(0,t.jsx)(z.A,{component:"div",id:"plugins-subheader",children:x.Ay.translate("TabPlugins")}),children:[(0,t.jsxs)(U.A,{to:"/dashboard/plugins",includePaths:["/configurationpage"],excludePaths:null==n?void 0:n.map((function(e){return"/".concat(le.default.getPluginUrl(e.Name))})),children:[(0,t.jsx)(F.A,{children:(0,t.jsx)(ie.A,{})}),(0,t.jsx)(G.A,{primary:x.Ay.translate("TabMyPlugins")})]}),(0,t.jsxs)(U.A,{to:"/dashboard/plugins/catalog",includePaths:["/dashboard/plugins/repositories"],children:[(0,t.jsx)(F.A,{children:(0,t.jsx)(se.A,{})}),(0,t.jsx)(G.A,{primary:x.Ay.translate("TabCatalog")})]}),null==n?void 0:n.map((function(e){return(0,t.jsxs)(U.A,{to:"/".concat(le.default.getPluginUrl(e.Name)),children:[(0,t.jsx)(F.A,{children:(0,t.jsx)(oe.A,{})}),(0,t.jsx)(G.A,{primary:e.DisplayName})]},e.PluginId)}))]})},de=function(e){var n=e.open,r=void 0!==n&&n,a=e.onClose,i=e.onOpen;return(0,t.jsxs)(y.A,{open:r,onClose:a,onOpen:i,children:[(0,t.jsx)(D.A,{disablePadding:!0,children:(0,t.jsx)(C.Ay,{disablePadding:!0,children:(0,t.jsx)(L.A,{})})}),(0,t.jsx)(Q,{}),(0,t.jsx)($,{}),(0,t.jsx)(Z,{}),(0,t.jsx)(ue,{}),(0,t.jsx)(ae,{})]})},fe=r(70758),he=[fe.DASHBOARD_APP_PATHS.MetadataManager],ye=function(){var e=function(e,n){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var t,a,i=r.call(e),o=[];try{for(;(void 0===n||n-- >0)&&!(t=i.next()).done;)o.push(t.value)}catch(e){a={error:e}}finally{try{t&&!t.done&&(r=i.return)&&r.call(i)}finally{if(a)throw a.error}}return o}((0,c.useState)(!1),2),n=e[0],r=e[1],j=(0,u.zy)(),m=(0,b.gf)().user,g=function(){var e=this,n=(0,v.Q)(),r=n.dateTimeLocale,t=n.language,a=function(e,n){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var t,a,i=r.call(e),o=[];try{for(;(void 0===n||n-- >0)&&!(t=i.next()).done;)o.push(t.value)}catch(e){a={error:e}}finally{try{t&&!t.done&&(r=i.return)&&r.call(i)}finally{if(a)throw a.error}}return o}((0,c.useState)(p.A),2),i=a[0],o=a[1],s=(0,c.useMemo)((function(){return(0,x.Tl)(t||(0,x.i5)())}),[t]),l=(0,c.useMemo)((function(){return r?(0,x.Tl)(r):s}),[r,s]);return(0,c.useEffect)((function(){var n,r,t,a;n=e,r=void 0,a=function(){var e,n;return function(e,n){var r,t,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(l){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(o=0)),o;)try{if(r=1,t&&(a=2&s[0]?t.return:s[0]?t.throw||((a=t.return)&&a.call(t),0):t.next)&&!(a=a.call(t,s[1])).done)return a;switch(t=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,t=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){o.label=s[1];break}if(6===s[0]&&o.label<a[1]){o.label=a[1],a=s;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(s);break}a[2]&&o.ops.pop(),o.trys.pop();continue}s=n.call(e,o)}catch(e){s=[6,e],t=0}finally{r=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}}(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,(0,A.Fq)((0,A.QC)(l))];case 1:return e=r.sent(),o(e),[3,3];case 2:return n=r.sent(),console.warn("[useLocale] failed to fetch dateFns locale",n),[3,3];case 3:return[2]}}))},new((t=void 0)||(t=Promise))((function(e,i){function o(e){try{l(a.next(e))}catch(e){i(e)}}function s(e){try{l(a.throw(e))}catch(e){i(e)}}function l(n){var r;n.done?e(n.value):(r=n.value,r instanceof t?r:new t((function(e){e(r)}))).then(o,s)}l((a=a.apply(n,r||[])).next())}))}),[l]),{locale:s,dateTimeLocale:l,dateFnsLocale:i}}().dateFnsLocale,w=(0,o.A)((function(e){return e.breakpoints.up("md")})),P=Boolean(m)&&!he.some((function(e){return j.pathname.startsWith("/".concat(e))})),k=n&&P,S=(0,c.useCallback)((function(){r(!n)}),[n,r]);return(0,c.useEffect)((function(){return document.body.classList.add("dashboardDocument"),function(){document.body.classList.remove("dashboardDocument")}}),[]),(0,t.jsx)(s.$,{dateAdapter:l.h,adapterLocale:g,children:(0,t.jsxs)(i.A,{sx:{display:"flex"},children:[(0,t.jsx)(h.A,{elevate:!1,children:(0,t.jsx)(a.A,{position:"fixed",sx:{width:{xs:"100%",md:P?"calc(100% - ".concat(y.d,"px)"):"100%"},ml:{xs:0,md:P?y.d:0}},children:(0,t.jsx)(f.A,{isDrawerAvailable:!w&&P,isDrawerOpen:k,onDrawerButtonClick:S,children:(0,t.jsx)(E,{isDrawerOpen:k})})})}),P&&(0,t.jsx)(de,{open:k,onClose:S,onOpen:S}),(0,t.jsx)(i.A,{component:"main",sx:{width:"100%",flexGrow:1},children:(0,t.jsx)(d.A,{children:(0,t.jsx)(u.sv,{})})})]})})}},86746:function(e,n,r){var t;r.d(n,{k:function(){return t}}),function(e){e.ConfigurationPages="ConfigurationPages",e.PackageInfo="PackageInfo",e.Plugins="Plugins"}(t||(t={}))},61408:function(e,n,r){r.d(n,{q:function(){return c}});var t=r(39599),a=r(8280),i=r(61586),o=r(14847),s=r(86746),l=function(e,n){return(0,a.j)({queryKey:[s.k.ConfigurationPages,null==n?void 0:n.enableInMainMenu],queryFn:function(r){var a=r.signal;return function(e,n,r){return a=void 0,i=void 0,s=function(){return function(e,n){var r,t,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(l){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(o=0)),o;)try{if(r=1,t&&(a=2&s[0]?t.return:s[0]?t.throw||((a=t.return)&&a.call(t),0):t.next)&&!(a=a.call(t,s[1])).done)return a;switch(t=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,t=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){o.label=s[1];break}if(6===s[0]&&o.label<a[1]){o.label=a[1],a=s;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(s);break}a[2]&&o.ops.pop(),o.trys.pop();continue}s=n.call(e,o)}catch(e){s=[6,e],t=0}finally{r=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}}(this,(function(a){switch(a.label){case 0:return e?[4,(0,t.T)(e).getConfigurationPages(n,r)]:(console.warn("[fetchConfigurationPages] No API instance available"),[2,[]]);case 1:return[2,a.sent().data]}}))},new((o=void 0)||(o=Promise))((function(e,n){function r(e){try{l(s.next(e))}catch(e){n(e)}}function t(e){try{l(s.throw(e))}catch(e){n(e)}}function l(n){var a;n.done?e(n.value):(a=n.value,a instanceof o?a:new o((function(e){e(a)}))).then(r,t)}l((s=s.apply(a,i||[])).next())}));var a,i,o,s}(e,n,{signal:a})},enabled:!!e})},c=function(e){var n=(0,o.gf)().api;return(0,i.I)(l(n,e))}},42485:function(e,n,r){r.d(n,{A:function(){return u}});var t=r(62540),a=r(5271),i=r(2111),o=r(82535),s=(r(63696),r(14612)),l=r(29849),c=r.p+"baba78f2a106d9baee83.png",u=function(){var e=(0,s.L)().data;return(0,t.jsxs)(l.A,{to:"/",children:[(0,t.jsx)(i.A,{sx:{minWidth:56},children:(0,t.jsx)(a.A,{component:"img",src:c,sx:{height:"2.5rem"}})}),(0,t.jsx)(o.A,{primary:(null==e?void 0:e.ServerName)||"Jellyfin",primaryTypographyProps:{variant:"h6"},secondary:null==e?void 0:e.Version})]})}},75092:function(e,n,r){var t=r(51695),a=r(63696);n.A=function(e){var n=e.children,r=e.elevate,i=void 0!==r&&r,o=(0,t.A)({disableHysteresis:!0,threshold:0}),s=i||o;return a.cloneElement(n,{color:s?"primary":"transparent",elevation:s?4:0})}},29849:function(e,n,r){var t=r(62540),a=r(65641),i=(r(63696),r(87404)),o=r(9055),s=function(){return s=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var a in n=arguments[r])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},s.apply(this,arguments)},l=function(e,n){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var t,a,i=r.call(e),o=[];try{for(;(void 0===n||n-- >0)&&!(t=i.next()).done;)o.push(t.value)}catch(e){a={error:e}}finally{try{t&&!t.done&&(r=i.return)&&r.call(i)}finally{if(a)throw a.error}}return o};n.A=function(e){var n=e.children,r=e.to,c=e.includePaths,u=void 0===c?[]:c,d=e.excludePaths,f=void 0===d?[]:d,h=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]])}return r}(e,["children","to","includePaths","excludePaths"]),y=(0,i.zy)(),b=l((0,o.ok)(),1)[0],p=l(r.split("?"),2),x=p[0],A=p[1],v=new URLSearchParams("?".concat(A)),j=function(e,n,r){if(r||2===arguments.length)for(var t,a=0,i=n.length;a<i;a++)!t&&a in n||(t||(t=Array.prototype.slice.call(n,0,a)),t[a]=n[a]);return e.concat(t||Array.prototype.slice.call(n))}([x],l(u),!1).includes(y.pathname)&&!f.includes(y.pathname+y.search)&&(!A||function(e,n){var r,t;try{for(var a=function(e){var n="function"==typeof Symbol&&Symbol.iterator,r=n&&e[n],t=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}(e),i=a.next();!i.done;i=a.next()){var o=i.value;if(n.get(o[0])!==o[1])return!1}}catch(e){r={error:e}}finally{try{i&&!i.done&&(t=a.return)&&t.call(a)}finally{if(r)throw r.error}}return!0}(v,b));return(0,t.jsx)(a.A,s({component:o.N_,to:r,selected:j},h,{children:n}))}},14612:function(e,n,r){r.d(n,{C:function(){return s},L:function(){return l}});var t=r(8280),a=r(61586),i=r(55532),o=r(14847),s=function(e){return(0,t.j)({queryKey:["SystemInfo"],queryFn:function(n){var r=n.signal;return function(e,n){return r=void 0,t=void 0,o=function(){return function(e,n){var r,t,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(l){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(o=0)),o;)try{if(r=1,t&&(a=2&s[0]?t.return:s[0]?t.throw||((a=t.return)&&a.call(t),0):t.next)&&!(a=a.call(t,s[1])).done)return a;switch(t=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,t=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){o.label=s[1];break}if(6===s[0]&&o.label<a[1]){o.label=a[1],a=s;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(s);break}a[2]&&o.ops.pop(),o.trys.pop();continue}s=n.call(e,o)}catch(e){s=[6,e],t=0}finally{r=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}}(this,(function(r){switch(r.label){case 0:return e?[4,(0,i.c)(e).getSystemInfo(n)]:(console.warn("[fetchSystemInfo] No API instance available"),[2]);case 1:return[2,r.sent().data]}}))},new((a=void 0)||(a=Promise))((function(e,n){function i(e){try{l(o.next(e))}catch(e){n(e)}}function s(e){try{l(o.throw(e))}catch(e){n(e)}}function l(n){var r;n.done?e(n.value):(r=n.value,r instanceof a?r:new a((function(e){e(r)}))).then(i,s)}l((o=o.apply(r,t||[])).next())}));var r,t,a,o}(e,{signal:r,headers:{"Cache-Control":"no-cache"}})},staleTime:1e3,enabled:!!e})},l=function(){var e=(0,o.gf)().api;return(0,a.I)(s(e))}},70167:function(e,n,r){r.d(n,{A:function(){return a}});var t=r(16438);function a(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=(0,t.A)(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var a=0,i=function(){};return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return s=e.done,e},e:function(e){l=!0,o=e},f:function(){try{s||null==r.return||r.return()}finally{if(l)throw o}}}}},69799:function(e,n,r){function t(e){return t=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},t(e)}function a(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(a=function(){return!!e})()}r.d(n,{A:function(){return s}});var i=r(40694),o=r(72367);function s(e){var n=a();return function(){var r,a=t(e);if(n){var s=t(this).constructor;r=Reflect.construct(a,arguments,s)}else r=a.apply(this,arguments);return function(e,n){if(n&&("object"==(0,i.A)(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return(0,o.A)(e)}(this,r)}}},50171:function(e,n,r){r.d(n,{A:function(){return a}});var t=r(91576);function a(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&(0,t.A)(e,n)}}}]);