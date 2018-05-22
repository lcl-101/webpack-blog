import { combineReducers } from 'redux'
import {ADD_TODO,TOGGLE_TODO,SET_VISIBILITY_FILTER,VisibilityFilters} from '../action/action'
const {SHOW_ALL} = VisibilityFilters;



// reducer方法, 传入的参数有两个
// state: 当前的state
// action: 当前触发的行为, {type: 'xx'}
// 返回值: 新的state
function VisibilityFilter(state = [],action){
  switch(action.type){
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}
function todos(state = [],action){
  switch (action.type){
    case ADD_TODO:
     return [
       ...state,
       {
         text:action.text,
         completed: false
       }
     ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}




const todoApp = combineReducers({
  VisibilityFilter,
  todos
})
export default todoApp
