import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/scss/all.scss'
import 'bootstrap/dist/js/bootstrap.min.js'

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import 'hover.css/css/hover-min.css'
import {
  Form, Field, ErrorMessage, defineRule, configure
} from 'vee-validate'
import AllRules from '@vee-validate/rules'

import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

import App from './App.vue'
import router from './router'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

const app = createApp(App)
Object.keys(AllRules).forEach(rule => {
  defineRule(rule, AllRules[rule])
})
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true // 當輸入任何內容直接進行驗證
})
// 設定預設語系
setLocale('zh_TW')

app.use(createPinia())
app.component('VLoading', Loading)
app.use(router)
app.use(VueSweetalert2)
app.component('VForm', Form)
app.component('VField', Field)
app.component('ErrorMessage', ErrorMessage)

app.mount('#app')
