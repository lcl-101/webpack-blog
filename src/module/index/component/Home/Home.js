import React,{Component} from 'react';
import { Link} from 'react-router';

import Header from '../Header/Header';
import Posts from '../Posts/Posts';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Tags from '../Tags/Tags';

import style from '../../css/home.less';

class Home extends Component{
  render(){
    return(
      <div id={style.home}>
        <Header/>
        <div className={style.home_box}>
          <div className={style.inner}>
            <div className={style.img_box}>
              <img src="/common/images/favicon.png" alt="" />
            </div>
            <div className={style.link}>
              <Link to="/Posts">POSTS</Link>
              <Link to="/About">ABOUT</Link>
              <Link to="/Projects">PROJECTS</Link>
              <Link to="/Tags">TAGS</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Home;
