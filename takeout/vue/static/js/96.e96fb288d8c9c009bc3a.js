webpackJsonp([96],{"272L":function(t,e){},mmWy:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("Gu7T"),i=a.n(s),r=a("Dd8w"),n=a.n(r),d=a("NYxO"),o={components:{PublicHeader:a("Cz8s").a},data:function(){return{extra:{dayIndex:0,day:"",time:"",cid:""},categorys:{},reserves:{},days:[],year:"",tables_info:{},showPreLoading:!0}},computed:{},methods:n()({},Object(d.b)(["setState"]),{onLoad:function(){var t=this;this.util.request({url:"wmall/store/reserve/index",data:{sid:this.sid}}).then(function(e){t.showPreLoading=!1;var a=e.data.message;if(a.errno)return t.$toast(a.message),!1;t.categorys=a.message.categorys,t.reserves=a.message.reserves,t.days=[].concat(i()(a.message.days)),t.year=a.message.year,t.extra.day=t.year+"-"+t.days[0].day,t.tables_info=a.message.tables_info})},onSelectDay:function(t,e){this.extra.dayIndex=t,this.extra.day=this.year+"-"+e,this.setState({type:"reserveExtra",key:"day",val:this.extra.day})},onSelectTime:function(t,e,a){return-1==t?(this.$toast("该时间不能预定点餐"),!1):this.tables_info[this.extra.day]&&this.tables_info[this.extra.day][e]&&a<=this.tables_info[this.extra.day][e][t]?(this.$toast("该桌台类型下没有可以预订的桌位"),!1):(0==this.extra.dayIndex&&(this.extra.day=this.year+"-"+this.days[0].day,this.setState({type:"reserveExtra",key:"day",val:this.extra.day})),this.extra.time=t,this.extra.cid=e,this.setState({type:"reserveExtra",key:"cid",val:e}),this.setState({type:"reserveExtra",key:"time",val:t}),void this.$router.push(this.util.getUrl({path:"/tangshi/pages/reserve/create?sid="+this.sid})))}}),mounted:function(){this.onLoad()},created:function(){this.query=this.$route.query,this.query&&(this.sid=this.query.sid)}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"reserve-index"}},[a("public-header",{attrs:{title:"预定时间"}}),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"order-time"},[a("ul",t._l(t.days,function(e,s){return a("li",{key:s,class:{active:s==t.extra.dayIndex},on:{click:function(a){return t.onSelectDay(s,e.day)}}},[a("p",[t._v(t._s(e.day_cn))]),t._v(" "),a("span",[t._v(t._s(e.day)+" "+t._s(e.week_cn))])])}),0)]),t._v(" "),a("div",{staticClass:"order-con"},t._l(t.categorys,function(e){return a("div",{key:e.id},[a("span",[t._v(t._s(e.title))]),t._v(" "),a("p",[t._v(t._s(t.Lang.dollarSign)+t._s(e.reservation_price)+"起订")]),t._v(" "),a("div",{staticClass:"table-list"},t._l(t.reserves[e.id],function(s,i){return a("div",{key:i,staticClass:"table-wrap"},[a("div",{staticClass:"table-item",class:{"border-gray":0==t.extra.dayIndex&&0==s.timeout}},[0==t.extra.dayIndex&&1==s.timeout||t.extra.dayIndex>0?a("div",{on:{click:function(a){return t.onSelectTime(s.time,e.id,s.total_num)}}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(s.title)+"\n\t\t\t\t\t\t\t\t"),t.tables_info[t.extra.day]?[t.tables_info[t.extra.day][e.id]?[t.tables_info[t.extra.day][e.id][s.time]?[t._v("\n\t\t\t\t\t\t\t\t\t\t\t(桌位"+t._s(s.total_num-t.tables_info[t.extra.day][e.id][s.time])+")\n\t\t\t\t\t\t\t\t\t\t")]:[t._v("\n\t\t\t\t\t\t\t\t\t\t\t(桌位"+t._s(s.total_num)+")\n\t\t\t\t\t\t\t\t\t\t")]]:[t._v("\n\t\t\t\t\t\t\t\t\t\t(桌位"+t._s(s.total_num)+")\n\t\t\t\t\t\t\t\t\t")]]:[t._v("\n\t\t\t\t\t\t\t\t\t(桌位"+t._s(s.total_num)+")\n\t\t\t\t\t\t\t\t")]],2):a("div",{on:{click:function(e){return t.onSelectTime(-1,-1,0)}}},[t._v(t._s(s.time))])])])}),0)])}),0)]),t._v(" "),t.showPreLoading?a("iloading"):t._e()],1)},staticRenderFns:[]};var c=a("VU/8")(o,l,!1,function(t){a("272L")},null,null);e.default=c.exports}});
//# sourceMappingURL=96.e96fb288d8c9c009bc3a.js.map