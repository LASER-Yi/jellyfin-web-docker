"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4544],{29090:function(e,t,n){n.r(t),n(63238),n(61418),n(99785);var i=n(28978),s=n(56705),o=n(27515),r=n(43462),a=(n(32420),n(53913));function u(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var c=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.view=t,this.params=n,this.apiClient=a.Z.currentApiClient(),this.sectionsContainer=t.querySelector(".sections"),t.querySelector(".sections").addEventListener("settingschange",l.bind(this))}var t,n;return t=e,(n=[{key:"onResume",value:function(e){if(this.sectionsRendered){var t=this.sectionsContainer;return t?r.ZP.resume(t,e):Promise.resolve()}s.ZP.show();var n=this.view,a=this.apiClient;return this.destroyHomeSections(),this.sectionsRendered=!0,a.getCurrentUser().then((function(t){return r.ZP.loadSections(n.querySelector(".sections"),a,t,i).then((function(){e.autoFocus&&o.Z.autoFocus(n),s.ZP.hide()}))}))}},{key:"onPause",value:function(){var e=this.sectionsContainer;e&&r.ZP.pause(e)}},{key:"destroy",value:function(){this.view=null,this.params=null,this.apiClient=null,this.destroyHomeSections(),this.sectionsContainer=null}},{key:"destroyHomeSections",value:function(){var e=this.sectionsContainer;e&&r.ZP.destroySections(e)}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(){this.sectionsRendered=!1,this.paused||this.onResume({refresh:!0})}t.default=c}}]);