import React, { Component} from "react";

class Sort extends Component{
  constructor() {
    super();

  }
  
  
  render(){
    return(
            <div className="col-md-6">
              <div className="dropdown">
              <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sắp xếp
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Tên A->Z</a>
                <a className="dropdown-item" href="#">Tên Z->A</a>
                <a className="dropdown-item" href="#">Trạng thái Kích hoạt</a>
                <a className="dropdown-item" href="#">Trạng thái Ẩn</a>
              </div>
            </div>
            </div>
            
    );
    
   
  }
}

export default Sort;

