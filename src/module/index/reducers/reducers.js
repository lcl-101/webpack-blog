import { combineReducers } from 'redux'
import {RECEIVE_POST,FETCH_ISSUES,RECEIVE_COMMENTS} from '../action/action'

var initState = {
  isFetching: false,
  items: []
};

// reducer方法, 传入的参数有两个
// state: 当前的state
// action: 当前触发的行为, {type: 'xx'}
// 返回值: 新的state
function postsByReddit(state={},action){
  switch (action.type){
    case RECEIVE_POST:
      return Object.assign({}, state, {
        items: action.posts, //数据都存在了这里
        isFetching: false,
      })
    case FETCH_ISSUES:
      // 获取issues
      return Object.assign({}, state, {
        isFetching: true,
      })
    default:
      return state
  }
}

var initComments = {
  data:'',
  id:''
}

function commentsId(state={},action){
  switch(action.type){
    case RECEIVE_COMMENTS:
      return Object.assign({}, state, {
        data: action.posts, //数据都存在了这里
        id:action.id
      })
    default:
     return state
  }
}

const todoApp = combineReducers({
  postsByReddit,
  commentsId
});

export default todoApp;
