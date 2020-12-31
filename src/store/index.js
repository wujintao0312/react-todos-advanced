import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import { todoReducer, tabReducer } from '../redux/reducers'
const rootReducer = combineReducers({
  todos: todoReducer,
  tab: tabReducer
})

// 没有使用中间件的情况
// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__())

// 使用增强函数，在不影响开启redux-dev-tools功能的前提下，使用thunk这个中间件
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
    
const enhancer = composeEnhancers(applyMiddleware(thunk))

const store = createStore(rootReducer, enhancer)

export default store