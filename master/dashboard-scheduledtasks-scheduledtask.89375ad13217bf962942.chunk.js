"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3006],{76293:function(e,t,r){r.r(t),r.d(t,{default:function(){return T}}),r(5769),r(61013),r(72410),r(63238),r(61418),r(17460),r(14078),r(43512),r(32081),r(72326);var i=r(51161),a=r(61693),n=r(72365),l=r(94994),s=(r(33310),r(38228),r(19099),r(3137)),d=r(85951);Array.prototype.remove=function(e,t){var r=this.slice((t||e)+1||this.length);return this.length=e<0?this.length+e:e,this.push.apply(this,r)};var g={refreshScheduledTask:function(e){i.ZP.show();var t=(0,d.a)("id");ApiClient.getScheduledTask(t).then((function(t){g.loadScheduledTask(e,t)}))},loadScheduledTask:function(e,t){$(".taskName",e).html(t.Name),$("#pTaskDescription",e).html(t.Description),Promise.resolve().then(r.bind(r,664)).then((function(){g.loadTaskTriggers(e,t)})),i.ZP.hide()},loadTaskTriggers:function(e,t){var r="";r+='<div class="paperList">';for(var i=0,a=t.Triggers.length;i<a;i++){var n=t.Triggers[i];if(r+='<div class="listItem listItem-border">',r+='<span class="material-icons listItemIcon schedule" aria-hidden="true"></span>',n.MaxRuntimeMs?r+='<div class="listItemBody two-line">':r+='<div class="listItemBody">',r+="<div class='listItemBodyText'>"+g.getTriggerFriendlyName(n)+"</div>",n.MaxRuntimeMs){r+='<div class="listItemBodyText secondary">';var s=n.MaxRuntimeTicks/36e9;r+=1==s?l.ZP.translate("ValueTimeLimitSingleHour"):l.ZP.translate("ValueTimeLimitMultiHour",s),r+="</div>"}r+="</div>",r+='<button class="btnDeleteTrigger" data-index="'+i+'" type="button" is="paper-icon-button-light" title="'+l.ZP.translate("Delete")+'"><span class="material-icons delete" aria-hidden="true"></span></button>',r+="</div>"}r+="</div>",e.querySelector(".taskTriggers").innerHTML=r},getTriggerFriendlyName:function(e){if("DailyTrigger"==e.Type)return l.ZP.translate("DailyAt",g.getDisplayTime(e.TimeOfDayTicks));if("WeeklyTrigger"==e.Type)return l.ZP.translate("WeeklyAt",e.DayOfWeek,g.getDisplayTime(e.TimeOfDayTicks));if("SystemEventTrigger"==e.Type&&"WakeFromSleep"==e.SystemEvent)return l.ZP.translate("OnWakeFromSleep");if("IntervalTrigger"==e.Type){var t=e.IntervalTicks/36e9;return.25==t?l.ZP.translate("EveryXMinutes","15"):.5==t?l.ZP.translate("EveryXMinutes","30"):.75==t?l.ZP.translate("EveryXMinutes","45"):1==t?l.ZP.translate("EveryHour"):l.ZP.translate("EveryXHours",t)}return"StartupTrigger"==e.Type?l.ZP.translate("OnApplicationStartup"):e.Type},getDisplayTime:function(e){var t=e/1e4,r=new Date;return r.setHours(0,0,0,0),r.setTime(r.getTime()+t),a.ZP.getDisplayTime(r)},showAddTriggerPopup:function(e){$("#selectTriggerType",e).val("DailyTrigger"),e.querySelector("#selectTriggerType").dispatchEvent(new CustomEvent("change",{})),$("#popupAddTrigger",e).removeClass("hide")},confirmDeleteTrigger:function(e,t){(0,s.Z)(l.ZP.translate("MessageDeleteTaskTrigger"),l.ZP.translate("HeaderDeleteTaskTrigger")).then((function(){g.deleteTrigger(e,t)}))},deleteTrigger:function(e,t){i.ZP.show();var r=(0,d.a)("id");ApiClient.getScheduledTask(r).then((function(r){r.Triggers.remove(t),ApiClient.updateScheduledTaskTriggers(r.Id,r.Triggers).then((function(){g.refreshScheduledTask(e)}))}))},refreshTriggerFields:function(e,t){"DailyTrigger"==t?($("#fldTimeOfDay",e).show(),$("#fldDayOfWeek",e).hide(),$("#fldSelectSystemEvent",e).hide(),$("#fldSelectInterval",e).hide(),$("#selectTimeOfDay",e).attr("required","required")):"WeeklyTrigger"==t?($("#fldTimeOfDay",e).show(),$("#fldDayOfWeek",e).show(),$("#fldSelectSystemEvent",e).hide(),$("#fldSelectInterval",e).hide(),$("#selectTimeOfDay",e).attr("required","required")):"SystemEventTrigger"==t?($("#fldTimeOfDay",e).hide(),$("#fldDayOfWeek",e).hide(),$("#fldSelectSystemEvent",e).show(),$("#fldSelectInterval",e).hide(),$("#selectTimeOfDay",e).removeAttr("required")):"IntervalTrigger"==t?($("#fldTimeOfDay",e).hide(),$("#fldDayOfWeek",e).hide(),$("#fldSelectSystemEvent",e).hide(),$("#fldSelectInterval",e).show(),$("#selectTimeOfDay",e).removeAttr("required")):"StartupTrigger"==t&&($("#fldTimeOfDay",e).hide(),$("#fldDayOfWeek",e).hide(),$("#fldSelectSystemEvent",e).hide(),$("#fldSelectInterval",e).hide(),$("#selectTimeOfDay",e).removeAttr("required"))},getTriggerToAdd:function(e){var t={Type:$("#selectTriggerType",e).val()};"DailyTrigger"==t.Type?t.TimeOfDayTicks=$("#selectTimeOfDay",e).val():"WeeklyTrigger"==t.Type?(t.DayOfWeek=$("#selectDayOfWeek",e).val(),t.TimeOfDayTicks=$("#selectTimeOfDay",e).val()):"SystemEventTrigger"==t.Type?t.SystemEvent=$("#selectSystemEvent",e).val():"IntervalTrigger"==t.Type&&(t.IntervalTicks=$("#selectInterval",e).val());var r=$("#txtTimeLimit",e).val()||"0";return r=36e5*parseFloat(r),t.MaxRuntimeMs=r||null,t}};function T(e){e.querySelector(".addTriggerForm").addEventListener("submit",(function(t){i.ZP.show();var r=(0,d.a)("id");ApiClient.getScheduledTask(r).then((function(t){t.Triggers.push(g.getTriggerToAdd(e)),ApiClient.updateScheduledTaskTriggers(t.Id,t.Triggers).then((function(){$("#popupAddTrigger").addClass("hide"),g.refreshScheduledTask(e)}))})),t.preventDefault()})),function(e){for(var t=[],r=0;r<864e5;r+=9e5)t.push({name:g.getDisplayTime(1e4*r),value:1e4*r});e.innerHTML=t.map((function(e){return'<option value="'+e.value+'">'+e.name+"</option>"})).join("")}(e.querySelector("#selectTimeOfDay")),$(e.querySelector("#popupAddTrigger").parentNode).trigger("create"),e.querySelector(".selectTriggerType").addEventListener("change",(function(){g.refreshTriggerFields(e,this.value)})),e.querySelector(".btnAddTrigger").addEventListener("click",(function(){g.showAddTriggerPopup(e)})),e.addEventListener("click",(function(t){var r=n.ZP.parentWithClass(t.target,"btnDeleteTrigger");r&&g.confirmDeleteTrigger(e,parseInt(r.getAttribute("data-index")))})),e.addEventListener("viewshow",(function(){g.refreshScheduledTask(e)}))}}}]);