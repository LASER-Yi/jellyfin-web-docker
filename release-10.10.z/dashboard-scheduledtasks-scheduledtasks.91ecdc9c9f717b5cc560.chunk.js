"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[43381],{81524:function(t,e,a){a.r(e),a.d(e,{default:function(){return v}}),a(29305),a(32733),a(84701),a(69892),a(44962),a(89336),a(26448),a(9698),a(78557),a(95021),a(73687),a(83994),a(82367),a(96244);var n=a(8566),s=a(5898),r=a(10736),i=a(80096),l=a(28132),o=a(93721),d=a(44797);function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=Array(e);a<e;a++)n[a]=t[a];return n}function u(t){ApiClient.getScheduledTasks({isHidden:!1}).then((function(e){!function(t,e){var a;e=e.sort((function(t,e){return(t=t.Category+" "+t.Name)>(e=e.Category+" "+e.Name)?1:t<e?-1:0}));for(var n="",r=0;r<e.length;r++){var i=e[r];i.Category!=a&&((a=i.Category)&&(n+="</div>",n+="</div>"),n+='<div class="verticalSection verticalSection-extrabottompadding">',n+='<div class="sectionTitleContainer" style="margin-bottom:1em;">',n+='<h2 class="sectionTitle">',n+=a,n+="</h2>",0===r&&(n+='<a is="emby-linkbutton" class="raised button-alt headerHelpButton" target="_blank" href="https://jellyfin.org/docs/general/server/tasks">'+s.Ay.translate("Help")+"</a>"),n+="</div>",n+='<div class="paperList">'),n+='<div class="listItem listItem-border scheduledTaskPaperIconItem" data-status="'+i.State+'">',n+="<a is='emby-linkbutton' style='margin:0;padding:0;' class='clearLink listItemIconContainer' href='/dashboard/tasks/edit?id="+i.Id+"'>",n+='<span class="material-icons listItemIcon schedule" aria-hidden="true"></span>',n+="</a>",n+='<div class="listItemBody two-line">',n+="<a class='clearLink' style='margin:0;padding:0;display:block;text-align:"+(s.Ay.getIsRTL()?"right":"left")+";' is='emby-linkbutton' href='/dashboard/tasks/edit?id="+i.Id+"'>",n+="<h3 class='listItemBodyText'>"+i.Name+"</h3>",n+="<div class='secondary listItemBodyText' id='taskProgress"+i.Id+"'>"+p(i)+"</div>",n+="</a>",n+="</div>","Running"===i.State?n+='<button type="button" is="paper-icon-button-light" id="btnTask'+i.Id+'" class="btnStopTask" data-taskid="'+i.Id+'" title="'+s.Ay.translate("ButtonStop")+'"><span class="material-icons stop" aria-hidden="true"></span></button>':"Idle"===i.State&&(n+='<button type="button" is="paper-icon-button-light" id="btnTask'+i.Id+'" class="btnStartTask" data-taskid="'+i.Id+'" title="'+s.Ay.translate("ButtonStart")+'"><span class="material-icons play_arrow" aria-hidden="true"></span></button>'),n+="</div>"}e.length&&(n+="</div>",n+="</div>"),t.querySelector(".divScheduledTasks").innerHTML=n}(t,e),n.Ay.hide()}))}function p(t){var e="";if("Idle"===t.State){if(t.LastExecutionResult){var a=Date.parse(t.LastExecutionResult.EndTimeUtc),n=Date.parse(t.LastExecutionResult.StartTimeUtc);e+=s.Ay.translate("LabelScheduledTaskLastRan",(0,i.A)(a,(0,o.OE)()),(0,l.A)(n,a,{locale:(0,o.JK)()})),"Failed"===t.LastExecutionResult.Status?e+=" <span style='color:#FF0000;'>("+s.Ay.translate("LabelFailed")+")</span>":"Cancelled"===t.LastExecutionResult.Status?e+=" <span style='color:#0026FF;'>("+s.Ay.translate("LabelCancelled")+")</span>":"Aborted"===t.LastExecutionResult.Status&&(e+=" <span style='color:#FF0000;'>"+s.Ay.translate("LabelAbortedByServerShutdown")+"</span>")}}else if("Running"===t.State){var r=(t.CurrentProgressPercentage||0).toFixed(1);e+='<div style="display:flex;align-items:center;">',e+='<div class="taskProgressOuter" title="'+r+'%" style="flex-grow:1;">',e+='<div class="taskProgressInner" style="width:'+r+'%;">',e+="</div>",e+="</div>",e+="<span style='color:#00a4dc;margin-left:5px;'>"+r+"%</span>",e+="</div>"}else e+="<span style='color:#FF0000;'>"+s.Ay.translate("LabelStopping")+"</span>";return e}function f(t,e){var a=t.querySelector(".material-icons");a.classList.remove("stop","play_arrow"),a.classList.add(e)}function y(t,e){"Running"===e?(t.classList.remove("btnStartTask"),t.classList.add("btnStopTask"),f(t,"stop"),t.title=s.Ay.translate("ButtonStop")):"Idle"===e&&(t.classList.add("btnStartTask"),t.classList.remove("btnStopTask"),f(t,"play_arrow"),t.title=s.Ay.translate("ButtonStart")),$(t).parents(".listItem")[0].setAttribute("data-status",e)}function v(t){function e(){ApiClient.isMessageChannelOpen()||u(t)}function a(e,a,n){a.serverId()===i&&function(e){var a,n=function(t,e){var a="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!a){if(Array.isArray(t)||(a=function(t,e){if(t){if("string"==typeof t)return c(t,e);var a={}.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?c(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){a&&(t=a);var n=0,s=function(){};return{s:s,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i=!0,l=!1;return{s:function(){a=a.call(t)},n:function(){var t=a.next();return i=t.done,t},e:function(t){l=!0,r=t},f:function(){try{i||null==a.return||a.return()}finally{if(l)throw r}}}}(e);try{for(n.s();!(a=n.n()).done;){var s=a.value,r=t.querySelector("#taskProgress".concat(s.Id));r&&(r.innerHTML=p(s));var i=t.querySelector("#btnTask".concat(s.Id));i&&y(i,s.State)}}catch(t){n.e(t)}finally{n.f()}}(n)}var s,i=ApiClient.serverId();$(".divScheduledTasks",t).on("click",".btnStartTask",(function(){var e=this,a=e.getAttribute("data-taskid");ApiClient.startScheduledTask(a).then((function(){y(e,"Running"),u(t)}))})),$(".divScheduledTasks",t).on("click",".btnStopTask",(function(){var e=this,a=e.getAttribute("data-taskid");ApiClient.stopScheduledTask(a).then((function(){y(e,""),u(t)}))})),t.addEventListener("viewbeforehide",(function(){d.A.off(r.default,"ScheduledTasksInfo",a),ApiClient.sendMessage("ScheduledTasksInfoStop"),s&&clearInterval(s)})),t.addEventListener("viewshow",(function(){n.Ay.show(),ApiClient.sendMessage("ScheduledTasksInfoStart","1000,1000"),s&&clearInterval(s),s=setInterval(e,1e4),u(t),d.A.on(r.default,"ScheduledTasksInfo",a)}))}a(10353)}}]);