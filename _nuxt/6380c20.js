(window.webpackJsonp=window.webpackJsonp||[]).push([[48,22,25,28,29,30],{507:function(t,e,n){"use strict";n.r(e);n(508);var l={name:"SvgPatternRect",props:{width:{type:Number,default:404},height:{type:Number,default:784}},computed:{viewBox:function(){return"0 0 "+this.width+" "+this.height}}},r=n(7),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{fill:"none",width:t.width,height:t.height,viewBox:t.viewBox}},[n("defs",[n("pattern",{attrs:{id:"f210dbf6-a58d-4871-961e-36d5016a0f49",x:"0",y:"0",width:"20",height:"20",patternUnits:"userSpaceOnUse"}},[n("rect",{staticClass:"text-gray-200",attrs:{x:"0",y:"0",width:"4",height:"4",fill:"currentColor"}})])]),t._v(" "),n("rect",{attrs:{width:t.width,height:t.height,fill:"url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"}})])}),[],!1,null,"4766f43b",null);e.default=component.exports},508:function(t,e,n){"use strict";var l=n(15),r=n(53),o=n(54),c=n(181),v=n(125),m=n(25),d=n(101).f,f=n(102).f,x=n(28).f,h=n(509).trim,_="Number",w=l.Number,C=w,k=w.prototype,y=o(n(126)(k))==_,A="trim"in String.prototype,N=function(t){var e=v(t,!1);if("string"==typeof e&&e.length>2){var n,l,r,o=(e=A?e.trim():h(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:l=2,r=49;break;case 79:case 111:l=8,r=55;break;default:return+e}for(var code,c=e.slice(2),i=0,m=c.length;i<m;i++)if((code=c.charCodeAt(i))<48||code>r)return NaN;return parseInt(c,l)}}return+e};if(!w(" 0o1")||!w("0b1")||w("+0x1")){w=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof w&&(y?m((function(){k.valueOf.call(n)})):o(n)!=_)?c(new C(N(e)),n,w):N(e)};for(var E,I=n(23)?d(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),j=0;I.length>j;j++)r(C,E=I[j])&&!r(w,E)&&x(w,E,f(C,E));w.prototype=k,k.constructor=w,n(32)(l,_,w)}},509:function(t,e,n){var l=n(11),r=n(67),o=n(25),c=n(510),v="["+c+"]",m=RegExp("^"+v+v+"*"),d=RegExp(v+v+"*$"),f=function(t,e,n){var r={},v=o((function(){return!!c[t]()||"​"!="​"[t]()})),m=r[t]=v?e(x):c[t];n&&(r[n]=m),l(l.P+l.F*v,"String",r)},x=f.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(m,"")),2&e&&(t=t.replace(d,"")),t};t.exports=f},510:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},511:function(t,e,n){"use strict";n.r(e);var l={name:"LayoutBgA",components:{SvgPatternRect:n(507).default},props:{theme:{type:String,default:"RL"}}},r=n(7),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative overflow-hidden"},[n("div",{staticClass:"hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"},[n("div",{staticClass:"relative h-full max-w-screen-xl mx-auto"},["RL"===t.theme?[n("svg-pattern-rect",{staticClass:"absolute bottom-0 left-full transform -translate-y-40 -translate-x-1/4 lg:-translate-x-1/2",attrs:{width:394,height:786}}),t._v(" "),n("svg-pattern-rect",{staticClass:"absolute top-0 right-full transform translate-y-40 translate-x-1/4 lg:translate-x-1/2",attrs:{width:394,height:786}})]:"RLR"===t.theme?[n("svg-pattern-rect",{staticClass:"absolute top-12 left-full transform -translate-x-1/4 lg:-translate-x-1/2",attrs:{width:394,height:394}}),t._v(" "),n("svg-pattern-rect",{staticClass:"absolute top-1/2 right-full transform -translate-y-1/2 translate-x-1/4 lg:translate-x-1/2",attrs:{width:394,height:394}}),t._v(" "),n("svg-pattern-rect",{staticClass:"absolute bottom-12 left-full transform -translate-x-1/4 -translate-x-1/4 lg:-translate-x-1/2",attrs:{width:394,height:394}})]:"CORNER"===t.theme?[n("svg-pattern-rect",{staticClass:"absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4\n                                          lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4",attrs:{width:394,height:786}})]:"LEFT"===t.theme?[n("svg-pattern-rect",{staticClass:"absolute top-0 right-1/2 transform -translate-x-1/2 -translate-y-8",attrs:{width:640,height:2048}})]:"RIGHT"===t.theme?[n("svg-pattern-rect",{staticClass:"absolute top-0 left-1/2 transform translate-x-1/2 -translate-y-8",attrs:{width:640,height:2048}})]:t._e()],2)]),t._v(" "),n("div",{staticClass:"relative"},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SvgPatternRect:n(507).default})},563:function(t,e,n){"use strict";n.r(e);var l={name:"VokenMigrateHero"},r=n(7),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-indigo-800"},[n("div",{staticClass:"resp-wide border-t border-indigo-700 py-16 px-4 sm:py-24 sm:px-6 lg:px-8"},[n("div",{staticClass:"px-4"},[n("div",{staticClass:"max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-5xl"},[n("h1",{staticClass:"text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl"},[t._v("\n          Migrate\n        ")]),t._v(" "),n("p",{staticClass:"mt-6 sm:mt-10 text-xl text-indigo-300"},[t._v("\n          From Ethereum to Voken Blockchain\n        ")])])])])])}],!1,null,"447b7e02",null);e.default=component.exports},564:function(t,e,n){"use strict";n.r(e);var l={name:"VokenMigrateMain",components:{VueAvatar:n(179).a},data:function(){return{amount:""}},computed:{ether:function(){return this.$store.state.ether},vokenAccount:function(){return this.$store.state.voken.account}},methods:{migrate:function(){this.$toast.info("Coming soon...")}}},r=n(7),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("layout-bg-a",{staticClass:"py-24"},[n("div",{staticClass:"max-w-2xl mx-auto"},[n("div",{staticClass:"w-14 h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 mx-auto bg-white rounded-md shadow-md lg:shadow-lg"},["0"===t.vokenAccount.vokenInt?n("div",{staticClass:"h-full flex items-center justify-center text-2xl lg:text-3xl xl:text-4xl text-gray-300"},[n("fa",{attrs:{icon:["fas","seedling"]}})],1):n("vue-avatar",{attrs:{value:t.vokenAccount.vokenAddress}})],1),t._v(" "),n("div",{staticClass:"resp-mt font-mono text-cool-gray-700 text-center"},[n("div",{staticClass:"text-2xl md:text-3xl"},[t._v("\n        "+t._s(t.vokenAccount.balanceObj.d)),n("span",{directives:[{name:"show",rawName:"v-show",value:t.vokenAccount.balanceObj.f,expression:"vokenAccount.balanceObj.f"}],staticClass:"text-base md:text-2xl"},[t._v("."+t._s(t.vokenAccount.balanceObj.f))]),t._v(" "),n("span",{staticClass:"text-xl md:text-2xl"},[t._v("\n          VokenTB\n        ")])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.vokenAccount.balance>"0",expression:"vokenAccount.balance > '0'"}],staticClass:"mt-2"},[t.vokenAccount.balance===t.vokenAccount.vesting?n("span",{staticClass:"text-gray-400"},[t._v("\n          (vesting)\n        ")]):t.vokenAccount.balance===t.vokenAccount.available?n("span",{staticClass:"text-gray-400"},[t._v("\n          (all available)\n        ")]):n("span",{staticClass:"text-gray-500"},[t._v("\n          ("+t._s(t.vokenAccount.availableObj.d)),n("span",{directives:[{name:"show",rawName:"v-show",value:t.vokenAccount.availableObj.f,expression:"vokenAccount.availableObj.f"}],staticClass:"text-sm"},[t._v("."+t._s(t.vokenAccount.availableObj.f))]),t._v("\n            available)\n        ")])])]),t._v(" "),"0"===t.vokenAccount.balance?n("div",{staticClass:"resp-mt mx-auto max-w-md"},[n("a",{staticClass:"w-full btn btn-pink justify-center py-2 text-lg",attrs:{href:"https://get.voken.io/"}},[t._v("\n        Go to Early-Bird Sale\n      ")])]):"0"===t.vokenAccount.vokenInt?n("div",{staticClass:"resp-mt mx-auto max-w-md"},[n("nuxt-link",{staticClass:"w-full btn btn-pink justify-center py-2 text-lg",attrs:{to:t.localePath("/wallet/bind")}},[t._v("\n        Bind Your Voken Wallet Address\n      ")])],1):n("div",{staticClass:"resp-mt mx-auto max-w-md"},[n("div",{},[n("label",{attrs:{for:"migrate-amount"}},[t._v("\n          Migrate\n        ")]),t._v(" "),n("div",{staticClass:"relative mt-1"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],staticClass:"input-indigo w-full py-3 pl-4 pr-12 font-mono text-sm md:text-base",attrs:{type:"text",id:"migrate-amount",placeholder:"Maximum: "+t.vokenAccount.availableStr},domProps:{value:t.amount},on:{input:function(e){e.target.composing||(t.amount=e.target.value)}}}),t._v(" "),n("div",{staticClass:"absolute block inset-y-0 right-0 pr-4 flex items-center pointer-events-none"},[n("fa",{staticClass:"fa-error",attrs:{icon:["fas","times"]}}),t._v(" "),n("fa",{staticClass:"fa-success",attrs:{icon:["fas","check"]}}),t._v(" "),n("fa",{staticClass:"fa-warn",attrs:{icon:["fas","exclamation-triangle"]}})],1)])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.vokenAccount.vokenInt>"0",expression:"vokenAccount.vokenInt > '0'"}],staticClass:"mt-4 text-lg font-mono text-center text-cool-gray-700 break-all"},[t._v("\n        TO:\n        "),n("span",{staticClass:"font-bold"},[t._v("\n          "+t._s(t.vokenAccount.vokenAddress)+"\n        ")])]),t._v(" "),n("button",{staticClass:"mt-8 w-full btn btn-indigo justify-center py-2 text-lg",on:{click:t.migrate}},[t._v("\n        Coming Soon...\n      ")])])])])}),[],!1,null,"7e2becb2",null);e.default=component.exports;installComponents(component,{LayoutBgA:n(511).default})},565:function(t,e,n){"use strict";n.r(e);var l={name:"VokenMigrateFaq"},r=n(7),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"resp-wide py-16 px-4 sm:px-6 lg:py-20 lg:px-8"},[n("div",{staticClass:"lg:grid lg:grid-cols-3 lg:gap-8"},[n("div",[n("h2",{staticClass:"text-3xl font-extrabold text-gray-900"},[t._v("\n          Fusce elementum scelerisque pharetra.\n        ")]),t._v(" "),n("p",{staticClass:"mt-4 leading-7 text-lg text-gray-500"},[t._v("\n          Proin in neque sit amet sem dictum rutrum quis a tellus. Sed fringilla tellus a sapien tempus commodo.\n          Suspendisse maximus viverra est sit amet sollicitudin.\n        ")])]),t._v(" "),n("div",{staticClass:"mt-12 lg:mt-0 lg:col-span-2"},[n("dl",{staticClass:"space-y-12"},[n("div",[n("dt",{staticClass:"text-lg leading-6 font-medium text-gray-900"},[t._v("\n              Lorem ipsum dolor sit amet?\n            ")]),t._v(" "),n("dd",{staticClass:"mt-2 text-base text-gray-500"},[t._v("\n              Donec nulla magna, maximus id eleifend sed, molestie eu ligula. Etiam eget risus in ipsum fringilla\n              tempor. Nullam tincidunt tortor eget odio varius varius. Pellentesque eget tincidunt turpis. Maecenas\n              laoreet volutpat justo, eu maximus purus fringilla vel.\n            ")])]),t._v(" "),n("div",[n("dt",{staticClass:"text-lg leading-6 font-medium text-gray-900"},[t._v("\n              Nunc faucibus sem ut eros tempor fermentum?\n            ")]),t._v(" "),n("dd",{staticClass:"mt-2 text-base text-gray-500"},[n("p",[t._v("\n                In pulvinar congue suscipit. Integer id ipsum erat. Curabitur ac lacinia odio, quis volutpat nunc.\n                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec\n                sed diam in mauris lobortis congue. Aliquam interdum mi justo, quis dignissim ante suscipit in. Sed\n                fermentum leo ac sem mattis, vel finibus augue aliquet.\n              ")])])])])])])])])}],!1,null,"7697043e",null);e.default=component.exports},622:function(t,e,n){"use strict";n.r(e);var l={name:"voken-migrate",middleware:["web3","voken"],layout:"white"},r=n(7),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("voken-migrate-hero"),t._v(" "),n("voken-migrate-main"),t._v(" "),n("voken-migrate-faq",{staticClass:"bg-indigo-50"})],1)}),[],!1,null,"da907d26",null);e.default=component.exports;installComponents(component,{VokenMigrateHero:n(563).default,VokenMigrateMain:n(564).default,VokenMigrateFaq:n(565).default})}}]);