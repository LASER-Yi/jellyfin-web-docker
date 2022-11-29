(self.webpackChunk=self.webpackChunk||[]).push([[7058,7763],{57216:function(e,t,n){"use strict";n.r(t),n.d(t,{PdfPlayer:function(){return v}}),n(63238),n(61418),n(32081),n(95623),n(61514),n(95289),n(19068),n(87211),n(25901),n(92189),n(95163),n(99785),n(91047),n(5769),n(17460),n(14078);var i=n(53913),o=n(6594),r=n(74783),a=n(1115),s=n(83094),u=n(6383),l=(n(98986),n(21865),n(47005)),c=n(12986);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function h(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==d(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t);if("object"!==d(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(i.key,"string"),"symbol"===d(o)?o:String(o)),i)}var o}var v=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name="PDF Player",this.type="mediaplayer",this.id="pdfplayer",this.priority=1,this.onDialogClosed=this.onDialogClosed.bind(this),this.onWindowKeyUp=this.onWindowKeyUp.bind(this),this.onTouchStart=this.onTouchStart.bind(this)}var t,n;return t=e,(n=[{key:"play",value:function(e){this.progress=0,this.loaded=!1,this.cancellationToken=!1,this.pages={},o.ZP.show();var t=this.createMediaElement();return this.setCurrentSrc(t,e)}},{key:"stop",value:function(){this.unbindEvents();var e=this.mediaElement;e&&(a.default.close(e),this.mediaElement=null),o.ZP.hide(),this.cancellationToken=!0}},{key:"currentItem",value:function(){return this.item}},{key:"currentTime",value:function(){return this.progress}},{key:"duration",value:function(){return this.book?this.book.numPages:0}},{key:"volume",value:function(){return 100}},{key:"isMuted",value:function(){return!1}},{key:"paused",value:function(){return!1}},{key:"seekable",value:function(){return!0}},{key:"onWindowKeyUp",value:function(e){var t=r.ZP.getKeyName(e);if(this.loaded)switch(t){case"l":case"ArrowRight":case"Right":this.next();break;case"j":case"ArrowLeft":case"Left":this.previous();break;case"Escape":this.stop()}}},{key:"onTouchStart",value:function(e){this.loaded&&e.touches&&0!==e.touches.length&&(e.touches[0].clientX<s.ZP.getWindowSize().innerWidth/2?this.previous():this.next())}},{key:"onDialogClosed",value:function(){this.stop()}},{key:"bindMediaElementEvents",value:function(){var e=this.mediaElement;e.addEventListener("close",this.onDialogClosed,{once:!0}),e.querySelector(".btnExit").addEventListener("click",this.onDialogClosed,{once:!0})}},{key:"bindEvents",value:function(){this.bindMediaElementEvents(),document.addEventListener("keyup",this.onWindowKeyUp),document.addEventListener("touchstart",this.onTouchStart)}},{key:"unbindMediaElementEvents",value:function(){var e=this.mediaElement;e.removeEventListener("close",this.onDialogClosed),e.querySelector(".btnExit").removeEventListener("click",this.onDialogClosed)}},{key:"unbindEvents",value:function(){this.mediaElement&&this.unbindMediaElementEvents(),document.removeEventListener("keyup",this.onWindowKeyUp),document.removeEventListener("touchstart",this.onTouchStart)}},{key:"createMediaElement",value:function(){var e=this.mediaElement;return e||((e=document.getElementById("pdfPlayer"))||((e=a.default.createDialog({exitAnimationDuration:400,size:"fullscreen",autoFocus:!1,scrollY:!1,exitAnimation:"fadeout",removeOnClose:!0})).id="pdfPlayer",e.innerHTML='<canvas id="canvas"></canvas><div class="actionButtons"><button is="paper-icon-button-light" class="autoSize btnExit" tabindex="-1"><i class="material-icons actionButtonIcon close"></i></button></div>',a.default.open(e)),this.mediaElement=e,e)}},{key:"setCurrentSrc",value:function(e,t){var n=this,o=t.items[0];this.item=o,this.streamInfo={started:!0,ended:!1,mediaSource:{Id:o.Id}};var r=o.ServerId,a=i.Z.getApiClient(r);return new Promise((function(e,i){var r=a.getItemDownloadUrl(o.Id);n.bindEvents(),c.GlobalWorkerOptions.workerSrc=u.appRouter.baseUrl()+"/libraries/pdf.worker.js",(0,c.getDocument)(r).promise.then((function(i){if(!n.cancellationToken){n.book=i,n.loaded=!0;var o=t.startPositionTicks/1e4;return 0!==o?(n.loadPage(o),n.progress=o):n.loadPage(1),e()}}))}))}},{key:"next",value:function(){this.progress!==this.duration()-1&&(this.loadPage(this.progress+2),this.progress=this.progress+1)}},{key:"previous",value:function(){0!==this.progress&&(this.loadPage(this.progress),this.progress=this.progress-1)}},{key:"replaceCanvas",value:function(e){var t=document.getElementById("canvas");e.id="canvas",t.parentNode.replaceChild(e,t)}},{key:"loadPage",value:function(e){for(var t="page",n=[t+e],i=1;i<=2;i++)e-i>0&&n.push(t+(e-i)),e+i<this.duration()&&n.push(t+(e+i));for(var o=0,r=n;o<r.length;o++){var a=r[o];this.pages[a]||(this.pages[a]=document.createElement("canvas"),this.renderPage(this.pages[a],parseInt(a.substr(4))))}for(var s in this.replaceCanvas(this.pages[t+e],e),this.pages)n.includes(s)||delete this.pages[s]}},{key:"renderPage",value:function(e,t){var n=this;this.book.getPage(t).then((function(t){l.Events.trigger(n,"timeupdate");var i=t.getViewport({scale:1}),r=e.getContext("2d"),a=s.ZP.getWindowSize().innerWidth/i.width,u=s.ZP.getWindowSize().innerHeight/i.height,c=Math.min(u,a),d=t.getViewport({scale:c});e.width=d.width,e.height=d.height;var h={canvasContext:r,viewport:d};t.render(h).promise.then((function(){o.ZP.hide()}))}))}},{key:"canPlayMediaType",value:function(e){return"book"===(e||"").toLowerCase()}},{key:"canPlayItem",value:function(e){return!(!e.Path||!e.Path.endsWith("pdf"))}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.default=v},77237:function(e,t,n){"use strict";var i=n(93476),o=n.n(i)()((function(e){return e[1]}));o.push([e.id,"#pdfPlayer{position:relative;height:100%;width:100%;overflow:none;z-index:100;background:#fff}#canvas{display:block;margin:auto}.actionButtons{right:.5vh;top:.5vh;z-index:1002;position:absolute}.actionButtonIcon{color:#000;opacity:.7}",""]),t.Z=o},98986:function(e,t,n){"use strict";n.r(t);var i=n(1892),o=n.n(i),r=n(77237);o()(r.Z,{insert:"head",singleton:!1}),t.default=r.Z.locals||{}},2754:function(){},56391:function(){},5001:function(){},35496:function(){},51566:function(){}}]);