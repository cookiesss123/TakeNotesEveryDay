<template>
    <div class="modal fade" ref="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header bg-dark">
                <h5 class="modal-title text-white" id="exampleModalLabel">
                    刪除行程
                </h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" v-if="schedule">
                <p>確定要刪除
                    【{{schedule.startTime}}-{{ schedule.endTime }}】<span class="text-danger fw-bold">{{ schedule.message }}</span>
                    嗎?
                </p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-gray" data-bs-dismiss="modal">關閉</button>
                <button type="button" class="btn btn-danger" @click="deleteSchedule">
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
// set
import { ref, onValue, remove } from 'firebase/database'
import { mapActions } from 'pinia'
import utilityStore from '../stores/utilities'
export default {
  data () {
    return {
      schedule: {},
      deleteId: ''
    }
  },
  mixins: [modalMixin],
  props: ['id', 'openDeleteModal', 'uid', 'index'],
  methods: {
    ...mapActions(utilityStore, ['toastMessage']),
    deleteSchedule () {
      remove(ref(db, `schedules/${this.uid}/${this.deleteId}/${this.index}`))
      this.toastMessage('刪除成功')
      this.hide()
    }
  },
  watch: {
    id () {
      if (this.id) {
        const dataRef = ref(db, `schedules/${this.uid}/${this.id}/${this.index}`)
        onValue(dataRef, snapshot => {
          this.schedule = snapshot.val()
          this.show()
          this.deleteId = this.id
          this.openDeleteModal('', this.index)
        }, {
          onlyOnce: true
        })
      }
    }
  }
}
</script>
