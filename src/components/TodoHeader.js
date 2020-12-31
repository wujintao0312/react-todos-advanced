import React, { Component } from 'react'

class TodoHeader extends Component {
  state = {
    taskName: ''
  }
  handleAdd(e) {
    if (e.keyCode === 13) {
      // 添加任务
      this.props.dispatchAdd(this.state.taskName)
      // 清空输入框中的值
      this.setState({
        taskName: ''
      })
    }
  }
  render() {
    return <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={this.state.taskName}
        onChange={(e) => this.setState({taskName: e.target.value})}
        onKeyUp={(e) => this.handleAdd(e)}
      />
    </header>
  }
}

export default TodoHeader