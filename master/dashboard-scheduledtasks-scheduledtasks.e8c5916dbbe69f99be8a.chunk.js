"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[570],{16735:function(t,e,a){a.r(e),a.d(e,{default:function(){return h}}),a(69217),a(76056),a(72326);var s=a(56705),n=a(47005),i=a(33942),l=a(1197),r=a(64258),d=a(24724),o=a(65321);function c(t){ApiClient.getScheduledTasks({isHidden:!1}).then((function(e){!function(t,e){var a;e=e.sort((function(t,e){return(t=t.Category+" "+t.Name)>(e=e.Category+" "+e.Name)?1:t<e?-1:0}));for(var s="",n=0;n<e.length;n++){var l=e[n];l.Category!=a&&((a=l.Category)&&(s+="</div>",s+="</div>"),s+='<div class="verticalSection verticalSection-extrabottompadding">',s+='<div class="sectionTitleContainer" style="margin-bottom:1em;">',s+='<h2 class="sectionTitle">',s+=a,s+="</h2>",0===n&&(s+='<a is="emby-linkbutton" class="raised button-alt headerHelpButton" target="_blank" href="https://docs.jellyfin.org/general/server/tasks.html">'+i.ZP.translate("Help")+"</a>"),s+="</div>",s+='<div class="paperList">'),s+='<div class="listItem listItem-border scheduledTaskPaperIconItem" data-status="'+l.State+'">',s+="<a is='emby-linkbutton' style='margin:0;padding:0;' class='clearLink listItemIconContainer' href='scheduledtask.html?id="+l.Id+"'>",s+='<span class="material-icons listItemIcon schedule" aria-hidden="true"></span>',s+="</a>",s+='<div class="listItemBody two-line">',s+="<a class='clearLink' style='margin:0;padding:0;display:block;text-align:left;' is='emby-linkbutton' href='scheduledtask.html?id="+l.Id+"'>",s+="<h3 class='listItemBodyText'>"+l.Name+"</h3>",s+="<div class='secondary listItemBodyText' id='taskProgress"+l.Id+"'>"+u(l)+"</div>",s+="</a>",s+="</div>","Running"===l.State?s+='<button type="button" is="paper-icon-button-light" id="btnTask'+l.Id+'" class="btnStopTask" data-taskid="'+l.Id+'" title="'+i.ZP.translate("ButtonStop")+'"><span class="material-icons stop" aria-hidden="true"></span></button>':"Idle"===l.State&&(s+='<button type="button" is="paper-icon-button-light" id="btnTask'+l.Id+'" class="btnStartTask" data-taskid="'+l.Id+'" title="'+i.ZP.translate("ButtonStart")+'"><span class="material-icons play_arrow" aria-hidden="true"></span></button>'),s+="</div>"}e.length&&(s+="</div>",s+="</div>"),t.querySelector(".divScheduledTasks").innerHTML=s}(t,e),s.ZP.hide()}))}function u(t){var e="";if("Idle"===t.State){if(t.LastExecutionResult){var a=Date.parse(t.LastExecutionResult.EndTimeUtc),s=Date.parse(t.LastExecutionResult.StartTimeUtc);e+=i.ZP.translate("LabelScheduledTaskLastRan",(0,r.Z)(a,o.mF),(0,d.Z)(s,a,{locale:(0,o.Kd)()})),"Failed"===t.LastExecutionResult.Status?e+=" <span style='color:#FF0000;'>("+i.ZP.translate("LabelFailed")+")</span>":"Cancelled"===t.LastExecutionResult.Status?e+=" <span style='color:#0026FF;'>("+i.ZP.translate("LabelCancelled")+")</span>":"Aborted"===t.LastExecutionResult.Status&&(e+=" <span style='color:#FF0000;'>"+i.ZP.translate("LabelAbortedByServerShutdown")+"</span>")}}else if("Running"===t.State){var n=(t.CurrentProgressPercentage||0).toFixed(1);e+='<div style="display:flex;align-items:center;">',e+='<div class="taskProgressOuter" title="'+n+'%" style="flex-grow:1;">',e+='<div class="taskProgressInner" style="width:'+n+'%;">',e+="</div>",e+="</div>",e+="<span style='color:#00a4dc;margin-left:5px;'>"+n+"%</span>",e+="</div>"}else e+="<span style='color:#FF0000;'>"+i.ZP.translate("LabelStopping")+"</span>";return e}function p(t,e){var a=t.querySelector(".material-icons");a.classList.remove("stop","play_arrow"),a.classList.add(e)}function v(t,e){"Running"===e?(t.classList.remove("btnStartTask"),t.classList.add("btnStopTask"),p(t,"stop"),t.title=i.ZP.translate("ButtonStop")):"Idle"===e&&(t.classList.add("btnStartTask"),t.classList.remove("btnStopTask"),p(t,"play_arrow"),t.title=i.ZP.translate("ButtonStart")),$(t).parents(".listItem")[0].setAttribute("data-status",e)}function h(t){function e(){ApiClient.isMessageChannelOpen()||c(t)}function a(e,a,s){a.serverId()===r&&function(e){for(var a=0;a<e.length;a++){var s=e[a];t.querySelector("#taskProgress"+s.Id).innerHTML=u(s),v(t.querySelector("#btnTask"+s.Id),s.State)}}(s)}var i,r=ApiClient.serverId();$(".divScheduledTasks",t).on("click",".btnStartTask",(function(){var e=this,a=e.getAttribute("data-taskid");ApiClient.startScheduledTask(a).then((function(){v(e,"Running"),c(t)}))})),$(".divScheduledTasks",t).on("click",".btnStopTask",(function(){var e=this,a=e.getAttribute("data-taskid");ApiClient.stopScheduledTask(a).then((function(){v(e,""),c(t)}))})),t.addEventListener("viewbeforehide",(function(){n.Events.off(l.default,"ScheduledTasksInfo",a),ApiClient.sendMessage("ScheduledTasksInfoStop"),i&&clearInterval(i)})),t.addEventListener("viewshow",(function(){s.ZP.show(),ApiClient.sendMessage("ScheduledTasksInfoStart","1000,1000"),i&&clearInterval(i),i=setInterval(e,1e4),c(t),n.Events.on(l.default,"ScheduledTasksInfo",a)}))}a(664),a(78066)}}]);