import React from 'react'
import ReactDOM from 'react-dom'

import './styles/base.css'
import './styles/index.css'
import App from './App'

import store from './store/index'
import { Provider } from 'react-redux'

ReactDOM.render(<Provider store={store}><App></App></Provider>, document.getElementById('root'))