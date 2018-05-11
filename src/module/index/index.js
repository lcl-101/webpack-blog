import React,{Component} from 'react';
import ReactDom from 'react-dom';
import { Router, Route, hashHistory} from 'react-router';

import StyleLess from './css/index.less'

import Header from './component/Header/Header';

class App extends Component{
  render(){
    return(
      <div>
          <Header />
          {this.props.children}
      </div>
    )
  }
}

const routes = {
  path: '/',         // 访问 '/' 路径，component组件 App 就会加载到 document.getElementById('app')
  component: App,
  childRoutes: [

  ]
}

ReactDom.render(<Router history={hashHistory} routes={routes} />, document.getElementById('app'));
