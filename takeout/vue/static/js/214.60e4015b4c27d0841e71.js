webpackJsonp([214],{TZpj:function(t,e){},dlpR:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={components:{PublicHeader:a("Cz8s").a},data:function(){return{mobile:"",captcha:"",code:"",redPacket:{},member:{},mall_title:"",days_format:"",captcha_img:"",code_html:"获取验证码",downcount:60,code_disabled:!1,showPreLoading:!0}},computed:{},methods:{onRefreshCaptcha:function(){var t=this;this.util.request({url:"shareRedpacket/share/captcha"}).then(function(e){t.captcha_img=e.data.message.message.captcha})},onGetCode:function(){var t=this;return 60==this.downcount&&(this.mobile?this.util.isValidMobile(this.mobile)?this.captcha?void this.util.request({url:"system/common/code",method:"POST",data:{mobile:this.mobile,captcha:this.captcha}}).then(function(e){var a=e.data.message;if(a.errno)t.$toast(a.message);else{var s=setInterval(function(){t.downcount--,t.downcount<=0?(clearInterval(s),t.code_html="获取验证码",t.downcount=60):(t.code_disabled=!0,t.code_html=t.downcount+"秒后重新获取")},1e3);t.$toast("验证码发送成功, 请注意查收")}}):(this.$toast("请输入图形验证码"),!1):(this.$toast("手机号格式错误"),!1):(this.$toast("请输入手机号"),!1))},onSubmit:function(){var t=this;return this.mobile?this.util.isValidMobile(this.mobile)?this.captcha?this.code?void this.util.request({url:"shareRedpacket/share/invite",method:"POST",data:{mobile:this.mobile,captcha:this.captcha,code:this.code,uid:this.uid}}).then(function(e){var a=e.data.message;if(a.errno)return t.$toast(a.message),-1e3==a.errno&&t.$router.push(t.util.getUrl({path:"/package/pages/shareRedpacket/repeat"})),!1;t.$router.push(t.util.getUrl({path:"/package/pages/shareRedpacket/success",query:{uid:a.message}}))}):(this.$toast("请输入短信验证码"),!1):(this.$toast("请输入图形验证码"),!1):(this.$toast("手机号格式错误"),!1):(this.$toast("请输入手机号"),!1)},onLoad:function(){var t=this;this.util.request({url:"shareRedpacket/share/invite",data:{u:this.uid}}).then(function(e){t.showPreLoading=!1;var a=e.data.message;if(a.errno)return t.$toast(a.message),-1e3==a.errno&&t.$router.replace(t.util.getUrl({path:"/package/pages/shareRedpacket/repeat"})),!1;a=a.message,t.member=a.member,t.mall_title=a.mall_title,t.redPacket=a.redPacket,t.days_format=a.days_format,t.captcha_img=a.captcha})}},created:function(){this.query=this.$route.query,this.query&&(this.uid=this.query.u)},mounted:function(){this.onLoad()}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"shareRedpacket-invite"}},[a("public-header",{attrs:{title:t.redPacket.title}}),t._v(" "),a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("div",{staticClass:"active-day"},[a("div",{staticClass:"day-picture"},[a("img",{attrs:{src:t.member.avatar,alt:""}})]),t._v(" "),a("p",{staticClass:"day-info"},[t._v("\n\t\t\t\tHi,我来"+t._s(t.mall_title)+t._s(t.days_format)+"了，你也快来吧！\n\t\t\t")])]),t._v(" "),a("div",{staticClass:"activity-box"},[a("div",{staticClass:"activity-info"},[a("p",[t._v("新用户最高可得")]),t._v(" "),a("p",{staticClass:"packet-money"},[t._v(t._s(t.Lang.dollarSign)),a("span",[t._v(t._s(t.redPacket.follow_redpacket_max))])])]),t._v(" "),a("div",{staticClass:"user-info"},[a("div",{staticClass:"phone-input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.mobile,expression:"mobile"}],attrs:{type:"text",name:"mobile",placeholder:"请输入手机号"},domProps:{value:t.mobile},on:{input:function(e){e.target.composing||(t.mobile=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"captcha clearfix"},[a("div",{staticClass:"captcha-input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.captcha,expression:"captcha"}],attrs:{type:"text",name:"captcha",placeholder:"请输入图形验证码"},domProps:{value:t.captcha},on:{input:function(e){e.target.composing||(t.captcha=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"btn-captcha",on:{click:t.onRefreshCaptcha}},[a("img",{staticClass:"img-100",attrs:{src:t.captcha_img}})])]),t._v(" "),a("div",{staticClass:"code clearfix"},[a("div",{staticClass:"code-input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],attrs:{type:"text",name:"code",placeholder:"请输入验证码"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"send-code",class:{disabled:t.code_disabled},on:{click:t.onGetCode}},[t._v(t._s(t.code_html))])]),t._v(" "),a("div",{staticClass:"now-get"},[a("div",{attrs:{id:"now-get"},on:{click:t.onSubmit}},[t._v("立即领取")])])]),t._v(" "),t._m(1),t._v(" "),a("input",{attrs:{type:"hidden",name:"hidden",value:""}})])]),t._v(" "),t.showPreLoading?a("iloading"):t._e()],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"platform-ad"},[e("img",{attrs:{src:"static/img/shareRedpacket-top.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box-bottom"},[e("img",{attrs:{src:"static/img/box_bot.png",alt:""}})])}]};var c=a("VU/8")(s,i,!1,function(t){a("TZpj")},null,null);e.default=c.exports}});
//# sourceMappingURL=214.60e4015b4c27d0841e71.js.map