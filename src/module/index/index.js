import React,{Component} from 'react';
import ReactDom from 'react-dom';
import { Router, Route, hashHistory} from 'react-router';

import Base from '../../common/css/base.less';
import StyleLess from './css/index.less';

import Header from './component/Header/Header';
import Home from './component/Home/Home';
import About from './component/About/About';

class App extends Component{
  render(){
    return(
      <div>
          <Header />
          <div className='box'>
            {this.props.children}
          </div>
      </div>
    )
  }
}

const routes = {
  path: '/',         // 访问 '/' 路径，component组件 App 就会加载到 document.getElementById('app')
  component: App,
  indexRoute: { component: Home },
  childRoutes: [
    { path: '/Home', component: Home},
    { path: '/About', component: About}
  ]
}

ReactDom.render(<Router history={hashHistory} routes={routes} />, document.getElementById('app'));
