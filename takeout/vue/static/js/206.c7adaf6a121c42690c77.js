webpackJsonp([206],{l5BK:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=n("Gu7T"),l=n.n(t),i={data:function(){return{language:"zh_jian",languages:[],showPreLoading:!0}},components:{publicHeader:n("Cz8s").a},methods:{onLoad:function(){var e=this;this.util.request({url:"wmall/member/profile/language"}).then(function(a){e.showPreLoading=!1;var n=a.data.message;if(!n.errno){e.languages=[].concat(l()(n.message.languages));var t=e.util.getStorage("ilanguage");e.language=t||e.language}})},onToggleLanguage:function(e){var a=this,n=this.languages[e];if(n.key==this.language)return!1;this.$dialog.confirm({message:"确定将语言设置为"+n.title+"吗?"}).then(function(){a.util.setStorage("ilanguage",n.key);var e="back";n.url&&(e=n.url),a.util.$toast("设置成功",e)}).catch(function(){})}},mounted:function(){this.onLoad()}},u={render:function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{attrs:{id:"language"}},[n("public-header",{attrs:{title:"语言设置"}}),e._v(" "),n("div",{staticClass:"content"},[n("van-cell-group",{attrs:{title:"点击切换语言"}},[e._l(e.languages,function(a,t){return[n("van-cell",{attrs:{title:a.title,value:a.key==e.language?"当前设置":"",clickable:"","is-link":""},on:{click:function(a){return e.onToggleLanguage(t)}}})]})],2)],1),e._v(" "),e.showPreLoading?n("iloading"):e._e()],1)},staticRenderFns:[]};var g=n("VU/8")(i,u,!1,function(e){n("pMlp")},null,null);a.default=g.exports},pMlp:function(e,a){}});
//# sourceMappingURL=206.c7adaf6a121c42690c77.js.map