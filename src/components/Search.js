import React, { Component} from "react";

class Search extends Component{
  constructor() {
    super();

  }
  
  
  render(){
    return(
            <div className="col-md-6">
                <div className="input-group">
                    <input type="text" className="form-control" name="keyword"
                    placeholder="Nhập từ khóa..."/>
                    <button className="btn btn-primary" type="submit">Tìm</button>
                </div>           
            </div>
            
    );
    
   
  }
}

export default Search;

