(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-serviceContent-serviceContent"],{"4f86":function(t,e,n){var a=n("99a8");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=n("4f06").default;o("72348d3a",a,!0,{sourceMap:!1,shadowMode:!1})},"7fa4":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{Color:"#DE2910",value:"",backColor:"#FFFFFF",service:"",content:""}},onLoad:function(t){if(this.getRequest("uid")){var e=this.getRequest("uid");this.$store.commit("changeUid",e)}this.service=t.name,this.content=decodeURIComponent(t.content)},onReady:function(){},methods:{getRequest:function(t){for(var e=window.location.search.substring(1),n=e.split("&"),a=0;a<n.length;a++){var o=n[a].split("=");if(o[0]==t)return o[1]}return!1}}};e.default=a},9948:function(t,e,n){"use strict";n.r(e);var a=n("ca2c"),o=n("dd65");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("bc8d");var s=n("2877"),r=Object(s["a"])(o["default"],a["a"],a["b"],!1,null,"44aeade1",null);e["default"]=r.exports},"99a8":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"uni-page-body[data-v-44aeade1]{width:100%;height:100%}.contain[data-v-44aeade1]{width:100%;height:100%;background:#f8f8f8}.list[data-v-44aeade1]{width:100%;padding:%?30?%;-webkit-box-sizing:border-box;box-sizing:border-box}",""])},bc8d:function(t,e,n){"use strict";var a=n("4f86"),o=n.n(a);o.a},ca2c:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"contain"},[n("v-uni-view",{staticClass:"fixed"},[n("cu-custom",{attrs:{isBack:!0,Color:t.Color,backColor:t.backColor,isIcon:!0,bgColor:"bg-shadeTop text-white"}},[n("template",{attrs:{slot:"backText"},slot:"backText"}),n("template",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.service))])],2)],1),n("v-uni-view",{staticClass:"list"},[n("v-uni-view",[t._v(t._s(t.content))])],1)],1)},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},dd65:function(t,e,n){"use strict";n.r(e);var a=n("7fa4"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=o.a}}]);