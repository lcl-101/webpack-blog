import React,{Component} from 'react';
import PropTypes from 'prop-types'
import marked from 'marked';
import style from '../../css/list.less'

class List extends Component{
  filterHTMLTag(msg) {
        var msg = msg.replace(/<\/?[^>]*>/g, ''); //去除HTML Tag
        msg = msg.replace(/[|]*\n/, '') //去除行尾空格
        msg = msg.replace(/&npsp;/ig, ''); //去掉npsp
        return msg;
  }
  render(){
    return(
      <div id={style.list}>
        <ul>
          {
            this.props.posts.map((item, index) => (
              <li key={index}>
                <a href={'#Detail/' + item.id}>
                  <div className={style.title}>
                    {item.title}
                  </div>
                  <div className={style.con}>
                    {this.filterHTMLTag(item.body)}
                  </div>
                  <div className={style.time}>
                    Posted by {item.user.login} {item.created_at}
                  </div>
                </a>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

List.propTypes = {
  posts: PropTypes.array.isRequired
}

export default List
