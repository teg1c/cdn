webpackJsonp([1],{NZ8p:function(t,i){},"Pn/h":function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=s("Gu7T"),a=s.n(e),r=s("Cz8s"),o=s("mzkE"),n={name:"paotuiOrder",components:{PublicHeader:r.a,PublicFooter:o.a},data:function(){return{showPreLoading:!0,orders:{page:1,psize:7,finished:!1,loading:!1,data:[]},others:[],total_user:0,config:{},menufooter:{},showYinsihao:!1,yinsihao:{secret_mobile:"",extension:""}}},methods:{onChangeStatus:function(t,i){if("cancel"==i)var s={url:"errander/order/cancel?id="+t,confirm:"确定取消订单吗?"};else if("end"==i)s={url:"errander/order/end?id="+t,confirm:"确定已收到商品吗?"};this.util.jspost(s)},onLoad:function(){var t=this;if(this.orders.finished)return!1;this.util.request({url:"errander/order/vi_list",data:{page:this.orders.page,psize:this.orders.psize,menufooter:1}}).then(function(i){t.showPreLoading=!1;var s=i.data.message;if(s.errno)return t.$toast(s.message),!1;s=s.message,t.total_user=s.total_user,t.config=s.config,t.others=s.others,t.orders.data=[].concat(a()(t.orders.data),a()(s.orders)),t.orders.loading=!1,s.orders.length<t.orders.psize&&(t.orders.finished=!0),t.orders.page++,t.menufooter=window.menufooter})},onCallDeliveryer:function(t,i,s){var e=this,a=this;a.util.request({url:"yinsihao/yinsihao",data:{order_id:t,type:"deliveryer",ordersn:i,orderType:"errander"}}).then(function(t){var i=t.data.message;i.errno?-1e3==i.errno?a.util.jsTel(s):e.$toast(i.message):(i=i.message,a.yinsihao.secret_mobile=i.data.secret_mobile,a.yinsihao.extension=i.data.extension,a.showYinsihao=!0)})}},mounted:function(){this.onLoad()}},l={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{attrs:{id:"paotui-order"}},[s("public-header",{attrs:{title:"跑腿订单"}}),t._v(" "),s("public-footer",{attrs:{preLoading:t.showPreLoading,menufooter:t.menufooter}}),t._v(" "),s("div",{staticClass:"content"},[s("van-cell-group",[s("van-cell",[s("div",{staticClass:"font-16 c-default flex height-30",attrs:{slot:"title"},slot:"title"},[t._v("\n\t\t\t\t\t已有\n\t\t\t\t\t"),s("span",{staticClass:"c-danger"},[t._v(t._s(t.total_user))]),t._v("\n\t\t\t\t\t人使用了随意购\n\t\t\t\t")]),t._v(" "),s("router-link",{staticClass:"c-danger font-16 flex height-30",attrs:{slot:"right-icon",to:t.util.getUrl({path:"/pages/paotui/guide"})},slot:"right-icon"},[t._v("\n\t\t\t\t\t立即下单 "),s("span",{staticClass:"icon icon-right"})])],1)],1),t._v(" "),t.orders.data.length>0?[s("van-list",{attrs:{finished:t.orders.finished,offset:100,"immediate-check":!1},on:{load:t.onLoad},model:{value:t.orders.loading,callback:function(i){t.$set(t.orders,"loading",i)},expression:"orders.loading"}},t._l(t.orders.data,function(i){return s("div",{key:i.id,staticClass:"order-item"},[s("van-cell",[s("router-link",{staticClass:"font-16 c-default flex height-30",attrs:{slot:"title",to:t.util.getUrl({path:"/plugin/pages/paotui/diy?id="+i.order_cid})},slot:"title"},[i.thumb?s("img",{attrs:{src:i.thumb,alt:""}}):t._e(),t._v(" "),s("span",{staticClass:"category-title"},[t._v(t._s(i.title))]),t._v(" "),s("span",{staticClass:"icon icon-right font-16 c-disabled"})])],1),t._v(" "),s("router-link",{staticClass:"order-info flex-lr",attrs:{tag:"div",to:t.util.getUrl({path:"/plugin/pages/paotui/detail",query:{id:i.id}})}},[s("div",{staticClass:"left"},[s("div",{staticClass:"title ellipsis font-16"},[t._v("购买商品："+t._s(i.goods_name))]),t._v(" "),s("div",{staticClass:"date font-13 c-disabled"},[t._v(t._s(i.addtime))])]),t._v(" "),s("div",{staticClass:"right text-right"},[s("div",{staticClass:"price font-15"},[t._v(t._s(t.Lang.dollarSign)+" "+t._s(i.final_fee))]),t._v(" "),s("div",{staticClass:"status c-danger font-14"},[t._v(t._s(i.order_status))])])]),t._v(" "),0==i.is_pay&&4!=i.status?s("div",{staticClass:"order-status"},[s("div",{staticClass:"pic"},[s("img",{attrs:{src:"static/img/order_status_money.png",alt:""}})]),t._v(" "),s("div",{staticClass:"order-status-detail"},[s("div",{staticClass:"arrow-left"}),t._v(" "),s("div",{staticClass:"clearfix"},[t._v("待支付"),s("span",{staticClass:"pull-right"},[t._v(t._s(i.addtime))])]),t._v(" "),s("div",{staticClass:"tips"},[t.config.pay_time_limit>0?[t._v("\n\t\t\t\t\t\t\t\t\t请在提交订单后"+t._s(t.config.pay_time_limit)+"分钟内完成支付\n\t\t\t\t\t\t\t\t")]:t._e()],2)])]):t._e(),t._v(" "),i.status<3||i.refund_status>0?[s("div",{staticClass:"order-btn van-hairline--top"},[0==i.is_pay?[s("router-link",{staticClass:"order-btn-item van-hairline--right",attrs:{tag:"div",to:t.util.getUrl({path:"/pages/public/pay",query:{order_id:i.id,order_type:"errander"}})}},[t._v("立即支付")])]:t._e(),t._v(" "),1==i.status?[s("div",{staticClass:"order-btn-item",on:{click:function(s){return t.onChangeStatus(i.id,"cancel")}}},[t._v("取消订单")])]:2==i.status?[s("div",{staticClass:"order-btn-item van-hairline--right",on:{click:function(s){return t.onChangeStatus(i.id,"end")}}},[t._v("确认收货")]),t._v(" "),i.data&&1==i.data.yinsihao_status?s("div",{staticClass:"order-btn-item",on:{click:function(s){return t.onCallDeliveryer(i.id,i.order_sn,i.deliveryer.mobile)}}},[t._v("联系骑士")]):s("div",{staticClass:"order-btn-item",on:{click:function(s){return t.util.jsUrl("tel:"+i.deliveryer.mobile)}}},[t._v("联系骑士")])]:t._e(),t._v(" "),i.refund_status>=1?[s("router-link",{staticClass:"order-btn-item",attrs:{tag:"div",to:t.util.getUrl({path:"/plugin/pages/paotui/detail",query:{id:i.id}})}},[t._v("查看退款")])]:t._e()],2)]:t._e()],2)}),0)]:[t._m(0),t._v(" "),s("p",{staticClass:"order-empty-title"},[t._v("看看大家都在买啥")]),t._v(" "),s("div",{staticClass:"order-other"},t._l(t.others,function(i,e){return s("router-link",{key:e,staticClass:"order-other-item flex-lr",attrs:{tag:"div",to:t.util.getUrl({path:"/plugin/pages/paotui/diy?id="+i.order_cid})}},[s("img",{attrs:{src:i.thumb,alt:""}}),t._v(" "),s("div",{staticClass:"item-info flex-lr"},[s("div",{staticClass:"info-inner"},[s("p",{staticClass:"title width-100 ellipsis font-14"},[t._v(t._s(i.anonymous_username)+" 购买了 "+t._s(i.goods_name))]),t._v(" "),s("p",{staticClass:"font-13 c-disabled"},[t._v(t._s(i.addtime))])]),t._v(" "),s("span",{staticClass:"icon icon-right font-16 c-disabled"})])])}),1)]],2),t._v(" "),s("van-popup",{staticClass:"yinsihao-popup",model:{value:t.showYinsihao,callback:function(i){t.showYinsihao=i},expression:"showYinsihao"}},[s("div",{staticClass:"popup-title"},[s("img",{staticClass:"yinsihao-img",attrs:{src:"static/img/yinsihao_bg.png",alt:""}})]),t._v(" "),s("div",{staticClass:"popup-container van-hairline--bottom"},[s("div",{staticClass:"font-14"},[t._v("将通过转播的方式保护您的隐私")]),t._v(" "),s("div",{staticClass:"yinsihao-mobile"},[t._v(t._s(t.yinsihao.secret_mobile)+" 转 "),s("span",{staticClass:"c-danger"},[t._v(t._s(t.yinsihao.extension))])]),t._v(" "),s("div",{staticClass:"yinsihao-tips"},[t._v("拨打"+t._s(t.yinsihao.secret_mobile)),s("br"),t._v("接通后输入分机号"+t._s(t.yinsihao.extension)+"#即可")])]),t._v(" "),s("div",{staticClass:"popup-footer"},[s("div",{staticClass:"yinsihao-cancel",on:{click:function(i){t.showYinsihao=!1}}},[t._v("取消")]),t._v(" "),s("div",{staticClass:"yinsihao-confirm van-hairline--left",on:{click:function(i){t.util.jsTel(t.yinsihao.secret_mobile),t.showYinsihao=!1}}},[t._v("立即呼叫")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"order-empty border-1px-b"},[i("img",{attrs:{src:"static/img/paotui_order_no.png",alt:""}}),this._v(" "),i("p",{staticClass:"font-15"},[this._v("您还没有跑腿订单 ~")])])}]};var d=s("VU/8")(n,l,!1,function(t){s("NZ8p")},null,null);i.default=d.exports}});
//# sourceMappingURL=1.3874826ac1a8a784ef23.js.map