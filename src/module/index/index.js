import 'babel-polyfill';
import React,{Component} from 'react';
import ReactDom from 'react-dom';
import Root from './containers/Root'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

import {counter} from './action/action';

// Store
const store = createStore(counter);

ReactDom.render(
    <Provider store={store}>
      <Root />
    </Provider>,
  document.getElementById('app')
);
