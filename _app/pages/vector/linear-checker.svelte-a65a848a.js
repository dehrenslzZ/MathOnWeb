import{S as G,i as H,s as K,t as L,g as S,f as q,h as B,d as v,e as $,j as F,k as j,c as k,a as b,m as J,n as w,b as D,E as u,o as N,F as M,x as O,u as P,v as U,J as Q,X as R}from"../../chunks/vendor-894bca97.js";import{D as X}from"../../chunks/defaults-provider-d622454b.js";import{V as z}from"../../chunks/vector-input-c960c268.js";import{c as W}from"../../chunks/vector-dependency-eabd3094.js";function A(r){let n;return{c(){n=L(r[0])},l(e){n=S(e,r[0])},m(e,t){q(e,n,t)},p(e,t){t&1&&B(n,e[0])},d(e){e&&v(n)}}}function Y(r){let n,e,t,c,p,l,m,i,o=r[1]("general.calculate")+"",_,V,d,g,E,I;c=new z({props:{vector:r[2]}}),l=new z({props:{vector:r[3]}});let s=r[0]!=""&&A(r);return{c(){n=$("div"),e=$("div"),t=$("div"),F(c.$$.fragment),p=j(),F(l.$$.fragment),m=j(),i=$("button"),_=L(o),V=j(),d=$("div"),s&&s.c(),this.h()},l(a){n=k(a,"DIV",{class:!0});var f=b(n);e=k(f,"DIV",{class:!0});var h=b(e);t=k(h,"DIV",{class:!0});var y=b(t);J(c.$$.fragment,y),p=w(y),J(l.$$.fragment,y),y.forEach(v),m=w(h),i=k(h,"BUTTON",{class:!0});var T=b(i);_=S(T,o),T.forEach(v),V=w(h),d=k(h,"DIV",{class:!0});var C=b(d);s&&s.l(C),C.forEach(v),h.forEach(v),f.forEach(v),this.h()},h(){D(t,"class","vector-inline svelte-1luo396"),D(i,"class","calculate-button svelte-1luo396"),D(d,"class","result-form svelte-1luo396"),D(e,"class","container svelte-1luo396"),D(n,"class","centered svelte-1luo396")},m(a,f){q(a,n,f),u(n,e),u(e,t),N(c,t,null),u(t,p),N(l,t,null),u(e,m),u(e,i),u(i,_),u(e,V),u(e,d),s&&s.m(d,null),g=!0,E||(I=M(i,"click",r[5]),E=!0)},p(a,[f]){(!g||f&2)&&o!==(o=a[1]("general.calculate")+"")&&B(_,o),a[0]!=""?s?s.p(a,f):(s=A(a),s.c(),s.m(d,null)):s&&(s.d(1),s=null)},i(a){g||(O(c.$$.fragment,a),O(l.$$.fragment,a),g=!0)},o(a){P(c.$$.fragment,a),P(l.$$.fragment,a),g=!1},d(a){a&&v(n),U(c),U(l),s&&s.d(),E=!1,I()}}}function Z(r,n,e){let t;Q(r,R,o=>e(1,t=o));let c=new X().getVectorDefault(),p=new X().getVectorDefault(),l="";function m(o,_){W(o,_)?e(0,l=t("vector.linear-dependency.is-dependent")):e(0,l=t("vector.linear-dependency.is-independent"))}return[l,t,c,p,m,()=>m(c,p)]}class se extends G{constructor(n){super();H(this,n,Z,Y,K,{})}}export{se as default};
