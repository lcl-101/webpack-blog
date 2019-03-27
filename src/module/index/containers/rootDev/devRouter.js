import NProgress from 'nprogress';
import Loadable from 'react-loadable';
import App from '../App';
import Loading from '../../component/Loading/Loading'

import Home from '../../component/Home/Home.jsx';
import About from '../../component/About/About.jsx';
import Posts from '../../component/Posts/Posts.jsx';
import Archive from '../../component/Archive/Archive.jsx';
import Label from '../../component/Label/Label.jsx';
import Projects from '../../component/Projects/Projects.jsx';
import Tags from '../../component/Tags/Tags.jsx';
import Detail from '../../component/Detail/Detail.jsx';

export default {
  path: '/',         // 访问 '/' 路径，component组件 App 就会加载到 document.getElementById('app')
  component: App,
  indexRoute: {component: Home},
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
