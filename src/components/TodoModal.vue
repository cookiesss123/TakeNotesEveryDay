<template>
    <div class="modal fade" ref="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen-md-down modal-xl">
            <div class="modal-content">
            <div class="modal-header bg-green">
                <h5 class="modal-title text-white" id="exampleModalLabel">
                  <span v-if="status === 'new'">新增清單內容</span>
                  <span v-else-if="status === 'edit'">編輯清單內容</span>
                </h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div v-if="tempTodo" class="modal-body">
              <p>建立時間：{{ new Date(tempTodo.createdTime).toLocaleDateString() }} {{ new Date(tempTodo.createdTime).getHours() }}:{{ new Date(tempTodo.createdTime).getMinutes() }}</p>
              <p >更新時間：{{ new Date(tempTodo.updateTime).toLocaleDateString() }} {{ new Date(tempTodo.updateTime).getHours() }}:{{ new Date(tempTodo.updateTime).getMinutes() }}</p>

              <div class="pb-5">
                <section class="container">
                  <div class="mb-5">
                    <div v-if="editTitle" class="mb-3 col-6 d-flex" style="margin: 0 auto;">
                      <input @keyup.enter="editTitle = false" type="email" class="form-control" id="todoTitle" v-model="tempTodo.title"><button type="button" @click="editTitle = false" class="btn border-0"><i class="fs-4 bi bi-pencil-square"></i></button>
                    </div>

                    <h3 v-if="!editTitle" class="text-center">{{ tempTodo.title ? tempTodo.title : '清單名稱'}}<button type="button" @click="editTitle = true" class="btn border-0"><i class="fs-4 bi bi-pencil-square"></i></button></h3>
                  </div>

                  <div class="input-group">
                    <input type="text" @keyup.enter="addTempTodo" class="form-control p-3" v-model="message" placeholder="待辦事項">
                    <button type="button" class="btn btn-outline-green px-3" @click="addTempTodo"><i class="bi bi-plus-lg"></i></button>
                  </div>

                    <div class="mt-4">
                        <div class="card">
                            <ul class="card-header d-flex list-unstyled justify-content-evenly bg-green">
                                <li @click.prevent="page = '全部'" :class="{'border-bottom':page === '全部', 'border-3': page === '全部'}" style="transition: all .4s ease-out; border-bottom: 3px solid transparent;"><a href="#" class="btn fs-5 fw-bold text-white border-0" >全部</a></li>
                                <li @click.prevent="page = '待完成'" :class="{'border-bottom':page === '待完成', 'border-3': page === '待完成'}" style="transition: all .4s ease-out; border-bottom: 3px solid transparent;"><a href="#" class="btn fs-5 fw-bold text-white border-0">待完成</a></li>
                                <li @click.prevent="page = '已完成'" :class="{'border-bottom':page === '已完成', 'border-3': page === '已完成'}" style="transition: all .4s ease-out; border-bottom: 3px solid transparent;"><a href="#" class="btn fs-5 fw-bold text-white border-0">已完成</a></li>
                            </ul>
                            <div class="card-body">
                                <ul class="list-unstyled todoList">
                                  <template v-for="(todo, index) in tempTodo.list" :key="todo.id">
                                    <li v-if="page === '全部' || (page === '待完成' && todo.checked === false) || (page === '已完成' && todo.checked === true)" class="fs-5 d-flex align-items-center" style="cursor: pointer;">
                                      <span v-if="!todo.checked" class="checkbox "></span>
                                      <span v-else-if="todo.checked" class="check"></span>
                                      <p @click="todo.checked = !todo.checked" class=" mb-0 w-100 py-3 border-bottom" :class="{'text-decoration-line-through': todo.checked}" style="word-break: break-all;">{{todo.message}}</p>
                                      <a href="#" class="btn ms-auto" @click.prevent="tempTodo.list.splice(index, 1)"><i class="bi bi-x-lg"></i></a>
                                    </li>
                                  </template>
                                </ul>
                            </div>
                            <div class="card-footer d-flex justify-content-between align-items-center">
                              <p class="mb-0">{{ tempTodo.list.filter(item => item.checked === false).length }} 個待完成項目</p>
                              <button type="button" class="btn border-0" @click="clearAll">清除已完成項目</button>
                            </div>
                        </div>
                    </div>
                </section>
              </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
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
      todoNum: 0,
      status: 'new',
      page: '全部'
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
      this.tempTodo.list = this.tempTodo.list.filter(item => item.checked === false)
    },
    updateTodo () {
      if (this.status === 'new') {
        if (!this.tempTodo.title) {
          this.tempTodo.title = `清單${new Date().getTime()}`
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
  mounted () {
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
          this.openModal('')

          const unfinished = this.tempTodo.list.filter(item => item.checked === false)
          this.todoNum = unfinished.length
        })
      }
    },
    page () {
      if (this.page === '全部') {
        this.renderTodo = this.tempTodo.list
      } else if (this.page === '待完成') {
        this.renderTodo = this.tempTodo.list.filter(item => item.checked === false)
      } else if (this.page === '已完成') {
        this.renderTodo = this.tempTodo.list.filter(item => item.checked === true)
      }
    }
  }
}
</script>
<style>
.todoList li p {
  margin-left: 20px;
}
.todoList li .checkbox{
  width: 32px;
  height: 30px;
  border-radius: 4px;
  border: 1px solid black;
  background-color: white;
  display: inline-block;
  margin-left: 10px;
}
.todoList li .check{
  width: 15px;
  height: 30px;
  transform: rotate(45deg);
  border-bottom: 3px solid #62776f;
  border-right: 3px solid #62776f;
  background-color: white;
  display: inline-block;
  margin-right: 5px;
  margin-left: 20px;
  margin-bottom: 10px;
}

</style>
