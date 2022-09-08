(function(){"use strict";var t={2930:function(t,e,r){var n=r(9242),a=r(3396);const i=(0,a.Uk)("Home"),u=(0,a.Uk)(" | "),o=(0,a.Uk)("About");function l(t,e){const r=(0,a.up)("router-link"),n=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("nav",null,[(0,a.Wm)(r,{to:"/"},{default:(0,a.w5)((()=>[i])),_:1}),u,(0,a.Wm)(r,{to:"/about"},{default:(0,a.w5)((()=>[o])),_:1})]),(0,a.Wm)(n)],64)}var c=r(89);const s={},d=(0,c.Z)(s,[["render",l]]);var p=d,h=r(2483);const f=t=>((0,a.dD)("data-v-aac5b014"),t=t(),(0,a.Cn)(),t),g=f((()=>(0,a._)("h2",null,"All of our birds",-1))),b={class:"events"},v=f((()=>(0,a._)("h2",null,"All of our Pairs",-1))),m={class:"events"};function w(t,e,r,n,i,u){const o=(0,a.up)("BirdCard"),l=(0,a.up)("PairCard");return(0,a.wg)(),(0,a.iD)(a.HY,null,[g,(0,a._)("div",b,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.birds,(t=>((0,a.wg)(),(0,a.j4)(o,{key:t.id,bird:t},null,8,["bird"])))),128))]),v,(0,a._)("div",m,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.pairs,(t=>((0,a.wg)(),(0,a.j4)(l,{key:t.cageNumber,pair:t},null,8,["pair"])))),128))])],64)}var _=r(7139);function k(t,e,r,n,i,u){const o=(0,a.up)("router-link");return(0,a.wg)(),(0,a.j4)(o,{to:{name:"BirdDetails",params:{id:r.bird.id}},class:"bird-card"},{default:(0,a.w5)((()=>[(0,a._)("h2",null,(0,_.zw)(r.bird.name),1),(0,a._)("p",null,"Gender: "+(0,_.zw)(r.bird.gender),1),(0,a._)("p",null,"Date Of Birth: "+(0,_.zw)(r.bird.dateOfBirth),1)])),_:1},8,["to"])}var y={name:"BirdCard",props:{bird:{type:Object,require:!0}}};const C=(0,c.Z)(y,[["render",k],["__scopeId","data-v-50e50f5b"]]);var O=C,j=r(6265),P=r.n(j);const z=P().create({baseURL:"http://localhost:3000",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}});var N={getBirds(){return z.get("/birds")},getBird(t){return z.get("/birds/"+t)},getPairs(){return z.get("/pairs")},getPair(t){return P().get("http://localhost:3000/pairs/",{params:{cageNumber:t}})},getClutch(){return z.get("/clutches/?id=987&id=876")}};const B=t=>((0,a.dD)("data-v-21551c3d"),t=t(),(0,a.Cn)(),t),D=B((()=>(0,a._)("strong",null,"Pair No: ",-1)));function U(t,e,r,n,i,u){const o=(0,a.up)("router-link");return(0,a.wg)(),(0,a.j4)(o,{to:{name:"PairDetails",params:{cageNumber:r.pair.cageNumber}},class:"bird-card"},{default:(0,a.w5)((()=>[(0,a._)("h2",null,(0,_.zw)(r.pair.name),1),(0,a._)("p",null,[D,(0,a.Uk)(" "+(0,_.zw)(r.pair.cageNumber),1)])])),_:1},8,["to"])}var H={name:"PairCard",props:{pair:{type:Object,require:!0}}};const T=(0,c.Z)(H,[["render",U],["__scopeId","data-v-21551c3d"]]);var A=T,S={name:"BirdList",components:{BirdCard:O,PairCard:A},data(){return{birds:[],pairs:[]}},created(){N.getBirds().then((t=>{this.birds=t.data})).catch((t=>{console.log(t)})),N.getPairs().then((t=>{this.pairs=t.data})).catch((t=>{console.log(t)}))}};const E=(0,c.Z)(S,[["render",w],["__scopeId","data-v-aac5b014"]]);var I=E;const Y={key:0},Z=(0,a._)("strong",null,"Gender: ",-1),q=(0,a._)("strong",null,"Species: ",-1),x=(0,a._)("strong",null,"Date Of Birth: ",-1),L=(0,a._)("strong",null,"Status: ",-1),K=(0,a._)("strong",null,"Cage Number: ",-1),M=(0,a._)("strong",null,"Parents: ",-1);function W(t,e,r,n,i,u){return i.bird?((0,a.wg)(),(0,a.iD)("div",Y,[(0,a._)("h1",null,"Hello: "+(0,_.zw)(i.bird.name),1),(0,a._)("p",null,[Z,(0,a.Uk)(" "+(0,_.zw)(i.bird.gender),1)]),(0,a._)("p",null,[q,(0,a.Uk)(" "+(0,_.zw)(i.bird.species),1)]),(0,a._)("p",null,[x,(0,a.Uk)(" "+(0,_.zw)(i.bird.dateOfBirth),1)]),(0,a._)("p",null,[L,(0,a.Uk)(" "+(0,_.zw)(i.bird.status),1)]),(0,a._)("p",null,[K,(0,a.Uk)(" "+(0,_.zw)(i.bird.cageNumber),1)]),(0,a._)("p",null,[M,(0,a.Uk)(" "+(0,_.zw)(i.bird.parents),1)])])):(0,a.kq)("",!0)}var F={props:["id"],data(){return{bird:null}},created(){N.getBird(this.id).then((t=>{this.bird=t.data})).catch((t=>{console.log(t)}))}};const G=(0,c.Z)(F,[["render",W]]);var R=G;const J={key:0},Q=(0,a._)("strong",null,"Status: ",-1),V=(0,a._)("strong",null,"Cage Number: ",-1),X={class:""},$=(0,a._)("h2",null,"Clutches: ",-1);function tt(t,e,r,n,i,u){const o=(0,a.up)("Clutches");return i.pair?((0,a.wg)(),(0,a.iD)("div",J,[(0,a._)("h1",null,(0,_.zw)(i.pair.name),1),(0,a._)("p",null,[Q,(0,a.Uk)(" "+(0,_.zw)(i.pair.status),1)]),(0,a._)("p",null,[V,(0,a.Uk)(" "+(0,_.zw)(i.pair.cageNumber),1)]),(0,a._)("div",X,[$,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.clutches,((t,e)=>((0,a.wg)(),(0,a.j4)(o,{key:e,clutchids:e,clutch:t},null,8,["clutchids","clutch"])))),128))])])):(0,a.kq)("",!0)}function et(t,e,r,n,i,u){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("h5",null,"Number: "+(0,_.zw)(r.clutchids+1)+" Eggs: "+(0,_.zw)(r.clutch.eggs.length),1),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.clutch.eggs,(t=>((0,a.wg)(),(0,a.iD)("ul",{key:t,class:"clutch"},[(0,a._)("li",null,(0,_.zw)(t.status),1),(0,a._)("li",null,(0,_.zw)(t.dateOfBinding),1)])))),128))],64)}var rt={name:"PairClutches",props:{index:Number,clutchids:Number,clutch:{type:Object,require:!0}}};const nt=(0,c.Z)(rt,[["render",et],["__scopeId","data-v-e035350e"]]);var at=nt,it={components:{Clutches:at},props:["cageNumber"],data(){return{pair:null,clutches:[],clutchId:null}},created(){N.getPair(this.cageNumber).then((t=>{this.pair=t.data[0],this.clutchId=t.data[0].clutchId})).catch((t=>{console.log(t)})),N.getClutch().then((t=>{this.clutches=t.data})).catch((t=>{console.log(t)}))}};const ut=(0,c.Z)(it,[["render",tt]]);var ot=ut;const lt=[{path:"/",name:"BirdsList",component:I},{path:"/bird-details/:id",name:"BirdDetails",props:!0,component:R},{path:"/pair-details/:cageNumber",name:"PairDetails",props:!0,component:ot},{path:"/about",name:"about",component:()=>r.e(443).then(r.bind(r,7381))}],ct=(0,h.p7)({history:(0,h.PO)("/"),routes:lt,scrollBehavior(t,e,r){return r||{top:0}}});var st=ct,dt=r(65),pt=(0,dt.MT)({state:{birds:[]},getters:{},mutations:{},modules:{}});(0,n.ri)(p).use(pt).use(st).mount("#app")}},e={};function r(n){var a=e[n];if(void 0!==a)return a.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.m=t,function(){var t=[];r.O=function(e,n,a,i){if(!n){var u=1/0;for(s=0;s<t.length;s++){n=t[s][0],a=t[s][1],i=t[s][2];for(var o=!0,l=0;l<n.length;l++)(!1&i||u>=i)&&Object.keys(r.O).every((function(t){return r.O[t](n[l])}))?n.splice(l--,1):(o=!1,i<u&&(u=i));if(o){t.splice(s--,1);var c=a();void 0!==c&&(e=c)}}return e}i=i||0;for(var s=t.length;s>0&&t[s-1][2]>i;s--)t[s]=t[s-1];t[s]=[n,a,i]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){r.f={},r.e=function(t){return Promise.all(Object.keys(r.f).reduce((function(e,n){return r.f[n](t,e),e}),[]))}}(),function(){r.u=function(t){return"js/about.526478f8.js"}}(),function(){r.miniCssF=function(t){}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="shah-aviary:";r.l=function(n,a,i,u){if(t[n])t[n].push(a);else{var o,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var d=c[s];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==e+i){o=d;break}}o||(l=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,r.nc&&o.setAttribute("nonce",r.nc),o.setAttribute("data-webpack",e+i),o.src=n),t[n]=[a];var p=function(e,r){o.onerror=o.onload=null,clearTimeout(h);var a=t[n];if(delete t[n],o.parentNode&&o.parentNode.removeChild(o),a&&a.forEach((function(t){return t(r)})),e)return e(r)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=p.bind(null,o.onerror),o.onload=p.bind(null,o.onload),l&&document.head.appendChild(o)}}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){var t={143:0};r.f.j=function(e,n){var a=r.o(t,e)?t[e]:void 0;if(0!==a)if(a)n.push(a[2]);else{var i=new Promise((function(r,n){a=t[e]=[r,n]}));n.push(a[2]=i);var u=r.p+r.u(e),o=new Error,l=function(n){if(r.o(t,e)&&(a=t[e],0!==a&&(t[e]=void 0),a)){var i=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src;o.message="Loading chunk "+e+" failed.\n("+i+": "+u+")",o.name="ChunkLoadError",o.type=i,o.request=u,a[1](o)}};r.l(u,l,"chunk-"+e,e)}},r.O.j=function(e){return 0===t[e]};var e=function(e,n){var a,i,u=n[0],o=n[1],l=n[2],c=0;if(u.some((function(e){return 0!==t[e]}))){for(a in o)r.o(o,a)&&(r.m[a]=o[a]);if(l)var s=l(r)}for(e&&e(n);c<u.length;c++)i=u[c],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(s)},n=self["webpackChunkshah_aviary"]=self["webpackChunkshah_aviary"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(2930)}));n=r.O(n)})();
//# sourceMappingURL=app.dfec34c1.js.map