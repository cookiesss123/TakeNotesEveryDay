import{r as p,d as u,p as S,s as A,u as j,o as k,a as x,b as B,c as N,e as q}from"./utilities-15c9400c.js";import{m as f,_ as M,o as l,c as n,d as t,f as c,t as h,l as T,v,n as L,i as y,g as m,p as b,F as w,k as I,r as D,e as C,q as R}from"./index-02552bde.js";import{m as $}from"./modalMixin-63f1423a.js";const U={data(){return{tempTodo:{createdTime:new Date().getTime(),updateTime:new Date().getTime(),list:[]},editTitle:!1,message:"",todoId:"",status:"new",page:"全部",renderTodo:[]}},mixins:[$],props:["uid","id","openModal"],methods:{...f(x,["toastMessage"]),addTempTodo(){this.message!==""&&(this.tempTodo.list.push({id:new Date().getTime(),checked:!1,message:this.message}),this.message="")},clearAll(){this.tempTodo.list=this.tempTodo.list.filter(i=>!i.checked)},updateTodo(){if(this.status==="new"){this.tempTodo.title||(this.tempTodo.title=new Date().toLocaleDateString());const i=p(u,`todoLists/${this.uid}/`),s=S(i);A(s,this.tempTodo),this.toastMessage("新增清單成功"),this.hide()}else this.status==="edit"&&(j(p(u),{[`todoLists/${this.uid}/${this.todoId}/title/`]:this.tempTodo.title,[`todoLists/${this.uid}/${this.todoId}/updateTime/`]:new Date().getTime(),[`todoLists/${this.uid}/${this.todoId}/list/`]:this.tempTodo.list}),this.toastMessage("修改清單成功"),this.hide())}},watch:{id(){if(this.id){if(this.id==="new")this.status="new",this.tempTodo={createdTime:new Date().getTime(),updateTime:new Date().getTime(),list:[]},this.show(),this.openModal("");else if(this.id!=="new"){this.status="edit";const i=p(u,`todoLists/${this.uid}/${this.id}`);k(i,s=>{this.tempTodo=s.val(),this.tempTodo.list||(this.tempTodo.list=[]),this.show(),this.todoId=this.id,this.openModal("")})}}},page(){this.page==="全部"?this.renderTodo=this.tempTodo.list:this.page==="待完成"?this.renderTodo=this.tempTodo.list.filter(i=>!i.checked):this.page==="已完成"&&(this.renderTodo=this.tempTodo.list.filter(i=>i.checked))}},computed:{time(){return i=>new Date(i).toLocaleDateString()+new Date(i).toLocaleString().split(" ")[1]},undoneNum(){return i=>i.filter(s=>s.checked===!1).length}}},H={class:"modal fade",ref:"modal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},K={class:"modal-dialog modal-fullscreen-md-down modal-xl"},F={class:"modal-content"},G={class:"modal-header bg-primary"},z={class:"modal-title text-white",id:"exampleModalLabel"},E={key:0},O={key:1},W=t("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),Y={key:0,class:"modal-body"},J={class:"pb-5"},P={class:"container"},Q={class:"mb-5"},X={key:0,class:"mb-3 col-6 d-flex mx-auto"},Z=t("i",{class:"fs-4 bi bi-pencil-square"},null,-1),tt=[Z],et={key:1,class:"text-center"},st=t("i",{class:"fs-4 bi bi-pencil-square"},null,-1),ot=[st],it={class:"input-group"},dt=t("i",{class:"bi bi-plus-lg"},null,-1),lt=[dt],nt={class:"mt-4"},at={class:"card"},ct={class:"card-header d-flex list-unstyled justify-content-evenly bg-primary"},rt=t("a",{href:"#",class:"btn fs-5 fw-bold text-white border-0"},"全部",-1),ht=[rt],mt=t("a",{href:"#",class:"btn fs-5 fw-bold text-white border-0"},"待完成",-1),pt=[mt],ut=t("a",{href:"#",class:"btn fs-5 fw-bold text-white border-0"},"已完成",-1),_t=[ut],bt={class:"card-body"},ft={class:"list-unstyled"},gt={key:0,class:"fs-5 d-flex align-items-center cursor-pointer"},Tt={key:0,class:"checkbox"},vt={key:1,class:"check"},yt=["onClick"],wt=["onClick"],kt=t("i",{class:"bi bi-x-lg"},null,-1),xt=[kt],Mt={class:"card-footer d-flex justify-content-between align-items-center"},Lt={class:"mb-0"},Dt={class:"modal-footer"},Ct=t("button",{type:"button",class:"btn btn-gray","data-bs-dismiss":"modal"},"關閉",-1),It=t("span",null,"確認",-1),$t=[It];function Vt(i,s,_,r,e,d){return l(),n("div",H,[t("div",K,[t("div",F,[t("div",G,[t("h5",z,[e.status==="new"?(l(),n("span",E,"新增清單內容")):e.status==="edit"?(l(),n("span",O,"編輯清單內容")):c("",!0)]),W]),e.tempTodo?(l(),n("div",Y,[t("p",null,"建立時間："+h(d.time(e.tempTodo.createdTime)),1),t("p",null,"更新時間："+h(d.time(e.tempTodo.updateTime)),1),t("div",J,[t("section",P,[t("div",Q,[e.editTitle?(l(),n("div",X,[T(t("input",{onKeyup:s[0]||(s[0]=L(o=>e.editTitle=!1,["enter"])),type:"email",class:"form-control",id:"todoTitle","onUpdate:modelValue":s[1]||(s[1]=o=>e.tempTodo.title=o)},null,544),[[v,e.tempTodo.title]]),t("button",{type:"button",onClick:s[2]||(s[2]=o=>e.editTitle=!1),class:"btn border-0"},tt)])):c("",!0),e.editTitle?c("",!0):(l(),n("h3",et,[y(h(e.tempTodo.title?e.tempTodo.title:"清單名稱"),1),t("button",{type:"button",onClick:s[3]||(s[3]=o=>e.editTitle=!0),class:"btn border-0"},ot)]))]),t("div",it,[T(t("input",{type:"text",onKeyup:s[4]||(s[4]=L((...o)=>d.addTempTodo&&d.addTempTodo(...o),["enter"])),class:"form-control p-3","onUpdate:modelValue":s[5]||(s[5]=o=>e.message=o),placeholder:"待辦事項"},null,544),[[v,e.message]]),t("button",{type:"button",class:"btn btn-outline-primary px-3",onClick:s[6]||(s[6]=(...o)=>d.addTempTodo&&d.addTempTodo(...o))},lt)]),t("div",nt,[t("div",at,[t("ul",ct,[t("li",{onClick:s[7]||(s[7]=m(o=>e.page="全部",["prevent"])),class:b({"border-bottom":e.page==="全部","border-3":e.page==="全部"})},ht,2),t("li",{onClick:s[8]||(s[8]=m(o=>e.page="待完成",["prevent"])),class:b({"border-bottom":e.page==="待完成","border-3":e.page==="待完成"})},pt,2),t("li",{onClick:s[9]||(s[9]=m(o=>e.page="已完成",["prevent"])),class:b({"border-bottom":e.page==="已完成","border-3":e.page==="已完成"})},_t,2)]),t("div",bt,[t("ul",ft,[(l(!0),n(w,null,I(e.tempTodo.list,(o,g)=>(l(),n(w,{key:o.id},[e.page==="全部"||e.page==="待完成"&&o.checked===!1||e.page==="已完成"&&o.checked===!0?(l(),n("li",gt,[o.checked?o.checked?(l(),n("span",vt)):c("",!0):(l(),n("span",Tt)),t("p",{onClick:a=>o.checked=!o.checked,class:b(["ms-20 mb-0 w-100 py-3 border-bottom word-break-all",{"text-decoration-line-through":o.checked}])},h(o.message),11,yt),t("a",{href:"#",class:"btn ms-auto",onClick:m(a=>e.tempTodo.list.splice(g,1),["prevent"])},xt,8,wt)])):c("",!0)],64))),128))])]),t("div",Mt,[t("p",Lt,h(d.undoneNum(e.tempTodo.list))+" 個待完成項目",1),t("button",{type:"button",class:"btn border-0",onClick:s[10]||(s[10]=(...o)=>d.clearAll&&d.clearAll(...o))},"清除已完成項目")])])])])])])):c("",!0),t("div",Dt,[Ct,t("button",{type:"button",class:"btn btn-primary",onClick:s[11]||(s[11]=(...o)=>d.updateTodo&&d.updateTodo(...o))},$t)])])])],512)}const St=M(U,[["render",Vt]]),At={data(){return{tempTodo:{},deleteId:""}},mixins:[$],props:["id","openDeleteModal","uid"],methods:{...f(x,["toastMessage"]),deleteTodo(){B(p(u,`todoLists/${this.uid}/${this.deleteId}`)),this.toastMessage("刪除清單"),this.hide()}},watch:{id(){if(this.id){const i=p(u,`todoLists/${this.uid}/${this.id}`);k(i,s=>{this.tempTodo=s.val(),this.show(),this.deleteId=this.id,this.openDeleteModal("")})}}}},jt={class:"modal fade",ref:"modal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Bt={class:"modal-dialog"},Nt={class:"modal-content"},qt=t("div",{class:"modal-header bg-dark"},[t("h5",{class:"modal-title text-white",id:"exampleModalLabel"}," 刪除清單 "),t("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Rt={class:"modal-body"},Ut={key:0,class:"text-danger fw-bold"},Ht={class:"modal-footer"},Kt=t("button",{type:"button",class:"btn btn-gray","data-bs-dismiss":"modal"},"關閉",-1);function Ft(i,s,_,r,e,d){return l(),n("div",jt,[t("div",Bt,[t("div",Nt,[qt,t("div",Rt,[t("p",null,[y("確定要刪除清單 "),e.tempTodo?(l(),n("span",Ut," 【"+h(e.tempTodo.title)+"】 ",1)):c("",!0),y(" 嗎? ")])]),t("div",Ht,[Kt,t("button",{type:"button",class:"btn btn-danger",onClick:s[0]||(s[0]=(...o)=>d.deleteTodo&&d.deleteTodo(...o))}," 確認刪除 ")])])])],512)}const Gt=M(At,[["render",Ft]]),zt={data(){return{uid:"",todoLists:[],todoId:"",todoDeleteId:"",searchTitle:"",filterLists:[]}},components:{TodoModal:St,DeleteTodoModal:Gt},methods:{...f(x,["toastMessage"]),...f(R,["startLoading","endLoading"]),openModal(i){this.todoId=i},openDeleteModal(i){this.todoDeleteId=i},getTodoLists(){this.startLoading(),N(q,i=>{if(i){this.uid=i.uid;const s=p(u,`todoLists/${this.uid}`);k(s,_=>{const r=_.val();r&&(this.todoLists=Object.keys(r).map(e=>(r[e].id=e,r[e]))),this.endLoading()})}else this.$router.push("/loginSignup"),this.toastMessage("請登入","error"),this.endLoading()})}},mounted(){this.getTodoLists()},computed:{searchLists(){return this.todoLists.filter(i=>i.title.match(this.searchTitle))}}},Et={"data-aos":"fade-up","data-aos-duration":"1000"},Ot={class:"py-lg-160 py-100"},Wt={class:"container mb-5"},Yt=t("h2",{class:"mb-5 d-flex align-items-center justify-content-center"}," 清單 ",-1),Jt={class:"row row-cols-lg-2 row-cols-1 gy-4"},Pt={class:"col card-hover"},Qt={class:"card bg-white text-white border-0 h-100"},Xt=t("img",{src:"https://images.unsplash.com/photo-1586282023617-b844c180eb51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",class:"h-100 card-img object-fit-cover",alt:"清單示意圖"},null,-1),Zt={class:"card-img-overlay d-flex"},te={class:"card-title my-auto ms-auto text-primary d-flex align-items-center"},ee=t("span",{class:"fw-bold"},"新增清單",-1),se=t("span",{class:"fs-5"},"+",-1),oe=[se],ie=t("p",{class:"card-text mt-auto bg-primary"},"簡短的清單或待辦事項",-1),de={class:"col"},le={class:"card"},ne=t("div",{class:"card-header"}," 清單列表 ",-1),ae={class:"list-group list-group-flush"},ce=["onClick"],re=["onClick"],he=t("i",{class:"bi bi-x-lg"},null,-1),me=[he];function pe(i,s,_,r,e,d){const o=D("TodoModal"),g=D("DeleteTodoModal");return l(),n("div",Et,[t("div",Ot,[t("section",Wt,[Yt,t("div",Jt,[t("div",Pt,[t("div",Qt,[Xt,t("div",Zt,[t("h3",te,[ee,t("a",{href:"#",onClick:s[0]||(s[0]=m(a=>d.openModal("new"),["prevent"])),class:"stretched-link btn btn-outline-primary ms-3 fw-bold"},oe)]),ie])])]),t("div",de,[T(t("input",{type:"text",class:"form-control mb-3","onUpdate:modelValue":s[1]||(s[1]=a=>e.searchTitle=a),placeholder:"搜尋清單"},null,512),[[v,e.searchTitle]]),t("div",le,[ne,t("ul",ae,[e.todoLists?(l(!0),n(w,{key:0},I(d.searchLists,a=>(l(),n("li",{key:a.id,class:"list-group-item d-flex align-items-center cursor-pointer"},[t("span",{onClick:m(V=>d.openModal(a.id),["prevent"]),class:"w-100"},h(a.title),9,ce),t("a",{href:"#",class:"btn ms-auto",onClick:m(V=>d.openDeleteModal(a.id),["prevent"])},me,8,re)]))),128)):c("",!0)])])])])])]),C(o,{ref:"todoModal",uid:e.uid,id:e.todoId,"open-modal":d.openModal},null,8,["uid","id","open-modal"]),C(g,{uid:e.uid,id:e.todoDeleteId,"open-delete-modal":d.openDeleteModal},null,8,["uid","id","open-delete-modal"])])}const fe=M(zt,[["render",pe]]);export{fe as default};