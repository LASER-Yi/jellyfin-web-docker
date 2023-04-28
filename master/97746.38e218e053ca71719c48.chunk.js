"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[97746],{97746:function(e,t,n){n.d(t,{Z:function(){return B}});var r=n(24246),a=n(77656),i=n(27378),s=n(28540),l=n(60934),o=n(12658),u=function(){return u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},u.apply(this,arguments)},c=function(e){var t=e.viewQuerySettings,n=e.setViewQuerySettings,a=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,i=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(e){a={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(a)throw a.error}}return s}((0,i.useState)(),2),s=a[0],l=a[1],c=(0,i.useRef)(null);null==s||s.updateControls(t);var d=(0,i.useCallback)((function(e){var t,r=e.detail.value;t="#"===r?{NameLessThan:"A",NameStartsWith:void 0}:{NameLessThan:void 0,NameStartsWith:r},n((function(e){return u(u(u({},e),{StartIndex:0}),t)}))}),[n]);return(0,i.useEffect)((function(){var e=c.current;return l(new o.Z({element:e,valueChangeEvent:"click"})),e&&e.addEventListener("alphavaluechanged",d),function(){null==e||e.removeEventListener("alphavaluechanged",d)}}),[d]),(0,r.jsx)("div",{ref:c,className:"alphaPicker alphaPicker-fixed alphaPicker-fixed-right alphaPicker-vertical alphabetPicker-right"})},d=n(43771),f=function(){return f=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},f.apply(this,arguments)},v=function(e){var t=e.topParentId,a=e.getItemTypes,s=e.getVisibleFilters,l=e.getFilterMenuOptions,o=e.viewQuerySettings,u=e.setViewQuerySettings,c=(0,i.useRef)(null),v=(0,i.useCallback)((function(){n.e(77611).then(n.bind(n,77611)).then((function(e){(new(0,e.default)).show({settings:o,visibleSettings:s(),parentId:t,itemTypes:a(),serverId:window.ApiClient.serverId(),filterMenuOptions:l(),setfilters:u})}))}),[o,s,t,a,l,u]);return(0,i.useEffect)((function(){var e,t=null===(e=c.current)||void 0===e?void 0:e.querySelector(".btnFilter");return null==t||t.addEventListener("click",v),function(){null==t||t.removeEventListener("click",v)}}),[v]),(0,r.jsx)("div",f({ref:c},{children:(0,r.jsx)(d.Z,{is:"paper-icon-button-light",className:"btnFilter autoSize",title:"Filter",icon:"material-icons filter_list"})}))},p=n(96398),m=n(98301),h=(n(82427),function(){return h=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},h.apply(this,arguments)}),y=function(e){var t=e.viewQuerySettings,n=e.getItemsHtml,a=(0,i.useRef)(null);(0,i.useEffect)((function(){var e,t=null===(e=a.current)||void 0===e?void 0:e.querySelector(".itemsContainer");t.innerHTML=n(),m.default.lazyChildren(t)}),[n]);var s="list"==t.imageType?"vertical-list":"vertical-wrap";return(0,r.jsx)("div",h({ref:a},{children:(0,r.jsx)(p.Z,{className:"itemsContainer ".concat(s," centered padded-left padded-right padded-right-withalphapicker")})}))},g=n(94994),S=function(){return S=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},S.apply(this,arguments)},b=function(e){var t=e.viewQuerySettings,n=e.setViewQuerySettings,a=e.itemsResult,s=void 0===a?{}:a,o=l.libraryPageSize(void 0),u=s.TotalRecordCount||0,c=t.StartIndex||0,f=u?c+1:0,v=o?Math.min(c+o,u):u,p=o>0&&o<u,m=(0,i.useRef)(null),h=(0,i.useCallback)((function(){if(o>0){var e=c+o;n((function(t){return S(S({},t),{StartIndex:e})}))}}),[o,n,c]),y=(0,i.useCallback)((function(){if(o>0){var e=Math.max(0,c-o);n((function(t){return S(S({},t),{StartIndex:e})}))}}),[o,n,c]);return(0,i.useEffect)((function(){var e,t,n=null===(e=m.current)||void 0===e?void 0:e.querySelector(".btnNextPage");n&&(n.disabled=c+o>=u,n.addEventListener("click",h));var r=null===(t=m.current)||void 0===t?void 0:t.querySelector(".btnPreviousPage");return r&&(r.disabled=!c,r.addEventListener("click",y)),function(){null==n||n.removeEventListener("click",h),null==r||r.removeEventListener("click",y)}}),[u,h,y,o,c]),(0,r.jsx)("div",S({ref:m},{children:(0,r.jsx)("div",S({className:"paging"},{children:(0,r.jsxs)("div",S({className:"listPaging",style:{display:"flex",alignItems:"center"}},{children:[(0,r.jsx)("span",{children:g.ZP.translate("ListPaging",f,v,u)}),p&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.Z,{is:"paper-icon-button-light",className:"btnPreviousPage autoSize",icon:"material-icons arrow_back"}),(0,r.jsx)(d.Z,{is:"paper-icon-button-light",className:"btnNextPage autoSize",icon:"material-icons arrow_forward"})]})]}))}))}))},w=function(){return w=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},w.apply(this,arguments)},I=function(e){var t=e.getVisibleViewSettings,a=e.viewQuerySettings,s=e.setViewQuerySettings,l=(0,i.useRef)(null),o=(0,i.useCallback)((function(){n.e(49906).then(n.bind(n,49906)).then((function(e){(new(0,e.default)).show({settings:a,visibleSettings:t(),setviewsettings:s})}))}),[t,a,s]);return(0,i.useEffect)((function(){var e,t=null===(e=l.current)||void 0===e?void 0:e.querySelector(".btnSelectView");return null==t||t.addEventListener("click",o),function(){null==t||t.removeEventListener("click",o)}}),[o]),(0,r.jsx)("div",w({ref:l},{children:(0,r.jsx)(d.Z,{is:"paper-icon-button-light",className:"btnSelectView autoSize",title:"ButtonSelectView",icon:"material-icons view_comfy"})}))},P=n(48957),x=function(){return x=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},x.apply(this,arguments)},j=function(e){var t=e.itemsResult,n=void 0===t?{}:t,a=e.topParentId,s=(0,i.useRef)(null),l=(0,i.useCallback)((function(){window.ApiClient.getItem(window.ApiClient.getCurrentUserId(),a).then((function(e){P.O.shuffle(e)}))}),[a]);return(0,i.useEffect)((function(){var e,t=null===(e=s.current)||void 0===e?void 0:e.querySelector(".btnShuffle");t&&t.addEventListener("click",l)}),[n.TotalRecordCount,l]),(0,r.jsx)("div",x({ref:s},{children:(0,r.jsx)(d.Z,{is:"paper-icon-button-light",className:"btnShuffle autoSize",title:"Shuffle",icon:"material-icons shuffle"})}))},T=function(){return T=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},T.apply(this,arguments)},O=function(e){var t=e.getSortMenuOptions,a=e.viewQuerySettings,s=e.setViewQuerySettings,l=(0,i.useRef)(null),o=(0,i.useCallback)((function(){n.e(82059).then(n.bind(n,82059)).then((function(e){(new(0,e.default)).show({settings:a,sortOptions:t(),setSortValues:s})}))}),[t,a,s]);return(0,i.useEffect)((function(){var e,t=null===(e=l.current)||void 0===e?void 0:e.querySelector(".btnSort");return null==t||t.addEventListener("click",o),function(){null==t||t.removeEventListener("click",o)}}),[o]),(0,r.jsx)("div",T({ref:l},{children:(0,r.jsx)(d.Z,{is:"paper-icon-button-light",className:"btnSort autoSize",title:"Sort",icon:"material-icons sort_by_alpha"})}))},N=function(){return N=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},N.apply(this,arguments)},k=function(){var e=(0,i.useRef)(null),t=(0,i.useCallback)((function(){n.e(19449).then(n.bind(n,19449)).then((function(e){var t=e.default,n=window.ApiClient.serverId();(new t).show({items:[],serverId:n})}))}),[]);return(0,i.useEffect)((function(){var n,r=null===(n=e.current)||void 0===n?void 0:n.querySelector(".btnNewCollection");r&&r.addEventListener("click",t)}),[t]),(0,r.jsx)("div",N({ref:e},{children:(0,r.jsx)(d.Z,{is:"paper-icon-button-light",className:"btnNewCollection autoSize",title:"Add",icon:"material-icons add"})}))},C=n(18613),R=n(63873),E=n(61570),L=function(){return L=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},L.apply(this,arguments)},H=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,i=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(e){a={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(a)throw a.error}}return s},V=function(e){var t=[a.hEf.BasicSyncInfo,a.hEf.MediaSourceCount];return"primary"===e.imageType&&t.push(a.hEf.PrimaryImageAspectRatio),t.join(",")},Z=function(){return["showTitle","showYear","imageType","cardLayout"]},Q=function(){return{}},F=function(){return["IsUnplayed","IsPlayed","IsFavorite","IsResumable","VideoType","HasSubtitles","HasTrailer","HasSpecialFeature","HasThemeSong","HasThemeVideo"]},M=function(){return[{name:g.ZP.translate("Name"),value:"SortName,ProductionYear"},{name:g.ZP.translate("OptionRandom"),value:"Random"},{name:g.ZP.translate("OptionImdbRating"),value:"CommunityRating,SortName,ProductionYear"},{name:g.ZP.translate("OptionCriticRating"),value:"CriticRating,SortName,ProductionYear"},{name:g.ZP.translate("OptionDateAdded"),value:"DateCreated,SortName,ProductionYear"},{name:g.ZP.translate("OptionDatePlayed"),value:"DatePlayed,SortName,ProductionYear"},{name:g.ZP.translate("OptionParentalRating"),value:"OfficialRating,SortName,ProductionYear"},{name:g.ZP.translate("OptionPlayCount"),value:"PlayCount,SortName,ProductionYear"},{name:g.ZP.translate("OptionReleaseDate"),value:"PremiereDate,SortName,ProductionYear"},{name:g.ZP.translate("Runtime"),value:"Runtime,SortName,ProductionYear"}]},D={showTitle:!0,showYear:!0,imageType:"primary",viewType:"",cardLayout:!1,SortBy:"SortName",SortOrder:"Ascending",IsPlayed:!1,IsUnplayed:!1,IsFavorite:!1,IsResumable:!1,Is4K:null,IsHD:null,IsSD:null,Is3D:null,VideoTypes:"",SeriesStatus:"",HasSubtitles:null,HasTrailer:null,HasSpecialFeature:null,HasThemeSong:null,HasThemeVideo:null,GenreIds:"",StartIndex:0},B=function(e){var t=e.topParentId,o=e.isBtnShuffleEnabled,u=void 0!==o&&o,d=e.isBtnFilterEnabled,f=void 0===d||d,p=e.isBtnNewCollectionEnabled,m=void 0!==p&&p,h=e.isAlphaPickerEnabled,S=void 0===h||h,w=e.getBasekey,P=e.getItemTypes,x=e.getNoItemsMessage,T=(0,i.useCallback)((function(){return"".concat(t," - ").concat(w())}),[w,t]),N=H((0,i.useState)(!1),2),B=N[0],Y=N[1],A=H(function(e,t){var n=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,i=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(e){a={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(a)throw a.error}}return s}((0,i.useState)((function(){var n=localStorage.getItem(e);return null!=n?JSON.parse(n):"function"==typeof t?t():t})),2),r=n[0],a=n[1];return(0,i.useEffect)((function(){localStorage.setItem(e,JSON.stringify(r))}),[e,r]),[r,a]}("viewQuerySettings - ".concat(T()),D),2),z=A[0],_=A[1],q=H((0,i.useState)({}),2),U=q[0],W=q[1],G=(0,i.useRef)(null),K=(0,i.useCallback)((function(){var e=P().join(",");return"Movie"===e||"BoxSet"===e?"movies":null}),[P]),J=(0,i.useCallback)((function(){var e,t,n,r;"banner"===z.imageType?e="banner":"disc"===z.imageType?(e="square",n=!0):"logo"===z.imageType?(e="backdrop",r=!0):"thumb"===z.imageType?(e="backdrop",t=!0):e="autoVertical";var a={shape:e,showTitle:z.showTitle,showYear:z.showYear,cardLayout:z.cardLayout,centerText:!0,context:K(),coverImage:!0,preferThumb:t,preferDisc:n,preferLogo:r,overlayPlayButton:!1,overlayMoreButton:!0,overlayText:!z.showTitle};return a.items=U.Items||[],a}),[K,U.Items,z.cardLayout,z.imageType,z.showTitle,z.showYear]),X=(0,i.useCallback)((function(){var e,t="";return t="list"===z.imageType?R.Z.getListViewHtml({items:U.Items||[],context:K()}):E.default.getCardsHtml(U.Items||[],J()),(null===(e=U.Items)||void 0===e?void 0:e.length)||(t+='<div class="noItemsMessage centerMessage">',t+="<h1>"+g.ZP.translate("MessageNothingHere")+"</h1>",t+="<p>"+g.ZP.translate(x())+"</p>",t+="</div>"),t}),[J,K,U.Items,x,z.imageType]),$=(0,i.useCallback)((function(){var e,n=function(e){var t=[];return e.IsPlayed&&t.push(a.yrR.IsPlayed),e.IsUnplayed&&t.push(a.yrR.IsUnplayed),e.IsFavorite&&t.push(a.yrR.IsFavorite),e.IsResumable&&t.push(a.yrR.IsResumable),t}(z);return z.IsHD&&(e=!0),z.IsSD&&(e=!1),{SortBy:z.SortBy,SortOrder:z.SortOrder,IncludeItemTypes:P().join(","),Recursive:!0,Fields:V(z),ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb,Disc,Logo",Limit:l.libraryPageSize(void 0)||void 0,IsFavorite:"favorites"===w()||null,VideoTypes:z.VideoTypes,GenreIds:z.GenreIds,Is4K:!!z.Is4K||null,IsHD:e,Is3D:!!z.Is3D||null,HasSubtitles:!!z.HasSubtitles||null,HasTrailer:!!z.HasTrailer||null,HasSpecialFeature:!!z.HasSpecialFeature||null,HasThemeSong:!!z.HasThemeSong||null,HasThemeVideo:!!z.HasThemeVideo||null,Filters:n.length?n.join(","):null,StartIndex:z.StartIndex,NameLessThan:z.NameLessThan,NameStartsWith:z.NameStartsWith,ParentId:t}}),[z,P,w,t]),ee=(0,i.useCallback)((function(){s.ZP.show();var e=C.Z.getApiClient(window.ApiClient.serverId());return e.getItems(e.getCurrentUserId(),L({},$()))}),[$]),te=(0,i.useCallback)((function(){var e=G.current;e?(Y(!1),ee().then((function(t){W(t),window.scrollTo(0,0),Promise.resolve().then(n.bind(n,87680)).then((function(t){t.default.autoFocus(e)})),s.ZP.hide(),Y(!0)}))):console.error("Unexpected null reference")}),[ee]);return(0,i.useEffect)((function(){te()}),[te]),(0,r.jsxs)("div",L({ref:G},{children:[(0,r.jsxs)("div",L({className:"flex align-items-center justify-content-center flex-wrap-wrap padded-top padded-left padded-right padded-bottom focuscontainer-x"},{children:[(0,r.jsx)(b,{itemsResult:U,viewQuerySettings:z,setViewQuerySettings:_}),u&&(0,r.jsx)(j,{itemsResult:U,topParentId:t}),(0,r.jsx)(I,{getVisibleViewSettings:Z,viewQuerySettings:z,setViewQuerySettings:_}),(0,r.jsx)(O,{getSortMenuOptions:M,viewQuerySettings:z,setViewQuerySettings:_}),f&&(0,r.jsx)(v,{topParentId:t,getItemTypes:P,getVisibleFilters:F,getFilterMenuOptions:Q,viewQuerySettings:z,setViewQuerySettings:_}),m&&(0,r.jsx)(k,{})]})),S&&(0,r.jsx)(c,{viewQuerySettings:z,setViewQuerySettings:_}),B&&(0,r.jsx)(y,{viewQuerySettings:z,getItemsHtml:X}),(0,r.jsx)("div",L({className:"flex align-items-center justify-content-center flex-wrap-wrap padded-top padded-left padded-right padded-bottom focuscontainer-x"},{children:(0,r.jsx)(b,{itemsResult:U,viewQuerySettings:z,setViewQuerySettings:_})}))]}))}},43771:function(e,t,n){var r=n(24246),a=n(94994),i=function(e){var t=e.is,n=e.id,r=e.className,a=e.title,i=e.icon,s=e.dataIndex,l=e.dataTag,o=e.dataProfileid;return{__html:'<button\n        is="'.concat(t,'"\n        type="button"\n        ').concat(n,'\n        class="').concat(r,'"\n        ').concat(a,"\n        ").concat(s,"\n        ").concat(l,"\n        ").concat(o,'\n    >\n        <span class="material-icons ').concat(i,'" aria-hidden="true"></span>\n    </button>')}};t.Z=function(e){var t=e.is,n=e.id,s=e.className,l=e.title,o=e.icon,u=e.dataIndex,c=e.dataTag,d=e.dataProfileid;return(0,r.jsx)("div",{dangerouslySetInnerHTML:i({is:t,id:n?'id="'.concat(n,'"'):"",className:s,title:l?'title="'.concat(a.ZP.translate(l),'"'):"",icon:o,dataIndex:u?'data-index="'.concat(u,'"'):"",dataTag:c?'data-tag="'.concat(c,'"'):"",dataProfileid:d?'data-profileid="'.concat(d,'"'):""})})}},96398:function(e,t,n){var r=n(24246),a=function(e){var t=e.className,n=e.dataId;return{__html:'<div\n        is="emby-itemscontainer"\n        class="'.concat(t,'"\n        ').concat(n,"\n    >\n    </div>")}};t.Z=function(e){var t=e.className,n=e.dataId;return(0,r.jsx)("div",{dangerouslySetInnerHTML:a({className:t,dataId:n?'data-id="'.concat(n,'"'):""})})}}}]);