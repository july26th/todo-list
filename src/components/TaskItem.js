import React, { Component} from "react";
import classNames from 'classnames';
class TaskItem extends Component{
  constructor() {
    super();

  }
  
  
  render(){
      var {task, id} = this.props;
    return(
        <tr>
            <td>{id}</td>
            <td>{task.name}</td>
            <td>
            <span className ={classNames('btn', {'btn-outline-success': task.status}, 
            {'btn-outline-dark': !task.status})}>
            {task.status === true ? 'Kích hoạt' : 'Ẩn'}</span>
            </td>
            <td>
            <button className="btn btn-warning" type="submit">Sửa</button>
            <button className="btn btn-danger" type="submit">Xóa</button>
            </td>
        </tr>
    );
    
   
  }
}

export default TaskItem;

