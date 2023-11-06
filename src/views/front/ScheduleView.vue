<script>
import { onAuthStateChanged } from 'firebase/auth'
import utilityStore from '../../stores/utilities'
import { mapActions } from 'pinia'
import { ref, onValue, set, push } from 'firebase/database'
import { auth, db } from '../../firebase/db'
import DeleteScheduleModal from '../../components/DeleteScheduleModal.vue'
import CalendarComponent from '../../components/CalendarComponent.vue'

export default {
  data () {
    return {
      uid: '',
      scheduleId: '',
      startTime: '8:00',
      endTime: '9:00',
      mark: '一般',
      message: '',
      schedules: {},
      oneDaySchedule: {},
      index: '',
      deleteScheduleId: ''
    }
  },
  components: {
    DeleteScheduleModal,
    CalendarComponent
  },
  methods: {
    ...mapActions(utilityStore, ['toastMessage', 'goToTop']),
    getDateId (dataId) { // 用於emit 子傳父
      this.scheduleId = dataId
    },
    getSchedules () { // 取得此人所有行程
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.uid = user.uid
          const dataRef = ref(db, 'schedules/' + user.uid)
          onValue(dataRef, snapshot => {
            this.schedules = snapshot.val()
            if (this.schedules) {
              this.oneDaySchedule = this.schedules[this.scheduleId]

              if (this.oneDaySchedule) {
                for (const id in this.oneDaySchedule) {
                  this.oneDaySchedule[id].id = id
                }
                this.oneDaySchedule = Object.values(this.oneDaySchedule).sort((a, b) => a.startTime.split(':')[0] - b.startTime.split(':')[0])
              }
            } else {
              this.schedules = {}
              this.oneDaySchedule = {}
            }
          })
        } else {
          this.uid = null
          this.$router.push('/loginSignup')
          this.toastMessage('請登入', 'error')
        }
      })
    },
    getSchedule (dataId) { // 取得一天行程
      this.scheduleId = dataId
      const dataRef = ref(db, `schedules/${this.uid}/${this.scheduleId}`)
      onValue(dataRef, snapshot => {
        this.oneDaySchedule = snapshot.val()
        if (!this.oneDaySchedule) {
          this.oneDaySchedule = {}
          return
        }
        for (const id in this.oneDaySchedule) {
          this.oneDaySchedule[id].id = id
        }
        this.oneDaySchedule = Object.values(this.oneDaySchedule).sort((a, b) => a.startTime.split(':')[0] - b.startTime.split(':')[0])
      })
    },
    addTempSchedule () {
      if (this.message === '') {
        return
      }
      const obj = {
        mark: this.mark,
        startTime: this.startTime,
        endTime: this.endTime,
        message: this.message
      }
      this.message = ''

      const reference = ref(db, `schedules/${this.uid}/${this.scheduleId}`)
      const newUserRef = push(reference)
      set(newUserRef, obj)
      this.toastMessage('新增行事曆成功')
    },
    openDeleteModal (id, index) {
      this.deleteScheduleId = id
      this.index = index
    }
  },
  mounted () {
    this.goToTop()
    this.getSchedules()
  }
}
</script>
<template>
    <div data-aos="fade-up" data-aos-duration="1000" class="py-lg-160 py-100 container">
      <h2 class="text-center mb-4 mb-lg-5">行事曆</h2>
      <div class="row g-4">
        <CalendarComponent @data-id="getDateId" :data="schedules" :get-data="getSchedule"></CalendarComponent>
        <div class="col">
          <h3 class="text-center mb-lg-4 mb-3">{{ scheduleId }}</h3>
          <ul class="list-unstyled d-flex justify-content-end fs-14 fs-lg-6">
            <li class="d-flex me-3">
                <div class="bg-danger" style="width: 20px; height: 20px;"></div>
                <span class="ms-2">緊急</span>
            </li>
            <li class="d-flex me-3">
                <div class="bg-warning" style="width: 20px; height: 20px;"></div>
                <span class="ms-2">優先</span>
            </li>
            <li class="d-flex">
                <div class="bg-success" style="width: 20px; height: 20px;"></div>
                <span class="ms-2">一般</span>
            </li>
          </ul>
          <div class="row mb-4 gy-3">
            <div class="col-lg-2">
              <label for="mark" class="form-label">註記</label>
              <select name="" id="mark" class="form-select fs-lg-14" v-model="mark">
                <option value="緊急">緊急</option>
                <option value="優先">優先</option>
                <option value="一般">一般</option>
              </select>
            </div>
            <div class="col-lg-2">
              <label for="startTime" class="form-label">起始時間</label>
              <select name="" id="startTime" class="form-select fs-lg-14" v-model="startTime">
                <template v-for="(hour, index) in 24" :key="hour + 302">
                  <option v-if="index !== 24" :value="`${index}:00`">{{ `${index}:00` }}</option>
                </template>
              </select>
            </div>
            <div class="col-lg-2">
              <label for="endTime" class="form-label">結束時間</label>
              <select name="" id="endTime" class="form-select fs-lg-14" v-model="endTime">
                <template v-for="(hour, index) in 24" :key="hour + 302">
                  <option v-if="index !== 24 && index >= startTime.split(':')[0]" :value="`${index}:00`">{{ `${index}:00` }}</option>
                </template>
              </select>
            </div>
            <div class="col-lg-5 col-10">
              <label for="work" class="form-label">行程</label>
              <input type="text" id="work" class="form-control fs-lg-14" v-model="message" @keyup.enter="addTempSchedule">
            </div>
            <div class="col-lg-1 col-2 mt-auto">
              <button @click="addTempSchedule" type="button" class="btn btn-outline-primary ms-auto">+</button>
            </div>
          </div>
          <table class="table table-borderless fs-14 fs-lg-5 text-center">
              <thead class="border-bottom">
                <tr>
                  <th class="white-space-nowrap">註記</th>
                  <th width="200">時間</th>
                  <th width="400">行程</th>
                  <th width="30" class="white-space-nowrap">刪除</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(work, index) in oneDaySchedule" :key="index + 4910">
                  <td class="py-3">
                    <div class="mx-auto" :class="{'bg-danger': work.mark === '緊急','bg-warning': work.mark === '優先', 'bg-success': work.mark === '一般'}" style="width: 20px; height: 20px;"></div>
                  </td>
                  <td class="py-3">{{ work.startTime}}-{{ work.endTime }}</td>
                  <td class="py-3 word-break-all">{{work.message}}</td>
                  <td class="text-end py-lg-2 py-3">
                    <i class="bi bi-x fs-15 fs-lg-3 cursor-pointer" @click="openDeleteModal(scheduleId, work.id)"></i>
                  </td>
                </tr>
              </tbody>
          </table>
          <h4 v-if="!oneDaySchedule" class="text-center py-5 text-muted">尚無行程安排</h4>
        </div>
      </div>
      <DeleteScheduleModal :id="deleteScheduleId" :open-delete-modal="openDeleteModal" :uid="uid" :index="index"></DeleteScheduleModal>
    </div>
</template>
