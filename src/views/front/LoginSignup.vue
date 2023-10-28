<template>
       <main data-aos="fade-up" data-aos-duration="1000" class="mt-5 d-flex align-items-center bg-white overflow-x-hidden">
            <div class="container py-lg-7 py-5">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item fs-5">
                        <RouterLink to="/home" class="link-primary  d-none d-lg-block">首頁</RouterLink>
                        </li>
                      <li class="breadcrumb-item active fs-5 d-none d-lg-block" aria-current="page">{{ page }}</li>
                    </ol>
                </nav>
                <div class="row mt-3 gx-5 rounded py-3">
                    <div class="col d-none d-lg-block">
                        <div class="card border-0 h-100 text-white rounded-20">
                            <img src="https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80" class="card-img h-100 object-fit-cover rounded-20" alt="白紙">
                            <div class="card-img-overlay d-flex align-items-center justify-content-center">
                                <h2 class="card-title text-dark"> 快速紀錄
                                    <span class="text-primary"> 重要事項 </span></h2>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card-login-signup card h-100 rounded-20">
                            <div class="card-body p-0">
                                <div class="card-header bg-white py-0 rounded-top-20">
                                    <div class="row mx-n3">
                                        <h2 class="col h5 mb-0 text-center py-3 position-relative rounded-left-20" :class="{'bg-primary': page === '登入'}">
                                          <a href="#" class="stretched-link text-decoration-none fw-bold text-primary" :class="{'text-white': page === '登入', 'pointer-events-none': page === '登入'}" @click.prevent="page = '登入'">登入</a>
                                        </h2>
                                        <h2 class="col h5 mb-0 text-center py-3 position-relative rounded-right-20" :class="{'bg-primary': page === '註冊'}">
                                          <a href="#" class="stretched-link text-decoration-none fw-bold text-primary" :class="{'text-white': page === '註冊', 'pointer-events-none': page === '註冊'}" @click.prevent="page = '註冊'">註冊</a>
                                        </h2>
                                    </div>
                                </div>
                                <h1 class="text-primary text-center h3 mt-4">
                                  歡迎來到
                                  <div class="d-flex align-items-center mt-2 justify-content-center">
                                      <img src="../../assets/images/icon.png" class="me-2" alt="logo" style="width: 40px; height: 40px;">
                                      <div class="text-primary">
                                        <p class="fs-5 fw-bold mb-0 text-start">記錄每一天</p>
                                        <p class="fs-6 fw-bold mb-0 text-start">Take Notes Every Day</p>
                                      </div>
                                  </div>
                                </h1>
                                <VForm v-if="page === '登入'" class="mx-5 card-body my-3" v-slot="{ errors }"  @submit="login">
                                <div class="row gy-5 d-flex text-gray">
                                    <div class="col-12 fs-5">
                                        <label for="email" class="form-label" :class="{'text-blueGreen':userLogin.email && !errors['信箱']}"><i class="bi bi-envelope-fill" ></i> 信箱</label>
                                        <VField
                                            id="email"
                                            name="信箱"
                                            type="email"
                                            class="form-control border-0 border-bottom"
                                            :class="{ 'is-invalid': errors['信箱'], 'is-valid':userLogin.email && !errors['信箱']}"
                                            placeholder="請輸入您的信箱"
                                            rules="email|required"
                                            v-model="userLogin.email"
                                            autocomplete="email"
                                        ></VField>
                                        <ErrorMessage name="信箱" class="invalid-feedback"></ErrorMessage>
                                    </div>
                                    <div class="col-12 fs-5">
                                        <label for="password" class="form-label" :class="{'text-blueGreen':userLogin.password && !errors['密碼']}"><i class="bi bi-lock-fill" ></i> 密碼</label>
                                        <VField
                                            id="password"
                                            name="密碼"
                                            type="password"
                                            class="form-control border-0 border-bottom"
                                            :class="{ 'is-invalid': errors['密碼'], 'is-valid':!errors['密碼'] && userLogin.password}"
                                            placeholder="請輸入您的密碼"
                                            rules="min:6|required"
                                            v-model="userLogin.password"
                                            autocomplete="current-password"
                                        ></VField>
                                        <ErrorMessage name="密碼" class="invalid-feedback"></ErrorMessage>
                                    </div>
                                    <div class="col-12 mt-9" >
                                        <button type="submit" class="btn btn-primary w-100">登入</button>
                                    </div>
                                </div>
                                </VForm>
                                <VForm v-if="page === '註冊'" class="mx-5 card-body my-3" v-slot="{ errors }" @submit="signUp">
                                    <div class="row gy-4 d-flex text-gray">
                                        <div class="col-12 fs-5">
                                            <label for="nickName" class="form-label" :class="{'text-blueGreen':userSignup.nickName && !errors['暱稱']}"><i class="bi bi-person-circle"></i> 暱稱</label>
                                            <VField
                                                id="nickName"
                                                name="暱稱"
                                                type="text"
                                                class="form-control border-0 border-bottom"
                                                :class="{ 'is-invalid': errors['暱稱'], 'is-valid':userSignup.nickName && !errors['暱稱']}"
                                                placeholder="請輸入您的暱稱"
                                                rules="required|max:10"
                                                v-model="userSignup.nickName"
                                            ></VField>
                                            <ErrorMessage name="暱稱" class="invalid-feedback"></ErrorMessage>
                                        </div>
                                        <div class="col-12 fs-5">
                                            <label for="email" class="form-label" :class="{'text-blueGreen':userSignup.email && !errors['信箱']}"><i class="bi bi-envelope-fill" ></i> 信箱</label>
                                            <VField
                                                id="email"
                                                name="信箱"
                                                type="email"
                                                class="form-control border-0 border-bottom"
                                                :class="{ 'is-invalid': errors['信箱'], 'is-valid':userSignup.email && !errors['信箱']}"
                                                placeholder="請輸入您的信箱"
                                                rules="email|required"
                                                v-model="userSignup.email"
                                                autocomplete="email"
                                            ></VField>
                                            <ErrorMessage name="信箱" class="invalid-feedback"></ErrorMessage>
                                        </div>
                                        <div class="col-12 fs-5">
                                            <label for="password" class="form-label" :class="{'text-blueGreen':userSignup.password && !errors['密碼']}"><i class="bi bi-unlock-fill"></i> 密碼</label>
                                            <VField
                                                id="password"
                                                name="密碼"
                                                type="password"
                                                class="form-control border-0 border-bottom"
                                                :class="{ 'is-invalid': errors['密碼'], 'is-valid':!errors['密碼'] && userSignup.password}"
                                                placeholder="請輸入密碼"
                                                rules="required|min:6"
                                                v-model="userSignup.password"
                                                autocomplete="new-password"
                                            ></VField>
                                            <ErrorMessage name="密碼" class="invalid-feedback"></ErrorMessage>
                                        </div>
                                        <div class="col-12 fs-5">
                                            <label for="confirmPassword" class="form-label" :class="{'text-blueGreen':userSignup.confirmPassword && !errors['確認密碼']}"><i class="bi bi-lock-fill" ></i> 確認密碼</label>
                                            <VField
                                                id="confirmPassword"
                                                name="確認密碼"
                                                type="password"
                                                class="form-control border-0 border-bottom"
                                                :class="{ 'is-invalid': errors['確認密碼'], 'is-valid':!errors['確認密碼'] && userSignup.confirmPassword}"
                                                placeholder="請再次輸入密碼"
                                                rules="required|confirmed:@密碼"
                                                v-model="userSignup.confirmPassword"
                                                autocomplete="new-password"
                                            ></VField>
                                            <ErrorMessage name="確認密碼" class="invalid-feedback"></ErrorMessage>
                                        </div>
                                        <div class="col-12" >
                                            <button type="submit" class="btn btn-primary w-100 text-white">註冊</button>
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
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { mapActions } from 'pinia'
import utilityStore from '../../stores/utilities'
export default {
  data () {
    return {
      page: '登入',
      userSignup: {
        nickName: '',
        email: '',
        password: '',
        confirmPassword: '',
        headshotImg: ''
      },
      userLogin: {
        email: '',
        password: ''
      }
    }
  },
  components: {
    RouterLink
  },
  methods: {
    ...mapActions(utilityStore, ['goToTop']),
    async signUp  () {
      const email = this.userSignup.email
      const password = this.userSignup.password
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        const loginUser = userCredential.user
        const reference = ref(db, 'users/' + loginUser.uid)
        set(reference, {
          email,
          nickName: this.userSignup.nickName,
          headshotImg: this.userSignup.headshotImg
        })

        this.$swal({
          icon: 'success',
          title: '註冊成功',
          showConfirmButton: false,
          timer: 1500
        })
        this.$router.push('/home')
      } catch (e) {
        this.$swal({
          icon: 'error',
          title: '此信箱已被註冊，請更換信箱',
          showConfirmButton: false,
          timer: 1500
        })
      }
    },
    async login () {
      const email = this.userLogin.email
      const password = this.userLogin.password
      try {
        const userCgreenential = await signInWithEmailAndPassword(auth, email, password)
        const loginUser = userCgreenential.user
        this.$swal({
          icon: 'success',
          title: '登入成功',
          showConfirmButton: false,
          timer: 1500
        })
        if (loginUser) {
          this.$router.push('/home')
        }
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
    this.goToTop()
  },
  watch: {
    page () {
      if (this.page === '登入') {
        this.userSignup = {
          nickName: '',
          email: '',
          password: '',
          confirmPassword: '',
          headshotImg: ''
        }
      } else if (this.page === '註冊') {
        this.userLogin = {
          email: '',
          password: ''
        }
      }
    }
  }
}
</script>
