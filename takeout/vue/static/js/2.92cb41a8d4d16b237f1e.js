webpackJsonp([2],{Mmup:function(t,e){},sK6O:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s("Gu7T"),i=s.n(o),a=s("Cz8s"),n=s("NPH5"),r={data:function(){return{keyboard:{price:!1,discount:!1},show:!1,value:"",store:{},tables:[],order:{store_extra_fee_note:[],extra_fee_note:[]},table_sn:"",note:"",status:{noDiscountShow:!1,couponShow:!1,tableShow:!1},coupons:[],price:"",price_discount_part:"",nodiscount:0,paybill_extra:"",couponId:"",showPreLoading:!0}},components:{PublicHeader:a.a,load:n.a},computed:{},watch:{},methods:{onToggleKeyboard:function(t){this.keyboard[t]=!this.keyboard[t]},onToggleStatus:function(t){this.status[t]=!this.status[t],"noDiscountShow"!=t||this.status.noDiscountShow||(this.price_discount_part=0)},onLoad:function(){var t=this;this.util.request({url:"wmall/store/ipaybill/index",data:{sid:this.sid}}).then(function(e){t.showPreLoading=!1;var s=e.data.message;if(s.errno)return t.util.$toast(s.message),!1;s=s.message,t.store=s.store,t.order=s.order,t.tables=[].concat(i()(t.tables),i()(s.tables)),t.paybill_extra=s.paybill_extra,t.util.setWXTitle(t.store.title)})},onCalculate:function(){var t=this;console.log(this.price_discount_part,this.price),this.price_discount_part>0&&this.price_discount_part-this.price>0&&this.util.$toast("不参与优惠金额超出消费总额,请重新输入"),this.order.coupons=[],this.order.final_fee="计算中";var e={sid:this.sid,price:this.price,price_discount_part:this.price_discount_part,coupon_id:this.couponId};this.util.request({url:"wmall/store/paybill/index",data:e}).then(function(e){var s=e.data.message;if(s.errno)return t.util.$toast(s.message),!1;s=s.message,t.order=t.util.extend(t.order,s.order),t.store=s.store,t.order=s.order,t.tables=[].concat(i()(t.tables),i()(s.tables)),t.paybill_extra=s.paybill_extra})},onSelectCoupon:function(t){this.couponId=t,this.status.couponShow=!1,this.onCalculate()},onTableConfirm:function(t){this.table_sn=t.title,this.onToggleStatus("tableShow")},onSubmit:function(){var t=this;if(this.price<=0)return this.$toast("消费总额不能为空"),!1;var e={sid:this.sid,price:this.price,price_discount_part:this.price_discount_part,coupon_id:this.couponId,table_sn:this.table_sn,note:this.note};this.util.request({url:"wmall/store/paybill/index",data:e,method:"POST"}).then(function(e){var s=e.data.message;if(s.errno)return t.util.$toast(s.message,"",1e3),!1;var o=s.message;t.$router.replace(t.util.getUrl({path:"/pages/public/pay?order_id="+o+"&order_type=paybill"}))})}},created:function(){this.query=this.$route.query,this.query&&(this.sid=this.query.sid)},mounted:function(){this.onLoad()}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"store-paybill"}},[s("public-header",{attrs:{title:t.store.title}}),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"list-block"},[s("ul",[s("li",[s("div",{staticClass:"item-content"},[s("div",{staticClass:"item-inner"},[s("div",{staticClass:"item-title"},[t._v("消费总额("+t._s(t.Lang.dollarSignCn)+")")]),t._v(" "),s("div",{staticClass:"item-input"},[s("input",{staticClass:"align-right",attrs:{type:"text",placeholder:"询问服务员后输入",readonly:"",clickable:""},domProps:{value:t.price},on:{click:function(e){return t.onToggleKeyboard("price")}},nativeOn:{touchstart:function(e){return e.stopPropagation(),t.onToggleKeyboard("price")}}})])])]),t._v(" "),s("van-number-keyboard",{attrs:{theme:"custom","extra-key":".","close-button-text":"确定",show:t.keyboard.price,maxlength:6},on:{blur:function(e){return t.onToggleKeyboard("price")},hide:t.onCalculate},model:{value:t.price,callback:function(e){t.price=e},expression:"price"}})],1),t._v(" "),s("li",[s("div",{staticClass:"check",on:{click:function(e){return t.onToggleStatus("noDiscountShow")}}},[s("div",{staticClass:"checked",class:{checked:t.status.noDiscountShow,active:t.status.noDiscountShow}},[s("van-icon",{attrs:{name:t.status.noDiscountShow?"check":""}})],1),t._v("\n\t\t\t\t\t\t输入不参与优惠金额(如酒水、套餐)\n\t\t\t\t\t")])]),t._v(" "),t.status.noDiscountShow?s("li",[s("div",{staticClass:"item-content"},[s("div",{staticClass:"item-inner"},[s("div",{staticClass:"item-title"},[t._v("不参与优惠金额")]),t._v(" "),s("div",{staticClass:"item-input"},[s("input",{staticClass:"align-right",attrs:{type:"text",placeholder:"询问服务员后输入",readonly:"",clickable:""},domProps:{value:t.price_discount_part},on:{click:function(e){return t.onToggleKeyboard("discount")}},nativeOn:{touchstart:function(e){return e.stopPropagation(),t.onToggleKeyboard("discount")}}})])])]),t._v(" "),s("van-number-keyboard",{attrs:{theme:"custom","extra-key":".","close-button-text":"确定",show:t.keyboard.discount,maxlength:6},on:{blur:function(e){return t.onToggleKeyboard("discount")},hide:t.onCalculate},model:{value:t.price_discount_part,callback:function(e){t.price_discount_part=e},expression:"price_discount_part"}})],1):t._e()])]),t._v(" "),"1"==t.paybill_extra?[s("van-cell-group",[s("van-cell",{attrs:{title:"包厢/桌号","arrow-direction":"down"},on:{click:function(e){return t.onToggleStatus("tableShow")}}},[s("div",{staticClass:"flex c-gray",attrs:{slot:"right-icon"},slot:"right-icon"},[t.table_sn?s("span",[t._v(t._s(t.table_sn))]):s("span",[t._v("请选择桌号")]),t._v(" "),s("van-icon",{staticClass:"margin-5-l",attrs:{name:"arrow-down"}})],1)])],1),t._v(" "),s("van-cell-group",{staticClass:"margin-10-t"},[s("van-field",{attrs:{type:"textarea",placeholder:"请输入备注，最多50字哦"},model:{value:t.note,callback:function(e){t.note=e},expression:"note"}})],1)]:t._e(),t._v(" "),s("div",{staticClass:"list-block"},[s("van-cell-group",[s("van-cell",{attrs:{"is-link":""},on:{click:function(e){return t.onToggleStatus("couponShow")}}},[s("template",{slot:"title"},[s("span",{staticClass:"van-cell-text"},[t._v("优惠券")]),t._v(" "),t.order.discount_fee<=0&&t.order.coupons&&t.order.coupons.length>0?s("van-tag",{attrs:{type:"danger"}},[t._v(t._s(t.order.coupons.length)+"张可用")]):t._e()],1),t._v(" "),t.order.discount_fee>0?s("div",{attrs:{slot:"default"},slot:"default"},[t._v("\n\t\t\t\t\t\t已优惠"+t._s(t.Lang.dollarSign)+t._s(t.order.discount_fee)+"\n\t\t\t\t\t")]):t._e()],2),t._v(" "),t.order.extra_fee_note.length>0?t._l(t.order.extra_fee_note,function(e,o){return s("van-cell",{key:o,attrs:{title:e.name,value:t.Lang.dollarSign+e.fee}})}):t._e(),t._v(" "),t.order.store_extra_fee_note.length>0?t._l(t.order.store_extra_fee_note,function(e,o){return s("van-cell",{key:o,attrs:{title:e.name,value:t.Lang.dollarSign+e.fee}})}):t._e(),t._v(" "),s("van-cell",{attrs:{title:"实付金额",value:t.Lang.dollarSign+t.order.final_fee}})],2)],1),t._v(" "),s("div",{staticClass:"list-block"},[s("div",{staticClass:"confirm"},[t.order.final_fee>0?s("div",{staticClass:"submit",on:{click:t.onSubmit}},[t._v("确认买单")]):s("div",{staticClass:"submit disabled"},[t._v("确认买单")])])])],2),t._v(" "),t.showPreLoading?s("iloading"):t._e(),t._v(" "),t.order.coupons&&t.order.coupons.length>0?s("van-popup",{attrs:{position:"bottom"},model:{value:t.status.couponShow,callback:function(e){t.$set(t.status,"couponShow",e)},expression:"status.couponShow"}},[s("div",{staticClass:"popup-coupon"},[s("div",{staticClass:"popup-title van-hairline--bottom"},[t._v("商家代金券")]),t._v(" "),s("div",{staticClass:"popup-container"},[s("load",{attrs:{type:"loaded",text:"可用代金券("+t.order.coupons.length+"张)",bgcolor:"#f5f5f5"}}),t._v(" "),s("div",{staticClass:"coupon-list"},[s("div",{staticClass:"content-padded"},t._l(t.order.coupons,function(e,o){return s("div",{staticClass:"coupon-item"},[s("div",{staticClass:"clearfix",on:{click:function(s){return t.onSelectCoupon(e.id)}}},[s("span",{staticClass:"circle circle-left"}),t._v(" "),s("span",{staticClass:"circle circle-right"}),t._v(" "),s("div",{staticClass:"left"},[s("div",{staticClass:"store-logo"},[s("img",{attrs:{src:e.logo,alt:""}})]),t._v(" "),s("div",{staticClass:"coupon-detail"},[s("div",{staticClass:"coupon-title"},[t._v(t._s(e.title))]),t._v(" "),s("div",{staticClass:"use-time"},[t._v("有效期至:"+t._s(e.endtime_cn))])])]),t._v(" "),s("div",{staticClass:"right"},[s("div",{staticClass:"price"},[s("span",[t._v(t._s(t.Lang.dollarSign))]),t._v(t._s(e.discount)+"\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),s("div",{staticClass:"condition"},[t._v("满"+t._s(e.condition)+t._s(t.Lang.dollarSignCn)+"可用")])])]),t._v(" "),t.couponId==e.id?s("div",{staticClass:"selected-status"},[s("img",{attrs:{src:"static/img/success.png",alt:""}})]):t._e()])}),0)])],1),t._v(" "),s("div",{staticClass:"popup-cancle van-hairline--top",on:{click:function(e){return t.onSelectCoupon(0)}}},[t._v("不使用代金券")])])]):t._e(),t._v(" "),s("van-popup",{attrs:{position:"bottom"},model:{value:t.status.tableShow,callback:function(e){t.$set(t.status,"tableShow",e)},expression:"status.tableShow"}},[s("van-picker",{attrs:{"show-toolbar":"",title:"请选择桌号",columns:t.tables,"value-key":"title"},on:{cancel:function(e){return t.onToggleStatus("tableShow")},confirm:t.onTableConfirm}})],1)],1)},staticRenderFns:[]};var c=s("VU/8")(r,l,!1,function(t){s("Mmup")},null,null);e.default=c.exports}});
//# sourceMappingURL=2.92cb41a8d4d16b237f1e.js.map