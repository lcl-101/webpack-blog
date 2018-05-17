import React,{Component} from 'react';
import Footer from '../component/Footer/Footer';

import base from '../../../common/css/base.less';
import style from '../css/index.less';

class App extends Component{
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

export default App;
