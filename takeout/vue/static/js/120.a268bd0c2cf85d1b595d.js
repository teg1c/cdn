webpackJsonp([120],{W3Rk:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var o=e("Dd8w"),a=e.n(o),i=e("NYxO"),r=e("Cz8s"),d=e("RoZr"),c=e("Vr3d"),n={data:function(){return{preLoading:!0,cart:{},store:{},goodsActive:{},table_category:{}}},components:{PublicHeader:r.a,StoreCart:d.a,GoodsHandle:c.a},methods:a()({},Object(i.b)(["replaceStore","replaceCart"]),{onLoad:function(){var t=this;return this.$route.query.sid?(this.sid=this.$route.query.sid,this.$route.query.id?(this.id=this.$route.query.id,void this.util.request({url:"wmall/store/reserve/detail",data:{sid:this.sid,id:this.id,table_cid:this.$route.query.table_cid}}).then(function(s){t.preLoading=!1;var e=s.data.message;if(!e.errno){var o=(e=e.message).goodsDetail;t.goodsActive=o,t.table_category=e.table_category,t.cart=e.cart.message.cart,t.store=e.store,t.replaceStore(e.store),t.replaceCart(e.cart.message.cart)}})):(this.$toast("参数错误"),!1)):(this.$toast("参数错误"),!1)}}),computed:a()({},Object(i.c)(["istore","icart"])),mounted:function(){this.onLoad()}},l={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"goods-detail"}},[e("public-header",{attrs:{title:"商品详情"}}),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"goods-img"},[t.goodsActive.slides&&!t.goodsActive.slides.length?e("img",{attrs:{src:t.goodsActive.thumb_,alt:""}}):e("van-swipe",{attrs:{autoplay:3e3,"indicator-color":"#ff2d4b"}},t._l(t.goodsActive.slides,function(t,s){return e("van-swipe-item",{key:s,attrs:{ss:""}},[e("img",{attrs:{src:t,alt:""}})])}),1)],1),t._v(" "),e("div",{staticClass:"goods-name"},[t._v(t._s(t.goodsActive.title))]),t._v(" "),e("div",{staticClass:"sell-info"},[t._v("已售"+t._s(t.goodsActive.sailed)+"  好评"+t._s(t.goodsActive.comment_good))]),t._v(" "),e("div",{staticClass:"goods-num"},[e("van-row",[e("van-col",{staticClass:"price",attrs:{span:"12"}},[t._v(t._s(t.Lang.dollarSign)+" "),e("span",{staticClass:"fee"},[t._v(t._s(t.goodsActive.price))]),t.goodsActive.unitnum>1?e("span",{staticClass:"goods-unitnum"},[t._v(t._s(t.goodsActive.unitnum_multi_cn)+"购")]):t._e()]),t._v(" "),e("goods-handle",{attrs:{goods:t.goodsActive,optionId:0,from:"detail",type:"reserve"}})],1)],1),t._v(" "),e("div",{staticClass:"goods-evaluate"},[t._v("商品评价")]),t._v(" "),e("div",{staticClass:"praise text-center"},[t._v("\n\t\t\t好评率\n\t\t\t"),e("span",{staticClass:"rate"},[t._v(t._s(t.goodsActive.comment_good_percent))]),t._v(" "),e("span",{staticClass:"num"},[t._v("(共"+t._s(t.goodsActive.comment_total)+"人评价)")])]),t._v(" "),e("div",{staticClass:"progress"},[e("div",{staticClass:"progress-bar"},[e("div",{staticClass:"progress-active",style:{width:t.goodsActive.comment_good_percent}})])]),t._v(" "),e("div",{staticClass:"goods-desc"},[t._v("商品描述")]),t._v(" "),e("div",{staticClass:"goods-desc-con",domProps:{innerHTML:t._s(t.goodsActive.description)}})]),t._v(" "),e("router-link",{staticClass:"into-store",attrs:{tag:"div",to:t.util.getUrl({path:"/pages/store/goods",query:{sid:t.store.id}})}},[t._v("\n\t\t进入店铺\n\t")]),t._v(" "),e("store-cart",{attrs:{show:!0,store:t.store,from:"reserve",table_category:t.table_category}}),t._v(" "),e("transition",{attrs:{name:"loading"}},[t.preLoading?e("iloading"):t._e()],1)],1)},staticRenderFns:[]};var v=e("VU/8")(n,l,!1,function(t){e("r69/")},null,null);s.default=v.exports},"r69/":function(t,s){}});
//# sourceMappingURL=120.a268bd0c2cf85d1b595d.js.map