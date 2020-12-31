import React, { Component } from 'react'
import classnames from 'classnames'

class TodoFooter extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    console.log(this.props)
    return <footer className="footer">
      <span className="todo-count">
          <strong>{this.props.leftCount}</strong> item left
        </span>
        <ul className="filters">
          <li>
            <a className={classnames({selected: this.props.status === 'all'})} href="#/" onClick={() => this.props.dispatchChangeTad('all')}>
              All
            </a>
          </li>
          <li>
            <a href="#/active" className={classnames({selected: this.props.status === 'Active'})} onClick={() => this.props.dispatchChangeTad('Active')}>Active</a>
          </li>
          <li>
            <a href="#/completed"  className={classnames({selected: this.props.status === 'Completed'})} onClick={() => this.props.dispatchChangeTad('Completed')}>Completed</a>
          </li>
        </ul>
        <button className="clear-completed" onClick={() => this.props.dispatchClear()}>Clear completed</button>
    </footer>
  }
}

export default TodoFooter