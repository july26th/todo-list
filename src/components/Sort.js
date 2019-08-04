import React, { Component} from "react";

class Sort extends Component{

  onClick= (sortBy, sortValue) => {
    this.props.onSort(sortBy, sortValue);
  };
  render(){
    return(
            <div className="col-md-6">
              <div className="dropdown">
              <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sắp xếp
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#" onClick={ () => this.onClick('name', 1)}>
                  Tên A->Z
                  </a>
                <a className="dropdown-item" href="#" onClick={ () => this.onClick('name', -1)}>
                  Tên Z->A
                  </a>
                <a className="dropdown-item" href="#" onClick={ () => this.onClick('status', 1)}>
                  Trạng thái Kích hoạt
                  </a>
                <a className="dropdown-item" href="#" onClick={ () => this.onClick('status', -1)}>
                  Trạng thái Ẩn
                  </a>
              </div>
            </div>
            </div>
            
    );
    
   
  }
}

export default Sort;

