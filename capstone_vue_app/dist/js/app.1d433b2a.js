(function(t){function e(e){for(var a,i,s=e[0],u=e[1],c=e[2],d=0,l=[];d<s.length;d++)i=s[d],n[i]&&l.push(n[i][0]),n[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);p&&p(e);while(l.length)l.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],a=!0,i=1;i<r.length;i++){var u=r[i];0!==n[u]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=r[0]))}return t}var a={},n={app:0},o=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"511a4974"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(t){var e=[],r=n[t];if(0!==r)if(r)e.push(r[2]);else{var a=new Promise(function(e,a){r=n[t]=[e,a]});e.push(r[2]=a);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(t),o=function(e){u.onerror=u.onload=null,clearTimeout(c);var r=n[t];if(0!==r){if(r){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+a+": "+o+")");i.type=a,i.request=o,r[1](i)}n[t]=void 0}};var c=setTimeout(function(){o({type:"timeout",target:u})},12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(r,a,function(e){return t[e]}.bind(null,a));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var p=c;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var a=r("64a9"),n=r.n(a);n.a},"083e":function(t,e,r){},"199c":function(t,e){},"23be":function(t,e,r){"use strict";var a=r("199c"),n=r.n(a);e["default"]=n.a},"3dfd":function(t,e,r){"use strict";var a=r("af91"),n=r("23be"),o=(r("034f"),r("2877")),i=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,null,null);e["default"]=i.exports},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var a=r("2b0e"),n=r("3dfd"),o=r("8c4f"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[t._m(0),r("transition-group",{staticClass:"row",attrs:{appear:"","enter-active-class":"animated heartBeat","leave-active-class":"animated fadeOut"}},t._l(t.products,function(t){return r("product",{key:t.id,attrs:{product:t}})}),1)],1)},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h1",[r("strong",[t._v(" Produce-for-Sale! ")])])}],u=r("bc3a"),c=r.n(u),d=r("a7c6"),p=r.n(d),l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-3"},[r("h2",[t._v(t._s(t.product.item))]),t.inCart?r("h3",[t._v(" Quantity: "+t._s(t.product.quantity)+" ")]):t._e(),r("h3",[t._v(" $ "+t._s(t.product.price)+" ")]),r("p",[t._v(" Shelf Date: "+t._s(Date(t.product.updated_at))+" ")]),r("div",[r("span",[r("label",{attrs:{for:"quantity-product-"+t.product.id,for:""}},[t._v("Quantity:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.quantity,expression:"quantity"}],attrs:{type:"number",min:"1",id:"quantity-product-"+t.product.id},domProps:{value:t.quantity},on:{input:function(e){e.target.composing||(t.quantity=e.target.value)}}})]),t.inCart?t._e():r("button",{on:{click:t.addToCart}},[t._v("Add To Cart")]),t.inCart?r("button",{on:{click:t.updateQty}},[t._v("Add To Cart")]):t._e(),t.inCart?r("button",{on:{click:t.destroyProduct}},[t._v("Delete Item ")]):t._e()]),r("router-link",{attrs:{to:"/products/"+t.product.id}},[r("strong",[t._v(t._s(t.product.item)+" Information")])]),r("hr")],1)},m=[],f={props:["id","product","onDelete","inCart"],data:function(){return{quantity:1}},created:function(){},methods:{addToCart:function(t){var e=this;c.a.post("/api/carted_products",{product_id:this.product.id,quantity:this.quantity,user_id:2}).then(function(t){e.$router.push("/carted_products")}).catch(function(t){console.warn(t)})},updateQty:function(t){c.a.put("api/carted_products/".concat(product.id),{quantity:quantity}).then(function(t){console.log(t.data)})},destroyProduct:function(t){c.a.delete("api/carted_products/".concat(t.id)).then(function(t){console.log(t.data)}),this.onDelete&&onDelete(t.id)}}},v=f,h=r("2877"),_=Object(h["a"])(v,l,m,!1,null,null,null),g=_.exports,y={mixins:[p.a.mixin],data:function(){return{products:[],currentProduct:{},user:{}}},components:{product:g},created:function(){var t=this;c.a.get("/api/products").then(function(e){t.products=e.data}),c.a.get("/api/users").then(function(e){t.user=e.data})},methods:{showProduct:function(t){this.currentProduct===t?this.currentProduct={}:this.currentProduct=t},addToCart:function(t){this.$router.push("/carted_products")}}},b=y,P=Object(h["a"])(b,i,s,!1,null,null,null),w=P.exports,C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"products-new"},[r("h1",[t._v(t._s(t.message))]),r("form",{on:{submit:function(e){return e.preventDefault(),t.makeProduct()}}},[r("p",[t._v(" Item: "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.newProductItem,expression:"newProductItem"}],attrs:{type:"text"},domProps:{value:t.newProductItem},on:{input:function(e){e.target.composing||(t.newProductItem=e.target.value)}}})]),r("p",[t._v(" Price: "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.newProductPrice,expression:"newProductPrice"}],attrs:{type:"text"},domProps:{value:t.newProductPrice},on:{input:function(e){e.target.composing||(t.newProductPrice=e.target.value)}}})])])])},x=[],O={data:function(){return{message:"Welcome to ProductsNew",newProductItem:"",newProductPrice:""}},created:function(){},methods:{makeProduct:function(){var t=this,e={item:this.newProductItem,price:this.newProductPrice};c.a.post("/api/products",e).then(function(e){console.log("test"),t.$router.push("/")})}}},k=O,$=Object(h["a"])(k,C,x,!1,null,null,null),j=$.exports,N=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("div",{attrs:{id:"demo"}},[r("h2",[t._v("item: "+t._s(t.product.item))]),r("h1",[t._v(" Price: "+t._s(t.product.price))]),r("h2",[t._v(" Date when store ordered this item: "+t._s(new Date("2019-09-02").toLocaleString())+" ")]),r("h3",[t._v(" Organic: "+t._s(t.product.organic)+" ")]),r("h2",[t._v(" Producing Farm: "+t._s(t.product.farm)+" ")]),r("router-link",{attrs:{to:"/"}},[t._v("Back To Beginning")])],1)])},S=[],q={data:function(){return{message:"Welcome to Show!",product:{}}},created:function(){var t=this;c.a.get("/api/products/".concat(this.$route.params.id)).then(function(e){console.log(e.data),t.product=e.data})},methods:{revertDate:function(t){t.setDate(1)}}},D=q,E=Object(h["a"])(D,N,S,!1,null,null,null),I=E.exports,T=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),r("div",{staticClass:"carted_products"},[r("h1",[t._v(t._s(t.message))]),r("hr"),r("div",{staticClass:"input-group"},[r("label",{attrs:{for:"inputName"}},[t._v("Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",id:"inputName",placeholder:"Name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),r("div",{staticClass:"input-group"},[r("label",{attrs:{for:"inputAddress"}},[t._v("Address")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],staticClass:"form-control",attrs:{type:"text",id:"inputAddress",placeholder:"1234 Main St"},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}})]),r("div",{staticClass:"row"},[r("div",{staticClass:"input-group col-md-6"},[r("label",{attrs:{for:"inputCity"}},[t._v("City")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.city,expression:"city"}],staticClass:"form-control",attrs:{type:"text",id:"inputCity"},domProps:{value:t.city},on:{input:function(e){e.target.composing||(t.city=e.target.value)}}})]),r("div",{staticClass:"input-group col-md-4"},[r("label",{attrs:{for:"inputState"}},[t._v("State")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.state,expression:"state"}],staticClass:"form-control",attrs:{type:"text",id:"inputState"},domProps:{value:t.state},on:{input:function(e){e.target.composing||(t.state=e.target.value)}}})]),r("div",{staticClass:"input-group col-md-2"},[r("label",{attrs:{for:"inputZip"}},[t._v("Zip")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.zip,expression:"zip"}],staticClass:"form-control",attrs:{type:"text",id:"inputZip"},domProps:{value:t.zip},on:{input:function(e){e.target.composing||(t.zip=e.target.value)}}})])]),r("div",{staticClass:"input-group"},[r("label",{attrs:{for:"inputPhone"}},[t._v("Phone")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"form-control",attrs:{type:"tel",id:"inputPhone",placeholder:"(555) 555-5555"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(e){return t.makeOrder()}}},[t._v("Place Order")]),r("br"),r("br"),r("br"),t._l(t.cartedProducts,function(e){return r("div",[r("h2",[t._v(" ProductId: "+t._s(e.product_id)+" ")]),r("h3",[t._v(" Quantity: "+t._s(e.quantity)+" ")]),r("h2",[t._v(" "+t._s(e.price)+" ")]),r("p",[t._v(" Shelf Date: "+t._s(Date(e.updated_at))+" ")]),r("button",{on:{click:function(r){return t.destroyProduct(e)}}},[t._v("Delete Item ")]),r("hr")])})],2)])},z=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}})])}],A=(r("7f7f"),{data:function(){return{message:"This is the cart",cartedProducts:[],currentProduct:{},Products:[],name:"",address:"",city:"",state:"",zip:"",phone:""}},created:function(){var t=this;c.a.get("/api/carted_products").then(function(e){t.cartedProducts=e.data}),c.a.get("/api/products").then(function(e){t.Products=e.data})},methods:{destroyProduct:function(t){c.a.delete("api/carted_products/"+t.id).then(function(t){console.log(t.data)});var e=this.cartedProducts.indexOf(t);this.cartedProducts.splice(e,1),this.$router.push("/carted_products")},makeOrder:function(){var t=this,e=this.name,r=this.address,a=this.city,n=this.state,o=this.zip,i=this.phone,s={name:e,address:r,city:a,state:n,zip:o,phone:i};c.a.post("/api/orders",s).then(function(e){t.$router.push("/orders/".concat(e.data.id))})}}}),Q=A,M=(r("c3a1"),Object(h["a"])(Q,T,z,!1,null,null,null)),B=M.exports,F=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"orders"},[r("h1",[t._v(t._s(t.message))]),r("transition-group",{staticClass:"row",attrs:{appear:"","enter-active-class":" animated tada","leave-active-class":"animated tada"}})],1)},L=[],Z={data:function(){return{message:"Your Order!",orders:[]}},created:function(){var t=this;c.a.get("/api/orders").then(function(e){t.orders=e.data})}},J=Z,R=Object(h["a"])(J,F,L,!1,null,null,null),W=R.exports,H=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"order",style:t.myStyle,attrs:{id:"template"}},[r("h1",[t._v(t._s(t.message))]),r("transition-group",{attrs:{appear:"","enter-active-class":" animated rubberBand","leave-active-class":"animated tada"}},t._l(t.orderProducts,function(e){return r("div",{key:e.id},[r("h1",[r("em",[t._v(" $"+t._s(t.price)+" ")])]),r("h6",[t._v(" "+t._s(t.message)+" ")]),r("h3",[t._v(" "+t._s(t.receiptNo)+" ")])])}),0)],1)},U=[],Y={data:function(){return{myStyle:{backgroundColor:"#F26356"},price:0,message:"",receiptNo:0,orderProducts:[]}},created:function(){var t=this;c.a.get("/api/orders/".concat(this.$route.params.id)).then(function(e){t.price=e.data.price,t.message=e.data.message,t.receiptNo=e.data.ReceiptNo,t.orderProducts=e.data.OrderInformation})},methods:{}},G=Y,K=Object(h["a"])(G,H,U,!1,null,null,null),V=K.exports;a["a"].use(o["a"]);var X=new o["a"]({mode:"history",base:"/",routes:[{path:"/carted_products",name:"carted_products",component:B},{path:"/",name:"home",component:w},{path:"/products/new",name:"products-new",component:j},{path:"/products/:id",name:"products-show",component:I},{path:"/orders",name:"orders-index",component:W},{path:"/orders/:id",name:"orders-show",component:V},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))}}]});c.a.defaults.baseURL="/",a["a"].config.productionTip=!1,new a["a"]({router:X,render:function(t){return t(n["default"])}}).$mount("#app")},"64a9":function(t,e,r){},af91:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm",attrs:{id:"nav"}},[r("h5",{staticClass:"my-0 mr-md-auto font-weight-normal"},[t._v(" QuickServe Fruits")]),r("nav",{staticClass:"my-2 my-md-0 mr-md-3"},[r("router-link",{staticClass:"p-2 text-dark",attrs:{to:"/"}},[t._v("Home")]),r("router-link",{staticClass:"p-2 text-dark",attrs:{to:"/carted_products"}},[t._v("Shopping Cart")]),r("a",{attrs:{href:"#"}})],1)]),r("div",{staticClass:"container",attrs:{id:"app"}},[r("router-view")],1),r("footer",{attrs:{id:"footer"}})])},n=[];r.d(e,"a",function(){return a}),r.d(e,"b",function(){return n})},c3a1:function(t,e,r){"use strict";var a=r("083e"),n=r.n(a);n.a}});
//# sourceMappingURL=app.1d433b2a.js.map