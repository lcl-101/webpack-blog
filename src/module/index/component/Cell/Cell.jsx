import React,{Component} from 'react';
import { Link} from 'react-router';
import PropTypes from 'prop-types';
import style from '../../css/archive.less';

class Cell extends Component {
  render() {
    return (
      <ul>
        {
          this.props.list.map((item, index) => (
            <Link key={index} to={'/' + item.id}>
              <li className={style.posts_list}>
                <span className={style.f_left}>{item.title}</span>
                <span className={style.f_right}>{item.created_at.substring(0, 10)}</span>
              </li>
            </Link>
          ))
        }
      </ul>
    )
  }
}

Cell.propTypes = {
  list: PropTypes.array.isRequired
}

export default Cell
