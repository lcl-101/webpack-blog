import 'babel-polyfill';
import React,{Component} from 'react';
import ReactDom from 'react-dom';
import Root from './containers/Root'

ReactDom.render(<Root />, document.getElementById('app'));
