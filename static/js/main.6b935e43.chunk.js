(this["webpackJsonpsimple-todolist"]=this["webpackJsonpsimple-todolist"]||[]).push([[0],{14:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var a,i,o,s,d,l,c,r=n(0),b=n(15),m=n.n(b),j=n(12),u=n(19),h=n(5),p=n(6),O=n(2),x=n(9),f=n(8),v=n(4),k=(n(14),n(1)),T=function(t){Object(x.a)(n,t);var e=Object(f.a)(n);function n(t){var a;return Object(h.a)(this,n),(a=e.call(this,t)).delete=a.delete.bind(Object(O.a)(a)),a.mark=a.mark.bind(Object(O.a)(a)),a}return Object(p.a)(n,[{key:"delete",value:function(){var t=this.props,e=t.todo;(0,t.deleteTodo)(e.id)}},{key:"mark",value:function(){var t=this.props,e=t.todo;(0,t.markTodo)(e.id)}},{key:"render",value:function(){var t=this.props.todo;return Object(k.jsxs)("div",{className:"list-item ".concat(t.isCompleted?"completed":""),children:[Object(k.jsx)("div",{className:"list-item__state"}),Object(k.jsx)("div",{className:"list-item__content",children:t.text}),Object(k.jsxs)("div",{className:"list-item__action",children:[Object(k.jsx)("button",{className:"list-item__delete btn btn-danger",onClick:this.delete,children:"Delete"}),Object(k.jsx)("button",{className:"list-item__mark ".concat(t.isCompleted?"btn btn-secondary":"btn btn-success"),onClick:this.mark,children:t.isCompleted?"Undo":"Finish"})]})]})}}]),n}(r.Component),y=n(3),C=y.a.div(a||(a=Object(v.a)(["\ndisplay: flex;\nalign-items: center;\nflex-direction: column;\n"]))),N=y.a.h1(i||(i=Object(v.a)(["\nmargin-top: 30px;\n"]))),g=y.a.div(o||(o=Object(v.a)(["\ndisplay: flex;\nmargin: 30px 0px;\n"]))),_=y.a.button(s||(s=Object(v.a)(["\nposition: relative;\nleft: 20px;\n@media only screen and (max-width: 600px){\n  left: 2px;\n}\n"]))),S=y.a.div(d||(d=Object(v.a)(["\nmargin: 30px 0px;\n"]))),w=y.a.div(l||(l=Object(v.a)(["\ndisplay: inline;\n"]))),D=y.a.div(c||(c=Object(v.a)(["\ndisplay: inline;\n"]))),I=function(t){Object(x.a)(n,t);var e=Object(f.a)(n);function n(t){var a;return Object(h.a)(this,n),(a=e.call(this,t)).state={todos:[],todoText:""},a.id=1,a.handleChange=a.handleChange.bind(Object(O.a)(a)),a.addTodo=a.addTodo.bind(Object(O.a)(a)),a.deleteTodo=a.deleteTodo.bind(Object(O.a)(a)),a.markTodo=a.markTodo.bind(Object(O.a)(a)),a}return Object(p.a)(n,[{key:"handleChange",value:function(t){this.setState({todoText:t.target.value})}},{key:"addTodo",value:function(){var t=this.state,e=t.todoText,n=t.todos;this.setState({todos:[].concat(Object(u.a)(n),[{id:this.id,isCompleted:!1,text:e,filter:"all"}]),todoText:""}),this.id++}},{key:"deleteTodo",value:function(t){this.setState({todos:this.state.todos.filter((function(e){return e.id!==t}))})}},{key:"markTodo",value:function(t){this.setState({todos:this.state.todos.map((function(e){return e.id!==t?e:Object(j.a)(Object(j.a)({},e),{},{isCompleted:!e.isCompleted})}))})}},{key:"render",value:function(){var t=this,e=this.state,n=e.todos,a=e.todoText,i=e.filter;return Object(k.jsxs)(C,{className:"wrapper",children:[Object(k.jsx)(N,{children:"Simple TodoList"}),Object(k.jsxs)(g,{className:"add",children:[Object(k.jsx)("input",{type:"text",name:"todo",className:"form-control",value:a,onChange:this.handleChange}),Object(k.jsx)(_,{className:"btn btn-primary add-btn",onClick:this.addTodo,children:"ADD"})]}),Object(k.jsxs)("div",{className:"filters",children:[Object(k.jsx)(w,{className:"filters__all btn-outline-secondary btn-lg",onClick:function(){t.setState({filter:"all"})},children:"All"}),Object(k.jsx)(D,{className:"filters__completed btn-outline-secondary btn-lg",onClick:function(){t.setState({filter:"completed"})},children:"FINISHED"})]}),Object(k.jsx)(S,{className:"list",children:n.filter((function(t){return"completed"!==i||t.isCompleted})).map((function(e){return Object(k.jsx)(T,{todo:e,deleteTodo:t.deleteTodo,markTodo:t.markTodo},e.id)}))})]})}}]),n}(r.Component);m.a.render(Object(k.jsx)(I,{}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.6b935e43.chunk.js.map