import{S as H,i as J,s as K,e as c,t as N,k as E,c as o,a as y,g as T,d as h,n as I,b as r,f as L,E as a,Z as $,F,a3 as P,D as M,_ as Q,a0 as R,a1 as W,j as X,m as Y,o as x,a2 as ee,h as te,x as ne,u as se,v as le}from"../../chunks/vendor-894bca97.js";import{D as ae}from"../../chunks/defaults-provider-d622454b.js";import{c as ie}from"../../chunks/ncr-calculator-b8391fd4.js";import"../../chunks/custom-math-d14d206d.js";function O(n){return ie({n:n.n,k:n.k})*n.p**n.k*(1-n.p)**(n.n-n.k)}function ue(n){let t,s,e,m,b,i,d,p,v,V,D,l,q,u,k,U,w,g,S,Z;return{c(){t=c("div"),s=c("div"),e=c("p"),m=N("n:"),b=E(),i=c("input"),d=E(),p=c("div"),v=c("p"),V=N("p:"),D=E(),l=c("input"),q=E(),u=c("div"),k=c("p"),U=N("k:"),w=E(),g=c("input"),this.h()},l(_){t=o(_,"DIV",{class:!0});var f=y(t);s=o(f,"DIV",{class:!0});var j=y(s);e=o(j,"P",{class:!0});var z=y(e);m=T(z,"n:"),z.forEach(h),b=I(j),i=o(j,"INPUT",{type:!0,class:!0}),j.forEach(h),d=I(f),p=o(f,"DIV",{class:!0});var C=y(p);v=o(C,"P",{class:!0});var A=y(v);V=T(A,"p:"),A.forEach(h),D=I(C),l=o(C,"INPUT",{type:!0,class:!0}),C.forEach(h),q=I(f),u=o(f,"DIV",{class:!0});var B=y(u);k=o(B,"P",{class:!0});var G=y(k);U=T(G,"k:"),G.forEach(h),w=I(B),g=o(B,"INPUT",{type:!0,class:!0}),B.forEach(h),f.forEach(h),this.h()},h(){r(e,"class","svelte-1qycpq0"),r(i,"type","number"),r(i,"class","ncr-input-field svelte-1qycpq0"),r(s,"class","benulli-input-container svelte-1qycpq0"),r(v,"class","svelte-1qycpq0"),r(l,"type","number"),r(l,"class","ncr-input-field svelte-1qycpq0"),r(p,"class","benulli-input-container svelte-1qycpq0"),r(k,"class","svelte-1qycpq0"),r(g,"type","number"),r(g,"class","ncr-input-field svelte-1qycpq0"),r(u,"class","benulli-input-container svelte-1qycpq0"),r(t,"class","benulli-input svelte-1qycpq0")},m(_,f){L(_,t,f),a(t,s),a(s,e),a(e,m),a(s,b),a(s,i),$(i,n[0].n),a(t,d),a(t,p),a(p,v),a(v,V),a(p,D),a(p,l),$(l,n[0].p),a(t,q),a(t,u),a(u,k),a(k,U),a(u,w),a(u,g),$(g,n[0].k),S||(Z=[F(i,"input",n[1]),F(l,"input",n[2]),F(g,"input",n[3])],S=!0)},p(_,[f]){f&1&&P(i.value)!==_[0].n&&$(i,_[0].n),f&1&&P(l.value)!==_[0].p&&$(l,_[0].p),f&1&&P(g.value)!==_[0].k&&$(g,_[0].k)},i:M,o:M,d(_){_&&h(t),S=!1,Q(Z)}}}function re(n,t,s){let{input:e}=t;function m(){e.n=P(this.value),s(0,e)}function b(){e.p=P(this.value),s(0,e)}function i(){e.k=P(this.value),s(0,e)}return n.$$set=d=>{"input"in d&&s(0,e=d.input)},[e,m,b,i]}class pe extends H{constructor(t){super();J(this,t,re,ue,K,{input:0})}}function ce(n){let t,s,e,m,b,i,d=O(n[0])+"",p,v;function V(l){n[1](l)}let D={};return n[0]!==void 0&&(D.input=n[0]),e=new pe({props:D}),R.push(()=>W(e,"input",V)),{c(){t=c("div"),s=c("div"),X(e.$$.fragment),b=E(),i=c("div"),p=N(d),this.h()},l(l){t=o(l,"DIV",{class:!0});var q=y(t);s=o(q,"DIV",{class:!0});var u=y(s);Y(e.$$.fragment,u),b=I(u),i=o(u,"DIV",{class:!0});var k=y(i);p=T(k,d),k.forEach(h),u.forEach(h),q.forEach(h),this.h()},h(){r(i,"class","result-form svelte-8xo9te"),r(s,"class","container svelte-8xo9te"),r(t,"class","centered svelte-8xo9te")},m(l,q){L(l,t,q),a(t,s),x(e,s,null),a(s,b),a(s,i),a(i,p),v=!0},p(l,[q]){const u={};!m&&q&1&&(m=!0,u.input=l[0],ee(()=>m=!1)),e.$set(u),(!v||q&1)&&d!==(d=O(l[0])+"")&&te(p,d)},i(l){v||(ne(e.$$.fragment,l),v=!0)},o(l){se(e.$$.fragment,l),v=!1},d(l){l&&h(t),le(e)}}}function oe(n,t,s){let e=new ae().getDefaultBenulliChain();function m(b){e=b,s(0,e)}return[e,m]}class he extends H{constructor(t){super();J(this,t,oe,ce,K,{})}}export{he as default};
