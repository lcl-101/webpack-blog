import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPostsIfNeeded } from '../../action/action';
import Cell from '../Cell/Cell';
import style from '../../css/archive.less';

class Archive extends Component{
  constructor(props) {
    super(props);
  }
  //初始化渲染后触发
  componentDidMount() {
    const { dispatch} = this.props;
    dispatch(fetchPostsIfNeeded());
  }
  render(){
    let view = '';
    let list = this.props.items;
    const { isFetching } = this.props;

    let lableData = [];
    for(var i=0;i<list.length;i++){
      lableData.push(list[i].created_at.substring(0, 4));
    }
    lableData = Array.from(new Set(lableData));

    let data = [];
    for(var j=0;j<lableData.length;j++){
      data[j]  = [];
      for(var k=0;k<list.length;k++){
        if(lableData[j] == list[k].created_at.substring(0, 4)){
          data[j].push(list[k]);
        }
      }
    }

    if (!isFetching) {
      /* jshint ignore:start */
      view = data.map((item, index) =>
        <div key={index}>
          <div className={style.posts_category}>{item[0].created_at.substring(0, 4)}</div>
          <Cell list={item}/>
        </div>
      )
      /* jshint ignore:end */
    }

    return(
      /* jshint ignore:start */
      <div>
        <div className={style.posts_box}>
          {view}
        </div>
      </div>
      /* jshint ignore:end */
    );
  }
}

function mapStateToProps (state){
  const { postsByReddit } = state;
  let postsState = postsByReddit;
  if(Object.keys(postsByReddit) == ''){
    postsState = false;
  }
  const {
    items,
    isFetching

  } = postsState || {
    items: [],
    isFetching:true
  };
  return {
    items,
    isFetching
  };
}

export default connect(
  mapStateToProps
)(Archive);
