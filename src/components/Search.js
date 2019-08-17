import React, { Component} from "react";
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class Search extends Component{
  constructor() {
    super();
    this.state = {
      keyword: ''
    };
  }
  onChange = (event) => {
    this.setState({
      keyword : event.target.value
    });
  };
  onSearch = () => {
    this.props.onSearch(this.state.keyword);
  };
  render(){
    const { keyword } = this.state;
    return(
            <div className="col-md-10">
                <div className="input-group">
                
                    <input type="text" className="form-control search-input" name="keyword"
                    value={keyword} onChange={this.onChange} placeholder="Search..."/>
                    <a onClick={this.onSearch} className="search-icon"><i className="fas fa-search"></i></a>
                </div>           
            </div>
            
    );
    
   
  }
}


const mapStatetoProps = (state) => {
  return {
  };
};

const mapDispatchtoProps = (dispatch, props) => {
  return {
    onSearch: (keyword) => {
      dispatch(actions.searchTask(keyword));
    }
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Search);
