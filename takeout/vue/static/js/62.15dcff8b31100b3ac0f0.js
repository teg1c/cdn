webpackJsonp([62],{U3A9:function(t,o){},v5vQ:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var a=e("woOf"),i=e.n(a),s=e("Gu7T"),d=e.n(s),r=e("mvHQ"),n=e.n(r),l=e("Dd8w"),h=e.n(l),c=e("NYxO"),g=e("mzkE"),y=e("Cz8s"),f=e("fgl9"),u=e("kEnp"),m=e("qBcp"),p=e("rniE"),T={data:function(){return{active:0,getLocationFail:!1,showPreLoading:!0,is_use_diy:0,diydata:{diy:{data:{}},storeExtra:{condition:{order:"",mode:"",dis:""},filter_title:"综合排序",multiple:!1,filter:!1},stores:{loading:!0,finished:!1,page:1,psize:20,loaded:0,empty:0,data:[],filter:{cid:0,child_id:0,categorySelectedId:0}},hotGoods:{loading:!0,finished:!1,page:1,psize:20,loaded:0,empty:0,data:[],filter:{sailed_month:0,is_hot:0,comment_good_percent:0}},showStoreOrGoods:"store",popup:{storeSearch:!1,serviceQrcode:!1},superRedpacketData:{},config:{},guideData:{is_show:!1}},menufooter:{},order_remind:{},showFixedSearchBar:!1,goodsTabActive:0,goodsTabActiveReal:0,goodsTabFixed:0,goodsTabHeights:[],goodsTabOffsetTop:0,followHeight:0,scrollFromClickTab:!1,storesTabActive:0,storesTabActiveReal:0,storesTabFixed:0,storesTabHeights:[],storesTabOffsetTop:0,follow:{},userAgreement:"",failedTips:{type:"message",tips:"平台暂时关闭",btnText:"知道喽",link:"close"},mallClose:!1,isRefresh:!1}},components:{PublicHeader:y.a,PublicFooter:g.a,diy:u.a,OrderStatusWarpper:p.a,follow:f.a,userAgreement:m.a},methods:h()({},Object(c.b)(["setLocation","getLocation","replaceAllcart"]),{onToggleShowStoreOrGoods:function(t){this.diydata.showStoreOrGoods=t},onToggleHotGoodsFilter:function(t){this.diydata.hotGoods.filter[t]=!this.diydata.hotGoods.filter[t],this.onGetHotGoods(!0)},onGetHotGoods:function(t){var o=this,e=this;t&&(e.diydata.hotGoods={page:1,psize:20,loaded:0,empty:!1,loading:!0,finished:!1,filter:e.diydata.hotGoods.filter}),e.diydata.hotGoods.loading=!0,this.util.request({url:"wmall/mall/index/hotGoods",data:{lat:e.locationInfo.location_x,lng:e.locationInfo.location_y,page:e.diydata.hotGoods.page,psize:e.diydata.hotGoods.psize,filter:n()(e.diydata.hotGoods.filter)}}).then(function(a){var i=a.data.message.message;t&&(e.diydata.hotGoods.data=[]),e.diydata.hotGoods.data=[].concat(d()(o.diydata.hotGoods.data),d()(i.goods)),i.pagetotal<=e.diydata.hotGoods.page&&(e.diydata.hotGoods.loaded=1,e.diydata.hotGoods.data.length||(e.diydata.hotGoods.empty=!0),e.diydata.hotGoods.finished=!0),e.diydata.hotGoods.loading=!1,e.diydata.hotGoods.page++})},onChangeStoreCategory:function(t){if(1!=this.diy.is_has_allstore||!t.id||t.id==this.diydata.stores.filter.categorySelectedId)return!1;this.diydata.stores.filter.child_id=t.parentid>0?t.id:0,this.diydata.stores.filter.categorySelectedId=t.id,this.onGetStore(!0)},onToggleDiscount:function(t,o){"waimai_stores"==this.diydata.diy.data.items[o].id?this.diydata.diy.data.items[o].data[t].activity.is_show_all=!this.diydata.diy.data.items[o].data[t].activity.is_show_all:this.diydata.stores.data[t].activity.is_show_all=!this.diydata.stores.data[t].activity.is_show_all},onToggleStoresTabDiscount:function(t,o,e){this.diydata.diy.data.items[e].data[t].stores[o].activity.is_show_all=!this.diydata.diy.data.items[e].data[t].stores[o].activity.is_show_all},onCloseRedpacket:function(){this.diydata.superRedpacketData.is_show=!1,this.diydata.superRedpacketData=i()({},this.diydata.superRedpacketData)},onCloseGuide:function(){this.diydata.guideData.is_show=!1},onChangeStoreExtra:function(t){"multiple"==t?(this.diydata.storeExtra.multiple=!0,this.diydata.storeExtra.filter=!1):(this.diydata.storeExtra.multiple=!1,this.diydata.storeExtra.filter=!0),this.diydata.popup.storeSearch=!0},onStoreOrderby:function(t,o,e){if("order"==t)"svipRedpacket"==o?this.diydata.storeExtra.condition.dis=o:(this.diydata.storeExtra.condition.order=o,this.diydata.storeExtra.multiple=!1,this.diydata.storeExtra.filter_title="sailed"!=o&&"distance"!=o?e:"综合排序");else if("discounts"==t){if(this.diydata.storeExtra.condition.dis==o&&(o=""),this.diydata.storeExtra.condition.dis=o,"refresh"!=e)return!1}else{if("mode"==t)return this.diydata.storeExtra.condition.mode==o&&(o=""),this.diydata.storeExtra.condition.mode=o,!1;"clear"==t?(this.diydata.storeExtra.condition.dis="",this.diydata.storeExtra.condition.order="",this.diydata.storeExtra.condition.mode="",this.diydata.storeExtra.filter=!1,this.diydata.storeExtra.filter_title="综合排序"):"finish"==t&&(this.diydata.storeExtra.filter=!1)}this.diydata.popup.storeSearch=!1,this.onGetStore(!0)},onGetStore:function(t){var o=this,e=this;t&&(e.diydata.stores={page:1,psize:20,loaded:0,empty:!1,loading:!0,filter:e.diydata.stores.filter}),e.diydata.stores.loading=!0,this.util.request({url:"wmall/mall/index/store",data:{lat:e.locationInfo.location_x,lng:e.locationInfo.location_y,page:e.diydata.stores.page,psize:e.diydata.stores.psize,cid:e.diydata.stores.filter.cid,child_id:e.diydata.stores.filter.child_id,condition:n()(e.diydata.storeExtra.condition)}}).then(function(a){var i=a.data.message.message;t&&(e.diydata.stores.data=[]),e.diydata.stores.data=[].concat(d()(o.diydata.stores.data),d()(i.stores)),i.pagetotal<=e.diydata.stores.page&&(e.diydata.stores.loaded=1,e.diydata.stores.data.length||(e.diydata.stores.empty=!0),e.diydata.stores.finished=!0),e.diydata.stores.loading=!1,e.diydata.stores.page++,!e.diydata.stores.loaded&&i.stores.length<10&&o.onGetStore()})},onLoad:function(){var t=this,o=this;this.util.request({url:"wmall/mall/index/index",data:{lat:this.locationInfo.location_x,lng:this.locationInfo.location_y,menufooter:1,order_remind:1,code:this.code||0}}).then(function(e){o.showPreLoading=!1;var a=e.data.message;if(a.errno)return-3e3==a.errno?(t.mallClose=!0,t.failedTips.tips=a.message,!1):void t.$toast(a.message);if(o.replaceAllcart(a.message.carts),o.diydata.config=a.message.config,o.diydata.diy=a.message.diy,o.diy=a.message.diy,o.util.setWXTitle(o.diydata.diy.data.page.title),o.diydata.superRedpacketData=a.message.superRedpacketData,o.diydata.superRedpacketData.is_show=!0,1==o.diy.is_has_allstore&&(o.diydata.stores.filter.cid=o.diy.cid,o.diydata.stores.filter.categorySelectedId=o.diy.cid),o.diydata.diy.guide)if(1==o.diydata.diy.guide.params.status&&"interval"==o.diydata.diy.guide.params.show_setting){var i=t.util.getStorage("guideStorage");(!i||i&&!i.show)&&(t.util.setStorage("guideStorage",{show:1},60*o.diydata.diy.guide.params.interval_time),o.diydata.guideData.is_show=!0)}else 1==o.diydata.diy.guide.params.status&&"everytime"==o.diydata.diy.guide.params.show_setting&&(t.util.removeStorage("guideStorage"),o.diydata.guideData.is_show=!0);var s=a.message.default_location;if(s&&s.location_x&&(t.getLocationFail=!1,o.setLocation(s)),navigator.userAgent.indexOf("CK 2.0")>-1);if((1==t.util.getStorage("istamp")||1==t.util.getStorage("jskey"))&&a.message.stores.stores.length>8){var r=Math.floor(5*Math.random());a.message.stores.stores=a.message.stores.stores.slice(2,r)}navigator.userAgent.toLowerCase().match(/MicroMessenger/i);a.message.stores.stores=o.util.df(a.message.stores.stores,1),o.diydata.stores.data=[].concat(d()(t.diydata.stores.data),d()(a.message.stores.stores)),a.message.stores.pagetotal<=o.diydata.stores.page&&(o.diydata.stores.loaded=1,o.diydata.stores.data.length||(o.diydata.stores.empty=!0),o.diydata.stores.finished=!0),o.diydata.stores.loading=!1,o.diydata.stores.page++,o.diydata.stores.loaded||a.message.stores.stores.length||o.onGetStore(),1==o.diydata.diy.is_has_hotGoods&&(o.diydata.hotGoods.data=[].concat(d()(t.diydata.hotGoods.data),d()(a.message.hotGoods.goods)),a.message.hotGoods.pagetotal<=o.diydata.hotGoods.page&&(o.diydata.hotGoods.loaded=1,o.diydata.hotGoods.data.length||(o.diydata.hotGoods.empty=!0),o.diydata.hotGoods.finished=!0),o.diydata.hotGoods.loading=!1,o.diydata.hotGoods.page++,1!=o.diydata.diy.is_has_allstore&&(o.diydata.showStoreOrGoods="goods")),o.diydata.cart_sum=a.message.cart_sum,o.userAgreement=a.message.userAgreement,o.menufooter=window.menufooter,o.follow=window.follow,o.order_remind=window.order,o.isRefresh=!1,1==o.diy.is_show_kefu&&o.util.imeiqia(),1==o.diy.is_has_goodsTab&&t.$nextTick(function(){t.onCalculateGoodsTabItemHeight()}),1==o.diy.is_has_storesTab&&t.$nextTick(function(){t.onCalculateStoresTabItemHeight()})})},onInit:function(){var t=this;t.util.isGlala()&&t.util.setStorage("locationInfo",{address:"Philippines",location_x:"14.5995124",location_y:"120.9842195",expire:1603868034}),this.getLocation(),this.locationInfo.location_x?(t.getLocationFail=!1,t.locationInfo.last_location_x=this.locationInfo.location_x,t.onLoad()):this.util.getLocation({successLocation:function(o){t.setLocation({location_x:o.location_x,location_y:o.location_y}),t.onLoad()},successAddress:function(o){t.setLocation({location_x:o.location_x,location_y:o.location_y,address:o.address})},fail:function(o){t.setLocation({last_location_x:0,location_x:0,address:"获取定位失败"}),t.getLocationFail=!0,t.onLoad()}})},onGetCartNums:function(){var t=this;this.util.request({url:"wmall/mall/index/cart"}).then(function(o){var e=o.data.message;e.errno?t.util.$toast(e.message):t.diydata.cart_sum=e.message.cart_sum})},onToggleService:function(){this.diydata.popup.serviceQrcode=!this.diydata.popup.serviceQrcode},onChangeGoodsTabActive:function(t){this.goodsTabActiveReal=t.value},onChangeStoresTabActive:function(t){this.storesTabActiveReal=t.value},onChangeFollowStatus:function(t){t.status||(this.followHeight=0)},onCalculateGoodsTabItemHeight:function(){this.goodsTabOffsetTop=document.getElementsByClassName("goods-tab-inner")[0].offsetTop,this.goodsTabOffsetTop-=document.getElementsByClassName("van-tabs")[0].clientHeight-44,document.getElementById("follow")&&(this.followHeight=document.getElementsByClassName("follow-tips")[0].clientHeight,this.goodsTabOffsetTop-=this.followHeight);for(var t=document.getElementsByClassName("goods-tab-item"),o=this.goodsTabOffsetTop,e=[],a=0;a<t.length;a++){o+=t[a].clientHeight,e.push(o)}this.goodsTabHeights=e},onToggleGoodsTab:function(t){this.scrollFromClickTab=!0;var o=this.goodsTabOffsetTop-44;t.index>=1&&(o=this.goodsTabHeights[t.index-1]-44),o-=this.followHeight,this.diydata.diy.is_has_location&&o>100?(this.goodsTabFixed=2,o-=52):this.goodsTabFixed=1,window.scrollTo(0,o),this.goodsTabActive=t.index},onCalculateStoresTabItemHeight:function(){this.storesTabOffsetTop=document.getElementsByClassName("stores-tab-group")[0].offsetTop,this.storesTabOffsetTop-=document.getElementById("stores-tab").clientHeight-44,document.getElementById("follow")&&(this.followHeight=document.getElementsByClassName("follow-tips")[0].clientHeight,this.storesTabOffsetTop-=this.followHeight);for(var t=document.getElementsByClassName("stores-tab-list"),o=this.storesTabOffsetTop,e=[],a=0;a<t.length;a++){o+=t[a].clientHeight,e.push(o)}this.storesTabHeights=e},onToggleStoresTab:function(t){this.scrollFromClickTab=!0;var o=this.storesTabOffsetTop-44;t.index>=1&&(o=this.storesTabHeights[t.index-1]-44),o-=this.followHeight,this.diydata.diy.is_has_location&&o>100?(this.storesTabFixed=2,o-=52):this.storesTabFixed=1,window.scrollTo(0,o),this.storesTabActive=t.index},onPullDownRefresh:function(){this.diydata.stores={page:1,psize:20,loaded:0,empty:!1,loading:!0,data:[],filter:this.diydata.stores.filter},this.diydata.hotGoods={page:1,psize:20,loaded:0,empty:!1,loading:!0,finished:!1,data:[],filter:this.diydata.hotGoods.filter},this.onLoad()}}),created:function(){this.$route.query&&this.$route.query.code&&(this.code=this.$route.query.code);var t=this.util.parseQuery(this.$route.query);t&&this.util.getUserParams(t)},watch:{$route:function(t,o){if(this.$route.query&&this.$route.query.mobilephone){var e=this.util.parseQuery(this.$route.query);e&&this.util.getUserParams(e)}}},activated:function(){if(this.locationInfo.last_location_x!=this.locationInfo.location_x)return this.diydata.stores={page:1,psize:20,loaded:0,empty:!1,loading:!0,data:[],filter:this.diydata.stores.filter},this.diydata.storeExtra={condition:{order:"",mode:"",dis:""},filter_title:"综合排序",multiple:!1,filter:!1},this.diydata.hotGoods={page:1,psize:20,loaded:0,empty:!1,loading:!0,finished:!1,data:[],filter:this.diydata.hotGoods.filter},void this.onInit();this.onGetCartNums(),this.diydata&&this.diydata.diy&&this.diydata.diy.data&&this.diydata.diy.data.page&&this.util.setWXTitle(this.diydata.diy.data.page.title)},computed:h()({},Object(c.c)(["locationInfo","allcart"])),mounted:function(){var t=this;t.util.jsauth(),t.onInit(),window.addEventListener("scroll",function(){var o=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;if(t.showFixedSearchBar=o>100,1==t.diy.is_has_goodsTab){var e=44;if(t.diydata.diy.is_has_location&&t.showFixedSearchBar&&(e+=52),(o=Math.ceil(o+e))>=t.goodsTabOffsetTop?t.diydata.diy.is_has_location&&t.showFixedSearchBar?t.goodsTabFixed=2:t.goodsTabFixed=1:t.goodsTabFixed=0,!t.scrollFromClickTab)for(var a=t.goodsTabHeights,i=a.length,s=0;s<i;s++){if(!a[s+1]){t.goodsTabActive=s;break}if(o<a[s]){t.goodsTabActive=s;break}if(o>=a[s]&&o<a[s+1]){t.goodsTabActive=s+1;break}}}if(1==t.diy.is_has_storesTab){e=44;if(t.diydata.diy.is_has_location&&t.showFixedSearchBar&&(e+=52),(o=Math.ceil(o+e))>=t.storesTabOffsetTop?t.diydata.diy.is_has_location&&t.showFixedSearchBar?t.storesTabFixed=2:t.storesTabFixed=1:t.storesTabFixed=0,!t.scrollFromClickTab){var d=t.storesTabHeights;for(i=d.length,s=0;s<i;s++){if(!d[s+1]){t.storesTabActive=s;break}if(o<d[s]){t.storesTabActive=s;break}if(o>=d[s]&&o<d[s+1]){t.storesTabActive=s+1;break}}}}t.scrollFromClickTab=!1})}},_={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"mall-home"}},[e("div",{attrs:{id:"allmap"}}),t._v(" "),t.order_remind&&t.order_remind.log?e("order-status-warpper",{attrs:{order:t.order_remind}}):t._e(),t._v(" "),(t.util.isGlala()||t.util.ish5app())&&!t.util.getStorage("userAgreement")&&t.userAgreement?e("user-agreement",{attrs:{agreement:t.userAgreement}}):t._e(),t._v(" "),t.follow&&1==t.follow.status?e("follow",{attrs:{follow:t.follow},on:{changeStatus:t.onChangeFollowStatus}}):t._e(),t._v(" "),e("public-footer",{attrs:{menufooter:t.menufooter,showFailedTips:t.mallClose,failedTips:t.failedTips}}),t._v(" "),e("div",{staticClass:"container "},[e("van-pull-refresh",{on:{refresh:t.onPullDownRefresh},model:{value:t.isRefresh,callback:function(o){t.isRefresh=o},expression:"isRefresh"}},[e("diy",{attrs:{diydata:t.diydata,getLocationFail:t.getLocationFail,showFixedSearchBar:t.showFixedSearchBar,goodsTabActive:t.goodsTabActive,goodsTabFixed:t.goodsTabFixed,storesTabActive:t.storesTabActive,storesTabFixed:t.storesTabFixed},on:{onToggleDiscount:t.onToggleDiscount,onToggleStoresTabDiscount:t.onToggleStoresTabDiscount,onChangeStoreExtra:t.onChangeStoreExtra,onStoreOrderby:t.onStoreOrderby,onGetStore:t.onGetStore,onCloseRedpacket:t.onCloseRedpacket,onCloseGuide:t.onCloseGuide,onToggleService:t.onToggleService,onToggleGoodsTab:t.onToggleGoodsTab,onChangeGoodsTabActive:t.onChangeGoodsTabActive,onToggleStoresTab:t.onToggleStoresTab,onChangeStoresTabActive:t.onChangeStoresTabActive,onChangeStoreCategory:t.onChangeStoreCategory,onToggleShowStoreOrGoods:t.onToggleShowStoreOrGoods,onToggleHotGoodsFilter:t.onToggleHotGoodsFilter,onGetHotGoods:t.onGetHotGoods}})],1)],1),t._v(" "),t.showPreLoading?e("iloading"):t._e()],1)},staticRenderFns:[]};var b=e("VU/8")(T,_,!1,function(t){e("U3A9")},null,null);o.default=b.exports}});
//# sourceMappingURL=62.15dcff8b31100b3ac0f0.js.map