import 'babel-polyfill';
import React,{Component} from 'react';
import ReactDom from 'react-dom';
import Root from './containers/Root'
import { Provider } from 'react-redux'
import { createStore,applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import todoApp from './reducers/reducers'

const middlewares = [];
if (process.env.NODE_ENV === `development`) {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  ...middlewares
)(createStore)

// 创建store, 传入两个参数
// 参数1: reducer 用来修改state
// 参数2(可选): [], 默认的state值,如果不传, 则为undefined
// let store = configureStore()
const store = createStoreWithMiddleware(todoApp)
// 每次 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
// const unsubscribe = store.subscribe(() => {
//
// })

ReactDom.render(
  <Provider store={store}>
  <Root />
  </Provider>,
  document.getElementById('app')
);
