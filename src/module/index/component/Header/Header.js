import React,{Component} from 'react';
import { Link} from 'react-router';
import Home from '../Home/Home';
import About from '../About/About';

import '../../css/header.less';

class Header extends Component {
  render(){
    return(
      <div className='header'>
        <ul className='header-ul'>
          <li>
            <Link to="/Home">Home</Link>
            <Link to="/About">About</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Header;
