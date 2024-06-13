"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[96180],{52997:function(e,n,r){r.d(n,{A:function(){return q}});var t=r(62540),a=r(63696),o=r(94075),l=r(5271),i=r(77890),c=r(31522),s=r(34907),u=r(18509),f=r(20541),y=r(80669),p=r(9482),d=r(62014),h=r(2129),v=r(78965),A=r(2111),b=r(82535),x=r(65559),j=r(52974),m=r(38829),g=r(88884),S=r(83838),k=r(20462),C=r(11313),P=r(68355),w=r(34789),M=function(e){var n=e.target;if(!n.deviceType&&n.isLocalPlayer)return w.A.tv?(0,t.jsx)(P.A,{}):w.A.mobile?(0,t.jsx)(k.A,{}):(0,t.jsx)(g.A,{});switch(n.deviceType){case"smartphone":return(0,t.jsx)(k.A,{});case"tablet":return(0,t.jsx)(C.A,{});case"desktop":return(0,t.jsx)(g.A,{});case"cast":return(0,t.jsx)(c.A,{});case"tv":return(0,t.jsx)(P.A,{});default:return(0,t.jsx)(S.A,{})}},G="app-remote-play-menu",E=function(e){var n=e.anchorEl,r=e.open,o=e.onMenuClose,l=!!m.X.plugins.find((function(e){return"chromecast"===e.id})),i=function(e,n){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var t,a,o=r.call(e),l=[];try{for(;(void 0===n||n-- >0)&&!(t=o.next()).done;)l.push(t.value)}catch(e){a={error:e}}finally{try{t&&!t.done&&(r=o.return)&&r.call(o)}finally{if(a)throw a.error}}return l}((0,a.useState)([]),2),c=i[0],s=i[1];return(0,a.useEffect)((function(){var e,n,t,a;r&&(e=void 0,n=void 0,t=void 0,a=function(){var e;return function(e,n){var r,t,a,o,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(i){return function(c){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,i[0]&&(l=0)),l;)try{if(r=1,t&&(a=2&i[0]?t.return:i[0]?t.throw||((a=t.return)&&a.call(t),0):t.next)&&!(a=a.call(t,i[1])).done)return a;switch(t=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,t=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!((a=(a=l.trys).length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){l=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){l.label=i[1];break}if(6===i[0]&&l.label<a[1]){l.label=a[1],a=i;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(i);break}a[2]&&l.ops.pop(),l.trys.pop();continue}i=n.call(e,l)}catch(e){i=[6,e],t=0}finally{r=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}(this,(function(n){switch(n.label){case 0:return e=s,[4,y.f.getTargets()];case 1:return e.apply(void 0,[n.sent()]),[2]}}))},new(t||(t=Promise))((function(r,o){function l(e){try{c(a.next(e))}catch(e){o(e)}}function i(e){try{c(a.throw(e))}catch(e){o(e)}}function c(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(l,i)}c((a=a.apply(e,n||[])).next())}))).catch((function(e){console.error("[AppRemotePlayMenu] unable to get playback targets",e)}))}),[r,s]),(0,t.jsxs)(x.A,{anchorEl:n,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},id:G,keepMounted:!0,open:r,onClose:o,children:[!l&&[(0,t.jsxs)(j.A,{disabled:!0,children:[(0,t.jsx)(A.A,{children:(0,t.jsx)(h.A,{})}),(0,t.jsx)(b.A,{children:p.Ay.translate("GoogleCastUnsupported")})]},"cast-unsupported-item"),(0,t.jsx)(v.A,{},"cast-unsupported-divider")],c.map((function(e){var n;return(0,t.jsxs)(j.A,{onClick:function(){return function(e){y.f.trySetActivePlayer(e.playerName,e),o()}(e)},children:[(0,t.jsx)(A.A,{children:(0,t.jsx)(M,{target:e})}),(0,t.jsx)(b.A,{primary:e.appName?"".concat(e.name," - ").concat(e.appName):e.name,secondary:null===(n=e.user)||void 0===n?void 0:n.Name})]},e.id)}))]})},D=r(32629),N=r(37001),O=r(29862),I=r(91120),T=r(48080),B=r(9055),L=r(83237),z=function(e,n){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var t,a,o=r.call(e),l=[];try{for(;(void 0===n||n-- >0)&&!(t=o.next()).done;)l.push(t.value)}catch(e){a={error:e}}finally{try{t&&!t.done&&(r=o.return)&&r.call(o)}finally{if(a)throw a.error}}return l},_="app-remote-play-active-menu",F=function(e){var n=e.anchorEl,r=e.open,o=e.onMenuClose,l=e.playerInfo,i=z((0,a.useState)(y.f.enableDisplayMirroring()),2),c=i[0],s=i[1],u=(null==l?void 0:l.supportedCommands)&&-1!==l.supportedCommands.indexOf("DisplayContent"),f=(0,a.useCallback)((function(){y.f.enableDisplayMirroring(!c),s(!c)}),[c,s]),d=z((0,a.useState)((0,L.Ol)()),2),h=d[0],m=d[1],g=(0,L.$j)(),S=(0,a.useCallback)((function(){(0,L.sS)(!h),m(!h)}),[h,m]),k=(null==l?void 0:l.deviceName)||(null==l?void 0:l.name),C=(0,a.useCallback)((function(){-1!==y.f.getSupportedCommands().indexOf("EndSession")?T.A.show({buttons:[{name:p.Ay.translate("Yes"),id:"yes"},{name:p.Ay.translate("No"),id:"no"}],text:p.Ay.translate("ConfirmEndPlayerSession",k)}).then((function(e){o(),"yes"===e&&y.f.getCurrentPlayer().endSession(),y.f.setDefaultPlayerActive()})).catch((function(){})):(o(),y.f.setDefaultPlayerActive())}),[o,k]);return(0,t.jsxs)(x.A,{anchorEl:n,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},id:_,keepMounted:!0,open:r,onClose:o,MenuListProps:{"aria-labelledby":"remote-play-active-subheader",subheader:(0,t.jsx)(I.A,{component:"div",id:"remote-play-active-subheader",children:k})},children:[u&&(0,t.jsxs)(j.A,{onClick:f,children:[c&&(0,t.jsx)(A.A,{children:(0,t.jsx)(D.A,{})}),(0,t.jsx)(b.A,{inset:!c,children:p.Ay.translate("EnableDisplayMirroring")})]}),g&&(0,t.jsxs)(j.A,{onClick:S,children:[h&&(0,t.jsx)(A.A,{children:(0,t.jsx)(D.A,{})}),(0,t.jsx)(b.A,{inset:!h,children:p.Ay.translate("EnableAutoCast")})]}),(u||g)&&(0,t.jsx)(v.A,{}),(0,t.jsxs)(j.A,{component:B.N_,to:"/queue",onClick:o,children:[(0,t.jsx)(A.A,{children:(0,t.jsx)(O.A,{})}),(0,t.jsx)(b.A,{children:p.Ay.translate("HeaderRemoteControl")})]}),(0,t.jsx)(v.A,{}),(0,t.jsxs)(j.A,{onClick:C,children:[(0,t.jsx)(A.A,{children:(0,t.jsx)(N.A,{})}),(0,t.jsx)(b.A,{children:p.Ay.translate("Disconnect")})]})]})},R=function(e,n){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var t,a,o=r.call(e),l=[];try{for(;(void 0===n||n-- >0)&&!(t=o.next()).done;)l.push(t.value)}catch(e){a={error:e}}finally{try{t&&!t.done&&(r=o.return)&&r.call(o)}finally{if(a)throw a.error}}return l},q=function(){var e=(0,u.A)(),n=R((0,a.useState)(y.f.getPlayerInfo()),2),r=n[0],h=n[1],v=(0,a.useCallback)((function(){h(y.f.getPlayerInfo())}),[h]);(0,a.useEffect)((function(){return d.A.on(y.f,"playerchange",v),function(){d.A.off(y.f,"playerchange",v)}}),[v]);var A=R((0,a.useState)(null),2),b=A[0],x=A[1],j=Boolean(b),m=(0,a.useCallback)((function(e){x(e.currentTarget)}),[x]),g=(0,a.useCallback)((function(){x(null)}),[x]),S=R((0,a.useState)(null),2),k=S[0],C=S[1],P=Boolean(k),w=(0,a.useCallback)((function(e){C(e.currentTarget)}),[C]),M=(0,a.useCallback)((function(){C(null)}),[C]);return(0,t.jsxs)(t.Fragment,{children:[r&&!r.isLocalPlayer?(0,t.jsx)(l.A,{sx:{alignSelf:"center"},children:(0,t.jsx)(f.A,{title:p.Ay.translate("ButtonCast"),children:(0,t.jsx)(i.A,{variant:"text",size:"large",startIcon:(0,t.jsx)(o.A,{}),"aria-label":p.Ay.translate("ButtonCast"),"aria-controls":_,"aria-haspopup":"true",onClick:w,color:"inherit",sx:{color:e.palette.primary.main},children:r.deviceName||r.name})})}):(0,t.jsx)(f.A,{title:p.Ay.translate("ButtonCast"),children:(0,t.jsx)(s.A,{size:"large","aria-label":p.Ay.translate("ButtonCast"),"aria-controls":G,"aria-haspopup":"true",onClick:m,color:"inherit",children:(0,t.jsx)(c.A,{})})}),(0,t.jsx)(E,{open:j,anchorEl:b,onMenuClose:g}),(0,t.jsx)(F,{open:P,anchorEl:k,onMenuClose:M,playerInfo:r})]})}},61672:function(e,n,r){r.d(n,{A:function(){return O}});var t=r(62540),a=r(68136),o=r(47565),l=r(34907),i=r(20541),c=r(63696),s=r(38829),u=r(14847),f=r(9482),y=r(66176),p=r(73187),d=r(24851),h=r(40749),v=r(32683),A=r(584),b=r(41911),x=r(51493),j=r(18915),m=r(78965),g=r(2111),S=r(82535),k=r(91120),C=r(65559),P=r(52974),w=r(61586),M=function(){var e=(0,u.gf)().api;return(0,w.I)({queryKey:["SyncPlay","Groups"],queryFn:function(n){var r=n.signal;return function(e,n){return r=void 0,t=void 0,o=function(){return function(e,n){var r,t,a,o,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(i){return function(c){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,i[0]&&(l=0)),l;)try{if(r=1,t&&(a=2&i[0]?t.return:i[0]?t.throw||((a=t.return)&&a.call(t),0):t.next)&&!(a=a.call(t,i[1])).done)return a;switch(t=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,t=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!((a=(a=l.trys).length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){l=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){l.label=i[1];break}if(6===i[0]&&l.label<a[1]){l.label=a[1],a=i;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(i);break}a[2]&&l.ops.pop(),l.trys.pop();continue}i=n.call(e,l)}catch(e){i=[6,e],t=0}finally{r=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}(this,(function(r){switch(r.label){case 0:return e?[4,(0,p.u)(e).syncPlayGetGroups(n)]:(console.warn("[fetchSyncPlayGroups] No API instance available"),[2]);case 1:return[2,r.sent().data]}}))},new((a=void 0)||(a=Promise))((function(e,n){function l(e){try{c(o.next(e))}catch(e){n(e)}}function i(e){try{c(o.throw(e))}catch(e){n(e)}}function c(n){var r;n.done?e(n.value):(r=n.value,r instanceof a?r:new a((function(e){e(r)}))).then(l,i)}c((o=o.apply(r,t||[])).next())}));var r,t,a,o}(e,{signal:r})},enabled:!!e})},G=r(62014),E=function(e,n){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var t,a,o=r.call(e),l=[];try{for(;(void 0===n||n-- >0)&&!(t=o.next()).done;)l.push(t.value)}catch(e){a={error:e}}finally{try{t&&!t.done&&(r=o.return)&&r.call(o)}finally{if(a)throw a.error}}return l},D="app-sync-play-menu",N=function(e){var n,o,l=e.anchorEl,i=e.open,w=e.onMenuClose,N=E((0,c.useState)(),2),O=N[0],I=N[1],T=(0,u.gf)(),B=T.__legacyApiClient__,L=T.api,z=T.user,_=E((0,c.useState)(),2),F=_[0],R=_[1],q=Boolean(F);(0,c.useEffect)((function(){var e;I(null===(e=s.X.firstOfType(y.Q.SyncPlay))||void 0===e?void 0:e.instance)}),[]);var H=M().data,J=(0,c.useCallback)((function(){L&&z&&((0,p.u)(L).syncPlayCreateGroup({newGroupRequestDto:{GroupName:f.Ay.translate("SyncPlayGroupDefaultTitle",z.Name)}}).catch((function(e){console.error("[SyncPlayMenu] failed to create a SyncPlay group",e)})),w())}),[L,w,z]),X=(0,c.useCallback)((function(){L&&((0,p.u)(L).syncPlayLeaveGroup().catch((function(e){console.error("[SyncPlayMenu] failed to leave SyncPlay group",e)})),w())}),[L,w]),Q=(0,c.useCallback)((function(e){L&&((0,p.u)(L).syncPlayJoinGroup({joinGroupRequestDto:{GroupId:e}}).catch((function(e){console.error("[SyncPlayMenu] failed to join SyncPlay group",e)})),w())}),[L,w]),U=(0,c.useCallback)((function(){return e=void 0,n=void 0,a=function(){return function(e,n){var r,t,a,o,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(i){return function(c){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,i[0]&&(l=0)),l;)try{if(r=1,t&&(a=2&i[0]?t.return:i[0]?t.throw||((a=t.return)&&a.call(t),0):t.next)&&!(a=a.call(t,i[1])).done)return a;switch(t=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,t=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!((a=(a=l.trys).length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){l=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){l.label=i[1];break}if(6===i[0]&&l.label<a[1]){l.label=a[1],a=i;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(i);break}a[2]&&l.ops.pop(),l.trys.pop();continue}i=n.call(e,l)}catch(e){i=[6,e],t=0}finally{r=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}(this,(function(e){switch(e.label){case 0:return O?[4,Promise.all([r.e(45568),r.e(96084)]).then(r.bind(r,45568))]:[2];case 1:return new(0,e.sent().default)(B,O.Manager.getTimeSyncCore(),{groupInfo:F}).embed().catch((function(e){e&&console.error("[SyncPlayMenu] Error creating SyncPlay settings editor",e)})),w(),[2]}}))},new((t=void 0)||(t=Promise))((function(r,o){function l(e){try{c(a.next(e))}catch(e){o(e)}}function i(e){try{c(a.throw(e))}catch(e){o(e)}}function c(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(l,i)}c((a=a.apply(e,n||[])).next())}));var e,n,t,a}),[B,F,w,O]),V=(0,c.useCallback)((function(){B&&(null==O||O.Manager.resumeGroupPlayback(B),w())}),[B,w,O]),W=(0,c.useCallback)((function(){B&&(null==O||O.Manager.haltGroupPlayback(B),w())}),[B,w,O]),K=(0,c.useCallback)((function(e,n){var r;R(O&&n&&null!==(r=O.Manager.getGroupInfo())&&void 0!==r?r:void 0)}),[O]);(0,c.useEffect)((function(){if(O)return G.A.on(O.Manager,"enabled",K),function(){G.A.off(O.Manager,"enabled",K)}}),[K,O]);var Y=[];q?((null==O?void 0:O.Manager.isPlaylistEmpty())||(null==O?void 0:O.Manager.isPlaybackActive())?(null==O?void 0:O.Manager.isPlaybackActive())&&Y.push((0,t.jsxs)(P.A,{onClick:W,children:[(0,t.jsx)(g.A,{children:(0,t.jsx)(x.A,{})}),(0,t.jsx)(S.A,{primary:f.Ay.translate("LabelSyncPlayHaltPlayback")})]},"sync-play-stop-playback")):Y.push((0,t.jsxs)(P.A,{onClick:V,children:[(0,t.jsx)(g.A,{children:(0,t.jsx)(b.A,{})}),(0,t.jsx)(S.A,{primary:f.Ay.translate("LabelSyncPlayResumePlayback")})]},"sync-play-start-playback")),Y.push((0,t.jsxs)(P.A,{onClick:U,children:[(0,t.jsx)(g.A,{children:(0,t.jsx)(j.A,{})}),(0,t.jsx)(S.A,{primary:f.Ay.translate("Settings")})]},"sync-play-settings")),Y.push((0,t.jsx)(m.A,{},"sync-play-controls-divider")),Y.push((0,t.jsxs)(P.A,{onClick:X,children:[(0,t.jsx)(g.A,{children:(0,t.jsx)(A.A,{})}),(0,t.jsx)(S.A,{primary:f.Ay.translate("LabelSyncPlayLeaveGroup")})]},"sync-play-exit"))):(null==H?void 0:H.length)||(null===(n=null==z?void 0:z.Policy)||void 0===n?void 0:n.SyncPlayAccess)===a.r.CreateAndJoinGroups?(H&&H.length>0&&(H.forEach((function(e){var n;Y.push((0,t.jsxs)(P.A,{onClick:function(){return e.GroupId&&Q(e.GroupId)},children:[(0,t.jsx)(g.A,{children:(0,t.jsx)(h.A,{})}),(0,t.jsx)(S.A,{primary:e.GroupName,secondary:null===(n=e.Participants)||void 0===n?void 0:n.join(", ")})]},e.GroupId))})),Y.push((0,t.jsx)(m.A,{},"sync-play-groups-divider"))),(null===(o=null==z?void 0:z.Policy)||void 0===o?void 0:o.SyncPlayAccess)===a.r.CreateAndJoinGroups&&Y.push((0,t.jsxs)(P.A,{onClick:J,children:[(0,t.jsx)(g.A,{children:(0,t.jsx)(d.A,{})}),(0,t.jsx)(S.A,{primary:f.Ay.translate("LabelSyncPlayNewGroupDescription")})]},"sync-play-new-group"))):Y.push((0,t.jsxs)(P.A,{disabled:!0,children:[(0,t.jsx)(g.A,{children:(0,t.jsx)(v.A,{})}),(0,t.jsx)(S.A,{primary:f.Ay.translate("LabelSyncPlayNoGroups")})]},"sync-play-unavailable"));var $=q?{"aria-labelledby":"sync-play-active-subheader",subheader:(0,t.jsx)(k.A,{component:"div",id:"sync-play-active-subheader",children:null==F?void 0:F.GroupName})}:void 0;return(0,t.jsx)(C.A,{anchorEl:l,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},id:D,keepMounted:!0,open:i,onClose:w,MenuListProps:$,children:Y})},O=function(){var e=(0,u.gf)().user,n=function(e,n){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var t,a,o=r.call(e),l=[];try{for(;(void 0===n||n-- >0)&&!(t=o.next()).done;)l.push(t.value)}catch(e){a={error:e}}finally{try{t&&!t.done&&(r=o.return)&&r.call(o)}finally{if(a)throw a.error}}return l}((0,c.useState)(null),2),r=n[0],p=n[1],d=Boolean(r),h=(0,c.useCallback)((function(e){p(e.currentTarget)}),[p]),v=(0,c.useCallback)((function(){p(null)}),[p]);return(null==e?void 0:e.Policy)&&e.Policy.SyncPlayAccess===a.r.None||0===s.X.ofType(y.Q.SyncPlay).length?null:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.A,{title:f.Ay.translate("ButtonSyncPlay"),children:(0,t.jsx)(l.A,{size:"large","aria-label":f.Ay.translate("ButtonSyncPlay"),"aria-controls":D,"aria-haspopup":"true",onClick:h,color:"inherit",children:(0,t.jsx)(o.A,{})})}),(0,t.jsx)(N,{open:d,anchorEl:r,onMenuClose:v})]})}},19432:function(e,n,r){r.r(n);var t=r(62540),a=r(5271),o=r(61667),l=r(63696),i=r(52997),c=r(61672),s=r(30408),u=r(12854),f=r(10947),y=r(62014);n.default=function(){var e=(0,l.useRef)(document),n=function(e,n){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var t,a,o=r.call(e),l=[];try{for(;(void 0===n||n-- >0)&&!(t=o.next()).done;)l.push(t.value)}catch(e){a={error:e}}finally{try{t&&!t.done&&(r=o.return)&&r.call(o)}finally{if(a)throw a.error}}return l}((0,l.useState)(!0),2),r=n[0],p=n[1],d=function(e,n){p(n)};return(0,l.useEffect)((function(){var n=e.current;return n&&y.A.on(n,f.B.SHOW_VIDEO_OSD,d),function(){n&&y.A.off(n,f.B.SHOW_VIDEO_OSD,d)}}),[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.A,{in:r,easing:"fade-out",children:(0,t.jsx)(a.A,{sx:{position:"absolute",top:0,left:0,right:0,color:"white"},children:(0,t.jsx)(s.A,{isDrawerAvailable:!1,isDrawerOpen:!1,isUserMenuAvailable:!1,buttons:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.A,{}),(0,t.jsx)(i.A,{})]})})})}),(0,t.jsx)(u.A,{controller:"playback/video/index",view:"playback/video/index.html",type:"video-osd",isFullscreen:!0,isNowPlayingBarEnabled:!1,isThemeMediaSupported:!0})]})}}}]);