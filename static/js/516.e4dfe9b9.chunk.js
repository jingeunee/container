"use strict";(self.webpackChunkdev_log=self.webpackChunkdev_log||[]).push([[516],{8219:function(e,n,t){t.r(n);var o,r=t(2950),i=t.n(r),c=t(2181),a=t.n(c),s=t(168),d=t(6335),u=t(4708),l=t(3076),h=t(5662),f=t(5978),T=t(7541),x=t(6563),p=t.n(x),E=(t(5462),t(8954),t(1413)),g=t(9406),m=t(3473),C=t.n(m),_="http://jingeuns.ml/api",v=new d.ApolloClient({cache:new d.InMemoryCache,uri:"".concat(_,"/graphql")}),Z=(0,d.createHttpLink)({uri:"".concat(_,"/blogs")}),O=(0,g.v)((function(e,n){var t=n.headers,o=C().get("token")||"";return{headers:(0,E.Z)((0,E.Z)({},t),{},{authorization:o?"Bearer ".concat(o):""})}})),j=new d.ApolloClient({cache:new d.InMemoryCache,link:O.concat(Z)}),S=new T.QueryClient,y={},w=t(1532),D=t(8690),R=t(9672),k=t.n(R),L=t(7757),b=t.n(L),A=t(5384),U=t(7780),F=t(4942),I=t(3144),H=t(5671),z=t(136),P=t(3668),Q=t(6760),Y=t.n(Q),B=t(6385),K=t(1629),M=b().mark(ee),W=b().mark(ne),$=b().mark(te),q=b().mark(oe),G=b().mark(re),N="toods",J="http://jingeuns.ml/api",V={TRY_FETCH_TODO_LIST:"".concat(N,"/TRY_FETCH_TODO_LIST"),REQUEST_FETCH_TODO_LIST:"".concat(N,"/REQUEST_FETCH_TODO_LIST"),SUCCESS_FETCH_TODO_LIST:"".concat(N,"/SUCCESS_FETCH_TODO_LIST"),FAILURE_FETCH_TODO_LIST:"".concat(N,"/FAILURE_FETCH_TODO_LIST"),TRY_CHECK_TODO:"".concat(N,"/TRY_CHECK_TODO"),REQUEST_CHECK_TODO:"".concat(N,"/REQUEST_CHECK_TODO"),SUCCESS_CHECK_TODO:"".concat(N,"/SUCCESS_CHECK_TODO"),FAILURE_CHECK_TODO:"".concat(N,"/FAILURE_CHECK_TODO"),TRY_CREATE_TODO:"".concat(N,"/TRY_CREATE_TODO"),REQUEST_CREATE_TODO:"".concat(N,"/REQUEST_CREATE_TODO"),SUCCESS_CREATE_TODO:"".concat(N,"/SUCCESS_CREATE_TODO"),FAILURE_CREATE_TODO:"".concat(N,"/FAILURE_CREATE_TODO"),TRY_DELETE_TODO:"".concat(N,"/TRY_DELETE_TODO"),REQUEST_DELETE_TODO:"".concat(N,"/REQUEST_DELETE_TODO"),SUCCESS_DELETE_TODO:"".concat(N,"/SUCCESS_DELETE_TODO"),FAILURE_DELETE_TODO:"".concat(N,"/FAILURE_DELETE_TODO")},X={fetchTodoList:(0,K.createAction)(V.TRY_FETCH_TODO_LIST),checkTodo:(0,K.createAction)(V.TRY_CHECK_TODO),createTodo:(0,K.createAction)(V.TRY_CREATE_TODO),deleteTodo:(0,K.createAction)(V.TRY_DELETE_TODO)};function ee(){return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,U.Fm)(V.TRY_FETCH_TODO_LIST,ne);case 2:return e.next=4,(0,U.Fm)(V.TRY_CHECK_TODO,te);case 4:return e.next=6,(0,U.Fm)(V.TRY_CREATE_TODO,oe);case 6:return e.next=8,(0,U.Fm)(V.TRY_DELETE_TODO,re);case 8:case"end":return e.stop()}}),M)}function ne(){var e,n;return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,U.gz)({type:V.REQUEST_FETCH_TODO_LIST});case 3:return t.next=5,(0,U.RE)((function(){return Y().get("".concat(J,"/todos"),{headers:{Authorization:"Bearer ".concat(C().get("token")||"")}}).then((function(e){if(e.status>=200&&e.status<300)return e;throw e})).then((function(e){return e.data})).catch((function(e){return e}))}));case 5:return e=t.sent,n={rows:(0,B.List)(e.map((function(e){return new ie(e)}))),count:e.length},t.next=9,(0,U.gz)({type:V.SUCCESS_FETCH_TODO_LIST,payload:n});case 9:t.next=15;break;case 11:return t.prev=11,t.t0=t.catch(0),t.next=15,(0,U.gz)({type:V.FAILURE_FETCH_TODO_LIST});case 15:case"end":return t.stop()}}),W,null,[[0,11]])}function te(e){var n,t,o;return b().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,U.gz)({type:V.REQUEST_CHECK_TODO});case 3:return r.next=5,(0,U.RE)((function(){return Y().put("".concat(J,"/todos/check/").concat(e.payload),{},{headers:{Authorization:"Bearer ".concat(C().get("token")||"")}}).then((function(e){if(e.status>=200&&e.status<300)return e;throw e})).catch((function(e){return Promise.reject(e)}))}));case 5:return r.next=7,(0,U.Ys)();case 7:return n=r.sent,t=n.TodosReducer.get("todoList"),o=t.findIndex((function(n){return n.get("id")===e.payload})),r.next=12,(0,U.gz)({type:V.SUCCESS_CHECK_TODO,payload:{index:o}});case 12:r.next=18;break;case 14:return r.prev=14,r.t0=r.catch(0),r.next=18,(0,U.gz)({type:V.FAILURE_CHECK_TODO});case 18:case"end":return r.stop()}}),$,null,[[0,14]])}function oe(e){return b().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,U.gz)({type:V.REQUEST_CREATE_TODO});case 3:return n.next=5,(0,U.RE)((function(){return Y().post("".concat(J,"/todos"),{text:e.payload},{headers:{Authorization:"Bearer ".concat(C().get("token")||"")}}).then((function(e){if(e.status>=200&&e.status<300)return e;throw e})).catch((function(e){return Promise.reject(e)}))}));case 5:return n.next=7,(0,U.gz)({type:V.SUCCESS_CREATE_TODO});case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,(0,U.gz)({type:V.FAILURE_CREATE_TODO});case 13:case"end":return n.stop()}}),q,null,[[0,9]])}function re(e){return b().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,U.gz)({type:V.REQUEST_DELETE_TODO});case 3:return n.next=5,(0,U.RE)((function(){return Y().delete("".concat(J,"/todos/").concat(e.payload),{headers:{Authorization:"Bearer ".concat(C().get("token")||"")}}).then((function(e){if(e.status>=200&&e.status<300)return e;throw e})).catch((function(e){return Promise.reject(e)}))}));case 5:return n.next=7,(0,U.gz)({type:V.SUCCESS_DELETE_TODO});case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,(0,U.gz)({type:V.FAILURE_DELETE_TODO});case 13:case"end":return n.stop()}}),G,null,[[0,9]])}var ie=function(e){(0,z.Z)(t,e);var n=(0,P.Z)(t);function t(e){return(0,H.Z)(this,t),e&&(e.isChecked="T"===((null===e||void 0===e?void 0:e.isChecked)||"")),n.call(this,e)}return(0,I.Z)(t)}((0,B.Record)({id:0,text:"",isChecked:!1,createdAt:0,lastModifiedAt:0})),ce=function(e){(0,z.Z)(t,e);var n=(0,P.Z)(t);function t(){return(0,H.Z)(this,t),n.apply(this,arguments)}return(0,I.Z)(t)}((0,B.Record)({fetchTodoListActionType:"",isFetchingTodoList:!1,todoList:(0,B.List)(),todoListCount:0,checkTodoActionType:"",isCheckingTodo:!1,isCheckedTodo:!1,createTodoActionType:"",isCreatingTodo:!1,isCreatedTodo:!1,deleteTodoActionType:"",isDeletingTodo:!1,isDeletedTodo:!1})),ae=new ce,se=(0,K.handleActions)((o={},(0,F.Z)(o,V.REQUEST_FETCH_TODO_LIST,(function(e,n){return e.set("fetchTodoListActionType",n.type).set("isFetchingTodoList",!0)})),(0,F.Z)(o,V.SUCCESS_FETCH_TODO_LIST,(function(e,n){return e.set("fetchTodoListActionType",n.type).set("isFetchingTodoList",!1).set("todoList",n.payload.rows).set("todoListCount",n.payload.count)})),(0,F.Z)(o,V.FAILURE_FETCH_TODO_LIST,(function(e,n){return e.set("fetchTodoListActionType",n.type).set("isFetchingTodoList",!1)})),(0,F.Z)(o,V.REQUEST_CHECK_TODO,(function(e,n){return e.set("checkTodoActionType",n.type).set("isCheckingTodo",!0).set("isCheckedTodo",!1)})),(0,F.Z)(o,V.SUCCESS_CHECK_TODO,(function(e,n){return e.set("checkTodoActionType",n.type).set("isCheckingTodo",!1).set("isCheckedTodo",!0).updateIn(["todoList",n.payload.index,"isChecked"],(function(e){return!e}))})),(0,F.Z)(o,V.FAILURE_CHECK_TODO,(function(e,n){return e.set("checkTodoActionType",n.type).set("isCheckingTodo",!1).set("isCheckedTodo",!1)})),(0,F.Z)(o,V.REQUEST_CREATE_TODO,(function(e,n){return e.set("createTodoActionType",n.type).set("isCreatingTodo",!0).set("isCreatedTodo",!1)})),(0,F.Z)(o,V.SUCCESS_CREATE_TODO,(function(e,n){return e.set("createTodoActionType",n.type).set("isCreatingTodo",!1).set("isCreatedTodo",!0)})),(0,F.Z)(o,V.FAILURE_CREATE_TODO,(function(e,n){return e.set("createTodoActionType",n.type).set("isCreatingTodo",!1).set("isCreatedTodo",!1)})),(0,F.Z)(o,V.REQUEST_DELETE_TODO,(function(e,n){return e.set("deleteTodoActionType",n.type).set("isDeletingTodo",!0).set("isDeletedTodo",!1)})),(0,F.Z)(o,V.SUCCESS_DELETE_TODO,(function(e,n){return e.set("deleteTodoActionType",n.type).set("isDeletingTodo",!1).set("isDeletedTodo",!0)})),(0,F.Z)(o,V.FAILURE_DELETE_TODO,(function(e,n){return e.set("deleteTodoActionType",n.type).set("isDeletingTodo",!1).set("isDeletedTodo",!1)})),o),ae),de=b().mark(he),ue={SET_USER_ME:"".concat("users","/SET_USER_ME")},le={setUserMe:(0,K.createAction)(ue.SET_USER_ME)};function he(){return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),de)}var fe=function(e){(0,z.Z)(t,e);var n=(0,P.Z)(t);function t(){return(0,H.Z)(this,t),n.apply(this,arguments)}return(0,I.Z)(t)}((0,B.Record)({id:0,name:"",email:""})),Te=function(e){(0,z.Z)(t,e);var n=(0,P.Z)(t);function t(){return(0,H.Z)(this,t),n.apply(this,arguments)}return(0,I.Z)(t)}((0,B.Record)({me:new fe})),xe=new Te,pe=(0,K.handleActions)((0,F.Z)({},ue.SET_USER_ME,(function(e,n){return e.set("me",new fe(n.payload.me))})),xe),Ee=b().mark(ge);function ge(){return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,U.rM)(ee);case 2:return e.next=4,(0,U.rM)(he);case 4:case"end":return e.stop()}}),Ee)}var me=(0,A.combineReducers)({TodosReducer:se,UsersReducer:pe}),Ce=((0,D.createLogger)(),k()()),_e=[Ce];var ve=(0,w.configureStore)({reducer:me,middleware:_e,devTools:false});Ce.run(ge);var Ze,Oe,je,Se,ye,we,De,Re,ke,Le,be,Ae,Ue,Fe,Ie,He,ze,Pe,Qe,Ye,Be,Ke,Me,We,$e,qe=ve,Ge=t(6445),Ne=t(184),Je=p()(Ge.Z)(Ze||(Ze=(0,s.Z)(["\n  flex: 0 0 90px;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n"]))),Ve=function(e){var n=e.children;return(0,Ne.jsx)(Je,{maxWidth:!1,children:n})},Xe=p()(Ge.Z)(Oe||(Oe=(0,s.Z)(["\n  flex: 1 1 auto;\n  display: flex;\n  flex-flow: column nowrap;\n"]))),en=function(e){var n=e.children;return(0,Ne.jsx)(Xe,{maxWidth:!1,children:n})},nn=p()(Ge.Z)(je||(je=(0,s.Z)(["\n  flex: 0 0 auto;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: center;\n  min-height: 40px;\n"]))),tn=function(e){var n=e.children;return(0,Ne.jsx)(nn,{maxWidth:!1,children:n})},on=t(890),rn=t(3060),cn=function(){return(0,Ne.jsxs)(on.Z,{variant:"body2",color:"text.secondary",align:"center",children:["Copyright \xa9 ",(0,Ne.jsx)(rn.Z,{color:"inherit",href:"https://jingeunee.github.io/dev-log",children:"https://jingeunee.github.io/dev-log"})," ",(new Date).getFullYear(),"."]})},an=t(2169),sn=t(9504),dn=t(3044),un=t(3400),ln=t(2898),hn=t(7621),fn=t(9585),Tn=t(1889),xn=t.p+"static/media/empty-image.5ddd75740f03a77a82d0.png",pn=t(1554),En=t(6624),gn=function(){return(0,Ne.jsx)(pn.Z,{variant:"indeterminate",disableShrink:!0,size:20,thickness:4,sx:(0,F.Z)({color:"#1a90ff",animationDuration:"550ms"},"& .".concat(En.Z.circle),{strokeLinecap:"round"})})},mn=p()(hn.Z)(ye||(ye=(0,s.Z)(["\n  width: 370px;\n  height: 350px;\n  margin: 5px;\n  padding: 0;\n"]))),Cn=function(){var e=(0,l.useSelector)((function(e){return e.UsersReducer.get("me").get("id")})),n=function(){var e=(0,d.useQuery)((0,d.gql)(Se||(Se=(0,s.Z)(["\n      query GetList($offset: Float!, $limit: Float!) {\n        blogs(offset: $offset, limit: $limit) {\n          id\n          title\n          body\n          thumbnail\n          createdAt\n          updatedAt\n          user {\n            id\n            name\n            email\n            image\n          }\n        }\n        count\n      }\n    "]))),{client:j,fetchPolicy:"network-only",variables:{offset:0,limit:40}}),n=e.loading,t=e.error,o=e.data;return{isLoading:n,data:{rows:(null===o||void 0===o?void 0:o.blogs)||[],count:(null===o||void 0===o?void 0:o.count)||0},error:t}}(),t=n.isLoading,o=n.data;return t?(0,Ne.jsx)(gn,{}):(0,Ne.jsx)(Tn.ZP,{container:!0,children:o.rows.map((function(n,t){var o,r,i,c=(null===(o=n.user)||void 0===o?void 0:o.id)||null,a=(null===(r=n.user)||void 0===r?void 0:r.image)||"",s=(null===(i=n.user)||void 0===i?void 0:i.name)||"",d=n.thumbnail||"",u=s.slice(0,1);return(0,Ne.jsxs)(mn,{elevation:3,variant:"elevation",children:[(0,Ne.jsx)(fn.Z,{avatar:(0,Ne.jsx)(dn.Z,{src:a,alt:s,children:u}),action:e===c&&(0,Ne.jsx)(un.Z,{"aria-label":"settings",children:(0,Ne.jsx)(ln.Z,{})}),title:n.title,subheader:n.createdAt}),d&&(0,Ne.jsx)(an.Z,{component:"img",alt:"green iguana",height:"170",style:{objectFit:"contain"},image:xn,title:"thumbnail"}),(0,Ne.jsx)(sn.Z,{children:(0,Ne.jsx)(on.Z,{variant:"body2",color:"textSecondary",component:"p",children:n.body})})]},n.id)}))})},_n=t(5861),vn=t(885),Zn=t(6151),On=t(7283),jn=t(7322),Sn=t.n(jn),yn=function(e){var n=e.setEditorInstance,t=(0,r.useState)(null),o=(0,vn.Z)(t,2),i=o[0],c=o[1];return(0,r.useEffect)((function(){var e=new(Sn())({el:document.querySelector("#editor"),height:"600px",initialEditType:"markdown",previewStyle:"vertical"});c(e)}),[]),(0,r.useEffect)((function(){i&&n(i)}),[i,n]),(0,Ne.jsx)("div",{id:"editor"})},wn=(0,d.gql)(we||(we=(0,s.Z)(["\n  mutation create($title: String!, $body: String!, $thumbnail: String!) {\n    create(\n      createBlogData: { title: $title, body: $body, thumbnail: $thumbnail }\n    ) {\n      id\n    }\n  }\n"]))),Dn=p()(Ge.Z)(De||(De=(0,s.Z)(["\n  display: flex;\n  flex-flow: column nowrap;\n\n  .actionGroup {\n    flex: 0 0 auto;\n\n    .saveBtn {\n      display: flex;\n      margin-left: auto;\n    }\n  }\n  .editorWrap {\n    flex: 1 1 auto;\n  }\n"]))),Rn=function(){var e=function(){var e,n=(0,d.useMutation)(wn,{client:j}),t=(0,vn.Z)(n,2),o=t[0],r=t[1],i=r.loading,c=r.error,a=r.data;return{onCreate:function(e,n,t){o({variables:{title:e,body:n,thumbnail:t}})},isLoading:i,isCreated:!(null===a||void 0===a||null===(e=a.create)||void 0===e||!e.id),error:c}}(),n=e.onCreate,t=e.isLoading,o=e.isCreated,i=(0,h.useHistory)().push,c=(0,r.useState)(""),a=(0,vn.Z)(c,2),s=a[0],u=a[1],l=(0,r.useState)(null),f=(0,vn.Z)(l,2),T=f[0],x=f[1];return(0,r.useEffect)((function(){o&&(0,_n.Z)(b().mark((function e(){return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,200)}));case 2:i("/");case 3:case"end":return e.stop()}}),e)})))()}),[o,i]),(0,Ne.jsxs)(Dn,{maxWidth:!1,children:[(0,Ne.jsx)("div",{className:"actionGroup",children:(0,Ne.jsx)(Zn.Z,{className:"saveBtn",variant:"contained",disabled:t,onClick:function(){s&&T&&n(s,T.getMarkdown(),xn)},children:t?(0,Ne.jsx)(gn,{}):"\uc800\uc7a5"})}),(0,Ne.jsx)("div",{children:(0,Ne.jsx)(On.Z,{placeholder:"\uc81c\ubaa9",fullWidth:!0,margin:"normal",value:s,onChange:function(e){u(e.currentTarget.value)}})}),(0,Ne.jsx)("div",{className:"editorWrap",children:(0,Ne.jsx)(yn,{setEditorInstance:function(e){x(e)}})})]})},kn=p()(Ge.Z)(Re||(Re=(0,s.Z)(["\n  /* background-color: #eee; */\n  flex: 1 1 auto;\n"]))),Ln=p()(Ge.Z)(ke||(ke=(0,s.Z)(["\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n"]))),bn=function(){return(0,Ne.jsx)(kn,{maxWidth:!1,children:(0,Ne.jsxs)(Ln,{maxWidth:"lg",children:[(0,Ne.jsx)("h1",{children:"Blogs"}),(0,Ne.jsxs)(h.Switch,{children:[(0,Ne.jsx)(h.Route,{path:"/register",component:Rn}),(0,Ne.jsx)(h.Route,{path:"/",component:Cn})]})]})})},An=t(7246),Un=t(1974),Fn=t(493),In=t(4852),Hn=t(9900),zn=t(872),Pn=t(8937),Qn=t(7247),Yn=p()(In.ZP)(Le||(Le=(0,s.Z)(["\n  border-bottom: solid 1px #eee;\n"]))),Bn=p()(Hn.Z)(be||(be=(0,s.Z)(["\n  text-decoration: line-through;\n  color: #ccc;\n"]))),Kn=function(e){var n=e.index,t=e.id,o=e.isChecked,i=e.text,c=e.moveTodo,a=(0,l.useDispatch)(),s=(0,r.useState)(!1),d=(0,vn.Z)(s,2),u=d[0],h=d[1],f=(0,r.useState)(!1),T=(0,vn.Z)(f,2),x=T[0],p=T[1],E=(0,r.useRef)(null),g=(0,An.useDrop)({accept:"card",collect:function(e){return{handlerId:e.getHandlerId()}},hover:function(e,t){var o;if(E.current&&c){var r=e.index,i=n;if(r!==i){var a=null===(o=E.current)||void 0===o?void 0:o.getBoundingClientRect(),s=(a.bottom-a.top)/2,d=t.getClientOffset().y-a.top;r<i&&d<s||r>i&&d>s||(c(r,i),e.index=i)}}}}),m=(0,vn.Z)(g,2),C=m[0].handlerId,_=m[1],v=(0,An.useDrag)({type:"card",item:function(){return{id:t,index:n}},collect:function(e){return{isDragging:e.isDragging()}}}),Z=(0,vn.Z)(v,2),O=Z[0].isDragging,j=Z[1];(0,r.useEffect)((function(){return function(){h(!1),p(!1)}}),[]);var S=O?0:1;return j(_(E)),(0,Ne.jsxs)(Yn,{"data-handler-id":C,ref:E,style:{border:"1px dashed gray",padding:"0.5rem 1rem",marginBottom:".5rem",backgroundColor:"white",cursor:"move",opacity:S},children:[o?(0,Ne.jsx)(Bn,{children:i}):(0,Ne.jsx)(Hn.Z,{children:i}),(0,Ne.jsx)(un.Z,{size:"small",disabled:u,onClick:function(){h(!0),a(X.checkTodo(t))},children:u?(0,Ne.jsx)(gn,{}):o?(0,Ne.jsx)(zn.Z,{}):(0,Ne.jsx)(Pn.Z,{})}),(0,Ne.jsx)(un.Z,{size:"small",onClick:function(){p(!0),a(X.deleteTodo(t))},children:x?(0,Ne.jsx)(gn,{}):(0,Ne.jsx)(Qn.Z,{})})]})},Mn=p()(Fn.Z)(Ae||(Ae=(0,s.Z)(["\n  display: flex;\n  flex-flow: column nowrap;\n  max-width: 400px;\n  width: 100%;\n"]))),Wn=function(){var e=(0,l.useSelector)((function(e){return e.TodosReducer.get("todoList").filter((function(e){return!e.get("isChecked")}))})),n=function(e,n){console.log(e,n)};return(0,Ne.jsx)(Mn,{sx:{bgcolor:"background.paper"},dense:!0,children:e.map((function(e,t){var o=e.get("id"),r=e.get("isChecked"),i=e.get("text");return(0,Ne.jsx)(Kn,{index:t,id:o,isChecked:r,text:i,moveTodo:n},"row-".concat(o))}))})},$n=t(4554),qn=p()($n.Z)(Ue||(Ue=(0,s.Z)(["\n  display: flex;\n  max-width: 400px;\n  width: 100%;\n  padding-bottom: 10px;\n  border-bottom: solid 1px #eee;\n"]))),Gn=p()(On.Z)(Fe||(Fe=(0,s.Z)(["\n  flex: 1 1 auto;\n"]))),Nn=p()(Zn.Z)(Ie||(Ie=(0,s.Z)(["\n  flex: 0 0 auto;\n  margin-left: 5px;\n"]))),Jn=function(){var e=(0,r.useState)(""),n=(0,vn.Z)(e,2),t=n[0],o=n[1],i=(0,l.useSelector)((function(e){return e.TodosReducer.get("isCreatingTodo")})),c=(0,l.useDispatch)();return(0,Ne.jsxs)(qn,{component:"form",onSubmit:function(e){e.preventDefault(),t?(c(X.createTodo(t)),o("")):f.toast.warn("\ud560\uc77c\uc744 \uc785\ub825\ud558\uc138\uc694.")},children:[(0,Ne.jsx)(Gn,{variant:"outlined",size:"small",value:t,onChange:function(e){return o(e.currentTarget.value)}}),(0,Ne.jsx)(Nn,{type:"submit",variant:"contained",size:"small",disabled:i,children:i?(0,Ne.jsx)(gn,{}):"\ucd94\uac00"})]})},Vn=p()(In.ZP)(He||(He=(0,s.Z)(["\n  border-bottom: solid 1px #eee;\n"]))),Xn=p()(Hn.Z)(ze||(ze=(0,s.Z)(["\n  text-decoration: line-through;\n  color: #ccc;\n"]))),et=function(e){e.index;var n=e.id,t=e.isChecked,o=e.text,i=(e.moveTodo,(0,l.useDispatch)()),c=(0,r.useState)(!1),a=(0,vn.Z)(c,2),s=a[0],d=a[1],u=(0,r.useState)(!1),h=(0,vn.Z)(u,2),f=h[0],T=h[1];return(0,r.useEffect)((function(){return function(){d(!1),T(!1)}}),[]),(0,Ne.jsxs)(Vn,{children:[t?(0,Ne.jsx)(Xn,{children:o}):(0,Ne.jsx)(Hn.Z,{children:o}),(0,Ne.jsx)(un.Z,{size:"small",disabled:s,onClick:function(){d(!0),i(X.checkTodo(n))},children:s?(0,Ne.jsx)(gn,{}):t?(0,Ne.jsx)(zn.Z,{}):(0,Ne.jsx)(Pn.Z,{})}),(0,Ne.jsx)(un.Z,{size:"small",onClick:function(){T(!0),i(X.deleteTodo(n))},children:f?(0,Ne.jsx)(gn,{}):(0,Ne.jsx)(Qn.Z,{})})]})},nt=p()(Fn.Z)(Pe||(Pe=(0,s.Z)(["\n  display: flex;\n  flex-flow: column nowrap;\n  max-width: 400px;\n  width: 100%;\n\n  margin-top: 20px;\n"]))),tt=function(){var e=(0,l.useSelector)((function(e){return e.TodosReducer.get("todoList").filter((function(e){return e.get("isChecked")}))}));return 0===e.size?null:(0,Ne.jsxs)(nt,{sx:{bgcolor:"background.paper"},dense:!0,children:["\uc644\ub8cc\ub41c \ub9ac\uc2a4\ud2b8",e.map((function(e,n){var t=e.get("id"),o=e.get("isChecked"),r=e.get("text");return(0,Ne.jsx)(et,{index:n,id:t,isChecked:o,text:r},"completed-row-".concat(t))}))]})},ot=p()(Ge.Z)(Qe||(Qe=(0,s.Z)(["\n  /* background-color: #eee; */\n  flex: 1 1 auto;\n"]))),rt=p()(Ge.Z)(Ye||(Ye=(0,s.Z)(["\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n"]))),it=function(){return function(){var e=(0,l.useDispatch)(),n=(0,l.useSelector)((function(e){return e.TodosReducer.get("isCheckedTodo")})),t=(0,l.useSelector)((function(e){return e.TodosReducer.get("isCreatedTodo")})),o=(0,l.useSelector)((function(e){return e.TodosReducer.get("isDeletedTodo")}));(0,r.useEffect)((function(){e(X.fetchTodoList())}),[e]),(0,r.useEffect)((function(){n&&e(X.fetchTodoList())}),[e,n]),(0,r.useEffect)((function(){t&&e(X.fetchTodoList())}),[e,t]),(0,r.useEffect)((function(){o&&e(X.fetchTodoList())}),[e,o])}(),(0,Ne.jsx)(ot,{maxWidth:!1,children:(0,Ne.jsxs)(rt,{maxWidth:"lg",children:[(0,Ne.jsx)("h1",{children:"Todos"}),(0,Ne.jsxs)(An.DndProvider,{backend:Un.HTML5Backend,children:[(0,Ne.jsx)(Jn,{}),(0,Ne.jsx)(Wn,{}),(0,Ne.jsx)(tt,{})]})]})})},ct=t(3767),at=t(3208),st=t(703),dt=t(5892),ut=t(3903),lt=t(5028),ht="0bf67285a716ffa036b887d46f154d59",ft="https://jingeunee.github.io/dev-log/oauth/callback/kakao",Tt=void 0===ht?"":ht,xt=void 0===ft?"":ft,pt=p()(Ge.Z)(Be||(Be=(0,s.Z)(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  background-color: #212529;\n\n  color: white;\n  padding: 0;\n"]))),Et=p()(Ge.Z)(Ke||(Ke=(0,s.Z)(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n\n  @media screen and (max-width: 768px) {\n    flex-flow: column nowrap;\n  }\n"]))),gt=p().div(Me||(Me=(0,s.Z)(["\n  flex: 0 0 auto;\n"]))),mt=p().div(We||(We=(0,s.Z)(["\n  margin-left: auto;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n\n  @media screen and (max-width: 768px) {\n    margin-left: unset;\n    width: 100%;\n  }\n"]))),Ct=p().div($e||($e=(0,s.Z)(["\n  flex: 0 0 auto;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  margin-right: 20px;\n\n  & > * {\n    margin: 0 10px;\n    text-decoration: none;\n    color: inherit;\n\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n"]))),_t=function(){var e=(0,h.useHistory)(),n=function(){var e=(0,l.useDispatch)(),n=(0,r.useState)(!1),t=(0,vn.Z)(n,2),o=t[0],i=t[1],c=(0,r.useState)(""),a=(0,vn.Z)(c,2),s=a[0],d=a[1];return(0,r.useEffect)((function(){var n=C().get("token")||"";n&&Y().get("".concat("http://jingeuns.ml/api","/user/me"),{headers:{Authorization:"Bearer ".concat(n)}}).then((function(n){i(!0),d(n.data.name),e(le.setUserMe(n.data))})).catch((function(e){return console.log(e)}))}),[e]),{isFetchedMe:o,username:s}}(),t=n.isFetchedMe,o=n.username,i=(0,r.useState)(!1),c=(0,vn.Z)(i,2),a=c[0],s=c[1],d=(0,r.useRef)(null),u=function(e){d.current&&d.current.contains(e.target)||s(!1)};function f(e){"Tab"===e.key?(e.preventDefault(),s(!1)):"Escape"===e.key&&s(!1)}var T=function(n){e.push("/register"),u(n)},x=(0,r.useRef)(a);return(0,r.useEffect)((function(){!0===x.current&&!1===a&&d.current.focus(),x.current=a}),[a]),(0,Ne.jsx)(pt,{maxWidth:!1,children:(0,Ne.jsxs)(Et,{maxWidth:"lg",children:[(0,Ne.jsx)(gt,{children:(0,Ne.jsx)(Zn.Z,{variant:"text",color:"inherit",onClick:function(){return window.location.href="/dev-log/"},children:(0,Ne.jsx)("h1",{children:"\uc815\uc9c4\uadfc\uc758 Dev Log"})})}),(0,Ne.jsxs)(mt,{children:[(0,Ne.jsxs)(Ct,{children:[(0,Ne.jsx)(h.Link,{to:"/",color:"inherit",children:(0,Ne.jsx)("h3",{children:"Blogs"})}),(0,Ne.jsx)(h.Link,{to:"/todos",color:"inherit",children:(0,Ne.jsx)("h3",{children:"Todos"})})]}),t?(0,Ne.jsxs)("h4",{style:{marginLeft:"auto",color:"yellow"},children:[(0,Ne.jsxs)(Zn.Z,{ref:d,id:"composition-button","aria-controls":a?"composition-menu":void 0,"aria-expanded":a?"true":void 0,"aria-haspopup":"true",color:"inherit",onClick:function(){s((function(e){return!e}))},children:["Hello, ",o,"!"]}),(0,Ne.jsx)(dt.Z,{open:a,anchorEl:d.current,role:void 0,placement:"bottom-start",transition:!0,disablePortal:!0,children:function(e){var n=e.TransitionProps,t=e.placement;return(0,Ne.jsx)(at.Z,(0,E.Z)((0,E.Z)({},n),{},{style:{transformOrigin:"bottom-start"===t?"left top":"left bottom"},children:(0,Ne.jsx)(st.Z,{children:(0,Ne.jsx)(ct.Z,{onClickAway:u,children:(0,Ne.jsxs)(lt.Z,{autoFocusItem:a,id:"composition-menu","aria-labelledby":"composition-button",onKeyDown:f,children:[(0,Ne.jsx)(ut.Z,{onClick:T,children:"\ub0b4 \ube14\ub85c\uadf8 \uc791\uc131"}),(0,Ne.jsx)(ut.Z,{disabled:!0,onClick:u,children:"\ub0b4 \uc815\ubcf4"}),(0,Ne.jsx)(ut.Z,{disabled:!0,onClick:u,children:"\ub85c\uadf8\uc544\uc6c3"})]})})})}))}})]}):(0,Ne.jsx)(Zn.Z,{variant:"contained",style:{backgroundColor:"#FEE500",color:"#000000",borderRadius:"12px",width:"120px",marginLeft:"auto"},onClick:function(){var e="https://kauth.kakao.com/oauth/authorize?client_id=".concat(Tt,"&redirect_uri=").concat(xt,"&response_type=code");window.location.href=e},children:"\uce74\uce74\uc624 \ub85c\uadf8\uc778"})]})]})})};var vt=function(){return(0,Ne.jsxs)(Ne.Fragment,{children:[(0,Ne.jsx)(Ve,{children:(0,Ne.jsx)(_t,{})}),(0,Ne.jsx)(en,{children:(0,Ne.jsxs)(h.Switch,{children:[(0,Ne.jsx)(h.Route,{path:"/todos",component:it}),(0,Ne.jsx)(h.Route,{path:"/",component:bn})]})}),(0,Ne.jsx)(tn,{children:(0,Ne.jsx)(cn,{})})]})},Zt=function(){var e=(0,h.useLocation)(),n=new URLSearchParams(e.search).get("code");return(0,r.useEffect)((function(){n&&Y().post("".concat("http://jingeuns.ml/api","/oauth/kakao"),{code:n}).then((function(e){C().set("token",e.data.access_token||""),window.location.replace("https://jingeunee.github.io/dev-log/")})).catch((function(e){return console.log(e)}))}),[n]),null};var Ot,jt=function(){return(0,Ne.jsx)(h.Switch,{children:(0,Ne.jsx)(h.Route,{path:"/oauth/callback/kakao",component:Zt})})};var St=p().div(Ot||(Ot=(0,s.Z)(["\n  position: absolute;\n  inset: 0px;\n  display: flex;\n  flex-flow: column nowrap;\n"]))),yt=function(){return(0,Ne.jsx)(d.ApolloProvider,{client:v,children:(0,Ne.jsx)(T.QueryClientProvider,{client:S,children:(0,Ne.jsx)(l.Provider,{store:qe,children:(0,Ne.jsxs)(x.ThemeProvider,{theme:y,children:[(0,Ne.jsx)(u.ZP,{}),(0,Ne.jsx)(f.ToastContainer,{}),(0,Ne.jsx)(St,{children:(0,Ne.jsx)(h.BrowserRouter,{basename:"/dev-log",children:(0,Ne.jsxs)(h.Switch,{children:[(0,Ne.jsx)(h.Route,{path:"/oauth",component:jt}),(0,Ne.jsx)(h.Route,{path:"/",component:vt})]})})})]})})})})},wt=function(e){e&&e instanceof Function&&t.e(165).then(t.t.bind(t,3165,23)).then((function(n){var t=n.getCLS,o=n.getFID,r=n.getFCP,i=n.getLCP,c=n.getTTFB;t(e),o(e),r(e),i(e),c(e)}))};a().render((0,Ne.jsx)(i().StrictMode,{children:(0,Ne.jsx)(yt,{})}),document.getElementById("root")),wt()}}]);
//# sourceMappingURL=516.e4dfe9b9.chunk.js.map