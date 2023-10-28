<template>
    <div class="modal fade" ref="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen-md-down modal-xl">
            <div class="modal-content">
            <div class="modal-header bg-green d-flex">
                <h5 class="modal-title text-white ms-auto" id="exampleModalLabel">
                  {{ calendarId }}
                </h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <section>
                <h4 class="ms-5 mb-3">新增行程</h4>
                <div class="row px-lg-5 mb-5 gy-3">
                  <div class="col-lg-2">
                    <label for="time" class="form-label">時間</label>
                      <select name="" id="time" class="form-select" v-model="time">
                        <template v-for="(hour, index) in 24" :key="hour">
                          <option v-if="index !== 24" :value="`${index}:00 - ${index + 1}:00`">{{ `${index}:00 - ${index + 1}:00` }}</option>
                        </template>
                      </select>
                  </div>
                  <div class="col-lg-2 d-flex ">
                    <div class="w-100">
                      <label for="mark" class="form-label">註記</label>
                      <select name="" id="mark" class="form-select" v-model="mark">
                        <option value="danger" selected>緊急</option>
                        <option value="warning">優先</option>
                        <option value="success">一般</option>
                      </select>
                    </div>
                    <div class="rounded-circle ms-2" :class="{'bg-danger': mark === 'danger', 'bg-warning': mark === 'warning', 'bg-success': mark === 'success'}" style="height: 20px; width: 20px; margin-top: 40px;"></div>
                  </div>
                  <div class="col-lg-7">
                    <label for="work" class="form-label">行程</label>
                    <input type="text" id="work" class="form-control" v-model="message" alt="" @keyup.enter="addCalendar">
                  </div>
                  <div class="col-lg-1 d-flex flex-column mt-lg-auto">
                    <button @click="addCalendar" type="button" class="btn btn-outline-green ms-auto">+</button>
                  </div>
                </div>
                  <h4 class="text-center" style="background-color: #c2e8d9;">上午行程</h4>
                  <table class="table table-borderless CalendarModal fs-10 fs-lg-6">
                    <thead style="border-bottom: 1px solid #dee2e6;">
                      <tr>
                        <th>時間</th>
                        <th class="white-space-nowrap">註記</th>
                        <th>行程</th>
                        <th class="white-space-nowrap">完成</th>
                        <th class="white-space-nowrap">刪除</th>
                      </tr>
                    </thead>
                    <tbody>
                      <template v-for="(work, index) in tempCalendar" :key="index + 4910">
                        <tr v-if="work.time.split('- ')[1].split(':')[0] < 13">
                        <td class="">
                          {{work.time}}
                        </td>
                        <td>
                          <div class="rounded-circle " :class="{'bg-danger': work.mark === 'danger', 'bg-warning': work.mark === 'warning', 'bg-success': work.mark === 'success'}" ></div>
                        </td>
                        <td  class="">
                          <span style="word-break: break-all;" :class="{'text-decoration-line-through': work.checked}">{{work.message}}</span>
                        </td>
                        <td >
                          <div v-if="!work.checked" class="checkbox border-green border bg-white rounded-1 cursor-pointer" @click="work.checked = true"></div>
                          <i v-else-if="work.checked" @click="work.checked = false" class="bi bi-check2 cursor-pointer" ></i>
                        </td>
                        <td>
                          <i class="bi bi-x fs-15 fs-lg-4 cursor-pointer" @click="tempCalendar.splice(index, 1)"></i>
                        </td>
                      </tr>
                      </template>
                    </tbody>
                  </table>
                  <h4 class="text-center" style="background-color: #c2e8d9;">下午行程</h4>
                  <table class="table table-borderless CalendarModal fs-10 fs-lg-6">
                    <thead style="border-bottom: 1px solid #dee2e6;">
                      <tr>
                        <th>時間</th>
                        <th class="white-space-nowrap">註記</th>
                        <th>行程</th>
                        <th class="white-space-nowrap">完成</th>
                        <th class="white-space-nowrap">刪除</th>
                      </tr>
                    </thead>
                    <tbody>
                      <template v-for="(work, index) in tempCalendar" :key="index + 4910">
                        <tr v-if="work.time.split('- ')[1].split(':')[0] > 12">
                        <td>
                          {{work.time}}
                        </td>
                        <td>
                          <div class="rounded-circle " :class="{'bg-danger': work.mark === 'danger', 'bg-warning': work.mark === 'warning', 'bg-success': work.mark === 'success'}" ></div>
                        </td>
                        <td>
                          <span style="word-break: break-all;" :class="{'text-decoration-line-through': work.checked}">{{work.message}}</span>
                        </td>
                        <td >
                          <div v-if="!work.checked" class="checkbox border-green border bg-white rounded-1 cursor-pointer" @click="work.checked = true"></div>
                          <i v-else-if="work.checked" @click="work.checked = false" class="bi bi-check2 cursor-pointer" ></i>
                        </td>
                        <td>
                          <i class="bi bi-x fs-15 fs-lg-4 cursor-pointer" @click="tempCalendar.splice(index, 1)"></i>
                        </td>
                      </tr>
                      </template>
                    </tbody>
                  </table>
              </section>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
                <button type="button" class="btn btn-primary" @click="updatedCalendar">
                  <span>確認</span>
                </button>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
import modalMixin from '../mixins/modalMixin'
import { db } from '../firebase/db'
import { ref, set, onValue } from 'firebase/database'
import utilityStore from '../stores/utilities'
import { mapActions } from 'pinia'

export default {
  data () {
    return {
      tempCalendar: {},
      message: '',
      calendarId: '',
      time: '7:00 - 8:00',
      mark: 'danger',
      checked: false
    }
  },
  mixins: [modalMixin],
  props: ['uid', 'id', 'openModal', 'date'],
  methods: {
    ...mapActions(utilityStore, ['toastMessage']),
    addCalendar () {
      if (this.message === '' || !this.time) {
        return
      }
      this.tempCalendar.push({
        message: this.message,
        time: this.time,
        mark: this.mark,
        checked: this.checked
      })
      this.message = ''
    },
    updatedCalendar () {
      const reference = ref(db, `calendars/${this.uid}/${this.calendarId}`)
      set(reference, this.tempCalendar)
      this.toastMessage('新增行事曆成功')
      this.hide()
    }
  },
  mounted () {
  },
  watch: {
    id () {
      if (!this.date) {
        return
      }
      this.calendarId = this.id
      const dataRef = ref(db, `calendars/${this.uid}/${this.calendarId}`)
      onValue(dataRef, snapshot => {
        this.tempCalendar = snapshot.val()
        if (!this.tempCalendar) {
          this.tempCalendar = []
        }
        this.show()
        this.openModal('')
      })
    }
  }
}
</script>
