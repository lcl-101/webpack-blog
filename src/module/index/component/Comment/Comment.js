import React,{Component} from 'react';
import { connect } from 'react-redux'
import Gitment from 'gitment';
import {fetchCommentsNeeded} from '../../action/action'

class Comment extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    const { dispatch} = this.props
    dispatch(fetchCommentsNeeded(this.props.cd));
    console.log(this);
    var gitment = new Gitment({
      id:this.props.cd,
      owner: 'lcl-101',
      repo: 'www.lichenglong.pw',
      oauth: {
        client_id: '149613f6b828472ab126',
        client_secret: 'c003cfeeafa97ca0f4c756aab3c2051447ddaab7',
      }
    });
    gitment.render('container');
  }
  render(){
    return(
      <div className="">
        <div id="container" key='1'></div>
      </div>
    )
  }
}

function mapStateToProps (state){
  const { commentsId } = state;
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
  }
  return {
    id,
    data
  }
}

export default connect(
  mapStateToProps
)(Comment)
