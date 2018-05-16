import React,{Component} from 'react';
import Theader from '../Theader/Theader';
import PropTypes from 'prop-types'
import { Provider, connect } from 'react-redux'
import {state,increaseAction} from '../../action/action';

class Posts extends Component {
  constructor(props){
    console.log(props);
    super(props);
  }
  componentDidMount(){

  }
  render(){
    console.log(this)
    const { value, onIncreaseClick } = this.props;
    return(
      <div>
        <Theader/>
        Posts开发中....
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
      </div>
    )
  }
}

Posts.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired
}

// Map Redux state to component props
function mapStateToProps(state){
  return {
    value: state.count
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch){
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
