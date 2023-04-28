var j=Object.defineProperty;var P=(e,s,n)=>s in e?j(e,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[s]=n;var r=(e,s,n)=>(P(e,typeof s!="symbol"?s+"":s,n),n),w=(e,s,n)=>{if(!s.has(e))throw TypeError("Cannot "+n)};var o=(e,s,n)=>(w(e,s,"read from private field"),n?n.call(e):s.get(e)),c=(e,s,n)=>{if(s.has(e))throw TypeError("Cannot add the same private member more than once");s instanceof WeakSet?s.add(e):s.set(e,n)},m=(e,s,n,t)=>(w(e,s,"write to private field"),t?t.call(e,n):s.set(e,n),n);import{S,A as H,C as R,G as T,a as W,P as I,W as N,b as q,c as z,d as $,B as V,M as x,e as v,f as U}from"./chunks/stats.min.ef3188c1.js";import{_ as L,b as G,q as M,o as g,c as A,E as J,H as X,C as K,f as Q,A as f,a as Y}from"./chunks/framework.ed17f42d.js";import"./chunks/commonjsHelpers.725317a4.js";var E;class Z{constructor(s){r(this,"scene");c(this,E,new S);this.scene=s}addAxesHelper(s=10){const n=new H(s);return this.scene.add(n),this}addCameraHelper(s){const n=new R(s);return this.scene.add(n),this}addGridHelper(...s){const n=new T(...s);return this.scene.add(n),this}addStats(s){o(this,E).showPanel(1),s.appendChild(stats.domElement);function n(){o(this,E).begin(),requestAnimationFrame(n)}return requestAnimationFrame(n),this}}E=new WeakMap;class s2{constructor(){return new W}}var C,l,b;let n2=(b=class{constructor(s={},n={},t={}){r(this,"render");c(this,C,{canvas:void 0,context:null,precision:"highp",alpha:!1,premultipliedAlpha:!0,antialias:!0,stencil:!0,preserveDrawingBuffer:!1,powerPreference:"default",failIfMajorPerformanceCaveat:!1,depth:!0,logarithmicDepthBuffer:!1});c(this,l,{enabled:!0,utoUpdate:!0,needsUpdate:!1,type:I});return Object.keys(o(this,C)).forEach(a=>{Object.hasOwn(s,a)?s[a]:o(this,C)[a]}),this.render=new N(s),this.shadowMap(n),this.render}shadowMap(s){Object.keys(o(this,l)).forEach(n=>{this.render[n]=Object.hasOwn(s,n)?s[n]:o(this,l)[n]})}},C=new WeakMap,l=new WeakMap,b);const y={WebGLRenderer:n2};class e2{constructor({type:s,config:n,...t}={}){if(Object.hasOwn(y,s))return new y[s](t,n);throw new Error("err")}}var u;class t2{constructor(s){c(this,u,{width:1,height:1,fov:75,cross:[.1,1e3],up:[0,1,0],lookAt:[0,0,0],position:[0,500,500]});const n={};Object.keys(o(this,u)).forEach(a=>{n[a]=Object.hasOwn(s,a)?s[a]:o(this,u)[a]});const t=new q(n.fov,n.width/n.height,...n.cross);return t.position.set(...n.position),t.up.set(...n.up),t.lookAt(...n.lookAt),t}}u=new WeakMap;const _={PerspectiveCamera:t2};class a2{constructor({type:s,...n}={}){if(Object.hasOwn(_,s))return new _[s](n);throw new Error("err")}}let o2=class{constructor({color:s="#111",intensity:n=1}){r(this,"light");return new z(s,n)}};var h;class p2{constructor({position:s,castShadow:n,...t}){r(this,"light");c(this,h,{color:"#fff",intensity:1,distance:0,decay:2});const a={};return Object.keys(o(this,h)).forEach(p=>{a[p]=Object.hasOwn(t,p)?t[p]:o(this,h)[p]}),this.light=new $(a.color,a.intensity,a.distance,a.decay),this.setPosition(s),this.shadow(n),this.light}setPosition(s){if(!s)throw new Error("err");this.light.position.set(...s)}shadow(s){this.light.castShadow=s}}h=new WeakMap;const B={AmbientLight:o2,PointLight:p2};class c2{constructor({type:s,...n}={}){if(Object.hasOwn(B,s))return new B[s](n);throw new Error("err")}}var D,d,F,i;class O{constructor(s,n){c(this,D,void 0);c(this,d,void 0);c(this,F,void 0);c(this,i,new Map([["camera",{type:"PerspectiveCamera"}],["render",{type:"WebGLRenderer"}],["lights",null]]));r(this,"scene");r(this,"camera");r(this,"renderer");r(this,"lightMap",new Map);m(this,F,s),m(this,D,s.clientHeight),m(this,d,s.clientWidth),Object.keys(n).forEach(t=>{o(this,i).set(t,n[t])}),this.initScene(),this.initCamera(),this.initRenderer(),this.initHelper(),this.initLight()}initScene(){this.scene=new s2}initCamera(){this.camera=new a2({width:o(this,d),height:o(this,D),...o(this,i).get("camera")})}initRenderer(){this.renderer=new e2(o(this,i).get("render"))}initHelper(){new Z(this.scene).addAxesHelper(1e3).addGridHelper(500,10)}initLight(){const s=o(this,i).get("lights");Array.isArray(s)&&s.forEach(n=>{this.lightMap.set(n.name,new c2(n)),this.scene.add(this.lightMap.get(n.name))})}render(){this.renderer.render(this.scene,this.camera),o(this,F).appendChild(this.renderer.domElement)}add(s){this.scene.add(s)}}D=new WeakMap,d=new WeakMap,F=new WeakMap,i=new WeakMap;const r2={camera:{type:"PerspectiveCamera"},render:{type:"WebGLRenderer"},lights:[{name:"ambientLight",type:"AmbientLight"},{name:"pointLight",type:"PointLight",position:[100,100,100],castShadow:!0}]};const i2={__name:"boxGeometry",setup(e){const s=G(null),n=new V(100,100,100),t=new x({color:65280}),a=new v(n,t);return M(()=>{const p=new O(s.value,r2);p.add(a),p.render()}),(p,k)=>(g(),A("div",{ref_key:"threeEL",ref:s,class:"three"},null,512))}},E2=L(i2,[["__scopeId","data-v-3b89b67f"]]),C2=Object.freeze(Object.defineProperty({__proto__:null,default:E2},Symbol.toStringTag,{value:"Module"}));const l2={__name:"sphereGeometry",setup(e){const s={camera:{type:"PerspectiveCamera",position:[200,300,200]},render:{type:"WebGLRenderer"},lights:[{name:"pointLight",type:"PointLight",position:[400,200,300],color:16777215,castShadow:!0},{name:"ambientLight",type:"AmbientLight",color:4473924}]},n=G(null),t=new U(60,40,40),a=new x({color:255}),p=new v(t,a);return p.translateX(120),M(()=>{const k=new O(n.value,s);k.add(p),k.render()}),(k,k2)=>(g(),A("div",{ref_key:"threeEL",ref:n,class:"three"},null,512))}},u2=L(l2,[["__scopeId","data-v-fc50a2ed"]]),h2=Object.freeze(Object.defineProperty({__proto__:null,default:u2},Symbol.toStringTag,{value:"Module"})),D2=f("h2",{id:"立方体-boxgeometry",tabindex:"-1"},[Y("立方体：boxGeometry "),f("a",{class:"header-anchor",href:"#立方体-boxgeometry","aria-label":'Permalink to "立方体：boxGeometry"'},"​")],-1),d2=f("p",null,"other/three/geometry/boxGeometry",-1),_2=JSON.parse('{"title":"立方体","description":"","frontmatter":{"title":"立方体","lang":"zh-CN"},"headers":[],"relativePath":"zh-CN/other/three/geometry.md"}'),F2={name:"zh-CN/other/three/geometry.md"},B2=Object.assign(F2,{setup(e){const s=Object.assign({"../../../examples/other/three/geometry/boxGeometry.vue":C2,"../../../examples/other/three/geometry/sphereGeometry.vue":h2});return(n,t)=>{const a=J("Demo");return g(),A("div",null,[D2,X(a,{demos:Q(s),source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EthreeEL%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ethree%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20onMounted%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20ref%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'vue'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20BoxGeometry%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20MeshBasicMaterial%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20Mesh%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'three'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20cThree%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'..%2Futils%2FThree%2FBasic%2Findex'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20config%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'.%2Fconfig'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20threeEL%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20keyword%22%3Enull%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20geometry%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Enew%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class-name%22%3EBoxGeometry%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E100%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E100%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E100%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20material%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Enew%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class-name%22%3EMeshBasicMaterial%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Ecolor%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E0x00ff00%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20cube%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Enew%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class-name%22%3EMesh%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%20geometry%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20material%20%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20function%22%3EonMounted%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20three%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Enew%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class-name%22%3EcThree%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3EthreeEL%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Evalue%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20config%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20three%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Eadd%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3Ecube%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20three%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Erender%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Estyle%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Escoped%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20style%22%3E%3Cspan%20class%3D%22token%20language-css%22%3E%0A%3Cspan%20class%3D%22token%20selector%22%3E.three%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20property%22%3Edisplay%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20flex%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20property%22%3Ejustify-content%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20center%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20property%22%3Ewidth%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20300px%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20property%22%3Eheight%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20150px%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"other/three/geometry/boxGeometry","raw-source":"%3Ctemplate%3E%0A%20%20%3Cdiv%20ref%3D%22threeEL%22%20class%3D%22three%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0Aimport%20%7B%20onMounted%2C%20ref%20%20%7D%20from%20'vue'%3B%0Aimport%20%7B%0A%20%20BoxGeometry%2C%0A%20%20MeshBasicMaterial%2C%0A%20%20Mesh%2C%0A%7D%20from%20'three'%3B%0Aimport%20cThree%20from%20'..%2Futils%2FThree%2FBasic%2Findex'%3B%0Aimport%20config%20from%20'.%2Fconfig'%3B%0A%0Aconst%20threeEL%20%3D%20ref(null)%3B%0A%0Aconst%20geometry%20%3D%20new%20BoxGeometry(100%2C%20100%2C%20100)%3B%0Aconst%20material%20%3D%20new%20MeshBasicMaterial(%20%7B%20color%3A%200x00ff00%20%7D%20)%3B%0Aconst%20cube%20%3D%20new%20Mesh(%20geometry%2C%20material%20)%3B%0A%0AonMounted(()%20%3D%3E%20%7B%0A%20%20const%20three%20%3D%20new%20cThree(threeEL.value%2C%20config)%3B%0A%20%20three.add(cube)%3B%0A%20%20three.render()%3B%0A%7D)%3B%0A%3C%2Fscript%3E%0A%3Cstyle%20scoped%3E%0A.three%20%7B%0A%20%20display%3A%20flex%3B%0A%20%20justify-content%3A%20center%3B%0A%20%20width%3A%20300px%3B%0A%20%20height%3A%20150px%3B%0A%7D%0A%3C%2Fstyle%3E%0A",description:"%3Cp%3E%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E7%AB%8B%E6%96%B9%E4%BD%93%3C%2Fp%3E%0A"},{default:K(()=>[d2]),_:1},8,["demos"])])}}});export{_2 as __pageData,B2 as default};
