webpackJsonp([150],{"3UKo":function(t,o,a){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=a("Cz8s"),s=a("EE5Z"),n={data:function(){return{footmarks:[],showLoading:!0}},components:{PublicHeader:e.a,storeGroup:s.a},methods:{onLoad:function(){var t=this;this.util.request({url:"wmall/member/footmark",data:{}}).then(function(o){t.footmarks=o.data.message.message.footmarks,t.showLoading=!1})}},mounted:function(){this.onLoad()}},r={render:function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",{attrs:{id:"footmark"}},[a("public-header",{attrs:{title:"我的足迹"}}),t._v(" "),t.footmarks.length>0?a("div",{staticClass:"content"},[t._l(t.footmarks,function(t){return[a("store-group",{attrs:{stores:t.stores}})]})],2):a("div",{staticClass:"no-data"},[a("img",{attrs:{src:"static/img/store_no_con.png",alt:""}}),t._v(" "),a("p",[t._v("您没有浏览记录")])]),t._v(" "),a("transition",{attrs:{name:"loading"}},[a("iloading",{directives:[{name:"show",rawName:"v-show",value:t.showLoading,expression:"showLoading"}]})],1)],1)},staticRenderFns:[]};var i=a("VU/8")(n,r,!1,function(t){a("PWMW")},null,null);o.default=i.exports},PWMW:function(t,o){}});
//# sourceMappingURL=150.0ad7973f42df741cf76e.js.map