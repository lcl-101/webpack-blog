(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-418b"],{"6EsW":function(t,e,a){"use strict";a.r(e);var n=a("rY9o"),l=a("XJYT"),r={data:function(){return{listLoading:!0,list:null}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.listLoading=!0,Object(n.c)("get","").then(function(e){t.listLoading=!1,e.status?t.list=e.result:Object(l.Message)({message:e.errMessage,type:"error",duration:1e3})})}}},o=a("KHd+"),i=Object(o.a)(r,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.list,border:""}},[a("el-table-column",{attrs:{prop:"id",label:"id",width:"180",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"name",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"code",label:"code"}}),t._v(" "),a("el-table-column",{attrs:{prop:"contentId",label:"contentId"}}),t._v(" "),a("el-table-column",{attrs:{prop:"contentName",label:"contentName"}}),t._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"createTime"}}),t._v(" "),a("el-table-column",{attrs:{prop:"modifyTime",label:"modifyTime"}}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"status"}}),t._v(" "),a("el-table-column",{attrs:{prop:"type",label:"type"}})],1)],1)},[],!1,null,null,null);i.options.__file="index.vue";e.default=i.exports},rY9o:function(t,e,a){"use strict";a.d(e,"a",function(){return l}),a.d(e,"c",function(){return r}),a.d(e,"b",function(){return o});var n=a("t3Un");function l(t){return Object(n.a)({url:"/table/list",method:"get",params:t})}function r(t,e){return Object(n.a)({url:"api/Admin/Config/event",method:t,params:e})}function o(t){return Object(n.a)({url:"api/getReslog",method:"get",params:t})}}}]);