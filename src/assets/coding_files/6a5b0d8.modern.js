(window.webpackJsonp=window.webpackJsonp||[]).push([[389],{3161:function(t,e,o){var content=o(4535);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(42).default)("7a0948a1",content,!0,{sourceMap:!1})},4534:function(t,e,o){"use strict";var n=o(3161),r=o.n(n);o.d(e,"default",(function(){return r.a}))},4535:function(t,e,o){var n=o(41)(!1);n.push([t.i,".bounce-leave-active{opacity:1;clip-path:circle(600px at 25% 25%);transition:1s clip-path cubic-bezier(0.5, 0, 0, 1),0.22s opacity ease-in-out 0.3s,0.22s box-shadow ease-in 0.2s !important;will-change:opacity, clip-path, box-shadow}.bounce-leave-to{opacity:0;clip-path:circle(32px at bottom 32px left 32px) !important;box-shadow:none !important}.container_hP6iH{position:fixed;z-index:1030;background-color:#fff;bottom:1rem;left:1rem;width:320px;box-shadow:0 2rem 9rem rgba(10,3,89,0.3),0 0 0 0.1rem rgba(0,0,0,0.02)}.container_hP6iH .close_5IuPo{position:absolute;top:0;right:0;flex-shrink:0;margin-left:1rem;cursor:pointer;border:0}\n",""]),n.locals={container:"container_hP6iH",close:"close_5IuPo"},t.exports=n},4955:function(t,e,o){"use strict";o.r(e);var n={mounted(){this.$store.state.cookieAuthentication||setTimeout((()=>{this.$store.commit("settings/setCookieAuth",!0)}),5e3)}},r=o(4534),c=o(8);var component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("transition",{attrs:{name:"bounce"}},[t.$store.state.cookieAuthentication?t._e():e("div",{class:["font-size-sm rounded p-4",t.$style.container]},[e("p",{staticClass:"mb-3"},[t._v("\n      We care about you data, and we’ll be using cookies to make your\n      experience better.\n    ")]),t._v(" "),e("div",{staticClass:"d-flex align-items-center justify-content-between"},[e("nuxt-link",{directives:[{name:"track",rawName:"v-track",value:{data:{route_path:t.$route.path,route_name:t.$route.name,location:"cookie",item:"privacy_policy"}},expression:"{\n          data: {\n            route_path: $route.path,\n            route_name: $route.name,\n            location: 'cookie',\n            item: 'privacy_policy',\n          },\n        }"}],attrs:{to:{name:"legal-slug",params:{slug:"privacy-policy"}},target:"_blank",rel:"nofollow"}},[t._v("Privacy Policy")])],1)])])}),[],!1,(function(t){this.$style=r.default.locals||r.default}),null,null);e.default=component.exports}}]);