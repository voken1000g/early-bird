(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{430:function(t,e,n){"use strict";n.r(e);var o={name:"LayoutForMobi"},r=n(12),component=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"max-w-lg mx-auto px-2 md:px-0"},[this._t("default")],2)}),[],!1,null,"7a31fdbd",null);e.default=component.exports},449:function(t,e,n){var content=n(469);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("f141752c",content,!0,{sourceMap:!1})},468:function(t,e,n){"use strict";n(449)},469:function(t,e,n){(e=n(31)(!1)).push([t.i,"a[data-v-b0e0e8c6],button[data-v-b0e0e8c6]{margin-top:3.5rem;width:auto;display:inline-flex;align-items:center;justify-content:center;padding:.75rem 1.25rem;border-width:1px;border-color:transparent;font-size:1rem;font-weight:500;border-radius:.375rem;--text-opacity:1;color:#5850ec;color:rgba(88,80,236,var(--text-opacity));--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity))}a[data-v-b0e0e8c6]:hover,button[data-v-b0e0e8c6]:hover{--bg-opacity:1;background-color:#f0f5ff;background-color:rgba(240,245,255,var(--bg-opacity))}",""]),t.exports=e},547:function(t,e,n){"use strict";n.r(e);n(18);var o=n(3),r=n(439),c=n.n(r),l=n(448),d={name:"no-web3",components:{LayoutForMobi:n(430).default,VueQr:c.a},middleware:["connect"],data:function(){return{locationHref:location.href}},methods:{getMetaMask:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(new l.a).startOnboarding();case 2:case"end":return t.stop()}}),t)})))()},connectToWallet:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("CONNECT_WEB3");case 2:case"end":return e.stop()}}),e)})))()}}},f=(n(468),n(12)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("layout-for-mobi",{staticClass:"pb-12 px-2"},[n("div",{staticClass:"py-20 px-6 bg-gradient-to-br from-green-500 to-indigo-600 text-center"},[n("h2",{staticClass:"text-4xl font-extrabold text-white"},[t._v("\n      Connect to wallet\n    ")]),t._v(" "),n("p",{staticClass:"mt-4 text-lg leading-8 text-indigo-200"},[t._v("\n      Please scan the QR-Code with your imToken APP\n      or connect to your MetaMask wallet.\n    ")]),t._v(" "),n("div",{staticClass:"mt-14 flex items-center justify-center"},[n("div",{staticClass:"w-1/2"},[n("vue-qr",{staticClass:"border-teal-300 border",attrs:{text:t.locationHref,size:640,margin:32,colorDark:"#2F855A"}})],1)]),t._v(" "),t.$store.state.web3Ready?t._e():n("button",{on:{click:t.getMetaMask}},[t._v("\n      Get MetaMask\n    ")]),t._v(" "),t.$store.state.web3Ready&&!t.$store.state.account?n("button",{on:{click:t.connectToWallet}},[t._v("\n      Connect to wallet\n    ")]):t._e(),t._v(" "),t.$store.state.account?n("nuxt-link",{attrs:{to:t.localePath("/")}},[t._v("\n      Back to Home-Page\n    ")]):t._e()],1)])}),[],!1,null,"b0e0e8c6",null);e.default=component.exports;installComponents(component,{LayoutForMobi:n(430).default})}}]);