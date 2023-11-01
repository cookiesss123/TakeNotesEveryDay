<script>
import { calendarBg } from '../utils/publicData'
export default {
  data () {
    return {
      calendarBg,
      selectYear: new Date().getFullYear(),
      selectMonth: new Date().getMonth() + 1,
      date: new Date().getDate(),
      februaryDay: 28,
      dayArr: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      dayNum: 30, // 假設每月基本天數
      startOfWeek: 0, // 每月第一天是星期幾
      endDay: 0, // 每月最後一個星期剩餘天數
      weekNum: 0 // 星期數
    }
  },
  props: ['data', 'getData', 'getAllData'],
  methods: {
    countFebruaryDay (year) { // 計算2月天數
      // 閏年 平年
      this.dayArr[1] = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28
    },
    getWeeks () {
      this.dayNum = this.dayArr[this.selectMonth - 1]
      this.startOfWeek = new Date(this.selectYear, this.selectMonth - 1, 1).getDay()
      this.weekNum = Math.ceil((this.dayNum + this.startOfWeek) / 7)
      this.endDay = (this.dayNum + this.startOfWeek) % 7
    },
    watchSchedule (day, week) { // 1~7天  第幾個星期
      if (week === 1 && day > this.startOfWeek) { // 第一個星期
        this.date = day - this.startOfWeek
        // 1. 扣除第一和最後一個星期 || 2. 最後一個星期
      } else if ((week !== 1 && week !== this.weekNum) || (week === this.weekNum && (day <= this.endDay || this.endDay === 0))) {
        this.date = day - this.startOfWeek + 7 * (week - 1)
      }
      this.$emit('data-id', this.dataId)
      this.getData()
    }
  },
  mounted () {
    this.countFebruaryDay(this.selectYear)
    this.getWeeks()
    this.$emit('data-id', this.dataId)
    this.getAllData(this.dataId)
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
      return (day, week) => {
        if (week === 1 && day > this.startOfWeek) {
          return day - this.startOfWeek
        } else if ((week !== 1 && week !== this.weekNum) || (week === this.weekNum && (day <= this.endDay || this.endDay === 0))) {
          return day - this.startOfWeek + 7 * (week - 1)
        }
        return ''
      }
    },
    dataId () {
      return `${this.selectYear}-${this.selectMonth}-${this.date}`
    }
  }
}
</script>
<template>
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
                        <td v-for="k in 7" :key="k + 83" :class="{'pointer-events-none': (i === 1 && k <= startOfWeek) || (i === weekNum && k > endDay && endDay !== 0), 'bg-lightGray': (i === 1 && k <= startOfWeek) || (i === weekNum && k > endDay && endDay !== 0), 'today': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth}-${allDate(k, i)}`, 'active-date': `${selectYear}-${selectMonth}-${allDate(k, i)}` === dataId}" @click="watchSchedule (k, i)">
                            <h5 class="fs-lg-5 fs-6">{{ allDate(k, i) }}</h5>
                            <span v-if="data && data[`${selectYear}-${selectMonth}-${allDate(k, i)}`]" class="badge rounded-pill bg-primary fs-lg-6">{{ Object.values(data[`${selectYear}-${selectMonth}-${allDate(k, i)}`]).length }}項</span>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
