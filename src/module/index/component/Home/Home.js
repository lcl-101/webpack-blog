import React,{Component} from 'react';
import { Link} from 'react-router';

import Header from '../Header/Header';
import Posts from '../Posts/Posts';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Tags from '../Tags/Tags';

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
