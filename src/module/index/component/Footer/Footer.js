import React,{Component} from 'react';
import style from '../../css/footer.less';

class Footer extends Component {
  render(){
    return(
      <div id={style.footer}>
        <div className={style.footer_box}>
          <a target="_blank" href="https://www.zhihu.com/people/li-cheng-long-3-99" className={style.footer_li}>知</a>
          <a target="_blank" href="http://weibo.com/3932790473" className={style.footer_li}><span className="icon iconfont icon-weibo"></span></a>
          <a target="_blank" href="https://www.facebook.com/100009375981606" className={style.footer_li}><span className="icon iconfont icon-facebook"></span></a>
          <a target="_blank" href="https://www.facebook.com/100009375981606" className={style.footer_li}><span className="icon iconfont icon-github"></span></a>
        </div>
        <div className={style.footer_Copy}>Copyright © lichenglong Blog 2018</div>
      </div>
    )
  }
}

export default Footer;
