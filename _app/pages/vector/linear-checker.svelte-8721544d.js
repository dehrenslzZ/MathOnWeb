import{S as F,i as G,s as H,t as P,h as U,g as X,j as A,d as m,e as k,k as T,l as w,a as b,b as q,n as C,o as z,f as y,K as d,p as S,L as J,y as j,v as B,w as K,M as Q}from"../../chunks/index-81c2a6a4.js";import{D as M}from"../../chunks/defaults-provider-d622454b.js";import{V as N}from"../../chunks/vector-input-cd83b917.js";import{c as R}from"../../chunks/vector-dependency-eabd3094.js";import{X as W}from"../../chunks/runtime.esm-f7ca3b2d.js";import"../../chunks/tooltip-695cd802.js";import"../../chunks/theme-68f09822.js";import"../../chunks/index-c120acd1.js";function O(l){let r;return{c(){r=P(l[0])},l(e){r=U(e,l[0])},m(e,n){X(e,r,n)},p(e,n){n&1&&A(r,e[0])},d(e){e&&m(r)}}}function Y(l){let r,e,n,s,_,o,h,f,i=l[1]("general.calculate")+"",g,D,u,$,V,E;s=new N({props:{vector:l[2],tooltip:l[1]("vector.linear-dependency.tooltip.vector-a")}}),o=new N({props:{vector:l[3],tooltip:l[1]("vector.linear-dependency.tooltip.vector-b")}});let a=l[0]!=""&&O(l);return{c(){r=k("div"),e=k("div"),n=k("div"),T(s.$$.fragment),_=w(),T(o.$$.fragment),h=w(),f=k("button"),g=P(i),D=w(),u=k("div"),a&&a.c(),this.h()},l(t){r=b(t,"DIV",{class:!0});var c=q(r);e=b(c,"DIV",{class:!0});var p=q(e);n=b(p,"DIV",{class:!0});var v=q(n);C(s.$$.fragment,v),_=z(v),C(o.$$.fragment,v),v.forEach(m),h=z(p),f=b(p,"BUTTON",{class:!0});var I=q(f);g=U(I,i),I.forEach(m),D=z(p),u=b(p,"DIV",{class:!0});var L=q(u);a&&a.l(L),L.forEach(m),p.forEach(m),c.forEach(m),this.h()},h(){y(n,"class","vector-inline svelte-zt2kqq"),y(f,"class","calculate-button svelte-zt2kqq"),y(u,"class","result-form svelte-zt2kqq"),y(e,"class","container svelte-zt2kqq"),y(r,"class","centered svelte-zt2kqq")},m(t,c){X(t,r,c),d(r,e),d(e,n),S(s,n,null),d(n,_),S(o,n,null),d(e,h),d(e,f),d(f,g),d(e,D),d(e,u),a&&a.m(u,null),$=!0,V||(E=J(f,"click",l[5]),V=!0)},p(t,[c]){const p={};c&2&&(p.tooltip=t[1]("vector.linear-dependency.tooltip.vector-a")),s.$set(p);const v={};c&2&&(v.tooltip=t[1]("vector.linear-dependency.tooltip.vector-b")),o.$set(v),(!$||c&2)&&i!==(i=t[1]("general.calculate")+"")&&A(g,i),t[0]!=""?a?a.p(t,c):(a=O(t),a.c(),a.m(u,null)):a&&(a.d(1),a=null)},i(t){$||(j(s.$$.fragment,t),j(o.$$.fragment,t),$=!0)},o(t){B(s.$$.fragment,t),B(o.$$.fragment,t),$=!1},d(t){t&&m(r),K(s),K(o),a&&a.d(),V=!1,E()}}}function Z(l,r,e){let n;Q(l,W,i=>e(1,n=i));let s=new M().getVectorDefault(),_=new M().getVectorDefault(),o="";function h(i,g){R(i,g)?e(0,o=n("vector.linear-dependency.is-dependent")):e(0,o=n("vector.linear-dependency.is-independent"))}return[o,n,s,_,h,()=>h(s,_)]}class se extends F{constructor(r){super(),G(this,r,Z,Y,H,{})}}export{se as default};
