import React,{Component} from 'react';
import { Router, Route, hashHistory} from 'react-router';

import Base from '../../../common/css/base.less';
import StyleLess from '../css/index.less';

import App from './App';
import Header from '../component/Header/Header';
import Home from '../component/Home/Home';
import About from '../component/About/About';

const routes = {
  path: '/',         // 访问 '/' 路径，component组件 App 就会加载到 document.getElementById('app')
  component: App,
  indexRoute: { component: Home },
  childRoutes: [
    { path: '/Home', component: Home},
    { path: '/About', component: About}
  ]
}

export default class Root extends Component {
  render() {
    return <Router history={hashHistory} routes={routes} />
  }
};
