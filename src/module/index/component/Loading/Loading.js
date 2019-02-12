import React,{Component} from 'react';
import style from '../../css/loading.less';

class Loading extends Component{
  render(){
    return (
      <div className={style.loader_box}>
        <div className={style.loader}></div>
      </div>
    )
  }
}
export default Loading;
