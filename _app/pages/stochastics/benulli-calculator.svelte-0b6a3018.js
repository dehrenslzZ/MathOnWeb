import{S as L,i as M,s as O,e as c,t as w,k as E,c as o,a as y,h as T,d as m,m as $,b as r,g as Q,G as a,a0 as I,H as F,a5 as P,F as J,a1 as R,a2 as W,a3 as X,w as Y,x as Z,y as x,a4 as ee,j as te,q as ne,o as se,B as le}from"../../chunks/vendor-69346e8e.js";import{D as ae}from"../../chunks/defaults-provider-d622454b.js";import{c as ie}from"../../chunks/ncr-calculator-b8391fd4.js";import"../../chunks/custom-math-d14d206d.js";function K(n){return ie({n:n.n,k:n.k})*n.p**n.k*(1-n.p)**(n.n-n.k)}function ue(n){let t,s,e,h,b,i,_,p,v,V,D,l,q,u,g,U,S,k,j,G;return{c(){t=c("div"),s=c("div"),e=c("p"),h=w("n:"),b=E(),i=c("input"),_=E(),p=c("div"),v=c("p"),V=w("p:"),D=E(),l=c("input"),q=E(),u=c("div"),g=c("p"),U=w("k:"),S=E(),k=c("input"),this.h()},l(d){t=o(d,"DIV",{class:!0});var f=y(t);s=o(f,"DIV",{class:!0});var B=y(s);e=o(B,"P",{class:!0});var H=y(e);h=T(H,"n:"),H.forEach(m),b=$(B),i=o(B,"INPUT",{type:!0,class:!0}),B.forEach(m),_=$(f),p=o(f,"DIV",{class:!0});var C=y(p);v=o(C,"P",{class:!0});var z=y(v);V=T(z,"p:"),z.forEach(m),D=$(C),l=o(C,"INPUT",{type:!0,class:!0}),C.forEach(m),q=$(f),u=o(f,"DIV",{class:!0});var N=y(u);g=o(N,"P",{class:!0});var A=y(g);U=T(A,"k:"),A.forEach(m),S=$(N),k=o(N,"INPUT",{type:!0,class:!0}),N.forEach(m),f.forEach(m),this.h()},h(){r(e,"class","svelte-1qycpq0"),r(i,"type","number"),r(i,"class","ncr-input-field svelte-1qycpq0"),r(s,"class","benulli-input-container svelte-1qycpq0"),r(v,"class","svelte-1qycpq0"),r(l,"type","number"),r(l,"class","ncr-input-field svelte-1qycpq0"),r(p,"class","benulli-input-container svelte-1qycpq0"),r(g,"class","svelte-1qycpq0"),r(k,"type","number"),r(k,"class","ncr-input-field svelte-1qycpq0"),r(u,"class","benulli-input-container svelte-1qycpq0"),r(t,"class","benulli-input svelte-1qycpq0")},m(d,f){Q(d,t,f),a(t,s),a(s,e),a(e,h),a(s,b),a(s,i),I(i,n[0].n),a(t,_),a(t,p),a(p,v),a(v,V),a(p,D),a(p,l),I(l,n[0].p),a(t,q),a(t,u),a(u,g),a(g,U),a(u,S),a(u,k),I(k,n[0].k),j||(G=[F(i,"input",n[1]),F(l,"input",n[2]),F(k,"input",n[3])],j=!0)},p(d,[f]){f&1&&P(i.value)!==d[0].n&&I(i,d[0].n),f&1&&P(l.value)!==d[0].p&&I(l,d[0].p),f&1&&P(k.value)!==d[0].k&&I(k,d[0].k)},i:J,o:J,d(d){d&&m(t),j=!1,R(G)}}}function re(n,t,s){let{input:e}=t;function h(){e.n=P(this.value),s(0,e)}function b(){e.p=P(this.value),s(0,e)}function i(){e.k=P(this.value),s(0,e)}return n.$$set=_=>{"input"in _&&s(0,e=_.input)},[e,h,b,i]}class pe extends L{constructor(t){super();M(this,t,re,ue,O,{input:0})}}function ce(n){let t,s,e,h,b,i,_=K(n[0])+"",p,v;function V(l){n[1](l)}let D={};return n[0]!==void 0&&(D.input=n[0]),e=new pe({props:D}),W.push(()=>X(e,"input",V)),{c(){t=c("div"),s=c("div"),Y(e.$$.fragment),b=E(),i=c("div"),p=w(_),this.h()},l(l){t=o(l,"DIV",{class:!0});var q=y(t);s=o(q,"DIV",{class:!0});var u=y(s);Z(e.$$.fragment,u),b=$(u),i=o(u,"DIV",{class:!0});var g=y(i);p=T(g,_),g.forEach(m),u.forEach(m),q.forEach(m),this.h()},h(){r(i,"class","result-form svelte-8xo9te"),r(s,"class","container svelte-8xo9te"),r(t,"class","centered svelte-8xo9te")},m(l,q){Q(l,t,q),a(t,s),x(e,s,null),a(s,b),a(s,i),a(i,p),v=!0},p(l,[q]){const u={};!h&&q&1&&(h=!0,u.input=l[0],ee(()=>h=!1)),e.$set(u),(!v||q&1)&&_!==(_=K(l[0])+"")&&te(p,_)},i(l){v||(ne(e.$$.fragment,l),v=!0)},o(l){se(e.$$.fragment,l),v=!1},d(l){l&&m(t),le(e)}}}function oe(n,t,s){let e=new ae().getDefaultBenulliChain();function h(b){e=b,s(0,e)}return[e,h]}class me extends L{constructor(t){super();M(this,t,oe,ce,O,{})}}export{me as default};
