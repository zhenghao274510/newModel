(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-messageDetail-messageDetail"],{"402a":function(t,e,n){"use strict";n.r(e);var i=n("dbaa"),a=n("9447");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("7685");var s=n("2877"),r=Object(s["a"])(a["default"],i["a"],i["b"],!1,null,"5ab573c8",null);e["default"]=r.exports},7685:function(t,e,n){"use strict";var i=n("c22d"),a=n.n(i);a.a},9447:function(t,e,n){"use strict";n.r(e);var i=n("b5a0"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},b5a0:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{Color:"#333333",value:"",backColor:"#FFFFFF",title:"",content:""}},onLoad:function(t){if(this.getRequest("uid")){var e=this.getRequest("uid");this.$store.commit("changeUid",e)}this.title=t.title,this.content=t.content},onReady:function(){},methods:{getRequest:function(t){for(var e=window.location.search.substring(1),n=e.split("&"),i=0;i<n.length;i++){var a=n[i].split("=");if(a[0]==t)return a[1]}return!1}}};e.default=i},c22d:function(t,e,n){var i=n("cb90");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("2fbe54ab",i,!0,{sourceMap:!1,shadowMode:!1})},cb90:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"uni-page-body[data-v-5ab573c8]{width:100%;height:100%}.contain[data-v-5ab573c8]{width:100%;height:100%;background:#f8f8f8}.title[data-v-5ab573c8]{width:100%;padding:%?30?%;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:14px;color:#333;text-align:justify}.content[data-v-5ab573c8]{width:100%;padding:0 %?30?%;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:12px;color:#999;text-align:justify}",""])},dbaa:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"contain"},[n("v-uni-view",{staticClass:"fixed"},[n("cu-custom",{attrs:{isBack:!0,Color:t.Color,backColor:t.backColor,isIcon:!0,bgColor:"bg-shadeTop text-white"}},[n("template",{attrs:{slot:"backText"},slot:"backText"}),n("template",{attrs:{slot:"content"},slot:"content"},[t._v("消息详情")])],2)],1),n("v-uni-view",{staticClass:"title"},[t._v(t._s(t.title))]),n("v-uni-view",{staticClass:"content"},[t._v(t._s(t.content))])],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})}}]);