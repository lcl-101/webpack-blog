import React,{Component} from 'react';
import { Router, Route, hashHistory} from 'react-router';
import routes from './devRouter';

module.exports = class Root extends Component {
  render() {
    return <Router history={hashHistory} routes={routes} />
  }
};
