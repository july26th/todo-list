import React, { Component} from "react";
import classNames from 'classnames';
class TaskItem extends Component{
  constructor() {
    super();

  }
  
  onUpdateStatus = () => {
    return this.props.onUpdateStatus(this.props.id);
  }
  onDelete = () => {
    return this.props.onDelete(this.props.id);
  }
  onEdit = () => {
    return this.props.onEdit(this.props.id);
  }
  render(){
      var {task, id} = this.props;
    return(
        <tr>
            <td>{id}</td>
            <td>{task.taskName}</td>
            <td>
            <span onClick={this.onUpdateStatus} className ={classNames('btn', {'btn-outline-success': task.status}, 
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

export default TaskItem;

