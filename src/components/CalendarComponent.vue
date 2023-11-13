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
  props: ['data', 'getData'],
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
    getOneDayInfo (day, week) { // 1~7天  第幾個星期
      if (week === 1 && day > this.startOfWeek) { // 第一個星期
        this.date = day - this.startOfWeek
        // 1. 扣除第一和最後一個星期 || 2. 最後一個星期
      } else if ((week !== 1 && week !== this.weekNum) || (week === this.weekNum && (day <= this.endDay || this.endDay === 0))) {
        this.date = day - this.startOfWeek + 7 * (week - 1)
      }
      this.getData(this.dataId)
    }
  },
  mounted () {
    this.countFebruaryDay(this.selectYear)
    this.getWeeks()
    this.$emit('data-id', this.dataId)
    this.$emit('color', this.color)
  },
  watch: {
    selectYear () {
      this.countFebruaryDay(this.selectYear)
      this.getWeeks()
      this.getData(this.dataId)
    },
    selectMonth () {
      this.getWeeks()
      this.getData(this.dataId)
      this.$emit('color', this.color)
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
    },
    color () { // 深色
      return [`today${this.selectMonth}`]
    },
    activeColor () { // 淺色
      return [`bg-active${this.selectMonth}`]
    }
  }
}
</script>
<template>
    <div class="col">
        <div class="card bg-no-repeat bg-cover" :style="`background-image: url('${bgImg}')`">
            <div class="card-header border-0">
                <div class="d-flex align-items-center">
                  <select name="" id="" class="form-select text-center border-0 fs-lg-3 fs-4 text-white bg-transparent" v-model="selectYear" style="width: 150px;">
                    <option v-for="(i, index) in 15" :key="i + 68" :value="2023 + index" class="text-dark">{{2023 + index}}</option>
                  </select>
                  <select name="" id="" v-model="selectMonth" class="form-select mx-auto fs-lg-3 fs-4 text-center border-0 text-white select-arrow-none" style="width: 150px;">
                      <option v-for="i in 12" :key="i + 49" :value="i" class="text-dark">{{ i }} 月</option>
                  </select>
                  <button type="button" class="btn border ms-auto" :disabled="selectMonth === 1" @click="selectMonth -= 1"><i class="bi bi-caret-up-fill text-white"></i></button>
                  <button type="button" class="btn border ms-3" :disabled="selectMonth === 12" @click="selectMonth += 1"><i class="bi bi-caret-down-fill text-white"></i></button>
                </div>
            </div>
            <div class="card-body p-0">
                <table class="table calendar text-center border" :class="`border-${color}`">
                    <thead class="fs-lg-5">
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
                        <td v-for="k in 7" :key="k + 83" :class="{'pointer-events-none': (i === 1 && k <= startOfWeek) || (i === weekNum && k > endDay && endDay !== 0), [`bg-${color}`]:new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth}-${allDate(k, i)}` && `${selectYear}-${selectMonth}-${allDate(k, i)}` !== dataId, [activeColor]: `${selectYear}-${selectMonth}-${allDate(k, i)}` === dataId}" @click="getOneDayInfo (k, i)">
                            <h5 class="fs-lg-5 fs-6" :class="{'text-white': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth}-${allDate(k, i)}`, [`text-${color}`]:`${selectYear}-${selectMonth}-${allDate(k, i)}` === dataId}">{{ allDate(k, i) }}</h5>
                            <span v-if="data && data[`${selectYear}-${selectMonth}-${allDate(k, i)}`]" class="badge rounded-pill fs-lg-6 fs-10" :class="{[`bg-${color}`]: true, [`text-${color}`]: `${selectYear}-${selectMonth}-${allDate(k, i)}` === dataId || new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth}-${allDate(k, i)}`, 'bg-white': `${selectYear}-${selectMonth}-${allDate(k, i)}` === dataId || new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth}-${allDate(k, i)}`}">{{ Object.values(data[`${selectYear}-${selectMonth}-${allDate(k, i)}`]).length }}<span class="d-none d-lg-inline-block">項</span></span>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
