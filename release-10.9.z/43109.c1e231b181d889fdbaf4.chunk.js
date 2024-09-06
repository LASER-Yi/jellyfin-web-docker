"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[43109],{43109:function(e,n,r){r.r(n),r.d(n,{default:function(){return xe}});var t=r(62540),a=r(63696),s=r(81622),l=r(5271),i=r(96073),o=r(87404),u=r(82371),c=r(75092),d=r(81049),h=r(14847),v=r(27893),x=r(34907),f=r(20541),A=r(9055),b=r(30408),p=r(9482),y=r(49889),m=r(54814),j=r(23125),g=r(72070),w=r(26377),D=(0,j.A)((function(){return window.dispatchEvent(new Event("resize"))}),100),S=function(e){var n=e.isDrawerOpen,r=(0,i.A)((function(e){return e.breakpoints.up("sm")})),s=(0,w.A)(),l=s.searchParams,u=s.setSearchParams,c=s.activeTab;(0,a.useEffect)((function(){D()}),[n]);var d=(0,a.useCallback)((function(e){e.preventDefault();var n=e.currentTarget.dataset.tabIndex;n&&(l.set("tab",n),u(l))}),[l,u]);return(0,t.jsx)(o.BV,{children:g.Ay.map((function(e){return(0,t.jsx)(o.qh,{path:e.path,element:(0,t.jsx)(m.A,{value:c,sx:{width:"100%",flexShrink:{xs:0,lg:"unset"},order:{xs:100,lg:"unset"}},variant:r?"standard":"scrollable",centered:r,children:e.tabs.map((function(n){var r=n.index,a=n.label;return(0,t.jsx)(y.A,{label:a,"data-tab-index":"".concat(r),onClick:d},"".concat(e.path,"-tab-").concat(r))}))})},e.path)}))})},k=r(52997),P=r(61672),C=["/addserver.html","/selectserver.html","/login.html","/forgotpassword.html","/forgotpasswordpin.html"],T=function(e){var n=e.isDrawerAvailable,r=e.isDrawerOpen,a=e.onDrawerButtonClick,s=(0,o.zy)();if("/video"===s.pathname)return null;var l=(0,g.lz)(s.pathname),i=C.includes(s.pathname);return(0,t.jsx)(b.A,{buttons:!i&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(P.A,{}),(0,t.jsx)(k.A,{}),(0,t.jsx)(f.A,{title:p.Ay.translate("Search"),children:(0,t.jsx)(x.A,{size:"large","aria-label":p.Ay.translate("Search"),color:"inherit",component:A.N_,to:"/search.html",children:(0,t.jsx)(v.A,{})})})]}),isDrawerAvailable:n,isDrawerOpen:r,onDrawerButtonClick:a,isUserMenuAvailable:!i,children:l&&(0,t.jsx)(S,{isDrawerOpen:r})})},E=r(29925),G=r(24256),I=r(41829),O=r(97217),U=r(10497),X=r(42918),F=r(78965),B=r(42670),M=r(10041),R=r(59616),z=r(65641),L=r(2111),N=r(82535),_=r(91120),H=r(29849),q=r(70267),V=r(11274),Y=r(33855),$=r(3029),K=r(14842),J=r(48973),Q=r(28953),W=r(68355),Z=r(88583),ee=r(84847),ne=r(24644),re=r(46456),te=r(59518),ae=r(57941),se=r(65369),le=function(e){switch(e.item.CollectionType){case se.X.Movies:return(0,t.jsx)($.A,{});case se.X.Music:return(0,t.jsx)(K.A,{});case se.X.Homevideos:case se.X.Photos:return(0,t.jsx)(J.A,{});case se.X.Livetv:return(0,t.jsx)(Q.A,{});case se.X.Tvshows:return(0,t.jsx)(W.A,{});case se.X.Trailers:return(0,t.jsx)(Z.A,{});case se.X.Musicvideos:return(0,t.jsx)(ee.A,{});case se.X.Books:return(0,t.jsx)(ne.A,{});case se.X.Boxsets:return(0,t.jsx)(re.A,{});case se.X.Playlists:return(0,t.jsx)(te.A,{});default:return(0,t.jsx)(ae.A,{})}},ie=r(42485),oe=function(){var e,n=(0,h.gf)().user,r=(0,o.zy)(),a=(0,V.D)(null==n?void 0:n.Id).data,s=(null==a?void 0:a.Items)||[],l=(0,Y.IB)(),i="/home.html"===r.pathname&&(!r.search||"?tab=0"===r.search);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(M.A,{sx:{paddingTop:0},children:[(0,t.jsx)(R.Ay,{disablePadding:!0,children:(0,t.jsx)(ie.A,{})}),(0,t.jsx)(R.Ay,{disablePadding:!0,children:(0,t.jsxs)(H.A,{to:"/home.html",selected:i,children:[(0,t.jsx)(L.A,{children:(0,t.jsx)(X.A,{})}),(0,t.jsx)(N.A,{primary:p.Ay.translate("Home")})]})}),(0,t.jsx)(R.Ay,{disablePadding:!0,children:(0,t.jsxs)(H.A,{to:"/home.html?tab=1",children:[(0,t.jsx)(L.A,{children:(0,t.jsx)(U.A,{})}),(0,t.jsx)(N.A,{primary:p.Ay.translate("Favorites")})]})})]}),!!l.menuLinks&&l.menuLinks.length>0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(F.A,{}),(0,t.jsx)(M.A,{children:l.menuLinks.map((function(e){var n;return(0,t.jsx)(R.Ay,{disablePadding:!0,children:(0,t.jsxs)(z.A,{component:"a",href:e.url,target:"_blank",rel:"noopener noreferrer",children:[(0,t.jsx)(L.A,{children:(0,t.jsx)(B.A,{children:null!==(n=e.icon)&&void 0!==n?n:"link"})}),(0,t.jsx)(N.A,{primary:e.name})]})},"".concat(e.name,"_").concat(e.url))}))})]}),s.length>0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(F.A,{}),(0,t.jsx)(M.A,{"aria-labelledby":"libraries-subheader",subheader:(0,t.jsx)(_.A,{component:"div",id:"libraries-subheader",children:p.Ay.translate("HeaderLibraries")}),children:s.map((function(e){return(0,t.jsx)(R.Ay,{disablePadding:!0,children:(0,t.jsxs)(H.A,{to:q.appRouter.getRouteUrl(e,{context:e.CollectionType}).substring(1),children:[(0,t.jsx)(L.A,{children:(0,t.jsx)(le,{item:e})}),(0,t.jsx)(N.A,{primary:e.Name})]})},e.Id)}))})]}),(null===(e=null==n?void 0:n.Policy)||void 0===e?void 0:e.IsAdministrator)&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(F.A,{}),(0,t.jsxs)(M.A,{"aria-labelledby":"admin-subheader",subheader:(0,t.jsx)(_.A,{component:"div",id:"admin-subheader",children:p.Ay.translate("HeaderAdmin")}),children:[(0,t.jsx)(R.Ay,{disablePadding:!0,children:(0,t.jsxs)(H.A,{to:"/dashboard",children:[(0,t.jsx)(L.A,{children:(0,t.jsx)(I.A,{})}),(0,t.jsx)(N.A,{primary:p.Ay.translate("TabDashboard")})]})}),(0,t.jsx)(R.Ay,{disablePadding:!0,children:(0,t.jsxs)(H.A,{to:"/metadata",children:[(0,t.jsx)(L.A,{children:(0,t.jsx)(O.A,{})}),(0,t.jsx)(N.A,{primary:p.Ay.translate("MetadataManager")})]})})]})]})]})},ue=function(e,n){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var t,a,s=r.call(e),l=[];try{for(;(void 0===n||n-- >0)&&!(t=s.next()).done;)l.push(t.value)}catch(e){a={error:e}}finally{try{t&&!t.done&&(r=s.return)&&r.call(s)}finally{if(a)throw a.error}}return l},ce=function(e,n,r){if(r||2===arguments.length)for(var t,a=0,s=n.length;a<s;a++)!t&&a in n||(t||(t=Array.prototype.slice.call(n,0,a)),t[a]=n[a]);return e.concat(t||Array.prototype.slice.call(n))},de=["video"],he=ce(ce([],ue(E.ASYNC_USER_ROUTES),!1),ue(G.LEGACY_USER_ROUTES),!1).filter((function(e){return!de.includes(e.path)})),ve=function(e){var n=e.open,r=void 0!==n&&n,a=e.onClose,s=e.onOpen;return(0,t.jsx)(d.A,{open:r,onClose:a,onOpen:s,children:(0,t.jsx)(oe,{})})},xe=function(){var e,n=function(e,n){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var t,a,s=r.call(e),l=[];try{for(;(void 0===n||n-- >0)&&!(t=s.next()).done;)l.push(t.value)}catch(e){a={error:e}}finally{try{t&&!t.done&&(r=s.return)&&r.call(s)}finally{if(a)throw a.error}}return l}((0,a.useState)(!1),2),r=n[0],v=n[1],x=(0,h.gf)().user,f=(0,o.zy)(),A=(0,i.A)((function(e){return e.breakpoints.up("md")})),b=(e=f.pathname,he.some((function(n){return n.path===e||"/".concat(n.path)===e}))&&Boolean(x)),p=r&&b,y=(0,a.useCallback)((function(){v(!r)}),[r,v]);return(0,t.jsxs)(l.A,{sx:{position:"relative",display:"flex",height:"100%"},children:[(0,t.jsx)(c.A,{elevate:!1,children:(0,t.jsx)(s.A,{position:"fixed",sx:{width:{xs:"100%",md:b?"calc(100% - ".concat(d.d,"px)"):"100%"},ml:{xs:0,md:b?d.d:0}},children:(0,t.jsx)(T,{isDrawerAvailable:!A&&b,isDrawerOpen:p,onDrawerButtonClick:y})})}),b&&(0,t.jsx)(ve,{open:p,onClose:y,onOpen:y}),(0,t.jsx)(l.A,{component:"main",sx:{width:"100%",flexGrow:1},children:(0,t.jsx)(u.A,{children:(0,t.jsx)(o.sv,{})})})]})}},72070:function(e,n,r){r.d(n,{L$:function(){return i},lz:function(){return l}});var t=r(9482),a=r(82885),s=r(17145),l=function(e){return o.some((function(n){return n.path===e}))},i=function(e,n){var r,t,s,l,i,u;if(!n)return 0;var c=null!==(t=null===(r=o.find((function(n){return n.path===e})))||void 0===r?void 0:r.tabs)&&void 0!==t?t:[],d=a.get("landing-"+n,!1);return null!==(u=null!==(l=null===(s=c.find((function(e){return e.value===d})))||void 0===s?void 0:s.index)&&void 0!==l?l:null===(i=c.find((function(e){return e.isDefault})))||void 0===i?void 0:i.index)&&void 0!==u?u:0},o=[{path:"/livetv.html",tabs:[{index:0,label:t.Ay.translate("Programs"),value:s.D.Programs,isDefault:!0},{index:1,label:t.Ay.translate("Guide"),value:s.D.Guide},{index:2,label:t.Ay.translate("Channels"),value:s.D.Channels},{index:3,label:t.Ay.translate("Recordings"),value:s.D.Recordings},{index:4,label:t.Ay.translate("Schedule"),value:s.D.Schedule},{index:5,label:t.Ay.translate("Series"),value:s.D.SeriesTimers}]},{path:"/movies.html",tabs:[{index:0,label:t.Ay.translate("Movies"),value:s.D.Movies,isDefault:!0},{index:1,label:t.Ay.translate("Suggestions"),value:s.D.Suggestions},{index:2,label:t.Ay.translate("Trailers"),value:s.D.Trailers},{index:3,label:t.Ay.translate("Favorites"),value:s.D.Favorites},{index:4,label:t.Ay.translate("Collections"),value:s.D.Collections},{index:5,label:t.Ay.translate("Genres"),value:s.D.Genres}]},{path:"/music.html",tabs:[{index:0,label:t.Ay.translate("Albums"),value:s.D.Albums,isDefault:!0},{index:1,label:t.Ay.translate("Suggestions"),value:s.D.Suggestions},{index:2,label:t.Ay.translate("HeaderAlbumArtists"),value:s.D.AlbumArtists},{index:3,label:t.Ay.translate("Artists"),value:s.D.Artists},{index:4,label:t.Ay.translate("Playlists"),value:s.D.Playlists},{index:5,label:t.Ay.translate("Songs"),value:s.D.Songs},{index:6,label:t.Ay.translate("Genres"),value:s.D.Genres}]},{path:"/tv.html",tabs:[{index:0,label:t.Ay.translate("Shows"),value:s.D.Series,isDefault:!0},{index:1,label:t.Ay.translate("Suggestions"),value:s.D.Suggestions},{index:2,label:t.Ay.translate("TabUpcoming"),value:s.D.Upcoming},{index:3,label:t.Ay.translate("Genres"),value:s.D.Genres},{index:4,label:t.Ay.translate("TabNetworks"),value:s.D.Networks},{index:5,label:t.Ay.translate("Episodes"),value:s.D.Episodes}]}];n.Ay=o},26377:function(e,n,r){var t=r(72070),a=r(87404),s=r(9055);n.A=function(){var e=(0,a.zy)(),n=function(e,n){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var t,a,s=r.call(e),l=[];try{for(;(void 0===n||n-- >0)&&!(t=s.next()).done;)l.push(t.value)}catch(e){a={error:e}}finally{try{t&&!t.done&&(r=s.return)&&r.call(s)}finally{if(a)throw a.error}}return l}((0,s.ok)(),2),r=n[0],l=n[1],i=r.get("tab"),o="/livetv.html"===e.pathname?"livetv":r.get("topParentId");return{searchParams:r,setSearchParams:l,libraryId:o,activeTab:null!==i?parseInt(i,10):(0,t.L$)(e.pathname,o)}}},11274:function(e,n,r){r.d(n,{D:function(){return u},q:function(){return o}});var t=r(29593),a=r(36744),s=r(35840),l=r(14847),i=function(){return i=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var a in n=arguments[r])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},i.apply(this,arguments)},o=function(e,n,r){return(0,s.j)({queryKey:["User",n,"Views",r],queryFn:function(a){var s=a.signal;return function(e,n,r,a){return s=void 0,l=void 0,u=function(){return function(e,n){var r,t,a,s,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function i(i){return function(o){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,i[0]&&(l=0)),l;)try{if(r=1,t&&(a=2&i[0]?t.return:i[0]?t.throw||((a=t.return)&&a.call(t),0):t.next)&&!(a=a.call(t,i[1])).done)return a;switch(t=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,t=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!((a=(a=l.trys).length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){l=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){l.label=i[1];break}if(6===i[0]&&l.label<a[1]){l.label=a[1],a=i;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(i);break}a[2]&&l.ops.pop(),l.trys.pop();continue}i=n.call(e,l)}catch(e){i=[6,e],t=0}finally{r=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,o])}}}(this,(function(s){switch(s.label){case 0:if(!e)throw new Error("No API instance available");if(!n)throw new Error("No User ID provided");return[4,(0,t.a)(e).getUserViews(i(i({},r),{userId:n}),a)];case 1:return[2,s.sent().data]}}))},new((o=void 0)||(o=Promise))((function(e,n){function r(e){try{a(u.next(e))}catch(e){n(e)}}function t(e){try{a(u.throw(e))}catch(e){n(e)}}function a(n){var a;n.done?e(n.value):(a=n.value,a instanceof o?a:new o((function(e){e(a)}))).then(r,t)}a((u=u.apply(s,l||[])).next())}));var s,l,o,u}(e,n,r,{signal:s})},staleTime:1e3,enabled:!!e&&!!n})},u=function(e,n){var r=(0,l.gf)().api;return(0,a.I)(o(r,e,n))}},17145:function(e,n,r){var t;r.d(n,{D:function(){return t}}),function(e){e.Albums="albums",e.AlbumArtists="albumartists",e.Artists="artists",e.Channels="channels",e.Collections="collections",e.Episodes="episodes",e.Favorites="favorites",e.Genres="genres",e.Guide="guide",e.Movies="movies",e.Networks="networks",e.Playlists="playlists",e.Programs="programs",e.Recordings="recordings",e.Schedule="schedule",e.Series="series",e.SeriesTimers="seriestimers",e.Songs="songs",e.Suggestions="suggestions",e.Trailers="trailers",e.Upcoming="upcoming",e.Photos="photos",e.Videos="videos",e.Books="books"}(t||(t={}))}}]);