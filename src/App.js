import React, { Component } from 'react'

import TodoHeader from './containers/TodoHeader'
import TodoMain from './containers/TodoMain'
import TodoFooter from './containers/TodoFooter'

class App extends Component {
  render() {
    return <div className="todoapp">
      <TodoHeader></TodoHeader>
      <TodoMain></TodoMain>
      <TodoFooter></TodoFooter>
    </div>
  }
}

export default App