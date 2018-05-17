import 'babel-polyfill';
import React,{Component} from 'react';
import ReactDom from 'react-dom';
import Root from './containers/Root'

import { createStore } from 'redux'
import todoApp from './reducers/reducers'
let store = createStore(todoApp)

import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from './action/action'

// 打印初始状态
console.log(store.getState())

// 每次 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))


ReactDom.render(
  <Root />,
  document.getElementById('app')
);
