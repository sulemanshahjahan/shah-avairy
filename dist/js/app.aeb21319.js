(function(){"use strict";var e={537:function(e,r,t){var a=t(963),n=t(252);const i={class:"navbar navbar-expand-lg navbar-dark bg-dark"},s={class:"container-fluid"},o=(0,n._)("a",{class:"navbar-brand",href:"#"},"Shah Aviary",-1),u=(0,n._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,n._)("span",{class:"navbar-toggler-icon"})],-1),c={class:"collapse navbar-collapse",id:"navbarNav"},l={class:"navbar-nav"},d={class:"nav-item"},p=(0,n.Uk)("Home"),h={class:"nav-item"},m=(0,n.Uk)("About");function b(e,r){const t=(0,n.up)("router-link"),a=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("nav",i,[(0,n._)("div",s,[o,u,(0,n._)("div",c,[(0,n._)("ul",l,[(0,n._)("li",d,[(0,n.Wm)(t,{to:"/"},{default:(0,n.w5)((()=>[p])),_:1})]),(0,n._)("li",h,[(0,n.Wm)(t,{to:"/about"},{default:(0,n.w5)((()=>[m])),_:1})])])])])]),(0,n.Wm)(a)],64)}var g=t(744);const v={},f=(0,g.Z)(v,[["render",b]]);var _=f,w=t(201);const k=e=>((0,n.dD)("data-v-bf25a378"),e=e(),(0,n.Cn)(),e),y=k((()=>(0,n._)("h2",{class:"hidden"},"All of our birds",-1))),N=k((()=>(0,n._)("div",{class:"events"},null,-1))),D=k((()=>(0,n._)("h2",null,"All of our Pairs",-1))),P={class:"events"},C={id:"pagination"},U=(0,n.Uk)("Prev Page"),B=(0,n.Uk)("Next Page");function E(e,r,t,a,i,s){const o=(0,n.up)("PairCard"),u=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)(n.HY,null,[y,N,D,(0,n._)("div",P,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.pairs,(e=>((0,n.wg)(),(0,n.j4)(o,{key:e.cageNumber,pair:e},null,8,["pair"])))),128))]),(0,n._)("div",C,[1!=t.page?((0,n.wg)(),(0,n.j4)(u,{key:0,to:{name:"BirdsList",query:{page:t.page-1}},rel:"prev"},{default:(0,n.w5)((()=>[U])),_:1},8,["to"])):(0,n.kq)("",!0),s.hasNextPage?((0,n.wg)(),(0,n.j4)(u,{key:1,to:{name:"BirdsList",query:{page:t.page+1}},rel:"next"},{default:(0,n.w5)((()=>[B])),_:1},8,["to"])):(0,n.kq)("",!0)])],64)}var O=t(669),j=t.n(O);const x=j().create({baseURL:"https://shah-birds.herokuapp.com",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}});var z={getBirds(e){return x.get("/birds",{params:{id:e}})},getBird(e){return x.get("/birds/"+e)},getPairs(e,r){return x.get("/pairs?_limit="+e+"&_page="+r)},getPair(e){return x.get("/pairs/",{params:{cageNumber:e}})},getClutch(e){return x.get("/clutches/",{params:{id:e}})}},I=t(577);const q=e=>((0,n.dD)("data-v-70b3ab5e"),e=e(),(0,n.Cn)(),e),Z={class:"card",style:{width:"18rem"}},W={class:"card-body"},H={class:"card-title"},T={class:"card-subtitle mb-2 text-muted"},A=q((()=>(0,n._)("strong",null,"Cage Number: ",-1))),L=(0,n.Uk)(" View Bird");function S(e,r,t,a,i,s){const o=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",Z,[(0,n._)("div",W,[(0,n._)("h5",H,(0,I.zw)(t.pair.name),1),(0,n._)("h6",T,[A,(0,n.Uk)(" "+(0,I.zw)(t.pair.cageNumber),1)]),(0,n.Wm)(o,{to:{name:"PairDetails",params:{cageNumber:t.pair.cageNumber}}},{default:(0,n.w5)((()=>[L])),_:1},8,["to"])])])}var R={name:"PairCard",props:{pair:{type:Object,require:!0}}};const Y=(0,g.Z)(R,[["render",S],["__scopeId","data-v-70b3ab5e"]]);var M=Y,$={name:"BirdList",props:["page"],components:{PairCard:M},data(){return{birds:[],pairs:[],totalPairs:0}},beforeRouteEnter(e,r,t){z.getPairs(2,parseInt(e.query.page)||1).then((e=>{t((r=>{r.pairs=e.data,r.totalPairs=e.headers["x-total-count"]}))})).catch((e=>{e.response&&404==e.response.status?t({name:"404Resource",params:{resource:"pair"}}):t({name:"NetworkError"})}))},beforeRouteUpdate(e){return z.getPairs(2,parseInt(e.query.page)||1).then((e=>{this.pairs=e.data,this.totalPairs=e.headers["x-total-count"]})).catch((e=>e.response&&404==e.response.status?{name:"404Resource",params:{resource:"pair"}}:{name:"NetworkError"}))},computed:{hasNextPage(){var e=Math.ceil(this.totalPairs/2);return this.page<e}}};const F=(0,g.Z)($,[["render",E],["__scopeId","data-v-bf25a378"]]);var K=F;const V=(0,n._)("strong",null,"Gender: ",-1),G=(0,n._)("strong",null,"Species: ",-1),J=(0,n._)("strong",null,"Date Of Birth: ",-1),Q=(0,n._)("strong",null,"Status: ",-1),X=(0,n._)("strong",null,"Cage Number: ",-1),ee=(0,n._)("strong",null,"Parents: ",-1);function re(e,r,t,a,i,s){return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("p",null,[V,(0,n.Uk)(" "+(0,I.zw)(t.bird.gender),1)]),(0,n._)("p",null,[G,(0,n.Uk)(" "+(0,I.zw)(t.bird.species),1)]),(0,n._)("p",null,[J,(0,n.Uk)(" "+(0,I.zw)(t.bird.dateOfBirth),1)]),(0,n._)("p",null,[Q,(0,n.Uk)(" "+(0,I.zw)(t.bird.status),1)]),(0,n._)("p",null,[X,(0,n.Uk)(" "+(0,I.zw)(t.bird.cageNumber),1)]),(0,n._)("p",null,[ee,(0,n.Uk)(" "+(0,I.zw)(t.bird.parents),1)])],64)}var te={props:["bird"]};const ae=(0,g.Z)(te,[["render",re]]);var ne=ae;function ie(e,r,t,a,i,s){return(0,n.wg)(),(0,n.iD)("p",null,"Edit the Bird here...")}var se={props:["bird"]};const oe=(0,g.Z)(se,[["render",ie]]);var ue=oe;const ce={key:0},le={id:"nav"},de=(0,n.Uk)("Details"),pe=(0,n.Uk)(" | "),he=(0,n.Uk)("Edit");function me(e,r,t,a,i,s){const o=(0,n.up)("router-link"),u=(0,n.up)("router-view");return i.bird?((0,n.wg)(),(0,n.iD)("div",ce,[(0,n._)("h1",null,"Hello: "+(0,I.zw)(i.bird.name),1),(0,n._)("div",le,[(0,n.Wm)(o,{to:{name:"BirdDetails",params:{id:t.id}}},{default:(0,n.w5)((()=>[de])),_:1},8,["to"]),pe,(0,n.Wm)(o,{to:{name:"BirdEdit",params:{id:t.id}}},{default:(0,n.w5)((()=>[he])),_:1},8,["to"])]),(0,n.Wm)(u,{bird:i.bird},null,8,["bird"])])):(0,n.kq)("",!0)}var be={props:["id"],data(){return{bird:null}},created(){z.getBird(this.id).then((e=>{this.bird=e.data})).catch((e=>{e.response&&404==e.response.status?this.$router.push({name:"404Resource",params:{resource:"bird"}}):this.$router.push({name:"NetworkError"})}))}};const ge=(0,g.Z)(be,[["render",me]]);var ve=ge;const fe=(0,n._)("strong",null,"Status: ",-1),_e=(0,n._)("strong",null,"Cage Number: ",-1),we={class:"birds"},ke=(0,n._)("h2",null,"Male & Female",-1),ye={class:"container text-center"},Ne={class:"row"},De=(0,n._)("h2",null,"Clutches: ",-1),Pe={class:"container text-center"},Ce={class:"row"};function Ue(e,r,t,a,i,s){const o=(0,n.up)("BirdCard"),u=(0,n.up)("Clutches");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("p",null,[fe,(0,n.Uk)(" "+(0,I.zw)(t.pair.status),1)]),(0,n._)("p",null,[_e,(0,n.Uk)(" "+(0,I.zw)(t.pair.cageNumber),1)]),(0,n._)("div",we,[ke,(0,n._)("div",ye,[(0,n._)("div",Ne,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.birds,(e=>((0,n.wg)(),(0,n.j4)(o,{key:e.id,bird:e,class:"birdCards"},null,8,["bird"])))),128))])])]),De,(0,n._)("div",Pe,[(0,n._)("div",Ce,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.clutches,((e,r)=>((0,n.wg)(),(0,n.j4)(u,{key:r,clutchids:r,clutch:e},null,8,["clutchids","clutch"])))),128))])])],64)}const Be={class:"col"},Ee={class:"card",style:{width:"100%"}},Oe={class:"card-body"},je={class:"card-title"},xe={class:"card-subtitle mb-2 text-muted"},ze=(0,n.Uk)(" View Bird");function Ie(e,r,t,a,i,s){const o=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",Be,[(0,n._)("div",Ee,[(0,n._)("div",Oe,[(0,n._)("h5",je,(0,I.zw)(t.bird.name),1),(0,n._)("h6",xe,(0,I.zw)(t.bird.gender),1),(0,n.Wm)(o,{to:{name:"BirdDetails",params:{id:t.bird.id}}},{default:(0,n.w5)((()=>[ze])),_:1},8,["to"])])])])}var qe={name:"BirdCard",props:{bird:{type:Object,require:!0}}};const Ze=(0,g.Z)(qe,[["render",Ie],["__scopeId","data-v-5061cf82"]]);var We=Ze;const He={class:"col-4"},Te={class:"card",style:{width:"100%"}},Ae={class:"card-header"},Le={class:"list-group-item"};function Se(e,r,t,a,i,s){return(0,n.wg)(),(0,n.iD)("div",He,[(0,n._)("div",Te,[(0,n._)("div",Ae,[(0,n._)("h5",null,"Number: "+(0,I.zw)(t.clutchids+1)+" Eggs: "+(0,I.zw)(t.clutch.eggs.length),1)]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.clutch.eggs,(e=>((0,n.wg)(),(0,n.iD)("ul",{class:"list-group list-group-flush",key:e},[(0,n._)("li",Le,[(0,n.Uk)((0,I.zw)(e.status)+" | ",1),(0,n._)("span",null,(0,I.zw)(e.dateOfBinding),1)])])))),128))])])}var Re={name:"PairClutches",props:{index:Number,clutchids:Number,numOfClutches:Number,clutch:{type:Object,require:!0}}};const Ye=(0,g.Z)(Re,[["render",Se],["__scopeId","data-v-0fdb0a15"]]);var Me=Ye,$e={components:{Clutches:Me,BirdCard:We},props:["clutches","pair","birds"]};const Fe=(0,g.Z)($e,[["render",Ue]]);var Ke=Fe;function Ve(e,r,t,a,i,s){return(0,n.wg)(),(0,n.iD)("p",null,"Edit the Pair here")}var Ge={props:["clutches","pair","birds"]};const Je=(0,g.Z)(Ge,[["render",Ve]]);var Qe=Je;const Xe={key:0},er={id:"nav"},rr=(0,n.Uk)("Details"),tr=(0,n.Uk)(" | "),ar=(0,n.Uk)("Edit");function nr(e,r,t,a,i,s){const o=(0,n.up)("router-link"),u=(0,n.up)("router-view");return i.pair?((0,n.wg)(),(0,n.iD)("div",Xe,[(0,n._)("h1",null,(0,I.zw)(i.pair.name),1),(0,n._)("div",er,[(0,n.Wm)(o,{to:{name:"PairDetails",params:{cageNumber:t.cageNumber}}},{default:(0,n.w5)((()=>[rr])),_:1},8,["to"]),tr,(0,n.Wm)(o,{to:{name:"PairEdit",params:{cageNumber:t.cageNumber}}},{default:(0,n.w5)((()=>[ar])),_:1},8,["to"])]),(0,n.Wm)(u,{pair:i.pair,clutches:i.clutches,birds:i.birds},null,8,["pair","clutches","birds"])])):(0,n.kq)("",!0)}var ir={props:["cageNumber"],data(){return{pair:null,clutches:[],clutchId:null,birdsID:null,birds:[]}},created(){z.getPair(this.cageNumber).then((e=>{this.pair=e.data[0],e.data[0]?.clutchId&&(this.clutchId=e.data[0].clutchId),e.data[0]?.birdsID&&(this.birdsID=e.data[0].birdsID),""==e.data&&this.$router.push({name:"404Resource",params:{resource:"pair"}})})).catch((e=>{e.response&&404==e.response.status?this.$router.push({name:"404Resource",params:{resource:"bird"}}):this.$router.push({name:"NetworkError"})}))},mounted(){(0,n.m0)((()=>z.getClutch(this.clutchId).then((e=>{this.clutches=e.data,z.getBirds(this.birdsID).then((e=>{this.birds=e.data})).catch((e=>{console.log(e),alert("from birds")}))})).catch((e=>{alert("from clutch"),console.log(e)}))))}};const sr=(0,g.Z)(ir,[["render",nr]]);var or=sr;const ur=(0,n._)("h1",null,"Oops!",-1),cr=(0,n.Uk)("Back to the home page");function lr(e,r,t,a,i,s){const o=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)(n.HY,null,[ur,(0,n._)("h3",null,"The "+(0,I.zw)(t.resource)+" you're looking for is not here.",1),(0,n.Wm)(o,{to:{name:"BirdsList"}},{default:(0,n.w5)((()=>[cr])),_:1})],64)}var dr={props:{resource:{type:String,required:!0,default:"page"}}};const pr=(0,g.Z)(dr,[["render",lr]]);var hr=pr;const mr={class:"networkError"},br=(0,n._)("h1",null,"Uh-Oh!",-1),gr=(0,n.Uk)(" It looks like you're experiencing some network issues, please take a breath and "),vr=(0,n.Uk)(" to try again. ");function fr(e,r){return(0,n.wg)(),(0,n.iD)("div",mr,[br,(0,n._)("h3",null,[gr,(0,n._)("a",{href:"#",onClick:r[0]||(r[0]=r=>e.$router.go(-1))},"click here"),vr])])}const _r={},wr=(0,g.Z)(_r,[["render",fr]]);var kr=wr,yr=t(865),Nr=t.n(yr);const Dr=[{path:"/",name:"BirdsList",component:K,props:e=>({page:parseInt(e.query.page)||1})},{path:"/bird/:id",name:"BirdLayout",props:!0,component:ve,children:[{path:"",name:"BirdDetails",component:ne},{path:"edit",name:"BirdEdit",component:ue}]},{path:"/pair/:cageNumber",name:"PairLayout",props:!0,component:or,children:[{path:"",name:"PairDetails",component:Ke},{path:"edit",name:"PairEdit",component:Qe}]},{path:"/about",name:"about",component:()=>t.e(443).then(t.bind(t,381))},{path:"/:CatchAll(.*)",name:"NotFound",component:hr,props:!0},{path:"/404/:resource",name:"404Resource",component:hr,props:!0},{path:"/network-error",name:"NetworkError",component:kr}],Pr=(0,w.p7)({history:(0,w.PO)("/"),routes:Dr,scrollBehavior(e,r,t){return t||{top:0}}});Pr.beforeEach((()=>{Nr().start()})),Pr.afterEach((()=>{Nr().done()}));var Cr=Pr,Ur=t(907),Br=(0,Ur.MT)({state:{birds:[]},getters:{},mutations:{},modules:{}});(0,a.ri)(_).use(Br).use(Cr).mount("#app")}},r={};function t(a){var n=r[a];if(void 0!==n)return n.exports;var i=r[a]={exports:{}};return e[a].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(r,a,n,i){if(!a){var s=1/0;for(l=0;l<e.length;l++){a=e[l][0],n=e[l][1],i=e[l][2];for(var o=!0,u=0;u<a.length;u++)(!1&i||s>=i)&&Object.keys(t.O).every((function(e){return t.O[e](a[u])}))?a.splice(u--,1):(o=!1,i<s&&(s=i));if(o){e.splice(l--,1);var c=n();void 0!==c&&(r=c)}}return r}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[a,n,i]}}(),function(){t.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(r,{a:r}),r}}(),function(){t.d=function(e,r){for(var a in r)t.o(r,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(r,a){return t.f[a](e,r),r}),[]))}}(),function(){t.u=function(e){return"js/about.0ac29bc0.js"}}(),function(){t.miniCssF=function(e){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){var e={},r="shah-aviary:";t.l=function(a,n,i,s){if(e[a])e[a].push(n);else{var o,u;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==r+i){o=d;break}}o||(u=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,t.nc&&o.setAttribute("nonce",t.nc),o.setAttribute("data-webpack",r+i),o.src=a),e[a]=[n];var p=function(r,t){o.onerror=o.onload=null,clearTimeout(h);var n=e[a];if(delete e[a],o.parentNode&&o.parentNode.removeChild(o),n&&n.forEach((function(e){return e(t)})),r)return r(t)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=p.bind(null,o.onerror),o.onload=p.bind(null,o.onload),u&&document.head.appendChild(o)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var e={143:0};t.f.j=function(r,a){var n=t.o(e,r)?e[r]:void 0;if(0!==n)if(n)a.push(n[2]);else{var i=new Promise((function(t,a){n=e[r]=[t,a]}));a.push(n[2]=i);var s=t.p+t.u(r),o=new Error,u=function(a){if(t.o(e,r)&&(n=e[r],0!==n&&(e[r]=void 0),n)){var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.src;o.message="Loading chunk "+r+" failed.\n("+i+": "+s+")",o.name="ChunkLoadError",o.type=i,o.request=s,n[1](o)}};t.l(s,u,"chunk-"+r,r)}},t.O.j=function(r){return 0===e[r]};var r=function(r,a){var n,i,s=a[0],o=a[1],u=a[2],c=0;if(s.some((function(r){return 0!==e[r]}))){for(n in o)t.o(o,n)&&(t.m[n]=o[n]);if(u)var l=u(t)}for(r&&r(a);c<s.length;c++)i=s[c],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(l)},a=self["webpackChunkshah_aviary"]=self["webpackChunkshah_aviary"]||[];a.forEach(r.bind(null,0)),a.push=r.bind(null,a.push.bind(a))}();var a=t.O(void 0,[998],(function(){return t(537)}));a=t.O(a)})();
//# sourceMappingURL=app.aeb21319.js.map