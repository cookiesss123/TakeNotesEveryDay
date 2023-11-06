<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
import loadingStore from './stores/loadingStore'
import { mapState } from 'pinia'
export default {
  mounted () {
    AOS.init()
  },
  computed: {
    ...mapState(loadingStore, ['isLoading'])
  }
}
</script>

<template>
  <VLoading v-model:active="isLoading"
              :lock-scroll="true">
            <div class="d-flex flex-column align-items-center py-100">
            <img src="./assets/images/icon.png" class="loading-logo mb-3" alt="logo" >
            <p class="text-center fw-bold text-primary fs-md-2 fs-5">
                <span class="me-1 animate-text">L</span>
                <span class="mx-1 animate-text">o</span>
                <span class="mx-1 animate-text">a</span>
                <span class="mx-1 animate-text">d</span>
                <span class="mx-1 animate-text">i</span>
                <span class="mx-1 animate-text">n</span>
                <span class="mx-1 animate-text">g</span>
                <span class="mx-2 animate-text">.</span>
                <span class="me-2 animate-text">.</span>
                <span class="animate-text">.</span>
            </p>
            </div>
    </VLoading>
  <router-view />
</template>
