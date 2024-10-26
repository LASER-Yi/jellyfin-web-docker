"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[27962,2217,32762],{52824:function(e,n,t){t.r(n);var r=t(62540),a=t(63696),o=t(9055),u=t(5898),i=t(89166),l=t(46782),c=t(65242),s=(t(79845),t(10353),t(41765),function(e,n,t,r){return new(t||(t=Promise))((function(a,o){function u(e){try{l(r.next(e))}catch(e){o(e)}}function i(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(u,i)}l((r=r.apply(e,n||[])).next())}))}),f=function(e,n){var t,r,a,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]},u=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return u.next=i(0),u.throw=i(1),u.return=i(2),"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function i(i){return function(l){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;u&&(u=0,i[0]&&(o=0)),o;)try{if(t=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,r=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=n.call(e,o)}catch(e){i=[6,e],r=0}finally{t=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}};n.default=function(){var e,n=function(e,n){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,a,o=t.call(e),u=[];try{for(;(void 0===n||n-- >0)&&!(r=o.next()).done;)u.push(r.value)}catch(e){a={error:e}}finally{try{r&&!r.done&&(t=o.return)&&t.call(o)}finally{if(a)throw a.error}}return u}((0,o.ok)(),1)[0],d=parseInt(null!==(e=n.get("tab"))&&void 0!==e?e:"0",10),b=(0,a.useMemo)((function(){return s(void 0,void 0,void 0,(function(){return f(this,(function(e){switch(e.label){case 0:return[4,Promise.all([t.e(45642),t.e(45568),t.e(73233),t.e(47027)]).then(t.bind(t,73233))];case 1:return[2,e.sent().default]}}))}))}),[]),v=(0,a.useMemo)((function(){return t.e(25091).then(t.bind(t,25091))}),[]),h=(0,a.useRef)(),p=(0,a.useMemo)((function(){return[]}),[]),m=(0,a.useRef)(null),y=function(){return[{name:u.Ay.translate("Home")},{name:u.Ay.translate("Favorites")}]},k=function(){var e;return null===(e=m.current)||void 0===e?void 0:e.querySelectorAll(".tabContent")},w=(0,a.useCallback)((function(e){if(null==e)throw new Error("index cannot be null");var n="";switch(e){case 0:n="hometab";break;case 1:n="favorites"}return t(7062)("./".concat(n)).then((function(n){var t,r=n.default,a=p[e];return a||(a=new r(null===(t=m.current)||void 0===t?void 0:t.querySelector(".tabContent[data-index='"+e+"']"),null),p[e]=a),a}))}),[p]),x=(0,a.useCallback)((function(e,n){w(e).then((function(e){var t=!e.refreshed;e.onResume({autoFocus:null==n&&l.A.tv,refresh:t}),e.refreshed=!0,h.current=e})).catch((function(e){console.error("[Home] failed to get tab controller",e)}))}),[w]),g=(0,a.useCallback)((function(e){var n=parseInt(e.detail.selectedTabIndex,10),t=e.detail.previousIndex,r=null==t?null:p[t];(null==r?void 0:r.onPause)&&r.onPause(),x(n,t)}),[x,p]),C=(0,a.useCallback)((function(){return s(void 0,void 0,void 0,(function(){return f(this,(function(e){switch(e.label){case 0:return[4,v];case 1:return e.sent().setTabs(m.current,d,y,k,null,g,!1),[2]}}))}))}),[d,v,g]),P=(0,a.useCallback)((function(){return s(void 0,void 0,void 0,(function(){var e;return f(this,(function(n){switch(n.label){case 0:return s(void 0,void 0,void 0,(function(){return f(this,(function(e){switch(e.label){case 0:return[4,b];case 1:return e.sent().setTitle(null),[2]}}))})),(0,i.gJ)(),(e=h.current)?[3,2]:[4,v];case 1:return n.sent().selectedTabIndex(d),[3,3];case 2:(null==e?void 0:e.onResume)&&e.onResume({}),n.label=3;case 3:return document.querySelector(".skinHeader").classList.add("noHomeButtonHeader"),[2]}}))}))}),[d,v]),T=(0,a.useCallback)((function(){var e=h.current;(null==e?void 0:e.onPause)&&e.onPause(),document.querySelector(".skinHeader").classList.remove("noHomeButtonHeader")}),[]);return(0,a.useEffect)((function(){return C(),P(),function(){T()}}),[T,P,C]),(0,r.jsx)("div",{ref:m,children:(0,r.jsxs)(c.A,{id:"indexPage",className:"mainAnimatedPage homePage libraryPage allLibraryPage backdropPage pageWithAbsoluteTabs withTabs",isBackButtonEnabled:!1,backDropType:"movie,series,book",children:[(0,r.jsx)("div",{className:"tabContent pageTabContent",id:"homeTab","data-index":"0",children:(0,r.jsx)("div",{className:"sections"})}),(0,r.jsx)("div",{className:"tabContent pageTabContent",id:"favoritesTab","data-index":"1",children:(0,r.jsx)("div",{className:"sections"})})]})})}}}]);