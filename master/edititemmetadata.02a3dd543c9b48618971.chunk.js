"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[26344],{19048:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}}),n(5769),n(63238),n(61418),n(17460),n(14078);var r=n(28540),a=(n(61013),n(27471),n(98010),n(65009)),i=n.n(a),o=(n(72326),n(94994)),d=n(60635),l=n(85951);function s(e,t,n){var r=c(e),a={id:e.Id,text:r,state:{opened:e.IsFolder&&"open"==t,selected:n},li_attr:{serveritemtype:e.Type,collectiontype:e.CollectionType}};return e.IsFolder?(a.children=[{text:"Loading...",icon:!1}],a.icon=!1):a.icon=!1,a.state.opened&&(a.li_attr.loadedFromServer=!0),n&&(h=e.Id),a}function c(e){var t=e.Name;e.Number&&(t=e.Number+" - "+t),null!=e.IndexNumber&&"Season"!=e.Type&&(t=e.IndexNumber+" - "+t);var n="<div class='editorNode'>";return e.IsFolder?n+='<span class="material-icons metadataSidebarIcon folder" aria-hidden="true"></span>':"Video"===e.MediaType?n+='<span class="material-icons metadataSidebarIcon movie" aria-hidden="true"></span>':"Audio"===e.MediaType?n+='<span class="material-icons metadataSidebarIcon audiotrack" aria-hidden="true"></span>':"TvChannel"===e.Type?n+='<span class="material-icons metadataSidebarIcon live_tv" aria-hidden="true"></span>':"Photo"===e.MediaType?n+='<span class="material-icons metadataSidebarIcon photo" aria-hidden="true"></span>':"Book"===e.MediaType&&(n+='<span class="material-icons metadataSidebarIcon book" aria-hidden="true"></span>'),e.LockData&&(n+='<span class="material-icons metadataSidebarIcon lock" aria-hidden="true"></span>'),(n+=i()(t))+"</div>"}function u(e,t,r,a){Promise.all([n.e(99655).then(n.t.bind(n,20679,23)),Promise.all([n.e(99655),n.e(72950)]).then(n.bind(n,59280))]).then((function(){!function(e,t,n,r){g=[],h=null,$.jstree.destroy(),$(".libraryTree",e).jstree({plugins:["wholerow"],core:{check_callback:!0,data:function(e,t){!function(e,t,n,r,a,i,l){var c=n.id;if("#"!=c)if("livetv"!=c)if("MediaFolders"!=c){var u={ParentId:c,Fields:"Settings",IsVirtualUnaired:!1,IsMissing:!1,EnableTotalRecordCount:!1,EnableImages:!1,EnableUserData:!1},f=n.li_attr.itemtype;"Season"!=f&&"Series"!=f&&(u.SortBy="SortName"),ApiClient.getItems(d.default.getCurrentUserId(),u).then((function(e){var n=e.Items.map((function(e){return s(e,-1==r.indexOf(e.Id)?"closed":"open",e.Id==a)}));l.call(t,n);for(var i=0,o=n.length;i<o;i++)n[i].state.opened&&g.push(n[i].id)}))}else!function(e,t,n,r){ApiClient.getJSON(ApiClient.getUrl("Library/MediaFolders")).then((function(e){var a=e.Items.map((function(e){return s(e,-1==n.indexOf(e.Id)?"closed":"open",!1)}));r.call(t,a);for(var i=0,o=a.length;i<o;i++)a[i].state.opened&&g.push(a[i].id)}))}(0,t,r,l);else!function(e,t,n){ApiClient.getLiveTvChannels({ServiceName:e,AddCurrentProgram:!1}).then((function(e){var r=e.Items.map((function(e){return s(e,-1==t.indexOf(e.Id)?"closed":"open",!1)}));n(r)}))}(c,r,l);else!function(e,t,n){ApiClient.getLiveTvChannels({limit:0}).then((function(e){var r=[];r.push({id:"MediaFolders",text:o.ZP.translate("HeaderMediaFolders"),state:{opened:!0},li_attr:{itemtype:"mediafolders",loadedFromServer:!0},icon:!1}),e.TotalRecordCount&&r.push({id:"livetv",text:o.ZP.translate("LiveTV"),state:{opened:!1},li_attr:{itemtype:"livetv"},children:[{text:"Loading...",icon:!1}],icon:!1}),n.call(t,r),g.push("MediaFolders")}))}(0,t,l)}(0,this,e,n,r,0,t)},themes:{variant:"large"}}}).off("select_node.jstree",f).on("select_node.jstree",f).off("open_node.jstree",p).on("open_node.jstree",p).off("load_node.jstree",p).on("load_node.jstree",p)}(e,0,r,a)}))}function f(e,t){var n=t.node,r={id:n.id,itemType:n.li_attr.itemtype,serverItemType:n.li_attr.serveritemtype,collectionType:n.li_attr.collectiontype};"livetv"!=r.itemType&&"mediafolders"!=r.itemType?(this.dispatchEvent(new CustomEvent("itemclicked",{detail:r,bubbles:!0,cancelable:!1})),document.querySelector(".editPageSidebar").classList.add("editPageSidebar-withcontent")):document.querySelector(".editPageSidebar").classList.remove("editPageSidebar-withcontent")}function p(e,t){var n=$(this).parents(".page")[0],r=t.node;r.children&&function(e,t){for(var n=t.children,r=function(){var t=n[a];-1!=g.indexOf(t)&&(g=g.filter((function(e){return e!=t})),$.jstree.reference(".libraryTree",e).load_node(t,m))},a=0,i=n.length;a<i;a++)r()}(n,r),r.li_attr&&"#"!=r.id&&!r.li_attr.loadedFromServer&&(r.li_attr.loadedFromServer=!0,$.jstree.reference(".libraryTree",n).load_node(r.id,m))}function m(e){h&&e.children&&-1!=e.children.indexOf(h)&&setTimeout((function(){var e;(e=$("#"+h)[0])&&e.scrollIntoView()}),500)}function v(){return I||(0,l.a)("id")}var h,I,g=[];function b(e,t){r.ZP.show(),t?n.e(43786).then(n.bind(n,43786)).then((function(n){n.default.embed(e.querySelector(".editPageInnerContent"),t,ApiClient.serverInfo().Id)})):(e.querySelector(".editPageInnerContent").innerHTML="",r.ZP.hide())}function y(e){e.addEventListener("viewshow",(function(){b(this,MetadataEditor.getCurrentItemId())})),MetadataEditor.setCurrentItemId(null),e.querySelector(".libraryTree").addEventListener("itemclicked",(function(t){var n=t.detail;n.id!=MetadataEditor.getCurrentItemId()&&(MetadataEditor.setCurrentItemId(n.id),b(e,n.id))}))}$(document).on("itemsaved",".metadataEditorPage",(function(e,t){!function(e,t){var n=$("#"+t.Id+">a",e)[0];if(null!=n&&($(".editorNode",n).remove(),$(n).append(c(t)),t.IsFolder)){var r=jQuery.jstree._reference(".libraryTree"),a=r._get_node(null,!1);r.refresh(a)}}(this,t)})).on("pagebeforeshow",".metadataEditorPage",(function(){n.e(70011).then(n.bind(n,70011))})).on("pagebeforeshow",".metadataEditorPage",(function(){var e=this;d.default.getCurrentUser().then((function(t){var n=v();n?ApiClient.getAncestorItems(n,t.Id).then((function(t){var r=t.map((function(e){return e.Id}));u(e,0,r,n)})):u(e,0,[])}))})).on("pagebeforehide",".metadataEditorPage",(function(){$(".libraryTree",this).off("select_node.jstree",f).off("open_node.jstree",p).off("load_node.jstree",p)})),window.MetadataEditor={getItemPromise:function(){var e=v();return e?ApiClient.getItem(d.default.getCurrentUserId(),e):ApiClient.getRootFolder(d.default.getCurrentUserId())},getCurrentItemId:v,setCurrentItemId:function(e){I=e}}}}]);