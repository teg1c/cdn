webpackJsonp([111],{CYQJ:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var i=e("Dd8w"),n=e.n(i),a=e("Gu7T"),c=e.n(a),s=e("NYxO"),r={data:function(){return{key:"",MapType:"gaode",indexList:[],list:[],hots:[],showSearch:!1,searchCitys:[],showPreLoading:!0}},watch:{key:function(){var t=this,o=t.key;t.showSearch=!!o,t.searchCitys=[],o&&t.util.request({url:"wmall/home/newLocation/citySearch",data:{key:o}}).then(function(o){var e=o.data.message;e.errno||(e=e.message,t.searchCitys=[].concat(c()(e.citys)))})}},methods:n()({},Object(s.b)(["setLocation","getLocation"]),{onLoad:function(){var t=this,o=this;o.util.request({url:"wmall/home/newLocation/city"}).then(function(e){o.showPreLoading=!1;var i=e.data.message;i.errno?t.util.$toast(i.message,t.util.getUrl({path:"/pages/home/location"}),1500,"replace"):(i=i.message,o.hots=[].concat(c()(i.hots)),o.list=[].concat(c()(i.list)),o.indexList=[].concat(c()(i.indexList)))})},chooseLocation:function(t){var o={last_location_x:this.locationInfo.location_x,address:t.address,location_x:t.location_x,location_y:t.location_y,city:t.city};this.setLocation(o),this.$router.replace(this.util.getUrl({path:"/pages/home/location"}))},onBack:function(){this.$router.replace(this.util.getUrl({path:"/pages/home/location"}))}}),computed:n()({},Object(s.c)(["locationInfo"])),mounted:function(){this.getLocation(),this.onLoad()}},l={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"location-city"}},[e("div",{staticClass:"content"},[e("div",{staticClass:"search-bar"},[e("form",{attrs:{action:"/"}},[e("van-search",{attrs:{placeholder:"输入区域名进行搜索",shape:"round",clearable:""},model:{value:t.key,callback:function(o){t.key=o},expression:"key"}},[e("div",{staticClass:"icon icon-left",attrs:{slot:"left"},on:{click:t.onBack},slot:"left"})])],1)]),t._v(" "),t.showSearch?[t.searchCitys.length>0?e("van-cell-group",t._l(t.searchCitys,function(o,i){return e("van-cell",{key:i,attrs:{title:o.city},on:{click:function(e){return t.chooseLocation(o)}}})}),1):e("van-empty",{attrs:{description:"未搜索到对应区域"}})]:[t.locationInfo.city?e("div",{staticClass:"now-city van-hairline--bottom"},[e("div",{staticClass:"icon icon-locationfill"}),t._v(" "),e("div",{staticClass:"margin-5-r"},[t._v("当前定位区域")]),t._v(" "),e("div",[t._v(t._s(t.locationInfo.city))])]):t._e(),t._v(" "),e("van-index-bar",{attrs:{"index-list":t.indexList,"sticky-offset-top":54,"z-index":"1"}},[t.hots.length>0?e("div",{staticClass:"hot-city"},[e("div",{staticClass:"headline"},[t._v("热门区域")]),t._v(" "),e("van-row",{attrs:{gutter:"8"}},t._l(t.hots,function(o,i){return e("van-col",{key:i,attrs:{span:"6"}},[e("div",{staticClass:"hot-item",on:{click:function(e){return t.chooseLocation(o)}}},[t._v(t._s(o.city))])])}),1)],1):t._e(),t._v(" "),t._l(t.list,function(o,i){return[e("van-index-anchor",{attrs:{index:o.index}},[t._v(t._s(o.index))]),t._v(" "),t._l(o.data,function(o,i){return e("van-cell",{key:i,attrs:{title:o.city},on:{click:function(e){return t.chooseLocation(o)}}})})]})],2)]],2),t._v(" "),t.showPreLoading?e("iloading"):t._e()],1)},staticRenderFns:[]};var h=e("VU/8")(r,l,!1,function(t){e("NLEr")},null,null);o.default=h.exports},NLEr:function(t,o){}});
//# sourceMappingURL=111.ecce37c193e5caf66891.js.map