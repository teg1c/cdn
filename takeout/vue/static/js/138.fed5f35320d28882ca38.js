webpackJsonp([138],{RqTa:function(t,i){},p5e6:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=s("Cz8s"),a=s("deIj"),o={data:function(){return{sid:0,store:{title:"食品安全档案",qualification:{}}}},components:{PublicHeader:e.a},methods:{onLoad:function(){var t=this;Object(a.a)({vue:t,url:"wmall/store/goods/qualification",data:{sid:t.sid},success:function(i){t.store=t.util.extend(t.store,i.store)}})}},mounted:function(){var t=this.util.parseQuery(this.$route.query);this.sid=t.sid,this.onLoad()}},r={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{attrs:{id:"store-qualification"}},[s("public-header",{attrs:{title:t.store.title}}),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"block"},[s("div",{staticClass:"block-title"},[t._v("商家资质信息公示")]),t._v(" "),s("van-row",{attrs:{gutter:"10"}},[t.store.qualification.business&&t.store.qualification.business.thumb?s("van-col",{attrs:{span:"12"}},[s("div",{staticClass:"thumb",on:{click:function(i){return t.util.jsPreviewImage(t.store.qualification.business.thumb)}}},[s("img",{attrs:{src:t.store.qualification.business.thumb}})])]):t._e(),t._v(" "),t.store.qualification.service&&t.store.qualification.service.thumb?s("van-col",{attrs:{span:"12"}},[s("div",{staticClass:"thumb",on:{click:function(i){return t.util.jsPreviewImage(t.store.qualification.service.thumb)}}},[s("img",{attrs:{src:t.store.qualification.service.thumb}})])]):t._e()],1)],1),t._v(" "),t.store.qualification.more1&&t.store.qualification.more1.thumb||t.store.qualification.more2&&t.store.qualification.more2.thumb?s("div",{staticClass:"block"},[s("div",{staticClass:"block-title"},[t._v("更多资质信息公示")]),t._v(" "),s("van-row",{attrs:{gutter:"10"}},[t.store.qualification.more1&&t.store.qualification.more1.thumb?s("van-col",{attrs:{span:"12"}},[s("div",{staticClass:"thumb",on:{click:function(i){return t.util.jsPreviewImage(t.store.qualification.more1.thumb)}}},[s("img",{attrs:{src:t.store.qualification.more1.thumb}})])]):t._e(),t._v(" "),t.store.qualification.more2&&t.store.qualification.more2.thumb?s("van-col",{attrs:{span:"12"}},[s("div",{staticClass:"thumb",on:{click:function(i){return t.util.jsPreviewImage(t.store.qualification.more2.thumb)}}},[s("img",{attrs:{src:t.store.qualification.more2.thumb}})])]):t._e()],1)],1):t._e()])],1)},staticRenderFns:[]};var n=s("VU/8")(o,r,!1,function(t){s("RqTa")},null,null);i.default=n.exports}});
//# sourceMappingURL=138.fed5f35320d28882ca38.js.map