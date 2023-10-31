<template>
    <div data-aos="fade-up" data-aos-duration="1000" class="py-lg-160 py-100 container">
      <h2 class="text-center">行事曆</h2>
      <div class="row g-4 ">
        <div class="col-lg-6">
          <select name="" id="" class="mx-auto form-select text-center border-0 fs-lg-3 fs-4" v-model="selectYear" style="width: 150px;">
            <option v-for="(i, index) in 15" :key="i + 68" :value="2023 + index">{{2023 + index}}</option>
          </select>
          <div class="card">
            <div class="card-header bg-primary bg-no-repeat bg-cover" :style="`background-image: url('${bgImg}')`">
              <div class="col-lg-3 d-flex align-items-center mx-auto">
                <select name="" id="" v-model="selectMonth" class="col-lg-3 form-select fs-4 text-center border-0 text-white bg-transparent select-arrow-none">
                    <option v-for="i in 12" :key="i + 49" :value="i" :class="{'bg-purple': selectMonth === 1, 'bg-blue': selectMonth === 2, 'bg-pink': selectMonth === 3, 'bg-green-4': selectMonth === 4, 'bg-green-5': selectMonth === 5, 'bg-yellow': selectMonth === 6, 'bg-orange': selectMonth === 7, 'bg-red': selectMonth === 8, 'bg-darkRed': selectMonth === 9, 'bg-darkOrange': selectMonth === 10, 'bg-brown': selectMonth === 11, 'bg-darkBlue': selectMonth === 12}" >{{ i }} 月</option>
                </select>
                <button type="button" class="btn border" :disabled="selectMonth === 1" @click="selectMonth -= 1"><i class="bi bi-caret-up-fill text-white"></i></button>
                <button type="button" class="btn border ms-3" :disabled="selectMonth === 12" @click="selectMonth += 1"><i class="bi bi-caret-down-fill text-white"></i></button>
              </div>
            </div>
            <div class="card-body pb-0">
              <table class="table calendar text-center">
                  <thead class="fs-5 border-bottom border-primary">
                      <tr>
                          <th width="100">日</th>
                          <th width="100">一</th>
                          <th width="100">二</th>
                          <th width="100">三</th>
                          <th width="100">四</th>
                          <th width="100">五</th>
                          <th width="100">六</th>
                      </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(i) in weekNum" :key="i + 902" height="80">
                        <td v-for="k in 7" :key="k + 83" :class="{'pointer-events-none': (i === 1 && k <= firstdayWeekdayIndex) || (i === weekNum && k > endDay && endDay !== 0), 'bg-lightGray': (i === 1 && k <= firstdayWeekdayIndex) || (i === weekNum && k > endDay && endDay !== 0), 'today': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth}-${allDate(k, i)}`, 'active-date': `${selectYear}-${selectMonth}-${allDate(k, i)}` === scheduleId}" @click="watchSchedule (i, k)">
                          <h5 class="fs-lg-5 fs-6">{{ allDate(k, i) }}</h5>
                          <span v-if="schedules && schedules[`${selectYear}-${selectMonth}-${allDate(k, i)}`]" class="badge rounded-pill bg-primary fs-lg-6">{{ Object.values(schedules[`${selectYear}-${selectMonth}-${allDate(k, i)}`]).length }}項</span>
                        </td>
                    </tr>
                  </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <h3 class="text-center mb-lg-4 mb-3">{{ selectYear }}-{{ selectMonth }}-{{ date }}</h3>
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
          <table class="table table-borderless CalendarModal fs-14 fs-lg-5 text-center">
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
          <h4 v-if="!Object.keys(oneDaySchedule).length" class="text-center py-5 text-muted">尚無行程安排</h4>
        </div>
      </div>
      <DeleteScheduleModal :id="deleteScheduleId" :open-delete-modal="openDeleteModal" :uid="uid" :index="index"></DeleteScheduleModal>
    </div>
</template>
<script>
import { onAuthStateChanged } from 'firebase/auth'
import utilityStore from '../../stores/utilities'
import { mapActions } from 'pinia'
import { ref, onValue, set, push } from 'firebase/database'
import { auth, db } from '../../firebase/db'
import { calendarBg } from '../../utils/publicData'
import DeleteScheduleModal from '../../components/DeleteScheduleModal.vue'
export default {
  data () {
    return {
      calendarBg,
      selectYear: '2023',
      selectMonth: new Date().getMonth() + 1,
      date: new Date().getDate(),
      februaryDay: 28,
      dayArr: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      dayNum: '30',
      scheduleId: '',
      uid: '',

      firstdayWeekdayIndex: 0,
      endDay: 0,
      weekNum: 0,

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
    DeleteScheduleModal
  },
  methods: {
    ...mapActions(utilityStore, ['toastMessage', 'goToTop']),
    getSchedules () {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.uid = user.uid
          const dataRef = ref(db, 'schedules/' + user.uid)
          onValue(dataRef, snapshot => {
            this.schedules = snapshot.val()
            if (this.schedules) {
              this.oneDaySchedule = this.schedules[`${this.selectYear}-${this.selectMonth}-${this.date}`]
              for (const id in this.oneDaySchedule) {
                this.oneDaySchedule[id].id = id
              }
              this.oneDaySchedule = Object.values(this.oneDaySchedule).sort((a, b) => a.startTime.split(':')[0] - b.startTime.split(':')[0])

              this.scheduleId = `${this.selectYear}-${this.selectMonth}-${this.date}`
            } else {
              this.schedules = {}
              this.oneDaySchedule = {}
            }
            console.log(this.schedules, this.oneDaySchedule, '所有內容')
          })
        } else {
          this.uid = null
          this.$router.push('/loginSignup')
          this.toastMessage('請登入', 'error')
        }
      })
    },
    watchSchedule (i, k) { // 星期數 天數
      if (i === 1 && k > this.firstdayWeekdayIndex) {
        this.date = k - this.firstdayWeekdayIndex
      } else if ((i !== 1 && i !== this.weekNum) || (i === this.weekNum && (k <= this.endDay || this.endDay === 0))) {
        this.date = k - this.firstdayWeekdayIndex + 7 * (i - 1)
      }
      this.scheduleId = `${this.selectYear}/${this.selectMonth}/${this.date}`
      this.scheduleId = this.scheduleId.replace(/\//g, '-')

      const dataRef = ref(db, `schedules/${this.uid}/${this.scheduleId}`)
      onValue(dataRef, snapshot => {
        this.oneDaySchedule = snapshot.val()
        if (!this.oneDaySchedule) {
          this.oneDaySchedule = {}
        }
        for (const id in this.oneDaySchedule) {
          this.oneDaySchedule[id].id = id
        }
        this.oneDaySchedule = Object.values(this.oneDaySchedule).sort((a, b) => a.startTime.split(':')[0] - b.startTime.split(':')[0])
      })
    },
    countFebruaryDay (year) {
      // 閏年 平年
      this.dayArr[1] = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28
    },
    getWeeks () {
      this.dayNum = this.dayArr[this.selectMonth - 1]

      const date = new Date(this.selectYear, this.selectMonth - 1, 1)
      this.firstdayWeekdayIndex = date.getDay()
      this.weekNum = Math.ceil((this.dayNum + this.firstdayWeekdayIndex) / 7)
      this.endDay = (this.dayNum + this.firstdayWeekdayIndex) % 7
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
    this.countFebruaryDay(this.selectYear)

    this.getWeeks()
  },
  watch: {
    selectYear () {
      this.countFebruaryDay(this.selectYear)
      this.getWeeks()
    },
    selectMonth () {
      this.getWeeks()
    }
  },
  computed: {
    bgImg () {
      return calendarBg[`${this.selectMonth}月`].bgImg
    },
    allDate () { // 所有天數日期
      return (k, i) => {
        if (i === 1 && k > this.firstdayWeekdayIndex) {
          return k - this.firstdayWeekdayIndex
        } else if ((i !== 1 && i !== this.weekNum) || (i === this.weekNum && (k <= this.endDay || this.endDay === 0))) {
          return k - this.firstdayWeekdayIndex + 7 * (i - 1)
        }
        return ''
      }
    }
  }
}
</script>
