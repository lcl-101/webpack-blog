import React,{Component} from 'react';
import { Link} from 'react-router';

import Header from '../Header/Header';

import '../../css/home.less';

class Home extends Component{
  render(){
    return(
      <div id='home'>
        <Header/>
        <div className="home_box">
          <div className="inner">
            <div className="img_box">
              <img src="/common/images/favicon.png" alt="" />
            </div>
            <div className="link">
              <a href="#">POSTS</a>
              <a href="#">ABOUT</a>
              <a href="#">PROJECTS</a>
              <a href="#">TAGS</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Home;
