import React, { Component} from "react";
import classNames from 'classnames';
import { connect } from 'react-redux';
import * as actions from './../actions/index'
class TaskItem extends Component{
  constructor() {
    super();

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
  render(){
      var {task, id} = this.props;
    return(
        <tr>
            <td>{id}</td>
            <td>{task.taskName}</td>
            <td>
            <span onClick={this.onUpdateStatus} 
            className ={classNames('btn', {'btn-outline-success': task.status}, 
            {'btn-outline-dark': !task.status})}>
            {task.status === true ? 'Kích hoạt' : 'Ẩn'}</span>
            </td>
            <td>
            <button data-backdrop="static" data-keyboard="false" data-toggle="modal" data-target="#myModal" onClick={this.onEdit} className="btn btn-warning" type="submit">Sửa</button>
            <button onClick={this.onDelete} className="btn btn-danger" type="submit">Xóa</button>
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

