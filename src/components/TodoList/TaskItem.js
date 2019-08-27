import React, { Component } from "react";
import classNames from 'classnames';
import { connect } from 'react-redux';
import * as actions from '../../actions/index'
class TaskItem extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  onUpdateStatus = () => {
    return this.props.onUpdateStatus(this.props.task.id);
  }
  onDelete = () => {
    return this.props.onDeleteTask(this.props.id); 
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
    const { task } = this.props;
    const parseDate = new Date(JSON.parse(task.startDate));
    const { sort } = this.props;  
    return (
      <tr>
        <td className="pt-4">  <p>
            <span className={classNames('priority',
            { 'high-prio': task.priority === "High" },
            { 'medium-prio': task.priority === "Medium" },
            { 'low-prio': task.priority === "Low" })}>
            {task.priority}
            </span>
          </p></td>
        <td className="text-left">
          <p>{task.taskName}</p>
          <p className="text-time">{ 
            sort.value === 1 ?
            parseDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
            : parseDate.toLocaleString()
            }</p>
        </td>
        <td className="pt-3">
          <span onClick={this.onUpdateStatus}
            className={classNames('btn', { 'btn-outline-success': task.status },
              { 'btn-outline-dark': !task.status })}>
            {task.status === true ? 'Completed' : 'Incomplete'}</span>
        </td>
  
        <td>
          <div className="dropdown pt-2 ">
            <p className="dropdown-toggle fas fa-ellipsis-v" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            </p>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <span className="dropdown-item"  >
                <p data-backdrop="static" data-keyboard="false" data-toggle="modal" data-target="#myModal" onClick={this.onEdit}>Edit</p>
              </span>
              <span className="dropdown-item" >
                <p onClick={this.onDelete} className="">Delete</p>
              </span>

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
    tasks: state.tasks,
    sort: state.sortTask
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

