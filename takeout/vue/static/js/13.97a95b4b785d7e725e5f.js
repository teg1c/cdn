webpackJsonp([13],{pmK6:function(t,e){},qAtr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("Gu7T"),s=i.n(o),a=i("Dd8w"),n=i.n(a),r=i("NYxO"),l=i("Cz8s"),c=i("mzkE"),d=i("RoZr"),u=i("Vr3d"),v=i("qHkI"),p=i("iqGf"),h=(i("5LIk"),i("g3Gj"),{data:function(){return{cart:{},store:{},goodsActive:{title:"商品详情"},videoList:[],goodsIndex:0,_last:0,sharePopupStatus:!1,showPreLoading:!0,menufooter:{}}},components:{PublicHeader:l.a,StoreCart:d.a,GoodsHandle:u.a,IVanShareSheet:v.a,PublicFooter:c.a,videoPlayer:p.videoPlayer},methods:n()({},Object(r.b)(["replaceStore","replaceCart"]),{onToggleSharePopupStatus:function(){this.sharePopupStatus=!this.sharePopupStatus},selectPinadan:function(t){this.pindan_id=t},onSelectShare:function(t){alert(t.name)},onLoad:function(){return this.$route.query.sid?(this.sid=this.$route.query.sid,this.$route.query.id?(this.id=this.$route.query.id,void this.onGetGoods(!0)):(this.$toast("参数错误"),!1)):(this.$toast("参数错误"),!1)},onGetGoods:function(t){var e=this,i={sid:e.sid,id:e.id,menufooter:1};t&&(i.is_first=1),e.util.request({url:"wmall/store/goods/newDetail",data:i}).then(function(i){e.showPreLoading=!1;var o=i.data.message;if(o.errno)e.$toast(o.message);else{var a=(o=o.message).goodsDetail;e.goodsActive=a,e.cart=o.cart.message.cart,e.store=o.store,e.replaceStore(o.store),e.replaceCart(o.cart.message.cart),e.util.setWXTitle(a.title),t&&(e.videoList=[].concat(s()(o.videoList)),e.goodsIndex=o.goodsIndex,e._last=o.goodsIndex,e.menufooter=window.menufooter)}})},onSwipeChange:function(t){this.id=this.videoList[t].id,this.goodsIndex=t;var e=this._last;if("video"==this.videoList[e].showType){var i="videoPlayer-"+e;this.$refs[i][0].player.tech_.el_.pause()}this._last=t,this.onGetGoods(),t==this.videoList.length-1&&this.$toast("已加载所有商品")},onFavor:function(){var t=this;if(t.store.is_favorite)var e="cancal";else e="star";t.util.request({url:"wmall/member/op/favorite",data:{id:t.store.id,type:e}}).then(function(i){var o=i.data.message;o.errno?t.$toast(o.message):"star"==e?(t.$toast("添加收藏成功"),t.store.is_favorite=1):(t.$toast("取消收藏成功"),t.store.is_favorite=0)})},onPlayerReady:function(t){var e="videoPlayer-"+t,i=this.$refs[e][0].player.tech_.el_;this.util.isIos()?(i.removeAttribute("x5-video-player-type","h5-page"),i.setAttribute("playsinline",!0),i.setAttribute("x5-playsinline",!0),i.setAttribute("webkit-playsinline",!0)):(i.setAttribute("x5-video-player-type","h5-page"),i.removeAttribute("playsinline"),i.removeAttribute("x5-playsinline"),i.removeAttribute("webkit-playsinline")),i.play()}}),computed:n()({},Object(r.c)(["istore","icart"])),created:function(){this.query=this.$route.query,this.query&&(this.pindan_id=0,this.query.pindan_id>0&&(this.pindan_id=this.query.pindan_id))},mounted:function(){this.onLoad()}}),g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"goods-video"}},[t.util.isWeixin()?t._e():i("public-header",{attrs:{title:t.goodsActive.title}}),t._v(" "),i("public-footer",{attrs:{menufooter:t.menufooter}}),t._v(" "),i("div",{staticClass:"content"},[i("van-swipe",{staticClass:"goods-swipe",attrs:{duration:500,"initial-swipe":t.goodsIndex,"show-indicators":!1,vertical:!0,loop:!1,"lazy-render":!0},on:{change:t.onSwipeChange}},t._l(t.videoList,function(e,o){return i("van-swipe-item",{key:o},[o>=t.goodsIndex-1&&o<=t.goodsIndex+1?["video"==e.showType?[i("video-player",{ref:"videoPlayer-"+o,refInFor:!0,staticClass:"video-player vjs-custom-skin",attrs:{playsinline:!0,options:e.playerOptions},on:{ready:function(e){return t.onPlayerReady(o)}}})]:"slides"==e.showType?[i("van-swipe",{staticClass:"slide-swipe",attrs:{autoplay:1500,"show-indicators":!1}},t._l(e.slides,function(t,e){return i("van-swipe-item",{key:e},[i("van-image",{attrs:{fit:"contain",src:t}})],1)}),1)]:"thumb"==e.showType?[i("div",{staticClass:"thumb-wrap"},[i("van-image",{attrs:{fit:"contain",src:e.thumb}})],1)]:t._e()]:t._e()],2)}),1),t._v(" "),i("div",{staticClass:"goods-info"},[i("div",{staticClass:"goods-title"},[t._v(t._s(t.goodsActive.title))]),t._v(" "),i("div",{staticClass:"sailed"},[t._v("已售："+t._s(t.goodsActive.sailed)+" 好评："+t._s(t.goodsActive.comment_good_percent))]),t._v(" "),t.goodsActive.content?i("div",{staticClass:"goods-desc"},[t._v(t._s(t.goodsActive.content))]):t._e(),t._v(" "),i("div",{staticClass:"price"},[i("div",{staticClass:"now-price"},[i("text",{staticClass:"c-danger"},[t._v(t._s(t.Lang.dollarSign))]),t._v(" "),i("text",{staticClass:"font-bold font-18 c-danger"},[t._v(t._s(t.goodsActive.price))])]),t._v(" "),t.goodsActive.old_price?i("div",{staticClass:"old-price"},[i("text",[t._v(t._s(t.Lang.dollarSign))]),t._v(" "),i("text",[t._v(t._s(t.goodsActive.old_price))])]):t._e()])]),t._v(" "),i("div",{staticClass:"btn-group"},[i("div",{staticClass:"store-logo"},[i("div",{staticClass:"logo",on:{click:function(e){return t.util.jsUrl("/pages/store/goods",{sid:t.store.id})}}},[i("img",{attrs:{src:t.store.logo}})]),t._v(" "),t.store.is_favorite?t._e():i("div",{staticClass:"icon icon-roundaddfill",on:{click:t.onFavor}})]),t._v(" "),i("div",{staticClass:"btn-item",on:{click:function(e){return t.util.jsUrl("/pages/store/goodsDetail",{sid:t.store.id,id:t.goodsActive.id})}}},[i("div",{staticClass:"icon icon-commentfill"}),t._v(" "),i("div",{staticClass:"btn-text"},[t._v(t._s(t.goodsActive.comment_total))])]),t._v(" "),i("div",{staticClass:"btn-item",on:{click:t.onToggleSharePopupStatus}},[i("div",{staticClass:"icon icon-forwardfill"}),t._v(" "),i("div",{staticClass:"btn-text"},[t._v("分享")])]),t._v(" "),i("div",{staticClass:"btn-item",on:{click:function(e){return t.util.jsUrl("/pages/order/create",{sid:t.store.id})}}},[i("div",{staticClass:"icon icon-cartfill"}),t._v(" "),i("div",{staticClass:"btn-text"},[t._v("去结算")]),t._v(" "),t.cart.num>0?i("div",{staticClass:"goods-num"},[t._v(t._s(t.cart.num))]):t._e()])]),t._v(" "),i("goods-handle",{attrs:{goods:t.goodsActive,optionId:0,showAnimate:!1,from:"detail"}})],1),t._v(" "),t._e(),t._v(" "),i("transition",{attrs:{name:"loading"}},[t.showPreLoading?i("iloading"):t._e()],1),t._v(" "),i("i-van-share-sheet",{attrs:{status:t.sharePopupStatus,title:"立即分享给好友",query:{type:1,id:t.goodsActive.id}},on:{onTogglePopup:t.onToggleSharePopupStatus}})],1)},staticRenderFns:[]};var f=i("VU/8")(h,g,!1,function(t){i("y66k")},null,null);e.default=f.exports},qHkI:function(t,e,i){"use strict";var o={props:{title:{type:String,default:function(){return"立即分享给好友"}},cancelext:{type:String,default:function(){return"取消"}},options:{type:Array,default:function(){return[{name:"微信",icon:"wechat"},{name:"分享海报",icon:"poster"}]}},status:Boolean,query:{type:Object,default:function(){return{type:0,id:0}}}},data:function(){return{url:window.location.href,zhezhaoShow:!1}},computed:{popupStatus:{get:function(){return this.status},set:function(t){}}},methods:{onSelectShare:function(t){if("wechat"==t.icon)this.onChangeZhezhao(!0);else if("poster"==t.icon){var e=this.util.getUrl({path:"/plugin/pages/poster/index",query:this.query});this.$router.push(this.util.getUrl(e))}},onCancelShare:function(){this.$emit("onTogglePopup")},onTogglePopup:function(){this.$emit("onTogglePopup")},onChangeZhezhao:function(t){t&&this.onTogglePopup(),this.zhezhaoShow=!this.zhezhaoShow},onCopy:function(t){this.onTogglePopup(),this.util.$toast("复制成功")},onError:function(t){this.util.$toast("复制失败")}}},s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"i-van-share-sheet"}},[i("van-share-sheet",{attrs:{options:t.options,title:t.title,"close-on-click-overlay":!0},on:{select:t.onSelectShare,cancel:t.onCancelShare,"click-overlay":t.onCancelShare},model:{value:t.popupStatus,callback:function(e){t.popupStatus=e},expression:"popupStatus"}}),t._v(" "),t.zhezhaoShow?i("div",{staticClass:"share-zhezhao",on:{click:function(e){return t.onChangeZhezhao(!1)}}},[i("img",{attrs:{src:"static/img/share-layer.png",alt:""}})]):t._e()],1)},staticRenderFns:[]};var a=i("VU/8")(o,s,!1,function(t){i("pmK6")},null,null);e.a=a.exports},y66k:function(t,e){}});
//# sourceMappingURL=13.97a95b4b785d7e725e5f.js.map