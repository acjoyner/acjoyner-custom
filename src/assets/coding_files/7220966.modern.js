(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{1428:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o={inheritAttrs:!1,props:{duration:{type:[Number,Object],default:300},delay:{type:[Number,Object],default:0},group:Boolean,tag:{type:String,default:"span"},origin:{type:String,default:""},styles:{type:Object,default:()=>({animationFillMode:"both",animationTimingFunction:"ease-out"})}},computed:{componentType(){return this.group?"transition-group":"transition"},hooks(){return{beforeEnter:this.beforeEnter,afterEnter:this.cleanUpStyles,beforeLeave:this.beforeLeave,leave:this.leave,afterLeave:this.cleanUpStyles,...this.$listeners}}},methods:{beforeEnter(t){let e=this.duration.enter?this.duration.enter:this.duration;t.style.animationDuration=`${e}ms`;let n=this.delay.enter?this.delay.enter:this.delay;t.style.animationDelay=`${n}ms`,this.setStyles(t)},cleanUpStyles(t){Object.keys(this.styles).forEach((e=>{this.styles[e]&&(t.style[e]="")})),t.style.animationDuration="",t.style.animationDelay=""},beforeLeave(t){let e=this.duration.leave?this.duration.leave:this.duration;t.style.animationDuration=`${e}ms`;let n=this.delay.leave?this.delay.leave:this.delay;t.style.animationDelay=`${n}ms`,this.setStyles(t)},leave(t){this.setAbsolutePosition(t)},setStyles(t){this.setTransformOrigin(t),Object.keys(this.styles).forEach((e=>{const n=this.styles[e];n&&(t.style[e]=n)}))},setAbsolutePosition(t){return this.group&&(t.style.position="absolute"),this},setTransformOrigin(t){return this.origin&&(t.style.transformOrigin=this.origin),this}}}},2579:function(t,e,n){var content=n(2736);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("042513e8",content,!0,{sourceMap:!1})},2735:function(t,e,n){"use strict";n(2579)},2736:function(t,e,n){var o=n(41)(!1);o.push([t.i,"\n@keyframes fadeIn {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n.fadeIn {\n  animation-name: fadeIn;\n}\n@keyframes fadeOut {\nfrom {\n    opacity: 1;\n}\nto {\n    opacity: 0;\n}\n}\n.fadeOut {\n  animation-name: fadeOut;\n}\n.fade-move {\n  transition: transform .3s ease-out;\n}\n",""]),t.exports=o},2880:function(t,e,n){"use strict";var o={name:"fade-transition",mixins:[n(1428).a]},r=(n(2735),n(8)),component=Object(r.a)(o,(function(){var t=this;return(0,t._self._c)(t.componentType,t._g(t._b({tag:"component",attrs:{tag:t.tag,"enter-active-class":"fadeIn","move-class":"fade-move","leave-active-class":"fadeOut"}},"component",t.$attrs,!1),t.hooks),[t._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},3620:function(t,e,n){"use strict";var o={props:{size:{type:String,default:"1em"}}},r=n(8),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("svg",t._b({staticClass:"ui-svg-inline",attrs:{width:t.size,height:t.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"}},"svg",t.$attrs,!1),[e("path",{attrs:{d:"M20.8,5.7c-2.1-2.8-6-3.4-8.8-1.3C9.5,2.5,6,2.8,3.8,5c-2.4,2.4-2.5,6.4,0,8.9l6.2,6.2c0.5,0.5,1.2,0.8,1.9,0.8c0.7,0,1.4-0.3,1.9-0.8l6.2-6.2C22.4,11.6,22.6,8.2,20.8,5.7z"}})])}),[],!1,null,null,null);e.a=component.exports},4979:function(t,e,n){"use strict";n.r(e);var o=n(3620),r=n(68),l=n(2880),c={components:{UisHeart:o.a,FadeTransition:l.a},i18n:{messages:{en:{made_with:"Made with"},es:{made_with:"Hecho con"},pt:{made_with:"Feito com"}}},data:()=>({timer:null,countryIndex:0,year:Object(r.getYear)(Object(r.parse)(new Date))}),computed:{countries:()=>["San Francisco","Malaysia","India","Brazil","Argentina","Maldives"]},mounted(){this.timer=window.setInterval((()=>{this.countryIndex=(this.countryIndex+1)%this.countries.length}),2e3)},destroyed(){this.timer&&window.clearInterval(this.timer)}},d=n(8),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"secondary-muted"},[t._v("\n  © "+t._s(t.year)+" Design Barn Inc. "+t._s(t.$t("made_with"))+"\n  "),e("span",{staticClass:"text-danger",attrs:{slot:"love"},slot:"love"},[e("uis-heart",{attrs:{size:"16"}})],1),t._v("\n  in\n  "),e("fade-transition",[e("span",{key:t.countryIndex,staticClass:"position-absolute ml-2"},[t._v(t._s(t.countries[t.countryIndex]))])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);