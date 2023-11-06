<template>
    <div class="modal fade" ref="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen-md-down modal-xl">
            <div class="modal-content">
            <div class="modal-header bg-primary">
                <h5 class="modal-title text-white" id="exampleModalLabel">
                  <span v-if="status === 'new'">新增清單內容</span>
                  <span v-else-if="status === 'edit'">編輯清單內容</span>
                </h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div v-if="tempTodo" class="modal-body">
              <p>建立時間：{{ time(tempTodo.createdTime) }}</p>
              <p >更新時間：{{ time(tempTodo.updateTime) }}</p>

              <div class="pb-5">
                <section class="container">
                  <div class="mb-5">
                    <div v-if="editTitle" class="mb-3 col-6 d-flex mx-auto" >
                      <input @keyup.enter="editTitle = false" type="email" class="form-control" id="todoTitle" v-model="tempTodo.title"><button type="button" @click="editTitle = false" class="btn border-0"><i class="fs-4 bi bi-pencil-square"></i></button>
                    </div>

                    <h3 v-if="!editTitle" class="text-center">{{ tempTodo.title ? tempTodo.title : '清單名稱'}}<button type="button" @click="editTitle = true" class="btn border-0"><i class="fs-4 bi bi-pencil-square"></i></button></h3>
                  </div>

                  <div class="input-group">
                    <input type="text" @keyup.enter="addTempTodo" class="form-control p-3" v-model="message" placeholder="待辦事項">
                    <button type="button" class="btn btn-outline-primary px-3" @click="addTempTodo"><i class="bi bi-plus-lg"></i></button>
                  </div>

                    <div class="mt-4">
                        <div class="card">
                            <ul class="card-header d-flex list-unstyled justify-content-evenly bg-primary">
                                <li @click.prevent="page = '全部'" :class="{'border-bottom':page === '全部', 'border-3': page === '全部'}" ><a href="#" class="btn fs-5 fw-bold text-white border-0" >全部</a></li>
                                <li @click.prevent="page = '待完成'" :class="{'border-bottom':page === '待完成', 'border-3': page === '待完成'}" ><a href="#" class="btn fs-5 fw-bold text-white border-0">待完成</a></li>
                                <li @click.prevent="page = '已完成'" :class="{'border-bottom':page === '已完成', 'border-3': page === '已完成'}" ><a href="#" class="btn fs-5 fw-bold text-white border-0">已完成</a></li>
                            </ul>
                            <div class="card-body">
                                <ul class="list-unstyled">
                                  <template v-for="(todo, index) in tempTodo.list" :key="todo.id">
                                    <li v-if="page === '全部' || (page === '待完成' && todo.checked === false) || (page === '已完成' && todo.checked === true)" class="fs-5 d-flex align-items-center cursor-pointer">
                                      <span v-if="!todo.checked" class="checkbox"></span>
                                      <span v-else-if="todo.checked" class="check"></span>
                                      <p @click="todo.checked = !todo.checked" class="ms-20 mb-0 w-100 py-3 border-bottom word-break-all" :class="{'text-decoration-line-through': todo.checked}">{{todo.message}}</p>
                                      <a href="#" class="btn ms-auto" @click.prevent="tempTodo.list.splice(index, 1)"><i class="bi bi-x-lg"></i></a>
                                    </li>
                                  </template>
                                </ul>
                            </div>
                            <div class="card-footer d-flex justify-content-between align-items-center">
                              <p class="mb-0">{{ undoneNum(tempTodo.list) }} 個待完成項目</p>
                              <button type="button" class="btn border-0" @click="clearAll">清除已完成項目</button>
                            </div>
                        </div>
                    </div>
                </section>
              </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-gray" data-bs-dismiss="modal">關閉</button>
                <button type="button" class="btn btn-primary" @click="updateTodo">
                  <span>確認</span>
                </button>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
import modalMixin from '../mixins/modalMixin'
import { db } from '../firebase/db'
import { ref, push, set, onValue, update } from 'firebase/database'
import utilityStore from '../stores/utilities'
import { mapActions } from 'pinia'

export default {
  data () {
    return {
      tempTodo: {
        createdTime: new Date().getTime(),
        updateTime: new Date().getTime(),
        list: []
      },
      editTitle: false,
      message: '',
      todoId: '',
      status: 'new',
      page: '全部',
      renderTodo: []
    }
  },
  mixins: [modalMixin],
  props: ['uid', 'id', 'openModal'],
  methods: {
    ...mapActions(utilityStore, ['toastMessage']),
    addTempTodo () {
      if (this.message === '') {
        return
      }
      this.tempTodo.list.push({
        id: new Date().getTime(),
        checked: false,
        message: this.message
      })
      this.message = ''
    },
    clearAll () {
      this.tempTodo.list = this.tempTodo.list.filter(item => !item.checked)
    },
    updateTodo () {
      if (this.status === 'new') {
        if (!this.tempTodo.title) {
          this.tempTodo.title = new Date().toLocaleDateString()
        }
        const reference = ref(db, `todoLists/${this.uid}/`)
        const newUserRef = push(reference)
        set(newUserRef, this.tempTodo)
        this.toastMessage('新增清單成功')
        this.hide()
      } else if (this.status === 'edit') {
        update(ref(db), {
          [`todoLists/${this.uid}/${this.todoId}/title/`]: this.tempTodo.title,
          [`todoLists/${this.uid}/${this.todoId}/updateTime/`]: new Date().getTime(),
          [`todoLists/${this.uid}/${this.todoId}/list/`]: this.tempTodo.list
        })
        this.toastMessage('修改清單成功')
        this.hide()
      }
    }
  },
  watch: {
    id () {
      if (!this.id) {
        return
      }
      if (this.id === 'new') {
        this.status = 'new'
        this.tempTodo = {
          createdTime: new Date().getTime(),
          updateTime: new Date().getTime(),
          list: []
        }
        this.show()
        this.openModal('')
      } else if (this.id !== 'new') {
        this.status = 'edit'

        const dataRef = ref(db, `todoLists/${this.uid}/${this.id}`)
        onValue(dataRef, snapshot => {
          this.tempTodo = snapshot.val()
          if (!this.tempTodo.list) {
            this.tempTodo.list = []
          }
          this.show()
          this.todoId = this.id
          this.openModal('') // 使用父元件方法會清除 父元件id 為何這裡要清除? => 確保關閉後如果點同一個id一樣會開啟
        })
      }
    },
    page () {
      if (this.page === '全部') {
        this.renderTodo = this.tempTodo.list
      } else if (this.page === '待完成') {
        this.renderTodo = this.tempTodo.list.filter(item => !item.checked)
      } else if (this.page === '已完成') {
        this.renderTodo = this.tempTodo.list.filter(item => item.checked)
      }
    }
  },
  computed: {
    time () {
      return timeNum => new Date(timeNum).toLocaleDateString() + new Date(timeNum).toLocaleString().split(' ')[1]
    },
    undoneNum () {
      return list => list.filter(item => item.checked === false).length
    }
  }
}
</script>
