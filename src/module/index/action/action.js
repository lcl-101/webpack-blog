import fetch from 'isomorphic-fetch'
export const RECEIVE_POST = 'RECEIVE_POST'

var url = 'https://api.github.com/repos/';
var owner = 'lcl-101';
var repo = 'webpack-blog'

function receivePostes(reddit,json){
  return {
    type:RECEIVE_POST,
    reddit:reddit,
    posts:json
  }
}

function fetchPosts(subreddit){
  return function(dispatch){
    return fetch(url+owner+'/'+repo+'/'+'issues')
      .then(respones => respones.json())
      .then(json => dispatch(receivePostes(subreddit,json)))
  }
}

function shouldFetchIssues(state) {
  if (state.postsByReddit.frontend.items == '') {
    return true;
  }else {
    return false;
  }
}

export function fetchPostsIfNeeded(subreddit){
  return (dispatch, getState)=> {
    // 当已经有issues的时候，则减少网络请求

    if ( shouldFetchIssues(getState()) ) {
      // 在 thunk 里 dispatch 另一个 thunk！
      return dispatch(fetchPosts(subreddit))
    } else {
      // 告诉调用代码不需要再等待。
      return Promise.resolve();
    }


  }
}
