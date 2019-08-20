import React, { Component } from "react";
import Search from "./Search";
import todoImg from '../../img/todo.png';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
class TodoHeader extends Component {

  componentWillMount() {
    if (localStorage && localStorage.getItem('tasks')) {
      let items = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks: items
      })
    } else {
      this.setState({
        tasks: ""
      })
    }
  }

  onOpenForm = () => {
    this.props.onOpenForm();
    this.props.onClearTask({
      id: '',
      name: '',
      status: false
    }
    );
  }

  render() {
    var { display } = this.props;
    const $ = window.$;
    if (display) {
      $("#myModal").modal('show');
    }
    else {
      $("#myModal").modal('hide');
    }
    return (
      <div className="row header">
        <div className="col-md-3">
          <div className="page-title d-flex align-items-center ">
            <img src={todoImg} alt='' width="90px" height="90px" />
            <h2>Todo List</h2>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <Search />
        </div>
        <div className="col-md-3 d-flex justify-content-center align-items-center">
       <button type="button" className="ml-4 btn btn-hover" data-toggle="modal"
            data-backdrop="static" data-keyboard="false"
            onClick={this.onOpenForm} data-target="#myModal">New Task</button>
        </div>
      </div>

    );


  }
}

const mapStatetoProps = (state) => {
  return {
    display: state.display
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    onOpenForm: () => {
      dispatch(actions.openForm());
    },
    onClearTask: (task) => {
      dispatch(actions.editTask(task));
    }
  };
};
export default connect(mapStatetoProps, mapDispatchtoProps)(TodoHeader);

