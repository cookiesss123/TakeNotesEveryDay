<template>
       <main class="mt-5 d-flex align-items-center bg-white">
            <div class="container py-lg-7">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item fs-5">
                        <RouterLink to="/home" class="link-green  d-none d-lg-block">首頁</RouterLink>
                        </li>
                      <li class="breadcrumb-item active fs-5 d-none d-lg-block" aria-current="page">註冊</li>
                    </ol>
                </nav>
                <div class="row mt-3 gx-5 rounded py-3">
                    <div class="col d-none d-lg-block">
                        <div class="card border-0 h-100 text-white" style="border-radius: 20px;">
                            <img src="https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80" class="card-img h-100" alt="..." style="object-fit: cover; border-radius: 20px;">
                            <div class="card-img-overlay d-flex align-items-center justify-content-center">
                                <h2 class="card-title text-dark"> 快速紀錄
                                    <span class="text-blueGreen"> 重要事項 </span></h2>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="signup-card card h-100 " style="border-radius: 20px; padding: 0 !important; ">
                            <div class="card-body p-0">
                                <div class="card-header bg-white py-0 "  style="border-radius: 20px 20px 0px 0px;">
                                    <div class="row " style="margin: 0 -18px;">
                                        <h2 class="h5 col mb-0 text-center py-3 position-relative" style="padding-bottom: 10px; border-radius: 20px 0 0 0;">
                                            <RouterLink to="/login" class="link-dark stretched-link text-decoration-none fw-bold link-blueGreen ">登入</RouterLink>
                                        </h2>
                                        <h2 class="h5 col mb-0 text-center py-3 position-relative bg-blueGreen text-decoration-none fw-bold text-white" style="padding-bottom: 10px; border-radius: 0 20px 0 0;">
                                            註冊
                                        </h2>
                                    </div>
                                </div>
                                <h1 class="text-blueGreen text-center h3 mt-4">
                                  歡迎來到
                                  <div class="d-flex align-items-center mt-2 justify-content-center">
                                      <img src="../../assets/images/icon.png" class="me-2" alt="" style="width: 40px; height: 40px;">
                                      <div class="text-green">
                                        <p class="fs-5 fw-bold mb-0 text-start">記錄每一天</p>
                                        <p class="fs-6 fw-bold mb-0 text-start">Take Notes Every Day</p>
                                      </div>
                                  </div>
                                </h1>
                                <VForm ref="form" class="mx-5 card-body my-3" v-slot="{ errors }" @submit="signUp">
                                    <div class="row gy-4 d-flex">
                                        <div class="col-12 fs-5">
                                            <label for="nickName" class="form-label text-secondary" :class="{'text-blueGreen':user.nickName && !errors['暱稱']}"><i class="bi bi-person-circle"></i> 暱稱</label>
                                            <VField
                                                id="nickName"
                                                name="暱稱"
                                                type="text"
                                                class="form-control border-0 border-bottom"
                                                :class="{ 'is-invalid': errors['暱稱'], 'is-valid':user.nickName && !errors['暱稱']}"
                                                placeholder="請輸入您的暱稱"
                                                rules="required|max:10"
                                                v-model="user.nickName"
                                            ></VField>
                                            <ErrorMessage name="暱稱" class="invalid-feedback"></ErrorMessage>
                                        </div>
                                        <div class="col-12 fs-5">
                                            <label for="email" class="form-label text-secondary" :class="{'text-blueGreen':user.email && !errors['信箱']}"><i class="bi bi-envelope-fill" ></i> 信箱</label>
                                            <VField
                                                id="email"
                                                name="信箱"
                                                type="email"
                                                class="form-control border-0 border-bottom"
                                                :class="{ 'is-invalid': errors['信箱'], 'is-valid':user.email && !errors['信箱']}"
                                                placeholder="請輸入您的信箱"
                                                rules="email|required"
                                                v-model="user.email"
                                            ></VField>
                                            <ErrorMessage name="信箱" class="invalid-feedback"></ErrorMessage>
                                        </div>
                                        <div class="col-12 fs-5">
                                            <label for="password" class="form-label text-secondary" :class="{'text-blueGreen':user.password && !errors['密碼']}"><i class="bi bi-unlock-fill"></i> 密碼</label>
                                            <VField
                                                id="password"
                                                name="密碼"
                                                type="password"
                                                class="form-control border-0 border-bottom"
                                                :class="{ 'is-invalid': errors['密碼'], 'is-valid':!errors['密碼'] && user.password}"
                                                placeholder="請輸入密碼"
                                                rules="required|min:6"
                                                v-model="user.password"
                                            ></VField>
                                            <ErrorMessage name="密碼" class="invalid-feedback"></ErrorMessage>
                                        </div>
                                        <div class="col-12 fs-5">
                                            <label for="confirmPassword" class="form-label text-secondary" :class="{'text-blueGreen':user.confirmPassword && !errors['確認密碼']}"><i class="bi bi-lock-fill" ></i> 確認密碼</label>
                                            <VField
                                                id="confirmPassword"
                                                name="確認密碼"
                                                type="password"
                                                class="form-control border-0 border-bottom"
                                                :class="{ 'is-invalid': errors['確認密碼'], 'is-valid':!errors['確認密碼'] && user.confirmPassword}"
                                                placeholder="請再次輸入密碼"
                                                rules="required|confirmed:@密碼"
                                                v-model="user.confirmPassword"
                                            ></VField>
                                            <ErrorMessage name="確認密碼" class="invalid-feedback"></ErrorMessage>
                                        </div>
                                        <div class="col-12" >
                                            <button type="submit" class="btn btn-blueGreen w-100 text-white">註冊</button>
                                        </div>
                                    </div>
                                </VForm>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
</template>
<script>
import { RouterLink } from 'vue-router'
import { db, auth } from '../../firebase/db'
import { ref, set } from 'firebase/database'
import { createUserWithEmailAndPassword } from 'firebase/auth'
export default {
  data () {
    return {
      user: {
        nickName: '',
        email: '',
        password: '',
        confirmPassword: '',
        headshotImg: ''
      }
    }
  },
  components: {
    RouterLink
  },
  methods: {
    async signUp  () {
      const email = this.user.email
      const password = this.user.password
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        const loginUser = userCredential.user
        const reference = ref(db, 'users/' + loginUser.uid)
        set(reference, {
          email,
          nickName: this.user.nickName,
          headshotImg: this.user.headshotImg
        })

        this.$swal({
          icon: 'success',
          title: '註冊成功',
          showConfirmButton: false,
          timer: 1500
        })
        // 因為註冊完直接登入了 所以推到 home
        this.$router.push('/home')
      } catch (e) {
        this.$swal({
          icon: 'error',
          title: '此信箱已被註冊，請更換信箱',
          showConfirmButton: false,
          timer: 1500
        })
      }
    }
  }
}
</script>
<style>
.signup-card .card-header h2:hover {
    background-color: #62776f;
    color: white;
}
.signup-card .card-header h2:hover a {
    color: white !important;
}
</style>
