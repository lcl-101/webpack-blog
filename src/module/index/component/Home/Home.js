import React,{Component} from 'react';
import { Link} from 'react-router';
import Header from '../Header/Header';
import style from '../../css/home.less';
import img from '../../../../common/images/favicon.png'

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {isMobile:/Android|webOS|iPhone|iPad|iPod|ucweb|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)};
  }
  componentWillMount(){
    console.log('Component WILL MOUNT!');
  }
  render(){
    let view = [];
    var isMobile = this.state.isMobile;
    if(isMobile){
      view.push(
        <div key='0' className={style.link}>
          <Link className={style.to} to="/Posts">POSTS <span className={style.link_line_to}></span></Link>
          <Link className={style.to} to="/About">ABOUT <span className={style.link_line_to}></span></Link>
          <Link className={style.to} to="/Projects">PROJECTS <span className={style.link_line_to}></span></Link>
          <Link className={style.to} to="/Tags">TAGS <span className={style.link_line_to}></span></Link>
        </div>
      )
    }else {
      view.push(
        <div key='1' className={style.link}>
          <Link className={style.to} to="/Posts">POSTS <span className={style.link_line}></span></Link>
          <Link className={style.to} to="/About">ABOUT <span className={style.link_line}></span></Link>
          <Link className={style.to} to="/Projects">PROJECTS <span className={style.link_line}></span></Link>
          <Link className={style.to} to="/Tags">TAGS <span className={style.link_line}></span></Link>
        </div>
      )
    }
    console.log(this);
    return(
      <div id={style.home}>
        <Header/>
        <div className={style.home_box}>
          <div className={style.inner}>
            <div className={style.img_box}>
              <img src={img} alt="" />
            </div>
            {view}
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
