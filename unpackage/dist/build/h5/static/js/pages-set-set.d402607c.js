(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-set-set"],{"0f20":function(t,e,i){var n=i("4eb2");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("445c75da",n,!0,{sourceMap:!1,shadowMode:!1})},"2c45":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{Color:"#DE2910",value:"",backColor:"#FFFFFF"}},onLoad:function(){if(this.getRequest("uid")){var t=this.getRequest("uid");this.$store.commit("changeUid",t)}},onReady:function(){},methods:{getRequest:function(t){for(var e=window.location.search.substring(1),i=e.split("&"),n=0;n<i.length;n++){var a=i[n].split("=");if(a[0]==t)return a[1]}return!1},goService:function(){uni.navigateTo({url:"../content/content?url="+encodeURIComponent("http://m.xgcyz1978.com/display/agreement?id=2")})},goQuestion:function(){uni.navigateTo({url:"../content/content?url="+encodeURIComponent("http://m.xgcyz1978.com/display/agreement?id=3")})}}};e.default=n},3078:function(t,e,i){"use strict";i.r(e);var n=i("6b0c"),a=i("74e6");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("fa8b");var c=i("2877"),s=Object(c["a"])(a["default"],n["a"],n["b"],!1,null,"08ced362",null);e["default"]=s.exports},"4eb2":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"uni-page-body[data-v-08ced362]{width:100%;height:100%}.contain[data-v-08ced362]{width:100%;height:100%;background:#fff}.list[data-v-08ced362]{width:100%;border-top:8px solid #f8f8f8;padding:0 %?30?%;-webkit-box-sizing:border-box;box-sizing:border-box}.item[data-v-08ced362]{width:100%;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-size:14px;color:#333;border-bottom:1px solid #eee}.item-left[data-v-08ced362]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.item-left>img[data-v-08ced362]{width:%?44?%}.item>img[data-v-08ced362]{width:%?30?%}",""])},"6b0c":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"contain"},[n("v-uni-view",{staticClass:"fixed"},[n("cu-custom",{attrs:{isBack:!0,Color:t.Color,backColor:t.backColor,isIcon:!0,bgColor:"bg-shadeTop text-white"}},[n("template",{attrs:{slot:"backText"},slot:"backText"}),n("template",{attrs:{slot:"content"},slot:"content"},[t._v("设置")])],2)],1),n("v-uni-view",{staticClass:"list"},[n("v-uni-view",{staticClass:"item",on:{click:function(e){e=t.$handleEvent(e),t.goService(e)}}},[n("v-uni-view",{staticClass:"item-left"},[n("v-uni-view",[t._v("服务说明")])],1),n("img",{attrs:{src:i("c8e0"),alt:""}})],1),n("v-uni-view",{staticClass:"item",on:{click:function(e){e=t.$handleEvent(e),t.goQuestion(e)}}},[n("v-uni-view",{staticClass:"item-left"},[n("v-uni-view",[t._v("常见问题")])],1),n("img",{attrs:{src:i("c8e0"),alt:""}})],1)],1)],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},"74e6":function(t,e,i){"use strict";i.r(e);var n=i("2c45"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},c8e0:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA6UlEQVRYR8XXzQ3CMAyGYbsTRckCdAM2ADZgE9gAmIAVWCBVRmGBSKhXhIh/PkOuTvU+7cUq058Pj/qllC0R7Xrvh9bac3RfO5cC7kTUeu8zGjEErG+Uc94z8yUCIQJEIsSAKIQKEIFQA9AIEwCJMANQCBcAgXADvAgIwIOAAawIKMCCgAPeEI9a6/xtQ4YASinXdYUT0a3Wuv8pQBNfYdAvoI1DAZY4DGCNQwCeuBvgjbsAiLgZgIqbAMi4GoCOqwARcTEgKi4C5JyPzHySLBbtf6EIkFJK0zRtlmU5WwKjZ6DLaBT7NH8Bz0DMId00QY0AAAAASUVORK5CYII="},fa8b:function(t,e,i){"use strict";var n=i("0f20"),a=i.n(n);a.a}}]);