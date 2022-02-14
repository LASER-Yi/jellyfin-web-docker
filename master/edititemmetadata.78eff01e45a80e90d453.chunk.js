"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6344],{34465:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}}),n(5769),n(63238),n(61418),n(17460),n(14078);var r=n(56705),a=(n(61013),n(27471),n(98010),n(72326),n(44614)),i=(n(85427),n(76543));function o(e,t,n){var r=d(e),a={id:e.Id,text:r,state:{opened:e.IsFolder&&"open"==t,selected:n},li_attr:{serveritemtype:e.Type,collectiontype:e.CollectionType}};return e.IsFolder?(a.children=[{text:"Loading...",icon:!1}],a.icon=!1):a.icon=!1,a.state.opened&&(a.li_attr.loadedFromServer=!0),n&&(v=e.Id),a}function d(e){var t=e.Name;e.Number&&(t=e.Number+" - "+t),null!=e.IndexNumber&&"Season"!=e.Type&&(t=e.IndexNumber+" - "+t);var n="<div class='editorNode'>";return e.IsFolder?n+='<span class="material-icons metadataSidebarIcon folder"></span>':"Video"===e.MediaType?n+='<span class="material-icons metadataSidebarIcon movie"></span>':"Audio"===e.MediaType?n+='<span class="material-icons metadataSidebarIcon audiotrack"></span>':"TvChannel"===e.Type?n+='<span class="material-icons metadataSidebarIcon live_tv"></span>':"Photo"===e.MediaType?n+='<span class="material-icons metadataSidebarIcon photo"></span>':"Book"===e.MediaType&&(n+='<span class="material-icons metadataSidebarIcon book"></span>'),e.LockData&&(n+='<span class="material-icons metadataSidebarIcon lock"></span>'),(n+=t)+"</div>"}function l(e,t,r,d){Promise.all([n.e(679).then(n.t.bind(n,20679,23)),n.e(7147).then(n.bind(n,5098))]).then((function(){!function(e,t,n,r){I=[],v=null,$.jstree.destroy(),$(".libraryTree",e).jstree({plugins:["wholerow"],core:{check_callback:!0,data:function(e,t){!function(e,t,n,r,d,l,s){var c=n.id;if("#"!=c)if("livetv"!=c)if("MediaFolders"!=c){var u={ParentId:c,Fields:"Settings",IsVirtualUnaired:!1,IsMissing:!1,EnableTotalRecordCount:!1,EnableImages:!1,EnableUserData:!1},f=n.li_attr.itemtype;"Season"!=f&&"Series"!=f&&(u.SortBy="SortName"),ApiClient.getItems(i.ZP.getCurrentUserId(),u).then((function(e){var n=e.Items.map((function(e){return o(e,-1==r.indexOf(e.Id)?"closed":"open",e.Id==d)}));s.call(t,n);for(var a=0,i=n.length;a<i;a++)n[a].state.opened&&I.push(n[a].id)}))}else!function(e,t,n,r){ApiClient.getJSON(ApiClient.getUrl("Library/MediaFolders")).then((function(e){var a=e.Items.map((function(e){return o(e,-1==n.indexOf(e.Id)?"closed":"open",!1)}));r.call(t,a);for(var i=0,d=a.length;i<d;i++)a[i].state.opened&&I.push(a[i].id)}))}(0,t,r,s);else!function(e,t,n){ApiClient.getLiveTvChannels({ServiceName:e,AddCurrentProgram:!1}).then((function(e){var r=e.Items.map((function(e){return o(e,-1==t.indexOf(e.Id)?"closed":"open",!1)}));n(r)}))}(c,r,s);else!function(e,t,n){ApiClient.getLiveTvChannels({limit:0}).then((function(e){var r=[];r.push({id:"MediaFolders",text:a.ZP.translate("HeaderMediaFolders"),state:{opened:!0},li_attr:{itemtype:"mediafolders",loadedFromServer:!0},icon:!1}),e.TotalRecordCount&&r.push({id:"livetv",text:a.ZP.translate("LiveTV"),state:{opened:!1},li_attr:{itemtype:"livetv"},children:[{text:"Loading...",icon:!1}],icon:!1}),n.call(t,r),I.push("MediaFolders")}))}(0,t,s)}(0,this,e,n,r,0,t)},themes:{variant:"large"}}}).off("select_node.jstree",s).on("select_node.jstree",s).off("open_node.jstree",c).on("open_node.jstree",c).off("load_node.jstree",u).on("load_node.jstree",u)}(e,0,r,d)}))}function s(e,t){var n=t.node,r={id:n.id,itemType:n.li_attr.itemtype,serverItemType:n.li_attr.serveritemtype,collectionType:n.li_attr.collectiontype};"livetv"!=r.itemType&&"mediafolders"!=r.itemType?(this.dispatchEvent(new CustomEvent("itemclicked",{detail:r,bubbles:!0,cancelable:!1})),document.querySelector(".editPageSidebar").classList.add("editPageSidebar-withcontent")):document.querySelector(".editPageSidebar").classList.remove("editPageSidebar-withcontent")}function c(e,t){var n=$(this).parents(".page")[0],r=t.node;r.children&&f(n,r),r.li_attr&&"#"!=r.id&&!r.li_attr.loadedFromServer&&(r.li_attr.loadedFromServer=!0,$.jstree.reference(".libraryTree",n).load_node(r.id,p))}function u(e,t){var n=$(this).parents(".page")[0],r=t.node;r.children&&f(n,r),r.li_attr&&"#"!=r.id&&!r.li_attr.loadedFromServer&&(r.li_attr.loadedFromServer=!0,$.jstree.reference(".libraryTree",n).load_node(r.id,p))}function f(e,t){for(var n=t.children,r=function(t,r){var a=n[t];-1!=I.indexOf(a)&&(I=I.filter((function(e){return e!=a})),$.jstree.reference(".libraryTree",e).load_node(a,p))},a=0,i=n.length;a<i;a++)r(a)}function p(e){v&&e.children&&-1!=e.children.indexOf(v)&&setTimeout((function(){var e;(e=$("#"+v)[0])&&e.scrollIntoView()}),500)}function m(){if(h)return h;var e=window.location.hash||window.location.href;return getParameterByName("id",e)}var v,h,I=[];function g(e,t){r.ZP.show(),t?n.e(4420).then(n.bind(n,84420)).then((function(n){n.default.embed(e.querySelector(".editPageInnerContent"),t,ApiClient.serverInfo().Id)})):(e.querySelector(".editPageInnerContent").innerHTML="",r.ZP.hide())}function b(e){e.addEventListener("viewshow",(function(){g(this,MetadataEditor.getCurrentItemId())})),MetadataEditor.setCurrentItemId(null),e.querySelector(".libraryTree").addEventListener("itemclicked",(function(t){var n=t.detail;n.id!=MetadataEditor.getCurrentItemId()&&(MetadataEditor.setCurrentItemId(n.id),g(e,n.id))}))}$(document).on("itemsaved",".metadataEditorPage",(function(e,t){!function(e,t){var n=$("#"+t.Id+">a",e)[0];if(null!=n&&($(".editorNode",n).remove(),$(n).append(d(t)),t.IsFolder)){var r=jQuery.jstree._reference(".libraryTree"),a=r._get_node(null,!1);r.refresh(a)}}(this,t)})).on("pagebeforeshow",".metadataEditorPage",(function(){n.e(4614).then(n.bind(n,43890))})).on("pagebeforeshow",".metadataEditorPage",(function(){var e=this;i.ZP.getCurrentUser().then((function(t){var n=m();n?ApiClient.getAncestorItems(n,t.Id).then((function(t){var r=t.map((function(e){return e.Id}));l(e,0,r,n)})):l(e,0,[])}))})).on("pagebeforehide",".metadataEditorPage",(function(){$(".libraryTree",this).off("select_node.jstree",s).off("open_node.jstree",c).off("load_node.jstree",u)})),window.MetadataEditor={getItemPromise:function(){var e=m();return e?ApiClient.getItem(i.ZP.getCurrentUserId(),e):ApiClient.getRootFolder(i.ZP.getCurrentUserId())},getCurrentItemId:m,setCurrentItemId:function(e){h=e}}}}]);