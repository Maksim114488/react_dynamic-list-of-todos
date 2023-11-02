(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s,a=c(7),n=c.n(a),l=c(2),i=c(8),o=c(1),d=(c(13),c(14),c(5)),r=c.n(d),j=c(0),u=function(e){var t=e.todos,c=e.selectedTodo,s=e.setSelectedTodo;return Object(j.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{children:" "})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsxs)("tr",{"data-cy":"todo",className:r()({"has-background-info-light":c}),children:[Object(j.jsx)("td",{className:"is-vcentered",children:e.id}),Object(j.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(j.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("td",{className:"is-vcentered is-expanded",children:Object(j.jsx)("p",{className:r()({"has-text-danger":!e.completed,"has-text-success":e.completed}),children:e.title})}),Object(j.jsx)("td",{className:"has-text-right is-vcentered",children:Object(j.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e)},children:Object(j.jsx)("div",{className:"icon",children:Object(j.jsx)("i",{className:r()({"far fa-eye":!c,"far fa-eye-slash":c})})})})})]},e.id)}))})]})};!function(e){e.All="all",e.Active="active",e.Completed="completed"}(s||(s={}));var b=function(e){var t=e.query,c=e.setQuery,a=e.sortType,n=e.setSortType;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("form",{className:"field has-addons",action:"/api/todos",method:"POST",children:[Object(j.jsx)("div",{className:"control",children:Object(j.jsx)("label",{className:"select",htmlFor:"select-id",children:Object(j.jsxs)("select",{"data-cy":"statusSelect",value:a,onChange:function(e){return n(e.target.value)},children:[Object(j.jsx)("option",{value:s.All,children:"All"}),Object(j.jsx)("option",{value:s.Active,children:"Active"}),Object(j.jsx)("option",{value:s.Completed,children:"Completed"})]})})}),Object(j.jsxs)("label",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(j.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){return c(e.target.value)}}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-magnifying-glass"})}),t&&Object(j.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(j.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return c("")}})})]})]})})};function h(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(16);var m=function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})},O=function(e){var t=e.selectedTodo,c=e.onClose,s=Object(o.useState)(!0),a=Object(l.a)(s,2),n=a[0],i=a[1],d=Object(o.useState)(null),r=Object(l.a)(d,2),u=r[0],b=r[1];return Object(o.useEffect)((function(){var e;(e=null===t||void 0===t?void 0:t.userId,h("/users/".concat(e))).then(b).finally((function(){return i(!1)}))}),[t]),Object(j.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(j.jsx)("div",{className:"modal-background"}),n?Object(j.jsx)(m,{}):Object(j.jsxs)("div",{className:"modal-card",children:[Object(j.jsxs)("header",{className:"modal-card-head",children:[Object(j.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===t||void 0===t?void 0:t.id)}),Object(j.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c()}})]}),Object(j.jsxs)("div",{className:"modal-card-body",children:[Object(j.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),Object(j.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==t&&void 0!==t&&t.completed?Object(j.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(j.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(j.jsx)("a",{href:"mailto:".concat(null===u||void 0===u?void 0:u.email),children:null===u||void 0===u?void 0:u.name})]})]})]})]})};function x(e){return e.toLowerCase().trim()}var f=function(){var e=Object(o.useState)(""),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(o.useState)([]),d=Object(l.a)(n,2),r=d[0],f=d[1],v=Object(o.useState)(!1),p=Object(l.a)(v,2),N=p[0],y=p[1],g=Object(o.useState)(s.All),S=Object(l.a)(g,2),T=S[0],k=S[1],C=Object(o.useState)(null),A=Object(l.a)(C,2),w=A[0],_=A[1];return Object(o.useEffect)((function(){y(!0),h("/todos").then((function(e){return f(function(e,t,c){var a=Object(i.a)(e);switch(t){case s.Active:a=a.filter((function(e){return!e.completed}));break;case s.Completed:a=a.filter((function(e){return e.completed}));case s.All:}return a.filter((function(e){return x(e.title).includes(x(c))}))}(e,T,c))})).then((function(){return y(!1)}))}),[T,c]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("h1",{className:"title",children:"Todos:"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(b,{query:c,setQuery:a,sortType:T,setSortType:function(e){return k(e)}})}),Object(j.jsx)("div",{className:"block",children:N?Object(j.jsx)(m,{}):Object(j.jsx)(u,{todos:r,selectedTodo:w,setSelectedTodo:_})})]})})}),w&&Object(j.jsx)(O,{selectedTodo:w,onClose:function(){return _(null)}})]})};n.a.render(Object(j.jsx)(f,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.2054dc2f.chunk.js.map