import React, { Component} from "react";
import TaskItem from "./TaskItem";
class TaskList extends Component{
  constructor() {
    super();
    this.state = {
      filterName: '',
      filterStatus: -1
    };
  }
  onChange = (event) => {
    var name = event.target.name;
    var value = event.target.value;
    this.setState({
      [name] : value
    });
    this.props.onFilter(name ==='filterName' ? value : this.state.filterName,
      name ==='filterStatus' ? value : this.state.filterStatus)
  }
  render(){
    const { tasks } = this.props;
    const {filterName, filterStatus} = this.state;
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
                    value={filterName} onChange={this.onChange}
                    />
                  </td>
                  <td>
                    <select className="form-control" name="filterStatus"
                    value={filterStatus} onChange={this.onChange} >
                      <option value={-1}>Tất cả</option>
                      <option value={0}>Ẩn</option>
                      <option value={1}>Kích hoạt</option>
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

