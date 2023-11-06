import { defineStore } from 'pinia'
const loadingStore = defineStore('loadingStore', {
  state: () => ({
    isLoading: false
  }),
  actions: {
    startLoading () {
      this.isLoading = true
    },
    endLoading () {
      this.isLoading = false
    }
  }
})
export default loadingStore
