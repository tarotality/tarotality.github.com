import{s as b,f as u,l as h,a as y,g as d,h as v,m as g,d as m,c as S,i as _,w as x,n as E,x as $,y as q}from"../chunks/scheduler.612794e7.js";import{S as w,i as C}from"../chunks/index.68ea8aa5.js";import{p as H}from"../chunks/stores.e4911971.js";function P(i){var f;let a,s=i[0].status+"",r,o,n,p=((f=i[0].error)==null?void 0:f.message)+"",c;return{c(){a=u("h1"),r=h(s),o=y(),n=u("p"),c=h(p)},l(e){a=d(e,"H1",{});var t=v(a);r=g(t,s),t.forEach(m),o=S(e),n=d(e,"P",{});var l=v(n);c=g(l,p),l.forEach(m)},m(e,t){_(e,a,t),x(a,r),_(e,o,t),_(e,n,t),x(n,c)},p(e,[t]){var l;t&1&&s!==(s=e[0].status+"")&&E(r,s),t&1&&p!==(p=((l=e[0].error)==null?void 0:l.message)+"")&&E(c,p)},i:$,o:$,d(e){e&&(m(a),m(o),m(n))}}}function j(i,a,s){let r;return q(i,H,o=>s(0,r=o)),[r]}class B extends w{constructor(a){super(),C(this,a,j,P,b,{})}}export{B as component};
