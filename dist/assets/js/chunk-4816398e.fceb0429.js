(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4816398e"],{"00b1":function(t,e,n){},"0ae6":function(t,e,n){},1341:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Header_1"},[n("el-container",[n("el-header",{staticStyle:{height:"100px"}},[n("div",{staticClass:"header_logo"}),n("el-menu",{staticClass:"el-menu-demo",attrs:{mode:"horizontal",router:t.router,"default-active":t.$route.path},on:{select:t.handleSelect}},[n("el-menu-item",{attrs:{index:"/"}},[t._v("首页")]),n("el-menu-item",{attrs:{index:"/product"}},[t._v("产品服务")]),n("el-menu-item",{attrs:{index:"/news"}},[t._v("新闻资讯")]),n("el-menu-item",{attrs:{index:"/case"}},[t._v("合作案例")]),n("el-menu-item",{attrs:{index:"/Company"}},[t._v("公司简介")]),n("el-menu-item",{attrs:{index:"/goin"}},[t._v("联系我们")])],1)],1),n("el-main",[n("router-view")],1)],1)],1)},a=[],r={name:"HomeHeader",data:function(){return{router:!0}},methods:{handleSelect:function(t,e){this.isShow=this.defaultActive!=t,window.console.log(this.isShow),window.console.log(e),this.defaultActive=t}}},i=r,o=(n("13ee"),n("2877")),c=Object(o["a"])(i,s,a,!1,null,"82f96cc6",null);e["default"]=c.exports},"13ee":function(t,e,n){"use strict";var s=n("56a3"),a=n.n(s);a.a},"14b6":function(t,e,n){"use strict";var s=n("00b1"),a=n.n(s);a.a},"1dde":function(t,e,n){var s=n("d039"),a=n("b622"),r=n("2d00"),i=a("species");t.exports=function(t){return r>=51||!s((function(){var e=[],n=e.constructor={};return n[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},2379:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("news-header"),n("banner"),n("newsdetails"),n("news-travel-to"),n("news-footer")],1)},a=[],r=n("1341"),i=n("ada7"),o=n("7479"),c=n("61d1"),u=n("e00f"),l={data:function(){return{}},components:{NewsHeader:r["default"],banner:i["default"],newsdetails:o["default"],NewsTravelTo:c["default"],NewsFooter:u["default"]}},d=l,f=n("2877"),v=Object(f["a"])(d,s,a,!1,null,"bd402dbe",null);e["default"]=v.exports},3037:function(t,e,n){"use strict";var s=n("a1be"),a=n.n(s);a.a},"4de4":function(t,e,n){"use strict";var s=n("23e7"),a=n("b727").filter,r=n("1dde"),i=n("ae40"),o=r("filter"),c=i("filter");s({target:"Array",proto:!0,forced:!o||!c},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},"56a3":function(t,e,n){},"61d1":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"travel_wrap"},[t._m(0),n("div",{staticClass:"travel_to"},[n("span",[n("a",{on:{click:t.to}},[t._v("立即前往")])])])])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"travel_service"},[n("span",[t._v("寻找最适合的专属产品服务")])])}],r={data:function(){return{}},components:{},methods:{to:function(){this.$router.push({name:"Product"})}}},i=r,o=(n("686e"),n("2877")),c=Object(o["a"])(i,s,a,!1,null,"1681cc50",null);e["default"]=c.exports},"65f0":function(t,e,n){var s=n("861d"),a=n("e8b5"),r=n("b622"),i=r("species");t.exports=function(t,e){var n;return a(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!a(n.prototype)?s(n)&&(n=n[i],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"686e":function(t,e,n){"use strict";var s=n("97b9"),a=n.n(s);a.a},7479:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"NewsDetails"},[n("div",{staticClass:"NewsDetails-product"},[n("div",{staticClass:"NewsDetails-product-head"},[n("span",{staticClass:"details"},[t._v("新闻资讯 > 详情")]),n("el-button",{on:{click:t.showFn}},[t._v("返回")])],1),n("div",{staticClass:"NewsDetails-product-content"},[n("p",{staticClass:"product-title"},[t._v(t._s(t.newsIditem.title))]),n("p",{staticClass:"product-time"},[t._v(t._s(t.newsIditem.date))]),n("p",{staticClass:"product-content"},[t._v(t._s(t.newsIditem.content))])])])])])},a=[],r=(n("4de4"),{name:"Details",components:{},data:function(){return{pid:"00001"}},computed:{newsIditem:function(){var t=this.$store.state.newsList?this.$store.state.newsList:[],e=this.$route.params.id?this.$route.params.id:this.pid,n=t.filter((function(t){return t.id===e}));return n[0]}},created:function(){},mounted:function(){},methods:{showFn:function(){this.$router.go(-1)}}}),i=r,o=(n("14b6"),n("2877")),c=Object(o["a"])(i,s,a,!1,null,"7e867070",null);e["default"]=c.exports},"94c4":function(t,e,n){"use strict";var s=n("0ae6"),a=n.n(s);a.a},"97b9":function(t,e,n){},a1be:function(t,e,n){},ada7:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"banner_wrap"})])}],r={data:function(){return{}},components:{}},i=r,o=(n("3037"),n("2877")),c=Object(o["a"])(i,s,a,!1,null,"ba0ee63e",null);e["default"]=c.exports},ae40:function(t,e,n){var s=n("83ab"),a=n("d039"),r=n("5135"),i=Object.defineProperty,o={},c=function(t){throw t};t.exports=function(t,e){if(r(o,t))return o[t];e||(e={});var n=[][t],u=!!r(e,"ACCESSORS")&&e.ACCESSORS,l=r(e,0)?e[0]:c,d=r(e,1)?e[1]:void 0;return o[t]=!!n&&!a((function(){if(u&&!s)return!0;var t={length:-1};u?i(t,1,{enumerable:!0,get:c}):t[1]=1,n.call(t,l,d)}))}},b727:function(t,e,n){var s=n("0366"),a=n("44ad"),r=n("7b0b"),i=n("50c4"),o=n("65f0"),c=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,l=4==t,d=6==t,f=5==t||d;return function(v,p,_,m){for(var h,b,w=r(v),C=a(w),g=s(p,_,3),x=i(C.length),$=0,y=m||o,E=e?y(v,x):n?y(v,0):void 0;x>$;$++)if((f||$ in C)&&(h=C[$],b=g(h,$,w),t))if(e)E[$]=b;else if(b)switch(t){case 3:return!0;case 5:return h;case 6:return $;case 2:c.call(E,h)}else if(l)return!1;return d?-1:u||l?l:E}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},db67:function(t,e,n){t.exports=n.p+"assets/img/home_public.916c7f7e.png"},ddb7:function(t,e,n){t.exports=n.p+"assets/img/home_wechat.b15db23d.png"},e00f:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"footer"},[s("div",{staticClass:"footer-content"},[s("ul",{staticClass:"content-nav"},[s("li",[s("p",[t._v("服务")]),s("span",[t._v("多平台多账号广告投放")]),s("span",[t._v("Google搜索排名")]),s("span",[t._v("国外搜索引擎优化")]),s("span",[t._v("国际行业网站推广")]),s("span",[t._v("企业外贸网站建设服务")]),s("span",[t._v("企业商务微站")])]),s("li",[s("p"),s("br"),s("span",[t._v("商业视频录制")]),s("span",[t._v("海关数据")]),s("span",[t._v("企业邮箱服务")]),s("span",[t._v("全国采购商名录")]),s("span",[t._v("询盘对接推送转化")]),s("span",[t._v("代理货代服务")])]),s("li",[s("p"),s("br"),s("span",[t._v("海陆空多项目翻译业务")]),s("span",[t._v("海外社交平台代运营")]),s("span",[t._v("行业展会分享推广")]),s("span",[t._v("功能模块")])]),s("li",[s("p",[t._v("联系我们")]),s("span",[t._v("电话：18067519330")]),s("span",[t._v("电话：400-0574-966")]),s("span",[t._v("地址: 宁波市鄞州区南部商务区")]),s("span",[t._v("地址:海运大厦6楼")]),s("span",[t._v("邮箱: sales3@yishun2d.com")])])]),s("div",{staticClass:"public"},[s("img",{attrs:{src:n("db67"),alt:""}}),s("span",[t._v("公众号")])]),s("div",{staticClass:"wechat"},[s("img",{staticClass:"img_public",attrs:{src:n("ddb7"),alt:""}}),s("span",[t._v("微信")])])]),s("div",{staticClass:"straightline",staticStyle:{border:"1px solid #979797"}}),s("div",{staticClass:"copyright"},[s("span",[t._v("© 2019 宁波一顺二维文化传媒有限公司 - All Rights Reserved")])])])}],r={name:"HomeFooter",data:function(){return{}},components:{}},i=r,o=(n("94c4"),n("2877")),c=Object(o["a"])(i,s,a,!1,null,"3e2b6817",null);e["default"]=c.exports},e8b5:function(t,e,n){var s=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==s(t)}}}]);