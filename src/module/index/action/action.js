// import axios from 'axios';
//
// var url = 'https://api.github.com/repos/';
// var owner = 'lcl-101';
// var repo = 'webpack-blog'
//
// export function fetchIssues() {
//   axios.get(url+owner+'/'+repo+'/'+'issues').then((res)=>{
//       if(res.status){
//         console.log(res.data);
//         return res.data;
//       }
//   }).catch((err)=>{
//       console.log(err.status);
//   })
// }


/*
 * action 类型
 */
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
/*
 * 其它的常量
 */
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
/*
 * action 创建函数
 */
export function addTodo(text){
  return {type:ADD_TODO,text}
}
export function toggleTodo(text){
  return {type:TOGGLE_TODO,text}
}
export function setVisibilityFilter(filter){
  return {type:SET_VISIBILITY_FILTER,filter}
}


export const ADD_NOTE = "ADD_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";

let nextTodoId=0;
export const addNote = (title,text) => ({
    type: ADD_NOTE,
    id: nextTodoId++,
    title:title,
    note: text
});
export const deleteNote = (id) => ({
    type: DELETE_NOTE,
    id: id
});
