import React,{Component} from 'react';
import Theader from '../Theader/Theader';
import { connect } from 'react-redux'
import hljs from '../../../../common/js/highlight';
import marked from 'marked';
import {fetchPostsIfNeeded} from '../../action/action'
import style from '../../css/detail.less'

class Detail extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    const { dispatch} = this.props
    // 这里可以传两个值，一个是 reactjs 一个是 frontend
    dispatch(fetchPostsIfNeeded('frontend'));
  }
  //初始化渲染后触发
  componentWillMount() {
    window.scrollTo(0, 0);
    // 代码高亮
    marked.setOptions({
      highlight: code => {
        return hljs.highlightAuto(code).value;
      }
    });
    this.commentClick = this.commentClick.bind(this);
  }
  commentClick(){
    console.log(this.props);
    for(var i=0;i<this.props.items.length;i++){
      if(this.props.params.id == this.props.items[i].id){
        var index = this.props.items.length - i;
        let url = 'https://github.com/lcl-101/webpack-blog/issues/'+index;
        window.location.href = url;
      }
    }
  }
  render(){
    let view = [];
    this.props.items.map((item, index) => {
      if(item.id == this.props.params.id){
        view.push(
          <div className={style.box} key={index}>
            <div className={style.dTitle}>{item.title}</div>
            <div className={style.created_at}>{item.created_at.substr(0, 10)}</div>
            <div className="markdown-body" dangerouslySetInnerHTML = {{__html:marked(item.body)}}></div>
            <div className={style.comment} onClick={this.commentClick}>点击评论</div>
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
