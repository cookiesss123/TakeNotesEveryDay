<template>
    <div class="modal fade" ref="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header bg-dark">
                <h5 class="modal-title text-white" id="exampleModalLabel">
                    刪除清單
                </h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>確定要刪除清單
                    <span v-if="tempTodo" class="text-danger fw-bold">
                      【{{tempTodo.title}}】
                    </span>
                    嗎?
                </p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
                <button type="button" class="btn btn-danger" @click="deleteTodo">
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
import { ref, remove, onValue } from 'firebase/database'
import { mapActions } from 'pinia'
import todoStore from '../stores/todo'
export default {
  data () {
    return {
      tempTodo: {},
      deleteId: ''
    }
  },
  mixins: [modalMixin],
  props: ['id', 'openDeleteModal', 'uid'],
  methods: {
    ...mapActions(todoStore, ['toastMessage']),
    deleteTodo () {
      remove(ref(db, `todoLists/${this.uid}/${this.deleteId}`))
      this.toastMessage('刪除清單')
      this.hide()
    }
  },
  watch: {
    id () {
      if (this.id) {
        const dataRef = ref(db, `todoLists/${this.uid}/${this.id}`)
        onValue(dataRef, snapshot => {
          this.tempTodo = snapshot.val()
          this.show()
          this.deleteId = this.id
          this.openDeleteModal('')
        })
      }
    }
  }
}
</script>
