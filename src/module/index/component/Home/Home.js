import React,{Component} from 'react';
import { Link} from 'react-router';
import style from '../../css/home.less';
// import img from '../../../../common/images/favicon.png'

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {isMobile:/Android|webOS|iPhone|iPad|iPod|ucweb|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)};
  }
  componentWillMount(){
    // console.log('Component WILL MOUNT!');
  }
  render(){
    let view = [];
    var isMobile = this.state.isMobile;
    if(isMobile){
      view.push(
        <div key='0' className={style.link}>
          <Link className={style.to} to="/Posts">全部 <span className={style.link_line_to}></span></Link>
          <Link className={style.to} to="/Archive">归档 <span className={style.link_line_to}></span></Link>
          <Link className={style.to} to="/Label">标签 <span className={style.link_line_to}></span></Link>
          <a className={style.to} href="/admin#/" target="_blank">日志<span className={style.link_line_to}></span></a>
        </div>
      )
    }else {
      view.push(
        <div key='1' className={style.link}>
          <Link className={style.to} to="/Posts">全部 <span className={style.link_line}></span></Link>
          <Link className={style.to} to="/Archive">归档 <span className={style.link_line}></span></Link>
          <Link className={style.to} to="/Label">标签 <span className={style.link_line}></span></Link>
          <a className={style.to} href="/admin#/" target="_blank">日志<span className={style.link_line}></span></a>
        </div>
      )
    }
    return(
      <div id={style.home}>
        <div className={style.home_box}>
          <div className={style.inner}>
            <div className={style.img_box}>
              {/* <img src={img} alt="" /> */}
              <img src="/common/images/favicon.png" alt="" />
            </div>
            {view}
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
