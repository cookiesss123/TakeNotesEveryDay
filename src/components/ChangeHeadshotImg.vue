<template>
    <div class="modal right" ref="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style=" overflow-y: hidden;">
        <div class="modal-dialog modal-fullscreen-md-down w-100" style="margin-right: 0; margin-top: 0;">
            <div class="modal-content" style="height: 100vh; overflow-y:auto">
              <div class="modal-header bg-red" style="border-radius: 0;">
                  <h5 class="modal-title text-white" v-if="uid">
                    S8CCC
                  </h5>
                  <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
              </div>
            </div>
        </div>
    </div>
</template>
<script>
import modalMixin from '../mixins/modalMixin'
import { mapActions } from 'pinia'
import utilityStore from '../stores/utilities'
// import { db, auth } from '../firebase/db'
// import { onAuthStateChanged } from 'firebase/auth'
// import { ref, onValue } from 'firebase/database'
export default {
  data () {
    return {
      code: ''
    }
  },
  props: ['uid', 'user'],
  mixins: [modalMixin],
  methods: {
    ...mapActions(utilityStore, ['toastMessage'])
  },
  mounted () {
  },
  watch: {
    // 監聽 route.fullPath 變化
    // 只要換頁就關閉cartModal
    '$route.fullPath' (newVal) { // oldVal
      console.log(newVal, '路徑')
      if (newVal === '/checkout') {
        this.code = ''
        console.log('清空優惠碼')
        this.hide()
      } else if (newVal.includes('/products')) { // 點到產品頁面也關閉modal
        this.hide()
      }
    }
    // 清空購物車 也要刪除CODE
  }

}
</script>
<style>
.right .modal-dialog{
    transition: transform .3s ease-out;
    position: fixed;
    margin: auto;
    height: 100%;
}
.modal.right .modal-content{
  overflow-y: auto;
  border-radius: 0;
  border: none;
  height: 100%;
}
.right .modal-dialog {
    transform: translateX(250px);
    right: 0;
}
</style>
