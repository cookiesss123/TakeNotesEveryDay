import { defineStore } from 'pinia'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import router from '../router'
import { auth, db } from '../firebase/db'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { ref, onValue } from 'firebase/database'

const utilityStore = defineStore('utility', {
  state: () => {
    return {
      loadingItem: '',
      bigLoading: '',

      userId: '',
      user: {},
      uid: null
    }
  },
  actions: {
    checkLogin () {
      // 建議放在 mounted 因為這會隨時監聽使用者登入
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
        // 登出成功
        Swal.fire({
          icon: 'success',
          title: '已登出',
          showConfirmButton: false,
          timer: 1500
        })
        // 重載頁面 因為重載頁面所以跑很快 該如何設定在swl顯示完畢才秀這個呢? 不用setTimeout
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
        showConfirmButton: false,
        timer: 1000,
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
  getters: {}
})

export default utilityStore
