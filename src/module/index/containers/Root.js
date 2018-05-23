import React,{Component} from 'react';
import { Router, Route, hashHistory} from 'react-router';

import App from './App';
import Header from '../component/Header/Header';
import Home from '../component/Home/Home';
import About from '../component/About/About';
import Posts from '../component/Posts/Posts';
import Projects from '../component/Projects/Projects';
import Tags from '../component/Tags/Tags';
import Detail from '../component/Detail/Detail';

const routes = {
  path: '/',         // 访问 '/' 路径，component组件 App 就会加载到 document.getElementById('app')
  component: App,
  indexRoute: { component: Home },
  childRoutes: [
    { path: '/Home', component: Home},
    { path: '/About', component: About},
    { path: '/Posts', component: Posts},
    { path: '/Projects', component: Projects},
    { path: '/Tags', component: Tags},
    { path: '/Detail/:id', component: Detail}
  ]
}

export default class Root extends Component {
  render() {
    return <Router history={hashHistory} routes={routes} />
  }
};
