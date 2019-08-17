import React, { Component } from "react";
import { connect } from 'react-redux';
import upcomingImg from '../img/upcoming.png'
import allImg from '../img/all.png';
import todayImg from '../img/today.svg';
import * as actions from './../actions/index';

class Sort extends Component {

  onClick = (sortBy, sortValue) => {
    this.props.onSort({
      by: sortBy,
      value: sortValue
    });
  };
  render() {
    return (
      <div className="col-md-3 d-flex flex-column p-4">
        <div className="menu-item d-flex align-items-center" onClick={() => this.onClick('date', 0)} >
          <img src={allImg} alt='' width="40px" height="40px"/>
          <h4>All Tasks</h4>
        </div>
        <div className="menu-item d-flex align-items-center" onClick={() => this.onClick('date', 1)}>
          <img src={todayImg} alt='' width="40px" height="40px" />
          <h4>Today</h4>
        </div>
        <div className="menu-item d-flex align-items-center" onClick={() => this.onClick('date', -1)}>
          <img src={upcomingImg} alt='' width="40px" height="40px" />
          <h4>Upcoming</h4>
        </div>
        {/* <div className="dropdown">
          <button className="btn btn-hover dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Sắp xếp
                </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#" onClick={() => this.onClick('name', 1)}>
              Tên A->Z
                    </a>
            <a className="dropdown-item" href="#" onClick={() => this.onClick('name', -1)}>
              Tên Z->A
                    </a>
            <a className="dropdown-item" href="#" onClick={() => this.onClick('status', 1)}>
              Trạng thái Kích hoạt
                    </a>
            <a className="dropdown-item" href="#" onClick={() => this.onClick('status', -1)}>
              Trạng thái Ẩn
                    </a>
            <a className="dropdown-item" href="#" >
              Theo ngày
                    </a>
          </div>
        </div> */}
      </div>
    );


  }
}


const mapStatetoProps = (state) => {
  return {
    sort: state.sortTask
  };
};

const mapDispatchtoProps = (dispatch, props) => {
  return {
    onSort: (sort) => {
      dispatch(actions.sortTask(sort));
    }
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Sort);


