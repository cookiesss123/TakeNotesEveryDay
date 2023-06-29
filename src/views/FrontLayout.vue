<template>
    <div class="d-flex flex-column" style="min-height: 100vh">
        <header class="fixed-top">
            <nav class="navbar navbar-expand-lg navbar-dark bg-green">
            <div class="container">
                <RouterLink to="/home" class="navbar-brand d-flex align-items-center">
                  <img src="../assets/images/icon.png" class="me-2" alt="" style="width: 40px; height: 40px;">
                  <div class="text-white">
                    <p class="fs-5 fw-bold mb-0 text-start">記錄每一天</p>
                    <p class="fs-6 fw-bold mb-0 text-start">Take Notes Every Day</p>
                  </div>
                </RouterLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto  d-flex align-items-center fs-5">
                        <li class="nav-item">
                            <RouterLink to="/home" active-class="active-link" class="nav-link fw-bold me-lg-3" >首頁</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/todolist" active-class="active-link" class="nav-link fw-bold me-lg-3">清單</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/calendar" active-class="active-link" class="nav-link fw-bold me-lg-3">行事曆</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/accounting" active-class="active-link" class="nav-link fw-bold ">記帳</RouterLink>
                        </li>
                    </ul>
                    <ul v-if="!uid" class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center fs-5">
                        <li class="nav-item">
                            <RouterLink to="/login" active-class="active-link" class="nav-link fw-bold me-lg-3">登入</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/signup" active-class="active-link" class="nav-link fw-bold">註冊</RouterLink>
                        </li>
                    </ul>
                    <ul v-else-if="uid" class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center fs-5">
                        <li class="nav-item d-flex align-items-center">
                            <i @click="selectImgUrl" v-if="!user.headshotImg" class="bi bi-person-circle text-white" style="font-size: 47px; cursor: pointer;"></i>
                            <img @click="selectImgUrl" v-else-if="user.headshotImg" :src="user.headshotImg" class="rounded-circle" style="height: 50px; width: 50px; object-fit: cover; cursor: pointer;">
                            <span class="ms-2 text-white">{{ user.nickName }}</span>
                        </li>
                        <li class="nav-item ms-lg-2">
                            <a href="#" @click.prevent="logout" class="nav-link fw-bold">登出</a>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
        </header>
        <RouterView></RouterView>
        <footer class="bg-green" style=" margin-top: auto;" >
          <div class="container d-flex flex-column flex-lg-row align-items-center" style="padding: 40px 0;">
            <div class="ms-lg-auto d-flex flex-column align-items-lg-end align-items-center">
              <ul id="contactInfo" class="list-unstyled d-flex">
                <li class="me-4">
                  <a href="#" class="text-decoration-none text-white">
                    <i class="bi bi-instagram me-2" style="font-size: 34px;"></i>
                  </a>
                </li>
                <li class="me-4">
                  <a href="#" class="text-decoration-none text-white">
                    <i class="bi bi-facebook me-2" style="font-size: 34px;"></i>
                  </a>
                </li>
                <li>
                  <a href="#" class="text-decoration-none text-white">
                    <i class="bi bi-envelope me-2" style="font-size: 34px;"></i>
                  </a>
                </li>
              </ul>
              <p class="mb-0 text-center text-lg-start text-white" style="font-size: 10px;">本網站僅作為網頁製作練習使用<br class="d-block d-lg-none"><span class="d-none d-lg-inline-block">，</span>圖片、資料源自網路，無任何商業利益行為</p>
              <p class="mb-0 text-lg-end text-center text-white" style="font-size: 10px;">Copyright © 2022 記錄每一天 All Rights Reserved.</p>
            </div>
          </div>
      </footer>
    </div>
</template>
<script>
import { RouterView, RouterLink } from 'vue-router'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { db, auth } from '../firebase/db'
import { ref, onValue, update } from 'firebase/database'
import todoStore from '../stores/todo'
import { mapActions } from 'pinia'
export default {
  data () {
    return {
      uid: '',
      user: {}
    }
  },
  components: {
    RouterLink,
    RouterView
  },
  methods: {
    ...mapActions(todoStore, ['toastMessage']),

    checkLogin () {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.uid = user.uid
          const dataRef = ref(db, 'users/' + user.uid)
          onValue(dataRef, snapshot => {
            this.user = snapshot.val()
          })
        } else {
          this.uid = null
          this.user = {}
        }
      })
    },
    logout () {
      signOut(auth).then(() => {
        this.uid = ''
        this.user = {}
        this.$swal({
          icon: 'success',
          title: '已登出',
          showConfirmButton: false,
          timer: 1500
        })
        this.checkLogin()

        if (window.location.href.includes('/home')) {
        // 在首頁一定要重新載入 不然不會更新頁面
          location.reload()
        } else {
          this.$router.push('/home') // 登出直接跳轉到首頁
        }
      }).catch((error) => {
        console.log(error, '登出錯誤')
      })
    },
    // 上傳網址圖片
    async selectImgUrl () {
      const { value: file } = await this.$swal({
        title: '更換大頭貼',
        input: 'text',
        inputPlaceholder: '請輸入圖片網址',
        confirmButtonColor: '#62776f',
        confirmButtonText: '確定',
        inputAttributes: {
          accept: 'image/*',
          'aria-label': 'Upload your profile picture'
        }
      })

      if (file) {
        this.$swal({
          title: '圖片上傳成功',
          confirmButtonColor: '#62776f',
          confirmButtonText: '確定',
          imageUrl: file,
          imageHeight: 300,
          imageAlt: 'Custom image'
        })
        update(ref(db), {
          [`users/${this.uid}/headshotImg/`]: file
        })
      } else {
        this.toastMessage('請勿輸入空值', 'error')
      }
    }
  },
  mounted () {
    this.checkLogin()
  }
}
</script>
<style>
.active-link{
  color: white;
  border-bottom: 2px solid white !important;
}
.nav-link{
  border-bottom: 2px solid transparent;
  transition: all .4s ease-out;
}
.nav-link:hover{
  border-bottom: 2px solid white;
}
</style>
