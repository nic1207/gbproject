(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{601:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(85),n(6),n(5),n(9);var r=n(2);function o(e){return r.default.extend({name:"v-".concat(e),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,n){var r=n.props,data=n.data,o=n.children;data.staticClass="".concat(e," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(e){if("slot"===e)return!1;var t=c[e];return e.startsWith("data-")?(data.attrs[e]=t,!1):t||"string"==typeof t}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,data,o)}})}},617:function(e,t,n){"use strict";n(85),n(6),n(5),n(9),n(338),n(254);var r=n(601),o=n(28);t.a=Object(r.a)("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(e,t){var n,r=t.props,data=t.data,c=t.children,l=data.attrs;return l&&(data.attrs={},n=Object.keys(l).filter((function(e){if("slot"===e)return!1;var t=l[e];return e.startsWith("data-")?(data.attrs[e]=t,!1):t||"string"==typeof t}))),r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),e(r.tag,Object(o.a)(data,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(n||[])}),c)}})},640:function(e,t,n){var content=n(730);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(11).default)("1151504e",content,!0,{sourceMap:!1})},729:function(e,t,n){"use strict";var r=n(640);n.n(r).a},730:function(e,t,n){(t=n(10)(!1)).push([e.i,".container[data-v-7674ee92]{text-align:center;font-size:20px;color:#fff;background:#000;width:100%;height:100%;padding:70px}.playTable[data-v-7674ee92]{background-image:url(/logo.jpg);height:100px}.logo[data-v-7674ee92]{background-image:url(/gaming.jpg);height:100px}",""]),e.exports=t},752:function(e,t,n){"use strict";n.r(t);n(64);var r=n(20),o={layout:"welcome",data:function(){return{LoginCode:this.$nuxt.$route.query.LoginCode,percent:0}},mounted:function(){console.log("pages.index mounted()"),this.doLogin()},methods:{doGetCode:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var code,data,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return code="",t.prev=1,"http://35.229.140.14:30000/api/Agent/GetGameEntrance",data={AgentKey:"6J4wV3iFdUakdSiritwpMw",AccountName:"DEMO999",GameProductionCode:"STREAM_GAMING",LanguageTypeCode:"en",ReturnURI:"",NotifyPlatformPlayerLeaveCallback:""},t.next=6,e.$axios.$post("http://35.229.140.14:30000/api/Agent/GetGameEntrance",data);case 6:n=t.sent,e.percent=40,code=n.LoginCode,t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:return t.abrupt("return",code);case 15:case"end":return t.stop()}}),t,null,[[1,11]])})))()},doLogin:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,code,r,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("[debug] index.doLogin()"),e.percent=10,console.log("[debug] this.LoginCode=",e.LoginCode),void 0!==e.LoginCode){t.next=15;break}if(e.percent=20,n=e.$store.state.account&&e.$store.state.account.Token,console.log("[debug] token=",n),!n){t.next=12;break}return e.recheckToken(),t.abrupt("return");case 12:return t.next=14,e.doGetCode();case 14:e.LoginCode=t.sent;case 15:return console.log("do_send_login()"),code=e.LoginCode,t.prev=17,r={SN:1,CID:101,SC:1e3,B:{LoginCode:code}},t.next=21,e.$websocket.sendAsync(r);case 21:o=t.sent,e.percent=50,e.process_201(o),t.next=33;break;case 26:t.prev=26,t.t0=t.catch(17),console.error("[debug] error=",t.t0),c={xxx:"aaa"},console.log("[debug] accountinfo=",c),e.$store.commit("setAccount",c),e.percent=100;case 33:case"end":return t.stop()}}),t,null,[[17,26]])})))()},process_201:function(e){if(1e3===e.SC){if(e.B){this.percent=100;var t=e.B;console.log("[debug] accountinfo=",t),this.$store.commit("setAccount",t),this.$router.push("/roomlist")}}else this.percent=100,console.log("[debug] get login data fail!")},recheckToken:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$store.state.account.Token,console.log("[debug] recheckToken() token=",n),r={SN:3,CID:102,SC:1e3,B:{Token:n}},t.next=5,e.$websocket.sendAsync(r);case 5:o=t.sent,e.process_202(o);case 7:case"end":return t.stop()}}),t)})))()},process_202:function(e){if(console.log("[debug] 202 重新檢查token回傳 process_202(",e,")"),1e3===e.SC){if(e.B){var t=e.B;console.log("accountinfo=",t),this.$store.commit("setAccount",t),this.$router.push("/roomlist")}}else console.log("[debug] recheck token fail and dologout!"),this.$store.commit("clear"),window.location.href="http://35.229.140.14:30601/"}}},c=(n(729),n(30)),l=n(33),d=n.n(l),f=n(617),h=n(187),v=n(234),m=n(236),k=n(591),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:""}},[n("div",{staticClass:"logo",staticStyle:{"margin-left":"470px"}}),e._v(" "),n("v-row",{staticClass:"align-center justify-center pa-6"},[n("v-img",{staticClass:"grey lighten-2",attrs:{src:"/banner.jpg","aspect-ratio":"1.8","max-width":"700","max-height":"500",contain:""},scopedSlots:e._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0 justify-center",attrs:{align:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])})],1),e._v(" "),n("v-row",{staticStyle:{width:"100%"},attrs:{"no-gutters":"","align-content":"center",justify:"center"}},[n("div",{staticStyle:{width:"100%",height:"200px",position:"relative"}},[n("div",{staticStyle:{width:"20%",position:"absolute",top:"10%",left:"47%",transform:"translate(-50%, -50%)"}},[n("div",[e._v(e._s(e.percent)+" % ")]),e._v(" "),n("v-progress-linear",{attrs:{color:"#ffff99",value:"10",height:"10",striped:"",rounded:""},model:{value:e.percent,callback:function(t){e.percent=t},expression:"percent"}})],1),e._v(" "),n("div",{staticStyle:{width:"20%",position:"absolute",top:"30%",left:"69.2%",transform:"translate(-50%, -50%)"}},[n("div",{staticClass:"playTable"})])])])],1)}),[],!1,null,"7674ee92",null);t.default=component.exports;d()(component,{VContainer:f.a,VImg:h.a,VProgressCircular:v.a,VProgressLinear:m.a,VRow:k.a})}}]);