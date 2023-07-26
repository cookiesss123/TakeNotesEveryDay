<script>
import { db, auth } from '../../firebase/db'
import { ref, onValue } from 'firebase/database'
import { onAuthStateChanged } from 'firebase/auth'
import todoStore from '../../stores/todo'
import { mapActions } from 'pinia'
import TodoModal from '../../components/TodoModal.vue'
import DeleteTodoModal from '../../components/DeleteTodoModal.vue'
import { RouterLink } from 'vue-router'
export default {
  data () {
    return {
      uid: '',
      user: {},
      todoLists: [],
      todoId: '',
      todoDeleteId: ''
    }
  },
  components: {
    TodoModal,
    DeleteTodoModal,
    RouterLink
  },
  methods: {
    ...mapActions(todoStore, ['toastMessage']),

    checkLogin () {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.uid = user.uid
          const dataRef = ref(db, 'users/' + user.uid)
          onValue(dataRef, snapshot => {
            this.user = snapshot.val()
          })
        } else {
          this.uid = null
          this.user = {}
        }
      })
    },
    openModal (id) {
      this.todoId = id
    },
    // 確定要刪除清單嗎
    openDeleteModal (id) {
      this.todoDeleteId = id
    },

    getTodoLists () {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.uid = user.uid
          const dataRef = ref(db, 'users/' + user.uid)
          onValue(dataRef, snapshot => {
            this.user = snapshot.val()

            const dataRef = ref(db, `todoLists/${this.uid}`)
            onValue(dataRef, snapshot => {
              this.todoLists = snapshot.val()
            })
          })
        } else {
          this.uid = null
          this.user = {}
        }
      })
    }
  },
  mounted () {
    this.checkLogin()
    this.getTodoLists()
  }
}
</script>
<template>
  <div data-aos="fade-up"  data-aos-duration="1000">
    <div class="my-7">
      <section class="container mb-5">
        <h2 class="mb-5 d-flex align-items-center justify-content-center">
          <img src="../../assets/images/leaf.png" class="me-2" style="width: 30px !important; transform: rotate(45deg);">
          選單
          <img src="../../assets/images/leaf.png" class="ms-2" style="width: 30px !important;">
        </h2>
        <div class="menu row row-cols-lg-3 row-cols-1 gy-4">
          <div class="col">
            <div class="card bg-dark text-white border-0 h-100 bg-white">
              <img src="https://images.unsplash.com/photo-1586282023617-b844c180eb51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" class="h-100 card-img" alt="..." style="object-fit: cover;">
              <RouterLink to="/todolist" class="card-img-overlay d-flex text-decoration-none">
                <h3 class="card-title my-auto ms-auto text-green d-flex align-items-center"><span class="fw-bold">新增清單</span><a href="#" class="stretched-link btn btn-outline-green ms-3 fw-bold"><span class="fs-5">+</span></a></h3>
                <p class="card-text mt-auto bg-green text-white">簡短的清單或待辦事項</p>
              </RouterLink>
            </div>
          </div>
          <div class="col">
            <div class="card  bg-dark border-0 text-white h-100  bg-white">
              <img src="https://images.unsplash.com/photo-1640116565729-b5f5befc7260?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" class="card-img h-100" alt="..." style="object-fit: cover;">
              <RouterLink to="/calendar" class="card-img-overlay d-flex text-decoration-none">
                <h3 class="card-title my-auto ms-auto text-green d-flex align-items-center"><span class="fw-bold">新增行事曆</span><a href="#" class="stretched-link btn btn-outline-green ms-3 fw-bold"><span class="fs-5">+</span></a></h3>
                <p class="card-text mt-auto bg-green text-white">紀錄一天的詳細行程</p>
              </RouterLink>
            </div>
          </div>
          <div class="col">
            <div class="card bg-dark text-white h-100 border-0 h-100 bg-white">
              <img src="https://images.unsplash.com/photo-1511871893393-82e9c16b81e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" class="h-100 card-img" alt="..." style="object-fit: cover;">
              <RouterLink to="/accounting" class="card-img-overlay d-flex text-decoration-none">
                <h3 class="card-title my-auto ms-auto text-green d-flex align-items-center"><span class="fw-bold">新增收支紀錄</span><a href="#" class="stretched-link btn btn-outline-green ms-3 fw-bold"><span class="fs-5">+</span></a></h3>
                <p class="card-text mt-auto bg-green text-white">紀錄每日收支</p>
              </RouterLink>
            </div>
          </div>
        </div>
      </section>

    </div>
    <TodoModal ref="todoModal" :uid="uid" :id="todoId"  :open-modal="openModal"></TodoModal>
    <DeleteTodoModal :uid="uid" :id="todoDeleteId" :open-delete-modal="openDeleteModal"></DeleteTodoModal>
  </div>
</template>
<style>
  .list-group li:hover{
    background-color: rgb(234, 250, 247);
  }
</style>
