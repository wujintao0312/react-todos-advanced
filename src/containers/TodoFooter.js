import { connect } from 'react-redux'
import TodoFooter from '../components/TodoFooter'

import { clearCompleted, changeTab } from '../redux/actionCreator'

const mapStateToProps = (state) => {
  console.log(state)
  return {
    leftCount: state.todos.filter(item => !item.done).length,
    status: state.tab
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchClear() {
      dispatch(clearCompleted())
    },
    dispatchChangeTad(value) {
      dispatch(changeTab(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoFooter)
