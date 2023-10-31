<template>
    <div data-aos="fade-up" data-aos-duration="1000" class="py-lg-160 py-100 container">

        <section class=" d-flex flex-column">
            <div class="d-flex justify-content-center align-items-center mb-2 mb-lg-0">
                <select name="" id="" class="form-select text-center border-0 fs-lg-3 fs-4" v-model="selectYear" style="width: 150px;">
                    <option v-for="(i, index) in 15" :key="i + 68" :value="2023 + index">{{2023 + index}}</option>
                </select>
                <h2 class="ms-2 fs-lg-3 fs-4">行事曆</h2>
            </div>
            <ul class="list-unstyled d-flex ms-auto">
                <li class="d-flex me-3">
                    <div class="bg-danger rounded-circle" style="width: 20px; height: 20px;"></div>
                    <span class="ms-2">緊急</span>
                </li>
                <li class="d-flex me-3">
                    <div class="bg-warning rounded-circle" style="width: 20px; height: 20px;"></div>
                    <span class="ms-2">優先</span>
                </li>
                <li class="d-flex">
                    <div class="bg-success rounded-circle" style="width: 20px; height: 20px;"></div>
                    <span class="ms-2">一般</span>
                </li>
            </ul>
            <div class="card">
                <div class="card-header bg-primary bg-no-repeat bg-cover" :style="`background-image: url('${bgImg}')`">
                    <div class="col-lg-1 d-flex align-items-center mx-auto">
                        <select name="" id="" v-model="selectMonth" class="col-lg-3 form-select fs-4 text-center border-0 text-white bg-transparent select-arrow-none">
                            <option v-for="i in 12" :key="i + 49" :value="i" :class="{'bg-purple': selectMonth === 1, 'bg-blue': selectMonth === 2, 'bg-pink': selectMonth === 3, 'bg-green-4': selectMonth === 4, 'bg-green-5': selectMonth === 5, 'bg-yellow': selectMonth === 6, 'bg-orange': selectMonth === 7, 'bg-red': selectMonth === 8, 'bg-darkRed': selectMonth === '9', 'bg-darkOrange': selectMonth === 10, 'bg-brown': selectMonth === 11, 'bg-darkBlue': selectMonth === 12}" >{{ i }} 月</option>
                        </select>
                        <button type="button" class="btn border" :disabled="selectMonth === 1" @click="selectMonth -= 1"><i class="bi bi-caret-up-fill text-white"></i></button>
                        <button type="button" class="btn border ms-3" :disabled="selectMonth === 12" @click="selectMonth += 1"><i class="bi bi-caret-down-fill text-white"></i></button>
                    </div>
                </div>
                <div class="card-body">
                    <table class="table lgCalendar">
                        <thead class="h5 border-bottom border-primary">
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
                            <tr v-for="(i, index) in weekNum" :key="i + 902">
                                <td v-for="k in 7" :key="k + 83" :class="{'pointer-events-none': (i === 1 && k <= firstdayWeekdayIndex) || (i === weekNum && k > endDay && endDay !== 0), 'bg-lightGray': (i === 1 && k <= firstdayWeekdayIndex) || (i === weekNum && k > endDay && endDay !== 0)}" @click="openModal (i, k)">
                                    <!-- 第一週 -->

                                    <!-- 嘗試用 computed 濃縮看看 -->
                                    <template v-if="i === 1 && k > firstdayWeekdayIndex">
                                        <div class="d-flex align-items-center">
                                            <h4 class="fs-6">{{ k - firstdayWeekdayIndex  }}</h4>
                                            <span v-if="calendars[`${selectYear}-${selectMonth}-${k - firstdayWeekdayIndex }`]" class="badge rounded-pill bg-primary ms-3 mt-n2">{{ calendars[`${selectYear}-${selectMonth}-${k - firstdayWeekdayIndex }`].length }}個項目</span>
                                        </div>
                                        <ul v-if="calendars[`${selectYear}-${selectMonth}-${k - firstdayWeekdayIndex}`]" class="list-unstyled">
                                            <li v-for="(item, index) in calendars[`${selectYear}-${selectMonth}-${k - firstdayWeekdayIndex}`]" :key="item">
                                                <template v-if="index < 4">
                                                    <span v-if="!item.checked" class="me-2 d-inline-block rounded-circle" :class="{'bg-danger': item.mark === 'danger', 'bg-warning': item.mark === 'warning', 'bg-success': item.mark === 'success'}" style="width: 10px; height: 10px;"></span>
                                                    <i v-else-if="item.checked" class="bi bi-check2 fs-5 align-middle"></i>
                                                    <span :class="{'text-decoration-line-through': item.checked}">{{ item.message.length < 11 ? item.message : `${item.message.slice(0, 10)}...` }}</span>
                                                </template>
                                            </li>
                                        </ul>
                                    </template>
                                    <!-- 後續幾週 -->
                                    <template v-else-if="(i !== 1 && i !== weekNum) || (i === weekNum && (k <= endDay || endDay === 0))">
                                        <div class="d-flex align-items-center">
                                            <h4 class="fs-6">{{ k - firstdayWeekdayIndex + 7 * index }}</h4>
                                            <span v-if="calendars[`${selectYear}-${selectMonth}-${k - firstdayWeekdayIndex + 7 * index}`]" class="badge rounded-pill bg-primary ms-3 mt-n2">{{ calendars[`${selectYear}-${selectMonth}-${k - firstdayWeekdayIndex + 7 * index}`].length }}個項目</span>
                                        </div>

                                        <ul v-if="calendars[`${selectYear}-${selectMonth}-${k - firstdayWeekdayIndex + 7 * index}`]" class="list-unstyled">
                                            <li v-for="(item, index) in calendars[`${selectYear}-${selectMonth}-${k - firstdayWeekdayIndex + 7 * index}`]" :key="item">
                                                <template v-if="index < 4">
                                                    <span v-if="!item.checked" class="me-2 d-inline-block rounded-circle" :class="{'bg-danger': item.mark === 'danger', 'bg-warning': item.mark === 'warning', 'bg-success': item.mark === 'success'}" style="width: 10px; height: 10px;"></span>
                                                    <i v-else-if="item.checked" class="bi bi-check2 fs-5 align-middle"></i>
                                                    <span :class="{'text-decoration-line-through': item.checked}">{{ item.message.length < 11 ? item.message : `${item.message.slice(0, 10)}...` }}</span>
                                                </template>
                                            </li>
                                        </ul>
                                    </template>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="card-footer py-5 bg-center bg-cover bg-no-repeat" :style="`background-image: url('${bgImg}')`"></div>
            </div>
        </section>

        <CalendarModal ref="calendarModal" :uid="uid" :id="calendarId" :open-modal="openModal" :date="date"></CalendarModal>
    </div>
</template>
<script>
import { onAuthStateChanged } from 'firebase/auth'
import CalendarModal from '../../components/CalendarModal.vue'
import utilityStore from '../../stores/utilities'
import { mapActions } from 'pinia'
import { ref, onValue } from 'firebase/database'
import { auth, db } from '../../firebase/db'
import { calendarBg } from '../../utils/publicData'
export default {
  data () {
    return {
      calendarBg,
      selectYear: '2023',
      selectMonth: new Date().getMonth() + 1,
      date: '',
      februaryDay: 28,
      dayArr: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      dayNum: '30',
      calendarId: '',
      uid: '',
      calendars: {},

      firstdayWeekdayIndex: 0,
      endDay: 0,
      weekNum: 0
    }
  },
  components: {
    CalendarModal
  },
  methods: {
    ...mapActions(utilityStore, ['toastMessage', 'goToTop']),
    getCalendar () {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.uid = user.uid
          const dataRef = ref(db, 'calendars/' + user.uid)
          onValue(dataRef, snapshot => {
            this.calendars = snapshot.val()
            console.log(this.calendars, '內容')
          })
        } else {
          this.uid = null
          this.$router.push('/loginSignup')
          this.toastMessage('請登入', 'error')
        }
      })
    },
    // openModal (date) {
    //   this.date = date
    //   this.calendarId = `${this.selectYear}/${this.selectMonth}/${date}`
    //   this.calendarId = this.calendarId.replace(/\//g, '-')
    // },
    openModal (i, k) { // 星期數 天數 星期
      if (i === 1 && k > this.firstdayWeekdayIndex) {
        this.date = k - this.firstdayWeekdayIndex
      } else if ((i !== 1 && i !== this.weekNum) || (i === this.weekNum && (k <= this.endDay || this.endDay === 0))) {
        this.date = k - this.firstdayWeekdayIndex + 7 * (i - 1)
      }
      //   this.date = date
      this.calendarId = `${this.selectYear}/${this.selectMonth}/${this.date}`
      this.calendarId = this.calendarId.replace(/\//g, '-')
    },
    countFebruaryDay (year) {
      // 閏年 平年
      this.dayArr[1] = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28
    },
    getWeeks () {
      // 重新計算共有幾天
      this.dayNum = this.dayArr[this.selectMonth - 1]

      const date = new Date(this.selectYear, this.selectMonth - 1, 1)
      this.firstdayWeekdayIndex = date.getDay()
      this.weekNum = Math.ceil((this.dayNum + this.firstdayWeekdayIndex) / 7)
      this.endDay = (this.dayNum + this.firstdayWeekdayIndex) % 7
    }
  },
  mounted () {
    this.goToTop()
    this.getCalendar()
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
    }
  }
}
</script>
