(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{601:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r(85),r(6),r(5),r(9);var n=r(2);function o(t){return n.default.extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,r){var n=r.props,data=r.data,o=r.children;data.staticClass="".concat(t," ").concat(data.staticClass||"").trim();var l=data.attrs;if(l){data.attrs={};var c=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));c.length&&(data.staticClass+=" ".concat(c.join(" ")))}return n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),e(n.tag,data,o)}})}},604:function(t,e,r){var content=r(627);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("f41025f8",content,!0,{sourceMap:!1})},615:function(t,e,r){"use strict";r(338);var n=r(601);e.a=Object(n.a)("flex")},617:function(t,e,r){"use strict";r(85),r(6),r(5),r(9),r(338),r(254);var n=r(601),o=r(28);e.a=Object(n.a)("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,n=e.props,data=e.data,l=e.children,c=data.attrs;return c&&(data.attrs={},r=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,Object(o.a)(data,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(r||[])}),l)}})},626:function(t,e,r){"use strict";var n=r(604);r.n(n).a},627:function(t,e,r){(e=r(10)(!1)).push([t.i,".v-card--reveal[data-v-791c1b44]{bottom:0;opacity:.7;position:absolute;width:100%}.dashboard-bar[data-v-791c1b44]{background-image:linear-gradient(#fff 63%,#b98f38);color:#000}.showing-resulting[data-v-791c1b44]{width:83%;height:21vh;margin:0;padding:0;position:relative}.profile-img[data-v-791c1b44]{margin-left:11px}.textSize[data-v-791c1b44]{font-size:.8vw}",""]),t.exports=e},642:function(t,e,r){"use strict";r(64);var n=r(20),o={props:["table","PropCardSize"],data:function(){return{show:!1,secondshow:!1,WinImages:[{src:"/icon/0.png"},{src:"/icon/cp.png"},{src:"/icon/ct.png"},{src:"/icon/cb.png"}],WinText:{0:this.$t("GAMEWIN.UWIN"),1:this.$t("GAMEWIN.PWIN"),2:this.$t("GAMEWIN.TWIN"),3:this.$t("GAMEWIN.BWIN")},StateText:{11:this.$t("GAMESTATE.READY"),21:this.$t("GAMESTATE.SUFFLE"),31:this.$t("GAMESTATE.BET"),41:this.$t("GAMESTATE.DRAW_CARDS"),51:this.$t("GAMESTATE.SETTLE")}}},computed:{imageavatar:function(){return this.table&&this.table.tableinfo&&this.table.tableinfo.DealerAvatar?this.table.tableinfo.DealerAvatar:"/icon/avatar.png"},token:function(){return this.$store.state.account?this.$store.state.account.Token:[]},max_height:function(){return console.log("this.PropCardSize=",this.PropCardSize),"md6"===this.PropCardSize?20.5:"md4"===this.PropCardSize?9.9:"md3"===this.PropCardSize?10:20},max_width:function(){return console.log("this.PropCardSize=",this.PropCardSize),"md6"===this.PropCardSize?20.5:"md4"===this.PropCardSize?7:"md3"===this.PropCardSize?11:20},nameavatar:function(){return this.table&&this.table.tableinfo&&this.table.tableinfo.DealerName?this.table.tableinfo.DealerName:""},cardSize:function(){switch(this.PropCardSize){case"md6":return{md6:!0,md4:!1,md3:!1};case"md4":return{md6:!1,md4:!0,md3:!1};case"md3":return{md6:!1,md4:!1,md3:!0};default:return{md6:!0,md4:!1,md3:!1}}},State:function(){if(this.table&&this.table.tableinfo&&this.table.tableinfo.State){var t=this.table.tableinfo.State;if(31===t)return Math.ceil(this.table.tableinfo.Desktop.BetTimeCountDown/1e3);if(51===t){var e=this.table.tableinfo.Desktop.Winlose;return this.WinText[e]}return this.StateText[t]}return""},StateColor:function(){if(this.table&&this.table.tableinfo&&this.table.tableinfo.State){var t=this.table.tableinfo.State;if(11===t)return"background:dimgrey;height:30px";if(21===t)return"background:rebeccapurple;height:30px";if(31===t)return"background:darkcyan;height:30px";if(41===t)return"background:black;height:30px";if(51===t){var e=this.table.tableinfo.Desktop.Winlose;return 1===e?"background:blue;height:30px":2===e?"background:green;height:30px":3===e?"background:darkred;height:30px":"background:darkslategrey;height:30px"}return"background:green;height:30px"}return"background:black;height:30px"},Games:function(){return this.$store.state.lobby?this.$store.state.lobby.Games:[]},histroy:function(){return this.table&&this.table.tableinfo&&this.table.tableinfo.History?this.table.tableinfo.History:[]},groups:function(){return this.$store.state.groups?this.$store.state.groups.Groups:[]},playerCount:function(){return this.table&&this.table.tableinfo&&this.table.tableinfo.PlayerCount?this.table.tableinfo.PlayerCount:0}},methods:{joinGameTable:function(t,e,r){var o=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var l,c,d;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("[debug] joinGameTable(",o.table,")"),console.log("[debug] tihs.token=",o.token),console.log("[debug] groupid=",r),n.prev=3,r&&o.$store.commit("setNowGroupID",r),e&&(o.$store.commit("setNowTableID",e),o.$store.commit("setHistory",[])),l={Token:o.token,GameID:t,TableID:e},console.log("cmdBody=",l),c={SN:2,CID:10001,SC:1e3,B:l},n.next=11,o.$websocket.sendAsync(c);case 11:d=n.sent,o.process_20001(d),n.next=18;break;case 15:n.prev=15,n.t0=n.catch(3),console.error("[debug] error=",n.t0);case 18:case"end":return n.stop()}}),n,null,[[3,15]])})))()},process_20001:function(t){if(console.log("[debug] 處理加入遊戲桌回傳20001 process_20001(",t,")"),1e3===t.SC){this.$router.push("/betRoom");var e=t.B.PlayerGameToken;console.log("[debug] join table success!! token=",e),e&&this.$store.commit("setPGToken",e)}else console.log("[debug] join table fail!",t)},numFormat:function(t){return t>=1e7?t/1e7+"K":t/1e4}}},l=(r(626),r(30)),c=r(33),d=r.n(c),h=r(233),v=r(235),m=r(590),f=r(615),x=r(142),C=r(40),S=r(3),_=r(8),w=Object(S.a)(x.a,C.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(_.c)("v-hover should only contain a single element",this),element)):(Object(_.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}}),y=r(184),k=r(187),z=r(591),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-flex",{attrs:{md4:t.cardSize.md4,md3:t.cardSize.md3,md6:t.cardSize.md6,xs12:""}},[r("v-card",{staticClass:"ma-1",attrs:{elevation:"24",raised:"",outlined:""}},["md6"==t.PropCardSize?r("v-row",{staticClass:"dashboard-bar",attrs:{"no-gutters":""}},[r("v-flex",{staticClass:" align-center",attrs:{row:""}},[r("span",{staticClass:"black--text textSize ml-4"},[t._v(t._s(t.table&&t.table.TableName)+"  ")])]),t._v(" "),r("v-flex",{staticClass:"align-center",attrs:{row:""}},[r("v-icon",{attrs:{color:"#B98F38"}},[t._v("\n          group\n        ")]),t._v(" "),r("span",{staticClass:"black--text textSize"},[t._v(t._s(t.playerCount)+" ")])],1),t._v(" "),r("v-flex",{staticClass:"align-center",attrs:{row:""}},[r("v-img",{attrs:{src:"/icon/cb.png","max-height":"20.5","max-width":"20.5"}}),t._v(" "),r("span",{staticClass:"black--text textSize"},[t._v(t._s(t.table&&t.table.bb))])],1),t._v(" "),r("v-flex",{staticClass:"align-center",attrs:{row:""}},[r("v-img",{attrs:{src:"/icon/cp.png","max-height":"20.5","max-width":"20.5"}}),t._v(" "),r("span",{staticClass:"black--text textSize"},[t._v(t._s(t.table&&t.table.pp))])],1),t._v(" "),r("v-flex",{staticClass:"align-center",attrs:{row:""}},[r("v-img",{attrs:{src:"/icon/ct.png","max-height":"20.5","max-width":"20.5"}}),t._v(" "),r("span",{staticClass:"black--text textSize"},[t._v(" "+t._s(t.table&&t.table.tt))])],1),t._v(" "),r("v-flex",{staticStyle:{flex:"0 1 auto","flex-basis":"100px",height:"30px"}},[r("div",{staticClass:"d-flex white--text textSize justify-center align-center",style:t.StateColor},[r("span",{staticClass:"white--text textSize"},[t._v(" "+t._s(t.State))])])])],1):t._e(),t._v(" "),"md6"!=t.PropCardSize?r("v-row",{staticClass:"dashboard-bar",attrs:{"no-gutters":""}},[r("v-flex",{staticClass:" align-center",attrs:{row:""}},[r("span",{staticClass:"black--text textSize ml-4"},[t._v(" "+t._s(t.table&&t.table.TableName)+"  ")])]),t._v(" "),r("v-flex",{staticClass:"align-center",attrs:{row:""}},[r("v-icon",{attrs:{color:"#B98F38"}},[t._v("\n          group\n        ")]),t._v(" "),r("span",{staticClass:"black--text textSize"},[t._v(t._s(t.playerCount))])],1),t._v(" "),r("v-flex",{staticClass:"align-center",attrs:{row:""}},[r("v-img",{attrs:{src:"/icon/cb.png","max-height":"20.5","max-width":"20.5"}}),t._v(" "),r("span",{staticClass:"black--text textSize"},[t._v(t._s(t.table&&t.table.bb))])],1)],1):t._e(),t._v(" "),"md6"!=t.PropCardSize?r("v-row",{staticClass:"dashboard-bar",attrs:{"no-gutters":""}},[r("v-flex",{staticClass:"align-center ml-1",attrs:{row:""}},[r("v-img",{attrs:{src:"/icon/cp.png","max-height":"20.5","max-width":"20.5"}}),t._v(" "),r("span",{staticClass:"black--text textSize"},[t._v(t._s(t.table&&t.table.pp))])],1),t._v(" "),r("v-flex",{staticClass:"align-center",attrs:{row:""}},[r("v-img",{attrs:{src:"/icon/ct.png","max-height":"20.5","max-width":"20.5"}}),t._v(" "),r("span",{staticClass:"black--text textSize"},[t._v(" "+t._s(t.table&&t.table.tt))])],1),t._v(" "),r("v-flex",[r("div",{staticClass:"d-flex white--text textSize justify-center align-center",staticStyle:{background:"#404040",height:"30px"}},[r("span",[t._v(" "+t._s(t.State))])])])],1):t._e(),t._v(" "),r("v-row",{attrs:{"no-gutters":"",dense:""}},[r("div",{style:{height:"md3"==t.PropCardSize?"12vh":"21vh",width:"17%"}},[r("v-img",{attrs:{height:"100%",width:"100%",src:t.imageavatar}},[r("div",{staticClass:"subheading text-center align-center white--text textSize",staticStyle:{"background-color":"rgba(0,0,0,0.5)"}},[t._v("\n            "+t._s(t.nameavatar)+"\n          ")]),t._v(" "),r("v-row",{staticClass:"align-end fill-height",attrs:{"no-gutters":""}},[r("v-col",[r("div",{staticClass:"subheading text-center white--text textSize",staticStyle:{"background-color":"rgba(0,0,0,0.5)"}},[t._v("\n                "+t._s(t.table&&t.table.name)+"\n              ")])])],1)],1)],1),t._v(" "),r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return[r("div",{staticClass:"showing-resulting",style:{height:"md3"==t.PropCardSize?"12vh":"21vh"}},[r("div",{style:{width:"100%",height:"100%","background-image":"url('/icon/"+("md6"==t.PropCardSize?"road_big.png":"md4"==t.PropCardSize?"road_middle.png":"road_small.png")+"')","background-repeat":"no-repeat","background-position":"center","background-size":"100% 100%"}},[r("v-row",{staticStyle:{height:"100%",width:"100%"},attrs:{"no-gutters":""}},["md6"==t.PropCardSize||"md3"==t.PropCardSize||"md4"==t.PropCardSize?r("div",{staticClass:"d-flex align-content-start flex-wrap flex-column",style:{height:"100%",width:"md3"==t.PropCardSize?"100%":"39%"}},t._l(t.histroy,(function(e,n){return r("v-img",{key:n,staticClass:"mt-1",attrs:{src:t.WinImages[e],"max-height":t.max_height,"max-width":t.max_width}})})),1):t._e(),t._v(" "),"md4"==t.PropCardSize||"md6"==t.PropCardSize?r("div",{style:{height:"100%",width:"md4"==t.PropCardSize?"100%":"60%"}},[r("div",{staticStyle:{width:"100%",height:"49%"}}),t._v(" "),r("div",{staticStyle:{width:"100%",height:"26.5%"}}),t._v(" "),r("v-row",{staticStyle:{width:"100%",height:"24.5%"},attrs:{"no-gutters":""}},[r("div",{staticStyle:{width:"50%",height:"100%"}}),t._v(" "),r("div",{staticStyle:{width:"50%",height:"100%"}})])],1):t._e()])],1),t._v(" "),!n||t.show||t.secondshow?t._e():r("div",{staticClass:"d-flex align-center v-card--reveal justify-center #1f180e darken-2 display-3 white--text",staticStyle:{height:"100%",background:"black"}},t._l(t.Games,(function(e,n){return r("div",{key:n,staticClass:" mr-5 "},[r("v-btn",{staticClass:"white--text",attrs:{small:"md3"==t.PropCardSize,large:"md3"==!t.PropCardSize,depressed:"",color:"#5f4d35"},on:{click:function(e){t.show=!0}}},[t._v("\n                "+t._s(t.$t("TABLE."+e.GameCode))+"\n              ")])],1)})),0),t._v(" "),(n?t.show&&n:t.show=!1)?r("div",{staticClass:" #1f180e darken-2 v-card--reveal d-flex justify-center align-center flex-wrap display-3 white--text",staticStyle:{height:"100%",background:"black"}},t._l(t.groups,(function(e,n){return r("v-btn",{key:n,staticClass:"white--text  mr-1",attrs:{small:"md3"==t.PropCardSize,large:"md3"==!t.PropCardSize,depressed:"",color:"#5f4d35",link:""},on:{click:function(r){return t.joinGameTable(t.Games[0].GameID,t.table.TableID,e.GroupID)}}},[t._v("\n              "+t._s(t.numFormat(e.BetSettings[0].PBLL))+" - "+t._s(t.numFormat(e.BetSettings[0].PBUL))+"\n            ")])})),1):t._e(),t._v(" "),(n?t.secondshow&&n:t.secondshow=!1)?r("div",{staticClass:" #1f180e darken-2 v-card--reveal d-flex justify-center align-center flex-wrap display-3 white--text",staticStyle:{height:"100%",background:"black"}},t._l(t.groups,(function(e,n){return r("v-btn",{key:n,staticClass:"white--text mr-1",attrs:{small:"md3"==t.PropCardSize,large:"md3"==!t.PropCardSize,depressed:"",color:"#5f4d35",link:""},on:{click:function(r){return t.joinGameTable(t.Games[0].GameID,t.table.TableID,e.GroupID)}}},[t._v("\n              "+t._s(t.numFormat(e.BetSettings[0].PBLL))+" - "+t._s(t.numFormat(e.BetSettings[0].PBUL))+"\n            ")])})),1):t._e()])]}}])})],1)],1)],1)}),[],!1,null,"791c1b44",null);e.a=component.exports;d()(component,{VBtn:h.a,VCard:v.a,VCol:m.a,VFlex:f.a,VHover:w,VIcon:y.a,VImg:k.a,VRow:z.a})},754:function(t,e,r){"use strict";r.r(e);var n={components:{dashboardCard:r(642).a},data:function(){return{overlay:!0,zIndex:0,projects:[{seri:"C01",name:"SIKEN",user:"123300",bb:"1232200",pp:"2322200",tt:"2020",status:"Dealing"},{seri:"C02",name:"HONGLONG",user:"5200",bb:"1232200",pp:"2322200",tt:"2020",status:"Waiting"},{seri:"C03",name:"KUNHEAR",user:"2200",bb:"1232200",pp:"2322200",tt:"2020",status:"12"},{seri:"C04",name:"CHEA_C",user:"2200",bb:"1232200",pp:"2322200",tt:"2020",status:"Player Win"},{seri:"C05",name:"MAkara",user:"2200",bb:"1232200",pp:"2322200",tt:"2020",status:"Shuffling"},{seri:"C06",name:"HEAT_S",user:"2200",bb:"1232200",pp:"2322200",tt:"2020",status:"Waiting"},{seri:"C07",name:"SVEYNAR",user:"2200",bb:"1232200",pp:"2322200",tt:"2020",status:"12"},{seri:"C08",name:"CHANDA",user:"2200",bb:"1232200",pp:"2322200",tt:"2020",status:"Shuffling"},{seri:"C09",name:"YORNNEN",user:"2200",bb:"1232200",pp:"2322200",tt:"2020",status:"Dealing"},{seri:"C10",name:"PHALLA",user:"2200",bb:"1232200",pp:"2322200",tt:"2020",status:"Waiting"}]}},watch:{overlay:function(t){var e=this;t&&setTimeout((function(){e.overlay=!1}),3e3)}}},o=r(30),l=r(33),c=r.n(l),d=r(233),h=r(235),v=r(617),m=r(245),f=r(591),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"pa-0 ma-0",attrs:{fluid:""}},[r("v-row",{attrs:{"no-gutters":"",dense:""}},[t._l(t.projects,(function(t){return r("dashboardCard",{key:t.name,attrs:{project:t,"prop-card-size":"md6"}})})),t._v(" "),r("v-overlay",{attrs:{"z-index":t.zIndex,value:t.overlay}},[r("v-card",{staticClass:"mr-2",attrs:{height:"250",width:"280",color:"#9e9d9b"}},[r("div",{staticClass:"text-center pt-10"},[r("h3",{staticStyle:{color:"black"}},[t._v("\n            This is overlay\n          ")]),t._v(" "),r("h3",{staticStyle:{color:"black"}},[t._v("\n            dddd\n          ")])]),t._v(" "),r("div",{staticClass:"white--text mt-14 text-center"},[r("v-btn",{attrs:{color:"#876f4d"},on:{click:function(e){t.overlay=!1}}},[t._v("\n            Change\n          ")])],1),t._v(" "),r("div",{staticStyle:{background:"white","margin-left":"7.2vw",height:"22vh",width:"0.1vw","margin-top":"5vh"}}),t._v(" "),r("div",{staticClass:"pa-16 text-center grey lighten-2",class:"rounded-circle",staticStyle:{background:"#3b2e1e"}})])],1)],2)],1)}),[],!1,null,"212791ac",null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:h.a,VContainer:v.a,VOverlay:m.a,VRow:f.a})}}]);