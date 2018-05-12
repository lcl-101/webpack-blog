import React,{Component} from 'react';
import { Link} from 'react-router';

import Header from '../Header/Header';
import Posts from '../Posts/Posts';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Tags from '../Tags/Tags';

import style from '../../css/home.less';
import img from '../../../../common/images/favicon.png'

class Home extends Component{
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
              <Link to="/Posts">POSTS <span className={style.link_line}></span></Link>
              <Link to="/About">ABOUT <span className={style.link_line}></span></Link>
              <Link to="/Projects">PROJECTS <span className={style.link_line}></span></Link>
              <Link to="/Tags">TAGS <span className={style.link_line}></span></Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Home;
