<script>
import { RouterLink } from 'vue-router'
import { homeList } from '../../utils/publicData'
export default {
  data () {
    return {
      homeList
    }
  },
  components: {
    RouterLink
  }
}
</script>
<template>
  <div>
    <section class="container mb-5 py-160" data-aos="fade-up"  data-aos-duration="1000">
      <h2 class="mb-5 d-flex align-items-center justify-content-center">選單</h2>
      <div class="menu row row-cols-lg-3 row-cols-1 gy-4">
        <div class="col" v-for="item in homeList" :key="item.img">
          <div class="card bg-dark text-white border-0 h-100 bg-white">
            <img :src="item.img" class="h-100 card-img object-fit-cover" :alt="item.title">
            <RouterLink :to="`/${item.link}`" class="card-img-overlay d-flex text-decoration-none">
              <h3 class="card-title my-auto ms-auto text-primary d-flex align-items-center"><span class="fw-bold">{{ item.title }}</span><a href="#" class="stretched-link btn btn-outline-primary ms-3 fw-bold"><span class="fs-5">+</span></a></h3>
              <p class="card-text mt-auto bg-primary text-white">{{ item.subTitle }}</p>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
