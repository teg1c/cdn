webpackJsonp([147],{"7qeH":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e("woOf"),d=e.n(a),o=e("Gu7T"),s=e.n(o),c=e("Dd8w"),n=e.n(c),l=e("Cz8s"),r=e("mzkE"),g=e("kEnp"),v=e("NYxO"),p={data:function(){return{cid:0,showPreLoading:!0,styleContent:"#fff",is_grant:0,title:"平台商品分类",active:1,diydata:{diy:{data:{},fixedsearch:{},is_has_goodsTab:0,is_has_location:0,is_has_storebasic:0,storebasic_style:1},superRedpacketData:{errno:0,message:{},is_show:!0},config:{},categorySelectedIndex:0,categorySelectedId:0,categoryAll:[],categorySelected:{child:[{}]},childSelectedIndex:0,childSelectedId:0,goodsAll:[],goodsItem:{orderby:{type:"",value:""}},goodsLoading:!0,goodsHandleMode:"all",vanColHeight:667},goodsActive:{},menufooter:{},ParentPopupSpecShow:!1,popupBuySvip:!1}},components:{PublicHeader:l.a,PublicFooter:r.a,diy:g.a},computed:n()({},Object(v.c)(["allcart","icart"]),{goodsSpecNum:function(){var t=this.goods.cartIndex;if(!1===t&&this.allcart)for(var i in this.allcart)this.allcart[i].sid==this.goods.sid&&(t=i);if(!1===t)return 0;var e=this.allcart[t].cart;if(!e||!e.data1||!e.data1[this.goodsActive.id])return 0;var a=this.goodsActive.activeOptionId;return e.data1[this.goodsActive.id][a]?e.data1[this.goodsActive.id][a].num:0}}),methods:n()({},Object(v.b)(["setLocation","getLocation","replaceAllcart"]),{onLoad:function(){var t=this;this.util.request({url:"wmall/mall/category",data:{cid:this.cid,child_id:this.child_id,menufooter:1}}).then(function(i){t.showPreLoading=!1,t.diydata.goodsLoading=!1;var e=i.data.message;e.errno?t.$toast(e.message):(t.diydata.config=e.message.config_mall,t.diydata.diy=t.util.extend(t.diydata.diy,e.message.diy),t.styleContent={"background-color":t.diydata.diy.data.page.background},t.menufooter=window.menufooter,t.replaceAllcart(e.message.carts),1==t.diydata.diy.is_has_storebasic&&(t.diydata.categoryAll=e.message.category,t.diydata.goodsItem={page:2,psize:30,empty:0,data:e.message.goods,orderby:{type:"",value:""}},t.diydata.goodsItem.data.length<t.diydata.goodsItem.psize&&(t.diydata.goodsItem.loaded=!0,t.diydata.goodsItem.data.length||(t.diydata.goodsItem.empty=1)),t.diydata.categorySelectedId=e.message.cid,t.diydata.childSelectedId=e.message.child_id,t.diydata.categorySelectedIndex=e.message.cindex,t.diydata.goodsAll[t.diydata.categorySelectedIndex]=[],t.diydata.goodsAll[t.diydata.categorySelectedIndex][t.diydata.childSelectedIndex]=t.diydata.goodsItem,t.diydata.categorySelected=e.message.category[t.diydata.categorySelectedIndex]||{}))})},onToggleCategory:function(t){t.cid;var i=t.index,e=0;"child"==t.from?(e=i,this.diydata.childSelectedIndex=e,this.diydata.categoryAll[this.diydata.categorySelectedIndex].childSelectedIndex=e,this.diydata.categorySelected=this.diydata.categoryAll[this.diydata.categorySelectedIndex]):(this.diydata.categoryAll[i].childSelectedIndex>0&&(e=this.diydata.categoryAll[i].childSelectedIndex),this.diydata.categorySelected=this.diydata.categoryAll[i],this.diydata.categorySelectedIndex=i,this.diydata.childSelectedIndex=e,this.diydata.categoryAll[i].childSelectedIndex=e),this.diydata.categorySelectedId=this.diydata.categorySelected.id,this.diydata.childSelectedId=0,this.diydata.categorySelected.child&&this.diydata.categorySelected.child.length>0&&(this.diydata.childSelectedId=this.diydata.categorySelected.child[e].id),this.onGetGoods()},onGetGoods:function(){var t=this;if(this.diydata.goodsLoading,this.diydata.goodsAll[this.diydata.categorySelectedIndex]||(this.diydata.goodsAll[this.diydata.categorySelectedIndex]=[]),this.diydata.goodsItem=this.diydata.goodsAll[this.diydata.categorySelectedIndex][this.diydata.childSelectedIndex],this.diydata.goodsItem){if(this.diydata.goodsItem.empty)return!1;if(this.diydata.goodsItem.loaded)return console.log("商品全部加载完成"),!1}else this.diydata.goodsItem={page:1,psize:30,empty:0,loaded:!1,data:[],orderby:{type:"",value:""}};this.diydata.goodsLoading=!0,this.util.request({url:"wmall/mall/category/goods",data:{page:this.diydata.goodsItem.page,psize:this.diydata.goodsItem.psize,cid:this.diydata.categorySelectedId,child_id:this.diydata.childSelectedId,type:this.diydata.goodsItem.orderby.type,value:this.diydata.goodsItem.orderby.value}}).then(function(i){t.diydata.goodsLoading=!1;var e=i.data.message.message;t.diydata.goodsItem.data=[].concat(s()(t.diydata.goodsItem.data),s()(e.goods)),t.diydata.goodsItem.page++,e.goods.length<t.diydata.goodsItem.psize&&(t.diydata.goodsItem.loaded=!0,e.goods.length||(t.diydata.goodsItem.empty=1)),t.diydata.goodsAll[t.diydata.categorySelectedIndex]||(t.diydata.goodsAll[t.diydata.categorySelectedIndex]=[]),t.diydata.goodsAll[t.diydata.categorySelectedIndex][t.diydata.childSelectedIndex]=t.diydata.goodsItem})},onOrderby:function(t){var i=t.type,e=t.value;this.diydata.goodsItem={page:1,psize:30,empty:0,data:[],orderby:{type:i,value:e}},this.diydata.goodsAll[this.diydata.categorySelectedIndex][this.diydata.childSelectedIndex]=this.diydata.goodsItem,this.onGetGoods()},onParentPlus:function(t,i,e,a,d){var o=this;this.goodsActive=i;var s=0;if(0==this.icart.pindan_id)if(1==this.icart.is_buysvip)s=1;else if(this.icart.svip_buy_show>=1&&1==i.svip_buy_show){if(1==d)return this.goodsActive.activeOption&&(this.goodsActive.activeOption.origin_price>0?this.goodsActive.origin_price=this.goodsActive.activeOption.origin_price:this.goodsActive.origin_price=this.goodsActive.activeOption.price,this.goodsActive.activeOption.svip_price>0?this.goodsActive.svip_price=this.goodsActive.activeOption.svip_price:this.goodsActive.svip_price=this.goodsActive.activeOption.price),void(this.popupBuySvip=!0);2==d?this.popupBuySvip=!1:3==d&&(this.popupBuySvip=!1,s=1)}var c=i.id||i.goods_id,n=i.activeOptionId||e,l={sid:i.sid,goods_id:c,option_id:n,num:1,sign:"+",is_buysvip:s};this.util.request({url:"wmall/mall/category/cart",data:l}).then(function(t){var i=t.data.message;i.errno?o.$toast(i.message):o.replaceAllcart(i.message.carts)})},onParentMinus:function(t,i,e){var a=this,d=0;1==this.icart.is_buysvip&&(d=1);var o=t.id||t.goods_id,s=t.activeOptionId||i,c={sid:t.sid,goods_id:o,option_id:s,num:1,sign:"-",is_buysvip:d};this.util.request({url:"wmall/mall/category/cart",data:c}).then(function(t){if((t=t.data.message).errno)return a.$toast(t.message),!1;a.replaceAllcart(t.message.carts)})},onParentSelectOption:function(t){this.goodsActive=t,this.goods=t,this.ParentPopupSpecShow=!0,this.goods.activeOptions||this.onParentGoodsOptionInit()},onParentGoodsOptionInit:function(){if(this.goodsActive=this.goods,this.goodsActive.activeOptions={option:0,attrs:[],optionSelected:0,attrsSelected:[],num:0},1==this.goodsActive.is_options&&(this.goodsActive.activeOptions.option=this.goodsActive.options[0].id,this.goodsActive.activeOptions.optionSelected=this.goodsActive.options[0].id),1==this.goodsActive.is_attrs)for(var t=0;t<this.goodsActive.attrs.length;t++)this.goodsActive.activeOptions.attrs.push(t+"s0"),this.goodsActive.activeOptions.attrsSelected[t]=0;this.onParentToggleActiveOption()},onParentToggleActiveOption:function(t){var i=this.goodsActive;t?i.activeOptionId=t:(i.activeOptionId=i.activeOptions.option,i.activeOptions.attrs.length>0&&(i.activeOptionId=i.activeOptionId+"_"+i.activeOptions.attrs.join("v"))),i.activeOption=i.options_data[i.activeOptionId],i.activeOption.num=this.parentGetSpecNum(),this.goodsActive=d()({},i)},parentGetSpecNum:function(){var t=this.goods.cartIndex;if(!1===t&&this.allcart)for(var i in this.allcart)this.allcart[i].sid==this.goods.sid&&(t=i);if(!1===t)return 0;var e=this.allcart[t].cart;if(!e||!e.data1||!e.data1[this.goodsActive.id])return 0;var a=this.goodsActive.activeOptionId;return e.data1[this.goodsActive.id][a]?e.data1[this.goodsActive.id][a].num:0},onParentToggleOption:function(t,i,e){var a=this.goods;"option"==e?(a.activeOptions.option=t,a.activeOptions.optionSelected=t):(a.activeOptions.attrs[t]=t+"s"+i,a.activeOptions.attrsSelected[t]=i),this.goodsActive=a,this.onParentToggleActiveOption()}}),watch:{allcart:function(){var t=this.allcart,i=this.diydata.categoryAll;if(t)for(var e in i)if(i[e].total=0,i[e].child&&i[e].child.length>0)for(var a in i[e].child){i[e].child[a].total=0;var d=0,o=0;for(var c in t)for(var n in t[c].cart.data)for(var l in t[c].cart.data[n])t[c].cart.data[n][l].plateform_cid==i[e].id&&(o+=t[c].cart.data[n][l].num,i[e].total=o,t[c].cart.data[n][l].plateform_child_id==i[e].child[a].id&&(d+=t[c].cart.data[n][l].num,i[e].child[a].total=d))}else{o=0;for(var c in t)for(var n in t[c].cart.data)for(var l in t[c].cart.data[n])t[c].cart.data[n][l].plateform_cid==i[e].id&&(o+=t[c].cart.data[n][l].num,i[e].total=o)}else for(var e in i)if(i[e].total=0,i[e].child)for(var a in i[e].child)i[e].child[a].total=0;this.diydata.categoryAll=[].concat(s()(i))},$route:function(t,i){this.onLoad()}},created:function(){this.query=this.util.parseQuery(this.$route.query),this.cid=this.query.cid,this.child_id=this.query.child_id,this.onLoad()},mounted:function(){var t=document.documentElement.clientHeight;this.diydata.vanColHeight=t-46-50}},h={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"mall-category"}},[e("public-header",{attrs:{title:t.title}}),t._v(" "),t.menufooter&&t.menufooter.data?e("public-footer",{attrs:{preLoading:t.showPreLoading,menufooter:t.menufooter}}):t._e(),t._v(" "),e("div",{staticClass:"container",class:{"has-child-0":2==t.diydata.diy.storebasic_style,"has-child-4":2==t.diydata.diy.storebasic_style&&t.diydata.categorySelected&&t.diydata.categorySelected.child&&t.diydata.categorySelected.child.length>0&&t.diydata.categorySelected.child.length<=4,"has-child-8":2==t.diydata.diy.storebasic_style&&t.diydata.categorySelected&&t.diydata.categorySelected.child&&t.diydata.categorySelected.child.length>4},style:t.styleContent},[e("diy",{attrs:{diydata:t.diydata,active:t.active,is_grant:t.is_grant,preLoading:t.showPreLoading},on:{onParentPlus:t.onParentPlus,onParentSelectOption:t.onParentSelectOption,onToggleCategory:t.onToggleCategory,onOrderby:t.onOrderby,onGetGoods:t.onGetGoods}})],1),t._v(" "),t.ParentPopupSpecShow?e("van-popup",{staticClass:"options-popup",model:{value:t.ParentPopupSpecShow,callback:function(i){t.ParentPopupSpecShow=i},expression:"ParentPopupSpecShow"}},[e("div",{staticClass:"options-dialog"},[e("div",{staticClass:"muti-close",on:{click:function(i){t.ParentPopupSpecShow=!1}}}),t._v(" "),e("div",{staticClass:"muti-wrap"},[e("div",{staticClass:"muti-food-title border-1px-b"},[t._v("\n\t\t\t\t\t"+t._s(t.goodsActive.title)+"\n\t\t\t\t")]),t._v(" "),e("div",{staticClass:"muti-cont"},[e("div",{staticClass:"muti-cont-inner"},[1==t.goodsActive.is_options?e("div",{staticClass:"muti-sec first"},[e("div",{staticClass:"muti-sec-title"},[t._v("规格")]),t._v(" "),e("div",{staticClass:"muti-choice"},[t._l(t.goodsActive.options,function(i,a){return[e("div",{class:{selected:t.goodsActive.activeOptions.optionSelected==i.id},on:{click:function(e){return t.onParentToggleOption(i.id,"","option")}}},[t._v(t._s(i.name))])]})],2)]):t._e(),t._v(" "),1==t.goodsActive.is_attrs?e("div",{staticClass:"muti-sec"},[t._l(t.goodsActive.attrs,function(i,a){return[e("div",{staticClass:"muti-sec-title"},[t._v(t._s(i.name))]),t._v(" "),e("div",{staticClass:"muti-choice"},[t._l(i.label,function(i,d){return[e("div",{class:{selected:t.goodsActive.activeOptions.attrsSelected[a]==d},on:{click:function(i){return t.onParentToggleOption(a,d,"attr")}}},[t._v(t._s(i))])]})],2)]})],2):t._e()])]),t._v(" "),e("div",{staticClass:"muti-choose"},[e("div",{staticClass:"muti-oprt"},[e("div",{staticClass:"muti-cart-oprt clearfix"},[e("div",{staticClass:"add-food"},[e("van-icon",{staticStyle:{"background-color":"#6BBA50"},attrs:{name:"plus"},on:{click:function(i){return t.onParentPlus(i,t.goodsActive,"","","1")}}})],1),t._v(" "),t.goodsSpecNum?[e("div",{staticClass:"food-num"},[t._v(t._s(t.goodsSpecNum))]),t._v(" "),e("div",{staticClass:"remove-food"},[e("div",{staticClass:"remove icon icon-minus",on:{click:function(i){return t.onParentMinus(t.goodsActive)}}})])]:t._e()],2)]),t._v(" "),e("div",{staticClass:"muti-info"},[e("div",{staticClass:"muti-price"},[t._v(t._s(t.Lang.dollarSign)+t._s(t.goodsActive.activeOption.price))]),t._v(" "),e("div",{staticClass:"muti-type"},[t._v("("+t._s(t.goodsActive.activeOption.name)+")")])])])])])]):t._e(),t._v(" "),e("van-popup",{staticClass:"buy-svip",model:{value:t.popupBuySvip,callback:function(i){t.popupBuySvip=i},expression:"popupBuySvip"}},[e("div",{staticClass:"popup-svip-title"},[t._v("客官，专享价限超级会员享受哦")]),t._v(" "),e("div",{staticClass:"svip-img"},[e("div",{staticClass:"svip-vs-left"},[e("i",{staticClass:"icon icon-crownfill"}),t._v(" "),e("div",{staticClass:"font-12"},[t._v("会员专享价")]),t._v(" "),e("div",{staticClass:"svip-vs-price"},[e("span",{staticClass:"font-14"},[t._v(t._s(t.Lang.dollarSign))]),t._v(t._s(t.goodsActive.svip_price))])]),t._v(" "),e("div",{staticClass:"svip-vs-right"},[e("div",{staticClass:"svip-putong-title"},[t._v("普通用户价格")]),t._v(" "),e("div",{staticClass:"svip-putong-price"},[e("span",{staticClass:"font-14"},[t._v(t._s(t.Lang.dollarSign))]),t._v(t._s(t.goodsActive.origin_price))])])]),t._v(" "),e("div",{staticClass:"buy-svip-text"},[t._v("即刻加入超级会员，尊享众多会员优惠")]),t._v(" "),e("button",{staticClass:"svip-price-btn font-16 margin-15-t"},[e("div",{staticClass:"font-bold",on:{click:function(i){return t.onParentPlus(i,t.goodsActive,"","","3")}}},[t._v("会员专享价购买")]),t._v(" "),e("div",{staticClass:"font-12 padding-5-t"},[t._v("(订单结算时成为会员享优惠)")])]),t._v(" "),e("van-button",{staticClass:"price-btn font-16 margin-15-t",attrs:{size:"normal"},on:{click:function(i){return t.onParentPlus(i,t.goodsActive,"","","2")}}},[t._v("原价购买")])],1)],1)},staticRenderFns:[]};var y=e("VU/8")(p,h,!1,function(t){e("RcBR")},null,null);i.default=y.exports},RcBR:function(t,i){}});
//# sourceMappingURL=147.ec191ab4bdebb99a9999.js.map