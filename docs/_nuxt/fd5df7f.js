(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{159:function(e,t,n){"use strict";var r=n(6),o=n.n(r),y=function(address){return"0x0000000000000000000000000000000000000000"===address},d={chainNameFromId:function(e){switch(e){case 1:return"MainNet";case 3:return"Ropsten";case 4:return"Rinkeby";case 5:return"Goerli";case 42:return"Kovan";default:return"Unknown"}},simplifyAddress:function(address){return address?address.slice(0,6)+"..."+address.slice(38):null},isNotAddress:function(address){return y(address)||!window.web3.utils.isAddress(address)},isZeroAddress:y,amountDisplay:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=new o.a(e).div(Math.pow(10,t));return n>0?r.toFixed(n):r}};t.a=d},244:function(e,t,n){"use strict";t.a=[{code:"en",iso:"en-US",file:"en-US.js",title:"English"},{code:"zh",iso:"zh-CN",file:"zh-CN.js",title:"简体中文"}]},246:function(e){e.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"AgentAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"AgentRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"BankAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"BankRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Donate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"MinterAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"MinterRemoved","type":"event"},{"anonymous":false,"inputs":[],"name":"PausedOFF","type":"event"},{"anonymous":false,"inputs":[],"name":"PausedON","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"ProxyAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"ProxyRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"referrerAccount","type":"address"}],"name":"ReferrerSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint160","name":"voken","type":"uint160"}],"name":"VokenAddressSet","type":"event"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addAgent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addBank","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addProxy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"address2voken","outputs":[{"internalType":"uint160","name":"","type":"uint160"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"availableOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"burningPermille","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"burningPermilleBorder","outputs":[{"internalType":"uint16","name":"min","type":"uint16"},{"internalType":"uint16","name":"max","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isAgent","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isBank","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isChangeVokenAddressAllowed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isMinter","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isProxy","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"vestingContract","type":"address"}],"name":"mintWithVesting","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"referrer","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"removeAgent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"removeBank","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"removeMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"removeProxy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddr","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"rescueToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"min","type":"uint16"},{"internalType":"uint16","name":"max","type":"uint16"}],"name":"setBurningBorder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"value","type":"bool"}],"name":"setChangeVokenAddressAllowed","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"value","type":"string"}],"name":"setName","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"value","type":"bool"}],"name":"setPaused","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint160","name":"referrerVoken","type":"uint160"}],"name":"setReferrer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"value","type":"string"}],"name":"setSymbol","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint160","name":"voken","type":"uint160"}],"name":"setVokenAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"vestingContracts","outputs":[{"internalType":"contract IVesting[]","name":"contracts","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"vestingOf","outputs":[{"internalType":"uint256","name":"reserved","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint160","name":"voken","type":"uint160"}],"name":"voken2address","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vokenCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawEther","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]')},247:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addAgent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"AgentAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"AgentRemoved","type":"event"},{"anonymous":false,"inputs":[],"name":"PausedOFF","type":"event"},{"anonymous":false,"inputs":[],"name":"PausedON","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"etherUsdPrice","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"weiPayment","type":"uint256"}],"name":"Payment","type":"event"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"removeAgent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddr","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"rescueToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":false,"internalType":"uint8","name":"level","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"weiReward","type":"uint256"}],"name":"Reward","type":"event"},{"inputs":[{"internalType":"address","name":"bonusesVestingPermilleContract","type":"address"}],"name":"setBRPC","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"defaultEtherUSDPrice","type":"uint256"}],"name":"setDefaultUSDPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"etherUSDPriceContract","type":"address"}],"name":"setEtherUSDPriceContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"issuedVestingPermilleContract","type":"address"}],"name":"setIRPC","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"value","type":"bool"}],"name":"setPaused","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"account","type":"address"},{"internalType":"uint16","name":"permille","type":"uint16"}],"name":"setResaleFund","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable[8]","name":"accounts","type":"address[8]"}],"name":"setTeamFunds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawEther","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getAccountStatus","outputs":[{"internalType":"uint256","name":"issued","type":"uint256"},{"internalType":"uint256","name":"bonuses","type":"uint256"},{"internalType":"uint256","name":"volume","type":"uint256"},{"internalType":"uint256","name":"etherBalance","type":"uint256"},{"internalType":"uint256","name":"vokenBalance","type":"uint256"},{"internalType":"uint160","name":"voken","type":"uint160"},{"internalType":"address","name":"referrer","type":"address"},{"internalType":"uint160","name":"referrerVoken","type":"uint160"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getResaleFund","outputs":[{"internalType":"address payable","name":"account","type":"address"},{"internalType":"uint16","name":"permille","type":"uint16"},{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isAgent","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"status","outputs":[{"internalType":"uint256","name":"vokenCap","type":"uint256"},{"internalType":"uint256","name":"vokenTotalSupply","type":"uint256"},{"internalType":"uint256","name":"vokenIssued","type":"uint256"},{"internalType":"uint256","name":"vokenBonuses","type":"uint256"},{"internalType":"uint256","name":"etherUSD","type":"uint256"},{"internalType":"uint256","name":"vokenUSD","type":"uint256"},{"internalType":"uint256","name":"weiMin","type":"uint256"},{"internalType":"uint256","name":"weiMax","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"vestingOf","outputs":[{"internalType":"uint256","name":"Vesting","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"VestingPermilleContracts","outputs":[{"internalType":"contract IPermille","name":"issuedVestingPermilleContract","type":"address"},{"internalType":"contract IPermille","name":"bonusesVestingPermilleContract","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vokenUSDPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]')},402:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return r})),n.d(t,"mutations",(function(){return o})),n.d(t,"actions",(function(){return y}));var r=function(){return{menuMobile:!1,languageMenu:!1,flyoutWallet:!1}},o={SET_MENU_MOBILE:function(e,t){e.menuMobile=t},SET_LANGUAGE_MENU:function(e,t){e.languageMenu=t},SET_FLYOUT_WALLET:function(e,t){e.flyoutWallet=t}},y={TOGGLE_MENU_MOBILE:function(e){(0,e.commit)("SET_MENU_MOBILE",!e.state.menuMobile)},TOGGLE_LANGUAGE_MENU:function(e){(0,e.commit)("SET_LANGUAGE_MENU",!e.state.languageMenu)},TOGGLE_FLYOUT_WALLET:function(e){(0,e.commit)("SET_FLYOUT_WALLET",!e.state.flyoutWallet)},HIDE_ALL:function(e){var t=e.commit;e.state;t("SET_MENU_MOBILE",!1),t("SET_LANGUAGE_MENU",!1),t("SET_FLYOUT_WALLET",!1)}}},412:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return h})),n.d(t,"mutations",(function(){return A})),n.d(t,"actions",(function(){return k}));n(17);var r=n(3),o=n(6),y=n.n(o),d=n(245),l=n.n(d),c=n(108),m=n(109),T=n(73),f=n.n(T),v=n(246),w=n(247),M=function(){function e(t,n){Object(c.a)(this,e),this._state=t,this._commit=n}var t,n,o,d,l;return Object(m.a)(e,[{key:"getChainId",value:(l=Object(r.a)(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.web3.eth.getChainId().then((function(e){t._commit("SET_CHAIN_ID",e)}));case 2:case"end":return e.stop()}}),e)}))),function(){return l.apply(this,arguments)})},{key:"setContracts",value:(d=Object(r.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=window.web3.eth.Contract,this._commit("SET_VOKEN_TB_CONTRACT",new t(v,this._state.vokenTbContractAddress)),this._commit("SET_EARLY_BIRD_CONTRACT",new t(w,this._state.earlyBirdContractAddress));case 3:case"end":return e.stop()}}),e,this)}))),function(){return d.apply(this,arguments)})},{key:"getStatus",value:(o=Object(r.a)(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._state.earlyBirdContract().methods.status().call().then((function(e){var n={vokenCap:new y.a(e.vokenCap),vokenTotalSupply:new y.a(e.vokenTotalSupply),vokenIssued:new y.a(e.vokenIssued),vokenBonuses:new y.a(e.vokenBonuses),etherUSDPrice:new y.a(e.etherUSD),vokenUSDPrice:new y.a(e.vokenUSD),weiMin:new y.a(e.weiMin),weiMax:new y.a(e.weiMax)};t._commit("SET_STATUS",n)})).catch((function(e){console.error("::: [dApp] status",e)}));case 2:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)})},{key:"getAccountStatus",value:(n=Object(r.a)(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._state.earlyBirdContract().methods.getAccountStatus(this._state.account).call().then((function(e){var n={issued:new y.a(e.issued),bonuses:new y.a(e.bonuses),volume:new y.a(e.volume),etherBalance:new y.a(e.etherBalance),vokenBalance:new y.a(e.vokenBalance),voken:new y.a(e.voken),vokenAddress:f.a.fromBN(e.voken),referrer:e.referrer,referrerVoken:new y.a(e.referrerVoken)};t._commit("SET_ACCOUNT_STATUS",n)})).catch((function(e){console.error("::: [dApp] account status",e)}));case 2:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"getVInt2Address",value:(t=Object(r.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._state.vokenTbContract().methods.vint2address(t).call().then((function(address){return console.log("address:",address),address})).catch((function(e){console.error("::: [dApp] account status",e)}));case 2:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})}]),e}(),h=function(){return{web3Ready:void 0!==window.ethereum,chainId:null,isMainNet:null,account:null,blockNumber:0,status:{vokenCap:new y.a(0),vokenTotalSupply:new y.a(0),vokenIssued:new y.a(0),vokenBonuses:new y.a(0),etherUSDPrice:new y.a(0),vokenUSDPrice:new y.a(0),weiMin:new y.a(1e17),weiMax:new y.a(1e18)},accountStatus:{issued:new y.a(0),bonuses:new y.a(0),volume:new y.a(0),etherBalance:new y.a(0),vokenBalance:new y.a(0),voken:new y.a(0),vokenAddress:null,referrer:null,referrerVoken:new y.a(0)},accountPayment:{txHash:null,blockNumber:0,etherUSDPrice:new y.a(0),weiPayment:new y.a(0)},swap:{referralAddressToVInt:"0",vIntToReferrer:""},vokenTbContract:null,vokenTbContractAddress:"0x1234567a022acaa848E7D6bC351d075dBfa76Dd4",earlyBirdContract:null,earlyBirdContractAddress:"0x1aaaa06374970dE748130EaccCdd2d0348E834c4",dApp:null,notForTheAddress:!1}},A={SET_CHAIN_ID:function(e,t){e.chainId=t,e.isMainNet=1===t},SET_ACCOUNT:function(e,t){e.account=Web3.utils.toChecksumAddress(t)},SYNC_BLOCK_NUMBER:function(e,t){e.blockNumber=t},SET_DAPP:function(e,t){e.dApp=t},SET_VOKEN_TB_CONTRACT:function(e,t){e.vokenTbContract=function(){return t}},SET_EARLY_BIRD_CONTRACT:function(e,t){e.earlyBirdContract=function(){return t}},SET_STATUS:function(e,t){e.status=t},SET_ACCOUNT_STATUS:function(e,t){e.accountStatus=t},SET_ACCOUNT_PAYMENT:function(e,t){e.accountPayment=t}},k={CONNECT_WEB3:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,y;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.commit,o=e.state,n.next=3,l()();case 3:if(!(y=n.sent)){n.next=11;break}return ethereum.autoRefreshOnNetworkChange=!1,window.web3=new Web3(window.ethereum),n.next=9,y.request({method:"eth_requestAccounts"}).then((function(e){r("SET_ACCOUNT",e[0]),r("SET_DAPP",new M(o,r))})).catch((function(e){t.$toast.error(e.message)}));case 9:n.next=12;break;case 11:t.$toast.error("Cannot find any web3 provider");case 12:case"end":return n.stop()}}),n)})))()},SYNC_CHAIN_ID:function(e,t){return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:(0,e.commit)("SET_CHAIN_ID",parseInt(t));case 2:case"end":return n.stop()}}),n)})))()},SYNC_ACCOUNT:function(e,t){return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:(0,e.commit)("SET_ACCOUNT",t);case 2:case"end":return n.stop()}}),n)})))()},SYNC_BLOCK_NUMBER:function(e,t){return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:(0,e.commit)("SYNC_BLOCK_NUMBER",t);case 2:case"end":return n.stop()}}),n)})))()},SYNC_ACCOUNT_PAYMENT:function(e,t){return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:(0,e.commit)("SET_ACCOUNT_PAYMENT",t);case 2:case"end":return n.stop()}}),n)})))()}}}},[[413,22,15,16,11,10,12,14]]]);