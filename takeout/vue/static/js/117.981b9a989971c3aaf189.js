webpackJsonp([117],{"/t8I":function(e,t){},kIM1:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("mvHQ"),n=a.n(s),i=a("Gu7T"),r=a.n(i),o=a("Dd8w"),d=a.n(o),l=a("Yo4o"),c=a("nIsk"),u=a("deIj"),p=a("NYxO"),m=a("Cz8s"),h=a("mtWM"),g=a.n(h),v={data:function(){return{query:{},showLoading:!0,key:"",mapConfig:{center:{}},map:{lat:"",lng:""},addressPois:[],addressSearch:[],handAddDialogStatus:!1,handAddress:"",MapType:"gaode"}},components:{PublicHeader:m.a},computed:d()({},Object(p.c)(["editAddress","erranderExtra","erranderStoreExtra"])),watch:{key:function(){var e=this,t=this.key;this.addressSearch=[];var a="system/common/map/suggestion";"google"==this.MapType&&(a="system/common/map/suggestion_google");var s="takeout";"errander"==this.channel&&(s="errander"),t&&this.util.request({url:a,data:{key:t,plugin:s}}).then(function(t){var a=t.data.message;!a.errno&&a.message&&a.message.length>0&&(e.addressSearch=[].concat(r()(e.addressSearch),r()(a.message)))})}},methods:d()({},Object(p.b)(["replaceAddress","setState","replaceState"]),{onToggleHandAddDialogStatus:function(){this.handAddDialogStatus=!this.handAddDialogStatus},onConfirmAddress:function(){var e=this;e.handAddress?this.util.request({url:"wmall/member/address/handAdd",data:{address:e.handAddress}}).then(function(t){var a=t.data.message;if(a.errno)e.util.$toast(a.message);else{var s=(a=a.message).address;s&&s.location_x&&s.location_y&&e.onSelectAddress(s)}}):e.util.$toast("请输入要添加的坐标名称")},onLoad:function(){var e=this,t={sid:this.sid,erranderId:this.erranderId};this.erranderExtra&&this.erranderExtra.agentid&&(t.agentid=this.erranderExtra.agentid),this.util.request({url:"wmall/member/address/location",data:t}).then(function(t){e.showLoading=!1;var a=t.data.message;e.mapConfig=a.message.map,e.map.lat=a.message.map.center.location_x,e.map.lng=a.message.map.center.location_y,e.map.keywords=a.message.map.keywords,e.MapType=e.util.getStorage("MapType"),e.loadmap(),e.key||e.onGetAddressPois(e.map.lat,e.map.lng)})},onGetAddressPois:function(e,t){var a=this,s=this;if("gaode"==s.MapType){var n={types:"商务住宅|科教文化服务|地名地址信息|医疗保健服务|政府机构及社会团体|住宿服务|公司企业|道路附属设施|购物服务|生活服务|体育休闲服务|交通设施服务",location:t+","+e};this.map.keywords&&(n.keywords=this.map.keywords);var i="https://restapi.amap.com/v3/place/around?key=37bb6a3b1656ba7d7dc8946e7e26f39b&radius=1000&offset=25&page=1&extensions=all&output=json&json="+this.util.toQueryString(n);g.a.get(i).then(function(e){if("OK"==(e=e.data).info){var t=[];for(var s in e.pois){var n=e.pois[s].location.split(","),i={name:e.pois[s].address,address:e.pois[s].name,lng:n[0],lat:n[1],location_x:n[1],location_y:n[0]};t.push(i)}a.addressPois=t}})}else Object(u.a)({vue:s,url:"system/common/map/place_around_google",data:{lat:e,lng:t},success:function(e){s.addressPois=[].concat(r()(e.place_around))},fail:function(e){s.util.$toast(e.message)}})},onSelectAddress:function(e){if(1==this.mapConfig.address_name_mode&&(e.address=e.address+"("+e.name+")"),"erranderStoreInput"==this.channel){var t=this.erranderStoreExtra.address_input;t.address=e.address,t.location_x=e.location_x,t.location_y=e.location_y,this.setState({type:"erranderStoreExtra",key:"address_input",val:t}),this.$router.replace(this.util.getUrl({path:"/plugin/pages/paotui/store/order/diy",query:this.util.extend(this.query)}))}else this.replaceAddress(e),this.editAddress&&this.$router.replace(this.util.getUrl({path:"/pages/member/addressPost",query:this.util.extend(this.query,{from:"location"})}))},loadmap:function(){var e=this;"gaode"==e.MapType?Object(l.a)().then(function(t){window.map=e.map=new t.Map("allmap1",{resizeEnable:!0,center:[e.mapConfig.center.location_y,e.mapConfig.center.location_x],zoom:17}),t.event.addListener(e.map,"dragend",function(){var t=e.map.getCenter();e.onGetAddressPois(t.lat,t.lng)}),e.util.getLocation({successLocation:function(t){e.map.panTo([t.lng,t.lat]),e.onGetAddressPois(t.lat,t.lng)},fail:function(e){}})}):Object(c.a)().then(function(t){window.map=e.map=new t.maps.Map(document.getElementById("allmap1"),{center:{lat:parseFloat(e.mapConfig.center.location_x),lng:parseFloat(e.mapConfig.center.location_y)},zoom:17,disableDefaultUI:!0}),e.map.addListener("center_changed",function(){window.setTimeout(function(){var t=e.map.getCenter();t=JSON.parse(n()(t)),e.onGetAddressPois(t.lat,t.lng)},500)}),e.util.getLocation({successLocation:function(t){e.map.panTo({lat:t.lat,lng:t.lng}),e.onGetAddressPois(t.lat,t.lng)},fail:function(e){},mapType:"google"})})}}),created:function(){this.query=this.util.parseQuery(this.$route.query),this.query&&(this.id=this.query.id,this.sid=this.query.sid,this.channel=this.query.channel,this.input=this.query.input,this.erranderId=this.query.erranderId,this.orderId=this.query.orderId,this.key=this.query.key)},mounted:function(){this.onLoad()}},f={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"address-location"}},[a("public-header",{attrs:{title:"新增地址"}}),e._v(" "),a("transition",{attrs:{name:"loading"}},[a("iloading",{directives:[{name:"show",rawName:"v-show",value:e.showLoading,expression:"showLoading"}]})],1),e._v(" "),a("div",{staticClass:"content"},[a("van-search",{attrs:{placeholder:"请输入您的地址"},model:{value:e.key,callback:function(t){e.key=t},expression:"key"}}),e._v(" "),e.key?a("van-cell-group",{staticClass:"search-list"},[e._l(e.addressSearch,function(t,s){return a("van-cell",{key:s,attrs:{title:t.address,label:t.name},on:{click:function(a){return e.onSelectAddress(t)}}})}),e._v(" "),a("div",{staticClass:"padding-15-tb text-center font-14"},[a("span",{staticClass:"c-danger",on:{click:e.onToggleHandAddDialogStatus}},[e._v("未找到地址？点我手动添加")])])],2):[e._m(0),e._v(" "),e.addressPois.length>0?a("div",{staticClass:"location-list"},[e._l(e.addressPois,function(t,s){return a("div",{key:s,staticClass:"list-item flex-lr van-hairline--bottom ",class:{active:0==s},on:{click:function(a){return e.onSelectAddress(t)}}},[a("i",{staticClass:"icon icon-locationfill"}),e._v(" "),a("div",{staticClass:"item-inner"},[a("div",{staticClass:"name ellipsis"},[e._v(e._s(t.address))]),e._v(" "),a("div",{staticClass:"address ellipsis"},[e._v(e._s(t.name))])])])}),e._v(" "),a("div",{staticClass:"padding-15-r padding-15-tb text-center font-14"},[a("span",{staticClass:"c-danger",on:{click:e.onToggleHandAddDialogStatus}},[e._v("未找到地址？点我手动添加")])])],2):e._e()]],2),e._v(" "),a("van-dialog",{attrs:{title:"添加收货地址","show-cancel-button":""},on:{confirm:e.onConfirmAddress},model:{value:e.handAddDialogStatus,callback:function(t){e.handAddDialogStatus=t},expression:"handAddDialogStatus"}},[a("div",{staticClass:"padding-15"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.handAddress,expression:"handAddress"}],staticClass:"w-100",attrs:{type:"text",placeholder:"请输入地址"},domProps:{value:e.handAddress},on:{input:function(t){t.target.composing||(e.handAddress=t.target.value)}}})])])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"map-content"},[t("div",{attrs:{id:"allmap1"}}),this._v(" "),t("div",{staticClass:"center-marker"},[t("img",{attrs:{src:"static/img/marker_red.png",alt:""}})])])}]};var y=a("VU/8")(v,f,!1,function(e){a("/t8I")},null,null);t.default=y.exports}});
//# sourceMappingURL=117.981b9a989971c3aaf189.js.map