<script>
import { onAuthStateChanged } from 'firebase/auth'
import { ref, onValue, set } from 'firebase/database'
import { auth, db } from '../../firebase/db'
import utilityStore from '../../stores/utilities'
import { mapActions } from 'pinia'
import c3 from 'c3'
import DeleteAccountModal from '../../components/DeleteAccountModal.vue'
import CalendarComponent from '../../components/CalendarComponent.vue'
import { expenseCategory, revenueCategory } from '../../utils/publicData'
export default {
  data () {
    return {
      expenseCategory,
      revenueCategory,
      uid: '',
      accountId: '',
      allAccounts: {}, // 個人全部的記帳
      oneDayAccountList: [], // 一天的記帳
      categoryE: '飲食',
      moneyE: '',
      titleE: '',
      categoryR: '月薪',
      moneyR: '',
      titleR: '',

      // revenueOrExpense: '',
      dateArr: [], // 日期的 key值 陣列們
      monthlyExpense: 0,
      annualExpense: 0,
      monthlyRevenue: 0,
      annualRevenue: 0,
      pageStatus: '收支紀錄',
      monthlySelectYear: new Date().getFullYear(),
      monthlySelectMonth: new Date().getMonth() + 1,
      annualSelectYear: new Date().getFullYear(),
      monthlyExpenseData: {},
      monthlyRevenueData: {},
      annualExpenseData: {},
      annualRevenueData: {},
      chart: [],
      revenueChart: [],
      annualExpenseChart: [],
      annualRevenueChart: [],
      accountDeleteId: '',
      index: 0,
      bgImg: ''
    }
  },
  components: {
    DeleteAccountModal,
    CalendarComponent
  },
  methods: {
    ...mapActions(utilityStore, ['toastMessage', 'goToTop']),
    numberComma (num) {
      const comma = /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g
      return num.toString().replace(comma, ',')
    },
    getAllRecord (dataId) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.uid = user.uid
          const dataRef = ref(db, `/accounts/${user.uid}`)
          onValue(dataRef, snapshot => {
            this.allAccounts = snapshot.val()
            this.accountId = dataId
            this.oneDayAccountList = this.allAccounts[dataId]
            if (this.allAccounts) {
              this.dateArr = Object.keys(this.allAccounts)
            }
          })
        } else {
          this.uid = null
          this.$router.push('/loginSignup')
          this.toastMessage('請登入', 'error')
        }
      })
    },
    getRecord () {
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
    getMonthlyInfo () {
      let arr = []
      const arrDate = this.dateArr.filter(item => {
        return item.match(`${this.monthlySelectYear}-${this.monthlySelectMonth}`)
      })
      arrDate.forEach(item => {
        arr.push(this.allAccounts[item])
      })
      arr = arr.flat()
      this.monthlyExpense = 0
      this.monthlyRevenue = 0
      const monthlyExpenseArr = arr.filter(item => item.revenueOrExpense === 'expense')
      this.monthlyExpenseData = {}
      this.monthlyRevenueData = {}

      monthlyExpenseArr.forEach(item => {
        if (!this.monthlyExpenseData[item.categoryE] && item.moneyE) {
          this.monthlyExpenseData[item.categoryE] = item.moneyE
        } else if (this.monthlyExpenseData[item.categoryE]) {
          this.monthlyExpenseData[item.categoryE] += item.moneyE
        }
      })
      this.monthlyExpenseData = Object.entries(this.monthlyExpenseData)

      this.chart = c3.generate({
        bindto: '#chart',
        data: {
          columns: this.monthlyExpenseData,
          type: 'pie',
          colors: {
            飲食: '#fe9738',
            日用品: '#64a5f8',
            住宿: '#e1a901',
            交通: '#f94730',
            娛樂: '#1d8d6a',
            衣飾: '#fe66a0',
            其他: '#212529'
          }
        }
      })
      const monthlyRevenueArr = arr.filter(item => item.revenueOrExpense === 'revenue')
      monthlyRevenueArr.forEach(item => {
        if (!this.monthlyRevenueData[item.categoryR] && item.moneyR) {
          this.monthlyRevenueData[item.categoryR] = item.moneyR
        } else if (this.monthlyRevenueData[item.categoryR]) {
          this.monthlyRevenueData[item.categoryR] += item.moneyR
        }
      })
      this.monthlyRevenueData = Object.entries(this.monthlyRevenueData)

      this.revenueChart = c3.generate({
        bindto: '#revenueChart',
        data: {
          columns: this.monthlyRevenueData,
          type: 'pie',
          colors: {
            月薪: '#5aa622',
            其他: '#212529'
          }
        }
      })

      // 總收益 費用
      arr.forEach(item => {
        if (item.revenueOrExpense === 'expense') {
          this.monthlyExpense += item.moneyE
        } else if (item.revenueOrExpense === 'revenue') {
          this.monthlyRevenue += item.moneyR
        }
      })
    },
    getAnnualInfo () {
      let arr = []
      const arrDate = this.dateArr.filter(item => {
        return item.match(`${this.annualSelectYear}`)
      })
      arrDate.forEach(item => {
        arr.push(this.allAccounts[item])
      })

      arr = arr.flat()
      this.annualExpense = 0
      this.annualRevenue = 0
      const annualExpenseArr = arr.filter(item => item.revenueOrExpense === 'expense')
      this.annualExpenseData = {}
      this.annualRevenueData = {}

      annualExpenseArr.forEach(item => {
        if (!this.annualExpenseData[item.categoryE] && item.moneyE) {
          this.annualExpenseData[item.categoryE] = item.moneyE
        } else if (this.annualExpenseData[item.categoryE]) {
          this.annualExpenseData[item.categoryE] += item.moneyE
        }
      })
      this.annualExpenseData = Object.entries(this.annualExpenseData)

      this.annualExpenseChart = c3.generate({
        bindto: '#annualExpenseChart',
        data: {
          columns: this.annualExpenseData,
          type: 'pie',
          colors: {
            飲食: '#fe9738',
            日用品: '#64a5f8',
            住宿: '#e1a901',
            交通: '#f94730',
            娛樂: '#1d8d6a',
            衣飾: '#fe66a0',
            其他: '#212529'
          }
        }
      })

      const annualRevenueArr = arr.filter(item => item.revenueOrExpense === 'revenue')
      annualRevenueArr.forEach(item => {
        if (!this.annualRevenueData[item.categoryR] && item.moneyR) {
          this.annualRevenueData[item.categoryR] = item.moneyR
        } else if (this.annualRevenueData[item.categoryR]) {
          this.annualRevenueData[item.categoryR] += item.moneyR
        }
      })
      this.annualRevenueData = Object.entries(this.annualRevenueData)

      this.annualRevenueChart = c3.generate({
        bindto: '#annualRevenueChart',
        data: {
          columns: this.annualRevenueData,
          type: 'pie',
          colors: {
            月薪: '#5aa622',
            其他: '#212529'
          }
        }
      })

      // 總收益 費用
      arr.forEach(item => {
        if (item.revenueOrExpense === 'expense') {
          this.annualExpense += item.moneyE
        } else if (item.revenueOrExpense === 'revenue') {
          this.annualRevenue += item.moneyR
        }
      })
    },
    // 禁止輸入數字以外的值
    handleKeyDown (event) {
      if (event.key === 'e' || event.key === '-') {
        event.preventDefault()
      }
    },
    addRecord (revenueOrExpense) {
      if ((!this.titleE || !this.moneyE) && revenueOrExpense === 'expense') {
        return
      } else if ((!this.titleR || !this.moneyR) && revenueOrExpense === 'revenue') {
        return
      }
      if (revenueOrExpense === 'expense') {
        this.oneDayAccountList.push({
          revenueOrExpense,
          categoryE: this.categoryE,
          moneyE: Number(this.moneyE),
          titleE: this.titleE
        })
      } else if (revenueOrExpense === 'revenue') {
        this.oneDayAccountList.push({
          revenueOrExpense,
          categoryR: this.categoryR,
          moneyR: Number(this.moneyR),
          titleR: this.titleR
        })
      }

      const reference = ref(db, `accounts/${this.uid}/${this.accountId}`)
      set(reference, this.oneDayAccountList)
      this.toastMessage('紀錄成功')
      this.moneyE = ''
      this.titleE = ''
      this.moneyR = ''
      this.titleR = ''
    },
    // 確定要刪除記帳嗎
    openDeleteModal (id, index) {
      this.accountDeleteId = id
      this.index = index
    }
  },
  mounted () {
    this.goToTop()
  },
  watch: {
    monthlySelectYear () {
      this.getMonthlyInfo()
    },
    monthlySelectMonth () {
      this.getMonthlyInfo()
    },
    pageStatus () {
      if (this.pageStatus === '每月費用、收益總計') {
        this.getMonthlyInfo()
      } else if (this.pageStatus === '每年費用、收益總計') {
        this.getAnnualInfo()
      }
    },
    annualSelectYear () {
      this.getAnnualInfo()
    }
  },
  computed: {
    totalExpense () {
      return this.oneDayAccountList.reduce((total, item) => {
        if (item.revenueOrExpense === 'expense') {
          return total + item.moneyE
        }
        return total
      }, 0)
    },
    totalRevenue () {
      return this.oneDayAccountList.reduce((total, item) => {
        if (item.revenueOrExpense === 'revenue') {
          return total + item.moneyR
        }
        return total
      }, 0)
    }
  }
}
</script>
<template>
    <div data-aos="fade-up" data-aos-duration="1000" class="container py-lg-160 py-100 overflow-x-hidden">
        <h2 class="text-center mb-3">記帳</h2>
        <ul class="list-unstyled mb-5 fs-5 d-lg-flex justify-content-center">
            <li class="me-5 mb-3">
                <a href="#" class="text-decoration-none link-primary" @click.prevent="pageStatus = '收支紀錄'">
                    <i class="bi bi-caret-right-fill"></i>
                    <span>收支紀錄</span>
                </a>
            </li>
            <li class="me-5 mb-3">
                <a href="#" class="text-decoration-none link-primary" @click.prevent="pageStatus = '每月費用、收益總計'">
                    <i class="bi bi-caret-right-fill"></i>
                    <span>每月費用、收益總計</span>
                </a>
            </li>
            <li>
                <a href="#" class="text-decoration-none link-primary" @click.prevent="pageStatus = '每年費用、收益總計'">
                    <i class="bi bi-caret-right-fill"></i>
                    <span>每年費用、收益總計</span>
                </a>
            </li>
        </ul>
        <!-- row-cols-lg-2  -->
        <div v-if="pageStatus === '收支紀錄'" class="row gx-5">
          <CalendarComponent @data-id="getAllRecord" :data="allAccounts" :get-data="getRecord" :get-all-data="getAllRecord"></CalendarComponent>
          <div class="col mt-lg-3">
              <h4 class="mb-4 mt-lg-0 mt-4">開始紀錄收支吧！</h4>
              <label for="expense" class="form-label">支出</label>
              <div class="input-group mb-3">
                  <select name="" id="" class="form-select" v-model="categoryE">
                      <option v-for="(item, key) in expenseCategory" :key="key" :value="key">{{ key }}</option>
                  </select>
                  <input type="text" class="form-control" placeholder="支出名稱" v-model="titleE">

                  <input type="number" class="form-control" placeholder="金額" v-model.number="moneyE" @keydown="handleKeyDown($event)"  @keyup.enter="addRecord('expense')">

                  <button @click="addRecord('expense')" type="button" class="btn btn-outline-danger  "><i class="bi bi-plus-lg"></i></button>
              </div>
              <label for="income" class="form-label">收入</label>
              <div class="input-group mb-4">
                  <select name="" id="" class="form-select" v-model="categoryR">
                    <option v-for="(item, key) in revenueCategory" :key="key" :value="key">{{ key }}</option>
                  </select>
                  <input type="text" class="form-control" placeholder="收入名稱" v-model="titleR">
                  <input type="number" class="form-control" placeholder="金額" @keydown="handleKeyDown($event)" @keyup.enter="addRecord('revenue')" v-model.number="moneyR">
                  <button type="button" class="btn btn-outline-primary" @click="addRecord('revenue')"><i class="bi bi-plus-lg"></i></button>
              </div>
              <div class="card">
                  <div class="card-header">
                      <h4>{{ accountId }}</h4>
                  </div>
                  <div class="card-body">
                      <ul v-if="oneDayAccountList.length" class="list-unstyled mb-0">
                          <li v-for="(account, index) in oneDayAccountList" :key="index + 1990" class="d-flex align-items-center mb-2" :class="{'text-success': account.revenueOrExpense === 'revenue'}">
                              <template v-if="account.revenueOrExpense === 'expense'">
                                <span class="me-2">-</span>
                                <i class="fi text-danger me-2" :class="expenseCategory[account.categoryE].icon"></i>
                                {{ account.categoryE }} - {{ account.titleE }}
                                <span class="ms-2">NT$ {{ numberComma(account.moneyE) }}</span>
                              </template>
                              <template v-else-if="account.revenueOrExpense === 'revenue'">
                                <span class="me-2">+</span>
                                <i class="fi text-success me-2" :class="revenueCategory[account.categoryR].icon"></i>
                                {{ account.categoryR }} - {{ account.titleR }}
                                <span class="ms-2">NT$ {{ numberComma(account.moneyR) }}</span>
                              </template>
                              <button type="button" @click="openDeleteModal(this.accountId, index)" class="ms-auto btn border-0"><i class="bi bi-x-lg"></i></button>
                          </li>
                      </ul>
                      <p v-else-if="!oneDayAccountList.length" class="mb-0">無紀錄</p>
                  </div>
                  <div v-if="totalRevenue || totalExpense" class="card-footer">
                      <p v-if="totalRevenue" class="mb-0 text-end text-success fw-bold">總收入 NT${{ numberComma(totalRevenue) }}</p>
                      <p v-if="totalExpense" class="mb-0 text-end text-danger fw-bold">總支出 - NT${{ numberComma(totalExpense) }}</p>
                  </div>
              </div>
          </div>
        </div>

        <div :class="{'d-none': pageStatus === '收支紀錄' || pageStatus === '每年費用、收益總計'}">
            <div class="d-flex align-items-center justify-content-center mb-5">
                <select name="" id="" class=" form-select fs-3 text-center border-0 me-lg-3" style="width: 150px;" v-model="monthlySelectYear">
                    <option v-for="(i, index) in 15" :key="i" :value="2023 + index">{{2023 + index}} 年</option>
                </select>
                <select name="" id=""  class=" form-select border-0 fs-3" style="width: 120px" v-model="monthlySelectMonth">
                    <option v-for="i in 12" :key="i + 7345" :value="i">{{i}} 月</option>
                </select>
                <div class="d-flex">
                  <button type="button" class="btn border" :disabled="monthlySelectMonth === 1" @click="monthlySelectMonth = monthlySelectMonth - 1"><i class="bi bi-caret-up-fill text-primary"></i></button>
                  <button type="button" class="btn border ms-3" :disabled="monthlySelectMonth === 12" @click="monthlySelectMonth = monthlySelectMonth + 1"><i class="bi bi-caret-down-fill text-primary"></i></button>
                </div>
            </div>

            <div class="row row-cols-lg-2 gy-5">
                <div class="col d-flex flex-column align-items-center">
                    <h5 class="text-center">費用</h5>
                    <h5 v-if="!monthlyExpense" class="text-center mt-7">無資料</h5>

                    <div id="chart"></div>
                    <ul class="list-unstyled col-6 mt-4" style="margin: 0 auto;">
                      <li class="border-bottom d-flex mb-2 py-2" v-for="(expense, index) in monthlyExpenseData" :key="index">
                        <img v-if="expense[0] === '飲食'" src="../../assets/images/hamburger.png" width="25" height="25" alt="" class="me-2">
                        <img v-if="expense[0] === '日用品'" src="../../assets/images/shampoo.png" width="25" height="25" alt="" class="me-2">
                        <img v-if="expense[0] === '住宿'" src="../../assets/images/house.png" width="25" height="25" alt="" class="me-2">
                        <img v-if="expense[0] === '交通'" src="../../assets/images/motorcycle.png" width="25" height="25" alt="" class="me-2">
                        <img v-if="expense[0] === '娛樂'" src="../../assets/images/game-controller.png" width="25" height="25" alt="" class="me-2">
                        <img v-if="expense[0] === '衣飾'" src="../../assets/images/dress.png" width="25" height="25" alt="" class="me-2">
                        <i v-if="expense[0] === '其他'" class="bi bi-three-dots me-2 fs-5"></i>
                        <span>{{ expense[0] }}</span>
                        <span class="ms-auto">NT$ {{ numberComma(expense[1] )}}</span>
                      </li>
                      <li v-if="monthlyExpense" class="d-flex fw-bold">
                        <span>總計支出</span>
                        <span class="ms-auto text-danger">NT$ {{ numberComma(monthlyExpense) }}</span>
                      </li>
                    </ul>
                </div>

                <div class="col  d-flex flex-column align-items-center" >
                    <h5 class="text-center">收益</h5>
                    <h5 v-if="!monthlyRevenue" class="text-center mt-7">無資料</h5>

                    <div id="revenueChart"></div>
                    <ul class="list-unstyled col-6 mt-4" style="margin: 0 auto;">
                      <li class="border-bottom d-flex mb-2 py-2" v-for="(revenue, index) in monthlyRevenueData" :key="index">
                        <img v-if="revenue[0] === '月薪'" src="../../assets/images/salary.png" width="25" height="25" alt="" class="me-2">
                        <i v-if="revenue[0] === '其他'" class="bi bi-three-dots me-2 fs-5"></i>
                        <span>{{ revenue[0] }}</span>
                        <span class="ms-auto">NT$ {{ numberComma(revenue[1] )}}</span>
                      </li>
                      <li v-if="monthlyRevenue" class="d-flex fw-bold">
                        <span>總計收益</span>
                        <span class="ms-auto text-danger">NT$ {{ numberComma(monthlyRevenue) }}</span>
                      </li>
                    </ul>
                </div>
            </div>
            <h5 class="text-center fw-bold mt-3 " :class="{'text-danger':  (monthlyRevenue - monthlyExpense) < 0, 'text-success': (monthlyRevenue - monthlyExpense) > 0}">所剩金額 {{ numberComma(monthlyRevenue - monthlyExpense) }}
            </h5>
        </div>

        <div :class="{'d-none': pageStatus === '收支紀錄' || pageStatus === '每月費用、收益總計'}">
          <div class="d-flex align-items-center justify-content-center mb-5">
            <select name="" class="form-select fs-3 text-center border-0" v-model="annualSelectYear" style="width: 150px;">
              <option v-for="(i, index) in 15" :key="i" :value="2023 + index">{{2023 + index}} 年</option>
            </select>
            <button type="button" class="btn border" :disabled="annualSelectYear === 2023" @click="annualSelectYear = annualSelectYear - 1"><i class="bi bi-caret-up-fill text-primary"></i></button>
            <button type="button" class="btn border ms-3" :disabled="annualSelectYear === 2036" @click="annualSelectYear = annualSelectYear + 1"><i class="bi bi-caret-down-fill text-primary"></i></button>
          </div>

            <div class="row row-cols-lg-2 gy-5">
                <div class="col d-flex flex-column align-items-center" >
                    <h5 class="text-center">費用</h5>
                    <h5 v-if="!annualExpense" class="text-center mt-7">無資料</h5>

                    <div id="annualExpenseChart"></div>
                    <ul class="list-unstyled col-6 mt-4" style="margin: 0 auto;">
                      <li class="border-bottom d-flex mb-2 py-2" v-for="(expense, index) in annualExpenseData" :key="index">
                        <img v-if="expense[0] === '飲食'" src="../../assets/images/hamburger.png" width="25" height="25" alt="" class="me-2">
                        <img v-if="expense[0] === '日用品'" src="../../assets/images/shampoo.png" width="25" height="25" alt="" class="me-2">
                        <img v-if="expense[0] === '住宿'" src="../../assets/images/house.png" width="25" height="25" alt="" class="me-2">
                        <img v-if="expense[0] === '交通'" src="../../assets/images/motorcycle.png" width="25" height="25" alt="" class="me-2">
                        <img v-if="expense[0] === '娛樂'" src="../../assets/images/game-controller.png" width="25" height="25" alt="" class="me-2">
                        <img v-if="expense[0] === '衣飾'" src="../../assets/images/dress.png" width="25" height="25" alt="" class="me-2">
                        <i v-if="expense[0] === '其他'" class="bi bi-three-dots me-2 fs-5"></i>
                        <span>{{ expense[0] }}</span>
                        <span class="ms-auto">NT$ {{ numberComma(expense[1] )}}</span>
                      </li>
                      <li v-if="annualExpense" class="d-flex fw-bold">
                        <span>總計支出</span>
                        <span class="ms-auto text-danger">NT$ {{ numberComma(annualExpense) }}</span>
                      </li>
                    </ul>
                </div>
                <div class="col d-flex flex-column align-items-center" >
                    <h5 class="text-center">收益</h5>
                    <h5 v-if="!annualRevenue" class="text-center mt-7">無資料</h5>

                    <div id="annualRevenueChart"></div>
                    <ul class="list-unstyled col-6 mt-4" style="margin: 0 auto;">
                      <li class="border-bottom d-flex mb-2 py-2" v-for="(revenue, index) in annualRevenueData" :key="index">
                        <img v-if="revenue[0] === '月薪'" src="../../assets/images/salary.png" width="25" height="25" alt="" class="me-2">
                        <i v-if="revenue[0] === '其他'" class="bi bi-three-dots me-2 fs-5"></i>
                        <span>{{ revenue[0] }}</span>
                        <span class="ms-auto">NT$ {{ numberComma(revenue[1] )}}</span>
                      </li>
                      <li v-if="annualRevenue" class="d-flex fw-bold">
                        <span>總計收益</span>
                        <span class="ms-auto text-danger">NT$ {{ numberComma(annualRevenue) }}</span>
                      </li>
                    </ul>
                </div>
            </div>
            <h5 class="text-center fw-bold mt-3" :class="{'text-danger':  (annualRevenue - annualExpense) < 0, 'text-success': (annualRevenue - annualExpense) > 0}">所剩金額
              <span v-if="annualRevenue - annualExpense > 0">NT$ {{ numberComma(annualRevenue - annualExpense) }}</span>
              <span v-else-if="annualRevenue - annualExpense < 0"> - NT$ {{ Math.abs(annualRevenue - annualExpense) }}</span>
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
