(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-8404"],{Tfi7:function(t,e,a){"use strict";a.r(e);var l=a("rY9o"),r=a("XJYT"),n={data:function(){return{listLoading:!0,list:null}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.listLoading=!0,Object(l.b)({time:"2019-02-21"}).then(function(e){t.listLoading=!1,e.status?t.list=e.data:Object(r.Message)({message:e.message,type:"error",duration:1e3})})}}},s=a("KHd+"),i=Object(s.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.list,border:""}},[a("el-table-column",{attrs:{prop:"id",label:"id",width:"90",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"startTime",label:"time",width:"180",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"data[0].request-client-ip",label:"ip",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"data[0].request-method",label:"method"}}),t._v(" "),a("el-table-column",{attrs:{prop:"data[0].request-originalUrl",label:"originalUrl",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"data[0].request-query",label:"query"}}),t._v(" "),a("el-table-column",{attrs:{prop:"data[0].response-status",label:"status",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"data[0].response-time",label:"time",width:"60"}}),t._v(" "),a("el-table-column",{attrs:{prop:"data[0].user-agent",label:"agent",width:"400"}}),t._v(" "),a("el-table-column",{attrs:{prop:"level.levelStr",label:"level",width:"90"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{type:"INFO"==e.row.level.levelStr?"success":"danger"}},[t._v(t._s(e.row.level.levelStr))])]}}])})],1)],1)},[],!1,null,null,null);i.options.__file="index.vue";e.default=i.exports},rY9o:function(t,e,a){"use strict";a.d(e,"b",function(){return r}),a.d(e,"a",function(){return n});var l=a("t3Un");function r(t){return Object(l.a)({url:"api/getReslog",method:"get",params:t})}function n(t){return Object(l.a)({url:"api/getErrorlog",method:"get",params:t})}}}]);