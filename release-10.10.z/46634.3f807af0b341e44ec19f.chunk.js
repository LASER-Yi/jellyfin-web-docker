"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[46634],{46634:function(e,t,r){r.r(t),r.d(t,{deleteItem:function(){return c},deleteLyrics:function(){return f}}),r(78557),r(90076);var n=r(5898),i=r(41177),a=r(40532),l=r(70267),u=r(86191),o=r(11444);function s(e){return(0,i.A)(e)}function c(e){var t=e.item,r=t.SeasonId||t.SeriesId||t.ParentId,i=u.A.getApiClient(t.ServerId);return(0,a.A)(function(e){if(e.Type===o.D.Series){var t=e.RecursiveItemCount;return{title:n.Ay.translate("HeaderDeleteSeries"),text:n.Ay.translate("ConfirmDeleteSeries",t),confirmText:n.Ay.translate("DeleteEntireSeries",t),primary:"delete"}}return{title:n.Ay.translate("HeaderDeleteItem"),text:n.Ay.translate("ConfirmDeleteItem"),confirmText:n.Ay.translate("Delete"),primary:"delete"}}(t)).then((function(){return i.deleteItem(t.Id).then((function(){e.navigate&&(r?l.appRouter.showItem(r,t.ServerId):l.appRouter.goHome())}),(function(e){var t=function(){return Promise.reject(e)};return s(n.Ay.translate("ErrorDeletingItem")).then(t,t)}))}))}function f(e){return(0,a.A)({title:n.Ay.translate("HeaderDeleteLyrics"),text:n.Ay.translate("ConfirmDeleteLyrics"),confirmText:n.Ay.translate("Delete"),primary:"delete"}).then((function(){var t=u.A.getApiClient(e.ServerId);return t.ajax({url:t.getUrl("Audio/"+e.Id+"/Lyrics"),type:"DELETE"}).catch((function(e){var t=function(){return Promise.reject(e)};return s(n.Ay.translate("ErrorDeletingLyrics")).then(t,t)}))}))}t.default={deleteItem:c,deleteLyrics:f}}}]);