(this["webpackJsonpcurrency-converter"]=this["webpackJsonpcurrency-converter"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(6),u=n.n(a),o=n(7),s=n(2),i=(n(12),n(0));var j=function(e){var t=e.currencyOptions,n=e.selectedCurrency,c=e.onChangeCurrency,r=e.amount,a=e.onChangeAmount;return Object(i.jsxs)("div",{children:[Object(i.jsx)("input",{className:"input",type:"number",value:r||"0",onChange:a}),Object(i.jsx)("select",{onChange:c,value:n,children:t.map((function(e){return Object(i.jsx)("option",{value:e,children:e},e)}))})]})},b="http://api.exchangeratesapi.io/v1/latest?access_key=24dadb83e611b8401c4ffc2d6a5532c9";var l=function(){var e,t,n=Object(c.useState)([]),r=Object(s.a)(n,2),a=r[0],u=r[1],l=Object(c.useState)(),h=Object(s.a)(l,2),O=h[0],f=h[1],d=Object(c.useState)(),v=Object(s.a)(d,2),g=v[0],y=v[1],p=Object(c.useState)(),C=Object(s.a)(p,2),m=C[0],x=C[1],S=Object(c.useState)(1),k=Object(s.a)(S,2),E=k[0],w=k[1],A=Object(c.useState)(!0),J=Object(s.a)(A,2),N=J[0],q=J[1];function B(e){if(!e.ok)throw Error(e.statusText);return e}return N?(t=E,e=E*m):(e=E,t=E/m),Object(c.useEffect)((function(){fetch(b).then(B).then((function(e){return e.json()})).then((function(e){var t=Object.keys(e.rates)[0];u(Object(o.a)(Object.keys(e.rates))),f(e.base),y(t),x(e.rates[t])}))}),[]),Object(c.useEffect)((function(){null!=O&&null!=g&&fetch("".concat(b,"&base=").concat(O,"&symbols=").concat(g)).then(B).then((function(e){return e.json()})).then((function(e){console.log(g),console.log(e),x(e.rates[g])})).catch((function(e){console.log(e)}))}),[O,g]),Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Convert"}),Object(i.jsx)(j,{selectedCurrency:O,currencyOptions:["EUR"],onChangeCurrency:function(e){return f(e.target.value)},amount:t,onChangeAmount:function(e){w(e.target.value),q(!0)}}),Object(i.jsx)("div",{className:"equals",children:" = "}),Object(i.jsx)(j,{selectedCurrency:g,currencyOptions:a,onChangeCurrency:function(e){return y(e.target.value)},amount:e,onChangeAmount:function(e){w(e.target.value),q(!1)}})]})};u.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(l,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.6621dd86.chunk.js.map