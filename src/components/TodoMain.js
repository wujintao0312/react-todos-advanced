import React, { Component } from 'react'
// import axios from 'axios'
import classnames from 'classnames'

class TodoMain extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentId: '',
      currentName: ''
    }
  }
  componentDidMount() {
    // 这里发送ajax请求，处理业务逻辑的操作还是在组件中，有了redux-thunk这个中间件后，就可以扩展dispatch的功能了
    // axios.get(`https://www.fastmock.site/mock/70a16f4cca1aeb2afe3d371370e46a95/my_interface/api/getTodosList`).then((res) => {
    //   // console.log(res.data.todos)
    //   // 这里发了请求，获取到的data，作为action的属性，最终存到store中去
    //   this.props.getTodoList(res.data.todos)
    // })
    this.props.getTodoList()
  }
  handleKeyUp(e, id) {
    // console.log(e.keyCode)
    // console.log(id, this.state.currentName)
    if (e.keyCode === 13) {
      // 改掉item.name的值
      this.props.dispatchChangeName(id, this.state.currentName)
      this.setState({
        currentId: '',
      })
    }
  }
  handleBlur(id) {
    this.props.dispatchChangeName(id, this.state.currentName)
    this.setState({
      currentId: '',
    })
  }
  render() {
    // console.log(this.props)
    const { todos } = this.props
    return <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" checked={this.props.toggleStatus} onChange={(e) => this.props.dispatchToggleAll(e.target.checked)}/>
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {
            todos.map((item) => {
              return (
                <li className={classnames({completed: item.done, editing: item.id === this.state.currentId})} key={item.id}>
                  <div className="view">
                    <input className="toggle" type="checkbox" checked={item.done} onChange={() => this.props.dispatchCheck(item.id)}/>
                    <label onDoubleClick={() => this.setState({
                      currentId: item.id,
                      currentName: item.name
                    })}>{item.name}</label>
                    <button className="destroy" onClick={() => this.props.dispatchDel(item.id)}></button>
                  </div>
                  <input className="edit" onKeyUp={(e) => {this.handleKeyUp(e, item.id)}} onBlur={() => {this.handleBlur(item.id)}} value={this.state.currentName} onChange={(e) => this.setState({
                    currentName: e.target.value
                  })} />
                </li>
              )
            })
          }
        </ul>
    </section>
  }
}

export default TodoMain