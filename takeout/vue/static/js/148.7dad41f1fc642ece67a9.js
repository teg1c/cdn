webpackJsonp([148],{"9PbL":function(t,a){},HpaZ:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=s("Cz8s"),e=s("mzkE"),n={components:{PublicHeader:i.a,PublicFooter:e.a},data:function(){return{settle:{},data:{},can_set_account:0,showPreLoading:!0,menufooter:{}}},methods:{onLoad:function(){var t=this;this.util.request({url:"spread/commission",data:{menufooter:1}}).then(function(a){var s=a.data.message;t.settle=s.message.settle,t.can_set_account=s.message.can_set_account,t.data=s.message.data,t.showPreLoading=!1,t.menufooter=window.menufooter})}},mounted:function(){this.onLoad()}},l={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"spread-commission"}},[s("public-header",{attrs:{title:"推广佣金"}}),t._v(" "),s("public-footer",{attrs:{preLoading:t.showPreLoading,menufooter:t.menufooter}}),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"detail"},[s("div",{staticClass:"left"},[s("div",[t._v("累计佣金("+t._s(t.Lang.dollarSignCn)+")")]),t._v(" "),s("div",{staticClass:"price"},[t._v(t._s(t.data.commission_grandtotal))])]),t._v(" "),s("div",{staticClass:"right"},[s("router-link",{attrs:{to:t.util.getUrl({path:"/plugin/pages/spread/getCash/index"})}},[t._v("提现明细")])],1)]),t._v(" "),1==t.can_set_account?s("div",{staticClass:"list-block"},[s("ul",[s("router-link",{staticClass:"item-content",attrs:{to:t.util.getUrl({path:"plugin/pages/spread/account"}),tag:"li"}},[s("div",{staticClass:"item-media"},[s("van-icon",{attrs:{name:"pay"}})],1),t._v(" "),s("div",{staticClass:"item-inner"},[s("div",{staticClass:"item-title"},[t._v("提现账户")]),t._v(" "),s("div",{staticClass:"item-after"}),t._v(" "),s("span",{staticClass:"icon icon-right c-gray"})])])],1)]):t._e(),t._v(" "),s("div",{staticClass:"list-block"},[s("ul",[s("li",{staticClass:"item-content"},[s("div",{staticClass:"item-media"},[s("van-icon",{attrs:{name:"recharge"}})],1),t._v(" "),s("div",{staticClass:"item-inner"},[s("div",{staticClass:"item-title"},[t._v("可提现佣金")]),t._v(" "),s("div",{staticClass:"item-after red"},[t._v(t._s(t.data.spreadcredit2)+t._s(t.Lang.dollarSignCn))])])])])]),t._v(" "),s("div",{staticClass:"list-block"},[s("ul",[s("li",{staticClass:"item-content border-1px-b"},[s("div",{staticClass:"item-media"},[s("van-icon",{attrs:{name:"time"}})],1),t._v(" "),s("div",{staticClass:"item-inner"},[s("div",{staticClass:"item-title"},[t._v("累计佣金")]),t._v(" "),s("div",{staticClass:"item-after"},[t._v(t._s(t.data.commission_grandtotal)+t._s(t.Lang.dollarSignCn))])])]),t._v(" "),s("li",{staticClass:"item-content border-1px-b"},[s("div",{staticClass:"item-media"},[s("van-icon",{attrs:{name:"rest"}})],1),t._v(" "),s("div",{staticClass:"item-inner"},[s("div",{staticClass:"item-title"},[t._v("待打款佣金")]),t._v(" "),s("div",{staticClass:"item-after"},[t._v(t._s(t.data.commission_getcash_apply)+t._s(t.Lang.dollarSignCn))])])]),t._v(" "),s("li",{staticClass:"item-content"},[s("div",{staticClass:"item-media"},[s("van-icon",{attrs:{name:"signboard"}})],1),t._v(" "),s("div",{staticClass:"item-inner"},[s("div",{staticClass:"item-title"},[t._v("成功提现佣金")]),t._v(" "),s("div",{staticClass:"item-after"},[t._v(t._s(t.data.commission_getcash_success)+t._s(t.Lang.dollarSignCn))])])])])]),t._v(" "),s("div",{staticClass:"must"},[s("div",{staticClass:"text-title"},[t._v("用户须知")]),t._v(" "),s("div",{staticClass:"text"},[1==t.settle.balance_condition?s("p",[t._v("买家确认收货后,佣金将自动打入您的佣金账户余额。")]):t._e(),t._v(" "),2==t.settle.balance_condition?s("p",[t._v("买家确认收货买家确认收货并评价后,佣金将自动打入您的佣金账户余额。")]):t._e(),t._v(" "),s("p",[t._v("注意:可用佣金满"),s("span",[t._v(t._s(t.settle.withdraw))]),t._v(t._s(t.Lang.dollarSignCn)+"后才能申请提现")])]),t._v(" "),s("van-icon",{attrs:{name:"unfold1"}})],1),t._v(" "),s("div",{staticClass:"tab"},[t.data.spreadcredit2>0?s("router-link",{staticClass:"button-fill",attrs:{to:t.util.getUrl({path:"/plugin/pages/spread/getCash/application"})}},[t._v("我要提现")]):s("div",{staticClass:"button-fill disabled"},[t._v("我要提现")])],1)])],1)},staticRenderFns:[]};var c=s("VU/8")(n,l,!1,function(t){s("9PbL")},null,null);a.default=c.exports}});
//# sourceMappingURL=148.7dad41f1fc642ece67a9.js.map