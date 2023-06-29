import{_ as v,R as w,r as c,o as g,c as y,b as e,d as t,w as u,g as _,h as r,n as i}from"./index-16411dd8.js";import{f as k,b as V,r as N,d as G,c as U}from"./db-4a1975a7.js";import{_ as P}from"./icon-c8d94deb.js";const B={data(){return{user:{nickName:"",email:"",password:"",confirmPassword:"",headshotImg:""}}},components:{RouterLink:w},methods:{async signUp(){const m=this.user.email,l=this.user.password;try{const b=(await k(V,m,l)).user,s=N(G,"users/"+b.uid);U(s,{email:m,nickName:this.user.nickName,headshotImg:this.user.headshotImg}),this.$swal({icon:"success",title:"註冊成功",showConfirmButton:!1,timer:1500}),this.$router.push("/home")}catch{this.$swal({icon:"error",title:"此信箱已被註冊，請更換信箱",showConfirmButton:!1,timer:1500})}}}},C={class:"mt-5 d-flex align-items-center bg-white"},q={class:"container py-lg-7"},D={"aria-label":"breadcrumb"},E={class:"breadcrumb"},M={class:"breadcrumb-item fs-5"},S=e("li",{class:"breadcrumb-item active fs-5 d-none d-lg-block","aria-current":"page"},"註冊",-1),j={class:"row mt-3 gx-5 rounded py-3"},F=_('<div class="col d-none d-lg-block"><div class="card border-0 h-100 text-white" style="border-radius:20px;"><img src="https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1172&amp;q=80" class="card-img h-100" alt="..." style="object-fit:cover;border-radius:20px;"><div class="card-img-overlay d-flex align-items-center justify-content-center"><h2 class="card-title text-dark"> 快速紀錄 <span class="text-blueGreen"> 重要事項 </span></h2></div></div></div>',1),R={class:"col"},A={class:"signup-card card h-100",style:{"border-radius":"20px",padding:"0 !important"}},H={class:"card-body p-0"},I={class:"card-header bg-white py-0",style:{"border-radius":"20px 20px 0px 0px"}},L={class:"row",style:{margin:"0 -18px"}},T={class:"h5 col mb-0 text-center py-3 position-relative",style:{"padding-bottom":"10px","border-radius":"20px 0 0 0"}},W=e("h2",{class:"h5 col mb-0 text-center py-3 position-relative bg-blueGreen text-decoration-none fw-bold text-white",style:{"padding-bottom":"10px","border-radius":"0 20px 0 0"}}," 註冊 ",-1),z=_('<h1 class="text-blueGreen text-center h3 mt-4"> 歡迎來到 <div class="d-flex align-items-center mt-2 justify-content-center"><img src="'+P+'" class="me-2" alt="" style="width:40px;height:40px;"><div class="text-green"><p class="fs-5 fw-bold mb-0 text-start">記錄每一天</p><p class="fs-6 fw-bold mb-0 text-start">Take Notes Every Day</p></div></div></h1>',1),Y={class:"row gy-4 d-flex"},J={class:"col-12 fs-5"},K=e("i",{class:"bi bi-person-circle"},null,-1),O={class:"col-12 fs-5"},Q=e("i",{class:"bi bi-envelope-fill"},null,-1),X={class:"col-12 fs-5"},Z=e("i",{class:"bi bi-unlock-fill"},null,-1),$={class:"col-12 fs-5"},ee=e("i",{class:"bi bi-lock-fill"},null,-1),se=e("div",{class:"col-12"},[e("button",{type:"submit",class:"btn btn-blueGreen w-100 text-white"},"註冊")],-1);function oe(m,l,p,b,s,h){const f=c("RouterLink"),n=c("VField"),d=c("ErrorMessage"),x=c("VForm");return g(),y("main",C,[e("div",q,[e("nav",D,[e("ol",E,[e("li",M,[t(f,{to:"/home",class:"link-green d-none d-lg-block"},{default:u(()=>[r("首頁")]),_:1})]),S])]),e("div",j,[F,e("div",R,[e("div",A,[e("div",H,[e("div",I,[e("div",L,[e("h2",T,[t(f,{to:"/login",class:"link-dark stretched-link text-decoration-none fw-bold link-blueGreen"},{default:u(()=>[r("登入")]),_:1})]),W])]),z,t(x,{ref:"form",class:"mx-5 card-body my-3",onSubmit:h.signUp},{default:u(({errors:o})=>[e("div",Y,[e("div",J,[e("label",{for:"nickName",class:i(["form-label text-secondary",{"text-blueGreen":s.user.nickName&&!o.暱稱}])},[K,r(" 暱稱")],2),t(n,{id:"nickName",name:"暱稱",type:"text",class:i(["form-control border-0 border-bottom",{"is-invalid":o.暱稱,"is-valid":s.user.nickName&&!o.暱稱}]),placeholder:"請輸入您的暱稱",rules:"required|max:10",modelValue:s.user.nickName,"onUpdate:modelValue":l[0]||(l[0]=a=>s.user.nickName=a)},null,8,["class","modelValue"]),t(d,{name:"暱稱",class:"invalid-feedback"})]),e("div",O,[e("label",{for:"email",class:i(["form-label text-secondary",{"text-blueGreen":s.user.email&&!o.信箱}])},[Q,r(" 信箱")],2),t(n,{id:"email",name:"信箱",type:"email",class:i(["form-control border-0 border-bottom",{"is-invalid":o.信箱,"is-valid":s.user.email&&!o.信箱}]),placeholder:"請輸入您的信箱",rules:"email|required",modelValue:s.user.email,"onUpdate:modelValue":l[1]||(l[1]=a=>s.user.email=a)},null,8,["class","modelValue"]),t(d,{name:"信箱",class:"invalid-feedback"})]),e("div",X,[e("label",{for:"password",class:i(["form-label text-secondary",{"text-blueGreen":s.user.password&&!o.密碼}])},[Z,r(" 密碼")],2),t(n,{id:"password",name:"密碼",type:"password",class:i(["form-control border-0 border-bottom",{"is-invalid":o.密碼,"is-valid":!o.密碼&&s.user.password}]),placeholder:"請輸入密碼",rules:"required|min:6",modelValue:s.user.password,"onUpdate:modelValue":l[2]||(l[2]=a=>s.user.password=a)},null,8,["class","modelValue"]),t(d,{name:"密碼",class:"invalid-feedback"})]),e("div",$,[e("label",{for:"confirmPassword",class:i(["form-label text-secondary",{"text-blueGreen":s.user.confirmPassword&&!o.確認密碼}])},[ee,r(" 確認密碼")],2),t(n,{id:"confirmPassword",name:"確認密碼",type:"password",class:i(["form-control border-0 border-bottom",{"is-invalid":o.確認密碼,"is-valid":!o.確認密碼&&s.user.confirmPassword}]),placeholder:"請再次輸入密碼",rules:"required|confirmed:@密碼",modelValue:s.user.confirmPassword,"onUpdate:modelValue":l[3]||(l[3]=a=>s.user.confirmPassword=a)},null,8,["class","modelValue"]),t(d,{name:"確認密碼",class:"invalid-feedback"})]),se])]),_:1},8,["onSubmit"])])])])])])])}const ae=v(B,[["render",oe]]);export{ae as default};
