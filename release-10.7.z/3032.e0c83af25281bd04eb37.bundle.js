(self.webpackChunk=self.webpackChunk||[]).push([[3032],{13032:function(e,t){"function"==typeof SubtitlesOctopusOnLoad&&SubtitlesOctopusOnLoad(),e.exports&&(e.exports=function(e){var t=!1;try{if("object"==typeof WebAssembly&&"function"==typeof WebAssembly.instantiate){const e=new WebAssembly.Module(Uint8Array.of(0,97,115,109,1,0,0,0));e instanceof WebAssembly.Module&&(t=new WebAssembly.Instance(e)instanceof WebAssembly.Instance)}}catch(e){}console.log("WebAssembly support detected: "+(t?"yes":"no"));var r=this;function a(e,t){for(var a=[],n=0,s=r.renderedItems.length;n<s;n++)((c=r.renderedItems[n]).emptyFinish<0||c.emptyFinish>=e)&&a.push(c);if(t&&a.length>0&&e<a[0].eventStart)if(a[0].eventStart-e>60)console.info("seeked back too far, cleaning prerender buffer"),a=[];else{console.info("seeked backwards, need to free up some buffer");var i=0,o=.3*r.renderAhead,d=[];for(n=0,s=a.length;n<s;n++){var c;if((i+=(c=a[n]).size)>=o)break;d.push(c)}a=d}var h=a.length<r.renderedItems;return r.renderedItems=a,h}function n(e,t){if(r.renderAhead&&!(r.renderAhead<=0)&&(!r.oneshotState.renderRequested||t)){if(void 0===e){if(!r.video)return;e=r.video.currentTime+r.timeOffset}for(var a=0,n=0,s=r.renderedItems.length;n<s;n++){var i=r.renderedItems[n];if(i.emptyFinish<0)return void console.info("oneshot already reached end-of-events");if(e>=i.eventStart&&e<i.emptyFinish)return void console.debug("not requesting a render for "+e+" as event already covering it exists (start="+i.eventStart+", empty="+i.emptyFinish+")");a+=i.size}a<=r.renderAhead&&(lastRendered=e-(t?0:.001),r.oneshotState.renderRequested?(r.workerActive&&console.info("worker busy, requesting to seek"),r.oneshotState.requestNextTimestamp=lastRendered):(r.oneshotState.renderRequested=!0,r.worker.postMessage({target:"oneshot-render",lastRendered:lastRendered,renderNow:t,iteration:r.oneshotState.iteration})))}}function s(e,t){var a=e.eventFinish<t;if(r.oneshotState.eventStart!=e.eventStart||r.oneshotState.eventOver!=a){r.oneshotState.eventStart=e.eventStart,r.oneshotState.eventOver=a;var n=performance.now();if(e.viewport.width==r.canvas.width&&e.viewport.height==r.canvas.height||(r.canvas.width=e.viewport.width,r.canvas.height=e.viewport.height),r.ctx.clearRect(0,0,r.canvas.width,r.canvas.height),!a)for(var s=0;s<e.items.length;s++){var i=e.items[s];r.bufferCanvas.width=i.w,r.bufferCanvas.height=i.h,r.bufferCanvasCtx.putImageData(i.image,0,0),r.ctx.drawImage(r.bufferCanvas,i.x,i.y)}if(r.debug){var o=Math.round(performance.now()-n);console.log("render: "+Math.round(e.spentTime-e.blendTime)+" ms, blend: "+Math.round(e.blendTime)+" ms, draw: "+o+" ms")}}}function i(){if(window.requestAnimationFrame(i),r.video){for(var e=r.video.currentTime+r.timeOffset,t=-1,o=!1,d=!1,c=0,h=r.renderedItems.length;c<h;c++){var v=r.renderedItems[c];if(!o&&v.eventStart<=e&&(v.emptyFinish<0||v.emptyFinish>e))s(v,e),o=!0,t=v.emptyFinish;else if(t>=0){if(!(v.eventStart-t<.01))break;t=v.emptyFinish,d=v.animated}}o?a(e)&&t>=0&&n(t,d):Math.abs(r.oneshotState.requestNextTimestamp-e)>.01&&(a(e),n(e,!0))}}function o(){var e=r.renderFramesData,t=performance.now();r.ctx.clearRect(0,0,r.canvas.width,r.canvas.height);for(var a=0;a<e.canvases.length;a++){var n=e.canvases[a];r.bufferCanvas.width=n.w,r.bufferCanvas.height=n.h;var s=new Uint8ClampedArray(n.buffer);if(r.hasAlphaBug)for(var i=3;i<s.length;i+=4)s[i]=s[i]>=1?s[i]:1;var o=new ImageData(s,n.w,n.h);r.bufferCanvasCtx.putImageData(o,0,0),r.ctx.drawImage(r.bufferCanvas,n.x,n.y)}if(r.debug){var d=Math.round(performance.now()-t),c=e.blendTime;void 0!==c?console.log("render: "+Math.round(e.spentTime-c)+" ms, blend: "+Math.round(c)+" ms, draw: "+d+" ms; TOTAL="+Math.round(e.spentTime+d)+" ms"):console.log(Math.round(e.spentTime)+" ms (+ "+d+" ms draw)"),r.renderStart=performance.now()}}function d(){var e=r.renderFramesData,t=performance.now();r.ctx.clearRect(0,0,r.canvas.width,r.canvas.height);for(var a=0;a<e.bitmaps.length;a++){var n=e.bitmaps[a];r.ctx.drawImage(n.bitmap,n.x,n.y)}if(r.debug){var s=Math.round(performance.now()-t);console.log(e.bitmaps.length+" bitmaps, libass: "+Math.round(e.libassTime)+"ms, decode: "+Math.round(e.decodeTime)+"ms, draw: "+s+"ms"),r.renderStart=performance.now()}}r.canvas=e.canvas,r.renderMode=e.renderMode||(e.lossyRender?"fast":e.blendRender?"blend":"normal"),r.dropAllAnimations=e.dropAllAnimations||!1,r.libassMemoryLimit=e.libassMemoryLimit||0,r.libassGlyphLimit=e.libassGlyphLimit||0,r.targetFps=e.targetFps||30,r.prescaleTradeoff=e.prescaleTradeoff||null,r.softHeightLimit=e.softHeightLimit||1080,r.hardHeightLimit=e.hardHeightLimit||2160,r.resizeVariation=e.resizeVariation||.2,r.renderAhead=e.renderAhead||0,r.isOurCanvas=!1,r.video=e.video,r.canvasParent=null,r.fonts=e.fonts||[],r.availableFonts=e.availableFonts||[],r.onReadyEvent=e.onReady,r.workerUrl=t?e.workerUrl||"subtitles-octopus-worker.js":e.legacyWorkerUrl||"subtitles-octopus-worker-legacy.js",r.subUrl=e.subUrl,r.subContent=e.subContent||null,r.onErrorEvent=e.onError,r.debug=e.debug||!1,r.lastRenderTime=0,r.pixelRatio=window.devicePixelRatio||1,r.timeOffset=e.timeOffset||0,r.renderedItems=[],r.renderAhead=1024*r.renderAhead*1024*.9,r.oneshotState={eventStart:null,eventOver:!1,iteration:0,renderRequested:!1,requestNextTimestamp:-1,prevWidth:null,prevHeight:null},r.hasAlphaBug=!1,function(){if("function"==typeof ImageData.prototype.constructor)try{return void new window.ImageData(new Uint8ClampedArray([0,0,0,0]),1,1)}catch(e){console.log("detected that ImageData is not constructable despite browser saying so")}var e=document.createElement("canvas").getContext("2d");window.ImageData=function(){var t=0;if(arguments[0]instanceof Uint8ClampedArray)var r=arguments[t++];var a=arguments[t++],n=arguments[t],s=e.createImageData(a,n);return r&&s.data.set(r),s}}(),r.workerError=function(e){if(console.error("Worker error: ",e),r.onErrorEvent&&r.onErrorEvent(e),!r.debug)throw r.dispose(),new Error("Worker error: "+e)},r.init=function(){window.Worker?(r.worker||(r.worker=new Worker(r.workerUrl),r.worker.onmessage=r.onWorkerMessage,r.worker.onerror=r.workerError),r.workerActive=!1,r.createCanvas(),r.setVideo(e.video),r.setSubUrl(e.subUrl),r.worker.postMessage({target:"worker-init",width:r.canvas.width,height:r.canvas.height,URL:document.URL,currentScript:r.workerUrl,preMain:!0,renderMode:r.renderMode,subUrl:r.subUrl,subContent:r.subContent,fonts:r.fonts,availableFonts:r.availableFonts,debug:r.debug,targetFps:r.targetFps,libassMemoryLimit:r.libassMemoryLimit,libassGlyphLimit:r.libassGlyphLimit,renderOnDemand:r.renderAhead>0,dropAllAnimations:r.dropAllAnimations})):r.workerError("worker not supported")},r.createCanvas=function(){r.canvas||(r.video?(r.isOurCanvas=!0,r.canvas=document.createElement("canvas"),r.canvas.className="libassjs-canvas",r.canvas.style.display="none",r.canvasParent=document.createElement("div"),r.canvasParent.className="libassjs-canvas-parent",r.canvasParent.appendChild(r.canvas),r.video.nextSibling?r.video.parentNode.insertBefore(r.canvasParent,r.video.nextSibling):r.video.parentNode.appendChild(r.canvasParent)):r.canvas||r.workerError("Don't know where to render: you should give video or canvas in options.")),r.ctx=r.canvas.getContext("2d"),r.bufferCanvas=document.createElement("canvas"),r.bufferCanvasCtx=r.bufferCanvas.getContext("2d"),r.bufferCanvas.width=1,r.bufferCanvas.height=1;var e=new Uint8ClampedArray([0,255,0,0]),t=new ImageData(e,1,1);r.bufferCanvasCtx.clearRect(0,0,1,1),r.ctx.clearRect(0,0,1,1);var a=r.ctx.getImageData(0,0,1,1).data;r.bufferCanvasCtx.putImageData(t,0,0),r.ctx.drawImage(r.bufferCanvas,0,0);var n=r.ctx.getImageData(0,0,1,1).data;r.hasAlphaBug=a[1]!=n[1],r.hasAlphaBug&&console.log("Detected a browser having issue with transparent pixels, applying workaround")},r.setVideo=function(e){if(r.video=e,r.video){var t=function(){r.setCurrentTime(e.currentTime+r.timeOffset)};r.video.addEventListener("timeupdate",t,!1),r.video.addEventListener("playing",(function(){r.setIsPaused(!1,e.currentTime+r.timeOffset)}),!1),r.video.addEventListener("pause",(function(){r.setIsPaused(!0,e.currentTime+r.timeOffset)}),!1),r.video.addEventListener("seeking",(function(){r.video.removeEventListener("timeupdate",t)}),!1),r.video.addEventListener("seeked",(function(){r.video.addEventListener("timeupdate",t,!1),r.setCurrentTime(e.currentTime+r.timeOffset),r.renderAhead>0&&a(e.currentTime+r.timeOffset,!0)}),!1),r.video.addEventListener("ratechange",(function(){r.setRate(e.playbackRate)}),!1),r.video.addEventListener("timeupdate",(function(){r.setCurrentTime(e.currentTime+r.timeOffset)}),!1),r.video.addEventListener("waiting",(function(){r.setIsPaused(!0,e.currentTime+r.timeOffset)}),!1),document.addEventListener("fullscreenchange",r.resizeWithTimeout,!1),document.addEventListener("mozfullscreenchange",r.resizeWithTimeout,!1),document.addEventListener("webkitfullscreenchange",r.resizeWithTimeout,!1),document.addEventListener("msfullscreenchange",r.resizeWithTimeout,!1),window.addEventListener("resize",r.resizeWithTimeout,!1),"undefined"!=typeof ResizeObserver&&(r.ro=new ResizeObserver(r.resizeWithTimeout),r.ro.observe(r.video)),r.video.videoWidth>0?r.resize():r.video.addEventListener("loadedmetadata",(function(e){e.target.removeEventListener(e.type,arguments.callee),r.resize()}),!1)}},r.getVideoPosition=function(){var e=r.video.videoWidth/r.video.videoHeight,t=r.video.offsetWidth,a=r.video.offsetHeight,n=t,s=a;return t/a>e?n=Math.floor(a*e):s=Math.floor(t/e),{width:n,height:s,x:(t-n)/2,y:(a-s)/2}},r.setSubUrl=function(e){r.subUrl=e},r.resetRenderAheadCache=function(e){if(r.renderAhead>0){var t=[];if(e&&r.oneshotState.prevHeight&&r.oneshotState.prevWidth){if(r.oneshotState.prevHeight==r.canvas.height&&r.oneshotState.prevWidth==r.canvas.width)return;var a=10,s=.3*r.renderAhead;r.canvas.height>=r.oneshotState.prevHeight*(1-r.resizeVariation)&&r.canvas.height<=r.oneshotState.prevHeight*(1+r.resizeVariation)&&r.canvas.width>=r.oneshotState.prevWidth*(1-r.resizeVariation)&&r.canvas.width<=r.oneshotState.prevWidth*(1+r.resizeVariation)&&(console.debug("viewport changes are small, leaving more of prerendered buffer"),a=30,s=.5*r.renderAhead);for(var o=r.video.currentTime+r.timeOffset+a,d=0,c=0;c<r.renderedItems.length;c++){var h=r.renderedItems[c];if(h.emptyFinish<0||h.emptyFinish>=o)break;if((d+=h.size)>=s)break;t.push(h)}}console.info("resetting prerender cache"),r.renderedItems=t,r.oneshotState.eventStart=null,r.oneshotState.iteration++,r.oneshotState.renderRequested=!1,r.oneshotState.prevHeight=r.canvas.height,r.oneshotState.prevWidth=r.canvas.width,window.requestAnimationFrame(i),n(void 0,!0)}},r.renderFrameData=null,r.workerActive=!1,r.frameId=0,r.onWorkerMessage=function(e){r.workerActive||(r.workerActive=!0,r.onReadyEvent&&r.onReadyEvent());var t=e.data;switch(t.target){case"stdout":console.log(t.content);break;case"console-log":console.log.apply(console,JSON.parse(t.content));break;case"console-debug":console.debug.apply(console,JSON.parse(t.content));break;case"console-info":console.info.apply(console,JSON.parse(t.content));break;case"console-warn":console.warn.apply(console,JSON.parse(t.content));break;case"console-error":console.error.apply(console,JSON.parse(t.content));break;case"stderr":console.error(t.content);break;case"window":window[t.method]();break;case"canvas":switch(t.op){case"getContext":r.ctx=r.canvas.getContext(t.type,t.attributes);break;case"resize":r.resize(t.width,t.height);break;case"renderCanvas":r.lastRenderTime<t.time&&(r.lastRenderTime=t.time,r.renderFramesData=t,window.requestAnimationFrame(o));break;case"renderFastCanvas":r.lastRenderTime<t.time&&(r.lastRenderTime=t.time,r.renderFramesData=t,window.requestAnimationFrame(d));break;case"setObjectProperty":r.canvas[t.object][t.property]=t.value;break;case"oneshot-result":if(t.iteration!=r.oneshotState.iteration)return void console.debug("received stale prerender, ignoring");r.debug&&console.info("oneshot received (start="+t.eventStart+", empty="+t.emptyFinish+"), render: "+Math.round(t.spentTime)+" ms"),r.oneshotState.renderRequested=!1,Math.abs(t.lastRenderedTime-r.oneshotState.requestNextTimestamp)<.01&&(r.oneshotState.requestNextTimestamp=-1),t.eventStart-t.lastRenderedTime>.01&&r.renderedItems.push({eventStart:t.lastRenderedTime,eventFinish:t.lastRenderedTime-.001,emptyFinish:t.eventStart,viewport:t.viewport,spentTime:0,blendTime:0,items:[],animated:!1,size:0});for(var a=[],s=0,i=0,c=t.canvases.length;i<c;i++){var h=t.canvases[i];a.push({w:h.w,h:h.h,x:h.x,y:h.y,image:new ImageData(new Uint8ClampedArray(h.buffer),h.w,h.h)}),s+=h.buffer.byteLength}var v=!1;if(t.emptyFinish>0&&t.emptyFinish-t.eventStart<1/r.targetFps||t.animated){var l=t.eventStart+1/r.targetFps;t.emptyFinish=l,t.eventFinish=l,v=!0}r.renderedItems.push({eventStart:t.eventStart,eventFinish:t.eventFinish,emptyFinish:t.emptyFinish,spentTime:t.spentTime,blendTime:t.blendTime,viewport:t.viewport,items:a,animated:t.animated,size:s}),r.renderedItems.sort((function(e,t){return e.eventStart-t.eventStart})),r.oneshotState.requestNextTimestamp>=0?n(r.oneshotState.requestNextTimestamp,!0):t.eventStart<0?console.info('oneshot received "end of frames" event'):t.emptyFinish>=0?n(t.emptyFinish,v):console.info("there are no more events to prerender");break;default:throw"eh?"}break;case"tick":r.frameId=t.id,r.worker.postMessage({target:"tock",id:r.frameId});break;case"custom":if(!r.onCustomMessage)throw"Custom message received but client onCustomMessage not implemented.";r.onCustomMessage(e);break;case"setimmediate":r.worker.postMessage({target:"setimmediate"});break;case"get-events":console.log(t.target),console.log(t.events);break;case"get-styles":console.log(t.target),console.log(t.styles);break;default:throw"what? "+t.target}},r.resize=function(e,t,a,n){var s=null;if(a=a||0,n=n||0,(!e||!t)&&r.video){var i=function(e,t){return null===r.prescaleTradeoff?t>r.hardHeightLimit&&(e=e*r.hardHeightLimit/t,t=r.hardHeightLimit):r.prescaleTradeoff>1?t*r.prescaleTradeoff<=r.softHeightLimit?(e*=r.prescaleTradeoff,t*=r.prescaleTradeoff):t<r.softHeightLimit?(e=e*r.softHeightLimit/t,t=r.softHeightLimit):t>=r.hardHeightLimit&&(e=e*r.hardHeightLimit/t,t=r.hardHeightLimit):t>=r.softHeightLimit&&(t*r.prescaleTradeoff<=r.softHeightLimit?(e=e*r.softHeightLimit/t,t=r.softHeightLimit):t*r.prescaleTradeoff<=r.hardHeightLimit?(e*=r.prescaleTradeoff,t*=r.prescaleTradeoff):(e=e*r.hardHeightLimit/t,t=r.hardHeightLimit)),{width:e,height:t}}((s=r.getVideoPosition()).width*r.pixelRatio,s.height*r.pixelRatio);e=i.width,t=i.height;var o=r.canvasParent.getBoundingClientRect().top-r.video.getBoundingClientRect().top;a=s.y-o,n=s.x}e&&t?r.canvas.width==e&&r.canvas.height==t&&r.canvas.style.top==a&&r.canvas.style.left==n||(r.canvas.width=e,r.canvas.height=t,null!=s&&(r.canvasParent.style.position="relative",r.canvas.style.display="block",r.canvas.style.position="absolute",r.canvas.style.width=s.width+"px",r.canvas.style.height=s.height+"px",r.canvas.style.top=a+"px",r.canvas.style.left=n+"px",r.canvas.style.pointerEvents="none"),r.worker.postMessage({target:"canvas",width:r.canvas.width,height:r.canvas.height}),r.resetRenderAheadCache(!0)):r.video||console.error("width or height is 0. You should specify width & height for resize.")},r.resizeWithTimeout=function(){r.resize(),setTimeout(r.resize,100)},r.runBenchmark=function(){r.worker.postMessage({target:"runBenchmark"})},r.customMessage=function(e,t){t=t||{},r.worker.postMessage({target:"custom",userData:e,preMain:t.preMain})},r.setCurrentTime=function(e){r.worker.postMessage({target:"video",currentTime:e})},r.setTrackByUrl=function(e){r.worker.postMessage({target:"set-track-by-url",url:e}),r.resetRenderAheadCache(!1)},r.setTrack=function(e){r.worker.postMessage({target:"set-track",content:e}),r.resetRenderAheadCache(!1)},r.freeTrack=function(e){r.worker.postMessage({target:"free-track"}),r.resetRenderAheadCache(!1)},r.render=r.setCurrentTime,r.setIsPaused=function(e,t){r.worker.postMessage({target:"video",isPaused:e,currentTime:t})},r.setRate=function(e){r.worker.postMessage({target:"video",rate:e})},r.dispose=function(){r.worker.postMessage({target:"destroy"}),r.worker.terminate(),r.workerActive=!1,r.video&&r.video.parentNode.removeChild(r.canvasParent)},r.createEvent=function(e){r.worker.postMessage({target:"create-event",event:e})},r.getEvents=function(){r.worker.postMessage({target:"get-events"})},r.setEvent=function(e,t){r.worker.postMessage({target:"set-event",event:e,index:t})},r.removeEvent=function(e){r.worker.postMessage({target:"remove-event",index:e})},r.createStyle=function(e){r.worker.postMessage({target:"create-style",style:e})},r.getStyles=function(){r.worker.postMessage({target:"get-styles"})},r.setStyle=function(e,t){r.worker.postMessage({target:"set-style",style:e,index:t})},r.removeStyle=function(e){r.worker.postMessage({target:"remove-style",index:e})},r.init()})}}]);