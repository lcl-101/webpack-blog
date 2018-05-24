import React,{Component} from 'react';
import PropTypes from 'prop-types'
import Theader from '../Theader/Theader';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {fetchPostsIfNeeded} from '../../action/action'

class Detail extends Component{
  constructor(props){
    super(props);
  }
  //初始化渲染后触发
  componentWillMount() {
    const { dispatch} = this.props
    // 这里可以传两个值，一个是 reactjs 一个是 frontend
    dispatch(fetchPostsIfNeeded('frontend'))
  }
  render(){
    console.log(this.props)
    let view = [];
    this.props.items.map((item, index) => {
      if(item.id == this.props.params.id){
        view.push(
          <div key={index}>{item.title}</div>
        )
      }
    })
    return(
      <div className="">
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
