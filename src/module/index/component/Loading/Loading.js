import React,{Component} from 'react';
import style from '../../css/loading.less';

class Loading extends Component{
  render(){
    return (
      <div id={style.loading}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    )
  }
}
export default Loading;
