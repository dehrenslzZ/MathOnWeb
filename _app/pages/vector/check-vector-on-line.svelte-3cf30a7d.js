import{S as W,i as Y,s as Z,t as H,h as J,g as Q,j as R,d,e as E,k as O,l as A,a as C,b as I,n as S,o as y,f as B,K as p,p as T,L as x,y as j,v as q,w as K,M as ee}from"../../chunks/index-81c2a6a4.js";import{V as M}from"../../chunks/vector-input-cd83b917.js";import{g as X,c as z}from"../../chunks/vector-dependency-eabd3094.js";import{D as N}from"../../chunks/defaults-provider-d622454b.js";import{X as te}from"../../chunks/runtime.esm-f7ca3b2d.js";import"../../chunks/tooltip-695cd802.js";import"../../chunks/theme-68f09822.js";import"../../chunks/index-c120acd1.js";function G(n){let r;return{c(){r=H(n[0])},l(e){r=J(e,n[0])},m(e,o){Q(e,r,o)},p(e,o){o&1&&R(r,e[0])},d(e){e&&d(r)}}}function oe(n){let r,e,o,s,h,a,D,i,V,u,_,f,$=n[1]("general.calculate")+"",L,P,g,b,U,F;s=new M({props:{vector:n[2],tooltip:n[1]("vector.is-vector-on-line.tooltip.vector")}}),a=new M({props:{vector:n[3],tooltip:n[1]("vector.is-vector-on-line.tooltip.vector")}}),i=new M({props:{vector:n[4],tooltip:n[1]("vector.is-vector-on-line.tooltip.vector")}}),u=new M({props:{vector:n[5],tooltip:n[1]("vector.is-vector-on-line.tooltip.vector")}});let l=n[0]!=""&&G(n);return{c(){r=E("div"),e=E("div"),o=E("div"),O(s.$$.fragment),h=A(),O(a.$$.fragment),D=A(),O(i.$$.fragment),V=A(),O(u.$$.fragment),_=A(),f=E("button"),L=H($),P=A(),g=E("div"),l&&l.c(),this.h()},l(t){r=C(t,"DIV",{class:!0});var c=I(r);e=C(c,"DIV",{class:!0});var m=I(e);o=C(m,"DIV",{class:!0});var v=I(o);S(s.$$.fragment,v),h=y(v),S(a.$$.fragment,v),D=y(v),S(i.$$.fragment,v),V=y(v),S(u.$$.fragment,v),v.forEach(d),_=y(m),f=C(m,"BUTTON",{class:!0});var k=I(f);L=J(k,$),k.forEach(d),P=y(m),g=C(m,"DIV",{class:!0});var w=I(g);l&&l.l(w),w.forEach(d),m.forEach(d),c.forEach(d),this.h()},h(){B(o,"class","vector-inline svelte-1a7ihn6"),B(f,"class","calculate-button svelte-1a7ihn6"),B(g,"class","result-form svelte-1a7ihn6"),B(e,"class","container svelte-1a7ihn6"),B(r,"class","centered svelte-1a7ihn6")},m(t,c){Q(t,r,c),p(r,e),p(e,o),T(s,o,null),p(o,h),T(a,o,null),p(o,D),T(i,o,null),p(o,V),T(u,o,null),p(e,_),p(e,f),p(f,L),p(e,P),p(e,g),l&&l.m(g,null),b=!0,U||(F=x(f,"click",n[7]),U=!0)},p(t,[c]){const m={};c&2&&(m.tooltip=t[1]("vector.is-vector-on-line.tooltip.vector")),s.$set(m);const v={};c&2&&(v.tooltip=t[1]("vector.is-vector-on-line.tooltip.vector")),a.$set(v);const k={};c&2&&(k.tooltip=t[1]("vector.is-vector-on-line.tooltip.vector")),i.$set(k);const w={};c&2&&(w.tooltip=t[1]("vector.is-vector-on-line.tooltip.vector")),u.$set(w),(!b||c&2)&&$!==($=t[1]("general.calculate")+"")&&R(L,$),t[0]!=""?l?l.p(t,c):(l=G(t),l.c(),l.m(g,null)):l&&(l.d(1),l=null)},i(t){b||(j(s.$$.fragment,t),j(a.$$.fragment,t),j(i.$$.fragment,t),j(u.$$.fragment,t),b=!0)},o(t){q(s.$$.fragment,t),q(a.$$.fragment,t),q(i.$$.fragment,t),q(u.$$.fragment,t),b=!1},d(t){t&&d(r),K(s),K(a),K(i),K(u),l&&l.d(),U=!1,F()}}}function ne(n,r,e){let o;ee(n,te,_=>e(1,o=_));let s=new N().getVectorDefault(),h=new N().getVectorDefault(),a=new N().getVectorDefault(),D=new N().getVectorDefault(),i="";function V(){let _=X(s,h),f=X(s,a),$=X(s,D);z(_,f)?e(0,i=`D ${o("vector.is-vector-on-line.not-on-line")}`):z(f,$)?e(0,i=`B ${o("vector.is-vector-on-line.not-on-line")}`):z(_,$)?e(0,i=`C ${o("vector.is-vector-on-line.not-on-line")}`):e(0,i=`A ${o("vector.is-vector-on-line.not-on-line")}`)}return[i,o,s,h,a,D,V,()=>V()]}class pe extends W{constructor(r){super(),Y(this,r,ne,oe,Z,{})}}export{pe as default};
