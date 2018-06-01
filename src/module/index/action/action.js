import fetch from 'isomorphic-fetch'
export const RECEIVE_POST = 'RECEIVE_POST'
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'

var url = 'https://api.github.com/repos/';
var owner = 'lcl-101';
var repo = 'webpack-blog'

//获取issuesw文章列表
function receivePostes(json){
  return {
    type:RECEIVE_POST,
    posts:json
  }
}
function fetchPosts(){
  return function(dispatch){
    return fetch(url+owner+'/'+repo+'/'+'issues')
      .then(respones => respones.json())
      .then(json => dispatch(receivePostes(json)))
  }
}
function shouldFetchIssues(state) {
  if (Object.keys(state.postsByReddit) == '') {
    return true;
  }else {
    return false;
  }
}
export function fetchPostsIfNeeded(){
  return (dispatch, getState)=> {
    // 当已经有issues的时候，则减少网络请求

    if ( shouldFetchIssues(getState()) ) {
      // 在 thunk 里 dispatch 另一个 thunk！
      return dispatch(fetchPosts())
    } else {
      // 告诉调用代码不需要再等待。
      return Promise.resolve();
    }


  }
}

//获取issues文章的评论列表
function receiveComments(id,json){
  return {
    type:RECEIVE_COMMENTS,
    id:id,
    posts:json
  }
}
function fetchComments(id){
  return function(dispatch){
    return fetch(url+owner+'/'+repo+'/'+'issues/'+id+'/comments')
      .then(respones => respones.json())
      .then(json => dispatch(receiveComments(id,json)))
  }
}
function shouldFetchComments(state){
  if (Object.keys(state.commentsId) == '') {
    return true;
  }else {
    return false;
  }
}
export function fetchCommentsNeeded(id){
  return (dispatch, getState)=> {
    return dispatch(fetchComments(id))
  }
}


function fetchLogin(){
  return function(){

  }
}
