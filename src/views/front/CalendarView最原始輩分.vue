<template>
    <div data-aos="fade-up" data-aos-duration="1000" class="d-flex flex-column my-7">
        <h2 class="text-center mb-lg-5">行事曆</h2>
        <section class="mx-auto col-lg-10 d-flex flex-column">
            <div class="col-lg-2 mb-4" style="margin: 0 auto;">
                <select name="" id="" class="form-select fs-3 text-center border-0" v-model="selectYear">
                    <option v-for="(i, index) in 15" :key="i + 68" :value="2023 + index">{{2023 + index}}</option>
                </select>
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
                            <option v-for="i in 12" :key="i + 49" :value="`${i}月`" :class="{'bg-purple': selectMonth === '1月', 'bg-blue': selectMonth === '2月', 'bg-pink': selectMonth === '3月', 'bg-green-4': selectMonth === '4月', 'bg-green-5': selectMonth === '5月', 'bg-yellow': selectMonth === '6月', 'bg-orange': selectMonth === '7月', 'bg-red': selectMonth === '8月', 'bg-darkRed': selectMonth === '9月', 'bg-darkOrange': selectMonth === '10月', 'bg-brown': selectMonth === '11月', 'bg-darkBlue': selectMonth === '12月'}" >{{ i }} 月</option>
                        </select>
                        <button type="button" class="btn border" :disabled="selectMonth === '1月'" @click="selectMonth = `${Number(selectMonth.split('月')[0]) - 1}月`"><i class="bi bi-caret-up-fill text-white"></i></button>
                        <button type="button" class="btn border ms-3" :disabled="selectMonth === '12月'" @click="selectMonth = `${Number(selectMonth.split('月')[0]) + 1}月`"><i class="bi bi-caret-down-fill text-white"></i></button>
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
                        <!-- 沒有的天數用空白取代 -->
                        <tbody>
                            <!-- 算有幾周 最前面沒有從1開始 -->
                            <!-- <tr v-for="(i, index) in weekNum" :key="i + 902">
                                <td v-for="k in 7" :key="k + 83" :class="{'pointer-events-none': (i === 1 && k <= firstdayWeekdayIndex) || (i === weekNum && k > endDay && endDay !== 0), 'bg-gray': (i === 1 && k <= firstdayWeekdayIndex) || (i === weekNum && k > endDay && endDay !== 0)}">
                                    <template v-if="i === 1">{{ k - firstdayWeekdayIndex }}</template>
                                    <template v-else-if="i !== 1">{{ k - firstdayWeekdayIndex + 7 * index }}</template>
                                </td>
                            </tr> -->
                            <tr v-for="(i, index) in weekNum" :key="i + 902">
                                <td v-for="k in 7" :key="k + 83" :class="{'pointer-events-none': (i === 1 && k <= firstdayWeekdayIndex) || (i === weekNum && k > endDay && endDay !== 0), 'bg-gray': (i === 1 && k <= firstdayWeekdayIndex) || (i === weekNum && k > endDay && endDay !== 0)}">
                                    <template v-if="i === 1 && k > firstdayWeekdayIndex">{{ k - firstdayWeekdayIndex }}</template>
                                    <template v-else-if="i !== 1 && i !== weekNum">{{ k - firstdayWeekdayIndex + 7 * index }}</template>
                                    <template v-else-if="(i === weekNum && k <= endDay) || endDay === 0">{{ k - firstdayWeekdayIndex + 7 * index }}</template>
                                </td>
                            </tr>
                        </tbody>

                        <!-- <tbody class="text-start">
                            <tr>
                                <td v-for="day in weekdayIndex" :key="day + 400" class="bg-white pointer-events-none"></td>
                                <template v-for="(day, index) in (7 - weekdayIndex)" :key="index + 5503">
                                    <td @click="openModal(day)"  :class="{'border': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day}`, 'border-primary': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day}`, 'border-3': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day}`, 'bg-secondary': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day}`}">{{ day }}
                                    <template v-for="(calendar, index) in calendars" :key="index">
                                        <div v-if="index === `${selectYear}-${selectMonth.split('月')[0]}-${day}`">
                                            <ul v-for="(item, index) in calendar" :key="index + 59" class="list-unstyled">
                                                <li class="d-flex align-items-center">
                                                    <span class="me-2 d-inline-block rounded-circle" :class="{'bg-danger': item.mark === 'danger', 'bg-warning': item.mark === 'warning', 'bg-success': item.mark === 'success'}" style="width: 10px; height: 10px;"></span>
                                                    <span v-if="item.message.length < 11" class="d-none d-lg-block" :class="{'text-decoration-line-through': item.checked}">{{ item.message }}</span>
                                                    <span  v-else-if="item.message.length >= 11" class="d-none d-lg-block" :class="{'text-decoration-line-through': item.checked}">{{ item.message.slice(0, 10) }}...</span>
                                                    <i v-if="item.checked" class="ms-auto bi bi-check2 fs-4 d-none d-lg-block cursor-pointer"></i>
                                                </li>
                                            </ul>
                                        </div>
                                    </template>
                                    </td>
                                </template>
                            </tr>
                            <tr >
                                <template v-for="(day, index) in 7" :key="index + 5100">
                                    <td @click="openModal(day + 7 - weekdayIndex)" :class="{'border': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 7 - weekdayIndex}`, 'border-primary': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 7 - weekdayIndex}`, 'border-3': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 7 - weekdayIndex}`, 'bg-secondary': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 7 - weekdayIndex}`}">{{ day + 7 - weekdayIndex }}
                                    <template v-for="(calendar, index) in calendars" :key="index">
                                        <div  v-if="index === `${selectYear}-${selectMonth.split('月')[0]}-${day + 7 - weekdayIndex}`">
                                            <ul v-for="(item, index) in calendar" :key="index + 59" class="list-unstyled">
                                                <li class="d-flex align-items-center">
                                                    <span class="me-2 d-inline-block rounded-circle" :class="{'bg-danger': item.mark === 'danger', 'bg-warning': item.mark === 'warning', 'bg-success': item.mark === 'success'}" style="width: 10px; height: 10px;"></span>
                                                    <span v-if="item.message.length < 11"  class="d-none d-lg-block" :class="{'text-decoration-line-through': item.checked}">{{ item.message }}</span>
                                                    <span  v-else-if="item.message.length >= 11"  class="d-none d-lg-block" :class="{'text-decoration-line-through': item.checked}">{{ item.message.slice(0, 10) }}...</span>
                                                    <i v-if="item.checked" class="ms-auto bi bi-check2 fs-4 d-none d-lg-block cursor-pointer"></i>
                                                </li>
                                            </ul>
                                        </div>
                                    </template>
                                </td>
                                </template>
                            </tr>
                            <tr >
                                <template v-for="(day, index) in 7" :key="index + 5200" >
                                    <td @click="openModal(day + 14 - weekdayIndex)" :class="{'border': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 14 - weekdayIndex}`, 'border-primary': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 14 - weekdayIndex}`, 'border-3': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 14 - weekdayIndex}`, 'bg-secondary': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 14 - weekdayIndex}`}">{{ day + 14 - weekdayIndex }}
                                    <template v-for="(calendar, index) in calendars" :key="index">
                                        <div  v-if="index === `${selectYear}-${selectMonth.split('月')[0]}-${day + 14 - weekdayIndex}`">
                                            <ul v-for="(item, index) in calendar" :key="index + 59" class="list-unstyled">
                                                <li class="d-flex align-items-center">
                                                    <span class="me-lg-2 d-inline-block rounded-circle" :class="{'bg-danger': item.mark === 'danger', 'bg-warning': item.mark === 'warning', 'bg-success': item.mark === 'success'}" style="width: 10px; height: 10px;"></span>
                                                    <span v-if="item.message.length < 11" class="d-none d-lg-block" :class="{'text-decoration-line-through': item.checked}">{{ item.message }}</span>
                                                    <span  v-else-if="item.message.length >= 11"  class="d-none d-lg-block"  :class="{'text-decoration-line-through': item.checked}">{{ item.message.slice(0, 10) }}...</span>
                                                    <i v-if="item.checked" class="ms-auto bi bi-check2 fs-4 d-none d-lg-block cursor-pointer"></i>
                                                </li>
                                            </ul>
                                        </div>
                                    </template>
                                </td>
                                </template>
                            </tr>
                             <template v-if="(dayNum >= 30 && weekdayIndex === 6) || (dayNum === 31 && weekdayIndex === 5) && (new Date().getMonth() + 1) !== 2">
                                <tr >
                                    <template  v-for="(day, index) in 7" :key="index + 5300" >
                                        <td @click="openModal(day + 21 - weekdayIndex)" :class="{'border': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 21 - weekdayIndex}`, 'border-primary': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 21 - weekdayIndex}`, 'border-3': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 21 - weekdayIndex}`, 'bg-secondary': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 21 - weekdayIndex}`}">{{ day + 21 - weekdayIndex }}
                                        <template v-for="(calendar, index) in calendars" :key="index">
                                            <div  v-if="index === `${selectYear}-${selectMonth.split('月')[0]}-${day + 21 - weekdayIndex}`">
                                                <ul v-for="(item, index) in calendar" :key="index + 59" class="list-unstyled">
                                                    <li class="d-flex align-items-center">
                                                        <span class="me-2 d-inline-block rounded-circle" :class="{'bg-danger': item.mark === 'danger', 'bg-warning': item.mark === 'warning', 'bg-success': item.mark === 'success'}" style="width: 10px; height: 10px;"></span>
                                                        <span v-if="item.message.length < 11" class="d-none d-lg-block" :class="{'text-decoration-line-through': item.checked}">{{ item.message }}</span>
                                                        <span  v-else-if="item.message.length >= 11" class="d-none d-lg-block" :class="{'text-decoration-line-through': item.checked}">{{ item.message.slice(0, 10) }}...</span>
                                                        <i v-if="item.checked" class="ms-auto bi bi-check2 fs-4 d-none d-lg-block cursor-pointer"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </template>
                                    </td>
                                    </template>

                                </tr>
                                <tr >
                                    <template  v-for="(day, index) in 7" :key="index + 5300">
                                        <td @click="openModal(day + 28 - weekdayIndex)" :class="{'border': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 28 - weekdayIndex}`, 'border-primary': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 28 - weekdayIndex}`, 'border-3': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 28 - weekdayIndex}`, 'bg-secondary': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 28 - weekdayIndex}`}">{{ day + 28 - weekdayIndex }}
                                        <template v-for="(calendar, index) in calendars" :key="index">
                                            <div  v-if="index === `${selectYear}-${selectMonth.split('月')[0]}-${day + 28 - weekdayIndex}`">
                                                <ul v-for="(item, index) in calendar" :key="index + 59" class="list-unstyled">
                                                    <li class="d-flex align-items-center">
                                                        <span class="me-2 d-inline-block rounded-circle" :class="{'bg-danger': item.mark === 'danger', 'bg-warning': item.mark === 'warning', 'bg-success': item.mark === 'success'}" style="width: 10px; height: 10px;"></span>
                                                        <span v-if="item.message.length < 11" class="d-none d-lg-block" :class="{'text-decoration-line-through': item.checked}">{{ item.message }}</span>
                                                        <span  v-else-if="item.message.length >= 11" class="d-none d-lg-block" :class="{'text-decoration-line-through': item.checked}">{{ item.message.slice(0, 10) }}...</span>
                                                        <i v-if="item.checked" class="ms-auto bi bi-check2 fs-4 d-none d-lg-block cursor-pointer"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </template>
                                    </td>
                                    </template>
                                </tr>
                                <tr >
                                    <template v-for="(day, index) in (dayNum - 28 -( 7 - weekdayIndex))" :key="index + 5400">
                                        <td @click="openModal(day + 28 + 7 - weekdayIndex)"  :class="{'border': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 28 + 7 - weekdayIndex}`, 'border-primary': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 28 + 7 - weekdayIndex}`, 'border-3': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 28 + 7 - weekdayIndex}`, 'bg-secondary': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 28 + 7 - weekdayIndex}`}">{{ day + 28 + 7 - weekdayIndex }}
                                        <template v-for="(calendar, index) in calendars" :key="index">
                                            <div  v-if="index === `${selectYear}-${selectMonth.split('月')[0]}-${day + 28 + 7 - weekdayIndex}`">
                                                <ul v-for="(item, index) in calendar" :key="index + 59" class="list-unstyled">
                                                    <li class="d-flex align-items-center">
                                                        <span class="me-2 d-inline-block rounded-circle" :class="{'bg-danger': item.mark === 'danger', 'bg-warning': item.mark === 'warning', 'bg-success': item.mark === 'success'}" style="width: 10px; height: 10px;"></span>
                                                        <span v-if="item.message.length < 11" class="d-none d-lg-block" :class="{'text-decoration-line-through': item.checked}">{{ item.message }}</span>
                                                        <span  v-else-if="item.message.length >= 11" class="d-none d-lg-block" :class="{'text-decoration-line-through': item.checked}">{{ item.message.slice(0, 10) }}...</span>
                                                        <i v-if="item.checked" class="ms-auto bi bi-check2 fs-4 d-none d-lg-block cursor-pointer"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </template>
                                    </td>
                                    </template>

                                </tr>
                            </template>
                            <template v-else>
                                <tr >
                                    <template v-for="(day, index) in 7" :key="index + 5300">
                                        <td :class="{'border': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 21 - weekdayIndex}`, 'border-primary': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 21 - weekdayIndex}`, 'border-3': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 21 - weekdayIndex}`, 'bg-secondary': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 21 - weekdayIndex}`}" @click="openModal(day + 21 - weekdayIndex)">{{ day + 21 - weekdayIndex }}
                                        <template v-for="(calendar, index) in calendars" :key="index">
                                            <div  v-if="index === `${selectYear}-${selectMonth.split('月')[0]}-${day + 21 - weekdayIndex}`">
                                                <ul v-for="(item, index) in calendar" :key="index + 59" class="list-unstyled">
                                                    <li class="d-flex align-items-center">
                                                        <span class="me-2 d-inline-block rounded-circle" :class="{'bg-danger': item.mark === 'danger', 'bg-warning': item.mark === 'warning', 'bg-success': item.mark === 'success'}" style="width: 10px; height: 10px;"></span>
                                                        <span v-if="item.message.length < 11" class="d-none d-lg-block" :class="{'text-decoration-line-through': item.checked}">{{ item.message }}</span>
                                                        <span  v-else-if="item.message.length >= 11" class="d-none d-lg-block" :class="{'text-decoration-line-through': item.checked}">{{ item.message.slice(0, 10) }}...</span>
                                                        <i v-if="item.checked" class="ms-auto bi bi-check2 fs-4 d-none d-lg-block cursor-pointer"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </template>
                                    </td>
                                    </template>
                                </tr>
                                <tr  style="max-height: 150px;">
                                    <template v-for="(day, index) in (dayNum - 21 -( 7 - weekdayIndex))" :key="index + 5400">
                                        <td @click="openModal(day + 21 + 7 - weekdayIndex)"  :class="{'border': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 21 + 7 - weekdayIndex}`, 'border-primary': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 21 + 7 - weekdayIndex}`, 'border-3': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 21 + 7 - weekdayIndex}`, 'bg-secondary': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 21 + 7 - weekdayIndex}`}">{{ day + 21 + 7 - weekdayIndex }}
                                        <template v-for="(calendar, index) in calendars" :key="index">
                                            <div  v-if="index === `${selectYear}-${selectMonth.split('月')[0]}-${day + 21 + 7 - weekdayIndex}`">
                                                <ul v-for="(item, index) in calendar" :key="index + 59" class="list-unstyled">
                                                    <li class="d-flex align-items-center">
                                                        <span class="me-2 d-inline-block rounded-circle" :class="{'bg-danger': item.mark === 'danger', 'bg-warning': item.mark === 'warning', 'bg-success': item.mark === 'success'}" style="width: 10px; height: 10px;"></span>
                                                        <span v-if="item.message.length < 11" class="d-none d-lg-block" :class="{'text-decoration-line-through': item.checked}">{{ item.message }}</span>
                                                        <span  v-else-if="item.message.length >= 11" class="d-none d-lg-block" :class="{'text-decoration-line-through': item.checked}">{{ item.message.slice(0, 10) }}...</span>
                                                        <i v-if="item.checked" class="ms-auto bi bi-check2 fs-4 d-none d-lg-block cursor-pointer"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </template>
                                    </td>
                                    </template>
                                </tr>
                            </template>

                        </tbody> -->
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
      selectMonth: `${new Date().getMonth() + 1}月`,
      februaryDay: 28,
      dayArr: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      weekdayIndex: 0,
      dayNum: '30',
      date: '',
      calendarId: '',
      uid: '',
      calendars: [],

      firstdayWeekdayIndex: 0,
      endDay: 0,
      weekNum: 0
    }
  },
  components: {
    CalendarModal
  },
  methods: {
    ...mapActions(utilityStore, ['toastMessage']),
    getCalendar () {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.uid = user.uid
          const dataRef = ref(db, 'calendars/' + user.uid)
          onValue(dataRef, snapshot => {
            this.calendars = snapshot.val()
          })
        } else {
          this.uid = null
          this.$router.push('/loginSignup')
          this.toastMessage('請登入', 'error')
        }
      })
    },
    openModal (date) {
      this.date = date
      this.calendarId = `${this.selectYear}/${this.selectMonth.split('月')[0]}/${date}`
      this.calendarId = this.calendarId.replace(/\//g, '-')
    },
    countFebruaryDay (year) {
      // 閏年 平年
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        this.dayArr[1] = 29
      } else {
        this.dayArr[1] = 28
      }
    },
    getWeekday (year, month, day) {
      const date = new Date(year, month - 1, day)
      //   const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      this.weekdayIndex = date.getDay()
    //   console.log(year, month, day, this.weekdayIndex, '星期幾')
    },
    getWeeks () {
      // 先算 10 月
      const date = new Date(this.selectYear, this.selectMonth.split('月')[0] - 1, 1)
      this.firstdayWeekdayIndex = date.getDay()
      this.weekNum = Math.ceil((this.dayNum + this.firstdayWeekdayIndex) / 7)
      this.endDay = (this.dayNum + this.firstdayWeekdayIndex) % 7
      console.log(this.endDay, '幾天')
    }
  },
  mounted () {
    window.scrollTo(0, 0)
    this.getCalendar()
    this.dayNum = this.dayArr[this.selectMonth.split('月')[0] - 1]
    this.countFebruaryDay(this.selectYear)
    this.getWeekday(this.selectYear, new Date().getMonth() + 1, 1) // 算出這個月的第一天 但是不能共用這個方法要另外用其他

    this.getWeeks()
  },
  watch: {
    selectYear () {
      this.countFebruaryDay(this.selectYear)
      this.getWeekday(this.selectYear, this.selectMonth.split('月')[0], '1')

      this.getWeeks()
    },
    selectMonth () {
      this.countFebruaryDay(this.selectYear)
      this.dayNum = this.dayArr[this.selectMonth.split('月')[0] - 1]
      this.getWeekday(this.selectYear, this.selectMonth.split('月')[0], '1')

      this.getWeeks()
    }
  },
  computed: {
    bgImg () {
      return calendarBg[this.selectMonth].bgImg
    }
  }
}
</script>
