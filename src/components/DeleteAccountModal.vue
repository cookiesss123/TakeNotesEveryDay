<template>
    <div class="modal fade" ref="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header bg-dark">
                <h5 class="modal-title text-white" id="exampleModalLabel">
                    刪除記帳
                </h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" v-if="tempAccount">
                <p>確定要刪除這一筆帳款
                    <span class="fw-bold" :class="{'text-danger': tempAccount.transactionType === '支出', 'text-success': tempAccount.transactionType === '收入'}">
                      【{{tempAccount.category}} - {{ tempAccount.title }} NT$ <span v-if="tempAccount.money">{{ numberComma(tempAccount.money) }}</span> 】
                    </span>
                    嗎?
                </p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-gray" data-bs-dismiss="modal">關閉</button>
                <button type="button" class="btn btn-danger" @click="deleteRecord">
                確認刪除
                </button>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
import modalMixin from '../mixins/modalMixin'
import { db } from '../firebase/db'
import { ref, onValue, set } from 'firebase/database'
import { mapActions } from 'pinia'
import utilityStore from '../stores/utilities'
export default {
  data () {
    return {
      tempAccountList: [],
      tempAccount: {},
      deleteId: ''
    }
  },
  mixins: [modalMixin],
  props: ['id', 'openDeleteModal', 'uid', 'index', 'numberComma'],
  methods: {
    ...mapActions(utilityStore, ['toastMessage']),
    deleteRecord () {
      this.tempAccountList.splice(this.index, 1)
      const reference = ref(db, `accounts/${this.uid}/${this.deleteId}`)
      set(reference, this.tempAccountList)
      this.toastMessage('刪除成功')
      this.hide()
    }
  },
  watch: {
    id () {
      if (this.id) {
        const dataRef = ref(db, `accounts/${this.uid}/${this.id}`)
        onValue(dataRef, snapshot => {
          this.tempAccountList = snapshot.val()
          if (this.tempAccountList) {
            this.tempAccount = this.tempAccountList[this.index]
            console.log(this.tempAccount, '這個')
          }
          this.show()
          this.deleteId = this.id
          this.openDeleteModal('', this.index)
        })
      }
    }
  }
}
</script>
