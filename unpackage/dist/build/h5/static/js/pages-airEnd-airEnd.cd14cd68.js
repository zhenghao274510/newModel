(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-airEnd-airEnd"],{"556f":function(t,e,i){var a=i("f38b");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("1f881aeb",a,!0,{sourceMap:!1,shadowMode:!1})},"5d46":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("f8c3"),n=i("3439"),s={data:function(){return{Color:"#333333",value:"",backColor:"#E73C1D",city1:"",city2:"",day:"",price:{type:!0,data:[]},storageDate:[],swiperData:{},slideLeft:0,isDoRefresh:!1,item1:1,sendDate:"",singleStar:"",singleEnd:"",checked1:!1,listData:[],show:!1,showAir:!1,timeList:{},index1:0,airCompany:""}},computed:{date:function(){var t=new Date,e="".concat(t.getFullYear(),"-").concat(t.getMonth()+1,"-").concat(t.getDate());return e},date1:function(){return this.$store.state.date2},day1:function(){return this.$store.state.day2},initDate:function(){return this.$store.state.initDate2},priceDate1:function(){return this.$store.state.priceDate1},day2:function(){return this.$store.state.day1}},components:{Toast:n.Toast},onLoad:function(t){if(this.getRequest("uid")){var e=this.getRequest("uid");this.$store.commit("changeUid",e)}this.singleStart=this.$store.state.startCity,this.singleEnd=this.$store.state.endCity,this.index1=t.index;var i=this.$store.state.city1,a=this.$store.state.city2;this.city1=i,this.city2=a;var n=JSON.parse(this.$store.state.listStart);this.timeList=n,this.airCompany=t.airCompany},onShow:function(t){if(this.initDate){var e=new Date(this.initDate).getDay();e=this.getDays(e);var i=this.initDate.split("-");console.log(i),i[1]=parseInt(i[1])>9?i[1]:"0"+parseInt(i[1]),i[2]=parseInt(i[2])>9?i[2]:"0"+parseInt(i[2]),this.sendDate=i[0]+"/"+i[1]+"/"+i[2]+" "+e,""!=this.initDate&&3==i.length&&(this.Preprocessing(i),this.init())}else{var a=this.$store.state.priceDate2.split("-"),n=new Date(this.$store.state.priceDate2).getDay();n=this.getDays(n),a[1]=parseInt(a[1])>9?a[1]:"0"+parseInt(a[1]),a[2]=parseInt(a[2])>9?a[2]:"0"+parseInt(a[2]),this.sendDate=a[0]+"/"+a[1]+"/"+a[2]+" "+n,""!=this.$store.state.priceDate2&&3==a.length&&this.Preprocessing(a)}},methods:{getRequest:function(t){for(var e=window.location.search.substring(1),i=e.split("&"),a=0;a<i.length;a++){var n=i[a].split("=");if(n[0]==t)return n[1]}return!1},init:function(){var t=this;this.show=!0;var e=this.$store.state.doubleEnd;e=e.split("-").join("/");var i={DepartCityCode:this.singleEnd,ArriveCityCode:this.singleStart,IsChild:this.$store.state.checked,DepartDate:e,AirLineCode:this.airCompany},n={url:"/api/gzh/flightQuery",data:i,success:function(e){t.listData=[],0==e.data.result?(t.show=!1,t.listData=e.data.Data):(t.show=!1,t.showAir=!0)},fail:function(t){console.log(t)}};(0,a.ajax)(n)},changeNav:function(t){this.item1!==t&&(this.item1=t),0==t&&this.listData.sort(this.CompareDate1),1==t&&this.listData.sort(this.CompareDate)},CompareDate:function(t,e){var i=new Date,a=t.DepartTime.split(":"),n=e.DepartTime.split(":");return i.setHours(a[0],a[1])-i.setHours(n[0],n[1])},CompareDate1:function(t,e){var i=t.Cabins[0].Fare,a=e.Cabins[0].Fare;return parseInt(i)-parseInt(a)},goDetail:function(t){uni.navigateTo({url:"../endAirDetail/endAirDetail?date="+this.sendDate+"&index="+t+"&list="+JSON.stringify(this.listData)+"&index1="+this.index1})},back:function(){this.$store.commit("changeInit1",""),uni.navigateBack({delta:1})},dateFtt:function(t,e){var i={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(var a in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),i)new RegExp("("+a+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[a]:("00"+i[a]).substr((""+i[a]).length)));return t},getDays:function(t){switch(t){case 0:t="周日";break;case 1:t="周一";break;case 2:t="周二";break;case 3:t="周三";break;case 4:t="周四";break;case 5:t="周五";break;case 6:t="周六"}return t},judgeDate:function(t){return"object"!==typeof t&&(t=t.replace(/-/g,"/")),t},getDay:function(t){var e=this;t=this.judgeDate(t);var i=new Date(t),a=i.getFullYear(),n=i.getMonth()+1;i.getDate(),i.getDay();return new Promise(function(t,i){for(var s=[],o=(new Date(a,n-1,0).getDate(),1);o<=new Date(a,n,0).getDate();o++){var r="".concat(a,"-").concat(n,"-").concat(o);r=e.judgeDate(r),r=e.getDays(new Date(r).getDay()),n=parseInt(n)<=9?"0"+parseInt(n):parseInt(n),o=o<=9?"0"+o:o,s.push({day:"".concat(n,"-").concat(o),date:o,Choice:!1,week:r,price:e.price.data[o-1],priceType:e.price.type,disable:!1})}t({dateDay:s,year:a,month:n})})},Preprocessing:function(t){var e=this,i=this,a={},n=new Date("".concat(t[0],"-").concat(t[1],"-").concat(t[2])),s=n.getFullYear(),o=n.getMonth()+1;this.getDay("".concat(t[0],"-").concat(t[1],"-").concat(t[2])).then(function(n){a=n,t[1]=parseInt(t[1])>9?parseInt(t[1]):"0"+parseInt(t[1]),t[2]=parseInt(t[2])>9?parseInt(t[2]):"0"+parseInt(t[2]);var r=t[1]+"-"+t[2];e.$set(e,"swiperData",a);var l=i.$store.state.priceDate1;l=l.split("-"),e.swiperData.dateDay=e.swiperData.dateDay.map(function(t,e){return l[0]>s?t.disable=!0:l[1]>o&&l[0]>=s?t.disable=!0:l[0]>=s&&l[2]>parseInt(t.date)&&l[1]>=parseInt(o)&&(t.disable=!0),t});for(var c=0;c<e.swiperData.dateDay.length;c++)r==e.swiperData.dateDay[c].day&&(e.swiperData.dateDay[c].Choice=!0,e.slideLeft=40*c)})},changeDay:function(t){this.swiperData.dateDay[t].disable||(this.swiperData.dateDay.forEach(function(t,e){t.Choice=!1}),this.swiperData.dateDay[t].Choice=!0,this.sendDate=this.swiperData.year+"/"+this.swiperData.month+"/"+this.swiperData.dateDay[t].date+" "+this.swiperData.dateDay[t].week,this.$store.commit("changeDoubleEnd",this.swiperData.year+"/"+this.swiperData.month+"/"+this.swiperData.dateDay[t].date),this.$store.commit("changeDate2",this.swiperData.month+"-"+this.swiperData.dateDay[t].date),this.$store.commit("changeInit2",this.swiperData.year+"-"+this.swiperData.month+"-"+this.swiperData.dateDay[t].date),this.$store.commit("changePrice2",this.swiperData.year+"-"+this.swiperData.month+"-"+this.swiperData.dateDay[t].date),this.$store.commit("changeDay2",this.swiperData.dateDay[t].week),this.init())},choiceWalk:function(){this.$store.commit("changeInit2",""),uni.navigateTo({url:"../selectTime/selectTime?type=1"})}}};e.default=s},"602f":function(t,e,i){"use strict";i.r(e);var a=i("5d46"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},7150:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAA6ElEQVQokaXTMUoEQRAF0DezqxcQI2FSE43EM4hnEMREMFEMFExcNjQwMDIxWQQzT2DgBTY1Md3MM4xLGdiLTcPsKBYUxf/dn/8puquIWMUVhpjrr0G6dyMiRhHRRIQ/dBMRozo5zjpczjr4GYZ1T9SdJWfzYUEcYasQ32b4DZMFKMWTAq/josu6XhKrt3LnXRxkeA8vuCs0T5iW4umCxAZaXGIFx7gvnbtij/0sqk1z/zfi0xT3I+MekvtafrHc9iFO8Ixt30+xRYVXXOM8Fw8y8WPqrtrMU9f4RLNEkNd7mg3m1X9+1RcVa1h1ru8VZgAAAABJRU5ErkJggg=="},b9e3:function(t,e,i){"use strict";var a=i("556f"),n=i.n(a);n.a},c39a:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"contain"},[a("v-uni-view",{staticClass:"top"},[a("v-uni-view",{staticClass:"title"},[a("v-uni-text",{staticClass:"cuIcon-back back",on:{click:function(e){e=t.$handleEvent(e),t.back(e)}}}),a("v-uni-view",{staticStyle:{"margin-right":"16upx"}},[t._v("返程：")]),a("v-uni-view",[t._v(t._s(t.city2))]),a("img",{attrs:{src:i("5945"),alt:""}}),a("v-uni-view",[t._v(t._s(t.city1))])],1),a("v-uni-view",{staticClass:"current"},[t._v(t._s(t.date1)+" "+t._s(t.day1))]),a("v-uni-view",{staticClass:"log"},[a("img",{attrs:{src:i("7150"),alt:""}}),a("v-uni-view",{staticStyle:{margin:"0 10upx","font-size":"14px"}},[t._v(t._s(t.priceDate1))]),a("v-uni-view",{staticStyle:{"margin-right":"10upx"}},[t._v(t._s(t.day2))]),a("v-uni-view",{staticStyle:{"margin-right":"10upx","font-size":"14px"}},[t._v(t._s(t.timeList.DepartTime)+"-"+t._s(t.timeList.ArriveTime))]),a("v-uni-view",{staticStyle:{"font-size":"14px"}},[t._v(t._s(t.timeList.FlightNo))])],1),a("v-uni-view",{staticStyle:{width:"100%",position:"relative"}},[a("v-uni-scroll-view",{staticClass:"wrapper",attrs:{"scroll-x":"","scroll-with-animation":"","scroll-left":t.slideLeft}},[a("v-uni-view",{staticClass:"choice"},t._l(t.swiperData.dateDay,function(e,i){return a("v-uni-view",{staticClass:"list",class:1==e.disable?"disable":1==e.Choice?"Choice":"",attrs:{id:"main-"+i},on:{click:function(e){e=t.$handleEvent(e),t.changeDay(i)}}},[a("v-uni-view",[t._v(t._s(e.week))]),a("v-uni-view",{staticStyle:{margin:"4upx 0","font-size":"14px",width:"100upx","text-align":"center"}},[t._v(t._s(e.day))])],1)}),1)],1),a("v-uni-view",{staticClass:"walkDate",on:{click:function(e){e=t.$handleEvent(e),t.choiceWalk(e)}}},[a("v-uni-text",[t._v("出行日历")]),a("img",{attrs:{src:i("9541"),alt:""}})],1)],1)],1),a("v-uni-view",{staticClass:"result"},[a("v-uni-scroll-view",{staticClass:"airs",staticStyle:{height:"100%"},attrs:{"scroll-y":"","scroll-with-animation":""}},t._l(t.listData,function(e,n){return a("v-uni-view",{key:n,staticClass:"airs-box",on:{click:function(e){e=t.$handleEvent(e),t.goDetail(n)}}},[a("v-uni-view",{staticClass:"result-list"},[a("v-uni-view",{staticClass:"result-top"},[a("v-uni-view",{staticClass:"location"},[a("v-uni-view",{staticClass:"location-air"},[a("v-uni-view",[t._v(t._s(e.DepartTime))]),a("img",{attrs:{src:i("8674"),alt:""}}),a("v-uni-view",[t._v(t._s(e.ArriveTime))])],1),a("v-uni-view",{staticClass:"location-name"},[a("v-uni-view",[t._v(t._s(e.DepartAirportName.indexOf("国")>-1?e.DepartAirportName.substr(0,e.DepartAirportName.indexOf("国")):e.DepartAirportName)+t._s(e.DepartAirportTerminal))]),a("v-uni-view",[t._v(t._s(e.ArriveAirportName.indexOf("国")>-1?e.ArriveAirportName.substr(0,e.ArriveAirportName.indexOf("国")):e.ArriveAirportName)+t._s(e.ArriveAirportTerminal))])],1)],1),a("v-uni-view",{staticClass:"prices"},[a("v-uni-view",{staticClass:"money"},[t._v("￥"+t._s(e.Cabins[0].Fare))]),a("v-uni-view",[t._v("婴儿￥"+t._s(e.Cabins[0].BabyFare))])],1)],1),a("v-uni-view",{staticClass:"location-explain"},[a("img",{attrs:{src:i("6613"),alt:""}}),a("v-uni-view",[t._v(t._s(e.AirCompanyName)+t._s(e.FlightNo)+" | "+t._s(e.PlaneType))])],1)],1),a("v-uni-view",{staticClass:"line"})],1)}),1)],1),a("v-uni-view",{staticClass:"bottom"},[a("v-uni-view",{staticClass:"nav",on:{click:function(e){e=t.$handleEvent(e),t.changeNav(1)}}},[1==t.item1?a("img",{attrs:{src:i("bed2")}}):t._e(),1!=t.item1?a("img",{attrs:{src:i("1aa8")}}):t._e(),a("v-uni-view",{class:1==t.item1?"font":""},[t._v("时间早-晚")])],1),a("v-uni-view",{staticClass:"nav",on:{click:function(e){e=t.$handleEvent(e),t.changeNav(0)}}},[0==t.item1?a("img",{attrs:{src:i("df52")}}):t._e(),0!=t.item1?a("img",{attrs:{src:i("c838")}}):t._e(),a("v-uni-view",{class:0==t.item1?"font":""},[t._v("价格低-高")])],1)],1),a("van-popup",{attrs:{"close-on-click-overlay":!1},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("van-loading",{attrs:{type:"spinner"}})],1),t.showAir?a("v-uni-view",{staticClass:"kong"},[a("img",{attrs:{src:i("0942"),alt:""}})]):t._e()],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},d836:function(t,e,i){"use strict";i.r(e);var a=i("c39a"),n=i("602f");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("b9e3");var o=i("2877"),r=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"d98a1f86",null);e["default"]=r.exports},f38b:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"uni-page-body[data-v-d98a1f86]{width:100%;height:100%;background:#f9f9f9;position:relative}.van-popup[data-v-d98a1f86]{background:none!important}.log[data-v-d98a1f86]{width:100%;height:%?70?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:%?20?% 0 0;font-size:12px;color:#fff}.contain[data-v-d98a1f86]{width:100%;height:100%}.top[data-v-d98a1f86]{width:100%;height:%?380?%;background-image:-webkit-linear-gradient(top,#e02b11,#f75f33);position:fixed;top:0;left:0;z-index:99;padding:0 %?30?%;-webkit-box-sizing:border-box;box-sizing:border-box}.title[data-v-d98a1f86]{width:100%;height:%?80?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:15px;color:#fff;position:relative}.title>img[data-v-d98a1f86]{width:%?40?%;margin:0 %?20?%}.back[data-v-d98a1f86]{position:absolute;left:0}.choice[data-v-d98a1f86]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative\n\t/* padding-top: 20upx; */}.wrapper[data-v-d98a1f86]{width:85%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.list[data-v-d98a1f86]{height:%?106?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:12px;color:#fff;padding:%?20?% 0}.current[data-v-d98a1f86]{width:100%;height:%?40?%;text-align:center;font-size:14px;color:#fff}.Choice[data-v-d98a1f86]{background:#e53719}.walkDate[data-v-d98a1f86]{width:15%;position:fixed;right:0;top:%?190?%;height:%?106?%;border-left:1px solid #fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:0 %?24?%;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:12px;color:#fff;text-align:center}.walkDate>img[data-v-d98a1f86]{width:%?40?%;height:%?40?%}.result[data-v-d98a1f86]{width:100%;position:absolute;top:%?320?%;bottom:%?200?%;left:0;right:0;z-index:2000;padding:0 %?30?%;-webkit-box-sizing:border-box;box-sizing:border-box}.airs-box[data-v-d98a1f86]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.result-list[data-v-d98a1f86]{width:100%;background:#fff;border-radius:4px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:%?20?%;-webkit-box-sizing:border-box;box-sizing:border-box}.line[data-v-d98a1f86]{width:100%;height:%?30?%;background:#f9f9f9}.result-top[data-v-d98a1f86]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.location[data-v-d98a1f86]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.location-air[data-v-d98a1f86]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-size:18px;color:#333}.location-air>img[data-v-d98a1f86]{width:%?120?%;margin:0 %?16?%}.location-name[data-v-d98a1f86]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-size:14px;color:#333;-webkit-box-sizing:border-box;box-sizing:border-box;margin-top:%?16?%}.money[data-v-d98a1f86]{font-size:18px;color:red}.location-explain[data-v-d98a1f86]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:12px;color:#999;margin-top:%?20?%}.location-explain>img[data-v-d98a1f86]{width:%?36?%}.location-explain>uni-view[data-v-d98a1f86]{margin-left:%?12?%}.prices[data-v-d98a1f86]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-size:12px;color:#999}.bottom[data-v-d98a1f86]{width:100%;height:%?100?%;-webkit-box-shadow:0 1px 4px #bbb;box-shadow:0 1px 4px #bbb;position:fixed;left:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:12px;color:#999;background:#fff}.nav[data-v-d98a1f86]{height:%?100?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:12px}.nav>img[data-v-d98a1f86]{width:%?40?%;height:%?40?%;margin-bottom:%?8?%}.font[data-v-d98a1f86]{color:#e53719}.kong[data-v-d98a1f86]{width:100%;height:100%;position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}body.?%PAGE?%[data-v-d98a1f86]{background:#f9f9f9}",""])}}]);