(this["webpackJsonpreact-todolist"]=this["webpackJsonpreact-todolist"]||[]).push([[0],{20:function(e,n,t){e.exports=t(28)},25:function(e,n,t){},28:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t.n(r),o=t(14),i=t.n(o),c=(t(25),t(6)),l=t(19),u=t(9),d=t(2),m=t(3),s=t(5),f=t(11),b=t(18);function g(){var e=Object(d.a)(["\n  padding: 20px 10px;\n  width: 100%;\n  border: none;\n  font-size: 14px;\n\n  :focus {\n    outline: none;\n    width: 80%;\n    transform: translateY(10px);\n    box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),\n      0 18px 36px -18px rgba(0, 0, 0, 0.3),\n      0 -12px 36px -8px rgba(0, 0, 0, 0.025);\n  }\n"]);return g=function(){return e},e}var p=m.b.input(g()),x=function(e){var n=e.onInsert,t=(e.rest,Object(r.useState)("")),o=Object(u.a)(t,2),i=o[0],c=o[1],l=Object(r.useCallback)((function(e){c(e.target.value)}),[]),d=Object(r.useCallback)((function(e){n(i),c(""),e.preventDefault()}),[n,i]);return a.a.createElement("form",{className:"submit",onSubmit:d},a.a.createElement(b.a,{color:"red"}),a.a.createElement(p,{value:i,onChange:l,placeholder:"Add task",style:{cursor:"pointer"}}))};function v(){var e=Object(d.a)(["\n  font-size: 1.2rem;\n  padding: 1rem 0rem;\n  border-bottom: 1px solid #dee2e6;\n\n  .textContainer {\n    display: flex;\n    flex: 1 1 auto;\n    align-items: center;\n    vertical-align: middle;\n    text-align: center;\n\n    span {\n      font-size: 1.2rem;\n      color: #adb5bd;\n      @media (max-width: 600px) {\n        font-size: 0.4rem;\n      }\n    }\n  }\n"]);return v=function(){return e},e}var h=m.b.div(v()),O=function(){return a.a.createElement(h,null,a.a.createElement("div",{className:"textContainer"},a.a.createElement(s.b,{style:{verticalAlign:"middle",marginRight:"0.5rem",color:"#adb5bd"}}),a.a.createElement("span",null,"\ubaa9\ub85d\uc774 \ube44\uc5b4\uc788\uc2b5\ub2c8\ub2e4.")))};function E(){var e=Object(d.a)(["\n      text-decoration: line-through;\n      color: #adb5bd;\n    "]);return E=function(){return e},e}function j(){var e=Object(d.a)(["\n  ","\n  @media (max-width: 600px) {\n    font-size: 1rem;\n  }\n"]);return j=function(){return e},e}function k(){var e=Object(d.a)(["\n  font-size: 1.2rem;\n  padding: 1rem 0rem;\n  border-bottom: 1px solid #dee2e6;\n  @media (max-width: 600px) {\n    width: 100vw;\n    overflow-x: hidden;\n  }\n\n  .textContainer {\n    display: flex;\n    align-items: center;\n    vertical-align: middle;\n    text-align: center;\n    cursor: pointer;\n  }\n\n  :hover {\n    background: #f8f9fa;\n  }\n"]);return k=function(){return e},e}function y(){var e=Object(d.a)(["\n        background: red;\n      "]);return y=function(){return e},e}function C(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 9rem;\n  @media (max-width: 600px) {\n    padding: 0rem;\n  }\n\n  .title {\n  }\n\n  a {\n    margin-bottom: 1rem;\n  }\n\n  .submit {\n    display: flex;\n    align-items: center;\n    margin-top: 1rem;\n    ","\n\n    input {\n      border: 0px;\n    }\n  }\n"]);return C=function(){return e},e}function w(){var e=Object(d.a)(["\n  @media (max-width: 600px) {\n    width: 512px;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 6rem;\n    overflow: hidden;\n  }\n  font-size: 2rem;\n"]);return w=function(){return e},e}var S=m.b.div(w()),I=m.b.div(C(),(function(e){return e.reset&&Object(m.a)(y())})),N=m.b.div(k()),z=m.b.span(j(),(function(e){return e.check&&Object(m.a)(E())})),J=function(e){var n=e.todos,t=e.onInsert,r=e.onRemove,o=e.onToggle,i=JSON.parse(localStorage.getItem("todo"))||"";return console.log("todoList:",i),console.log("todos:",n),a.a.createElement(S,null,a.a.createElement(I,null,a.a.createElement("a",{href:"/"},a.a.createElement("span",{className:"title"},"Today")),n&&i?i.map((function(e){return a.a.createElement(N,{key:e.id},e.checked?a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"textContainer"},a.a.createElement(s.a,{style:{verticalAlign:"middle",marginRight:"0.5rem",color:"#fa5252"},onClick:function(){return o(e.id)}}),a.a.createElement(z,{check:!0,onClick:function(){return o(e.id)}},e.text),a.a.createElement(f.a,{onClick:function(){return r(e.id)},style:{marginLeft:"auto"}}))):a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"textContainer"},a.a.createElement(s.b,{style:{verticalAlign:"middle",marginRight:"0.5rem"},onClick:function(){return o(e.id)}}),a.a.createElement(z,{onClick:function(){return o(e.id)}},e.text),a.a.createElement(f.a,{onClick:function(){return r(e.id)},style:{marginLeft:"auto"}}))))})):"",0===i.length&&a.a.createElement(O,null),a.a.createElement(x,{onInsert:t})))},R=function(){var e=Object(r.useState)([]),n=Object(u.a)(e,2),t=n[0],o=n[1],i=Object(r.useRef)(0),d=Object(r.useCallback)((function(e){var n={id:i.current,text:e,checked:!1};o(t.concat(n)),localStorage.setItem("todo",JSON.stringify([].concat(Object(l.a)(t),[n]))),i.current+=1}),[t]),m=Object(r.useCallback)((function(e){o(t.map((function(n){return n.id===e?Object(c.a)(Object(c.a)({},n),{},{checked:!n.checked}):n}))),localStorage.setItem("todo",JSON.stringify(t.map((function(n){return n.id===e?Object(c.a)(Object(c.a)({},n),{},{checked:!n.checked}):n}))))}),[t]),s=Object(r.useCallback)((function(e){o(t.filter((function(n){return n.id!==e})));var n=(JSON.parse(localStorage.getItem("todo"))||"").filter((function(n){return n.id!==e}));localStorage.setItem("todo",JSON.stringify(n))}),[t]);return a.a.createElement(J,{todos:t,onInsert:d,onRemove:s,onToggle:m})};i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(R,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.e95b4056.chunk.js.map