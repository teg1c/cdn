webpackJsonp([12],{"/xN4":function(t,s){},N7uu:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var o=i("Dd8w"),a=i.n(o),e=i("NYxO"),n=i("Cz8s"),c=i("RoZr"),r=i("Vr3d"),l=i("qHkI"),d={data:function(){return{preLoading:!0,cart:{},store:{gconfig:{}},comment:{total:0,total_has_thumb:0,total_activity_good:0,total_activity_bad:0,data:[]},goodsActive:{},sharePopupStatus:!1}},components:{PublicHeader:n.a,StoreCart:c.a,GoodsHandle:r.a,IVanShareSheet:l.a},methods:a()({},Object(e.b)(["replaceStore","replaceCart"]),{onToggleSharePopupStatus:function(){this.sharePopupStatus=!this.sharePopupStatus},selectPinadan:function(t){this.pindan_id=t},onSelectShare:function(t){alert(t.name)},onLoad:function(){var t=this;return this.$route.query.sid?(this.sid=this.$route.query.sid,this.$route.query.id?(this.id=this.$route.query.id,void this.util.request({url:"wmall/store/goods/detail",data:{sid:this.sid,id:this.id}}).then(function(s){t.preLoading=!1;var i=s.data.message;if(!i.errno){var o=(i=i.message).goodsDetail;t.goodsActive=o,t.cart=i.cart.message.cart,t.store=i.store,t.comment=t.util.extend(t.comment,i.comment),t.replaceStore(i.store),t.replaceCart(i.cart.message.cart)}})):(this.$toast("参数错误"),!1)):(this.$toast("参数错误"),!1)}}),computed:a()({},Object(e.c)(["istore","icart"])),created:function(){this.query=this.$route.query,this.query&&(this.pindan_id=0,this.query.pindan_id>0&&(this.pindan_id=this.query.pindan_id))},mounted:function(){this.onLoad()}},v={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"goods-detail"}},[i("public-header",{attrs:{title:"商品详情"}}),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"goods-img"},[t.goodsActive.slides&&!t.goodsActive.slides.length?i("img",{attrs:{src:t.goodsActive.thumb_,alt:""}}):i("van-swipe",{attrs:{autoplay:3e3,"indicator-color":"#ff2d4b"}},t._l(t.goodsActive.slides,function(t,s){return i("van-swipe-item",{key:s,attrs:{ss:""}},[i("img",{attrs:{src:t,alt:""}})])}),1)],1),t._v(" "),i("div",{staticClass:"goods-name"},[i("span",[t._v(t._s(t.goodsActive.title))]),t._v(" "),i("span",{staticClass:"icon icon-share",on:{click:t.onToggleSharePopupStatus}})]),t._v(" "),i("div",{staticClass:"sell-info"},[1==t.store.gconfig.goods_sailed_status?[t._v("\n\t\t\t\t已售"+t._s(t.goodsActive.sailed)+"  \n\t\t\t")]:t._e(),t._v(" "),1==t.store.gconfig.goods_comment_good_status?[t._v("\n\t\t\t\t好评"+t._s(t.goodsActive.comment_good)+"\n\t\t\t")]:t._e()],2),t._v(" "),i("div",{staticClass:"goods-num"},[i("van-row",[i("van-col",{staticClass:"price flex",attrs:{span:"18"}},[i("div",[t._v("\n\t\t\t\t\t\t"+t._s(t.Lang.dollarSign)+"\n\t\t\t\t\t\t"),i("span",{staticClass:"fee"},[t._v(t._s(t.goodsActive.price)),i("span",{staticClass:"font-14 font-bold"},[t._v("/"+t._s(t.goodsActive.unitname))])])]),t._v(" "),t.goodsActive.old_price>0?i("div",{staticClass:"old-price"},[t._v(t._s(t.Lang.dollarSign)+t._s(t.goodsActive.old_price))]):t._e(),t._v(" "),1!=t.goodsActive.svip_status||t.goodsActive.discount_price?1!=t.goodsActive.kabao_status||t.goodsActive.discount_price?[t.goodsActive.discount>0&&t.goodsActive.discount<10?i("div",{staticClass:"discount"},[i("span",{staticClass:"icon icon-tag font-12"}),t._v(" "),i("span",[t._v(t._s(t.goodsActive.discount)+"折")])]):t._e()]:i("div",{staticClass:"kabao-price-wrap"},[i("span",{staticClass:"kabao-price"},[t._v("\n\t\t\t\t\t\t\t￥"+t._s(t.goodsActive.kabao_price)+"\n\t\t\t\t\t\t")]),t._v(" "),i("span",{staticClass:"kabao-label"},[i("i",{staticClass:"icon icon-vip"}),t._v(" "),i("span",[t._v(t._s(t.goodsActive.kabao_group_title))])])]):i("div",{staticClass:"svip-price-tips margin-10-l"},[i("div",{staticClass:"svip-price"},[i("i",{staticClass:"icon icon-crownfill"}),t._v(" "),i("span",[t._v(t._s(t.goodsActive.discount)+"折")])]),t._v(" "),i("div",{staticClass:"svip-activity"},[t._v("超级会员专享")])]),t._v(" "),t.goodsActive.unitnum>1?i("div",[i("span",{staticClass:"goods-unitnum"},[t._v(t._s(t.goodsActive.unitnum_multi_cn)+"购")])]):t._e()],2),t._v(" "),i("goods-handle",{attrs:{goods:t.goodsActive,optionId:0,from:"detail"}})],1)],1),t._v(" "),t.goodsActive.content?i("div",{staticClass:"goods-content"},[t._v("\n\t\t\t"+t._s(t.goodsActive.content)+"\n\t\t")]):t._e(),t._v(" "),i("div",{staticClass:"goods-evaluate"},[t._v("商家")]),t._v(" "),i("div",{staticClass:"enter-store",on:{click:function(s){return t.util.jsUrl("/pages/store/goods",{sid:t.store.id})}}},[i("van-row",{staticClass:"flex-lr",attrs:{gutter:"10"}},[i("van-col",{attrs:{span:"3"}},[i("div",{staticClass:"store-logo"},[i("img",{attrs:{src:t.store.logo,alt:""}})])]),t._v(" "),i("van-col",{attrs:{span:"16"}},[i("div",{staticClass:"store-info"},[i("div",{staticClass:"store-title"},[t._v(t._s(t.store.title))]),t._v(" "),i("div",{staticClass:"store-content"},[t._v(t._s(t.store.content))])])]),t._v(" "),i("van-col",{staticClass:"flex-lr font-12",attrs:{span:"5"}},[i("span",[t._v("进店逛逛")]),t._v(" "),i("i",{staticClass:"icon icon-right c-gray"})])],1)],1),t._v(" "),i("div",{staticClass:"goods-evaluate"},[t._v("商品评价")]),t._v(" "),i("div",{staticClass:"praise text-center"},[t._v("\n\t\t\t好评率\n\t\t\t"),i("span",{staticClass:"rate"},[t._v(t._s(t.goodsActive.comment_good_percent))]),t._v(" "),i("span",{staticClass:"num"},[t._v("(共"+t._s(t.goodsActive.comment_total)+"人评价)")])]),t._v(" "),i("div",{staticClass:"progress"},[i("div",{staticClass:"progress-bar"},[i("div",{staticClass:"progress-active",style:{width:t.goodsActive.comment_good_percent}})])]),t._v(" "),t.comment.total>0?[i("div",{staticClass:"goods-evaluate"},[t._v("商品评论")]),t._v(" "),i("div",{staticClass:"goods-comment"},[i("div",{staticClass:"search-wrap"},[t.comment.total_has_thumb>0?i("div",{staticClass:"search-item",on:{click:function(s){return t.util.jsUrl("/core/pages/store/goodsComment",{goods_id:t.goodsActive.id,thumb_status:1})}}},[i("span",[t._v("有图")]),t._v(" "),i("span",[t._v(t._s(t.comment.total_has_thumb))])]):t._e(),t._v(" "),t.comment.total_activity_good>0?i("div",{staticClass:"search-item",on:{click:function(s){return t.util.jsUrl("/core/pages/store/goodsComment",{goods_id:t.goodsActive.id,activity:1})}}},[i("span",{staticClass:"icon icon-appreciate_fill_light"}),t._v(" "),i("span",[t._v(t._s(t.comment.total_activity_good))])]):t._e(),t._v(" "),t.comment.total_activity_bad>0?i("div",{staticClass:"search-item",on:{click:function(s){return t.util.jsUrl("/core/pages/store/goodsComment",{goods_id:t.goodsActive.id,activity:2})}}},[i("span",{staticClass:"icon icon-appreciate_fill_light rotate"}),t._v(" "),i("span",[t._v(t._s(t.comment.total_activity_bad))])]):t._e()]),t._v(" "),t._l(t.comment.data,function(s,o){return i("div",{key:o,staticClass:"comment-item"},[i("div",{staticClass:"comment-inner border-1px-b"},[i("div",{staticClass:"left"},[i("div",{staticClass:"avatar "},[i("img",{attrs:{src:s.avatar}})])]),t._v(" "),i("div",{staticClass:"right"},[i("van-row",[i("van-col",{attrs:{span:"17"}},[i("div",{staticClass:"w-100 ellipsis margin-5-t"},[t._v(t._s(s.username))]),t._v(" "),s.activity>0?i("div",{staticClass:"flex margin-5-t"},[i("span",{staticClass:"icon icon-appreciate_fill_light c-danger",class:{rotate:2==s.activity}}),t._v(" "),i("span",{staticClass:"font-12 c-gray"},[t._v(t._s(1==s.activity?"赞":"踩")+"了该商品")])]):t._e()]),t._v(" "),i("van-col",{staticClass:"text-right font-12 c-gray",attrs:{span:"7"}},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(s.addtime_cn)+"\n\t\t\t\t\t\t\t\t")])],1),t._v(" "),s.note?i("div",{staticClass:"note"},[t._v(t._s(s.note))]):t._e(),t._v(" "),s.thumbs&&s.thumbs.length>0?i("div",{staticClass:"thumbs"},[i("van-row",t._l(s.thumbs,function(o,a){return i("van-col",{key:a,attrs:{span:"6"}},[i("div",{staticClass:"thumb-item",on:{click:function(i){return t.util.jsPreviewImage(s.thumbs,a)}}},[i("div",{staticClass:"img-wrap"},[i("img",{attrs:{src:o}})])])])}),1)],1):t._e()],1)])])}),t._v(" "),i("div",{staticClass:"comment-total",on:{click:function(s){return t.util.jsUrl("/core/pages/store/goodsComment",{goods_id:t.goodsActive.id})}}},[i("span",[t._v(t._s(t.comment.total)+"条外卖评价")]),t._v(" "),i("span",{staticClass:"icon icon-right font-12 c-gray"})])],2)]:t._e(),t._v(" "),i("div",{staticClass:"goods-desc"},[t._v("商品描述")]),t._v(" "),i("div",{staticClass:"goods-desc-con",domProps:{innerHTML:t._s(t.goodsActive.description)}})],2),t._v(" "),t._e(),t._v(" "),i("store-cart",{attrs:{show:!0,store:t.store,pindan_id:t.pindan_id},on:{selectPinadan:t.selectPinadan}}),t._v(" "),i("transition",{attrs:{name:"loading"}},[t.preLoading?i("iloading"):t._e()],1),t._v(" "),i("i-van-share-sheet",{attrs:{status:t.sharePopupStatus,title:"立即分享给好友",query:{type:1,id:t.goodsActive.id}},on:{onTogglePopup:t.onToggleSharePopupStatus}})],1)},staticRenderFns:[]};var _=i("VU/8")(d,v,!1,function(t){i("/xN4")},null,null);s.default=_.exports},pmK6:function(t,s){},qHkI:function(t,s,i){"use strict";var o={props:{title:{type:String,default:function(){return"立即分享给好友"}},cancelext:{type:String,default:function(){return"取消"}},options:{type:Array,default:function(){return[{name:"微信",icon:"wechat"},{name:"分享海报",icon:"poster"}]}},status:Boolean,query:{type:Object,default:function(){return{type:0,id:0}}}},data:function(){return{url:window.location.href,zhezhaoShow:!1}},computed:{popupStatus:{get:function(){return this.status},set:function(t){}}},methods:{onSelectShare:function(t){if("wechat"==t.icon)this.onChangeZhezhao(!0);else if("poster"==t.icon){var s=this.util.getUrl({path:"/plugin/pages/poster/index",query:this.query});this.$router.push(this.util.getUrl(s))}},onCancelShare:function(){this.$emit("onTogglePopup")},onTogglePopup:function(){this.$emit("onTogglePopup")},onChangeZhezhao:function(t){t&&this.onTogglePopup(),this.zhezhaoShow=!this.zhezhaoShow},onCopy:function(t){this.onTogglePopup(),this.util.$toast("复制成功")},onError:function(t){this.util.$toast("复制失败")}}},a={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"i-van-share-sheet"}},[i("van-share-sheet",{attrs:{options:t.options,title:t.title,"close-on-click-overlay":!0},on:{select:t.onSelectShare,cancel:t.onCancelShare,"click-overlay":t.onCancelShare},model:{value:t.popupStatus,callback:function(s){t.popupStatus=s},expression:"popupStatus"}}),t._v(" "),t.zhezhaoShow?i("div",{staticClass:"share-zhezhao",on:{click:function(s){return t.onChangeZhezhao(!1)}}},[i("img",{attrs:{src:"static/img/share-layer.png",alt:""}})]):t._e()],1)},staticRenderFns:[]};var e=i("VU/8")(o,a,!1,function(t){i("pmK6")},null,null);s.a=e.exports}});
//# sourceMappingURL=12.59e18cd8bfd0fa00395e.js.map