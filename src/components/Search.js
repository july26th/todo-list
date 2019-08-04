import React, { Component} from "react";

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
            <div className="col-md-6">
                <div className="input-group">
                    <input type="text" className="form-control" name="keyword"
                    value={keyword} onChange={this.onChange} placeholder="Nhập từ khóa..."/>
                    <button onClick={this.onSearch} className="btn btn-primary" type="submit">Tìm</button>
                </div>           
            </div>
            
    );
    
   
  }
}

export default Search;

