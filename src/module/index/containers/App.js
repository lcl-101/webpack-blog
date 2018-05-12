import React,{Component} from 'react';
import Header from '../component/Header/Header';

class App extends Component{
  render(){
    return(
      <div>
          <Header />
          <div className='box'>
            {this.props.children}
          </div>
      </div>
    )
  }
}

export default App;
