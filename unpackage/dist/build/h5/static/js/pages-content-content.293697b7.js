(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-content-content"],{"2a09":function(t,e,n){var i=n("590f");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("2e7b7f22",i,!0,{sourceMap:!1,shadowMode:!1})},"2b0e":function(t,e,n){"use strict";n.r(e);var i=n("d6c8"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=a.a},"2db3":function(t,e,n){"use strict";n.r(e);var i=n("8a4c"),a=n("2b0e");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("693a");var u=n("2877"),o=Object(u["a"])(a["default"],i["a"],i["b"],!1,null,"3bdee4b6",null);e["default"]=o.exports},"590f":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"uni-page-body[data-v-3bdee4b6]{width:100%;height:100%}.contain[data-v-3bdee4b6]{width:100%;height:100%;background:#fff;overflow:hidden}.list[data-v-3bdee4b6]{width:94%;height:100%;position:relative;margin:0 auto}uni-web-view[data-v-3bdee4b6]{width:100%;padding:%?30?% 0}",""])},"693a":function(t,e,n){"use strict";var i=n("2a09"),a=n.n(i);a.a},"8a4c":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"contain"},[n("v-uni-view",{staticClass:"list"},[n("v-uni-web-view",{attrs:{"webview-styles":t.webviewStyles,src:t.url}})],1)],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},d6c8:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{webviewStyles:{progress:{color:"#FF3333"}},url:""}},onLoad:function(t){if(this.getRequest("uid")){var e=this.getRequest("uid");this.$store.commit("changeUid",e)}this.url=decodeURIComponent(t.url)},methods:{getRequest:function(t){for(var e=window.location.search.substring(1),n=e.split("&"),i=0;i<n.length;i++){var a=n[i].split("=");if(a[0]==t)return a[1]}return!1}}};e.default=i}}]);