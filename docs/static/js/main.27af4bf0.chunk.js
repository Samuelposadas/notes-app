(this["webpackJsonpreact-notes"]=this["webpackJsonpreact-notes"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(7),r=n.n(s),o=(n(13),n(6)),i=n(8),j=n(2),l=n(0),b=function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.task.name}),Object(l.jsx)("input",{type:"checkbox",checked:e.task.done,onChange:function(){return e.toggleTask(e.task)}})]},e.task.name)})},d=function(e){return Object(l.jsxs)("h4",{className:"bg-primary text-white text-center p-4",children:[e.userName," Task App"]})},u=function(e){var t=Object(c.useState)(""),n=Object(j.a)(t,2),a=n[0],s=n[1];return Object(l.jsxs)("div",{className:"my-1",children:[Object(l.jsx)("input",{type:"text",className:"form-control",value:a,onChange:function(e){s(e.target.value)}}),Object(l.jsx)("button",{onClick:function(){e.createNewTask(a),s("")},className:"btn btn-primary mt-1",children:"Add"})]})},h=function(e){return Object(l.jsxs)("div",{className:"form-check",children:[Object(l.jsx)("input",{type:"checkbox",className:"form-check-input",checked:e.isChecked,onChange:function(t){return e.callback(t.target.checked)}}),Object(l.jsxs)("label",{htmlFor:"form-check-label",children:["Show ",e.description]})]})};var m=function(){var e=Object(c.useState)("Samuel"),t=Object(j.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)([{name:"Task one",done:!1},{name:"Task two",done:!1},{name:"Task three",done:!0}]),r=Object(j.a)(s,2),m=r[0],O=r[1],x=Object(c.useState)(!0),f=Object(j.a)(x,2),k=f[0],p=f[1];Object(c.useEffect)((function(){var e=localStorage.getItem("task");null!=e?O(JSON.parse(e)):(a("Samuel Example"),O([{name:"Task one  example",done:!1},{name:"Task two example",done:!1},{name:"Task three example",done:!0}]),p(!0))}),[]),Object(c.useEffect)((function(){localStorage.setItem("task",JSON.stringify(m))}),[m]);var g=function(e){O(m.map((function(t){return t.name===e.name?Object(o.a)(Object(o.a)({},t),{},{done:!e.done}):t})))},N=function(e){return m.filter((function(t){return t.done===e})).map((function(e){return Object(l.jsx)(b,{task:e,toggleTask:g},e.name)}))};return Object(l.jsxs)("div",{children:[Object(l.jsx)(d,{userName:n,taskItem:m}),Object(l.jsx)(u,{createNewTask:function(e){m.find((function(t){return t.name===e}))||O([].concat(Object(i.a)(m),[{name:e,done:!1}]))}}),Object(l.jsxs)("table",{className:"table table-striped table-bordered",children:[Object(l.jsxs)("thead",{children:[Object(l.jsx)("th",{children:"Description"}),Object(l.jsx)("th",{children:"Done"})]}),Object(l.jsx)("tbody",{children:N(!1)})]}),Object(l.jsx)("div",{className:"bg-secondary-text-white text-center p-2",children:Object(l.jsx)(h,{description:"completed tasks",isChecked:k,callback:function(e){return p(e)}})}),k&&Object(l.jsxs)("table",{className:"table table-striped table-bordered",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Description"}),Object(l.jsx)("th",{children:"Done"})]})}),Object(l.jsx)("tbody",{children:N(!0)})]})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root")),O()}},[[15,1,2]]]);
//# sourceMappingURL=main.27af4bf0.chunk.js.map