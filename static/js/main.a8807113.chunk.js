(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(t,e,a){t.exports=a(31)},25:function(t,e,a){},26:function(t,e,a){},31:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(10),s=a.n(o),l=(a(25),a(1)),i=a(2),c=a(5),u=a(3),m=a(6),d=(a(26),a(11)),p=a(4),f=function(t){return{type:"EDIT_TASK",task:t}},h=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(c.a)(this,Object(u.a)(e).call(this,t))).onChange=function(t){var e=t.target.name,n=t.target.value;"status"===e&&(n="false"!==n),a.setState(Object(d.a)({},e,n))},a.onSubmit=function(t){t.preventDefault(),a.props.onSaveTask(a.state),a.props.onSubmitForm(),a.onClear()},a.onClear=function(){a.setState({taskName:"",status:!1})},a.onCloseForm=function(){a.onClear(),a.props.onCloseForm()},a.state={id:"",taskName:"",status:!1},a}return Object(m.a)(e,t),Object(i.a)(e,[{key:"componentWillMount",value:function(){this.props.editTask&&""!==this.props.editTask.id?this.setState({id:this.props.editTask.id,taskName:this.props.editTask.taskName,status:this.props.editTask.status}):this.onClear()}},{key:"componentWillReceiveProps",value:function(t){t&&t.editTask?this.setState({id:this.props.editTask.id,taskName:this.props.editTask.taskName,status:this.props.editTask.status}):this.onClear()}},{key:"render",value:function(){this.props.display;return r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header header-taskform "},r.a.createElement("h4",{className:"modal-title"},this.props.editTask.id?"S\u1eeda c\xf4ng vi\u1ec7c":"Th\xeam c\xf4ng vi\u1ec7c"),r.a.createElement("button",{type:"button",onClick:this.onCloseForm,className:"close"},"\xd7")),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"modal-body"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"T\xean: "),r.a.createElement("input",{required:!0,type:"text",className:"form-control",name:"taskName",value:this.state.taskName,onChange:this.onChange})),r.a.createElement("label",null,"Tr\u1ea1ng th\xe1i: "),r.a.createElement("select",{className:"form-control",name:"status",value:this.state.status,onChange:this.onChange},r.a.createElement("option",{value:!0},"K\xedch ho\u1ea1t"),r.a.createElement("option",{value:!1},"\u1ea8n")),r.a.createElement("br",null)),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{className:"btn btn-warning",type:"submit"},"L\u01b0u l\u1ea1i"),r.a.createElement("button",{type:"button",className:"btn btn-default",onClick:this.onClear},"H\u1ee7y"))))}}]),e}(n.Component),b=Object(p.b)(function(t){return{display:t.display,editTask:t.editTask}},function(t,e){return{onSaveTask:function(e){t(function(t){return{type:"SAVE_TASK",task:t}}(e))},onSubmitForm:function(){t({type:"SUBMIT_FORM"})},onCloseForm:function(){t({type:"CLOSE_FORM"})}}})(h),k=function(t){function e(){var t;return Object(l.a)(this,e),(t=Object(c.a)(this,Object(u.a)(e).call(this))).onChange=function(e){t.setState({keyword:e.target.value})},t.onSearch=function(){t.props.onSearch(t.state.keyword)},t.state={keyword:""},t}return Object(m.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this.state.keyword;return r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{type:"text",className:"form-control",name:"keyword",value:t,onChange:this.onChange,placeholder:"Nh\u1eadp t\u1eeb kh\xf3a..."}),r.a.createElement("button",{onClick:this.onSearch,className:"btn btn-primary",type:"submit"},"T\xecm")))}}]),e}(n.Component),E=Object(p.b)(function(t){return{}},function(t,e){return{onSearch:function(e){t(function(t){return{type:"SEARCH_TASK",keyword:t}}(e))}}})(k),v=function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).onClick=function(t,e){a.props.onSort({by:t,value:e})},a}return Object(m.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"dropdown"},r.a.createElement("button",{className:"btn btn-primary dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"S\u1eafp x\u1ebfp"),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},r.a.createElement("a",{className:"dropdown-item",href:"#",onClick:function(){return t.onClick("name",1)}},"T\xean A->Z"),r.a.createElement("a",{className:"dropdown-item",href:"#",onClick:function(){return t.onClick("name",-1)}},"T\xean Z->A"),r.a.createElement("a",{className:"dropdown-item",href:"#",onClick:function(){return t.onClick("status",1)}},"Tr\u1ea1ng th\xe1i K\xedch ho\u1ea1t"),r.a.createElement("a",{className:"dropdown-item",href:"#",onClick:function(){return t.onClick("status",-1)}},"Tr\u1ea1ng th\xe1i \u1ea8n"))))}}]),e}(n.Component),y=Object(p.b)(function(t){return{sort:t.sortTask}},function(t,e){return{onSort:function(e){t(function(t){return{type:"SORT_TASK",sort:t}}(e))}}})(v),S=function(t){function e(){return Object(l.a)(this,e),Object(c.a)(this,Object(u.a)(e).call(this))}return Object(m.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"row mt-3"},r.a.createElement(E,null),r.a.createElement(y,null))}}]),e}(n.Component),T=a(19),N=a.n(T),O=function(t){function e(){var t;return Object(l.a)(this,e),(t=Object(c.a)(this,Object(u.a)(e).call(this))).onUpdateStatus=function(){return t.props.onUpdateStatus(t.props.task.id)},t.onDelete=function(){return t.props.onDeleteTask(t.props.id)},t.onEdit=function(){t.props.onOpenForm(),t.props.onEditTask(t.props.task)},t}return Object(m.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this.props,e=t.task,a=t.id;return r.a.createElement("tr",null,r.a.createElement("td",null,a),r.a.createElement("td",null,e.taskName),r.a.createElement("td",null,r.a.createElement("span",{onClick:this.onUpdateStatus,className:N()("btn",{"btn-outline-success":e.status},{"btn-outline-dark":!e.status})},!0===e.status?"K\xedch ho\u1ea1t":"\u1ea8n")),r.a.createElement("td",null,r.a.createElement("button",{"data-backdrop":"static","data-keyboard":"false","data-toggle":"modal","data-target":"#myModal",onClick:this.onEdit,className:"btn btn-warning",type:"submit"},"S\u1eeda"),r.a.createElement("button",{onClick:this.onDelete,className:"btn btn-danger",type:"submit"},"X\xf3a")))}}]),e}(n.Component),g=Object(p.b)(function(t){return{display:t.display,tasks:t.tasks}},function(t,e){return{onOpenForm:function(){t({type:"OPEN_FORM"})},onUpdateStatus:function(e){t(function(t){return{type:"UPDATE_STATUS_TASK",id:t}}(e))},onDeleteTask:function(e){t(function(t){return{type:"DELETE_TASK",id:t}}(e))},onEditTask:function(e){t(f(e))}}})(O),C=function(t){function e(){var t;return Object(l.a)(this,e),(t=Object(c.a)(this,Object(u.a)(e).call(this))).onChange=function(e){var a=e.target.name,n=e.target.value;t.setState(Object(d.a)({},a,n));var r={filterName:"filterName"===a?n:t.state.filterName,filterStatus:"filterStatus"===a?n:t.state.filterStatus};t.props.onFilterTable(r)},t.state={filterName:"",filterStatus:-1},t}return Object(m.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this.props,e=t.tasks,a=t.filterTable,n=t.searchTask,o=t.sort;a.filterName&&(e=e.filter(function(t){return-1!==t.taskName.toLowerCase().indexOf(a.filterName)})),e=(e=e.filter(function(t){return-1===a.filterStatus?t:t.status===(0!==a.filterStatus)})).filter(function(t){return-1!==t.taskName.toLowerCase().indexOf(n)}),"name"===o.by?e.sort(function(t,e){return t.taskName>e.taskName?o.value:t.taskName<e.taskName?-o.value:0}):e.sort(function(t,e){return t.status>e.status?-o.value:t.status<e.status?o.value:0});var s=e.map(function(t,e){return r.a.createElement(g,{key:e,id:e,task:t})});return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("table",{className:"table table-borderd table-hover mt-3"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"STT"),r.a.createElement("th",null,"T\xean"),r.a.createElement("th",null,"Tr\u1ea1ng th\xe1i"),r.a.createElement("th",null,"H\xe0nh \u0111\u1ed9ng"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null),r.a.createElement("td",null,r.a.createElement("input",{type:"text",className:"form-control",name:"filterName",value:this.state.filterName,onChange:this.onChange})),r.a.createElement("td",null,r.a.createElement("select",{className:"form-control",name:"filterStatus",value:this.state.filterStatus,onChange:this.onChange},r.a.createElement("option",{value:-1},"T\u1ea5t c\u1ea3"),r.a.createElement("option",{value:0},"\u1ea8n"),r.a.createElement("option",{value:1},"K\xedch ho\u1ea1t"))),r.a.createElement("td",null)),s))))}}]),e}(n.Component),w=Object(p.b)(function(t){return{tasks:t.tasks,filterTable:t.filterTable,searchTask:t.searchTask,sort:t.sortTask}},function(t,e){return{onFilterTable:function(e){t(function(t){return{type:"FILTER_TABLE",filter:t}}(e))}}})(C),j=function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).onOpenForm=function(){a.props.onOpenForm(),a.props.onClearTask({id:"",name:"",status:!1})},a}return Object(m.a)(e,t),Object(i.a)(e,[{key:"componentWillMount",value:function(){if(localStorage&&localStorage.getItem("tasks")){var t=JSON.parse(localStorage.getItem("tasks"));this.setState({tasks:t})}}},{key:"render",value:function(){var t=this.state,e=(t.tasks,t.keyword,this.props.display),a=window.$;return e?a("#myModal").modal("show"):a("#myModal").modal("hide"),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"page-title text-center"},"Qu\u1ea3n l\xfd c\xf4ng vi\u1ec7c"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("button",{type:"button",className:"btn btn-primary","data-toggle":"modal","data-backdrop":"static","data-keyboard":"false",onClick:this.onOpenForm,"data-target":"#myModal"},"Th\xeam m\u1edbi"),r.a.createElement("div",{id:"myModal",className:"modal fade",role:"dialog"},r.a.createElement("div",{className:"modal-dialog"},e?r.a.createElement(b,null):null)),r.a.createElement(S,null),r.a.createElement(w,null)))))}}]),e}(n.Component),_=Object(p.b)(function(t){return{display:t.display}},function(t,e){return{onOpenForm:function(){t({type:"OPEN_FORM"})},onClearTask:function(e){t(f(e))}}})(j);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=a(9),F=a(12),M=function(){return Math.floor(65536*Math.random()+1).toString(16)},I=JSON.parse(localStorage.getItem("tasks")),L=I||[],K=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"LIST_ALL":return t;case"SAVE_TASK":var a={id:e.task.id,taskName:e.task.taskName,status:e.task.status};return a.id?t.map(function(n,r){n.id===e.task.id&&(t[r]=a)}):(a.id=M()+M()+M()+"-"+M()+M()+M(),t.push(a)),localStorage.setItem("tasks",JSON.stringify(t)),Object(F.a)(t);case"UPDATE_STATUS_TASK":return t.map(function(a,n){a.id===e.id&&(t[n].status=!t[n].status,localStorage.setItem("tasks",JSON.stringify(t)))}),Object(F.a)(t);case"DELETE_TASK":return t.map(function(a,n){n===e.id&&(t.splice(n,1),localStorage.setItem("tasks",JSON.stringify(t)))}),Object(F.a)(t);default:return t}},R=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"OPEN_FORM":return t=!0;case"SUBMIT_FORM":case"CLOSE_FORM":return t=!1;default:return t}},D={id:"",taskName:"",status:!1},U=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"EDIT_TASK":return e.task;default:return t}},x={filterName:"",filterStatus:-1},B=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FILTER_TABLE":return{filterName:e.filter.filterName,filterStatus:parseInt(e.filter.filterStatus,10)};default:return t}},J=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SEARCH_TASK":return e.keyword.toLowerCase();default:return t}},P={by:"name",value:1},W=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SORT_TASK":return{by:e.sort.by,value:parseInt(e.sort.value,10)};default:return t}},X=Object(A.b)({tasks:K,display:R,editTask:U,filterTable:B,searchTask:J,sortTask:W}),H=Object(A.c)(X,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(r.a.createElement(p.a,{store:H},r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.a8807113.chunk.js.map