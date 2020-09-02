(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{169:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(34),c=a.n(s),o=(a(86),a(20)),l=a(6),i=(a(87),a(88),a(21)),u=a(22),m=a(24),p=a(23),d=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("div",{className:"container"},r.a.createElement(o.b,{className:"navbar-brand",to:"/"},"NotesApp"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(o.b,{className:"nav-link",to:"/"},"Notes")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/create"},"Create Note")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/user"},"Create User"))))))}}]),a}(n.Component),h=a(8),v=a.n(h),f=a(18),b=a(12),E=a.n(b),g=a(80),N=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={notes:[]},e.deleteNote=function(){var t=Object(f.a)(v.a.mark((function t(a){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.a.delete("http://localhost:4000/api/notes/"+a);case 2:e.getNotes();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getNotes()}},{key:"getNotes",value:function(){var e=Object(f.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("http://localhost:4000/api/notes/");case 2:t=e.sent,this.setState({notes:t.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row"},this.state.notes.map((function(t){return r.a.createElement("div",{className:"col-md-4 p-2",key:t._id},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header d-flex justify-content-between"},r.a.createElement("h5",null,t.title),r.a.createElement(o.b,{className:"btn btn-secondary",to:"/edit/"+t._id},"Edit")),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",null,t.content),r.a.createElement("p",null,t.author),r.a.createElement("p",null,Object(g.a)(t.date))),r.a.createElement("div",{className:"card-footer"},r.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.deleteNote(t._id)}},"Delete"))))})))}}]),a}(n.Component),y=a(76),k=a(77),w=a.n(k),x=(a(111),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={users:[],userSelected:"",title:"",content:"",date:new Date,editing:!1,_id:""},e.onSubmit=function(){var t=Object(f.a)(v.a.mark((function t(a){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n={title:e.state.title,content:e.state.content,date:e.state.date,author:e.state.userSelected},!e.state.editing){t.next=7;break}return t.next=5,E.a.put("http://localhost:4000/api/notes/"+e.state._id,n);case 5:t.next=9;break;case 7:return t.next=9,E.a.post("http://localhost:4000/api/notes",n);case 9:window.location.href="/";case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onInputChange=function(t){e.setState(Object(y.a)({},t.target.name,t.target.value))},e.onChangeDate=function(t){e.setState({date:t})},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(f.a)(v.a.mark((function e(){var t,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("http://localhost:4000/api/users");case 2:if(t=e.sent,this.setState({users:t.data.map((function(e){return e.username})),userSelected:t.data[0].username}),!this.props.match.params.id){e.next=9;break}return e.next=7,E.a.get("http://localhost:4000/api/notes/"+this.props.match.params.id);case 7:a=e.sent,this.setState({title:a.data.title,content:a.data.content,data:new Date(a.data.date),author:a.data.author,editing:!0,_id:this.props.match.params.id});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"col-md-6 offset-md-3"},r.a.createElement("div",{className:"card card-body"},r.a.createElement("h4",null,"Create a Note"),r.a.createElement("div",{className:"form-group"},r.a.createElement("select",{className:"form-control",name:"userSelected",onChange:this.onInputChange,value:this.state.userSelected},this.state.users.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Title",name:"title",onChange:this.onInputChange,value:this.state.title,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{name:"content",className:"form-control",placeholder:"Content",onChange:this.onInputChange,value:this.state.content,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement(w.a,{className:"form-control",selected:this.state.date,onChange:this.onChangeDate})),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Save"))))}}]),a}(n.Component)),j=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={users:[],username:""},e.getUsers=Object(f.a)(v.a.mark((function t(){var a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.a.get("http://localhost:4000/api/users");case 2:a=t.sent,e.setState({users:a.data});case 4:case"end":return t.stop()}}),t)}))),e.onChangeUsername=function(t){e.setState({username:t.target.value})},e.onSubmit=function(){var t=Object(f.a)(v.a.mark((function t(a){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,E.a.post("http://localhost:4000/api/users",{username:e.state.username});case 3:e.setState({username:" "}),e.getUsers();case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.deleteUser=function(){var t=Object(f.a)(v.a.mark((function t(a){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.a.delete("http://localhost:4000/api/users/"+a);case 2:e.getUsers();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getUsers(),console.log(this.state.users)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"card card-body"},r.a.createElement("h3",null,"Create New User "),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",value:this.state.username,onChange:this.onChangeUsername})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Save")))),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("ul",{className:"list-group"},this.state.users.map((function(t){return r.a.createElement("li",{className:"list-group-item list-group-item-action",key:t._id,onDoubleClick:function(){return e.deleteUser(t._id)},style:O},t.username)})))))}}]),a}(n.Component),O={cursor:"pointer"};var C=function(){return r.a.createElement(o.a,null,r.a.createElement(d,null),r.a.createElement("div",{className:"container p-4"},r.a.createElement(l.a,{path:"/",exact:!0,component:N}),r.a.createElement(l.a,{path:"/edit/:id",component:x}),r.a.createElement(l.a,{path:"/create",component:x}),r.a.createElement(l.a,{path:"/user",component:j})))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root"))},81:function(e,t,a){e.exports=a(169)},86:function(e,t,a){},88:function(e,t,a){}},[[81,1,2]]]);
//# sourceMappingURL=main.47529d24.chunk.js.map