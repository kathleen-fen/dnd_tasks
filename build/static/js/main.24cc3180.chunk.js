(this.webpackJsonpdnd_tasks=this.webpackJsonpdnd_tasks||[]).push([[0],{42:function(e,t){},89:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var c={};n.r(c),n.d(c,"allInfoSaga",(function(){return se})),n.d(c,"columnOrderSaga",(function(){return ge})),n.d(c,"columnsSaga",(function(){return ke})),n.d(c,"addColumnSaga",(function(){return Se})),n.d(c,"addTaskSaga",(function(){return Me})),n.d(c,"deleteTaskSaga",(function(){return Pe})),n.d(c,"editTaskSaga",(function(){return Fe})),n.d(c,"deleteColumnSaga",(function(){return We})),n.d(c,"editColumnSaga",(function(){return Ve}));var r={};n.r(r),n.d(r,"columns",(function(){return Ot})),n.d(r,"columnOrder",(function(){return pt})),n.d(r,"tasks",(function(){return xt})),n.d(r,"addMode",(function(){return ft})),n.d(r,"loading",(function(){return gt}));var a=n(0),s=n.n(a),o=n(21),u=n.n(o),i=(n(55),n(12)),d=n(17),l=n(50),b=n(7),j=n.n(b),O=n(3),p=n(14),x=n.n(p),f="https://tasks-2df6f-default-rtdb.firebaseio.com",g="-MrJWseBq4owGg_s87oW",v=function(e){return x.a.put("".concat(f,"/state/columnOrder.json"),e)},m=function(e){return x.a.put("".concat(f,"/state/columns.json"),e)},h=function(e){return x.a.post("".concat(f,"/state/columns.json"),e)},k=function(e){return x.a.post("".concat(f,"/state/tasks.json"),e)},w=function(e){return x.a.post("".concat(f,"/state/columnOrder.json"),'"'.concat(e,'"'))},I=function(e,t){return x.a.delete("".concat(f,"/state/columns/").concat(e,"/taskIds/").concat(t,".json"))},y=function(e){return x.a.delete("".concat(f,"/state/tasks/").concat(e,".json"))},C=function(e){return x.a.delete("".concat(f,"/state/columns/").concat(e,".json"))},E=function(e,t){return x.a.patch("".concat(f,"/state/columns/").concat(e,"/.json"),{taskIds:t})},D=function(e,t){return x.a.patch("".concat(f,"/state/columns/").concat(e,"/.json"),{title:t})},S=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),c=1;c<t;c++)n[c-1]=arguments[c];return function(){for(var t=arguments.length,c=new Array(t),r=0;r<t;r++)c[r]=arguments[r];var a={type:e};return n.forEach((function(e,t){a[n[t]]=c[t]})),a}},T=function(e,t){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,c=arguments.length>1?arguments[1]:void 0;return t.hasOwnProperty(c.type)?t[c.type](n,c):n}},_="SET_COLUMNS",A=S(_,"columns"),M="GET_ALL_INFO",L=S(M),R="SET_COLUMN_ORDER",N=S(R,"columnOrder"),P="SET_TASKS",U=S(P,"tasks"),K="SET_LOADING",B=S(K,"loading"),F=(S("SET_NEW_ORDER","result"),"UPDATE_COLUMN_ORDER"),J=S(F,"columnOrder"),G="UPDATE_COLUMNS",H=S(G,"columns"),W="SET_ADD_MODE",z=S(W,"addMode"),X="ADD_COLUMN",q=S(X,"newColumn"),V="ADD_TASK",Q=S(V,"newTask"),Y=(S("ADD_MODE","newItem"),"DELETE_TASK"),Z=S(Y,"task"),$="DELETE_COLUMN",ee=S($,"column"),te="EDIT_TASK",ne=S(te,"newTask"),ce="EDIT_COLUMN",re=S(ce,"column"),ae=j.a.mark(se);function se(){var e,t,n,c,r,a;return j.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Object(O.d)(M);case 2:return s.next=4,Object(O.b)(B(!0));case 4:return s.prev=4,s.next=7,x.a.get("".concat(f,"/state.json"));case 7:return e=s.sent,t=e.data,n=t.columns,c=t.columnOrder,r=t.tasks,console.log("tasks: ",r),Object.keys(n).forEach((function(e){n[e].id=e;var t=n[e].taskIds,c=[];t&&!Array.isArray(t)&&(Object.keys(t).forEach((function(e){c.push(t[e])})),n[e].taskIds=c)})),r?Object.keys(r).forEach((function(e){r[e].id=e})):r={},a=[],Object.keys(c).forEach((function(e){a.push(c[e])})),console.log("columns: ",n),s.next=17,Object(O.b)(N(a));case 17:return s.next=19,Object(O.b)(A(n));case 19:return s.next=21,Object(O.b)(U(r));case 21:return s.next=23,Object(O.b)(B(!1));case 23:s.next=28;break;case 25:s.prev=25,s.t0=s.catch(4),console.log("error all info: ",s.t0);case 28:case"end":return s.stop()}}),ae,null,[[4,25]])}var oe=n(19),ue=Object(oe.a)((function(e){return e.get("columns").toJS()}),(function(e){return e})),ie=function(e){return function(t){var n=ue(t);return n[e]?n[e]:null}},de=Object(oe.a)((function(e){return e.get("tasks").toJS()}),(function(e){return e})),le=function(e){return function(t){ue(t);var n=ie(e)(t),c=[];if(!n)return c;var r=de(t);return n.taskIds&&(c=n.taskIds.map((function(e){return r[e]}))),c}},be=Object(oe.a)((function(e){return e.get("columnOrder").toJS()}),(function(e){return e})),je=Object(oe.a)((function(e){return e.get("loading")}),(function(e){return e})),Oe=Object(oe.a)((function(e){return e.get("addMode")}),(function(e){return e})),pe=j.a.mark(fe),xe=j.a.mark(ge);function fe(e){var t;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.columnOrder,n.next=3,Object(O.c)(be);case 3:return n.sent,n.next=6,Object(O.b)(N(t));case 6:return n.prev=6,n.next=9,Object(O.b)(B(!0));case 9:return n.next=11,v(t);case 11:return n.sent,n.next=14,Object(O.b)(B(!1));case 14:n.next=19;break;case 16:n.prev=16,n.t0=n.catch(6),console.log("error in put: ",n.t0);case 19:case"end":return n.stop()}}),pe,null,[[6,16]])}function ge(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.e)(F,fe);case 2:case"end":return e.stop()}}),xe)}var ve=j.a.mark(he),me=j.a.mark(ke);function he(e){var t,n;return j.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.columns,c.next=3,Object(O.c)(ue);case 3:return n=c.sent,console.log("prev: ",n),c.prev=5,c.next=8,Object(O.b)(A(t));case 8:return c.next=10,Object(O.b)(B(!0));case 10:return c.next=12,m(t);case 12:return c.sent,c.next=15,Object(O.b)(B(!1));case 15:c.next=20;break;case 17:c.prev=17,c.t0=c.catch(5),console.log("error in put: ",c.t0);case 20:case"end":return c.stop()}}),ve,null,[[5,17]])}function ke(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.e)(G,he);case 2:case"end":return e.stop()}}),me)}var we=n(13),Ie=n(9),ye=n(4),Ce=j.a.mark(De),Ee=j.a.mark(Se);function De(e){var t,n,c,r,a,s,o,u;return j.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,Object(O.b)(B(!0));case 3:return t=e.newColumn,i.next=6,h(t);case 6:return n=i.sent,c=n.data,i.next=10,w(c.name);case 10:return console.log("saga res: ",c.name),r=Object(ye.a)({id:c.name},t),i.next=14,Object(O.c)(ue);case 14:return a=i.sent,i.next=17,Object(O.c)(be);case 17:return s=i.sent,o=Object(ye.a)(Object(ye.a)({},a),{},Object(Ie.a)({},c.name,r)),u=[].concat(Object(we.a)(s),[c.name]),i.next=22,Object(O.b)(A(o));case 22:return i.next=24,Object(O.b)(N(u));case 24:return i.next=26,Object(O.b)(B(!1));case 26:i.next=31;break;case 28:i.prev=28,i.t0=i.catch(0),console.log("error in put: ",i.t0);case 31:case"end":return i.stop()}}),Ce,null,[[0,28]])}function Se(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.e)(X,De);case 2:case"end":return e.stop()}}),Ee)}var Te=j.a.mark(Ae),_e=j.a.mark(Me);function Ae(e){var t,n,c,r,a,s,o,u;return j.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,Object(O.b)(B(!0));case 3:return t=e.newTask,i.next=6,k(t);case 6:return n=i.sent,c=n.data,r=Object(ye.a)({id:c.name},t),i.next=11,Object(O.c)(de);case 11:return a=i.sent,s=Object(ye.a)(Object(ye.a)({},a),{},Object(Ie.a)({},c.name,r)),i.next=15,Object(O.c)(ue);case 15:return o=i.sent,u=Object(ye.a)(Object(ye.a)({},o),{},Object(Ie.a)({},g,Object(ye.a)(Object(ye.a)({},o[g]),{},{taskIds:o[g].taskIds?[].concat(Object(we.a)(o[g].taskIds),[c.name]):[c.name]}))),i.next=19,d=g,l=o[g].taskIds?[].concat(Object(we.a)(o[g].taskIds),[c.name]):[c.name],x.a.put("".concat(f,"/state/columns/").concat(d,"/taskIds.json"),l);case 19:return i.next=21,Object(O.b)(U(s));case 21:return i.next=23,Object(O.b)(A(u));case 23:return i.next=25,Object(O.b)(B(!1));case 25:i.next=30;break;case 27:i.prev=27,i.t0=i.catch(0),console.log("error in put: ",i.t0);case 30:case"end":return i.stop()}var d,l}),Te,null,[[0,27]])}function Me(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.e)(V,Ae);case 2:case"end":return e.stop()}}),_e)}var Le=j.a.mark(Ne),Re=j.a.mark(Pe);function Ne(e){var t,n,c,r,a,s;return j.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,Object(O.b)(B(!0));case 3:return t=e.task,n=t.columnId,c=t.taskIndex,r=t.taskId,o.next=6,I(n,c);case 6:return o.next=8,y(r);case 8:return o.next=10,Object(O.c)(ue);case 10:return a=o.sent,(s=Object(we.a)(a[n].taskIds)).splice(c,1),o.next=15,Object(O.b)(A(Object(ye.a)(Object(ye.a)({},a),{},Object(Ie.a)({},n,Object(ye.a)(Object(ye.a)({},a[n]),{},{taskIds:s})))));case 15:o.next=20;break;case 17:o.prev=17,o.t0=o.catch(0),console.log("error in put: ",o.t0);case 20:return o.next=22,Object(O.b)(B(!1));case 22:case"end":return o.stop()}}),Le,null,[[0,17]])}function Pe(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.e)(Y,Ne);case 2:case"end":return e.stop()}}),Re)}var Ue=j.a.mark(Be),Ke=j.a.mark(Fe);function Be(e){var t,n,c,r,a;return j.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,Object(O.b)(B(!0));case 3:return t=e.newTask,n=t.content,c=t.id,s.next=6,Object(O.c)(de);case 6:return r=s.sent,a=Object(ye.a)(Object(ye.a)({},r),{},Object(Ie.a)({},c,Object(ye.a)(Object(ye.a)({},r[c]),{},{content:n}))),s.next=10,Object(O.b)(U(a));case 10:return s.next=12,o=c,u=n,x.a.patch("".concat(f,"/state/tasks/").concat(o,"/.json"),{content:u});case 12:console.log("patch saga"),s.next=18;break;case 15:s.prev=15,s.t0=s.catch(0),console.log("error in patch: ",s.t0);case 18:return s.next=20,Object(O.b)(B(!1));case 20:case"end":return s.stop()}var o,u}),Ue,null,[[0,15]])}function Fe(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.e)(te,Be);case 2:case"end":return e.stop()}}),Ke)}var Je=j.a.mark(He),Ge=j.a.mark(We);function He(e){var t,n,c,r,a,s,o,u,i;return j.a.wrap((function(d){for(;;)switch(d.prev=d.next){case 0:return d.prev=0,d.next=3,Object(O.b)(B(!0));case 3:return t=e.column.columnId,d.next=6,Object(O.c)(ie(t));case 6:return n=d.sent,d.next=9,Object(O.c)(ie(g));case 9:return c=d.sent,d.next=12,Object(O.c)(be);case 12:return r=d.sent,console.log("column: ",n),console.log("storageColumn: ",c),console.log("columnOrder: ",r),a=c.taskIds?Object(we.a)(c.taskIds):[],s=n.taskIds?Object(we.a)(n.taskIds):[],o=Object(ye.a)(Object(ye.a)({},c),{},{taskIds:[].concat(Object(we.a)(a),Object(we.a)(s))}),u=r.filter((function(e){return e!==t})),console.log("newStorageColumn: ",o),console.log("newColumnOrder: ",u),d.next=24,v(u);case 24:return d.next=26,E(g,[].concat(Object(we.a)(a),Object(we.a)(s)));case 26:return d.next=28,C(t);case 28:return d.next=30,Object(O.c)(ue);case 30:return i=d.sent,d.next=33,Object(O.b)(A(Object(ye.a)(Object(ye.a)({},i),{},Object(Ie.a)({},g,o))));case 33:return d.next=35,Object(O.b)(N(u));case 35:d.next=40;break;case 37:d.prev=37,d.t0=d.catch(0),console.log("error in put: ",d.t0);case 40:return d.next=42,Object(O.b)(B(!1));case 42:case"end":return d.stop()}}),Je,null,[[0,37]])}function We(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.e)($,He);case 2:case"end":return e.stop()}}),Ge)}var ze=j.a.mark(qe),Xe=j.a.mark(Ve);function qe(e){var t,n,c,r,a,s;return j.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Object(O.c)(ue);case 2:return t=o.sent,o.prev=3,o.next=6,Object(O.b)(B(!0));case 6:return n=e.column,c=n.columnId,r=n.columnTitle,o.next=9,Object(O.c)(ie(c));case 9:return a=o.sent,s=Object(ye.a)(Object(ye.a)({},a),{},{title:r}),o.next=13,Object(O.b)(A(Object(ye.a)(Object(ye.a)({},t),{},Object(Ie.a)({},c,Object(ye.a)({},s)))));case 13:return o.next=15,Object(O.a)(D,c,r);case 15:o.next=22;break;case 17:return o.prev=17,o.t0=o.catch(3),console.log("error in patch: ",o.t0),o.next=22,Object(O.b)(A(Object(ye.a)({},t)));case 22:return o.next=24,Object(O.b)(B(!1));case 24:case"end":return o.stop()}}),ze,null,[[3,17]])}function Ve(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.e)(ce,qe);case 2:case"end":return e.stop()}}),Xe)}var Qe,Ye,Ze,$e,et,tt,nt,ct,rt,at,st,ot,ut,it,dt,lt,bt=n(15),jt=Object(bt.a)({tasks:{},columns:{},columnOrder:[],loading:!0,addMode:!1}),Ot=T(null,Object(Ie.a)({},_,(function(e,t){var n=t.columns;return Object(bt.a)(n)}))),pt=T(null,Object(Ie.a)({},R,(function(e,t){var n=t.columnOrder;return Object(bt.a)(n)}))),xt=T(null,Object(Ie.a)({},P,(function(e,t){var n=t.tasks;return Object(bt.a)(n)}))),ft=T(null,Object(Ie.a)({},W,(function(e,t){var n=t.addMode;return Object(bt.a)(n)}))),gt=T(null,Object(Ie.a)({},K,(function(e,t){var n=t.loading;return Object(bt.a)(n)}))),vt=function(e){var t=Object(bt.a)(Object.keys(e).reduce((function(t,n){return t[n]=e[n](void 0,[]),t}),{}));return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,c=arguments.length>1?arguments[1]:void 0;return Object.keys(e).reduce((function(t,n){var r=(0,e[n])(t.get(n),c);if(void 0===r)throw new Error('A reducer returned undefined when reducing key::"'.concat(n,'"'));return t.set(n,r)}),n)}}(r),mt=(n(42),n(10)),ht=n(18),kt=n(11),wt=n(20),It=n(2),yt=kt.a.div(Qe||(Qe=Object(mt.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 15px;\n  padding-left: 8px;\n  cursor: pointer;\n"]))),Ct=function(e){return Object(It.jsx)(yt,{onClick:e.onClick,children:Object(It.jsx)("img",{src:e.img,alt:"icon"})})},Et=n.p+"static/media/trash-alt-solid.6346df54.svg",Dt=n.p+"static/media/pen-solid.4b1bdc1c.svg",St=n.p+"static/media/check-solid.5dcf9568.svg",Tt=n.p+"static/media/times-solid.ea7c95d7.svg",_t=kt.a.textarea(Ye||(Ye=Object(mt.a)(["\n  outline: none;\n  border: 0;\n  width: 100%;\n  background-color: transparent;\n"]))),At=function(e){var t=Object(a.useRef)(null);return Object(It.jsx)(_t,{ref:t,onBlur:e.onBlur,type:e.type,value:e.value,onChange:e.onChange,autoFocus:!0,onKeyDown:e.onKeyDown})},Mt=kt.a.div(Ze||(Ze=Object(mt.a)(["\n  padding: 8px;\n  border: 1px solid lightgrey;\n  border-radius: 2px;\n  margin-bottom: 8px;\n  background-color: ",";\n  line-height: 1.5;\n  display: flex;\n  justify-content: space-between;\n"])),(function(e){return e.isDragging?"lightgreen":"white"})),Lt=kt.a.div($e||($e=Object(mt.a)(["\n  display: flex;\n"]))),Rt=function(e){var t=Object(a.useState)(!1),n=Object(wt.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(""),u=Object(wt.a)(o,2),d=u[0],l=u[1],b=Object(i.c)(),j=function(){b(Z({columnId:e.columnId,taskId:e.task.id,taskIndex:e.index}))},O=function(e){l(e.target.value)},p=function(t){r(!1),b(ne({id:e.task.id,content:d.replace(/\r?\n|\r/g,"<br>")}))},x=function(t){if("Escape"===t.code)r(!1),l(e.task.content)};return Object(It.jsx)(ht.b,{draggableId:e.task.id,index:e.index,children:function(t,n){return Object(It.jsx)("div",Object(ye.a)(Object(ye.a)(Object(ye.a)({ref:t.innerRef},t.draggableProps),t.dragHandleProps),{},{children:Object(It.jsx)(Mt,{isDragging:n.isDragging,children:c?Object(It.jsxs)(s.a.Fragment,{children:[Object(It.jsx)(At,{type:"text",value:d,onChange:O,onBlur:p,onKeyDown:x}),Object(It.jsxs)(Lt,{children:[Object(It.jsx)(Ct,{img:St,onClick:p}),Object(It.jsx)(Ct,{img:Tt,onClick:function(){r(!1),l(e.task.content)}})]})]}):Object(It.jsxs)(s.a.Fragment,{children:[Object(It.jsx)("div",{dangerouslySetInnerHTML:{__html:e.task.content}}),Object(It.jsxs)(Lt,{children:[Object(It.jsx)(Ct,{img:Dt,onClick:function(){l(e.task.content.replace(/<br\s*[\/]?>/gi,"\n")),r(!0)}}),Object(It.jsx)(Ct,{img:Et,onClick:j})]})]})})}))}})},Nt=kt.a.input(et||(et=Object(mt.a)(["\n  outline: none;\n  border: 0;\n  width: 100%;\n  background-color: transparent;\n"]))),Pt=function(e){var t=Object(a.useRef)(null);return Object(It.jsx)(Nt,{ref:t,onBlur:e.onBlur,type:e.type,value:e.value,onChange:e.onChange,autoFocus:!0,onKeyDown:e.onKeyDown})},Ut=kt.a.div(tt||(tt=Object(mt.a)(["\n  margin: 8px;\n  border-radius: 2px;\n  border: 1px solid lightgrey;\n  width: 220px;\n"]))),Kt=kt.a.h3(nt||(nt=Object(mt.a)(["\n  padding: 8px;\n"]))),Bt=kt.a.div(ct||(ct=Object(mt.a)(["\n  padding: 8px;\n  background-color: ",";\n  flex-grow: 1;\n  min-height: 100px;\n"])),(function(e){return e.isDraggingOver?"skyblue":"white"})),Ft=kt.a.div(rt||(rt=Object(mt.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding-right: 8px;\n  padding-left: 8px;\n"]))),Jt=kt.a.div(at||(at=Object(mt.a)(["\n  display: flex;\n"]))),Gt=function(e){var t=Object(a.useState)(!1),n=Object(wt.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(""),u=Object(wt.a)(o,2),d=u[0],l=u[1],b=Object(i.d)(ie(e.columnId)),j=Object(i.d)(le(e.columnId)),O=Object(i.c)(),p=function(){O(ee({columnId:b.id}))},x=function(e){l(e.target.value)},f=function(e){r(!1),O(re({columnId:b.id,columnTitle:d}))},g=function(e){switch(e.code){case"Escape":r(!1),l(b.title);break;case"Enter":r(!1),O(re({columnId:b.id,columnTitle:d}))}};return Object(It.jsx)("div",{children:b?Object(It.jsx)(ht.b,{draggableId:b.id,index:e.index,children:function(t){return Object(It.jsx)("div",Object(ye.a)(Object(ye.a)({},t.draggableProps),{},{ref:t.innerRef,children:Object(It.jsxs)(Ut,{children:[Object(It.jsxs)(Ft,Object(ye.a)(Object(ye.a)({},t.dragHandleProps),{},{children:[c?Object(It.jsx)(Pt,{type:"text",value:d,onChange:x,onBlur:f,onKeyDown:g}):Object(It.jsxs)(s.a.Fragment,{children:[Object(It.jsx)(Kt,{children:b.title}),Object(It.jsxs)(Jt,{children:[Object(It.jsx)(Ct,{img:Dt,onClick:function(){l(b.title),r(!0)}}),Object(It.jsx)(Ct,{img:Et,onClick:p})]})]})," "]})),Object(It.jsx)(ht.c,{droppableId:b.id,type:"task",children:function(t,n){return Object(It.jsx)("div",Object(ye.a)(Object(ye.a)({ref:t.innerRef},t.droppableProps),{},{children:Object(It.jsxs)(Bt,{isDraggingOver:n.isDraggingOver,children:[j.map((function(t,n){return t?Object(It.jsx)(Rt,{task:t,index:n,columnId:e.columnId},t.id):null})),t.placeholder]})}))}})]})}))}}):"no column"})},Ht=n(49),Wt=n.n(Ht),zt=function(){var e=Object(i.d)(Oe),t=Object(i.c)(),n=Object(a.useState)(""),c=Object(wt.a)(n,2),r=c[0],s=c[1],o=Object(a.useState)("Task"),u=Object(wt.a)(o,2),d=u[0],l=u[1],b=function(e){l(e.target.value)};return Object(It.jsx)(Wt.a,{isOpen:e,contentLabel:"Example Modal",children:Object(It.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(It.jsxs)("div",{children:[Object(It.jsx)("input",{type:"radio",value:"Task",onChange:b,checked:"Task"===d})," ","Add task",Object(It.jsx)("input",{type:"radio",value:"Column",onChange:b,checked:"Column"===d})," ","Add column"]}),"Column"===d?Object(It.jsx)("label",{children:Object(It.jsx)("input",{type:"text",value:r,onChange:function(e){s(e.target.value)}})}):Object(It.jsx)("label",{children:Object(It.jsx)("textarea",{type:"text",value:r,onChange:function(e){s(e.target.value)}})}),Object(It.jsx)("button",{onClick:function(){switch(d){case"Task":t(Q({content:r.replace(/\r?\n|\r/g,"<br>")})),console.log("rep: ",r.replace(/\r?\n|\r/g,"<br>"));break;case"Column":t(q({title:r}))}t(z(!1))},children:"Add"}),Object(It.jsx)("button",{onClick:function(){t(z(!1))},children:"Cancel"})]})})},Xt=kt.a.div(st||(st=Object(mt.a)(["\n  width: 100%;\n"]))),qt=kt.a.div(ot||(ot=Object(mt.a)(["\n  margin: 8px;\n  border-radius: 2px;\n  border: 1px solid lightgrey;\n  width: 100%;\n"]))),Vt=kt.a.h3(ut||(ut=Object(mt.a)(["\n  padding: 8px;\n"]))),Qt=kt.a.div(it||(it=Object(mt.a)(["\n  padding: 8px;\n  background-color: ",";\n  flex-grow: 1;\n  display: flex;\n  flex-wrap: wrap;\n"])),(function(e){return e.isDraggingOver?"skyblue":"white"})),Yt=function(e){var t=Object(i.d)(ie(e.columnId)),n=Object(i.d)(le(e.columnId)),c=Object(i.c)();return Object(It.jsx)(Xt,{children:t?Object(It.jsxs)(qt,{children:[Object(It.jsx)(Vt,{children:t.title}),Object(It.jsx)(ht.c,{droppableId:t.id,type:"task",direction:"horizontal",children:function(t,r){return Object(It.jsxs)("div",Object(ye.a)(Object(ye.a)({ref:t.innerRef},t.droppableProps),{},{children:[Object(It.jsxs)(Qt,{isDraggingOver:r.isDraggingOver,children:[n.map((function(t,n){return t?Object(It.jsx)(Rt,{task:t,index:n,columnId:e.columnId},t.id):null})),t.placeholder]}),Object(It.jsx)("button",{onClick:function(){return c(z(!0))},children:"Add new"})]}))}})]}):"no column"})},Zt=(n(89),kt.a.div(dt||(dt=Object(mt.a)(["\n  position: fixed;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: gray;\n  filter: opacity(50%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])))),$t=function(){return Object(It.jsx)(Zt,{id:"loader",children:Object(It.jsxs)("div",{className:"lds-ring",children:[Object(It.jsx)("div",{}),Object(It.jsx)("div",{}),Object(It.jsx)("div",{}),Object(It.jsx)("div",{})]})})},en=kt.a.div(lt||(lt=Object(mt.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]))),tn=function(e){var t=Object(i.c)(),n=Object(i.d)(be),c=Object(i.d)(ue),r=Object(i.d)(je);Object(a.useEffect)((function(){t(L())}),[t]);var o=n.map((function(e,t){return e!==g?Object(It.jsx)(Gt,{index:t,columnId:e},e):null}));return Object(It.jsxs)(s.a.Fragment,{children:[r?Object(It.jsx)($t,{}):null,Object(It.jsx)(zt,{}),Object(It.jsx)(ht.a,{onDragEnd:function(e){var r,a=e.destination,s=e.source,o=e.draggableId,u=e.type;if(a&&(a.droppableId!==s.droppableId||a.index!==s.index)){if("column"===u){var i=Object(we.a)(n);return i.splice(s.index,1),i.splice(a.index,0,o),void t(J(i))}var d=c[s.droppableId],l=c[a.droppableId];if(d!==l){var b=d.taskIds?Object(we.a)(d.taskIds):[];b.splice(s.index,1);var j=Object(ye.a)(Object(ye.a)({},d),{},{taskIds:b}),O=l.taskIds?Object(we.a)(l.taskIds):[];O.splice(a.index,0,o);var p=Object(ye.a)(Object(ye.a)({},l),{},{taskIds:O});t(H(Object(ye.a)(Object(ye.a)({},c),{},(r={},Object(Ie.a)(r,j.id,j),Object(Ie.a)(r,p.id,p),r))))}else{var x=Object(we.a)(d.taskIds);x.splice(s.index,1),x.splice(a.index,0,o);var f=Object(ye.a)(Object(ye.a)({},d),{},{taskIds:x});t(H(Object(ye.a)(Object(ye.a)({},c),{},Object(Ie.a)({},f.id,f))))}}},onDragStart:function(){},onDragUpdate:function(e){},children:Object(It.jsx)(ht.c,{droppableId:"all-columns",direction:"horizontal",type:"column",children:function(e){return Object(It.jsxs)("div",Object(ye.a)(Object(ye.a)({ref:e.innerRef},e.droppableProps),{},{children:[Object(It.jsx)(en,{children:Object(It.jsxs)(s.a.Fragment,{children:[Object(It.jsx)(Yt,{columnId:g}),o]})}),e.placeholder]}))}})})]})},nn=function(){var e=Object(l.a)(),t=[e],n=[d.a.apply(void 0,t)],r=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||d.c).apply(void 0,n),a=Object(d.d)(vt,jt,r);return console.log("Saga middleware implemented!"),function(e){Object.values(c).forEach(e.run.bind(e))}(e),a}(),cn=function(){return Object(It.jsx)(i.a,{store:nn,children:Object(It.jsx)(tn,{})})};u.a.render(Object(It.jsx)(s.a.StrictMode,{children:Object(It.jsx)(cn,{})}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.24cc3180.chunk.js.map