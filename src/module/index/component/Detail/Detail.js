import React,{Component} from 'react';
import PropTypes from 'prop-types'
import Theader from '../Theader/Theader';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import marked from 'marked';
import {fetchPostsIfNeeded} from '../../action/action'
import style from '../../css/detail.less'

class Detail extends Component{
  constructor(props){
    super(props);
  }
  //初始化渲染后触发
  componentWillMount() {
    const { dispatch} = this.props
    // 这里可以传两个值，一个是 reactjs 一个是 frontend
    dispatch(fetchPostsIfNeeded('frontend'));
  }
  render(){
    let view = [];
    this.props.items.map((item, index) => {
      if(item.id == this.props.params.id){
        view.push(
          <div className={style.box} key={index}>
            <div>{item.title}</div>
            <div className="markdown-body" dangerouslySetInnerHTML = {{__html:marked(item.body)}}></div>
          </div>
        )
      }
    })
    return(
      <div id={style.detail}>
        <Theader/>
        {view}
      </div>
    )
  }
}

function mapStateToProps (state){
  const { postsByReddit } = state;
  var postsState = postsByReddit;
  if(Object.keys(postsByReddit) == ''){
    postsState = false;
  }
  const {
    items,
    isFetching

  } = postsState || {
    items: [],
    isFetching:true
  }
  return {
    items,
    isFetching
  }
}

export default connect(
  mapStateToProps
)(Detail)