import React,{Component} from 'react';
import { Router, Route, browserHistory} from 'react-router';
import routes from './Router';

export default class Root extends Component {
  render() {
    return <Router history={browserHistory} routes={routes} />
  }
};
