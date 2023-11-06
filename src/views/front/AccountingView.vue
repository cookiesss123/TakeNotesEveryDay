<script>
import { onAuthStateChanged } from 'firebase/auth'
import { ref, onValue, set } from 'firebase/database'
import { auth, db } from '../../firebase/db'
import utilityStore from '../../stores/utilities'
import { mapActions } from 'pinia'
import c3 from 'c3'
import DeleteAccountModal from '../../components/DeleteAccountModal.vue'
import CalendarComponent from '../../components/CalendarComponent.vue'
import { accountingCategory, navs } from '../../utils/publicData'
export default {
  data () {
    return {
      accountingCategory,
      navs,
      uid: '',
      accountId: '',
      accountDeleteId: '',
      allAccounts: {}, // 個人全部的記帳
      oneDayAccountList: [], // 一天的記帳
      index: 0,

      transactionType: '支出', // 收入
      category: '飲食',
      money: '',
      title: '',

      monthlySelectYear: new Date().getFullYear(),
      monthlySelectMonth: new Date().getMonth() + 1,
      annualSelectYear: new Date().getFullYear(),

      dateArr: [], // 日期的 key值 陣列們
      monthlyStatement: [], // 某月帳款
      annualStatement: [], // 某年帳款
      pageStatus: '收支紀錄',

      monthlyData: {},
      annualData: {},

      color: ''
    }
  },
  components: {
    DeleteAccountModal,
    CalendarComponent
  },
  methods: {
    ...mapActions(utilityStore, ['toastMessage', 'goToTop']),
    getDateId (dataId) {
      this.accountId = dataId
    },
    getColor (color) {
      this.color = color
    },
    getAllRecord () {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.uid = user.uid
          const dataRef = ref(db, `/accounts/${user.uid}`)
          onValue(dataRef, snapshot => {
            this.allAccounts = snapshot.val() // 不知道發什麼神經
            if (!this.allAccounts) {
              return
            }
            this.oneDayAccountList = this.allAccounts[this.accountId]
            if (!this.oneDayAccountList) { // 當天沒有紀錄 會出錯
              this.oneDayAccountList = []
            }
            this.dateArr = Object.keys(this.allAccounts) // 計算有帳款的日期
          })
        } else {
          this.uid = null
          this.$router.push('/loginSignup')
          this.toastMessage('請登入', 'error')
        }
      })
    },
    getRecord (dataId) { // 一天收支情形
      this.accountId = dataId
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.uid = user.uid
          const dataRef = ref(db, `/accounts/${user.uid}/${this.accountId}`)
          onValue(dataRef, snapshot => {
            const account = snapshot.val()
            if (!account) {
              this.oneDayAccountList = []
              return
            }
            this.oneDayAccountList = account
            console.log(this.oneDayAccountList, '一天收支情形')
          })
        } else {
          this.uid = null
        }
      })
    },
    // 禁止輸入 - 、 e、 小數點、0
    handleKeyDown (event) {
      if (event.key === 'e' || event.key === '-' || event.key === '.' || (this.money.length === 0 && event.key === '0')) {
        event.preventDefault()
      }
    },
    addRecord () {
      if (!this.title || !this.money) {
        this.toastMessage(!this.title ? '請輸入款項名稱' : '請輸入金額', 'error')
        return
      }
      this.oneDayAccountList.push({
        transactionType: this.transactionType,
        category: this.category,
        money: this.money,
        title: this.title
      })

      const reference = ref(db, `accounts/${this.uid}/${this.accountId}`)
      set(reference, this.oneDayAccountList)
      this.toastMessage('紀錄成功')
      this.money = ''
      this.title = ''
    },
    // 確定要刪除記帳嗎
    openDeleteModal (id, index) {
      this.accountDeleteId = id
      this.index = index
    },
    numberComma (num) {
      const comma = /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g
      return num.toString().replace(comma, ',')
    },
    getStatement (period) {
      let range = `${this.monthlySelectYear}-${this.monthlySelectMonth}`
      if (period === 'annual') {
        range = `${this.annualSelectYear}`
      }
      this[`${period}Statement`] = this.dateArr.reduce((accumulator, item) => {
        if (item.match(range)) {
          accumulator.push(...this.allAccounts[item])
        }
        return accumulator
      }, [])

      this[`${period}Data`] = {}
      this[`${period}Data`] = this[`${period}Statement`].reduce((acc, item) => {
        if (!acc[item.transactionType]) {
          acc[item.transactionType] = {}
        }
        if (!acc[item.transactionType][item.category]) {
          acc[item.transactionType][item.category] = 0
        }
        acc[item.transactionType][item.category] += item.money
        return acc
      }, {})
    },
    getPieChart (period, type, obj) {
      let colors = {
        飲食: '#fe9738',
        日用品: '#64a5f8',
        住宿: '#a501e1',
        交通: '#f94730',
        娛樂: '#1d8d6a',
        衣飾: '#fe66a0',
        其他: '#212529'
      }
      if (type === '收入') {
        colors = {
          月薪: '#5aa622',
          其他: '#212529'
        }
      }
      return c3.generate({
        bindto: `#${period}${type === '支出' ? 'Expense' : 'Revenue'}Chart`,
        data: {
          columns: obj[type] ? Object.entries(obj[type]) : [],
          type: 'pie',
          colors
        }
      })
    },
    getMonthlyInfo () {
      this.getStatement('monthly')
      this.getPieChart('monthly', '支出', this.monthlyData)
      this.getPieChart('monthly', '收入', this.monthlyData)
    },
    getAnnualInfo () {
      this.getStatement('annual')
      this.getPieChart('annual', '支出', this.annualData)
      this.getPieChart('annual', '收入', this.annualData)
    }
  },
  mounted () {
    this.goToTop()
    this.getAllRecord()
  },
  watch: {
    pageStatus () {
      if (this.pageStatus === '每月損益分析') {
        this.getMonthlyInfo()
      } else if (this.pageStatus === '每年損益分析') {
        this.getAnnualInfo()
      }
    },
    monthlySelectYear () {
      this.getMonthlyInfo()
    },
    monthlySelectMonth () {
      this.getMonthlyInfo()
    },
    annualSelectYear () {
      this.getAnnualInfo()
    }
  },
  computed: {
    sum () {
      return (data, type) => data.reduce((total, item) => {
        if (item.transactionType === type) {
          return total + item.money
        }
        return (total)
      }, 0)
    },
    categoryColor () {
      return category => category === '飲食' ? 'text-food' : category === '日用品' ? 'text-necessities' : category === '住宿' ? 'text-hotel' : category === '交通' ? 'text-transportation' : category === '娛樂' ? 'text-entertainment' : category === '衣飾' ? 'text-clothing' : category === '月薪' ? 'text-salary' : 'text-others'
    }
  }
}
</script>
<template>
  <div data-aos="fade-up" data-aos-duration="1000" class="container py-lg-160 py-100 overflow-x-hidden">
      <h2 class="text-center mb-lg-5 mb-4">記帳</h2>
      <ul class="nav justify-content-evenly mb-lg-5 mb-4">
        <li class="nav-item" v-for="nav in navs" :key="nav">
          <h3 class="fs-lg-4 fs-14">
            <a class="nav-link nav-link-sm" :class="{'active-link-sm': pageStatus === nav}" href="#" @click.prevent="pageStatus = nav">{{ nav }}</a>
          </h3>
        </li>
      </ul>
      <div v-if="pageStatus === '收支紀錄'" class="row gy-3 mb-3 mb-lg-4">
        <div class="col-lg-2">
          <label for="transactionType" class="form-label">交易種類</label>
          <select name="" id="transactionType" class="form-select" v-model="transactionType">
            <option value="支出">支出</option>
            <option value="收入">收入</option>
          </select>
        </div>
        <div class="col-lg-2">
          <label for="category" class="form-label">種類</label>
          <select name="" id="category" class="form-select" v-model="category">
            <option v-for="(item, key) in accountingCategory[transactionType]" :key="key" :value="key">{{ key }}</option>
          </select>
        </div>
        <div class="col-lg-4">
          <label for="title" class="form-label">款項名稱</label>
          <input type="text" id="title" class="form-control" placeholder="款項名稱" v-model="title">
        </div>
        <div class="col-lg-3 col-10">
          <label for="money" class="form-label">金額</label>
          <input type="number" id="money" class="form-control" placeholder="金額" v-model.number="money" @keydown="handleKeyDown($event)" @keyup.enter="addRecord">
        </div>
        <div class="col-lg-1 col-2 d-flex mt-auto  justify-content-end">
          <button @click="addRecord" type="button" class="btn" :class="{'btn-outline-success': transactionType === '收入', 'btn-outline-danger': transactionType === '支出'}"><i class="bi bi-plus-lg"></i></button>
        </div>
      </div>

      <div v-if="pageStatus === '收支紀錄'" class="row g-4">
        <CalendarComponent @data-id="getDateId" @color="getColor" :data="allAccounts" :get-data="getRecord"></CalendarComponent>
        <div class="col">
            <div class="card">
                <div class="card-header fs-lg-4 fs-5 text-center text-white" :class="[`bg-${color}`]">{{ accountId }}</div>
                <div class="card-body pb-0">
                  <table class="table table-hover align-middle fs-14 fs-lg-6">
                    <tbody class="list-unstyled mb-0">
                      <tr v-for="(account, index) in oneDayAccountList" :key="index + 1990">
                        <td :class="{'text-danger': account.transactionType === '支出', 'text-success': account.transactionType === '收入'}">
                          <i class="bi me-2" :class="{'bi-dash-lg': account.transactionType === '支出', 'bi-plus-lg': account.transactionType === '收入'}"></i>
                          <i class="fi me-2" :class="accountingCategory[account.transactionType][account.category].icon"></i>
                          {{ account.title }}
                        </td>
                        <td class="text-end">NT$ {{ numberComma(account.money) }}</td>
                        <td class="text-end">
                          <button type="button" @click="openDeleteModal(this.accountId, index)" class="btn border-0"><i class="bi bi-x-lg"></i></button>
                        </td>
                      </tr>
                      <tr v-if="!oneDayAccountList.length" class="text-center pointer-events-none">
                        <img src="../../assets/images/undraw_Notebook_re_id0r.png" alt="尚無紀錄">
                        <p class="fs-6 fs-lg-4">尚無紀錄</p>
                      </tr>
                    </tbody>
                    <tfoot class="border-0 border-3 border-top" :class="`border-${color}`">
                      <tr v-if="sum(oneDayAccountList, '支出')">
                        <td class="text-danger fw-bold bg-lightRed">總支出</td>
                        <td class="text-danger fw-bold text-end bg-lightRed">- NT${{ numberComma(sum(oneDayAccountList, '支出')) }}</td>
                        <td class="bg-lightRed"></td>
                      </tr>
                      <tr v-if="sum(oneDayAccountList, '收入')">
                        <td class="text-success fw-bold bg-secondary">總收入</td>
                        <td class="text-success fw-bold text-end bg-secondary">NT${{ numberComma(sum(oneDayAccountList, '收入')) }}</td>
                        <td class="bg-secondary"></td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
            </div>
        </div>
      </div>
      <div :class="{'d-none': pageStatus === '收支紀錄' || pageStatus === '每年損益分析'}">
          <div class="d-flex align-items-center justify-content-center mb-5">
              <select name="" id="" class=" form-select fs-lg-3 fs-5 text-center border-0 me-lg-3" style="width: 150px;" v-model="monthlySelectYear">
                <option v-for="(i, index) in 15" :key="i" :value="2023 + index">{{2023 + index}} 年</option>
              </select>
              <select name="" id=""  class="form-select border-0 fs-lg-3 fs-5 select-arrow-none" style="width: 120px" v-model="monthlySelectMonth">
                <option v-for="i in 12" :key="i + 7345" :value="i">{{i}} 月</option>
              </select>
              <div class="d-flex ">
                <button type="button" class="btn border" :disabled="monthlySelectMonth === 1" @click="monthlySelectMonth = monthlySelectMonth - 1"><i class="bi bi-caret-up-fill text-primary"></i></button>
                <button type="button" class="btn border ms-3" :disabled="monthlySelectMonth === 12" @click="monthlySelectMonth = monthlySelectMonth + 1"><i class="bi bi-caret-down-fill text-primary"></i></button>
              </div>
          </div>
          <div class="row row-cols-lg-2 g-5">
              <div class="col d-flex flex-column align-items-center ">
                  <h5 class="text-center fw-bold fs-4">支出</h5>
                  <h5 v-if="!sum(monthlyStatement, '支出')" class="text-center mt-100">無資料</h5>
                  <div id="monthlyExpenseChart"></div>
                  <ul class="list-unstyled w-lg-50 w-100 mt-4 mx-auto">
                    <li class="border-bottom d-flex mb-2 py-2" v-for="(money, category) in monthlyData['支出']" :key="category">
                      <i class="fi me-2" :class="{[accountingCategory['支出'][category].icon]: true, [categoryColor(category)]: true}"></i>
                      <span>{{ category }}</span>
                      <span class="ms-auto">NT$ {{ numberComma(money)}}</span>
                    </li>
                    <li v-if="sum(monthlyStatement, '支出')" class="d-flex fw-bold">
                      <span>總計支出</span>
                      <span class="ms-auto text-danger">NT$ {{ numberComma(sum(monthlyStatement, '支出')) }}</span>
                    </li>
                  </ul>
              </div>
              <div class="col d-flex flex-column align-items-center">
                  <h5 class="text-center fw-bold fs-4">收入</h5>
                  <h5 v-if="!sum(monthlyStatement, '收入')" class="text-center mt-100">無資料</h5>
                  <div id="monthlyRevenueChart"></div>
                  <ul class="list-unstyled w-lg-50 w-100 mt-4 mx-auto">
                    <li class="border-bottom d-flex mb-2 py-2" v-for="(money, category) in monthlyData['收入']" :key="category">
                      <i class="fi me-2" :class="{[accountingCategory['收入'][category].icon]: true, [categoryColor(category)]: true}"></i>
                      <span>{{ category }}</span>
                      <span class="ms-auto">NT$ {{ numberComma(money)}}</span>
                    </li>
                    <li v-if="sum(monthlyStatement, '收入')" class="d-flex fw-bold">
                      <span>總計收入</span>
                      <span class="ms-auto text-success">NT$ {{ numberComma(sum(monthlyStatement, '收入')) }}</span>
                    </li>
                  </ul>
              </div>
          </div>

          <h5 class="text-center fw-bold mt-4 fs-lg-5 fs-6" :class="{'text-danger':  (sum(monthlyStatement, '收入') - sum(monthlyStatement, '支出')) < 0, 'text-success': (sum(monthlyStatement, '收入') - sum(monthlyStatement, '支出')) > 0}">結餘 {{ numberComma(sum(monthlyStatement, '收入') - sum(monthlyStatement, '支出')) }}
          </h5>
      </div>

      <div :class="{'d-none': pageStatus === '收支紀錄' || pageStatus === '每月損益分析'}">
        <div class="d-flex align-items-center justify-content-center mb-5">
          <select name="" class="form-select fs-lg-3 fs-4 text-center border-0 select-arrow-none" v-model="annualSelectYear" style="width: 150px;">
            <option v-for="(i, index) in 15" :key="i" :value="2023 + index">{{2023 + index}} 年</option>
          </select>
          <button type="button" class="btn border" :disabled="annualSelectYear === 2023" @click="annualSelectYear = annualSelectYear - 1"><i class="bi bi-caret-up-fill text-primary"></i></button>
          <button type="button" class="btn border ms-3" :disabled="annualSelectYear === 2036" @click="annualSelectYear = annualSelectYear + 1"><i class="bi bi-caret-down-fill text-primary"></i></button>
        </div>
          <div class="row row-cols-lg-2 g-5">
              <div class="col d-flex flex-column align-items-center ">
                  <h5 class="text-center fw-bold fs-4">支出</h5>
                  <h5 v-if="!sum(annualStatement, '支出')" class="text-center mt-100">無資料</h5>
                  <div id="annualExpenseChart"></div>
                  <ul class="list-unstyled w-lg-50 w-100 mt-4 mx-auto">
                    <li class="border-bottom d-flex mb-2 py-2" v-for="(money, category) in annualData['支出']" :key="category">
                      <i class="fi me-2" :class="{[accountingCategory['支出'][category].icon]: true, [categoryColor(category)]: true}"></i>
                      <span>{{ category }}</span>
                      <span class="ms-auto">NT$ {{ numberComma(money)}}</span>
                    </li>
                    <li v-if="sum(annualStatement, '支出')" class="d-flex fw-bold">
                      <span>總計支出</span>
                      <span class="ms-auto text-danger">NT$ {{ numberComma(sum(annualStatement, '支出')) }}</span>
                    </li>
                  </ul>
              </div>
              <div class="col d-flex flex-column align-items-center">
                  <h5 class="text-center fw-bold fs-4">收入</h5>
                  <h5 v-if="!sum(annualStatement, '收入')" class="text-center mt-100">無資料</h5>
                  <div id="annualRevenueChart"></div>
                  <ul class="list-unstyled w-lg-50 w-100 mt-4 mx-auto">
                    <li class="border-bottom d-flex mb-2 py-2" v-for="(money, category) in annualData['收入']" :key="category">
                      <i class="fi me-2" :class="{[accountingCategory['收入'][category].icon]: true, [categoryColor(category)]: true}"></i>
                      <span>{{ category }}</span>
                      <span class="ms-auto">NT$ {{ numberComma(money)}}</span>
                    </li>
                    <li v-if="sum(annualStatement, '收入')" class="d-flex fw-bold">
                      <span>總計收入</span>
                      <span class="ms-auto text-success">NT$ {{ numberComma(sum(annualStatement, '收入')) }}</span>
                    </li>
                  </ul>
              </div>
          </div>
          <h5 class="text-center fw-bold mt-4 fs-lg-5 fs-6" :class="{'text-danger':  (sum(annualStatement, '收入') - sum(annualStatement, '支出')) < 0, 'text-success': (sum(annualStatement, '收入') - sum(annualStatement, '支出')) > 0}">結餘
            <span v-if="sum(annualStatement, '收入') - sum(annualStatement, '支出') > 0">NT$ {{ numberComma(sum(annualStatement, '收入') - sum(annualStatement, '支出')) }}</span>
            <span v-else-if="sum(annualStatement, '收入') - sum(annualStatement, '支出') < 0"> - NT$ {{ Math.abs(sum(annualStatement, '收入') - sum(annualStatement, '支出')) }}</span>
          </h5>
      </div>
      <DeleteAccountModal :id="accountDeleteId" :uid="uid" :open-delete-modal="openDeleteModal" :index="index" :number-comma="numberComma"></DeleteAccountModal>
  </div>
</template>
<style>
    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
    }
</style>
