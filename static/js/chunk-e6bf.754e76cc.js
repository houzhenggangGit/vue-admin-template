(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-e6bf"],{"9hUH":function(n,e,t){"use strict";var o=t("j7wR");t.n(o).a},c11S:function(n,e,t){"use strict";var o=t("gTgX");t.n(o).a},gTgX:function(n,e,t){},j7wR:function(n,e,t){},ntYl:function(n,e,t){"use strict";t.r(e);var o=t("Yfch"),i={name:"Login",data:function(){return{loginForm:{username:"admin",password:"admin"},loginRules:{username:[{required:!0,trigger:"blur",validator:function(n,e,t){Object(o.a)(e)?t():t(new Error("请输入正确的用户名"))}}],password:[{required:!0,trigger:"blur",validator:function(n,e,t){e.length<5?t(new Error("密码不能小于5位")):t()}}]},loading:!1,pwdType:"password",redirect:void 0}},watch:{$route:{handler:function(n){this.redirect=n.query&&n.query.redirect},immediate:!0}},methods:{showPwd:function(){"password"===this.pwdType?this.pwdType="":this.pwdType="password"},handleLogin:function(){var n=this;this.$refs.loginForm.validate(function(e){if(!e)return console.log("error submit!!"),!1;n.loading=!0,n.$store.dispatch("Login",n.loginForm).then(function(){n.loading=!1,n.$router.push({path:n.redirect||"/"})}).catch(function(){n.loading=!1})})}}},r=(t("c11S"),t("9hUH"),t("KHd+")),s=Object(r.a)(i,function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"login-container"},[t("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:n.loginForm,rules:n.loginRules,"auto-complete":"on","label-position":"left"}},[t("h3",{staticClass:"title"},[n._v("vue-admin-template")]),n._v(" "),t("el-form-item",{attrs:{prop:"username"}},[t("span",{staticClass:"svg-container"},[t("svg-icon",{attrs:{"icon-class":"user"}})],1),n._v(" "),t("el-input",{attrs:{name:"username",type:"text","auto-complete":"on",placeholder:"username"},model:{value:n.loginForm.username,callback:function(e){n.$set(n.loginForm,"username",e)},expression:"loginForm.username"}})],1),n._v(" "),t("el-form-item",{attrs:{prop:"password"}},[t("span",{staticClass:"svg-container"},[t("svg-icon",{attrs:{"icon-class":"password"}})],1),n._v(" "),t("el-input",{attrs:{type:n.pwdType,name:"password","auto-complete":"on",placeholder:"password"},nativeOn:{keyup:function(e){return"button"in e||!n._k(e.keyCode,"enter",13,e.key,"Enter")?n.handleLogin(e):null}},model:{value:n.loginForm.password,callback:function(e){n.$set(n.loginForm,"password",e)},expression:"loginForm.password"}}),n._v(" "),t("span",{staticClass:"show-pwd",on:{click:n.showPwd}},[t("svg-icon",{attrs:{"icon-class":"eye"}})],1)],1),n._v(" "),t("el-form-item",[t("el-button",{staticStyle:{width:"100%"},attrs:{loading:n.loading,type:"primary"},nativeOn:{click:function(e){return e.preventDefault(),n.handleLogin(e)}}},[n._v("\n        Sign in\n      ")])],1),n._v(" "),t("div",{staticClass:"tips"},[t("span",{staticStyle:{"margin-right":"20px"}},[n._v("username: admin")]),n._v(" "),t("span",[n._v(" password: admin")])])],1)],1)},[],!1,null,"bb9fc4a2",null);s.options.__file="index.vue";e.default=s.exports}}]);