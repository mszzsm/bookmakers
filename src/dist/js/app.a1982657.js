(function(e){function t(t){for(var n,i,u=t[0],c=t[1],m=t[2],l=0,p=[];l<u.length;l++)i=u[l],r[i]&&p.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);s&&s(t);while(p.length)p.shift()();return o.push.apply(o,m||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,u=1;u<a.length;u++){var c=a[u];0!==r[c]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},o=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var m=0;m<u.length;m++)t(u[m]);var s=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("1d50")},"1d50":function(e,t,a){"use strict";a.r(t);a("fef8"),a("76e3"),a("d36a"),a("1de2");var n=a("e832"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Bookmakers",{attrs:{msg:"Kupuon text ",TeamA:"Ireland",TeamB:"Italy"}}),a("Bookmakers",{attrs:{msg:"Kupuon text ",TeamA:"Scarlets",TeamB:"Cheateas"}})],1)},o=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[a("h3",[e._v(" "+e._s(e.msg)+" / "+e._s(e.Bank+" Zł")+" ")]),a("h4",[e._v(e._s(e.TeamA)+" - "+e._s(e.TeamB))]),a("div",{attrs:{id:"match"}},[a("p",[e._v(" Favorite "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.Favorite,expression:"Favorite"}],attrs:{id:"A",type:"radio"},domProps:{value:e.Match.TeamA[0],checked:e._q(e.Favorite,e.Match.TeamA[0])},on:{change:function(t){e.Favorite=e.Match.TeamA[0]}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.Match.TeamA[0],expression:"Match.TeamA[0]"}],attrs:{type:"text"},domProps:{value:e.Match.TeamA[0]},on:{input:function(t){t.target.composing||e.$set(e.Match.TeamA,0,t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.Match.TeamA[1],expression:"Match.TeamA[1]",modifiers:{number:!0}}],attrs:{type:"number",placeholder:"1.0",step:"0.01",min:"1",max:"40"},domProps:{value:e.Match.TeamA[1]},on:{input:function(t){t.target.composing||e.$set(e.Match.TeamA,1,e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.Match.TeamA[2],expression:"Match.TeamA[2]",modifiers:{number:!0}}],attrs:{type:"number",step:"1",min:"0",max:"30"},domProps:{value:e.Match.TeamA[2]},on:{input:function(t){t.target.composing||e.$set(e.Match.TeamA,2,e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),a("p",[e._v(" Favorite "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.Favorite,expression:"Favorite"}],attrs:{id:"B",type:"radio"},domProps:{value:e.Match.TeamB[0],checked:e._q(e.Favorite,e.Match.TeamB[0])},on:{change:function(t){e.Favorite=e.Match.TeamB[0]}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.Match.TeamB[0],expression:"Match.TeamB[0]"}],attrs:{type:"text"},domProps:{value:e.Match.TeamB[0]},on:{input:function(t){t.target.composing||e.$set(e.Match.TeamB,0,t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.Match.TeamB[1],expression:"Match.TeamB[1]",modifiers:{number:!0}}],attrs:{type:"number",placeholder:"1.0",step:"0.01",min:"1",max:"40"},domProps:{value:e.Match.TeamB[1]},on:{input:function(t){t.target.composing||e.$set(e.Match.TeamB,1,e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.Match.TeamB[2],expression:"Match.TeamB[2]",modifiers:{number:!0}}],attrs:{type:"number",step:"1",min:"0",max:"30"},domProps:{value:e.Match.TeamB[2]},on:{input:function(t){t.target.composing||e.$set(e.Match.TeamB,2,e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})])]),a("div",{staticClass:"row"},[a("table",{staticStyle:{width:"50%"}},[e._m(0),a("tr",[a("td",[e._v(e._s(e.Match.TeamA[0]))]),a("td",[e._v(e._s(e.Match.TeamA[2]))]),a("td",[e._v(e._s(e.PlayA))]),a("td",[e._v(e._s(e.WinA))]),a("td",[e._v(e._s(e.WinA-e.Bank))])]),a("tr",[a("td",[e._v(e._s(e.Match.TeamB[0]))]),a("td",[e._v(e._s(e.Match.TeamB[2]))]),a("td",[e._v(e._s(e.PlayB))]),a("td",[e._v(e._s(e.WinB))]),a("td",[e._v(e._s(e.WinB-e.Bank))])])])]),a("hr")])},u=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("tr",[a("th",[e._v("Teams")]),a("th",[e._v("Bank")]),a("th",[e._v("Play")]),a("th",[e._v("Can Win")]),a("th",[e._v("Can Win")])])}],c=a("3ccd"),m=a.n(c),s={name:"Bookmakers",props:{msg:String,TeamA:String,TeamB:String},data:function(){return{Draw:0,Favorite:"",Match:{TeamA:["",0,0],TeamB:["",0,0]}}},computed:{PlayA:function(){var e=.88*this.Match.TeamA[2];return m()(e.toFixed(2))},PlayB:function(){var e=.88*this.Match.TeamB[2];return m()(e.toFixed(2))},WinA:function(){var e=this.Match.TeamA[1]*this.PlayA-this.Match.TeamA[2];return m()(e.toFixed(2))},WinB:function(){var e=this.Match.TeamB[1]*this.PlayB-this.Match.TeamB[2];return m()(e.toFixed(2))},Bank:function(){var e=this.Match.TeamB[2]+this.Match.TeamA[2];return e}}},l=s,p=(a("6819"),a("a6c2")),d=Object(p["a"])(l,i,u,!1,null,null,null),v=d.exports,h={name:"app",components:{Bookmakers:v},data:function(){return{}}},f=h,T=(a("e5cd"),Object(p["a"])(f,r,o,!1,null,null,null)),_=T.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(_)}}).$mount("#app")},"29a5":function(e,t,a){},6819:function(e,t,a){"use strict";var n=a("29a5"),r=a.n(n);r.a},be33:function(e,t,a){},e5cd:function(e,t,a){"use strict";var n=a("be33"),r=a.n(n);r.a}});
//# sourceMappingURL=app.a1982657.js.map