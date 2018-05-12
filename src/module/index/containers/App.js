import React,{Component} from 'react';
import Footer from '../component/Footer/Footer';

class App extends Component{
  render(){
    return(
      <div id='app_box'>
        <div className="app_inner">
          {this.props.children}
        </div>
          <Footer/>
      </div>
    )
  }
}

export default App;
