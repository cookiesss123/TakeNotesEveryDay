<template>
    <div class="d-flex flex-column" style="min-height:100vh;">
        <header class="fixed-top">
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container">
                <RouterLink to="/home" class="navbar-brand d-flex align-items-center">
                  <img src="../assets/images/icon.png" class="me-2" alt="logo" style="width: 40px; height: 40px;">
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
                            <RouterLink to="/home" active-class="active-link" class="nav-link fw-bold me-lg-3">首頁</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/todolist" active-class="active-link" class="nav-link fw-bold me-lg-3">清單</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/calendar" active-class="active-link" class="nav-link fw-bold me-lg-3">行事曆</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/accounting" active-class="active-link" class="nav-link fw-bold">記帳</RouterLink>
                        </li>
                    </ul>
                    <ul v-if="!uid" class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center fs-5">
                      <li class="nav-item">
                          <RouterLink to="/loginSignup" active-class="active-link" class="nav-link fw-bold me-lg-3">登入 / 註冊</RouterLink>
                      </li>
                    </ul>
                    <ul v-else-if="uid" class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center fs-5">
                        <li class="nav-item d-flex align-items-center">
                            <i @click="selectImgUrl" v-if="!user.headshotImg" class="bi bi-person-circle text-white cursor-pointer display-5"></i>
                            <img @click="selectImgUrl" v-else-if="user.headshotImg" :src="user.headshotImg" class="rounded-circle cursor-pointer object-fit-cover" style="height: 50px; width: 50px;">
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
        <footer class="bg-primary mt-auto">
          <div class="container d-flex flex-column flex-lg-row align-items-center py-40" >
            <div class="ms-lg-auto d-flex flex-column align-items-lg-end align-items-center">
              <ul id="contactInfo" class="list-unstyled d-flex">
                <li class="me-4">
                  <a href="#" class="text-decoration-none text-white">
                    <i class="bi bi-instagram me-2 fs-34"></i>
                  </a>
                </li>
                <li class="me-4">
                  <a href="#" class="text-decoration-none text-white">
                    <i class="bi bi-facebook me-2 fs-34"></i>
                  </a>
                </li>
                <li>
                  <a href="#" class="text-decoration-none text-white">
                    <i class="bi bi-envelope me-2 fs-34"></i>
                  </a>
                </li>
              </ul>
              <p class="mb-0 text-center text-lg-start text-white fs-10">本網站僅作為網頁製作練習使用<br class="d-block d-lg-none"><span class="d-none d-lg-inline-block">，</span>圖片、資料源自網路，無任何商業利益行為</p>
              <p class="mb-0 text-lg-end text-center text-white fs-10">Copyright © 2022 記錄每一天 All Rights Reserved.</p>
            </div>
          </div>
      </footer>
    </div>
</template>
<script>
import { RouterView, RouterLink } from 'vue-router'
import { db } from '../firebase/db'
import { ref, update } from 'firebase/database'
import utilityStore from '../stores/utilities'
import { mapState, mapActions } from 'pinia'
export default {
  components: {
    RouterLink,
    RouterView
  },
  methods: {
    ...mapActions(utilityStore, ['toastMessage', 'checkLogin', 'logout']),
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
  },
  computed: {
    ...mapState(utilityStore, ['uid', 'user'])
  }
}
</script>
