import { connect } from 'react-redux'
import TodoHeader from '../components/TodoHeader'

import { addTask } from '../redux/actionCreator'

const mapStateToProps = (state) => {
  // console.log(state)
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchAdd(name) {
      dispatch(addTask(name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoHeader)