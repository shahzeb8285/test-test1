(this["webpackJsonpgoose-frontend"]=this["webpackJsonpgoose-frontend"]||[]).push([[16],{669:function(n,t,e){"use strict";e.d(t,"a",(function(){return s})),e.d(t,"k",(function(){return f})),e.d(t,"f",(function(){return b})),e.d(t,"g",(function(){return j})),e.d(t,"l",(function(){return p})),e.d(t,"h",(function(){return d})),e.d(t,"e",(function(){return l})),e.d(t,"c",(function(){return O})),e.d(t,"d",(function(){return h})),e.d(t,"i",(function(){return m})),e.d(t,"j",(function(){return x})),e.d(t,"b",(function(){return g}));var r=e(4),c=e.n(r),a=e(15),i=e(14),u=e.n(i),o=e(676),s=function(){var n=Object(a.a)(c.a.mark((function n(t,e,r){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t.methods.approve(e.options.address,o.ethers.constants.MaxUint256).send({from:r}));case 1:case"end":return n.stop()}}),n)})));return function(t,e,r){return n.apply(this,arguments)}}(),f=function(){var n=Object(a.a)(c.a.mark((function n(t,e,r,a){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t.methods.deposit(e,new u.a(r).times(new u.a(10).pow(18)).toString()).send({from:a}).on("transactionHash",(function(n){return n.transactionHash})));case 1:case"end":return n.stop()}}),n)})));return function(t,e,r,c){return n.apply(this,arguments)}}(),b=function(){var n=Object(a.a)(c.a.mark((function n(t,e,r){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t.methods.deposit(new u.a(e).times(new u.a(10).pow(18)).toString()).send({from:r}).on("transactionHash",(function(n){return n.transactionHash})));case 1:case"end":return n.stop()}}),n)})));return function(t,e,r){return n.apply(this,arguments)}}(),j=function(){var n=Object(a.a)(c.a.mark((function n(t,e,r){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t.methods.deposit().send({from:r,value:new u.a(e).times(new u.a(10).pow(18)).toString()}).on("transactionHash",(function(n){return n.transactionHash})));case 1:case"end":return n.stop()}}),n)})));return function(t,e,r){return n.apply(this,arguments)}}(),p=function(){var n=Object(a.a)(c.a.mark((function n(t,e,r,a){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t.methods.withdraw(e,new u.a(r).times(new u.a(10).pow(18)).toString()).send({from:a}).on("transactionHash",(function(n){return n.transactionHash})));case 1:case"end":return n.stop()}}),n)})));return function(t,e,r,c){return n.apply(this,arguments)}}(),d=function(){var n=Object(a.a)(c.a.mark((function n(t,e,r){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("0x3B9B74f48E89Ebd8b45a53444327013a2308A9BC"!==t.options.address){n.next=2;break}return n.abrupt("return",t.methods.emergencyWithdraw().send({from:r}).on("transactionHash",(function(n){return n.transactionHash})));case 2:if("0xBb2B66a2c7C2fFFB06EA60BeaD69741b3f5BF831"!==t.options.address){n.next=4;break}return n.abrupt("return",t.methods.emergencyWithdraw().send({from:r}).on("transactionHash",(function(n){return n.transactionHash})));case 4:return n.abrupt("return",t.methods.withdraw(new u.a(e).times(new u.a(10).pow(18)).toString()).send({from:r}).on("transactionHash",(function(n){return n.transactionHash})));case 5:case"end":return n.stop()}}),n)})));return function(t,e,r){return n.apply(this,arguments)}}(),l=function(){var n=Object(a.a)(c.a.mark((function n(t,e,r){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t.methods.emergencyWithdraw().send({from:r}).on("transactionHash",(function(n){return n.transactionHash})));case 1:case"end":return n.stop()}}),n)})));return function(t,e,r){return n.apply(this,arguments)}}(),O=function(){var n=Object(a.a)(c.a.mark((function n(t,e,r){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t.methods.deposit(e,"0").send({from:r}).on("transactionHash",(function(n){return n.transactionHash})));case 1:case"end":return n.stop()}}),n)})));return function(t,e,r){return n.apply(this,arguments)}}(),h=function(){var n=Object(a.a)(c.a.mark((function n(t,e,r){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t.methods.participate(new u.a(e).times(new u.a(10).pow(18)).toString()).send({from:r,gasPrice:"7000000000"}).on("transactionHash",(function(n){return n})));case 1:case"end":return n.stop()}}),n)})));return function(t,e,r){return n.apply(this,arguments)}}(),m=function(){var n=Object(a.a)(c.a.mark((function n(t,e){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t.methods.deposit("0").send({from:e}).on("transactionHash",(function(n){return n.transactionHash})));case 1:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),x=function(){var n=Object(a.a)(c.a.mark((function n(t,e){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t.methods.deposit().send({from:e,value:new u.a(0)}).on("transactionHash",(function(n){return n.transactionHash})));case 1:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),g=function(){var n=Object(a.a)(c.a.mark((function n(t,e){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t.methods.claimReward().send({from:e}).on("transactionHash",(function(n){return n})));case 1:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}()},672:function(n,t,e){"use strict";var r=e(16),c=e(12),a=(e(0),e(38)),i=e(65),u=e(170);t.a=function(n){var t=Object(u.a)(),e=Object(i.m)(),o=e.connect,s=e.reset,f=Object(a.M)(o,s).onPresentConnectModal;return Object(c.jsx)(a.d,Object(r.a)(Object(r.a)({onClick:f},n),{},{children:Object(c.jsx)(a.E,{color:"black",children:t(292,"Unlock Wallet")})}))}},673:function(n,t,e){"use strict";e.d(t,"c",(function(){return O})),e.d(t,"b",(function(){return h}));var r=e(4),c=e.n(r),a=e(15),i=e(20),u=e(0),o=e(14),s=e.n(o),f=e(65),b=e(180),j=e(76),p=e(678),d=e(37),l=e(127),O=function(){var n=Object(l.a)().slowRefresh,t=Object(u.useState)(),e=Object(i.a)(t,2),r=e[0],o=e[1];return Object(u.useEffect)((function(){function n(){return(n=Object(a.a)(c.a.mark((function n(){var t,e;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=Object(j.a)(b,Object(d.a)()),n.next=3,t.methods.totalSupply().call();case 3:e=n.sent,o(new s.a(e));case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[n]),r},h=function(n){var t=Object(u.useState)(new s.a(0)),e=Object(i.a)(t,2),r=e[0],o=e[1],f=Object(l.a)().slowRefresh;return Object(u.useEffect)((function(){(function(){var n=Object(a.a)(c.a.mark((function n(){var t,e;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=Object(j.a)(b,Object(d.a)()),n.next=3,t.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();case 3:e=n.sent,o(new s.a(e));case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[n,f]),r};t.a=function(n){var t=Object(u.useState)(new s.a(0)),e=Object(i.a)(t,2),r=e[0],o=e[1],b=Object(f.m)(),j=b.account,d=b.ethereum,O=Object(l.a)().fastRefresh;return Object(u.useEffect)((function(){j&&d&&function(){var t=Object(a.a)(c.a.mark((function t(){var e;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(p.c)(d,n,j);case 2:e=t.sent,o(new s.a(e));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[j,d,n,O]),r}},677:function(n,t,e){"use strict";var r=e(12),c=e(0),a=e(695),i=e(38);t.a=function(n){var t=n.value,e=n.decimals,u=n.fontSize,o=void 0===u?"40px":u,s=n.prefix,f=Object(a.useCountUp)({start:0,end:t,duration:1,separator:",",decimals:void 0!==e?e:t<0?4:t>1e5?0:3}),b=f.countUp,j=f.update,p=Object(c.useRef)(j);return Object(c.useEffect)((function(){p.current(t)}),[t,p]),Object(r.jsxs)(i.E,{color:"textSubtle",bold:!0,fontSize:o,children:[s,b]})}},694:function(n,t,e){"use strict";e.d(t,"b",(function(){return p})),e.d(t,"a",(function(){return d}));var r=e(51),c=e(4),a=e.n(c),i=e(15),u=e(0),o=e(65),s=e(55),f=e(129),b=e(669),j=e(667),p=function(n){var t=Object(s.b)(),e=Object(o.m)().account,r=Object(j.e)();return{onReward:Object(u.useCallback)(Object(i.a)(a.a.mark((function c(){var i;return a.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(b.c)(r,n,e);case 2:return i=c.sent,t(Object(f.a)(e)),c.abrupt("return",i);case 5:case"end":return c.stop()}}),c)}))),[e,t,n,r])}},d=function(n){var t=Object(o.m)().account,e=Object(j.e)();return{onReward:Object(u.useCallback)(Object(i.a)(a.a.mark((function c(){var i;return a.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return i=n.reduce((function(n,c){return[].concat(Object(r.a)(n),[Object(b.c)(e,c,t)])}),[]),c.abrupt("return",Promise.all(i));case 2:case"end":return c.stop()}}),c)}))),[t,n,e])}}},904:function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return sn}));var r=e(12),c=e(50),a=e(0),i=e(3),u=e(38),o=e(170),s=e(175),f=e(4),b=e.n(f),j=e(15),p=e(20),d=e(65),l=e(14),O=e.n(l),h=e(694),m=e(16),x=e(30),g=e(37),v=e(72),w=e(713),k=e(127),S=function(){var n=Object(a.useState)([]),t=Object(p.a)(n,2),e=t[0],r=t[1],c=Object(d.m)().account,i=Object(k.a)().fastRefresh;return Object(a.useEffect)((function(){c&&function(){var n=Object(j.a)(b.a.mark((function n(){var t,e,a;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=w.a.map((function(n){return{address:Object(g.e)(),name:"pendingPRV",params:[n.pid,c]}})),n.next=3,Object(x.a)(v,t);case 3:e=n.sent,a=w.a.map((function(n,t){return Object(m.a)(Object(m.a)({},n),{},{balance:new O.a(e[t])})})),r(a);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()()}),[c,i]),e},y=e(672),H=e(677),z=function(n){var t=n.earningsSum,e=Object(o.a)();return Object(d.m)().account?Object(r.jsx)(H.a,{value:t}):Object(r.jsx)(u.E,{color:"textDisabled",style:{lineHeight:"60px"},children:e(298,"Locked")})},E=function(n){var t=n.cakeBalance,e=Object(o.a)();return Object(d.m)().account?Object(r.jsx)(H.a,{value:t,fontSize:"24px"}):Object(r.jsx)(u.E,{color:"textDisabled",style:{lineHeight:"36px"},children:e(298,"Locked")})},R=e(108),B=e(673),P=function(){var n=Object(a.useState)([]),t=Object(p.a)(n,2),e=t[0],r=t[1],c=Object(d.m)().account,i=Object(k.a)().fastRefresh;return Object(a.useEffect)((function(){c&&function(){var n=Object(j.a)(b.a.mark((function n(){var t,e;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=w.a.map((function(n){return{address:Object(g.e)(),name:"pendingPRV",params:[n.pid,c]}})),n.next=3,Object(x.a)(v,t);case 3:e=n.sent,r(e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()()}),[c,i]),e},C=e(668);function V(){var n=Object(c.a)(["\n  margin-top: 24px;\n"]);return V=function(){return n},n}function F(){var n=Object(c.a)(["\n  color: ",";\n  font-size: 20px;\n"]);return F=function(){return n},n}function N(){var n=Object(c.a)(["\n  margin-bottom: 16px;\n"]);return N=function(){return n},n}function W(){var n=Object(c.a)(["\n  margin-bottom: 16px;\n"]);return W=function(){return n},n}function M(){var n=Object(c.a)(["\n  background-image: url('/images/bgBig.png');\n  background-repeat: no-repeat;\n  background-size:100% 102%;\n  background-position:center;\n  min-height: 376px;\n"]);return M=function(){return n},n}var L=Object(i.e)(u.h)(M()),T=i.e.div(W()),A=i.e.img(N()),D=i.e.div(F(),(function(n){return n.theme.colors.text})),U=i.e.div(V()),$=function(){var n=Object(a.useState)(!1),t=Object(p.a)(n,2),e=t[0],c=t[1],i=Object(d.m)().account,s=Object(o.a)(),f=S(),l=Object(C.a)(Object(B.a)(Object(g.a)())),m=Object(R.f)().toNumber(),x=P().reduce((function(n,t){return n+new O.a(t).div(new O.a(10).pow(18)).toNumber()}),0),v=f.filter((function(n){return n.balance.toNumber()>0})),w=Object(h.a)(v.map((function(n){return n.pid}))).onReward,k=Object(a.useCallback)(Object(j.a)(b.a.mark((function n(){return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c(!0),n.prev=1,n.next=4,w();case 4:n.next=8;break;case 6:n.prev=6,n.t0=n.catch(1);case 8:return n.prev=8,c(!1),n.finish(8);case 11:case"end":return n.stop()}}),n,null,[[1,6,8,11]])}))),[w]);return Object(r.jsx)(L,{children:Object(r.jsxs)(u.i,{children:[Object(r.jsx)(u.o,{color:"text",size:"xl",mb:"20px",children:s(542,"Farms & Staking")}),Object(r.jsx)(A,{src:"/logo.png",alt:"cake logo",width:64,height:64}),Object(r.jsxs)(T,{children:[Object(r.jsx)(D,{children:s(544,"PRV to Harvest")}),Object(r.jsx)(z,{earningsSum:x}),Object(r.jsxs)(D,{children:["~$",(m*x).toFixed(2)]})]}),Object(r.jsxs)(T,{children:[Object(r.jsx)(D,{children:s(546,"PRV in Wallet")}),Object(r.jsx)(E,{cakeBalance:l}),Object(r.jsxs)(D,{children:["~$",(m*l).toFixed(2)]})]}),Object(r.jsx)(U,{children:i?Object(r.jsx)(u.d,{id:"harvest-all",disabled:v.length<=0||e,onClick:k,fullWidth:!0,children:e?s(548,"Collecting PRV"):s(999,"Harvest all (".concat(v.length,")"))}):Object(r.jsx)(y.a,{fullWidth:!0})})]})})},Q=e(698);function J(){var n=Object(c.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 20px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]);return J=function(){return n},n}function q(){var n=Object(c.a)(["\nbackground-image: url('/images/bgBig.png');\n  background-repeat: no-repeat;\n  background-size:100% 102%;\n  background-position:center;\n  margin-left: auto;\n  margin-right: auto;\n"]);return q=function(){return n},n}var G=Object(i.e)(u.h)(q()),I=i.e.div(J()),K=function(){var n=Object(o.a)(),t=Object(B.c)(),e=Object(B.b)(Object(g.a)()),c=Object(R.c)(),a=Object(R.f)(),i=t?t.minus(e):new Q.a(0),s=Object(C.a)(i),f=a.times(i),b=0;return c&&c[0]&&c[0].prvPerBlock&&(b=new Q.a(c[0].prvPerBlock).div(new Q.a(10).pow(18)).toNumber()),Object(r.jsx)(G,{children:Object(r.jsxs)(u.i,{children:[Object(r.jsx)(u.o,{size:"xl",mb:"24px",children:n(534,"PRV Stats")}),Object(r.jsxs)(I,{children:[Object(r.jsx)(u.E,{fontSize:"20px",children:n(10005,"Market Cap")}),Object(r.jsx)(H.a,{fontSize:"20px",value:Object(C.a)(f),decimals:0,prefix:"$"})]}),Object(r.jsxs)(I,{children:[Object(r.jsx)(u.E,{fontSize:"20px",children:n(536,"Total Minted")}),t&&Object(r.jsx)(H.a,{fontSize:"20px",value:Object(C.a)(t),decimals:0})]}),Object(r.jsxs)(I,{children:[Object(r.jsx)(u.E,{fontSize:"20px",children:n(538,"Total Burned")}),Object(r.jsx)(H.a,{fontSize:"20px",value:Object(C.a)(e),decimals:0})]}),Object(r.jsxs)(I,{children:[Object(r.jsx)(u.E,{fontSize:"20px",children:n(10004,"Circulating Supply")}),s&&Object(r.jsx)(H.a,{fontSize:"20px",value:s,decimals:0})]}),Object(r.jsxs)(I,{children:[Object(r.jsx)(u.E,{fontSize:"20px",children:n(540,"New PRV/block")}),Object(r.jsx)(u.E,{color:"textSubtle",bold:!0,fontSize:"20px",children:b})]}),Object(r.jsxs)(I,{children:[Object(r.jsx)(u.E,{fontSize:"20px",children:"Max Supply"}),Object(r.jsx)(u.E,{color:"textSubtle",bold:!0,fontSize:"20px",children:"30,000,000 PRV"})]})]})})};function X(){var n=Object(c.a)(["\nbackground-image: url('/images/bgBig.png');\nbackground-repeat: no-repeat;\nbackground-size:100% 102%;\nbackground-position:center;\n  align-items: center;\n  display: flex;\n  flex: 1;\n"]);return X=function(){return n},n}var Y=Object(i.e)(u.h)(X()),Z=function(){var n=Object(o.a)(),t=Object(R.h)();return Object(r.jsx)(Y,{children:Object(r.jsxs)(u.i,{children:[Object(r.jsx)(u.o,{style:{fontSize:"2em"},size:"lg",mb:"24px",children:n(999,"Total Value Locked (TVL)")}),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(H.a,{value:t.toNumber(),prefix:"$",decimals:2}),Object(r.jsx)(u.E,{color:"textSubtle",children:n(999,"Across all Farms and Pools")})]})]})})},_=e(846);function nn(){var n=Object(c.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]);return nn=function(){return n},n}function tn(){var n=Object(c.a)(["\nbackground-image: url('/images/bgBig.png');\n  background-repeat: no-repeat;\n  background-size:100% 102%;\n  background-position:center;\n  margin-left: auto;\n  margin-right: auto;\n"]);return tn=function(){return n},n}var en=Object(i.e)(u.h)(tn()),rn=(i.e.div(nn()),function(){var n=Object(o.a)();return Object(r.jsx)(en,{children:Object(r.jsxs)(u.i,{children:[Object(r.jsx)(u.o,{style:{fontSize:"2em"},mb:"22px",children:n(10003,"Announcements")}),Object(r.jsx)(_.a,{dataSource:{sourceType:"profile",screenName:"PrivacySwap"},options:{height:"300",chrome:"noheader, nofooter",width:"100%"}})]})})});function cn(){var n=Object(c.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 48px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"]);return cn=function(){return n},n}function an(){var n=Object(c.a)(["\n  align-items: center;\n  // background-image: url('/images/egg/3.png');\n  background-repeat: no-repeat;\n  background-position: top center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  text-align: center;\n\n  "," {\n    // background-image: url('/images/egg/3.png'), url('/images/egg/3b.png');\n    background-position: left center, right center;\n    height: 165px;\n    padding-top: 0;\n  }\n"]);return an=function(){return n},n}var un=i.e.div(an(),(function(n){return n.theme.mediaQueries.lg})),on=Object(i.e)(u.b)(cn(),(function(n){return n.theme.mediaQueries.sm}),(function(n){return n.theme.mediaQueries.lg})),sn=function(){Object(o.a)();return Object(r.jsxs)(s.a,{children:[Object(r.jsx)(un,{}),Object(r.jsx)("div",{children:Object(r.jsxs)(on,{style:{marginLeft:"".concat(window.screen.width>900?"50px":"10px"),marginRight:"".concat(window.screen.width>900?"50px":"10px")},children:[Object(r.jsx)($,{}),Object(r.jsx)(rn,{}),Object(r.jsx)(K,{}),Object(r.jsx)(Z,{})]})})]})}}}]);
//# sourceMappingURL=16.54fe2c66.chunk.js.map