"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3273],{95004:function(e,s,a){a.r(s),a.d(s,{show:function(){return u}});var r=a(27074),i=a(61693),n=a(48957),t=a(94994);function u(e){var s=e.item,a=s.UserData?s.UserData.PlaybackPositionTicks:null,u="Program"===s.Type?s.ChannelId:s.Id;if(a&&!s.IsFolder){var l=[];l.push({name:t.ZP.translate("ResumeAt",i.ZP.getDisplayRunningTime(a)),id:"resume"}),l.push({name:t.ZP.translate("PlayFromBeginning"),id:"play"}),r.default.show({items:l,positionTo:e.positionTo}).then((function(e){switch(e){case"play":n.O.play({ids:[u],serverId:s.ServerId});break;case"resume":n.O.play({ids:[u],startPositionTicks:a,serverId:s.ServerId});break;case"queue":n.O.queue({items:[s]});break;case"shuffle":n.O.shuffle(s)}}))}else n.O.play({ids:[u],serverId:s.ServerId})}s.default={show:u}}}]);