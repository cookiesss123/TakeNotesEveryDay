import { defineStore } from 'pinia'
// 環境不屬於 vue 所以不能用 this 取得 axios
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
// 在js檔案要引入才能用
import router from '../router'
import { auth, db } from '../firebase/db'
import { onAuthStateChanged, signOut } from 'firebase/auth'
// update , set, update, remove, push
import { ref, onValue } from 'firebase/database'

const todoStore = defineStore('todo', {
  state: () => {
    return {
      loadingItem: '',
      bigLoading: '',

      token: '',
      userId: '',
      user: {},
      uid: null
    }
  },
  actions: {
    checkLogin () {
      // onAuthStateChanged 監聽使用者是否登入
      // 建議放在 mounted 因為這會隨時監聽使用者登入
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          this.uid = user.uid
          console.log(this.uid, '使用者已登入取得 uid')
          // ...
          const dataRef = ref(db, 'users/' + user.uid)
          onValue(dataRef, snapshot => {
            this.user = snapshot.val()
            console.log(this.user, '讀取的資料')
          })
        } else {
          // User is signed out
          // ...
          console.log('並未登入')
          this.uid = null
          this.user = {}
        }
      })
    },
    logout () {
      signOut(auth).then(() => {
        this.uid = ''
        this.user = {}
        // 登出成功
        Swal.fire({
          icon: 'success',
          title: '已登出',
          showConfirmButton: false,
          timer: 1500
        })
        // 重載頁面 因為重載頁面所以跑很快 該如何設定在swl顯示完畢才秀這個呢? 不用setTimeout
        // 避免過期之後暱稱還在 重新存入token userId nickName 等等
        this.checkLogin()

        if (window.location.href.includes('/home')) {
        // 在首頁一定要重新載入 不然不會更新頁面
          location.reload()
        } else {
          router.push('/home') // 登出直接跳轉到首頁
        }
      }).catch((error) => {
        console.log(error, '登出錯誤')
      })
    },
    // 吐司訊息 收藏、購物車
    toastMessage (message, icon = 'success') {
      const Toast = Swal.mixin({
        toast: true,
        // position: 'top-end',
        showConfirmButton: false,
        timer: 1000,
        // timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon,
        title: message
      })
    }
  },
  // getters 概念同「computed」
  getters: {}
})

// 可以是預設匯出 也可以是具名匯出
export default todoStore
