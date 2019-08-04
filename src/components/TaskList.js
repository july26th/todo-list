import React, { Component} from "react";
import TaskItem from "./TaskItem";
class TaskList extends Component{
  constructor() {
    super();

  }
  render(){
    var { tasks } = this.props;
    var elmTasks = tasks.map((item, index) => {
      return <TaskItem key={index} id={index} task={item} onEdit={this.props.onEdit}
      onDelete={this.props.onDelete} onUpdateStatus = {this.props.onUpdateStatus} />
    }); 
    return(
        <div className="row">
              <div className="col-md-12">
               <table className="table table-borderd table-hover mt-3">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên</th>
                  <th>Trạng thái</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td>
                    <input type="text" className="form-control" name="filterName"
                    />
                  </td>
                  <td>
                    <select className="form-control" name="filterstatus">
                      <option value={0}>Tất cả</option>
                      <option value={1}>Ẩn</option>
                      <option value={2}>Kích hoạt</option>
                    </select>
                  </td>
                  <td></td>
                </tr>
                
                {elmTasks}
              </tbody>
            </table>
                </div>
        </div>
            
    );
    
   
  }
}

export default TaskList;

