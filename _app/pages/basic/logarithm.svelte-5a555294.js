import{S as $,i as b,s as E,e as p,l as V,t as L,a as v,b as m,o as M,h as S,d as h,f as u,g as j,K as _,W as x,L as q,_ as I,j as C,D}from"../../chunks/index-39b5f0d1.js";function K(n){let t,s,e,r,i,o=Math.log(n[0])+"",c,f,g;return{c(){t=p("div"),s=p("div"),e=p("input"),r=V(),i=p("div"),c=L(o),this.h()},l(a){t=v(a,"DIV",{class:!0});var l=m(t);s=v(l,"DIV",{class:!0});var d=m(s);e=v(d,"INPUT",{class:!0,type:!0}),r=M(d),i=v(d,"DIV",{class:!0});var y=m(i);c=S(y,o),y.forEach(h),d.forEach(h),l.forEach(h),this.h()},h(){u(e,"class","larger-input svelte-8xo9te"),u(e,"type","number"),u(i,"class","result-form svelte-8xo9te"),u(s,"class","container svelte-8xo9te"),u(t,"class","centered svelte-8xo9te")},m(a,l){j(a,t,l),_(t,s),_(s,e),x(e,n[0]),_(s,r),_(s,i),_(i,c),f||(g=q(e,"input",n[1]),f=!0)},p(a,[l]){l&1&&I(e.value)!==a[0]&&x(e,a[0]),l&1&&o!==(o=Math.log(a[0])+"")&&C(c,o)},i:D,o:D,d(a){a&&h(t),f=!1,g()}}}function N(n,t,s){let e=0;function r(){e=I(this.value),s(0,e)}return[e,r]}class T extends ${constructor(t){super(),b(this,t,N,K,E,{})}}export{T as default};
