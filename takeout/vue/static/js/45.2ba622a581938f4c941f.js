webpackJsonp([45],{"7LCE":function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=t("Gu7T"),r=t.n(a),i=t("woOf"),d=t.n(i),l=t("Dd8w"),n=t.n(l),o=t("NYxO"),c=t("Cz8s"),u=t("+TmT"),m={data:function(){return{query:{},address:{address:"",store:{},show_resolve:1},sexName:"先生",submiting:0,value:[],address_type:0,area_level:0,areas:[],columns:[{values:[],className:"column1",defaultIndex:0},{values:[],className:"column2",defaultIndex:0}],addressPopupStatus:!1,showPreLoading:!0,tag:"0",focus:!1,addressValue:"",addressResult:{name:"",mobile:"",address:""},resolveStatus:!1,addressSearch:[]}},components:{PublicHeader:c.a,Uploader:u.a},computed:n()({},Object(o.c)(["editAddress","erranderExtra","erranderStoreExtra","addressUser"]),{orderCreateQuery:function(){var e=this.query;if(e){var s={};for(var t in e){["sid","is_pindan","pindan_id","is_buysvip"].indexOf(t)>=0&&(s[t]=e[t])}return s}return{}}}),methods:n()({},Object(o.b)(["replaceAddress","setOrderExtra","setState","setMallOrderExtra"]),{onClearAddress:function(){this.addressValue=""},onSelectAddress:function(e){this.replaceAddress(e),this.editAddress&&(this.address=d()(this.address,this.editAddress),this.resolveStatus=!1)},onResolve:function(){var e=this;if(!e.addressValue)return e.util.$toast("请粘贴要识别的地址"),!1;e.util.request({url:"wmall/member/address/resolve",data:{text:e.addressValue}}).then(function(s){var t=s.data.message;if(t.errno)return e.util.$toast(t.message),!1;if(t=t.message,e.addressResult=e.util.extend(e.addressResult,t),e.address.realname=t.name,e.setState({type:"addressUser",key:"realname",val:t.name}),e.address.mobile=t.mobile,e.setState({type:"addressUser",key:"mobile",val:t.mobile}),t.address){var a="system/common/map/suggestion";"google"==e.util.getStorage("MapType")&&(a="system/common/map/suggestion_google"),e.util.request({url:a,data:{key:t.address}}).then(function(s){if((s=s.data.message).errno)return e.util.$toast(s.message),!1;s.message&&s.message.length>0&&(e.addressSearch=[].concat(r()(s.message))),e.resolveStatus=!0})}})},onToggleAddressPopupStatus:function(){this.addressPopupStatus=!this.addressPopupStatus},onChangePicker:function(e,s,t){0==t?s[0].child&&s[0].child.length>0?(e.setColumnValues(1,s[0].child),1==this.area_level&&(s[0].child[0].child&&s[0].child[0].child.length>0?e.setColumnValues(2,s[0].child[0].child):e.setColumnValues(2,[]))):e.setColumnValues(1,[]):1==t&&1==this.area_level&&(s[1].child&&s[1].child.length>0?e.setColumnValues(2,s[1].child):e.setColumnValues(2,[]))},onConfirmAddress:function(e,s){var t=this,a=1==t.area_level?2:1;if(0!=e[a].status)t.address.address=e[0].title+e[1].title,2==a&&(t.address.address+=e[2].title,t.address.area_parentid=e[a-2].id),t.address.location_x=e[a].location_x,t.address.location_y=e[a].location_y,t.address.area_childid=e[a].id,t.address.area_id=e[a-1].id,t.onToggleAddressPopupStatus();else{var r="亲，您的地址【"+e[a].title+"】已超出【"+t.address.store.title+"】的配送范围了，请更换其他商家下单";t.$dialog.confirm({title:"温馨提示",message:r,confirmButtonText:"更换商家",cancelButtonText:"调整地址"}).then(function(){t.$router.replace(t.util.getUrl({path:"/pages/home/index"}))}).catch(function(){})}},onLoad:function(){var e=this,s=this;this.util.request({url:"wmall/member/address/post",data:{sid:this.sid,id:this.id,channel:this.channel}}).then(function(t){e.showPreLoading=!1;var a=t.data.message;if(a.errno&&e.util.$toast(a.message),e.address=a.message,"location"==e.from&&e.editAddress.address&&e.editAddress.lat&&e.editAddress.lng&&(e.address=d()(e.address,e.editAddress)),e.addressUser&&e.addressUser.realname&&(e.address.realname=e.addressUser.realname),e.addressUser&&e.addressUser.mobile&&(e.address.mobile=e.addressUser.mobile),e.sexName=e.address.sex?e.address.sex:e.sexName,e.address_type=a.message.address_type,e.area_level=a.message.area_level,e.address.is_default=1==e.address.is_default,1==e.address_type&&a.message.areas&&a.message.areas.length>0)if(e.areas=[].concat(r()(a.message.areas)),e.columns[0].values=[].concat(r()(e.areas)),1==e.area_level){e.columns.push({values:[],className:"column3",defaultIndex:0});var i=a.message.area_parent_index;if(e.columns[0].defaultIndex=i,e.areas[i].child&&e.areas[i].child.length>0){var l=a.message.area_index;e.columns[1].values=[].concat(r()(e.areas[i].child)),e.columns[1].defaultIndex=l,e.areas[i].child[l].child&&e.areas[i].child[l].child.length>0&&(e.columns[2].values=[].concat(r()(e.areas[i].child[l].child)),e.columns[2].defaultIndex=a.message.area_child_index)}}else{l=a.message.area_index;e.columns[0].defaultIndex=l,e.areas[l].child&&e.areas[l].child.length>0&&(e.columns[1].values=[].concat(r()(e.areas[l].child)),e.columns[1].defaultIndex=a.message.area_child_index)}e.id||e.editAddress.address||1==e.address_type||e.util.getLocation({successLocation:function(e){},successAddress:function(e){s.address.address=e.address,s.address.location_x=e.location_x,s.address.location_y=e.location_y,s.address=d()({},s.address)},fail:function(e){}}),"location"==e.from&&e.replaceAddress({}),e.tag=a.message.tag})},onChangeAdderssTags:function(e){this.tag!=e&&(this.tag=e)},onSubmit:function(){var e=this;if(1==this.submiting)return!1;if(!this.address.address)return this.util.$toast("地址不能为空"),!1;if(!this.address.realname)return this.util.$toast("联系人不能为空"),!1;if(!this.address.mobile)return this.util.$toast("手机号不能为空"),!1;if(!this.util.isValidMobile(this.address.mobile))return this.util.$toast("手机号格式错误"),!1;this.submiting=1;var s={id:this.id,sid:this.sid,order_id:this.orderId,channel:this.channel,flag:1,sex:this.sexName,number:this.address.number,realname:this.address.realname,mobile:this.address.mobile,address:this.address.address,location_x:this.address.location_x||this.address.lat,location_y:this.address.location_y||this.address.lng,area_childid:this.address.area_childid,area_id:this.address.area_id,area_parentid:this.address.area_parentid,tag:this.tag,is_default:this.address.is_default?1:0};this.erranderExtra&&this.erranderExtra.agentid&&(s.agentid=this.erranderExtra.agentid),this.erranderStoreExtra&&this.erranderStoreExtra.agentid&&(s.agentid=this.erranderStoreExtra.agentid),this.util.request({url:"wmall/member/address/post",data:s,method:"POST"}).then(function(t){e.submiting=0;var a=t.data.message;if(!e.channel||""==e.channel||"undefined"==e.channel)return a.errno?(e.util.$toast(a.message),!1):(e.replaceAddress({}),void e.util.$toast("保存地址成功",e.util.getUrl({path:"/pages/member/address"}),1500,"replace"));if("takeout"==e.channel)if(-1e3==a.errno)1==e.address_type?e.$dialog.confirm({title:"温馨提示",message:"亲，您的地址已超出商家的配送范围了，请更换商家下单",confirmButtonText:"更换商家",cancelButtonText:"调整地址"}).then(function(){e.$router.replace(e.util.getUrl({path:"/pages/home/index"}))}).catch(function(){}):e.$dialog.confirm({title:"温馨提示",message:a.message,confirmButtonText:"调整地址",cancelButtonText:"仍然保存"}).then(function(){}).catch(function(){s.force=1,e.util.request({method:"POST",url:"wmall/member/address/post",data:s}).then(function(s){e.orderId&&e.orderId>0?e.$router.replace(e.util.getUrl({path:"/pages/order/address",query:{id:e.orderId}})):(e.replaceAddress({}),e.setOrderExtra({key:"address_id",val:0}),e.$router.replace(e.util.getUrl({path:"/pages/order/create",query:e.orderCreateQuery})))})});else{if(a.errno)return e.util.$toast(a.message),!1;e.orderId&&e.orderId>0?e.$router.replace(e.util.getUrl({path:"/pages/order/address",query:{id:e.orderId}})):(e.setOrderExtra({key:"address_id",val:a.message}),e.$router.replace(e.util.getUrl({path:"/pages/order/create",query:e.orderCreateQuery})))}else if("errander"==e.channel){if(-1e3!=a.errno)return a.errno?(e.util.$toast(a.message),!1):("take"==e.mode?(e.setState({type:"erranderStoreExtra",key:"buyaddress_id",val:a.message}),e.$router.replace(e.util.getUrl({path:"/plugin/pages/paotui/store/order/diy",query:{id:e.erranderId,sid:e.esid,mode:e.mode}}))):"send"==e.mode?(e.setState({type:"erranderStoreExtra",key:"acceptaddress_id",val:a.message}),e.$router.replace(e.util.getUrl({path:"/plugin/pages/paotui/store/order/diy",query:{id:e.erranderId,sid:e.esid,mode:e.mode}}))):("accept"==e.input?e.setState({type:"erranderExtra",key:"acceptaddress_id",val:a.message}):"buy"==e.input&&e.setState({type:"erranderExtra",key:"buyaddress_id",val:a.message}),e.$router.replace(e.util.getUrl({path:"/plugin/pages/paotui/diy",query:{id:e.erranderId}}))),!1);e.$dialog.confirm({title:"温馨提示",message:"亲,您的地址已超出跑腿的服务范围了!",confirmButtonText:"调整地址",cancelButtonText:"仍然保存"}).then(function(){}).catch(function(){s.force=1,e.util.request({method:"POST",url:"wmall/member/address/post",data:s}).then(function(s){e.replaceAddress({}),"take"==e.mode?(e.setState({type:"erranderStoreExtra",key:"buyaddress_id",val:0}),e.$router.replace(e.util.getUrl({path:"/plugin/pages/paotui/store/order/diy",query:{id:e.erranderId,sid:e.esid,mode:e.mode}}))):"send"==e.mode?(e.setState({type:"erranderStoreExtra",key:"acceptaddress_id",val:0}),e.$router.replace(e.util.getUrl({path:"/plugin/pages/paotui/store/order/diy",query:{id:e.erranderId,sid:e.esid,mode:e.mode}}))):("accept"==e.input?e.setState({type:"erranderExtra",key:"acceptaddress_id",val:0}):"buy"==e.input&&e.setState({type:"erranderExtra",key:"buyaddress_id",val:0}),e.$router.replace(e.util.getUrl({path:"/plugin/pages/paotui/diy",query:{id:e.erranderId}})))})})}else if("mall"==e.channel){if(a.errno)return e.util.$toast(a.message),!1;e.setMallOrderExtra({sid:0,key:"address_id",val:a.message}),e.$router.replace(e.util.getUrl({path:"/mall/pages/order/create",query:{sids:e.query.sids}}))}else if("location"==e.channel){if(a.errno)return e.util.$toast(a.message),!1;e.replaceAddress({}),e.util.$toast("保存地址成功",e.util.getUrl({path:"/pages/home/location"}),1500,"replace")}})},onSelectSex:function(e){this.sexName=e},onDel:function(){var e=this;this.$dialog.confirm({title:"温馨提示",message:"删除后将不可恢复,确定删除吗?"}).then(function(){e.util.request({url:"wmall/member/address/del",data:{id:e.id}}).then(function(s){if(!s.data.message.errno){var t={};e.sid>0&&(t={sid:e.sid}),e.$router.replace(e.util.getUrl({path:"/pages/member/address",query:t}))}})})}}),created:function(){this.query=this.util.parseQuery(this.$route.query),this.query&&(this.id=this.query.id,this.sid=this.query.sid,this.channel=this.query.channel,this.input=this.query.input,this.erranderId=this.query.erranderId,this.from=this.query.from,this.orderId=this.query.orderId,this.sid>0&&(this.channel="takeout",this.query.channel="takeout"),this.esid=this.query.esid,this.mode=this.query.mode)},mounted:function(){this.onLoad()}},h={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{attrs:{id:"address-post"}},[t("public-header",{attrs:{title:"编辑地址"}}),e._v(" "),t("div",{staticClass:"content"},[t("div",{staticClass:"list"},[e.address.store&&1==e.address.store.auto_get_address?[e.address_type?1==e.address_type?t("div",{staticClass:"list-item flex-lr van-hairline--bottom"},[t("div",{staticClass:"item-title ellipsis"},[e._v("选择地址")]),e._v(" "),t("div",{staticClass:"item-input flex-lr"},[t("div",{staticClass:"w-100 font-15"},[t("div",{staticClass:"flex-lr",on:{click:e.onToggleAddressPopupStatus}},[e.address.address?t("div",{staticStyle:{color:"#333"}},[e._v(e._s(e.address.address))]):t("span",{staticClass:"c-gray"},[e._v("点击选择地址(必填)")]),e._v(" "),t("i",{staticClass:"icon icon-right c-gray"})])])])]):e._e():t("div",{staticClass:"list-item flex-lr van-hairline--bottom"},[t("div",{staticClass:"item-title ellipsis"},[e._v("小区/大厦/学校")]),e._v(" "),t("div",{staticClass:"item-input flex-lr"},[t("i",{staticClass:"icon icon-location"}),e._v(" "),t("div",{staticClass:"location"},[t("div",{staticClass:"flex-lr",on:{click:function(s){return e.util.jsUrl("/pages/member/addressLocation",e.query,"replace")}}},[e.address.address?t("div",{staticStyle:{color:"#333"}},[e._v(e._s(e.address.address))]):t("span",[e._v("点击添加地址(必填)")]),e._v(" "),t("i",{staticClass:"icon icon-right"})])])]),e._v(" "),e.resolveStatus?t("div",{staticClass:"popup-search"},[e.addressSearch.length>0?[t("van-cell-group",{staticClass:"search-list"},[e._l(e.addressSearch,function(s,a){return a<3?t("van-cell",{key:a,attrs:{title:s.address,label:s.name},on:{click:function(t){return e.onSelectAddress(s)}}}):e._e()}),e._v(" "),t("div",{staticClass:"padding-15-tb text-center font-14"},[t("span",{staticClass:"c-danger",on:{click:function(s){return e.util.jsUrl("/pages/member/addressLocation?key="+e.addressResult.address,e.query,"replace")}}},[e._v("查找更多")])])],2)]:[t("van-cell-group",{staticClass:"search-list"},[t("div",{staticClass:"padding-15-tb text-center font-14"},[t("span",{staticClass:"c-danger",on:{click:function(s){return e.util.jsUrl("/pages/member/addressLocation?key="+e.addressResult.address,e.query,"replace")}}},[e._v("未找到地址，手动去搜索")])])])]],2):e._e()])]:[t("div",{staticClass:"list-item flex-lr van-hairline--bottom"},[t("div",{staticClass:"item-title ellipsis"},[e._v("收货地址")]),e._v(" "),t("div",{staticClass:"item-input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.address.address,expression:"address.address"}],attrs:{name:"address",type:"text",placeholder:"请输入收货地址"},domProps:{value:e.address.address},on:{input:function(s){s.target.composing||e.$set(e.address,"address",s.target.value)}}})])])],e._v(" "),t("div",{staticClass:"list-item flex-lr van-hairline--bottom"},[t("div",{staticClass:"item-title ellipsis"},[e._v("楼号-门牌号")]),e._v(" "),t("div",{staticClass:"item-input "},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.address.number,expression:"address.number"}],attrs:{name:"number",type:"text",placeholder:"例:16号楼427室"},domProps:{value:e.address.number},on:{input:function(s){s.target.composing||e.$set(e.address,"number",s.target.value)}}})])]),e._v(" "),t("div",{staticClass:"list-item flex-lr van-hairline--bottom"},[t("div",{staticClass:"item-title ellipsis "},[e._v("联系人")]),e._v(" "),t("div",{staticClass:"item-input"},[t("div",{staticClass:"username van-hairline--bottom"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.address.realname,expression:"address.realname"}],attrs:{type:"text",name:"realname",placeholder:"您的姓名"},domProps:{value:e.address.realname},on:{input:function(s){s.target.composing||e.$set(e.address,"realname",s.target.value)}}})]),e._v(" "),t("div",{staticClass:"sex flex"},[t("div",{staticClass:"sex-item flex",on:{click:function(s){return e.onSelectSex("先生")}}},[t("i",{staticClass:"icon",class:{"icon-check":"先生"==e.sexName}}),e._v("先生\n\t\t\t\t\t\t\t")]),e._v(" "),t("div",{staticClass:"sex-item flex",on:{click:function(s){return e.onSelectSex("女士")}}},[t("i",{staticClass:"icon",class:{"icon-check":"女士"==e.sexName}}),e._v("女士\n\t\t\t\t\t\t\t")])])])]),e._v(" "),t("div",{staticClass:"list-item flex-lr van-hairline--bottom"},[t("div",{staticClass:"item-title ellipsis"},[e._v("手机号")]),e._v(" "),t("div",{staticClass:"item-input "},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.address.mobile,expression:"address.mobile"}],attrs:{type:"number",name:"mobile",placeholder:"请填写手机号"},domProps:{value:e.address.mobile},on:{input:function(s){s.target.composing||e.$set(e.address,"mobile",s.target.value)}}})])]),e._v(" "),t("div",{staticClass:"list-item flex-lr van-hairline--bottom"},[t("div",{staticClass:"item-title ellipsis"},[e._v("标签")]),e._v(" "),t("div",{staticClass:"tags-list"},[t("div",{staticClass:"tags-item",class:{active:"1"==e.tag},on:{click:function(s){return e.onChangeAdderssTags("1")}}},[e._v("家")]),e._v(" "),t("div",{staticClass:"tags-item",class:{active:"2"==e.tag},on:{click:function(s){return e.onChangeAdderssTags("2")}}},[e._v("公司")]),e._v(" "),t("div",{staticClass:"tags-item",class:{active:"3"==e.tag},on:{click:function(s){return e.onChangeAdderssTags("3")}}},[e._v("学校")])])]),e._v(" "),t("div",{staticClass:"list-item flex-lr van-hairline--bottom"},[t("div",{staticClass:"item-title ellipsis"},[e._v("设为默认地址")]),e._v(" "),t("div",{staticClass:"item-input flex-start-center"},[t("van-switch",{attrs:{size:"18px","active-color":"#ff2d4b","inactive-color":"#EEEEEE"},model:{value:e.address.is_default,callback:function(s){e.$set(e.address,"is_default",s)},expression:"address.is_default"}})],1)]),e._v(" "),1==e.address.address_resolve_status?t("div",{staticClass:"address-resolve"},[e._m(0),e._v(" "),e.focus?[t("van-field",{staticClass:"border-0px",attrs:{type:"textarea",autosize:{maxHeight:80,minHeight:80},placeholder:"将复制的地址信息粘贴至此"},model:{value:e.addressValue,callback:function(s){e.addressValue=s},expression:"addressValue"}}),e._v(" "),t("div",{staticClass:"flex-lr"},[t("div",[e._e()]),e._v(" "),t("div",{staticClass:"flex"},[t("span",{staticClass:"margin-15-r",on:{click:e.onClearAddress}},[e._v("清空")]),e._v(" "),t("van-button",{attrs:{size:"small",type:"danger"},on:{click:e.onResolve}},[e._v("提交")])],1)])]:[t("div",{staticClass:"flex-lr margin-5-t",on:{click:function(s){e.focus=!0}}},[t("div",{staticClass:"c-gray"},[e._v("粘贴文本，自动识别地址信息")]),e._v(" "),e._e()])]],2):e._e()],2),e._v(" "),t("div",{staticClass:"save-btn",on:{click:e.onSubmit}},[t("van-button",{attrs:{type:"danger",size:"normal",block:!0}},[e._v("保存")])],1),e._v(" "),e.address&&e.address.id>0?t("div",{staticClass:"save-btn",on:{click:e.onDel}},[t("van-button",{attrs:{type:"default",size:"normal",block:!0}},[e._v("删除")])],1):e._e()]),e._v(" "),t("van-popup",{attrs:{position:"bottom"},model:{value:e.addressPopupStatus,callback:function(s){e.addressPopupStatus=s},expression:"addressPopupStatus"}},[t("van-picker",{attrs:{"show-toolbar":"",title:"选择地址","value-key":"title",columns:e.columns},on:{cancel:e.onToggleAddressPopupStatus,confirm:e.onConfirmAddress,change:e.onChangePicker}})],1),e._v(" "),e.showPreLoading?t("iloading"):e._e()],1)},staticRenderFns:[function(){var e=this.$createElement,s=this._self._c||e;return s("div",[s("span",{staticClass:"font-bold"},[this._v("地址智能解析")]),this._v(" "),s("span",{staticClass:"icon icon-question1 c-gray"})])}]};var v=t("VU/8")(m,h,!1,function(e){t("b32b")},null,null);s.default=v.exports},b32b:function(e,s){}});
//# sourceMappingURL=45.2ba622a581938f4c941f.js.map