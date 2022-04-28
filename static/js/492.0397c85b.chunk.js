"use strict";(self.webpackChunkdev_log=self.webpackChunkdev_log||[]).push([[492],{5492:function(e,n,t){t.r(n);var o,r=t(2950),i=t.n(r),c=t(2181),a=t.n(c),s=t(168),d=t(6335),u=t(4708),l=t(3076),h=t(5662),T=t(5978),x=t(7541),f=t(6563),p=t.n(f),E=(t(5462),t(8954),t(1413)),g=t(9406),C=t(3473),_=t.n(C),O=new d.ApolloClient({cache:new d.InMemoryCache}),m=(0,d.createHttpLink)({uri:"".concat("http://jingeuns.ml/api","/blogs")}),j=(0,g.v)((function(e,n){var t=n.headers,o=_().get("token")||"";return{headers:(0,E.Z)((0,E.Z)({},t),{},{authorization:o?"Bearer ".concat(o):""})}})),v=new d.ApolloClient({cache:new d.InMemoryCache,link:j.concat(m)}),S=new x.QueryClient,D={},Z=t(1532),w=t(8690),R=t(9672),y=t.n(R),L=t(7757),k=t.n(L),A=t(5384),b=t(7780),F=t(4942),U=t(3144),I=t(5671),H=t(136),z=t(3668),Q=t(6760),Y=t.n(Q),K=t(6385),B=t(1629),P=k().mark($),M=k().mark(ee),W=k().mark(ne),q=k().mark(te),G=k().mark(oe),J="toods",N="http://jingeuns.ml/api",V={TRY_FETCH_TODO_LIST:"".concat(J,"/TRY_FETCH_TODO_LIST"),REQUEST_FETCH_TODO_LIST:"".concat(J,"/REQUEST_FETCH_TODO_LIST"),SUCCESS_FETCH_TODO_LIST:"".concat(J,"/SUCCESS_FETCH_TODO_LIST"),FAILURE_FETCH_TODO_LIST:"".concat(J,"/FAILURE_FETCH_TODO_LIST"),TRY_CHECK_TODO:"".concat(J,"/TRY_CHECK_TODO"),REQUEST_CHECK_TODO:"".concat(J,"/REQUEST_CHECK_TODO"),SUCCESS_CHECK_TODO:"".concat(J,"/SUCCESS_CHECK_TODO"),FAILURE_CHECK_TODO:"".concat(J,"/FAILURE_CHECK_TODO"),TRY_CREATE_TODO:"".concat(J,"/TRY_CREATE_TODO"),REQUEST_CREATE_TODO:"".concat(J,"/REQUEST_CREATE_TODO"),SUCCESS_CREATE_TODO:"".concat(J,"/SUCCESS_CREATE_TODO"),FAILURE_CREATE_TODO:"".concat(J,"/FAILURE_CREATE_TODO"),TRY_DELETE_TODO:"".concat(J,"/TRY_DELETE_TODO"),REQUEST_DELETE_TODO:"".concat(J,"/REQUEST_DELETE_TODO"),SUCCESS_DELETE_TODO:"".concat(J,"/SUCCESS_DELETE_TODO"),FAILURE_DELETE_TODO:"".concat(J,"/FAILURE_DELETE_TODO")},X={fetchTodoList:(0,B.createAction)(V.TRY_FETCH_TODO_LIST),checkTodo:(0,B.createAction)(V.TRY_CHECK_TODO),createTodo:(0,B.createAction)(V.TRY_CREATE_TODO),deleteTodo:(0,B.createAction)(V.TRY_DELETE_TODO)};function $(){return k().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,b.Fm)(V.TRY_FETCH_TODO_LIST,ee);case 2:return e.next=4,(0,b.Fm)(V.TRY_CHECK_TODO,ne);case 4:return e.next=6,(0,b.Fm)(V.TRY_CREATE_TODO,te);case 6:return e.next=8,(0,b.Fm)(V.TRY_DELETE_TODO,oe);case 8:case"end":return e.stop()}}),P)}function ee(){var e,n;return k().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,b.gz)({type:V.REQUEST_FETCH_TODO_LIST});case 3:return t.next=5,(0,b.RE)((function(){return Y().get("".concat(N,"/todos"),{headers:{Authorization:"Bearer ".concat(_().get("token")||"")}}).then((function(e){if(e.status>=200&&e.status<300)return e;throw e})).then((function(e){return e.data})).catch((function(e){return e}))}));case 5:return e=t.sent,n={rows:(0,K.List)(e.map((function(e){return new re(e)}))),count:e.length},t.next=9,(0,b.gz)({type:V.SUCCESS_FETCH_TODO_LIST,payload:n});case 9:t.next=15;break;case 11:return t.prev=11,t.t0=t.catch(0),t.next=15,(0,b.gz)({type:V.FAILURE_FETCH_TODO_LIST});case 15:case"end":return t.stop()}}),M,null,[[0,11]])}function ne(e){var n,t,o;return k().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,b.gz)({type:V.REQUEST_CHECK_TODO});case 3:return r.next=5,(0,b.RE)((function(){return Y().put("".concat(N,"/todos/check/").concat(e.payload),{},{headers:{Authorization:"Bearer ".concat(_().get("token")||"")}}).then((function(e){if(e.status>=200&&e.status<300)return e;throw e})).catch((function(e){return Promise.reject(e)}))}));case 5:return r.next=7,(0,b.Ys)();case 7:return n=r.sent,t=n.TodosReducer.get("todoList"),o=t.findIndex((function(n){return n.get("id")===e.payload})),r.next=12,(0,b.gz)({type:V.SUCCESS_CHECK_TODO,payload:{index:o}});case 12:r.next=18;break;case 14:return r.prev=14,r.t0=r.catch(0),r.next=18,(0,b.gz)({type:V.FAILURE_CHECK_TODO});case 18:case"end":return r.stop()}}),W,null,[[0,14]])}function te(e){return k().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,b.gz)({type:V.REQUEST_CREATE_TODO});case 3:return n.next=5,(0,b.RE)((function(){return Y().post("".concat(N,"/todos"),{text:e.payload},{headers:{Authorization:"Bearer ".concat(_().get("token")||"")}}).then((function(e){if(e.status>=200&&e.status<300)return e;throw e})).catch((function(e){return Promise.reject(e)}))}));case 5:return n.next=7,(0,b.gz)({type:V.SUCCESS_CREATE_TODO});case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,(0,b.gz)({type:V.FAILURE_CREATE_TODO});case 13:case"end":return n.stop()}}),q,null,[[0,9]])}function oe(e){return k().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,b.gz)({type:V.REQUEST_DELETE_TODO});case 3:return n.next=5,(0,b.RE)((function(){return Y().delete("".concat(N,"/todos/").concat(e.payload),{headers:{Authorization:"Bearer ".concat(_().get("token")||"")}}).then((function(e){if(e.status>=200&&e.status<300)return e;throw e})).catch((function(e){return Promise.reject(e)}))}));case 5:return n.next=7,(0,b.gz)({type:V.SUCCESS_DELETE_TODO});case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,(0,b.gz)({type:V.FAILURE_DELETE_TODO});case 13:case"end":return n.stop()}}),G,null,[[0,9]])}var re=function(e){(0,H.Z)(t,e);var n=(0,z.Z)(t);function t(e){return(0,I.Z)(this,t),e&&(e.isChecked="T"===((null===e||void 0===e?void 0:e.isChecked)||"")),n.call(this,e)}return(0,U.Z)(t)}((0,K.Record)({id:0,text:"",isChecked:!1,createdAt:0,lastModifiedAt:0})),ie=function(e){(0,H.Z)(t,e);var n=(0,z.Z)(t);function t(){return(0,I.Z)(this,t),n.apply(this,arguments)}return(0,U.Z)(t)}((0,K.Record)({fetchTodoListActionType:"",isFetchingTodoList:!1,todoList:(0,K.List)(),todoListCount:0,checkTodoActionType:"",isCheckingTodo:!1,isCheckedTodo:!1,createTodoActionType:"",isCreatingTodo:!1,isCreatedTodo:!1,deleteTodoActionType:"",isDeletingTodo:!1,isDeletedTodo:!1})),ce=new ie,ae=(0,B.handleActions)((o={},(0,F.Z)(o,V.REQUEST_FETCH_TODO_LIST,(function(e,n){return e.set("fetchTodoListActionType",n.type).set("isFetchingTodoList",!0)})),(0,F.Z)(o,V.SUCCESS_FETCH_TODO_LIST,(function(e,n){return e.set("fetchTodoListActionType",n.type).set("isFetchingTodoList",!1).set("todoList",n.payload.rows).set("todoListCount",n.payload.count)})),(0,F.Z)(o,V.FAILURE_FETCH_TODO_LIST,(function(e,n){return e.set("fetchTodoListActionType",n.type).set("isFetchingTodoList",!1)})),(0,F.Z)(o,V.REQUEST_CHECK_TODO,(function(e,n){return e.set("checkTodoActionType",n.type).set("isCheckingTodo",!0).set("isCheckedTodo",!1)})),(0,F.Z)(o,V.SUCCESS_CHECK_TODO,(function(e,n){return e.set("checkTodoActionType",n.type).set("isCheckingTodo",!1).set("isCheckedTodo",!0).updateIn(["todoList",n.payload.index,"isChecked"],(function(e){return!e}))})),(0,F.Z)(o,V.FAILURE_CHECK_TODO,(function(e,n){return e.set("checkTodoActionType",n.type).set("isCheckingTodo",!1).set("isCheckedTodo",!1)})),(0,F.Z)(o,V.REQUEST_CREATE_TODO,(function(e,n){return e.set("createTodoActionType",n.type).set("isCreatingTodo",!0).set("isCreatedTodo",!1)})),(0,F.Z)(o,V.SUCCESS_CREATE_TODO,(function(e,n){return e.set("createTodoActionType",n.type).set("isCreatingTodo",!1).set("isCreatedTodo",!0)})),(0,F.Z)(o,V.FAILURE_CREATE_TODO,(function(e,n){return e.set("createTodoActionType",n.type).set("isCreatingTodo",!1).set("isCreatedTodo",!1)})),(0,F.Z)(o,V.REQUEST_DELETE_TODO,(function(e,n){return e.set("deleteTodoActionType",n.type).set("isDeletingTodo",!0).set("isDeletedTodo",!1)})),(0,F.Z)(o,V.SUCCESS_DELETE_TODO,(function(e,n){return e.set("deleteTodoActionType",n.type).set("isDeletingTodo",!1).set("isDeletedTodo",!0)})),(0,F.Z)(o,V.FAILURE_DELETE_TODO,(function(e,n){return e.set("deleteTodoActionType",n.type).set("isDeletingTodo",!1).set("isDeletedTodo",!1)})),o),ce),se=k().mark(de);function de(){return k().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,b.rM)($);case 2:case"end":return e.stop()}}),se)}var ue=(0,A.combineReducers)({TodosReducer:ae}),le=((0,w.createLogger)(),y()()),he=[le];var Te=(0,Z.configureStore)({reducer:ue,middleware:he,devTools:false});le.run(de);var xe,fe,pe,Ee,ge,Ce,_e,Oe,me,je,ve,Se,De,Ze,we,Re,ye,Le,ke,Ae,be,Fe,Ue,Ie=Te,He=t(6445),ze=t(184),Qe=p()(He.Z)(xe||(xe=(0,s.Z)(["\n  flex: 0 0 90px;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n"]))),Ye=function(e){var n=e.children;return(0,ze.jsx)(Qe,{maxWidth:!1,children:n})},Ke=p()(He.Z)(fe||(fe=(0,s.Z)(["\n  flex: 1 1 auto;\n  display: flex;\n  flex-flow: column nowrap;\n"]))),Be=function(e){var n=e.children;return(0,ze.jsx)(Ke,{maxWidth:!1,children:n})},Pe=p()(He.Z)(pe||(pe=(0,s.Z)(["\n  flex: 0 0 auto;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: center;\n  min-height: 40px;\n"]))),Me=function(e){var n=e.children;return(0,ze.jsx)(Pe,{maxWidth:!1,children:n})},We=t(890),qe=t(3060),Ge=function(){return(0,ze.jsxs)(We.Z,{variant:"body2",color:"text.secondary",align:"center",children:["Copyright \xa9 ",(0,ze.jsx)(qe.Z,{color:"inherit",href:"https://jingeunee.github.io/dev-log",children:"https://jingeunee.github.io/dev-log"})," ",(new Date).getFullYear(),"."]})},Je=t(2169),Ne=t(9504),Ve=t(3044),Xe=t(3400),$e=t(2898),en=t(7621),nn=t(9585),tn=t(1889),on=(0,d.gql)(Ee||(Ee=(0,s.Z)(["\n  query {\n    getList {\n      id\n      title\n      body\n      thumbnail\n      createdAt\n      updatedAt\n      user {\n        id\n        name\n        email\n        image\n      }\n    }\n  }\n"]))),rn=t(1554),cn=t(6624),an=function(){return(0,ze.jsx)(rn.Z,{variant:"indeterminate",disableShrink:!0,size:20,thickness:4,sx:(0,F.Z)({color:"#1a90ff",animationDuration:"550ms"},"& .".concat(cn.Z.circle),{strokeLinecap:"round"})})},sn=p()(en.Z)(ge||(ge=(0,s.Z)(["\n  width: 350px;\n  height: 400px;\n  margin: 5px;\n"]))),dn=p()(Je.Z)(Ce||(Ce=(0,s.Z)(["\n  height: 0;\n  padding-top: 56.25%; // 16.9\n  background-color: #eeeeee;\n"]))),un=function(){var e=function(){var e=(0,d.useQuery)(on,{client:v}),n=e.loading,t=e.error,o=e.data;return{isLoading:n,data:(null===o||void 0===o?void 0:o.getList)||[],error:t}}(),n=e.isLoading,t=e.data;return n?(0,ze.jsx)(an,{}):(0,ze.jsx)(tn.ZP,{container:!0,children:t.map((function(e,n){var t,o,r=(null===(t=e.user)||void 0===t?void 0:t.image)||"",i=(null===(o=e.user)||void 0===o?void 0:o.name)||"",c=i.slice(0,1);return(0,ze.jsxs)(sn,{elevation:3,variant:"elevation",children:[(0,ze.jsx)(nn.Z,{avatar:(0,ze.jsx)(Ve.Z,{src:r,alt:i,children:c}),action:(0,ze.jsx)(Xe.Z,{"aria-label":"settings",children:(0,ze.jsx)($e.Z,{})}),title:e.title,subheader:e.createdAt}),(0,ze.jsx)(dn,{image:e.thumbnail,title:"thumbnail"}),(0,ze.jsx)(Ne.Z,{children:(0,ze.jsx)(We.Z,{variant:"body2",color:"textSecondary",component:"p",children:e.body})})]},e.id)}))})},ln=t(7322),hn=t.n(ln),Tn=function(){return(0,r.useEffect)((function(){new(hn())({el:document.querySelector("#editor"),height:"600px",initialEditType:"markdown",previewStyle:"vertical"})}),[]),(0,ze.jsx)("div",{id:"editor"})},xn=function(){return(0,ze.jsx)(Tn,{})},fn=p()(He.Z)(_e||(_e=(0,s.Z)(["\n  /* background-color: #eee; */\n  flex: 1 1 auto;\n"]))),pn=p()(He.Z)(Oe||(Oe=(0,s.Z)([""]))),En=function(){return(0,ze.jsx)(fn,{maxWidth:!1,children:(0,ze.jsxs)(pn,{maxWidth:"lg",children:[(0,ze.jsx)("h1",{children:"Blogs"}),(0,ze.jsxs)(h.Switch,{children:[(0,ze.jsx)(h.Route,{path:"/register",component:xn}),(0,ze.jsx)(h.Route,{path:"/",component:un})]})]})})},gn=t(7246),Cn=t(1974),_n=t(493),On=t(885),mn=t(4852),jn=t(6259),vn=t(872),Sn=t(8937),Dn=t(7247),Zn=p()(mn.ZP)(me||(me=(0,s.Z)(["\n  border-bottom: solid 1px #eee;\n"]))),wn=p()(jn.Z)(je||(je=(0,s.Z)(["\n  text-decoration: line-through;\n  color: #ccc;\n"]))),Rn=function(e){var n=e.index,t=e.id,o=e.isChecked,i=e.text,c=e.moveTodo,a=(0,l.useDispatch)(),s=(0,r.useState)(!1),d=(0,On.Z)(s,2),u=d[0],h=d[1],T=(0,r.useState)(!1),x=(0,On.Z)(T,2),f=x[0],p=x[1],E=(0,r.useRef)(null),g=(0,gn.useDrop)({accept:"card",collect:function(e){return{handlerId:e.getHandlerId()}},hover:function(e,t){var o;if(E.current&&c){var r=e.index,i=n;if(r!==i){var a=null===(o=E.current)||void 0===o?void 0:o.getBoundingClientRect(),s=(a.bottom-a.top)/2,d=t.getClientOffset().y-a.top;r<i&&d<s||r>i&&d>s||(c(r,i),e.index=i)}}}}),C=(0,On.Z)(g,2),_=C[0].handlerId,O=C[1],m=(0,gn.useDrag)({type:"card",item:function(){return{id:t,index:n}},collect:function(e){return{isDragging:e.isDragging()}}}),j=(0,On.Z)(m,2),v=j[0].isDragging,S=j[1];(0,r.useEffect)((function(){return function(){h(!1),p(!1)}}),[]);var D=v?0:1;return S(O(E)),(0,ze.jsxs)(Zn,{"data-handler-id":_,ref:E,style:{border:"1px dashed gray",padding:"0.5rem 1rem",marginBottom:".5rem",backgroundColor:"white",cursor:"move",opacity:D},children:[o?(0,ze.jsx)(wn,{children:i}):(0,ze.jsx)(jn.Z,{children:i}),(0,ze.jsx)(Xe.Z,{size:"small",disabled:u,onClick:function(){h(!0),a(X.checkTodo(t))},children:u?(0,ze.jsx)(an,{}):o?(0,ze.jsx)(vn.Z,{}):(0,ze.jsx)(Sn.Z,{})}),(0,ze.jsx)(Xe.Z,{size:"small",onClick:function(){p(!0),a(X.deleteTodo(t))},children:f?(0,ze.jsx)(an,{}):(0,ze.jsx)(Dn.Z,{})})]})},yn=p()(_n.Z)(ve||(ve=(0,s.Z)(["\n  display: flex;\n  flex-flow: column nowrap;\n  max-width: 400px;\n  width: 100%;\n"]))),Ln=function(){var e=(0,l.useSelector)((function(e){return e.TodosReducer.get("todoList").filter((function(e){return!e.get("isChecked")}))})),n=function(e,n){console.log(e,n)};return(0,ze.jsx)(yn,{sx:{bgcolor:"background.paper"},dense:!0,children:e.map((function(e,t){var o=e.get("id"),r=e.get("isChecked"),i=e.get("text");return(0,ze.jsx)(Rn,{index:t,id:o,isChecked:r,text:i,moveTodo:n},"row-".concat(o))}))})},kn=t(4554),An=t(9204),bn=t(6151),Fn=p()(kn.Z)(Se||(Se=(0,s.Z)(["\n  display: flex;\n  max-width: 400px;\n  width: 100%;\n  padding-bottom: 10px;\n  border-bottom: solid 1px #eee;\n"]))),Un=p()(An.Z)(De||(De=(0,s.Z)(["\n  flex: 1 1 auto;\n"]))),In=p()(bn.Z)(Ze||(Ze=(0,s.Z)(["\n  flex: 0 0 auto;\n  margin-left: 5px;\n"]))),Hn=function(){var e=(0,r.useState)(""),n=(0,On.Z)(e,2),t=n[0],o=n[1],i=(0,l.useSelector)((function(e){return e.TodosReducer.get("isCreatingTodo")})),c=(0,l.useDispatch)();return(0,ze.jsxs)(Fn,{component:"form",onSubmit:function(e){e.preventDefault(),t?(c(X.createTodo(t)),o("")):T.toast.warn("\ud560\uc77c\uc744 \uc785\ub825\ud558\uc138\uc694.")},children:[(0,ze.jsx)(Un,{variant:"outlined",size:"small",value:t,onChange:function(e){return o(e.currentTarget.value)}}),(0,ze.jsx)(In,{type:"submit",variant:"contained",size:"small",disabled:i,children:i?(0,ze.jsx)(an,{}):"\ucd94\uac00"})]})},zn=p()(mn.ZP)(we||(we=(0,s.Z)(["\n  border-bottom: solid 1px #eee;\n"]))),Qn=p()(jn.Z)(Re||(Re=(0,s.Z)(["\n  text-decoration: line-through;\n  color: #ccc;\n"]))),Yn=function(e){e.index;var n=e.id,t=e.isChecked,o=e.text,i=(e.moveTodo,(0,l.useDispatch)()),c=(0,r.useState)(!1),a=(0,On.Z)(c,2),s=a[0],d=a[1],u=(0,r.useState)(!1),h=(0,On.Z)(u,2),T=h[0],x=h[1];return(0,r.useEffect)((function(){return function(){d(!1),x(!1)}}),[]),(0,ze.jsxs)(zn,{children:[t?(0,ze.jsx)(Qn,{children:o}):(0,ze.jsx)(jn.Z,{children:o}),(0,ze.jsx)(Xe.Z,{size:"small",disabled:s,onClick:function(){d(!0),i(X.checkTodo(n))},children:s?(0,ze.jsx)(an,{}):t?(0,ze.jsx)(vn.Z,{}):(0,ze.jsx)(Sn.Z,{})}),(0,ze.jsx)(Xe.Z,{size:"small",onClick:function(){x(!0),i(X.deleteTodo(n))},children:T?(0,ze.jsx)(an,{}):(0,ze.jsx)(Dn.Z,{})})]})},Kn=p()(_n.Z)(ye||(ye=(0,s.Z)(["\n  display: flex;\n  flex-flow: column nowrap;\n  max-width: 400px;\n  width: 100%;\n\n  margin-top: 20px;\n"]))),Bn=function(){var e=(0,l.useSelector)((function(e){return e.TodosReducer.get("todoList").filter((function(e){return e.get("isChecked")}))}));return 0===e.size?null:(0,ze.jsxs)(Kn,{sx:{bgcolor:"background.paper"},dense:!0,children:["\uc644\ub8cc\ub41c \ub9ac\uc2a4\ud2b8",e.map((function(e,n){var t=e.get("id"),o=e.get("isChecked"),r=e.get("text");return(0,ze.jsx)(Yn,{index:n,id:t,isChecked:o,text:r},"completed-row-".concat(t))}))]})},Pn=p()(He.Z)(Le||(Le=(0,s.Z)(["\n  flex: 1 1 auto;\n\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  width: 100%;\n  padding: 20px 0;\n"]))),Mn=function(){return function(){var e=(0,l.useDispatch)(),n=(0,l.useSelector)((function(e){return e.TodosReducer.get("isCheckedTodo")})),t=(0,l.useSelector)((function(e){return e.TodosReducer.get("isCreatedTodo")})),o=(0,l.useSelector)((function(e){return e.TodosReducer.get("isDeletedTodo")}));(0,r.useEffect)((function(){e(X.fetchTodoList())}),[e]),(0,r.useEffect)((function(){n&&e(X.fetchTodoList())}),[e,n]),(0,r.useEffect)((function(){t&&e(X.fetchTodoList())}),[e,t]),(0,r.useEffect)((function(){o&&e(X.fetchTodoList())}),[e,o])}(),(0,ze.jsxs)(Pn,{maxWidth:!1,children:[(0,ze.jsx)("div",{children:(0,ze.jsx)(We.Z,{variant:"h4",component:"h1",gutterBottom:!0,children:"Todos"})}),(0,ze.jsxs)(gn.DndProvider,{backend:Cn.HTML5Backend,children:[(0,ze.jsx)(Hn,{}),(0,ze.jsx)(Ln,{}),(0,ze.jsx)(Bn,{})]})]})},Wn="0bf67285a716ffa036b887d46f154d59",qn="https://jingeunee.github.io/dev-log/oauth/callback/kakao",Gn=void 0===Wn?"":Wn,Jn=void 0===qn?"":qn,Nn=p()(He.Z)(ke||(ke=(0,s.Z)(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  background-color: #212529;\n\n  color: white;\n  padding: 0;\n"]))),Vn=p()(He.Z)(Ae||(Ae=(0,s.Z)(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n\n  @media screen and (max-width: 768px) {\n    flex-flow: column nowrap;\n  }\n"]))),Xn=p().div(be||(be=(0,s.Z)(["\n  flex: 0 0 auto;\n"]))),$n=p().div(Fe||(Fe=(0,s.Z)(["\n  margin-left: auto;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n\n  @media screen and (max-width: 768px) {\n    margin-left: unset;\n    width: 100%;\n  }\n"]))),et=p().div(Ue||(Ue=(0,s.Z)(["\n  flex: 0 0 auto;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  margin-right: 20px;\n\n  & > * {\n    margin: 0 10px;\n    text-decoration: none;\n    color: inherit;\n\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n"]))),nt=function(){var e=function(){var e=(0,r.useState)(!1),n=(0,On.Z)(e,2),t=n[0],o=n[1],i=(0,r.useState)(""),c=(0,On.Z)(i,2),a=c[0],s=c[1];return(0,r.useEffect)((function(){var e=_().get("token")||"";e&&Y().get("".concat("http://jingeuns.ml/api","/user/me"),{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){o(!0),s(e.data.name)})).catch((function(e){return console.log(e)}))}),[]),{isFetchedMe:t,username:a}}(),n=e.isFetchedMe,t=e.username;return(0,ze.jsx)(Nn,{maxWidth:!1,children:(0,ze.jsxs)(Vn,{maxWidth:"lg",children:[(0,ze.jsx)(Xn,{children:(0,ze.jsx)(bn.Z,{variant:"text",color:"inherit",onClick:function(){return window.location.href="/dev-log/"},children:(0,ze.jsx)("h1",{children:"\uc815\uc9c4\uadfc\uc758 Dev Log"})})}),(0,ze.jsxs)($n,{children:[(0,ze.jsxs)(et,{children:[(0,ze.jsx)(h.Link,{to:"/",color:"inherit",children:(0,ze.jsx)("h3",{children:"Blogs"})}),(0,ze.jsx)(h.Link,{to:"/todos",color:"inherit",children:(0,ze.jsx)("h3",{children:"Todos"})})]}),n?t:(0,ze.jsx)(bn.Z,{variant:"contained",style:{backgroundColor:"#FEE500",color:"#000000",borderRadius:"12px",width:"120px",marginLeft:"auto"},onClick:function(){var e="https://kauth.kakao.com/oauth/authorize?client_id=".concat(Gn,"&redirect_uri=").concat(Jn,"&response_type=code");window.location.href=e},children:"\uce74\uce74\uc624 \ub85c\uadf8\uc778"})]})]})})};var tt=function(){return(0,ze.jsxs)(ze.Fragment,{children:[(0,ze.jsx)(Ye,{children:(0,ze.jsx)(nt,{})}),(0,ze.jsx)(Be,{children:(0,ze.jsxs)(h.Switch,{children:[(0,ze.jsx)(h.Route,{path:"/todos",component:Mn}),(0,ze.jsx)(h.Route,{path:"/",component:En})]})}),(0,ze.jsx)(Me,{children:(0,ze.jsx)(Ge,{})})]})},ot=function(){var e=(0,h.useLocation)(),n=new URLSearchParams(e.search).get("code");return(0,r.useEffect)((function(){n&&Y().post("".concat("http://jingeuns.ml/api","/oauth/kakao"),{code:n}).then((function(e){_().set("token",e.data.access_token||""),window.location.replace("https://jingeunee.github.io/dev-log/")})).catch((function(e){return console.log(e)}))}),[n]),null};var rt,it=function(){return(0,ze.jsx)(h.Switch,{children:(0,ze.jsx)(h.Route,{path:"/oauth/callback/kakao",component:ot})})};var ct=p().div(rt||(rt=(0,s.Z)(["\n  position: absolute;\n  inset: 0px;\n  display: flex;\n  flex-flow: column nowrap;\n"]))),at=function(){return(0,ze.jsx)(d.ApolloProvider,{client:O,children:(0,ze.jsx)(x.QueryClientProvider,{client:S,children:(0,ze.jsx)(l.Provider,{store:Ie,children:(0,ze.jsxs)(f.ThemeProvider,{theme:D,children:[(0,ze.jsx)(u.ZP,{}),(0,ze.jsx)(T.ToastContainer,{}),(0,ze.jsx)(ct,{children:(0,ze.jsx)(h.BrowserRouter,{basename:"/dev-log",children:(0,ze.jsxs)(h.Switch,{children:[(0,ze.jsx)(h.Route,{path:"/oauth",component:it}),(0,ze.jsx)(h.Route,{path:"/",component:tt})]})})})]})})})})},st=function(e){e&&e instanceof Function&&t.e(165).then(t.t.bind(t,3165,23)).then((function(n){var t=n.getCLS,o=n.getFID,r=n.getFCP,i=n.getLCP,c=n.getTTFB;t(e),o(e),r(e),i(e),c(e)}))};a().render((0,ze.jsx)(i().StrictMode,{children:(0,ze.jsx)(at,{})}),document.getElementById("root")),st()}}]);
//# sourceMappingURL=492.0397c85b.chunk.js.map