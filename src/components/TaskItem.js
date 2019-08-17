import React, { Component } from "react";
import classNames from 'classnames';
import { connect } from 'react-redux';
import * as actions from './../actions/index'
class TaskItem extends Component {
  constructor() {
    super();
    this.state = {
      active: "",
    };
  }

  onUpdateStatus = () => {
    return this.props.onUpdateStatus(this.props.task.id);
  }
  onDelete = () => {
    return this.props.onDeleteTask(this.props.id); //dispatch action
  }
  onEdit = () => {
    this.props.onOpenForm();
    this.props.onEditTask(this.props.task);
  }
  onDisplay = (id) => {
    this.setState({
      active: id
    });
  }
  render() {
    const { task, id } = this.props;
    const { active } = this.state;
    console.log(active);
    return (
      <tr>
        {/* <td>{id}</td> */}
        <td>{task.taskName}</td>
        <td>
          <span onClick={this.onUpdateStatus}
            className={classNames('btn', { 'btn-outline-success': task.status },
              { 'btn-outline-dark': !task.status })}>
            {task.status === true ? 'Completed' : 'Incomplete'}</span>
        </td>
        <td>
          11 AM
        </td>
        <td>
          <div className="dropdown ">
            <p className="dropdown-toggle fas fa-ellipsis-v" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            </p>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#" >
                <p data-backdrop="static" data-keyboard="false" data-toggle="modal" data-target="#myModal" onClick={this.onEdit}>Edit</p>
              </a>
              <a className="dropdown-item" href="#">
                <p onClick={this.onDelete} className="">Delete</p>
              </a>

            </div>
          </div>
        </td>
      </tr>
    );


  }
}
const mapStatetoProps = (state) => {
  return {
    display: state.display,
    tasks: state.tasks
  };
};

const mapDispatchtoProps = (dispatch, props) => {
  return {
    onOpenForm: () => {
      dispatch(actions.openForm());
    },
    onUpdateStatus: (id) => {
      dispatch(actions.updateStatus(id));
    },
    onDeleteTask: (id) => {
      dispatch(actions.deleteTask(id));
    },
    onEditTask: (task) => {
      dispatch(actions.editTask(task));
    },
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(TaskItem);

