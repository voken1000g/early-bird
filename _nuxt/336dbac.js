(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{609:function(t,e,n){var content=n(620);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("e02dedda",content,!0,{sourceMap:!1})},619:function(t,e,n){"use strict";n(609)},620:function(t,e,n){var l=n(18)((function(i){return i[1]}));l.push([t.i,".to-migrate .number-f[data-v-6d67b381]{\n    font-size:1rem;\n    line-height:1.5rem;\n    --tw-text-opacity:1;\n    color:rgba(213, 245, 246, var(--tw-text-opacity))\n}",""]),t.exports=l},636:function(t,e,n){"use strict";n.r(e);var l={name:"voken-index",middleware:["web3","voken","vokenEarlyBirdSale","vokenResale"],head:function(){return{title:this.$t("nav.VokenTB")}},layout:"indigoRipple",computed:{voken:function(){return this.$store.state.voken},earlyBirdSale:function(){return this.$store.state.vokenEarlyBirdSale},v12Portal:function(){return this.$store.state.vokenResale.account.v1.balance>"0"||this.$store.state.vokenResale.account.v2.balance>"0"}}},o=(n(619),n(2)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"resp-wide resp-my"},[n("layout-voken-account",{staticClass:"px-2",attrs:{"show-value":!0}}),t._v(" "),n("div",{staticClass:"resp-mt max-w-xl mx-auto space-y-6"},[n("div",{staticClass:"bg-white shadow sm:rounded-lg"},[n("div",{staticClass:"px-4 py-5 sm:p-6"},[n("h3",{staticClass:"text-lg leading-6 font-bold text-cool-gray-700"},[t._v("\n          "+t._s(t.$t("voken.Early_Bird_Sale"))+"\n        ")]),t._v(" "),n("p",{staticClass:"mt-1 text-cool-gray-500"},[t._v("\n          "+t._s(t.$t("voken.dist.Early_Bird_Sale"))+"\n        ")]),t._v(" "),n("nuxt-link",{staticClass:"mt-4 w-full btn btn-pink justify-start py-4 px-8 space-x-4 sm:space-x-6",attrs:{to:t.localePath("/voken/early-bird")}},[n("div",{staticClass:"flex-shrink-0 h-8 w-8 text-3xl"},[n("fa",{attrs:{icon:["fas","gifts"]}})],1),t._v(" "),n("div",[n("div",{staticClass:"font-bold text-lg"},[n("fa",{attrs:{icon:["fas","dollar-sign"]}}),t._v(" "),n("number-obj",{attrs:{"value-obj":t.earlyBirdSale.usdPriceObj}}),t._v("\n              ~ $ 0.7\n            ")],1),t._v(" "),n("p",{staticClass:"mt-2 text-sm text-pink-200"},[t._v("\n              "+t._s(t.$t("voken.sale.In_process"))+"...\n            ")])])])],1)]),t._v(" "),n("div",{staticClass:"bg-white shadow sm:rounded-lg"},[n("div",{staticClass:"px-4 py-5 sm:p-6"},[n("h3",{staticClass:"text-lg leading-6 font-bold text-cool-gray-700"},[t._v("\n          "+t._s(t.$t("voken.Public_Sale"))+"\n        ")]),t._v(" "),n("p",{staticClass:"mt-1 text-cool-gray-500"},[t._v("\n          "+t._s(t.$t("voken.dist.Public_Sale"))+"\n        ")]),t._v(" "),n("nuxt-link",{staticClass:"mt-4 w-full btn btn-gray justify-start py-4 px-8 space-x-4 sm:space-x-6 cursor-pointer select-none",attrs:{to:t.localePath("/voken/public-sale")}},[n("div",{staticClass:"flex-shrink-0 h-8 w-8 text-3xl"},[n("fa",{attrs:{icon:["fas","cash-register"]}})],1),t._v(" "),n("div",[n("div",{staticClass:"font-bold text-lg"},[n("fa",{attrs:{icon:["fas","dollar-sign"]}}),t._v("\n              1.5+\n            ")],1),t._v(" "),n("p",{staticClass:"mt-2 text-sm text-gray-200"},[t._v("\n              "+t._s(t.$t("voken.sale.Not_Started__planning__"))+"\n            ")])])])],1)]),t._v(" "),n("div",{staticClass:"bg-white shadow sm:rounded-lg"},[n("div",{staticClass:"px-4 py-5 sm:p-6"},[n("h3",{staticClass:"text-lg leading-6 font-bold text-cool-gray-700"},[t._v("\n          "+t._s(t.$t("voken.uniswap.UniSwap"))+"\n        ")]),t._v(" "),n("nuxt-link",{staticClass:"mt-4 w-full btn btn-purple justify-start py-4 px-8 space-x-4 sm:space-x-6 cursor-pointer select-none",attrs:{to:t.localePath("/voken/uniswap")}},[n("div",{staticClass:"flex-shrink-0 h-8 w-8 text-3xl"},[n("fa",{attrs:{icon:["fas","random"]}})],1),t._v(" "),n("div",[n("div",{staticClass:"font-bold text-lg"},[n("fa",{attrs:{icon:["fas","dollar-sign"]}}),t._v("\n              "+t._s(t.voken.usdPriceStr)+"\n            ")],1),t._v(" "),n("p",{staticClass:"mt-2 text-sm text-purple-200"},[t._v("\n              "+t._s(t.$t("voken.uniswap.UniSwap_DEX__"))+"\n            ")])])])],1)]),t._v(" "),n("div",{staticClass:"to-migrate bg-white shadow sm:rounded-lg"},[n("div",{staticClass:"px-4 py-5 sm:p-6"},[n("h3",{staticClass:"text-lg leading-6 font-bold text-cool-gray-700"},[t._v("\n          "+t._s(t.$t("voken.migrate.Migrate_to_Voken_Blockchain"))+"\n        ")]),t._v(" "),n("nuxt-link",{staticClass:"mt-4 w-full btn btn-teal justify-start py-4 px-8 space-x-4 sm:space-x-6 cursor-pointer select-none",attrs:{to:t.localePath("/voken/migrate")}},[n("div",{staticClass:"flex-shrink-0 h-8 w-8 text-3xl"},[n("fa",{attrs:{icon:["fas","glass-cheers"]}})],1),t._v(" "),n("div",[n("div",{staticClass:"font-bold text-lg"},[n("number-obj",{attrs:{"value-obj":t.voken.account.balanceObj}}),t._v("\n              VokenTB\n            ")],1),t._v(" "),n("p",{staticClass:"mt-2 text-sm text-teal-200"},[t._v("\n              "+t._s(t.$t("voken.migrate.From_Ethereum_to_Voken_Blockchain"))+"\n            ")])])])],1)]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.v12Portal,expression:"v12Portal"}],staticClass:"bg-white shadow sm:rounded-lg"},[n("div",{staticClass:"px-4 py-5 sm:p-6"},[n("h3",{staticClass:"text-lg leading-6 font-bold text-cool-gray-700"},[t._v("\n          "+t._s(t.$t("v12.Resale_or_Upgrade"))+"\n        ")]),t._v(" "),n("nuxt-link",{staticClass:"mt-4 w-full btn btn-yellow justify-start py-4 px-8 space-x-4 sm:space-x-6 cursor-pointer select-none",attrs:{to:t.localePath("/voken/v12")}},[n("div",{staticClass:"flex-shrink-0 h-8 w-8 text-3xl"},[n("fa",{attrs:{icon:["fas","bell"]}})],1),t._v(" "),n("div",[n("div",{staticClass:"font-bold text-lg"},[t._v("\n              Voken1.0/2.0 "+t._s(t.$t("v12.Portal"))+"\n            ")]),t._v(" "),n("p",{staticClass:"mt-2 text-sm text-yellow-100"},[t._v("\n              "+t._s(t.$t("v12.Resale__Program_for__"))+"\n            ")])])])],1)])])],1)}),[],!1,null,"6d67b381",null);e.default=component.exports;installComponents(component,{LayoutVokenAccount:n(112).default,NumberObj:n(47).default})}}]);