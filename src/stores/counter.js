import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  state: () => {
    return {
      // 購物車小loading
      loadingItem: '',
      bigLoading: '',

      token: '',
      userId: '',
      cart: {}, // 不是只能用陣列是 res.data格式是陣列所以之前沒用[0]才取不到
      cartItems: [], // ok
      coupons: [],
      orders: [],
      myOrder: {},
      cartNum: 0,
      nickName: '',
      admin: '',
      user: {},
      uid: null
    }
  },
  actions: {
    // 怎麼分辨遊客和使用者??? 看token 使用者登入就會有token 沒登入就拿不到token 透過判斷 token 是否存在
    // 存在過期的token就請他重新登入 不存在token 就不用叫他再登入
    // 如果是遊客 先設定不會有userId cart id 是1 共用的 不能用600
    // 以下所有都要區分有權限或無權限
    getCart (uid) {
      // 遊客uid 是 1
      const dataRef = ref(db, `carts/${uid}`)
      onValue(dataRef, snapshot => {
        this.cart = snapshot.val()
        if (this.cart) { // 有值
          this.cartItems = this.cart.items
          this.cartNum = this.cart.items.length
        } else if (!this.cart) { // 沒值
          this.cartItems = []
          this.cartNum = 0
        }
        console.log(this.cart, this.cartItems, this.cartNum, '購物車資料')
      })
    },
    // 運費還沒做
    addCart (product, qty = 1) { // 登入使用者如果要清空是全部刪掉 刪除刪到最後一個也是全部刪掉
      let id = this.uid
      if (!this.uid) { // 遊客 代號是1
        id = '1'
      }

      this.loadingItem = 'loading'
      const obj = {
        items: [],
        coupon: {},
        deliveryCharge: 60,
        total: 0,
        finalTotal: 60
      }

      const item = {
        product,
        qty,
        total: product.price * qty
      }

      // 先判斷是不是第一次加商品
      // 1. 使用者第一次加商品 找不到購物車
      if (!this.cartItems.length) {
      // 使用者第一次加商品 透過 id
        obj.items.push(item)
        obj.total += item.total
        obj.finalTotal += item.total

        const reference = ref(db, `carts/${id}`)
        set(reference, {
          items: obj.items,
          coupon: obj.coupon,
          deliveryCharge: obj.deliveryCharge,
          total: obj.total,
          finalTotal: obj.finalTotal
        })
        console.log('第一次加入購物車')
      } else if (this.cartItems.length !== 0) { // 2.使用者購物車已有其他商品
        // 先判斷是購買同類或不同類商品：
        if (JSON.stringify(this.cartItems).indexOf(item.product.id) !== -1) { // (1) 加入相同產品
          this.cartItems.forEach((cartItem, index) => {
            if (cartItem.product.id === product.id) {
              this.cartItems[index].qty += qty
              this.cartItems[index].total = product.price * this.cartItems[index].qty
            }
          })
          console.log('買同樣的商品')
        } else if (JSON.stringify(this.cartItems).indexOf(item.product.id) === -1) { // (2) 加入不同產品
          this.cartItems.push(item)
        }
        obj.items = this.cartItems

        this.cartItems.forEach((cartItem) => {
          obj.total += cartItem.total
          obj.finalTotal += cartItem.total
        })
        update(ref(db), {
          [`carts/${id}/`]: {
            items: obj.items,
            coupon: obj.coupon,
            deliveryCharge: obj.deliveryCharge,
            total: obj.total,
            finalTotal: obj.finalTotal
          }
        })
        // 遊客：原本就有，判斷是不是第一次新增商品
        console.log('第二次加入商品')
      }

      this.toastMessage('加入購物車')
      this.loadingItem = ''
    },
    // 購物車 + - 按鈕
    updateCartNum (btnStatus, product, qty) {
      this.loadingItem = 'loading'

      let id = this.uid
      if (!this.uid) { // 遊客 代號是1
        id = '1'
      }

      if (btnStatus === 'add') {
        qty += 1
      } else if (btnStatus === 'reduce') {
        qty -= 1
      }

      const obj = {
        items: [],
        coupon: {},
        deliveryCharge: 60,
        total: 0,
        finalTotal: 60
      }

      this.cartItems.forEach((cartItem, index) => {
        // 3.如果加的是同種類的商品
        if (cartItem.product.id === product.id) {
          this.cartItems[index].qty = qty
          this.cartItems[index].total = product.price * this.cartItems[index].qty
          obj.items = this.cartItems
        }
      })

      obj.items.forEach(item => {
        obj.total += item.total
        obj.finalTotal += item.total
      })

      update(ref(db), {
        [`carts/${id}/`]: {
          items: obj.items,
          coupon: obj.coupon,
          deliveryCharge: obj.deliveryCharge,
          total: obj.total,
          finalTotal: obj.finalTotal
        }
      })
      this.toastMessage('購物車更新成功')
      this.loadingItem = ''
    },
    // 用@change事件在購物車的空白input
    changeCartNum (product, qty, event) {
      this.loadingItem = 'loading'

      let id = this.uid
      if (!this.uid) { // 遊客 代號是1
        id = '1'
      }

      if (Number(event.target.value) === 0) { // 避免輸入0 或是 e
        qty = 1
      }
      const obj = {
        items: [],
        coupon: {},
        deliveryCharge: 60,
        total: 0,
        finalTotal: 60
      }

      this.cartItems.forEach((cartItem, index) => {
        // 加的是同種類的商品
        if (cartItem.product.id === product.id) {
          this.cartItems[index].qty = qty
          this.cartItems[index].total = product.price * this.cartItems[index].qty
          obj.items = this.cartItems
        }
      })
      obj.items.forEach(item => {
        obj.total += item.total
        obj.finalTotal += item.total
      })

      update(ref(db), {
        [`carts/${id}/`]: {
          items: obj.items,
          coupon: obj.coupon,
          deliveryCharge: obj.deliveryCharge,
          total: obj.total,
          finalTotal: obj.finalTotal
        }
      })

      this.toastMessage('購物車更新成功')
      this.loadingItem = ''
    },
    // 禁止輸入 - 或 e
    handleKeyDown (event) {
      if (event.key === 'e' || event.key === '-') {
        event.preventDefault()
      }
    },
    // 刪除購物車
    deleteCart (product) {
      this.loadingItem = 'loading'

      let id = this.uid
      if (!this.uid) { // 遊客 代號是1
        id = '1'
      }

      // 1. 如果只剩最後一個 就刪除全部
      if (this.cartItems.length === 1) {
        this.deleteAllCarts()
        return
      }
      // 2. 不是只剩最後一個 刪除單一個

      const obj = {
        items: [],
        coupon: {},
        deliveryCharge: 60,
        total: 0,
        finalTotal: 60
      }

      this.cartItems.forEach((cartItem, index) => {
        if (cartItem.product.id === product.id) {
          this.cartItems.splice(index, 1)
          obj.items = this.cartItems
        }
      })

      obj.items.forEach(item => {
        obj.total += item.total
        obj.finalTotal += item.total
      })

      update(ref(db), {
        [`carts/${id}/`]: {
          items: obj.items,
          coupon: obj.coupon,
          deliveryCharge: obj.deliveryCharge,
          total: obj.total,
          finalTotal: obj.finalTotal
        }
      })

      this.toastMessage('購物車刪除成功')
      this.loadingItem = ''
    },
    // 清空購物車 還沒改
    // json server 不能刪除全部 所以要一個一個id 去刪除(如果資料沒集中在一個id的情況)
    deleteAllCarts () {
      // 為甚麼會連遊客的購物車也被刪了??? => 原本遊客有設userId是0 拿掉之後就不會了
      this.loadingItem = 'loading'

      let id = this.uid
      if (!this.uid) { // 遊客 代號是1
        id = '1'
      }
      remove(ref(db, `carts/${id}`))

      this.cartNum = 0
      this.cart = {}
      this.cartItems = []
      // this.toastMessage('已清空遊客購物車')
      this.loadingItem = ''
    },
    // 還沒改
    // 上傳優惠券 寫到一半 要先改了 admin 增加一個項目是 條件
    checkCoupon (couponCode) {
      console.log(couponCode, '優惠券代碼')
      // 比對 輸入的折扣券code 是不是有符合其中的
      const usable = this.coupons.filter(coupon => {
        return coupon.code === couponCode
      })
      console.log(usable[0], '優惠券')
      if (usable.length === 0) {
        this.code = ''
        this.toastMessage('沒有這個優惠券', 'error')
      } else if (usable.length === 1) {
        if (this.cart.total < usable[0].condition) {
          this.code = ''
          this.toastMessage(`您的消費額未滿${usable[0].condition}元`, 'error')
          return
        }
        this.toastMessage('使用成功')
        this.useCoupon(usable[0])
      }
    },
    useCoupon (coupon) {
      this.loadingItem = 'loading'

      let id = this.uid
      if (!this.uid) { // 遊客 代號是1
        id = '1'
      }

      const obj = {
        items: this.cartItems,
        coupon,
        deliveryCharge: 60,
        total: this.cart.total,
        finalTotal: this.cart.finalTotal - Math.ceil(this.cart.total * (coupon.discount / 100))
      }

      update(ref(db), {
        [`carts/${id}/`]: {
          items: obj.items,
          coupon: obj.coupon,
          deliveryCharge: obj.deliveryCharge,
          total: obj.total,
          finalTotal: obj.finalTotal
        }
      })
      // obj.finalTotal = this.cart.total + this.cart.deliveryCharge - Math.ceil(this.cart.total * (coupon.discount / 100))

      this.loadingItem = ''
    },
    // 取消使用優惠券
    reUseCoupon () {
      // 清空欄位
      this.loadingItem = 'loading'

      let id = this.uid
      if (!this.uid) { // 遊客 代號是1
        id = '1'
      }

      const obj = {
        items: this.cartItems,
        coupon: {},
        deliveryCharge: 60,
        total: this.cart.total,
        finalTotal: this.cart.total + 60
      }

      update(ref(db), {
        [`carts/${id}/`]: {
          items: obj.items,
          coupon: obj.coupon,
          deliveryCharge: obj.deliveryCharge,
          total: obj.total,
          finalTotal: obj.finalTotal
        }
      })
      this.toastMessage('取消優惠券')
      this.loadingItem = ''
    },
    getCoupons () {
      const dataRef = ref(db, 'coupons/')
      onValue(dataRef, snapshot => {
        this.coupons = snapshot.val()
        this.coupons = Object.values(this.coupons)
        this.coupons = this.coupons.filter(coupon => coupon.isEnabled === true)
        console.log(this.coupons, '折價券')
      })
    },
    // 還沒改 取得最新的訂單
    getOrder (uid) {
      const dataRef = ref(db, `orders/${uid}`)
      onValue(dataRef, snapshot => {
        this.orders = snapshot.val()
        this.orders = Object.entries(this.orders).map(item => {
          item[1].id = item[0]
          return item[1]
        })
        console.log(this.orders, '取得我的訂單')
        this.myOrder = this.orders[this.orders.length - 1]
        console.log(this.myOrder, '我的訂單')
      })
    },
    // 建立訂單
    addOrder (email, name, phoneNum, address, message) { // CART 還在
      this.loadingItem = 'loading'

      let id = this.uid
      if (!this.uid) { // 遊客 代號是1
        id = '1'
      }

      // 滿千免運
      if (this.cart.total >= 1000) {
        this.cart.finalTotal -= this.cart.deliveryCharge
        this.cart.deliveryCharge = 0
        console.log('免運費啦!')
      }

      const reference = ref(db, `orders/${id}`)
      // 訂單隨機號碼
      const newUserRef = push(reference)
      set(newUserRef, {
        creatAt: new Date().getTime(),
        cart: this.cart,
        paymentStatus: false,
        payDate: '',
        deliveryStatus: '待出貨',
        email,
        name,
        phoneNum,
        address,
        message
      })

      // 2.讓使用者獲得抽獎券
      // 只有登入的使用者可以有抽獎券
      if (this.uid) {
        let ticketQty = 0 // 預設 0
        // 單筆滿2000 送 1 張; 滿 5000 送 3張; 滿 1萬 送 7張
        if (this.cart.total >= 2000 && this.cart.total < 5000) {
          ticketQty = 1
        } else if (this.cart.total >= 5000 && this.cart.total < 10000) {
          ticketQty = 3
        } else if (this.cart.total >= 10000) {
          ticketQty = 7
        }
        update(ref(db), {
          [`users/${this.uid}/lotteryTicket/`]: this.user.lotteryTicket + ticketQty
        })
        if (ticketQty !== 0) {
          this.toastMessage(`恭喜您獲得${ticketQty}張抽獎券`) // 這個不會顯示
        }
        // 清空購物車
        this.deleteAllCarts()
        router.push('/orderSuccess') // 跳轉到結帳完成頁面 必須先跳頁 再重渲染 也沒有 不知道剛剛為什麼有錯
      }
    },
    // 最好都寫在這 這樣nickName狀態才一致 過期的時候nickName才會清除
    getUserInfo () {
      const user = auth.currentUser
      if (user !== null) {
        this.uid = user.uid
        console.log(this.uid, '我的uid')
      }
    },
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
    // 登入過的使用者驗證過期，請再登入一次
    pleaseReLogin () {
      // if (this.token) { // 如果token存在再叫他登入 不然就沒事
      //   Swal.fire({
      //     icon: 'error',
      //     title: '登入時效過期，請重新登入',
      //     showConfirmButton: false,
      //     timer: 1500
      //   })
      //   localStorage.clear()
      //   document.cookie = 'myToken=; path=/;'

      //   // location.reload()
      //   router.push('/loginSignup/login') // 跳轉到登入頁面 他不想登入那就算了因為這只會在登入過才觸發前面清空token就不會再度觸發
      // }
      // 沒有token 且 使用者存在的情況
      if (!this.token && this.nickName) {
        console.log('請您重新登入')
        Swal.fire({
          icon: 'error',
          title: '登入時效過期，請重新登入',
          showConfirmButton: false,
          timer: 1500
        })
        // 清空所有
        localStorage.clear()
        document.cookie = 'myToken=; path=/;'

        router.push('/login') // 跳轉到登入頁面
      }
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
        // customClass: {
        //   icon: 'fa-2x' // 設定圖示元件的樣式
        // },
        // iconHtml: '<font-awesome-icon icon="check-circle"/>'
      })

      Toast.fire({
        icon,
        title: message
      })
    }
  }
})
