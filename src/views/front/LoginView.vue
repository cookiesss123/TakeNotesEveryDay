<template>
      <main class="pt-6 d-flex align-items-center bg-white" style="overflow-x: hidden;">
            <div class="container py-lg-7 py-3">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item fs-5">
                        <RouterLink to="/home" class="link-green  d-none d-lg-block">首頁</RouterLink>
                      </li>
                      <li class="breadcrumb-item active fs-5  d-none d-lg-block" aria-current="page">登入</li>
                    </ol>
                </nav>
                <div class="row mt-3 gx-5 rounded py-3 ">
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
                      <div class="login-card card h-100 border" style="border-radius: 20px; padding: 0 !important;">
                        <div class="card-body border-0 p-0">
                            <div class="card-header bg-white py-0 "  style="border-radius: 20px 20px 0px 0px;">
                                <div class="row " style="margin: 0 -18px;">
                                    <h2 class="h5 col mb-0 text-center py-3 position-relative bg-green text-decoration-none fw-bold text-white" style="padding-bottom: 10px; border-radius: 20px 0 0 0;">
                                        登入
                                    </h2>
                                    <h2 class="h5 col mb-0 text-center py-3 position-relative" style="padding-bottom: 10px; border-radius: 0 20px 0 0;">
                                        <RouterLink to="/signup" class="link-dark stretched-link text-decoration-none fw-bold link-green ">註冊</RouterLink>
                                    </h2>
                                </div>
                            </div>
                            <h1 class="text-green text-center h3 mt-4">
                                歡迎來到
                                <div class="d-flex align-items-center mt-2 justify-content-center">
                                    <img src="../../assets/images/icon.png" class="me-2" alt="" style="width: 40px; height: 40px;">
                                    <div class="text-green">
                                      <p class="fs-5 fw-bold mb-0 text-start">記錄每一天</p>
                                      <p class="fs-6 fw-bold mb-0 text-start">Take Notes Every Day</p>
                                    </div>
                                </div>
                            </h1>
                            <VForm ref="form" class="mx-5 card-body my-3" v-slot="{ errors }"  @submit="login">
                                <div class="row gy-5 d-flex">
                                    <div class="col-12 fs-5">
                                        <label for="email" class="form-label text-secondary" :class="{'text-green':user.email && !errors['信箱']}"><i class="bi bi-envelope-fill" ></i> 信箱</label>
                                        <VField
                                            id="email"
                                            name="信箱"
                                            type="email"
                                            class="form-control border-0 border-bottom"
                                            :class="{ 'is-invalid': errors['信箱'], 'is-valid':user.email && !errors['信箱']}"
                                            placeholder="請輸入您的信箱"
                                            rules="email|required"
                                            v-model="user.email"
                                            autocomplete="email"
                                        ></VField>
                                        <ErrorMessage name="信箱" class="invalid-feedback"></ErrorMessage>
                                    </div>
                                    <div class="col-12 fs-5">
                                        <label for="password" class="form-label text-secondary" :class="{'text-green':user.password && !errors['密碼']}"><i class="bi bi-lock-fill" ></i> 密碼</label>
                                        <VField
                                            id="password"
                                            name="密碼"
                                            type="password"
                                            class="form-control border-0 border-bottom"
                                            :class="{ 'is-invalid': errors['密碼'], 'is-valid':!errors['密碼'] && user.password}"
                                            placeholder="請輸入您的密碼"
                                            rules="min:6|required"
                                            v-model="user.password"
                                            autocomplete="current-password"
                                        ></VField>
                                        <ErrorMessage name="密碼" class="invalid-feedback"></ErrorMessage>
                                    </div>
                                    <div class="col-12 mt-9" >
                                        <button type="submit" class="btn btn-green w-100">登入</button>
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

import { auth, db } from '../../firebase/db'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { ref, onValue } from 'firebase/database'
export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  components: {
    RouterLink
  },
  methods: {
    async login () {
      const email = this.user.email
      const password = this.user.password
      try {
        const userCgreenential = await signInWithEmailAndPassword(auth, email, password)
        const loginUser = userCgreenential.user
        this.$swal({
          icon: 'success',
          title: '登入成功',
          showConfirmButton: false,
          timer: 1500
        })

        // 讀取使用者資料
        const dataRef = ref(db, 'users/' + loginUser.uid)
        onValue(dataRef, snapshot => {
          this.$router.push('/home')
        })
      } catch (e) {
        let title = '密碼錯誤'
        if (e.message === 'Firebase: Error (auth/user-not-found).') {
          title = '查無此帳號'
        }
        this.$swal({
          icon: 'error',
          title,
          showConfirmButton: false,
          timer: 1500
        })
      }
    }
  },
  mounted () {

  }
}
</script>
<style>
.login-card .card-header h2:hover {
    background-color: #518083;
    color: white;
}
.login-card .card-header h2:hover a {
    color: white !important;
}
</style>
