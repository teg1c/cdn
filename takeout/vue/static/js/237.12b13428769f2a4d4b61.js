webpackJsonp([237],{TYqm:function(t,a){},lfXt:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=i("Cz8s"),n=i("deIj"),c={components:{PublicHeader:e.a},data:function(){return{showPreLoading:!0,category:{},calculate:{final_fee:0},days:0}},methods:{onSelectStick:function(t){if(this.calculate&&1!=this.calculate.stick_is_available)return this.util.$toast("置顶位已售完,暂时不可购买","",1e3),!1;this.days=t},onLoad:function(){var t=this;Object(n.a)({vue:t,url:"tongcheng/publish/stick",data:{information_id:t.information_id},success:function(a){t.category=a.category,t.calculate=a.calculate,t.days=t.calculate.default_days}})},onSubmit:function(){var t=this;0!=t.days?Object(n.c)({vue:t,url:"tongcheng/publish/stick",data:{information_id:t.information_id,days:t.days},success:function(a){t.util.$toast("请支付",t.util.getUrl({path:"/pages/public/pay",query:{order_id:a,order_type:"tongcheng"}}),1500,"replace")}}):t.util.$toast("请选择置顶天数")}},created:function(){this.$route.query&&(this.information_id=this.$route.query.information_id)},mounted:function(){this.onLoad()}},o={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{attrs:{id:"publish-stick"}},[i("public-header",{attrs:{title:"发布置顶"}}),t._v(" "),i("div",{staticClass:"content"},[t._e(),t._v(" "),t.category.config?i("van-radio-group",{staticClass:"margin-10-t",model:{value:t.days,callback:function(a){t.days=a},expression:"days"}},[i("van-cell-group",[i("van-cell",{attrs:{title:"选择置顶",value:t.days>0?"置顶"+t.days+"天":""}}),t._v(" "),t._l(t.category.config.stick_price,function(a){return t.category.config.stick_price?[i("van-cell",{staticClass:"border-0px",attrs:{title:"置顶"+a.day+"天("+a.price+t.Lang.dollarSignCn+")",clickable:""},on:{click:function(i){return t.onSelectStick(a.day)}},scopedSlots:t._u([{key:"right-icon",fn:function(){return[i("van-radio",{attrs:{name:a.day}})]},proxy:!0}],null,!0)})]:t._e()})],2)],1):t._e(),t._v(" "),i("div",{staticClass:"stick-text"},[t._v("\n\t\t\t点击置顶系统会自动把推广信息置顶到所在分类的推广位置，支付后实时生效。\n\t\t")]),t._v(" "),i("div",{staticClass:"padding-15 stick-button",on:{click:t.onSubmit}},[i("van-button",{staticClass:"bg-danger font-16",attrs:{size:"normal",block:""}},[t._v("立即置顶")])],1)],1),t._v(" "),t.showPreLoading?i("iloading"):t._e()],1)},staticRenderFns:[]};var s=i("VU/8")(c,o,!1,function(t){i("TYqm")},null,null);a.default=s.exports}});
//# sourceMappingURL=237.12b13428769f2a4d4b61.js.map