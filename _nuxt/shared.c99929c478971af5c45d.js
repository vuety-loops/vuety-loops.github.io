webpackJsonp([8],{A9xe:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("w08F"),a=n("Ky71"),o=n("VU/8"),i=o(r.a,a.a,null,null,null);e.default=i.exports},Ky71:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{class:["navbar",{"navbar-inverse":"inverse"==t.type,"navbar-default":"default"==t.type,"navbar-fixed-top":"top"===t.placement,"navbar-fixed-bottom":"bottom"===t.placement,"navbar-static-top":"static"===t.placement}]},[n("div",{class:t.fluid?"container-fluid":"container"},[n("div",{staticClass:"navbar-header"},[n("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","aria-expanded":"false"},on:{click:function(e){e.preventDefault(),t.toggleCollapse(e)}}},[n("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),n("span",{staticClass:"icon-bar"}),n("span",{staticClass:"icon-bar"}),n("span",{staticClass:"icon-bar"})]),t._t("collapse"),t._t("brand")],2),n("div",{class:["navbar-collapse",{collapse:t.collapsed}]},[n("ul",{staticClass:"nav navbar-nav"},[t._t("default")],2),n("ul",{staticClass:"nav navbar-nav navbar-right"},[t._t("right")],2)])])])},a=[],o={render:r,staticRenderFns:a};e.a=o},W2nU:function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function a(t){if(u===setTimeout)return setTimeout(t,0);if((u===n||!u)&&setTimeout)return u=setTimeout,setTimeout(t,0);try{return u(t,0)}catch(e){try{return u.call(null,t,0)}catch(e){return u.call(this,t,0)}}}function o(t){if(f===clearTimeout)return clearTimeout(t);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function i(){h&&d&&(h=!1,d.length?v=d.concat(v):b=-1,v.length&&s())}function s(){if(!h){var t=a(i);h=!0;for(var e=v.length;e;){for(d=v,v=[];++b<e;)d&&d[b].run();b=-1,e=v.length}d=null,h=!1,o(t)}}function l(t,e){this.fun=t,this.array=e}function c(){}var u,f,p=t.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:n}catch(t){u=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(t){f=r}}();var d,v=[],h=!1,b=-1;p.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];v.push(new l(t,e)),1!==v.length||h||a(s)},l.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.prependListener=c,p.prependOnceListener=c,p.listeners=function(t){return[]},p.binding=function(t){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(t){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},w08F:function(t,e,n){"use strict";(function(t){e.a={name:"toolbar",data:function(){return{id:"bs-example-navbar-collapse-1",collapsed:!0,styles:{}}},props:{type:{type:String,default:function(){return"default"}},placement:{type:String,default:function(){return"top"}},fluid:{type:Boolean,default:!1}},methods:{toggleCollapse:function(){this.collapsed=!this.collapsed}},mounted:function(){this._navbar=!0,console.log("Browser Process"),console.log(t)},computed:{slots:function(){return this._slotContents}}}}).call(e,n("W2nU"))}});
//# sourceMappingURL=shared.c99929c478971af5c45d.js.map