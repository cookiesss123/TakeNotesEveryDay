<script>
import { db, auth } from '../../firebase/db'
import { ref, onValue } from 'firebase/database'
import { onAuthStateChanged } from 'firebase/auth'
import utilityStore from '../../stores/utilities'
import { mapActions } from 'pinia'
import TodoModal from '../../components/TodoModal.vue'
import DeleteTodoModal from '../../components/DeleteTodoModal.vue'
export default {
  data () {
    return {
      uid: '',
      todoLists: [],
      todoId: '',
      todoDeleteId: '',
      searchTitle: '',
      filterLists: []
    }
  },
  components: {
    TodoModal,
    DeleteTodoModal
  },
  methods: {
    ...mapActions(utilityStore, ['toastMessage']),
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
          const dataRef = ref(db, `todoLists/${this.uid}`)
          onValue(dataRef, snapshot => {
            const todoLists = snapshot.val()
            if (todoLists) {
              this.todoLists = Object.keys(todoLists).map(key => {
                todoLists[key].id = key
                return todoLists[key]
              })
            }
          })
        } else {
          this.$router.push('/loginSignup')
          this.toastMessage('請登入', 'error')
        }
      })
    }
  },
  mounted () {
    this.getTodoLists()
  },
  computed: {
    searchLists () {
      return this.todoLists.filter(list => {
        return list.title.match(this.searchTitle)
      })
    }
  }
}
</script>
<template>
  <div data-aos="fade-up" data-aos-duration="1000">
    <div class="py-lg-160 py-100">
      <section class="container mb-5">
        <h2 class="mb-5 d-flex align-items-center justify-content-center">
          清單
        </h2>
        <div class="row row-cols-lg-2 row-cols-1 gy-4">
          <div class="col card-hover">
            <div class="card bg-white text-white border-0 h-100">
              <img src="https://images.unsplash.com/photo-1586282023617-b844c180eb51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" class="h-100 card-img object-fit-cover" alt="清單示意圖">
              <div class="card-img-overlay d-flex">
                <h3 class="card-title my-auto ms-auto text-primary d-flex align-items-center"><span class="fw-bold">新增清單</span><a href="#" @click.prevent="openModal('new')" class="stretched-link btn btn-outline-primary ms-3 fw-bold"><span class="fs-5">+</span></a></h3>
                <p class="card-text mt-auto bg-primary">簡短的清單或待辦事項</p>
              </div>
            </div>
          </div>
          <div class="col">
            <input type="text" class="form-control mb-3" v-model="searchTitle" placeholder="搜尋清單">
            <div class="card">
              <div class="card-header">
                清單列表
              </div>
              <ul class="list-group list-group-flush">
                <template v-if="todoLists">
                  <li v-for="todo in searchLists" :key="todo.id" class="list-group-item d-flex align-items-center cursor-pointer">
                    <span @click.prevent="openModal(todo.id)" class="w-100">{{ todo.title }}</span>
                    <a href="#" class="btn ms-auto" @click.prevent="openDeleteModal(todo.id)"><i class="bi bi-x-lg"></i></a>
                  </li>
                </template>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
    <TodoModal ref="todoModal" :uid="uid" :id="todoId" :open-modal="openModal"></TodoModal>
    <DeleteTodoModal :uid="uid" :id="todoDeleteId" :open-delete-modal="openDeleteModal"></DeleteTodoModal>
  </div>
</template>
