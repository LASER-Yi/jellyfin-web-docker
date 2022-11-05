"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[50570],{25810:function(t,e,a){a.r(e),a.d(e,{default:function(){return h}}),a(69217),a(76056),a(72326);var s=a(28540),n=a(94994),i=a(44038),l=a(20990),r=a(93975),d=a(15039),o=a(81643);function c(t){ApiClient.getScheduledTasks({isHidden:!1}).then((function(e){!function(t,e){var a;e=e.sort((function(t,e){return(t=t.Category+" "+t.Name)>(e=e.Category+" "+e.Name)?1:t<e?-1:0}));for(var s="",i=0;i<e.length;i++){var l=e[i];l.Category!=a&&((a=l.Category)&&(s+="</div>",s+="</div>"),s+='<div class="verticalSection verticalSection-extrabottompadding">',s+='<div class="sectionTitleContainer" style="margin-bottom:1em;">',s+='<h2 class="sectionTitle">',s+=a,s+="</h2>",0===i&&(s+='<a is="emby-linkbutton" class="raised button-alt headerHelpButton" target="_blank" href="https://jellyfin.org/docs/general/server/tasks">'+n.ZP.translate("Help")+"</a>"),s+="</div>",s+='<div class="paperList">'),s+='<div class="listItem listItem-border scheduledTaskPaperIconItem" data-status="'+l.State+'">',s+="<a is='emby-linkbutton' style='margin:0;padding:0;' class='clearLink listItemIconContainer' href='scheduledtask.html?id="+l.Id+"'>",s+='<span class="material-icons listItemIcon schedule" aria-hidden="true"></span>',s+="</a>",s+='<div class="listItemBody two-line">';var r="left";n.ZP.getIsRTL()&&(r="right"),s+="<a class='clearLink' style='margin:0;padding:0;display:block;text-align:"+r+";' is='emby-linkbutton' href='scheduledtask.html?id="+l.Id+"'>",s+="<h3 class='listItemBodyText'>"+l.Name+"</h3>",s+="<div class='secondary listItemBodyText' id='taskProgress"+l.Id+"'>"+u(l)+"</div>",s+="</a>",s+="</div>","Running"===l.State?s+='<button type="button" is="paper-icon-button-light" id="btnTask'+l.Id+'" class="btnStopTask" data-taskid="'+l.Id+'" title="'+n.ZP.translate("ButtonStop")+'"><span class="material-icons stop" aria-hidden="true"></span></button>':"Idle"===l.State&&(s+='<button type="button" is="paper-icon-button-light" id="btnTask'+l.Id+'" class="btnStartTask" data-taskid="'+l.Id+'" title="'+n.ZP.translate("ButtonStart")+'"><span class="material-icons play_arrow" aria-hidden="true"></span></button>'),s+="</div>"}e.length&&(s+="</div>",s+="</div>"),t.querySelector(".divScheduledTasks").innerHTML=s}(t,e),s.ZP.hide()}))}function u(t){var e="";if("Idle"===t.State){if(t.LastExecutionResult){var a=Date.parse(t.LastExecutionResult.EndTimeUtc),s=Date.parse(t.LastExecutionResult.StartTimeUtc);e+=n.ZP.translate("LabelScheduledTaskLastRan",(0,l.Z)(a,(0,d.LP)()),(0,r.Z)(s,a,{locale:(0,d.Kd)()})),"Failed"===t.LastExecutionResult.Status?e+=" <span style='color:#FF0000;'>("+n.ZP.translate("LabelFailed")+")</span>":"Cancelled"===t.LastExecutionResult.Status?e+=" <span style='color:#0026FF;'>("+n.ZP.translate("LabelCancelled")+")</span>":"Aborted"===t.LastExecutionResult.Status&&(e+=" <span style='color:#FF0000;'>"+n.ZP.translate("LabelAbortedByServerShutdown")+"</span>")}}else if("Running"===t.State){var i=(t.CurrentProgressPercentage||0).toFixed(1);e+='<div style="display:flex;align-items:center;">',e+='<div class="taskProgressOuter" title="'+i+'%" style="flex-grow:1;">',e+='<div class="taskProgressInner" style="width:'+i+'%;">',e+="</div>",e+="</div>",e+="<span style='color:#00a4dc;margin-left:5px;'>"+i+"%</span>",e+="</div>"}else e+="<span style='color:#FF0000;'>"+n.ZP.translate("LabelStopping")+"</span>";return e}function p(t,e){var a=t.querySelector(".material-icons");a.classList.remove("stop","play_arrow"),a.classList.add(e)}function v(t,e){"Running"===e?(t.classList.remove("btnStartTask"),t.classList.add("btnStopTask"),p(t,"stop"),t.title=n.ZP.translate("ButtonStop")):"Idle"===e&&(t.classList.add("btnStartTask"),t.classList.remove("btnStopTask"),p(t,"play_arrow"),t.title=n.ZP.translate("ButtonStart")),$(t).parents(".listItem")[0].setAttribute("data-status",e)}function h(t){function e(){ApiClient.isMessageChannelOpen()||c(t)}function a(e,a,s){a.serverId()===l&&function(e){for(var a=0;a<e.length;a++){var s=e[a];t.querySelector("#taskProgress"+s.Id).innerHTML=u(s),v(t.querySelector("#btnTask"+s.Id),s.State)}}(s)}var n,l=ApiClient.serverId();$(".divScheduledTasks",t).on("click",".btnStartTask",(function(){var e=this,a=e.getAttribute("data-taskid");ApiClient.startScheduledTask(a).then((function(){v(e,"Running"),c(t)}))})),$(".divScheduledTasks",t).on("click",".btnStopTask",(function(){var e=this,a=e.getAttribute("data-taskid");ApiClient.stopScheduledTask(a).then((function(){v(e,""),c(t)}))})),t.addEventListener("viewbeforehide",(function(){o.Z.off(i.default,"ScheduledTasksInfo",a),ApiClient.sendMessage("ScheduledTasksInfoStop"),n&&clearInterval(n)})),t.addEventListener("viewshow",(function(){s.ZP.show(),ApiClient.sendMessage("ScheduledTasksInfoStart","1000,1000"),n&&clearInterval(n),n=setInterval(e,1e4),c(t),o.Z.on(i.default,"ScheduledTasksInfo",a)}))}a(38228)}}]);