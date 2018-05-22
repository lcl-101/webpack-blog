import React,{Component} from 'react';
import Theader from '../Theader/Theader';
import { VisibilityFilters } from '../../action/action';
import FilterLink from '../FilterLink/FilterLink';

class Posts extends Component {
  constructor(props){
    super(props);
    console.log(props);
  }
  componentDidMount(){

  }
  render(){
    return(
      <div>
        <Theader/>
        Posts开发中....
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>
          All
        </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
          Active
        </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
          Completed
        </FilterLink>
      </div>
    )
  }
}

export default Posts;
