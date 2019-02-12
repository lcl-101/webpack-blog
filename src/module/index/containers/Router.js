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
const Archive = Loadable({
  loader: () => import(/* webpackChunkName: "index/archive" */'../component/Archive/Archive.js'),
  loading: Loading,
});
const Label = Loadable({
  loader: () => import(/* webpackChunkName: "index/label" */'../component/Label/Label.js'),
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
const Detail = Loadable({
  loader: () => import(/* webpackChunkName: "index/detail" */'../component/Detail/Detail'),
  loading: Loading,
});

export default {
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
    { path: '/Archive',component: Archive,
      onEnter: function(nextState, replaceState){
        NProgress.start();
      }
    },
    { path: '/Label',component: Label,
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
    { path: '/:id',component: Detail,
      onEnter: function(nextState, replaceState){
        NProgress.start();
      }
    }
  ]
}
