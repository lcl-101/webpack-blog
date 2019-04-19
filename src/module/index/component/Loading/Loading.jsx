import React,{Component} from 'react';
import style from '../../css/loading.less';

class Loading extends Component{
  render(){
    return (
      /* jshint ignore:start */
      <div className={style.loader_box}>
        <div className={style.loader}></div>
      </div>
      /* jshint ignore:end */
    );
  }
}
export default Loading;
