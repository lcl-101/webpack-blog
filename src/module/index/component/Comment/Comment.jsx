import React,{Component} from 'react';
import { connect } from 'react-redux';
// import Gitalk from 'gitalk'
import Gitment from 'gitment';
import {fetchCommentsNeeded,fetchLoginNeeded} from '../../action/action';
import style from '../../css/detail.less';

class Comment extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    // const { dispatch} = this.props
    // dispatch(fetchCommentsNeeded(this.props.cd));
    // var code = this.localQuery(window.location.href,'code');

    var gitment = new Gitment({
      id: 'i'+this.props.ids,
      owner: 'lcl-101',
      repo: 'lcl-101.github.io',
      oauth: {
        client_id: '149613f6b828472ab126',
        client_secret: 'c003cfeeafa97ca0f4c756aab3c2051447ddaab7',
      }
    });
    gitment.render('container');

    // var gitalk = new Gitalk({
    //   // gitalk的主要参数
    //   clientID: `149613f6b828472ab126`,
    //   clientSecret: `c003cfeeafa97ca0f4c756aab3c2051447ddaab7`,
    //   repo: `lcl-101.github.io`,
    //   owner: 'lcl-101',
    //   admin: ['lcl-101'],
    //   id: location.href.split("?")[0],
    //   distractionFreeMode: true
    // });
    // gitalk.render('gitalk-container');
  }
  getQueryString(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = window.location.search.substr(1).match(reg);
    if (r !== null){
      return unescape(r[2]);
    }
    return null;
  }
  localQuery(_that, name) {
    let value = '';
    if (!this.isEmpty(_that) &&
        !this.isEmpty(_that.props) &&
        !this.isEmpty(_that.props.location) &&
        !this.isEmpty(_that.props.location.query)) {
        value = _that.props.location.query[name];
    }
    if (this.isEmpty(value)) {
        value = this.getQueryString(name);
    }
    return value;
  }
  isNull(obj){
    return obj === null || typeof obj === 'undefined' || obj === undefined;
  }
  isEmpty(obj) {
    return this.isNull(obj) || obj === '';
  }
  loginTo(){
    var url = 'https://github.com/login/oauth/authorize';
    var client_id = '149613f6b828472ab126';
    var client_secret = 'c003cfeeafa97ca0f4c756aab3c2051447ddaab7';
    var scope = 'public_repo';
    var redirect_url = escape(window.location.href);
    window.location.href = url+'?scope='+scope+'&redirect_uri='+redirect_url+'&client_id='+client_id+'&client_secret='+client_secret;
  }
  render(){
    return(
      /* jshint ignore:start */
      <div className={style.container}>
        {/* <div className="" onClick={this.loginTo}>登录测试s</div> */}
        <div id="container" key='1'></div>
      </div>
      /* jshint ignore:end */
    );
  }
}

function mapStateToProps (state){
  const { commentsId,loginGet } = state;
  var postsState = commentsId;
  if(Object.keys(commentsId) == ''){
    postsState = false;
  }
  const {
    id,
    data
  } = commentsId || {
    id: '',
    data: []
  };

  const {
    login
  } = loginGet || {
    login:''
  };

  return {
    id,
    data,
    login
  };
}

export default connect(

)(Comment);
