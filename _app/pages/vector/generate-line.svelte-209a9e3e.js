import{S as A,i as F,s as H,t as O,h as P,g as U,j as X,d as _,e as h,k as S,l as y,a as k,b as q,n as T,o as w,f as V,K as u,p as j,L as J,y as B,v as C,w as G,M as Q}from"../../chunks/index-81c2a6a4.js";import{D as K}from"../../chunks/defaults-provider-d622454b.js";import{V as M}from"../../chunks/vector-input-cd83b917.js";import{g as R}from"../../chunks/vector-dependency-eabd3094.js";import{X as W}from"../../chunks/runtime.esm-f7ca3b2d.js";import"../../chunks/tooltip-695cd802.js";import"../../chunks/theme-68f09822.js";import"../../chunks/index-c120acd1.js";function N(l){let o;return{c(){o=O(l[0])},l(e){o=P(e,l[0])},m(e,n){U(e,o,n)},p(e,n){n&1&&X(o,e[0])},d(e){e&&_(o)}}}function Y(l){let o,e,n,a,d,s,$,f,i=l[1]("general.calculate")+"",b,D,p,g,z,E;a=new M({props:{vector:l[2],tooltip:l[1]("vector.get-vector-line.tooltip.vector")}}),s=new M({props:{vector:l[3],tooltip:l[1]("vector.get-vector-line.tooltip.vector")}});let r=l[0]!=""&&N(l);return{c(){o=h("div"),e=h("div"),n=h("div"),S(a.$$.fragment),d=y(),S(s.$$.fragment),$=y(),f=h("button"),b=O(i),D=y(),p=h("div"),r&&r.c(),this.h()},l(t){o=k(t,"DIV",{class:!0});var c=q(o);e=k(c,"DIV",{class:!0});var v=q(e);n=k(v,"DIV",{class:!0});var m=q(n);T(a.$$.fragment,m),d=w(m),T(s.$$.fragment,m),m.forEach(_),$=w(v),f=k(v,"BUTTON",{class:!0});var I=q(f);b=P(I,i),I.forEach(_),D=w(v),p=k(v,"DIV",{class:!0});var L=q(p);r&&r.l(L),L.forEach(_),v.forEach(_),c.forEach(_),this.h()},h(){V(n,"class","vector-inline svelte-zt2kqq"),V(f,"class","calculate-button svelte-zt2kqq"),V(p,"class","result-form svelte-zt2kqq"),V(e,"class","container svelte-zt2kqq"),V(o,"class","centered svelte-zt2kqq")},m(t,c){U(t,o,c),u(o,e),u(e,n),j(a,n,null),u(n,d),j(s,n,null),u(e,$),u(e,f),u(f,b),u(e,D),u(e,p),r&&r.m(p,null),g=!0,z||(E=J(f,"click",l[5]),z=!0)},p(t,[c]){const v={};c&2&&(v.tooltip=t[1]("vector.get-vector-line.tooltip.vector")),a.$set(v);const m={};c&2&&(m.tooltip=t[1]("vector.get-vector-line.tooltip.vector")),s.$set(m),(!g||c&2)&&i!==(i=t[1]("general.calculate")+"")&&X(b,i),t[0]!=""?r?r.p(t,c):(r=N(t),r.c(),r.m(p,null)):r&&(r.d(1),r=null)},i(t){g||(B(a.$$.fragment,t),B(s.$$.fragment,t),g=!0)},o(t){C(a.$$.fragment,t),C(s.$$.fragment,t),g=!1},d(t){t&&_(o),G(a),G(s),r&&r.d(),z=!1,E()}}}function Z(l,o,e){let n;Q(l,W,i=>e(1,n=i));let a=new K().getVectorDefault(),d=new K().getVectorDefault(),s="";function $(){let i=R(a,d);e(0,s=`(${a.x}|${a.y}|${a.z}) + r(${i.x}|${i.y}|${i.z})`)}return[s,n,a,d,$,()=>$()]}class se extends A{constructor(o){super(),F(this,o,Z,Y,H,{})}}export{se as default};
