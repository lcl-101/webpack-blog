(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1c65"],{MlaA:function(e,n,t){},XWoO:function(e,n,t){"use strict";var o=t("MlaA");t.n(o).a},c11S:function(e,n,t){"use strict";var o=t("gTgX");t.n(o).a},gTgX:function(e,n,t){},ntYl:function(e,n,t){"use strict";t.r(n);var o=t("QbLZ"),r=t.n(o);var s=t("XJYT"),i=t("L2JU"),a={name:"Login",computed:r()({},Object(i.b)(["message"])),data:function(){return{loginForm:{username:"",password:""},loginRules:{username:[{required:!0,trigger:"blur",validator:function(e,n,t){!function(e){return["admin","editor","longsyc"].indexOf(e.trim())>=0}(n)?t(new Error("请输入正确的用户名")):t()}}],password:[{required:!0,trigger:"blur",validator:function(e,n,t){n.length<5?t(new Error("密码不能小于5位")):t()}}]},loading:!1,pwdType:"password",redirect:void 0}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},methods:{showPwd:function(){"password"===this.pwdType?this.pwdType="":this.pwdType="password"},handleLogin:function(){var e=this;this.$refs.loginForm.validate(function(n){if(!n)return console.log("error submit!!"),!1;e.loading=!0,e.$store.dispatch("Login",e.loginForm).then(function(n){e.loading=!1,e.$router.push({path:e.redirect||"/"}),e.message&&s.Message.error(e.message)}).catch(function(n){e.loading=!1})})}}},l=(t("c11S"),t("XWoO"),t("KHd+")),c=Object(l.a)(a,function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"login-container"},[t("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"on","label-position":"left"}},[t("h3",{staticClass:"title"},[e._v("lcl101-admin")]),e._v(" "),t("el-form-item",{attrs:{prop:"username"}},[t("span",{staticClass:"svg-container"},[t("svg-icon",{attrs:{"icon-class":"user"}})],1),e._v(" "),t("el-input",{attrs:{name:"username",type:"text","auto-complete":"on",placeholder:"username"},model:{value:e.loginForm.username,callback:function(n){e.$set(e.loginForm,"username",n)},expression:"loginForm.username"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"password"}},[t("span",{staticClass:"svg-container"},[t("svg-icon",{attrs:{"icon-class":"password"}})],1),e._v(" "),t("el-input",{attrs:{type:e.pwdType,name:"password","auto-complete":"on",placeholder:"password"},nativeOn:{keyup:function(n){return"button"in n||!e._k(n.keyCode,"enter",13,n.key,"Enter")?e.handleLogin(n):null}},model:{value:e.loginForm.password,callback:function(n){e.$set(e.loginForm,"password",n)},expression:"loginForm.password"}}),e._v(" "),t("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[t("svg-icon",{attrs:{"icon-class":"eye"}})],1)],1),e._v(" "),t("el-form-item",[t("el-button",{staticStyle:{width:"100%"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(n){return n.preventDefault(),e.handleLogin(n)}}},[e._v("\n        Sign in\n      ")])],1)],1)],1)},[],!1,null,"1bf9f8ee",null);c.options.__file="index.vue";n.default=c.exports}}]);