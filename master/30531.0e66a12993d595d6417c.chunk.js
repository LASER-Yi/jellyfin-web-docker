"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[30531],{30531:function(e,n,t){t.r(n),t(63238),t(61418);var r=t(94994),i=t(28540),a=t(18613),c=t(56663),s=t(3137),o=t(56809);function l(e,n,t,a){return i.ZP.show(),e.getItem(e.getCurrentUserId(),t).then((function(s){return s.IsSeries?e.getNewLiveTvTimerDefaults({programId:t}).then((function(n){return e.createLiveTvSeriesTimer(n).then((function(){i.ZP.hide(),(0,c.Z)(r.ZP.translate("SeriesRecordingScheduled"))}))})):a?u(n,e.serverId()):d(e.serverId(),n,!0)}))}function u(e,n){return new Promise((function(t,c){(0,s.Z)({text:r.ZP.translate("MessageConfirmRecordingCancellation"),primary:"delete",confirmText:r.ZP.translate("HeaderCancelRecording"),cancelText:r.ZP.translate("HeaderKeepRecording")}).then((function(){i.ZP.show(),d(a.Z.getApiClient(n),e,!0).then(t,c)}),c)}))}function d(e,n,t){return i.ZP.show(),e.cancelLiveTvTimer(n).then((function(){!1!==t&&(i.ZP.hide(),(0,c.Z)(r.ZP.translate("RecordingCancelled")))}))}function Z(e,n,t){return i.ZP.show(),e.getNewLiveTvTimerDefaults({programId:n}).then((function(n){return(t?e.createLiveTvSeriesTimer(n):e.createLiveTvTimer(n)).then((function(){i.ZP.hide(),(0,c.Z)(r.ZP.translate("RecordingScheduled"))}))}))}n.default={cancelTimer:d,createRecording:Z,changeRecordingToSeries:l,toggleRecording:function(e,n,t,s,u){var h=a.Z.getApiClient(e),m=t&&"Cancelled"!==s;return u&&m?function(e,n,t,s,l){return new Promise((function(n,u){var Z=[];Z.push({name:r.ZP.translate("HeaderKeepRecording"),id:"cancel",type:"submit"}),"InProgress"===s?Z.push({name:r.ZP.translate("HeaderStopRecording"),id:"canceltimer",type:"cancel"}):Z.push({name:r.ZP.translate("HeaderCancelRecording"),id:"canceltimer",type:"cancel"}),Z.push({name:r.ZP.translate("HeaderCancelSeries"),id:"cancelseriestimer",type:"cancel"}),o.Z.show({text:r.ZP.translate("MessageConfirmRecordingCancellation"),buttons:Z}).then((function(s){var o=a.Z.getApiClient(e);"canceltimer"===s?(i.ZP.show(),d(o,t,!0).then(n,u)):"cancelseriestimer"===s?(i.ZP.show(),o.cancelLiveTvSeriesTimer(l).then((function(){(0,c.Z)(r.ZP.translate("SeriesCancelled")),i.ZP.hide(),n()}),u)):n()}),u)}))}(e,0,t,s,u):m&&n?l(h,t,n,!0):n?Z(h,n):Promise.reject()},cancelTimerWithConfirmation:u,cancelSeriesTimerWithConfirmation:function(e,n){return new Promise((function(t,o){(0,s.Z)({text:r.ZP.translate("MessageConfirmRecordingCancellation"),primary:"delete",confirmText:r.ZP.translate("HeaderCancelSeries"),cancelText:r.ZP.translate("HeaderKeepSeries")}).then((function(){i.ZP.show(),a.Z.getApiClient(n).cancelLiveTvSeriesTimer(e).then((function(){(0,c.Z)(r.ZP.translate("SeriesCancelled")),i.ZP.hide(),t()}),o)}),o)}))}}}}]);