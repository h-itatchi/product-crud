(function(t){function e(e){for(var a,r,c=e[0],l=e[1],s=e[2],u=0,f=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,c=1;c<n.length;c++){var l=n[c];0!==i[l]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},i={app:0},o=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("div",{staticClass:"d-flex align-center"},[n("h1",[t._v("PRODUCT MANAGMENT")])]),n("v-spacer")],1),n("br"),n("br"),n("v-main",[n("Main")],1)],1)},o=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{staticClass:"text-center"}),n("ProductsTable")],1)},c=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.products,"sort-by":"price"},scopedSlots:t._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:""}},[n("v-toolbar-title",[t._v("Products List")]),n("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),n("v-spacer"),n("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,i=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",i,!1),a),[t._v(" New Product ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Product name"},model:{value:t.editedItem.nom,callback:function(e){t.$set(t.editedItem,"nom",e)},expression:"editedItem.nom"}})],1),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Price(DA)"},model:{value:t.editedItem.prix,callback:function(e){t.$set(t.editedItem,"prix",e)},expression:"editedItem.prix"}})],1)],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v(" Cancel ")]),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v(" Save ")])],1)],1)],1),n("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("Are you sure you want to delete this item?")]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDelete}},[t._v("Cancel")]),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.deleteItemConfirm}},[t._v("OK")]),n("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(e){var a=e.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(a)}}},[t._v(" mdi-pencil ")]),n("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteItem(a)}}},[t._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){return[n("v-btn",{attrs:{color:"primary"},on:{click:t.initialize}},[t._v(" Reset ")])]},proxy:!0}])})},s=[],d=(n("c975"),n("d3b7"),{name:"ProductsTable",data:function(){return{dialog:!1,dialogDelete:!1,headers:[{text:"Product",align:"start",sortable:!1,value:"nom"},{text:"Price (DA)",value:"prix"},{text:"ID",value:"id"},{text:"Actions",value:"actions",sortable:!1}],products:[],editedIndex:-1,editedItem:{id:-1,nom:"",prix:0},defaultItem:{id:0,nom:"",prix:0}}},mounted:function(){},computed:{formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"}},watch:{dialog:function(t){t||this.close()},dialogDelete:function(t){t||this.closeDelete()}},created:function(){this.initialize()},methods:{initialize:function(){var t=this;this.getproducts("http://localhost:8080/Products").then((function(e){t.products=e}))},getproducts:function(t){return fetch(t).then((function(t){return t.json()})).catch((function(t){console.log("Fetch Error :-S",t)}))},editItem:function(t){this.editedIndex=this.products.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){this.editedIndex=this.products.indexOf(t),this.editedItem=Object.assign({},t),this.dialogDelete=!0},deleteItemConfirm:function(){this.deleteProduct(this.editedIndex),this.closeDelete()},close:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},closeDelete:function(){var t=this;this.dialogDelete=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},save:function(){this.editedIndex>-1?this.saveEditProduct(this.editedItem,"update"):(this.editedItem.id=0,this.saveEditProduct(this.editedItem,"save")),this.close()},saveEditProduct:function(t,e){var n=this;fetch("http://localhost:8080/Products/"+e,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(){n.products=[],n.initialize()})).catch((function(t){console.log("Request failed",t)}))},deleteProduct:function(t){var e=this;fetch("http://localhost:8080/Products/delete/"+t).then((function(){e.products=[],e.initialize()})).catch((function(t){console.log("Request failed",t)}))}}}),u=d,f=n("2877"),p=n("6544"),v=n.n(p),h=n("8336"),m=n("b0af"),b=n("99d9"),x=n("62ad"),g=n("a523"),y=n("8fea"),I=n("169a"),_=n("ce7e"),k=n("132d"),P=n("0fd9"),w=n("2fa4"),C=n("8654"),O=n("71d9"),V=n("2a7f"),T=Object(f["a"])(u,l,s,!1,null,"2a36048b",null),j=T.exports;v()(T,{VBtn:h["a"],VCard:m["a"],VCardActions:b["a"],VCardText:b["b"],VCardTitle:b["c"],VCol:x["a"],VContainer:g["a"],VDataTable:y["a"],VDialog:I["a"],VDivider:_["a"],VIcon:k["a"],VRow:P["a"],VSpacer:w["a"],VTextField:C["a"],VToolbar:O["a"],VToolbarTitle:V["a"]});var D={name:"Main",components:{ProductsTable:j},data:function(){return{products:[]}}},A=D,S=Object(f["a"])(A,r,c,!1,null,null,null),F=S.exports;v()(S,{VContainer:g["a"],VRow:P["a"]});var M={name:"App",components:{Main:F},data:function(){return{}}},E=M,$=n("7496"),R=n("40dc"),z=n("f6c4"),N=Object(f["a"])(E,i,o,!1,null,null,null),B=N.exports;v()(N,{VApp:$["a"],VAppBar:R["a"],VMain:z["a"],VSpacer:w["a"]});var J=n("f309");a["a"].use(J["a"]);var q=new J["a"]({theme:{themes:{light:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}});n("d5e8"),n("5363");a["a"].config.productionTip=!1,new a["a"]({vuetify:q,render:function(t){return t(B)}}).$mount("#app")}});
//# sourceMappingURL=app.a05016c9.js.map