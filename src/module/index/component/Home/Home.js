import React,{Component} from 'react';
import { Link,hashHistory} from 'react-router';

import Header from '../Header/Header';

import style from '../../css/home.less';
import img from '../../../../common/images/favicon.png'

class Home extends Component{
  componentWillMount(){
    console.log(this.state);
    console.log('Component WILL MOUNT!')
  }
  handleChange(name,e){
    hashHistory.push(name);
  }
  render(){
    return(
      <div id={style.home}>
        <Header/>
        <div className={style.home_box}>
          <div className={style.inner}>
            <div className={style.img_box}>
              <img src={img} alt="" />
            </div>
            <div className={style.link}>
              <Link className={style.to} onTouchStart={this.handleChange.bind(this,'/Posts')} to="/Posts">POSTS <span className={style.link_line}></span></Link>
              <Link className={style.to} onTouchStart={this.handleChange.bind(this,'/About')} to="/About">ABOUT <span className={style.link_line}></span></Link>
              <Link className={style.to} onTouchStart={this.handleChange.bind(this,'/Projects')} to="/Projects">PROJECTS <span className={style.link_line}></span></Link>
              <Link className={style.to} onTouchStart={this.handleChange.bind(this,'/Tags')} to="/Tags">TAGS <span className={style.link_line}></span></Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Home;
