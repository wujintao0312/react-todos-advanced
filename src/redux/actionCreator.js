import { GETTODOLIST, CHECKSTATUS, DELETETASK, CHANGENAME, ADDNAME, CLEARCOMPLETED, CHANGETAB, TOGGLEALL } from './actionType'
import axios from 'axios'

// 在一个action的函数中处理,发送ajax请求获取任务列表的业务逻辑
function psrseData() {
  return async (dispatch) => {
    const res = await axios.get(`https://www.fastmock.site/mock/70a16f4cca1aeb2afe3d371370e46a95/my_interface/api/getTodosList`)
    // console.log(res.data.todos)
    dispatch(getTodoData(res.data.todos))
  }
}

function getTodoData(data) {
  // Uncaught (in promise) Error: Actions must be plain objects. Use custom middleware for async actions.
  // const res = await axios.get(`https://www.fastmock.site/mock/70a16f4cca1aeb2afe3d371370e46a95/my_interface/api/getTodosList`)
  return {
    type: GETTODOLIST,
    data
  }
}

function checkStatus(id) {
  return {
    type: CHECKSTATUS,
    id
  }
}

function deleteTask(id) {
  return {
    type: DELETETASK,
    id
  }
}

function changeName(id, name) {
  return {
    type: CHANGENAME,
    id,
    name
  }
}

function addTask(name) {
  return {
    type: ADDNAME,
    name
  }
}

function clearCompleted() {
  return {
    type: CLEARCOMPLETED
  }
}

function changeTab(value) {
  return {
    type: CHANGETAB,
    value
  }
}

function toggleAll(value) {
  return {
    type: 'TOGGLEALL',
    value
  }
}

export { checkStatus, deleteTask, psrseData, changeName, addTask, clearCompleted, changeTab, toggleAll }