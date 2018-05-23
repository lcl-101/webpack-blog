import React,{Component} from 'react';
import { connect } from 'react-redux';
import NProgress from 'nprogress';
import Footer from '../component/Footer/Footer';

import base from '../../../common/css/base.less';
import style from '../css/index.less';

class App extends Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.isFetching) {
      NProgress.done();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.isFetching) {
      NProgress.done();
    }
  }


  render(){
    return(
      <div id={style.app_box}>
        <div className={style.app_inner}>
          {this.props.children}
        </div>
        <Footer/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { postsByReddit } = state
  const {
    items:posts,
    isFetching

  } = postsByReddit['frontend'].items || {
    items: [],
    isFetching:true
  }
  return {
    posts,
    isFetching
  }
}

export default connect(mapStateToProps)(App);
