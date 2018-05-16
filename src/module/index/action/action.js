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

//action
export const increaseActiom = {type:'increase'};

// Reducer
export function counter(state = {count:0},action){
  const count = state.count;
  switch(action){
    case 'increase':
     return { count: count + 1 }
    default:
     return state
  }
}
