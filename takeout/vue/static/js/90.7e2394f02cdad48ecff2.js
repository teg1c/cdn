webpackJsonp([90],{"5lev":function(t,e){},KHit:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("Gu7T"),s=i.n(a),r=i("mzkE"),n=i("Cz8s"),l=i("NPH5"),o=i("rniE"),d=i("Fd2+"),c={components:{PublicHeader:n.a,PublicFooter:r.a,load:l.a,OrderStatusWarpper:o.a,Dialog:d.a},data:function(){return{orders:{min:0,finished:!1,loading:!1,data:[]},config_mall:{},showPreLoading:!0,menufooter:{},order_remind:{},shop_style:""}},methods:{onChangeStatus:function(t,e){if("cancel"==e)var i={url:"wmall/shop/order/cancel?id="+t,confirm:"确定取消订单吗?"};else if("end_1"==e||"end_2"==e){i={url:"wmall/shop/order/end?id="+t,confirm:"你确定收到该商家的外卖?",successUrl:"/pages/order/comment?id="+t};"end_2"==e&&(i.confirm="你确定收到该商家的外卖?")}else if("remind"==e)i={url:"wmall/shop/order/remind?id="+t};this.util.jspost(i)},onFinishMealPay:function(){d.a.confirm({title:"温馨提示",message:"您的支付方式为餐后支付，请到商家收银台付款"}).then(function(){})},onLoad:function(){var t=this;if(this.orders.finished)return!1;this.util.request({url:"wmall/shop/order",data:{min:this.orders.min,sid:this.sid,menufooter:1,order_remind:1}}).then(function(e){var i=e.data.message;i.errno?t.$toast(i.message):(t.hideLoading(),t.orders.data=[].concat(s()(t.orders.data),s()(i.message)),t.orders.loading=!1,t.orders.min=i.min,t.config_mall=i.config_mall,(i.message.length<20||!i.min)&&(t.orders.finished=!0),t.shop_style=i.store.data.shop_style,t.menufooter=window.menufooter,t.order_remind=window.order)})},hideLoading:function(){this.showPreLoading=!1}},mounted:function(){var t=this.util.parseQuery(this.$route.query);this.sid=t.sid,this.util.jsauth()}},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:"shop-"+t.shop_style,attrs:{id:"shop-order-index"}},[i("public-header",{attrs:{title:"我的订单"}}),t._v(" "),t.order_remind&&t.order_remind.log?i("order-status-warpper",{attrs:{order:t.order_remind}}):t._e(),t._v(" "),i("public-footer",{attrs:{menufooter:t.menufooter}}),t._v(" "),i("div",{staticClass:"content"},[i("van-list",{attrs:{finished:t.orders.finished,offset:100,"immediate-check":!0},on:{load:t.onLoad},model:{value:t.orders.loading,callback:function(e){t.$set(t.orders,"loading",e)},expression:"orders.loading"}},[t.orders.data.length>0?[t._l(t.orders.data,function(e,a){return i("div",{staticClass:"order-container"},[i("div",{staticClass:"order-inner"},[i("div",{staticClass:"store-info van-hairline--bottom"},[i("router-link",{staticClass:"external",attrs:{to:t.util.getUrl({path:"/shop/pages/home/index",query:{sid:e.sid}})}},[i("img",{attrs:{src:e.logo,alt:""}}),t._v(" "),i("span",{staticClass:"store-title"},[t._v(t._s(e.title))]),t._v(" "),i("van-icon",{staticClass:"icon",attrs:{name:"arrow-right"}})],1),t._v(" "),2==e.delivery_mode?i("div",{staticClass:"plateform-delivery"},[t.config_mall&&t.config_mall.delivery_title?i("span",[t._v(t._s(t.config_mall.delivery_title))]):t._e()]):t._e()],1),t._v(" "),i("router-link",{staticClass:"goods-info",attrs:{to:t.util.getUrl({path:"/shop/pages/order/detail",query:{id:e.id,sid:e.sid}})}},[i("div",{staticClass:"col-75"},[i("div",{staticClass:"goods-title"},[t._v(t._s(e.goods.goods_title)+"等"),i("span",[t._v(t._s(e.num))]),t._v("件商品")]),t._v(" "),i("div",{staticClass:"date"},[t._v(t._s(e.addtime))])]),t._v(" "),i("div",{staticClass:"col-25"},[i("div",{staticClass:"price"},[t._v(t._s(t.Lang.dollarSign)+t._s(e.final_fee))]),t._v(" "),i("div",{staticClass:"status no-pay"},[t._v(t._s(e.status_text))])])]),t._v(" "),0==e.is_pay&&6!=e.status&&3!=e.order_type?i("div",{staticClass:"order-status"},[i("div",{staticClass:"pic"},[i("img",{attrs:{src:"static/img/order_status_money.png",alt:""}})]),t._v(" "),i("div",{staticClass:"order-status-detail"},[i("div",{staticClass:"arrow-left"}),t._v(" "),i("div",{staticClass:"clearfix"},[t._v("待支付"),i("span",{staticClass:"pull-right"},[t._v(t._s(e.addtime_hm))])]),t._v(" "),i("div",{staticClass:"tips"},[e.pay_time_limit>0?[t._v("\n\t\t\t\t\t\t\t\t\t\t请在提交订单后"+t._s(e.pay_time_limit)+"分钟内完成支付\n\t\t\t\t\t\t\t\t\t")]:[t._v("\n\t\t\t\t\t\t\t\t\t\t请在提交订单后10分钟内完成支付\n\t\t\t\t\t\t\t\t\t")]],2)])]):t._e()],1),t._v(" "),i("div",{staticClass:"order-btn"},[0==e.is_pay&&e.status<5?[3==e.order_type&&"finishMeal"==e.pay_type?i("div",{staticClass:"table-cell van-hairline--top van-hairline--right",on:{click:t.onFinishMealPay}},[t._v("立即支付")]):i("router-link",{staticClass:"table-cell van-hairline--top van-hairline--right",attrs:{to:t.util.getUrl({path:"/pages/public/pay",query:{order_id:e.id,order_type:"takeout"}})}},[t._v("立即支付")]),t._v(" "),3==e.order_type?i("router-link",{staticClass:"table-cell van-hairline--top van-hairline--right",attrs:{to:t.util.getUrl({path:"/tangshi/pages/table/goods",query:{order_id:e.id,table_id:e.table_id,sid:e.sid}})}},[t._v("加菜")]):t._e()]:t._e(),t._v(" "),1==e.status?[i("div",{staticClass:"table-cell van-hairline--top",on:{click:function(i){return t.onChangeStatus(e.id,"cancel")}}},[t._v("取消订单")]),t._v(" "),1==e.is_pay?i("div",{staticClass:"table-cell van-hairline--left van-hairline--top",on:{click:function(i){return t.onChangeStatus(e.id,"remind")}}},[t._v("催单")]):t._e()]:e.status>1&&e.status<5?[1==e.customer_cancel_status?i("div",{staticClass:"table-cell van-hairline--top",on:{click:function(i){return t.onChangeStatus(e.id,"cancel")}}},[t._v("取消订单")]):t._e(),t._v(" "),1==e.order_type&&4==e.status?i("div",{staticClass:"table-cell  van-hairline--top",on:{click:function(i){return t.onChangeStatus(e.id,"end_1")}}},[t._v("确认送达")]):2==e.order_type?i("div",{staticClass:"table-cell van-hairline--top",on:{click:function(i){return t.onChangeStatus(e.id,"end_2")}}},[t._v("我已提货")]):t._e(),t._v(" "),1==e.is_pay?i("div",{staticClass:"table-cell van-hairline--left van-hairline--top",on:{click:function(i){return t.onChangeStatus(e.id,"remind")}}},[t._v("催单")]):t._e(),t._v(" "),3==e.order_type&&1==e.is_pay&&"finishMeal"==e.pay_type?i("router-link",{staticClass:"table-cell van-hairline--left van-hairline--top",attrs:{to:t.util.getUrl({path:"/tangshi/pages/table/goods",query:{order_id:e.id,table_id:e.table_id,sid:e.sid}})}},[t._v("加菜")]):t._e()]:5==e.status?[i("router-link",{staticClass:"table-cell  van-hairline--top",attrs:{to:t.util.getUrl({path:"/shop/pages/home/index",query:{sid:e.sid,order_id:e.id}})}},[t._v("再来一单")]),t._v(" "),0==e.is_comment?i("router-link",{staticClass:"table-cell  van-hairline--top van-hairline--left",attrs:{to:t.util.getUrl({path:"/pages/order/comment",query:{id:e.id}})}},[t._v(t._s(e.comment_cn))]):t._e(),t._v(" "),t._e()]:6==e.status?[i("router-link",{staticClass:"table-cell  van-hairline--top",attrs:{to:t.util.getUrl({path:"/shop/pages/home/index",query:{sid:e.sid,order_id:e.id}})}},[t._v("再来一单")])]:t._e(),t._v(" "),1==e.is_refund?i("router-link",{staticClass:"table-cell  van-hairline--top van-hairline--left",attrs:{to:t.util.getUrl({path:"/shop/pages/order/detail",query:{id:e.id,sid:e.sid}})}},[t._v("查看退款")]):t._e()],2)])}),t._v(" "),t.orders.finished?i("load",{attrs:{type:"loaded",text:"我是有底线的",bgcolor:"#f5f5f5"}}):t._e()]:i("div",{staticClass:"common-no-con"},[i("img",{attrs:{src:"static/img/order_no_con.png",alt:""}}),t._v(" "),i("p",[t._v("您还没有订单，赶紧点一份！")]),t._v(" "),i("router-link",{staticClass:"common-no-con-a",attrs:{to:t.util.getUrl({path:"/shop/pages/home/index"})}},[t._v("现在点一份")])],1)],2)],1),t._v(" "),t.showPreLoading?i("iloading"):t._e()],1)},staticRenderFns:[]};var v=i("VU/8")(c,_,!1,function(t){i("5lev")},null,null);e.default=v.exports}});
//# sourceMappingURL=90.7e2394f02cdad48ecff2.js.map