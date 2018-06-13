import React,{Component} from 'react';
import { Router, Route, browserHistory} from 'react-router';
import NProgress from 'nprogress';
import Loadable from 'react-loadable';
import App from './App';
import Loading from '../component/Loading/Loading'

const Home = Loadable({
  loader: () => import(/* webpackChunkName: "index/home" */'../component/Home/Home.js'),
  loading: Loading,
});
const About = Loadable({
  loader: () => import(/* webpackChunkName: "index/about" */'../component/About/About.js'),
  loading: Loading,
});
const Posts = Loadable({
  loader: () => import(/* webpackChunkName: "index/posts" */'../component/Posts/Posts.js'),
  loading: Loading,
});
const Projects = Loadable({
  loader: () => import(/* webpackChunkName: "index/projects" */'../component/Projects/Projects'),
  loading: Loading,
});
const Tags = Loadable({
  loader: () => import(/* webpackChunkName: "index/tags" */'../component/Tags/Tags'),
  loading: Loading,
});
// const Detail = Loadable({
//   loader: () => import(/* webpackChunkName: "index/detail" */'../component/Detail/Detail'),
//   loading: Loading,
// });

const routes = {
  path: '/',         // 访问 '/' 路径，component组件 App 就会加载到 document.getElementById('app')
  component: App,
  indexRoute: {component:Home},
  childRoutes: [
    { path: '/Home', component: Home,
      onEnter: function(nextState, replaceState){
        NProgress.done();
      }
    },
    { path: '/About',component: About,
      onEnter: function(nextState, replaceState){
        NProgress.done();
      }
    },
    { path: '/Posts',component: Posts,
      onEnter: function(nextState, replaceState){
        NProgress.start();
      }
    },
    { path: '/Projects',component: Projects,
      onEnter: function(nextState, replaceState){
        NProgress.done();
      }
    },
    { path: '/Tags',component: Tags,
      onEnter: function(nextState, replaceState){
        NProgress.done();
      }
    },
    { path: '/:id(?*)',
      getComponent(nextState,callback){
        if(nextState.location.key){
          require.ensure([],require=>{
            callback(null,require('../component/Detail/Detail').default);
          },'index/detail');
        }else {
          document.write('<h1>Not Found</h1><p>The requested URL '+nextState.location.pathname+' was not found on this server.</p>');
          NProgress.done();
        }
      },
      onEnter: function(nextState, replaceState){
        NProgress.start();
      }
    }
  ]
}

export default class Root extends Component {
  render() {
    return <Router history={browserHistory} routes={routes} />
  }
};
