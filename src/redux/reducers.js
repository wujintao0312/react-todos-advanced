import { GETTODOLIST, CHECKSTATUS, DELETETASK, CHANGENAME, ADDNAME, CLEARCOMPLETED, CHANGETAB, TOGGLEALL } from '../redux/actionType'
// let todos = [
//   {
//     id: 1,
//     name: '吃晚饭',
//     done: true
//   },
//   {
//     id: 2,
//     name: '学习redux',
//     done: true
//   },
//   {
//     id: 3,
//     name: '下班',
//     done: false
//   }
// ]
let todos = []
function todoReducer(state = todos, action) {
  switch(action.type) {
    case GETTODOLIST:
      // const newState = JSON.parse(JSON.stringify(state))
      // newState = action.data
      return action.data
    case CHECKSTATUS:
      return state.map(item => {
        if (item.id === action.id) {
          return {
            ...item,
            done: !item.done
          }
        } else {
          return item
        }
      })
    case DELETETASK:
      return state.filter(item => item.id !== action.id)
    case CHANGENAME:
      return state.map(item => {
        if (item.id === action.id) {
          return {
            ...item,
            name: action.name
          }
        } else {
          return item
        }
      })
    case ADDNAME:
      let newArr = state.concat()
      newArr.push({
        id: Date.now(),
        name: action.name,
        done: false
      })
      return newArr
    case CLEARCOMPLETED:
      return state.filter(item => !item.done)
    case TOGGLEALL:
      return state.map(item => {
        return {
          ...item,
          done: item.done === action.value ? item.done : action.value
        }
      })
    default:
      return state
  }
}

function tabReducer(state = 'all', action) {
  switch(action.type) {
    case CHANGETAB:
      return action.value
    default:
      return state
  }
}

export { todoReducer, tabReducer }