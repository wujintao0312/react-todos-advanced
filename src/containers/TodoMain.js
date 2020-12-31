import { connect } from 'react-redux'
import TodoMain from '../components/TodoMain'

import { psrseData, checkStatus, deleteTask, changeName, toggleAll } from '../redux/actionCreator'

const mapStateToProps = (state) => {
  // console.log(state)
  let todoData = []
  if (state.tab === 'Active') {
    todoData = state.todos.filter(item => !item.done)
  } else if (state.tab === 'Completed') {
    todoData = state.todos.filter(item => item.done)
  } else {
    todoData = state.todos
  }
  return {
    todos: todoData,
    toggleStatus: state.todos.every(item => item.done)
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    getTodoList: () => {
      // // 发送ajax请求获取所有的任务数据
      // const res = await axios.get(`https://www.fastmock.site/mock/70a16f4cca1aeb2afe3d371370e46a95/my_interface/api/getTodosList`)
      dispatch(psrseData())
    },
    dispatchCheck: (id) => {
      dispatch(checkStatus(id))
    },
    dispatchDel: (id) => {
      dispatch(deleteTask(id))
    },
    dispatchChangeName(id, name) {
      dispatch(changeName(id, name))
    },
    dispatchToggleAll(value) {
      dispatch(toggleAll(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoMain)