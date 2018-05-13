import React,{Component} from 'react';
import { Link,hashHistory} from 'react-router';

import Header from '../Header/Header';
import Posts from '../Posts/Posts';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Tags from '../Tags/Tags';

import style from '../../css/home.less';
import img from '../../../../common/images/favicon.png'

class Home extends Component{
  componentWillMount(){
    console.log('Component WILL MOUNT!')
  }
  handleChange(){
    console.log(this);
    console.log(hashHistory);
    let a = this.props.route.path;
    hashHistory.push('/Posts');
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
              <span className={style.to}  link="/Posts" onClick={this.handleChange.bind(this)}>POSTS <span className={style.link_line}></span></span>
              <Link className={style.to} to="/About">ABOUT <span className={style.link_line}></span></Link>
              <Link className={style.to} to="/Projects">PROJECTS <span className={style.link_line}></span></Link>
              <Link className={style.to} to="/Tags">TAGS <span className={style.link_line}></span></Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Home;
