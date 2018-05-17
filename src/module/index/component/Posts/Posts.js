import React,{Component} from 'react';
import Theader from '../Theader/Theader';

class Posts extends Component {
  constructor(props){
    console.log(props);
    super(props);
  }
  componentDidMount(){

  }
  render(){
    return(
      <div>
        <Theader/>
        Posts开发中....
      </div>
    )
  }
}

export default Posts;
