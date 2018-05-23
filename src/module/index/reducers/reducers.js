import { combineReducers } from 'redux'
import {RECEIVE_POST,FETCH_ISSUES} from '../action/action'

var frontend = {
  isFetching: false,
  items: []
};

// reducer方法, 传入的参数有两个
// state: 当前的state
// action: 当前触发的行为, {type: 'xx'}
// 返回值: 新的state
function posts(state={},action){
  switch (action.type){
    case RECEIVE_POST:
      return Object.assign({}, state, {
        items: action.posts, //数据都存在了这里
        isFetching: false,
      })
    case FETCH_ISSUES:
      return Object.assign({}, state, {
        items: action.posts, //数据都存在了这里
        isFetching: true,
      })
    default:
      return state
  }
}

function postsByReddit(state = {frontend},action){
  switch (action.type){
    case RECEIVE_POST:
      return Object.assign({}, state, {
        [action.reddit]: posts(state[action.reddit], action)
      })
    default:
      return state
  }
}


const todoApp = combineReducers({
  postsByReddit
});

export default todoApp;
